import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { BrandingElements } from './brandingElements.js';
import { SlingshotController } from './slingshot.js';
import { createBirdMesh, createTargetMesh, createBlockMesh } from './entities.js';

export class GameScene {
  constructor({
    container,
    storage,
    audio,
    onStatsChange,
    onAimUpdate,
    onAimEnd,
    onShowAbilityPrompt,
    onHideAbilityPrompt,
    onToast,
    onLevelComplete
  }) {
    this.container = container;
    this.storage = storage;
    this.audio = audio;
    this.onStatsChange = onStatsChange;
    this.onAimUpdate = onAimUpdate;
    this.onAimEnd = onAimEnd;
    this.onShowAbilityPrompt = onShowAbilityPrompt;
    this.onHideAbilityPrompt = onHideAbilityPrompt;
    this.onToast = onToast;
    this.onLevelComplete = onLevelComplete;

    // Collections of active physics/visual objects
    this.blocks = [];
    this.targets = [];
    this.particles = [];
    this.waitingBirdMeshes = [];
    this.birdsQueue = [];

    this.activeBird = null; // { mesh, body, type, abilityUsed, launchTime }
    this.currentLevel = null;
    this.score = 0;
    this.levelCoinsEarned = 0;
    this.isPlayingLevel = false;
    this.levelResolved = false;
    this.isPaused = false;

    this.clock = new THREE.Clock();

    this.initThree();
    this.initPhysics();
    this.buildEnvironment();

    this.branding = new BrandingElements(this.scene, this.storage.getBrandName());

    this.slingshot = new SlingshotController({
      scene: this.scene,
      camera: this.camera,
      domElement: this.renderer.domElement,
      audio: this.audio,
      onAimUpdate: (power, angle) => this.onAimUpdate?.(power, angle),
      onAimEnd: () => this.onAimEnd?.(),
      onLaunch: (pos, vel) => this.handleBirdLaunch(pos, vel),
      onFlightTap: () => this.triggerBirdAbility()
    });

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.onResize(), 150);
      setTimeout(() => this.onResize(), 350);
    });
    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(() => this.onResize(), 150);
      });
    }
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => this.onResize());
    }

    this.animate();
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x4da8e0);
    // Subtle atmospheric fog for anime depth — barely visible on gameplay, softens distant 3D hills
    this.scene.fog = new THREE.FogExp2(0xb8daf0, 0.003);

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    const aspect = width / height;

    // Low-FOV (28°) telephoto framing eliminates wide-angle 3D perspective distortion
    // while keeping the entire 2D/3D hybrid arena stationary in view.
    this.camera = new THREE.PerspectiveCamera(28, aspect, 1.0, 160);
    this.stationaryLookAt = new THREE.Vector3(1.0, 4.2, 0.0);
    this.stationaryCameraPos = new THREE.Vector3(1.0, 4.2, 42.0);
    this.updateStationaryCameraPosition(aspect);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;

    this.container.appendChild(this.renderer.domElement);

    // Balanced studio + outdoor lighting to highlight 3D sculpted character geometry & glass orbs
    const hemiLight = new THREE.HemisphereLight(0xf0f9ff, 0x1e293b, 0.95);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xfff5e0, 1.55);
    dirLight.position.set(-8, 32, 28);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 2;
    dirLight.shadow.camera.far = 130;
    const d = 38;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    this.scene.add(dirLight);

    // Subtle front-right fill light so sculpted faces and eyes pop with 3D depth
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.55);
    fillLight.position.set(14, 10, 20);
    this.scene.add(fillLight);
  }

  /**
   * Automatically calculates the total bounding box of the current level's structure,
   * targets, slingshot, and player bird queue.
   */
  computeLevelBoundingBox(levelConfig) {
    // Default bounds encompass whole playable arena: slingshot zone (-18 to -10) + fortress zone (8 to 16.5)
    let minX = -18.5; // waiting birds at x = -16.5
    let maxX = 16.5;  // fortress region default
    let minY = 0.0;   // ground surface
    let maxY = 8.0;   // structure height default

    if (levelConfig?.blocks && levelConfig.blocks.length > 0) {
      minX = -18.5;
      maxX = 12.0;
      minY = 0.0;
      maxY = 6.0;
      levelConfig.blocks.forEach((b) => {
        const hx = (b.size?.[0] || 1.0) / 2;
        const hy = (b.size?.[1] || 1.0) / 2;
        minX = Math.min(minX, b.pos[0] - hx);
        maxX = Math.max(maxX, b.pos[0] + hx);
        minY = Math.min(minY, b.pos[1] - hy);
        maxY = Math.max(maxY, b.pos[1] + hy);
      });
    }

    if (levelConfig?.targets && levelConfig.targets.length > 0) {
      levelConfig.targets.forEach((t) => {
        const r = t.radius || 0.75;
        minX = Math.min(minX, t.pos[0] - r);
        maxX = Math.max(maxX, t.pos[0] + r);
        minY = Math.min(minY, t.pos[1] - r);
        maxY = Math.max(maxY, t.pos[1] + r);
      });
    }

    return {
      minX,
      maxX: Math.max(13.0, maxX),
      minY: Math.min(0, minY),
      maxY: Math.max(7.5, maxY)
    };
  }

  /**
   * Dynamic Camera System:
   * Automatically calculates the total bounding box of the current level's structure.
   * Adjusts camera distance (moves further back on Z-axis) and FOV so that the entire
   * structure, slingshot, and ground are always fully visible regardless of size.
   */
  updateDynamicCamera(aspect) {
    const safeAspect = Math.max(0.65, aspect || 1.77);
    const bbox = this.computeLevelBoundingBox(this.currentLevel);

    // Padding around the bounding box (safe room for HUD, trajectory arc, and collapsing debris)
    const padLeft = 2.8;
    const padRight = 3.8;
    const padBottom = 2.0;
    const padTop = 3.8;

    const totalWidth = (bbox.maxX - bbox.minX) + padLeft + padRight;
    const totalHeight = (bbox.maxY - bbox.minY) + padBottom + padTop;

    const centerX = (bbox.minX + bbox.maxX) / 2 + (padRight - padLeft) / 2;
    const centerY = (bbox.minY + bbox.maxY) / 2 + (padTop - padBottom) / 2;

    // Fixed low-distortion FOV (28°) for pure 2D/3D hybrid gameplay
    this.camera.fov = 28;
    this.camera.aspect = safeAspect;
    const halfAngleTan = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));

    const zForWidth = totalWidth / (2 * halfAngleTan * safeAspect);
    const zForHeight = totalHeight / (2 * halfAngleTan);
    const targetZ = Math.max(38.0, Math.max(zForWidth, zForHeight));

    this.stationaryLookAt.set(centerX, Math.max(3.6, centerY), 0.0);
    this.stationaryCameraPos.set(centerX, Math.max(4.2, centerY + 0.4), targetZ);

    this.camera.position.copy(this.stationaryCameraPos);
    this.camera.lookAt(this.stationaryLookAt);
    this.camera.updateProjectionMatrix();
  }

  // Alias for backward compatibility
  updateStationaryCameraPosition(aspect) {
    this.updateDynamicCamera(aspect);
  }

  initPhysics() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -18.0, 0);
    this.world.allowSleep = true;
    this.world.solver.iterations = 35;

    this.defaultMaterial = new CANNON.Material('default');
    const contactMat = new CANNON.ContactMaterial(this.defaultMaterial, this.defaultMaterial, {
      friction: 0.85,
      restitution: 0.01,
      contactEquationStiffness: 1e8,
      contactEquationRelaxation: 4,
      frictionEquationStiffness: 1e7
    });
    this.world.defaultContactMaterial = contactMat;

    // Ground physics plane at y = 0
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
      material: this.defaultMaterial
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(groundBody);
  }

  /**
   * Immediately awakens all active blocks and targets in the physics world so that
   * realistic gravity and collision impulses propagate without freezing in mid-air.
   */
  wakeAllStructures() {
    for (let i = 0; i < this.blocks.length; i++) {
      const b = this.blocks[i];
      if (!b.destroyed && b.body) {
        b.body.wakeUp();
      }
    }
    for (let i = 0; i < this.targets.length; i++) {
      const t = this.targets[i];
      if (!t.destroyed && t.body) {
        t.body.wakeUp();
      }
    }
  }

  buildEnvironment() {
    // Main grassy game stage (expanded to 88 units width for grand structures)
    const grassGeo = new THREE.BoxGeometry(88, 2.0, 16);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.82
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.position.set(1.5, -1.0, 0);
    grassMesh.receiveShadow = true;
    this.scene.add(grassMesh);

    // Clean front trim bevel along the grass edge for a crisp 2D/3D hybrid stage look
    const trimGeo = new THREE.BoxGeometry(88.4, 0.35, 16.2);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.78
    });
    const trimMesh = new THREE.Mesh(trimGeo, trimMat);
    trimMesh.position.set(1.5, -0.18, 0);
    this.scene.add(trimMesh);

    // Sub-surface rocky foundation under the stage
    const cliffGeo = new THREE.BoxGeometry(84, 10.0, 15);
    const cliffMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.9
    });
    const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
    cliffMesh.position.set(1.5, -6.8, 0);
    this.scene.add(cliffMesh);

    // Fortress stone foundation pad on the right side
    const padMesh = new THREE.Mesh(
      new THREE.BoxGeometry(24.0, 0.12, 6.0),
      new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.78 })
    );
    padMesh.position.set(13.5, 0.04, 0);
    padMesh.receiveShadow = true;
    this.scene.add(padMesh);
  }

  updateBrandName(brandName) {
    this.branding?.updateBrandName(brandName);
  }

  toggleCameraView() {
    // Camera framing dynamically adapts to level structure size
  }

  /**
   * Loads a level's 3D blocks, enemy targets, and bird queue.
   */
  loadLevel(levelConfig, isMenuPreview = false) {
    this.clearLevelEntities();

    this.currentLevel = levelConfig;
    this.isPlayingLevel = !isMenuPreview;
    this.isPaused = false;
    this.hasBirdLaunched = false;
    this.world.allowSleep = true;
    this.levelResolved = false;
    this.score = 0;
    this.levelCoinsEarned = 0;
    this.birdsQueue = [...levelConfig.birds];

    // 1. Spawn Blocks (strictly on z = 0 plane)
    levelConfig.blocks.forEach((bCfg) => {
      this.spawnBlock(bCfg);
    });

    // 2. Spawn Enemy Targets (strictly on z = 0 plane)
    levelConfig.targets.forEach((tCfg) => {
      this.spawnTarget(tCfg);
    });

    // 3. Prepare Bird Queue & Active Slingshot Bird
    this.prepareNextBird();
    this.emitHudStats();

    // 4. Dynamically compute the total bounding box and frame the entire structure
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.updateDynamicCamera(width / Math.max(1, height));
  }

  clearLevelEntities() {
    if (this.activeBird) {
      this.scene.remove(this.activeBird.mesh);
      if (this.activeBird.body) {
        this.world.removeBody(this.activeBird.body);
      }
      this.activeBird = null;
    }

    this.waitingBirdMeshes.forEach((m) => this.scene.remove(m));
    this.waitingBirdMeshes = [];

    this.blocks.forEach((b) => {
      this.scene.remove(b.mesh);
      this.world.removeBody(b.body);
    });
    this.blocks = [];

    this.targets.forEach((t) => {
      this.scene.remove(t.mesh);
      this.world.removeBody(t.body);
    });
    this.targets = [];

    this.particles.forEach((p) => this.scene.remove(p.mesh));
    this.particles = [];

    this.onHideAbilityPrompt?.();
  }

  spawnBlock(cfg) {
    const { type, pos, size } = cfg;
    const alignedPos = [pos[0], pos[1], 0];
    const mesh = createBlockMesh(type, size);
    mesh.position.set(...alignedPos);
    this.scene.add(mesh);

    const halfExtents = new CANNON.Vec3(size[0] / 2, size[1] / 2, size[2] / 2);
    const massMap = {
      glass: 1.8,
      wood: 3.8,
      coin: 2.6,
      tnt: 2.4,
      stone: 6.8
    };
    const hpMap = {
      glass: 28,
      coin: 35,
      tnt: 20,
      wood: 68,
      stone: 135
    };

    const body = new CANNON.Body({
      mass: massMap[type] || 3.8,
      shape: new CANNON.Box(halfExtents),
      position: new CANNON.Vec3(...alignedPos),
      material: this.defaultMaterial,
      linearDamping: 0.04,
      angularDamping: 0.08,
      // Constrain block physics strictly to the 2D XY plane
      linearFactor: new CANNON.Vec3(1, 1, 0),
      angularFactor: new CANNON.Vec3(0, 0, 1)
    });

    // Start settled on initial load; wakes up dynamically during gameplay
    body.sleepSpeedLimit = 0.1;
    body.sleepTimeLimit = 0.8;
    body.sleep();

    const maxHp = hpMap[type] || 68;
    const blockObj = {
      type,
      size,
      mesh,
      body,
      maxHp,
      hp: maxHp,
      destroyed: false,
      lastHitTime: 0
    };

    body.addEventListener('collide', (event) => {
      if (!this.isPlayingLevel || blockObj.destroyed || !this.hasBirdLaunched) return;

      const isBirdHit = event.body === this.activeBird?.body;
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      const now = performance.now();

      // Debounce micro-contacts within 110ms (prevents multi-step iteration over-damage)
      if (now - blockObj.lastHitTime < 110) {
        return;
      }

      // Direct impact from player bird
      if (isBirdHit) {
        // Light graze or glancing collision (< 2.6 normal impact) deals zero damage
        if (normalImpact < 2.6) {
          this.audio?.playImpact(0.18);
          return;
        }

        blockObj.lastHitTime = now;

        const birdType = this.activeBird?.type || 'red';
        let birdMultiplier = 1.0;
        if (birdType === 'speed') {
          birdMultiplier = blockObj.type === 'glass' ? 2.2 : 0.95;
        } else if (birdType === 'heavy') {
          birdMultiplier = blockObj.type === 'stone' ? 2.4 : 2.0;
        }

        // Damage derived from normal impact collision force
        const effectiveImpact = normalImpact - 1.8;
        const dmg = effectiveImpact * 2.1 * birdMultiplier;

        if (dmg > 1.0) {
          this.audio?.playImpact(Math.min(1.0, dmg * 0.06));
          blockObj.hp -= dmg;

          // Visual crack & stress feedback (darken slightly as it takes heavy structural damage)
          if (blockObj.mesh?.material && !blockObj.isDamagedTinted) {
            if (blockObj.hp < blockObj.maxHp * 0.55) {
              blockObj.isDamagedTinted = true;
              if (blockObj.mesh.material.color) {
                blockObj.mesh.material.color.multiplyScalar(0.78);
              }
            }
          }

          if (blockObj.hp <= 0) {
            this.destroyBlock(blockObj);
          }
        }
      } else if (normalImpact >= 9.0) {
        // Only high-velocity violent falls or heavy direct crushes damage blocks (prevents normal leaning from collapsing towers)
        blockObj.lastHitTime = now;
        this.audio?.playImpact(Math.min(1.0, normalImpact * 0.06));
        const debrisDmg = (normalImpact - 7.5) * 1.8;
        blockObj.hp -= debrisDmg;
        if (blockObj.hp <= 0) {
          this.destroyBlock(blockObj);
        }
      }
    });

    this.world.addBody(body);
    this.blocks.push(blockObj);
  }

  spawnTarget(cfg) {
    const { pos, radius = 0.75, isBoss = false } = cfg;
    const alignedPos = [pos[0], pos[1], 0];
    const mesh = createTargetMesh(radius, isBoss);
    mesh.position.set(...alignedPos);
    // Face directly toward the 2D camera
    mesh.rotation.set(0, 0, 0);
    this.scene.add(mesh);

    const body = new CANNON.Body({
      mass: isBoss ? 3.0 : 1.8,
      shape: new CANNON.Sphere(radius),
      position: new CANNON.Vec3(...alignedPos),
      material: this.defaultMaterial,
      linearDamping: 0.08,
      angularDamping: 0.15,
      // Constrain target movement strictly to the 2D plane
      linearFactor: new CANNON.Vec3(1, 1, 0),
      angularFactor: new CANNON.Vec3(0, 0, 1)
    });
    body.sleepSpeedLimit = 0.1;
    body.sleepTimeLimit = 0.8;
    body.sleep();

    const targetObj = {
      mesh,
      body,
      radius,
      isBoss,
      hp: isBoss ? 24 : 14,
      destroyed: false,
      lastHitTime: 0
    };

    body.addEventListener('collide', (event) => {
      if (!this.isPlayingLevel || targetObj.destroyed || !this.hasBirdLaunched) return;

      const isBirdHit = event.body === this.activeBird?.body;
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      const now = performance.now();

      if (now - targetObj.lastHitTime < 100) {
        return;
      }

      if (isBirdHit) {
        if (normalImpact < 2.0) return;
        targetObj.lastHitTime = now;
        const dmg = (normalImpact - 1.2) * 2.8;
        if (dmg > 1.0) {
          targetObj.hp -= dmg;
          if (targetObj.hp <= 0) {
            this.defeatTarget(targetObj);
          }
        }
      } else if (normalImpact >= 4.8) {
        // Crushed by heavy falling debris or toppling beams
        targetObj.lastHitTime = now;
        targetObj.hp -= (normalImpact - 3.4) * 3.0;
        if (targetObj.hp <= 0) {
          this.defeatTarget(targetObj);
        }
      }
    });

    this.world.addBody(body);
    this.targets.push(targetObj);
  }

  prepareNextBird() {
    this.waitingBirdMeshes.forEach((m) => this.scene.remove(m));
    this.waitingBirdMeshes = [];

    if (this.birdsQueue.length === 0) {
      this.activeBird = null;
      return;
    }

    const nextType = this.birdsQueue[0];
    const birdMesh = createBirdMesh(nextType);
    this.scene.add(birdMesh);

    this.activeBird = {
      type: nextType,
      mesh: birdMesh,
      body: null,
      abilityUsed: false,
      launchTime: 0
    };

    this.slingshot.mountBird(birdMesh);
    if (!this.isPlayingLevel) {
      this.slingshot.canInteract = false;
    }

    // Render remaining birds lined up behind the slingshot strictly on z = 0
    for (let i = 1; i < this.birdsQueue.length; i++) {
      const wMesh = createBirdMesh(this.birdsQueue[i]);
      const r = wMesh.userData.radius || 0.68;
      wMesh.position.set(-14.6 - (i - 1) * 1.65, r, 0.0);
      wMesh.rotation.set(0, 0, 0);
      this.scene.add(wMesh);
      this.waitingBirdMeshes.push(wMesh);
    }
  }

  handleBirdLaunch(launchPos, velocity) {
    if (!this.activeBird) return;
    this.hasBirdLaunched = true;

    const radius = this.activeBird.mesh.userData.radius || 0.68;
    const mass = this.activeBird.type === 'heavy' ? 5.6 : 2.8;

    const body = new CANNON.Body({
      mass,
      shape: new CANNON.Sphere(radius),
      position: new CANNON.Vec3(launchPos.x, launchPos.y, 0),
      velocity: new CANNON.Vec3(velocity.x, velocity.y, 0),
      material: this.defaultMaterial,
      // Matches SlingshotController.birdLinearDamping = 0.01 for 100% accurate trajectory
      linearDamping: 0.01,
      angularDamping: 0.08,
      // Lock launched bird strictly to the z = 0 plane so it hits targets squarely
      linearFactor: new CANNON.Vec3(1, 1, 0),
      angularFactor: new CANNON.Vec3(0, 0, 1)
    });

    // Ensure full dynamic simulation is running and all bodies respond to active gravity
    this.world.allowSleep = false;
    this.wakeAllStructures();

    this.world.addBody(body);
    this.activeBird.body = body;
    this.activeBird.launchTime = performance.now();

    if (this.activeBird.type === 'speed') {
      this.onShowAbilityPrompt?.('⚡ Tap or Click in mid-flight for Turbo Speed Boost!');
    } else if (this.activeBird.type === 'heavy') {
      this.onShowAbilityPrompt?.('💣 Tap or Click in mid-flight for Meteor Slam!');
    }
  }

  triggerBirdAbility() {
    if (!this.activeBird || !this.activeBird.body || this.activeBird.abilityUsed) return;

    if (this.activeBird.type === 'speed') {
      this.activeBird.abilityUsed = true;
      this.audio?.playBoost();
      this.activeBird.body.velocity.x *= 1.75;
      this.activeBird.body.velocity.y *= 1.1;
      this.spawnBurstParticles(this.activeBird.mesh.position, 0x38bdf8, 16);
      this.onHideAbilityPrompt?.();
    } else if (this.activeBird.type === 'heavy') {
      this.activeBird.abilityUsed = true;
      this.audio?.playBoost();
      this.activeBird.body.velocity.x *= 1.2;
      this.activeBird.body.velocity.y = -22.0;
      this.spawnBurstParticles(this.activeBird.mesh.position, 0xd946ef, 18);
      this.onHideAbilityPrompt?.();
    }
  }

  destroyBlock(blockObj) {
    if (blockObj.destroyed) return;
    blockObj.destroyed = true;

    const pos = blockObj.mesh.position.clone();
    const halfWidth = (blockObj.size?.[0] || 1.0) / 2;
    const halfHeight = (blockObj.size?.[1] || 1.0) / 2;

    this.scene.remove(blockObj.mesh);
    this.world.removeBody(blockObj.body);
    this.blocks = this.blocks.filter((b) => b !== blockObj);

    // CRITICAL: Wake up all structures in the physics world so gravity acts immediately
    this.wakeAllStructures();

    // Specifically for blocks directly above or resting on this block, give them an immediate gravity nudge
    this.blocks.forEach((b) => {
      if (!b.destroyed && b.body) {
        b.body.wakeUp();
        const bHalfWidth = (b.size?.[0] || 1.0) / 2;
        const horizOverlap = Math.abs(b.body.position.x - pos.x) < (halfWidth + bHalfWidth + 0.3);
        const isAbove = b.body.position.y > pos.y - halfHeight;
        if (isAbove && horizOverlap) {
          if (b.body.velocity.y > -0.5) {
            b.body.velocity.y = -1.5;
          }
        }
      }
    });

    this.targets.forEach((t) => {
      if (!t.destroyed && t.body) {
        t.body.wakeUp();
        const horizOverlap = Math.abs(t.body.position.x - pos.x) < (halfWidth + (t.radius || 0.75) + 0.3);
        const isAbove = t.body.position.y > pos.y - halfHeight;
        if (isAbove && horizOverlap) {
          if (t.body.velocity.y > -0.5) {
            t.body.velocity.y = -1.5;
          }
        }
      }
    });

    if (blockObj.type === 'coin') {
      this.audio?.playCoin();
      this.score += 300;
      const bonusCoins = 35;
      this.levelCoinsEarned += bonusCoins;
      this.storage.addCoins(bonusCoins);
      this.onToast?.(`+${bonusCoins} Coins! 🪙 Treasure Crate Smashed`);
      this.spawnBurstParticles(pos, 0xfbbf24, 22);
    } else if (blockObj.type === 'tnt') {
      this.detonateTNT(pos);
    } else {
      this.score += 120;
      const colorMap = { wood: 0xc27838, stone: 0x64748b, glass: 0x7dd3fc };
      this.spawnBurstParticles(pos, colorMap[blockObj.type] || 0xc27838, 12);
    }

    this.emitHudStats();
  }

  detonateTNT(origin) {
    this.audio?.playExplosion();
    this.score += 400;
    this.onToast?.('💥 BOOM! TNT Detonated!');
    this.spawnBurstParticles(origin, 0xef4444, 32);
    this.spawnBurstParticles(origin, 0xfbbf24, 18);

    // Awaken entire fortress
    this.wakeAllStructures();

    const blastRadius = 7.2;
    const blastForce = 44.0;

    // Push and damage nearby blocks
    [...this.blocks].forEach((b) => {
      if (b.destroyed) return;
      const bPos = b.mesh.position;
      const dist = origin.distanceTo(bPos);
      if (dist < blastRadius) {
        b.body.wakeUp();
        const dir = bPos.clone().sub(origin).normalize();
        const strength = (1 - dist / blastRadius) * blastForce;
        b.body.applyImpulse(new CANNON.Vec3(dir.x * strength, (dir.y + 0.45) * strength, 0));
        b.hp -= (1 - dist / blastRadius) * 140;
        if (b.hp <= 0) {
          this.destroyBlock(b);
        }
      }
    });

    // Push and damage nearby targets
    [...this.targets].forEach((t) => {
      if (t.destroyed) return;
      const tPos = t.mesh.position;
      const dist = origin.distanceTo(tPos);
      if (dist < blastRadius) {
        t.body.wakeUp();
        t.hp -= (1 - dist / blastRadius) * 50;
        if (t.hp <= 0) {
          this.defeatTarget(t);
        }
      }
    });
  }

  defeatTarget(targetObj) {
    if (targetObj.destroyed) return;
    targetObj.destroyed = true;

    const pos = targetObj.mesh.position.clone();
    this.scene.remove(targetObj.mesh);
    this.world.removeBody(targetObj.body);
    this.targets = this.targets.filter((t) => t !== targetObj);

    // Awaken structures so anything supported by this target falls naturally
    this.wakeAllStructures();

    this.audio?.playTargetPop();
    const pts = targetObj.isBoss ? 1000 : 500;
    const coinBounty = targetObj.isBoss ? 30 : 15;
    this.score += pts;
    this.levelCoinsEarned += coinBounty;
    this.storage.addCoins(coinBounty);

    this.onToast?.(`🎯 Target Eliminated! +${pts} pts (+${coinBounty} 🪙)`);
    this.spawnBurstParticles(pos, 0x38bdf8, 24);
    this.emitHudStats();
  }

  spawnBurstParticles(origin, colorHex, count = 18) {
    const geo = new THREE.BoxGeometry(0.24, 0.24, 0.24);
    const mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.45 });

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      const scale = 0.5 + Math.random() * 0.9;
      mesh.scale.set(scale, scale, scale);
      mesh.position.copy(origin);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 11,
        Math.random() * 8 + 2,
        (Math.random() - 0.5) * 4
      );
      this.scene.add(mesh);
      this.particles.push({ mesh, vel, life: 1.0 });
    }
  }

  emitHudStats() {
    this.onStatsChange?.({
      targetsLeft: this.targets.length,
      birdsQueue: this.birdsQueue,
      score: this.score
    });
  }

  checkShotAndLevelState() {
    if (!this.isPlayingLevel || this.levelResolved) return;

    // Eliminate any blocks or targets that fell off the stage
    [...this.targets].forEach((t) => {
      if (t.body.position.y < -1.2 || Math.abs(t.body.position.x) > 30) {
        this.defeatTarget(t);
      }
    });

    [...this.blocks].forEach((b) => {
      if (b.body.position.y < -1.8) {
        this.destroyBlock(b);
      }
    });

    // Check immediate Victory if all targets are eliminated
    if (this.targets.length === 0) {
      this.levelResolved = true;
      this.onHideAbilityPrompt?.();

      const unusedBirds = Math.max(
        0,
        this.activeBird && this.activeBird.body ? this.birdsQueue.length - 1 : this.birdsQueue.length
      );
      const birdBonus = unusedBirds * 1000;
      this.score += birdBonus;

      const stageReward = this.currentLevel.coinReward || 100;
      this.levelCoinsEarned += stageReward;

      const starsEarned = unusedBirds >= 2 ? 3 : unusedBirds === 1 ? 2 : 1;

      setTimeout(() => {
        this.audio?.playVictory();
        this.onLevelComplete?.({
          won: true,
          levelId: this.currentLevel.id,
          score: this.score,
          coinsEarned: this.levelCoinsEarned,
          starsEarned
        });
      }, 900);
      return;
    }

    // Check if the currently launched bird has finished its flight
    if (this.activeBird && this.activeBird.body) {
      const bBody = this.activeBird.body;
      const speed = bBody.velocity.length();
      const flightDuration = (performance.now() - this.activeBird.launchTime) / 1000;
      const outOfBounds =
        bBody.position.y < -1.8 || bBody.position.x > 28 || bBody.position.x < -24;

      if (outOfBounds || (flightDuration > 1.1 && speed < 0.45) || flightDuration > 5.0) {
        this.onHideAbilityPrompt?.();
        this.scene.remove(this.activeBird.mesh);
        this.world.removeBody(this.activeBird.body);
        this.activeBird = null;

        // Consume the launched bird from the queue
        this.birdsQueue.shift();
        this.emitHudStats();

        if (this.birdsQueue.length > 0) {
          this.prepareNextBird();
        } else {
          this.levelResolved = true;
          setTimeout(() => {
            if (this.targets.length === 0) {
              this.audio?.playVictory();
              const stageReward = this.currentLevel.coinReward || 100;
              this.levelCoinsEarned += stageReward;
              this.onLevelComplete?.({
                won: true,
                levelId: this.currentLevel.id,
                score: this.score,
                coinsEarned: this.levelCoinsEarned,
                starsEarned: 1
              });
            } else {
              this.onLevelComplete?.({
                won: false,
                levelId: this.currentLevel.id,
                score: this.score,
                coinsEarned: this.levelCoinsEarned,
                starsEarned: 0
              });
            }
          }, 1400);
        }
      }
    }
  }

  onResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    const aspect = width / Math.max(1, height);
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.updateDynamicCamera(aspect);
  }

  pause() {
    this.isPaused = true;
    if (this.slingshot) {
      this.slingshot.canInteract = false;
    }
  }

  resume() {
    this.isPaused = false;
    if (this.slingshot && !this.levelResolved && this.birdsQueue.length > 0 && !this.activeBird) {
      this.slingshot.canInteract = true;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.isPaused) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    const deltaTime = Math.min(this.clock.getDelta(), 0.05);

    // Step physics world with fixed 60Hz substeps for deterministic trajectory accuracy
    this.world.step(1 / 60, deltaTime, 4);

    // Sync active launched bird mesh with physics body strictly on z = 0 plane
    if (this.activeBird && this.activeBird.body) {
      this.activeBird.mesh.position.set(
        this.activeBird.body.position.x,
        this.activeBird.body.position.y,
        0
      );
      this.activeBird.body.position.z = 0;
      this.activeBird.body.velocity.z = 0;
      this.activeBird.mesh.quaternion.copy(this.activeBird.body.quaternion);
    }

    // Sync blocks strictly on z = 0 plane
    this.blocks.forEach((b) => {
      b.mesh.position.set(b.body.position.x, b.body.position.y, 0);
      b.body.position.z = 0;
      b.body.velocity.z = 0;
      b.mesh.quaternion.copy(b.body.quaternion);
    });

    // Sync targets strictly on z = 0 plane
    this.targets.forEach((t) => {
      t.mesh.position.set(t.body.position.x, t.body.position.y, 0);
      t.body.position.z = 0;
      t.body.velocity.z = 0;
      t.mesh.quaternion.copy(t.body.quaternion);
    });

    // Active structural gravity guarantee: prevent any airborne block or target from freezing asleep
    if (this.isPlayingLevel && !this.levelResolved) {
      for (let i = 0; i < this.blocks.length; i++) {
        const b = this.blocks[i];
        if (b.body && b.body.sleepState === CANNON.Body.SLEEPING) {
          if (b.body.position.y > 0.6) {
            b.body.wakeUp();
          }
        }
      }
      for (let i = 0; i < this.targets.length; i++) {
        const t = this.targets[i];
        if (t.body && t.body.sleepState === CANNON.Body.SLEEPING) {
          if (t.body.position.y > 0.8) {
            t.body.wakeUp();
          }
        }
      }
    }

    // Update explosion / debris particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime * 1.5;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.particles.splice(i, 1);
      } else {
        p.vel.y -= 18 * deltaTime;
        p.mesh.position.addScaledVector(p.vel, deltaTime);
        p.mesh.rotation.x += 4 * deltaTime;
        p.mesh.rotation.y += 5 * deltaTime;
        p.mesh.scale.setScalar(p.life);
      }
    }

    // Evaluate shot & win/loss conditions
    this.checkShotAndLevelState();

    // Animate anime environment (drifting clouds, falling cherry blossom petals)
    const elapsedTime = this.clock.elapsedTime;
    this.branding?.update(elapsedTime, deltaTime);

    // Render stationary camera frame
    this.renderer.render(this.scene, this.camera);
  }
}
