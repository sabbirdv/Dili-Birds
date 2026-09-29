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
    dirLight.position.set(-8, 24, 22);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 2;
    dirLight.shadow.camera.far = 75;
    const d = 24;
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
   * Computes a fixed, completely stationary camera position that frames both the slingshot
   * on the left (x = -15.5) and the fortress on the right (x = +18.0) without distortion.
   */
  updateStationaryCameraPosition(aspect) {
    const baseZ = 42.5;
    const adjustedZ = aspect < 1.65 ? baseZ * (1.65 / Math.max(0.85, aspect)) : baseZ;
    this.stationaryCameraPos = new THREE.Vector3(1.0, 4.8, adjustedZ);
    this.camera.position.copy(this.stationaryCameraPos);
    this.camera.lookAt(this.stationaryLookAt);
  }

  initPhysics() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -18.0, 0);
    this.world.allowSleep = true;
    this.world.solver.iterations = 18;

    this.defaultMaterial = new CANNON.Material('default');
    const contactMat = new CANNON.ContactMaterial(this.defaultMaterial, this.defaultMaterial, {
      friction: 0.5,
      restitution: 0.15
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

  buildEnvironment() {
    // Main grassy game stage (top surface flush at y = 0)
    const grassGeo = new THREE.BoxGeometry(52, 1.8, 12);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.82
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.position.set(1, -0.9, 0);
    grassMesh.receiveShadow = true;
    this.scene.add(grassMesh);

    // Clean front trim bevel along the grass edge for a crisp 2D/3D hybrid stage look
    const trimGeo = new THREE.BoxGeometry(52, 0.35, 12.2);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.78
    });
    const trimMesh = new THREE.Mesh(trimGeo, trimMat);
    trimMesh.position.set(1, -0.18, 0);
    this.scene.add(trimMesh);

    // Sub-surface rocky foundation under the stage
    const cliffGeo = new THREE.BoxGeometry(50, 8.0, 11);
    const cliffMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.9
    });
    const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
    cliffMesh.position.set(1, -5.8, 0);
    this.scene.add(cliffMesh);

    // Fortress stone foundation pad on the right side
    const padMesh = new THREE.Mesh(
      new THREE.BoxGeometry(13.5, 0.12, 4.8),
      new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.78 })
    );
    padMesh.position.set(12.5, 0.04, 0);
    padMesh.receiveShadow = true;
    this.scene.add(padMesh);
  }

  updateBrandName(brandName) {
    this.branding?.updateBrandName(brandName);
  }

  toggleCameraView() {
    // Camera remains stationary during gameplay per design specification
  }

  /**
   * Loads a level's 3D blocks, enemy targets, and bird queue.
   */
  loadLevel(levelConfig, isMenuPreview = false) {
    this.clearLevelEntities();

    this.currentLevel = levelConfig;
    this.isPlayingLevel = !isMenuPreview;
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
      glass: 1.1,
      wood: 2.0,
      coin: 1.6,
      tnt: 1.8,
      stone: 4.0
    };
    const hpMap = {
      glass: 9,
      coin: 10,
      tnt: 8,
      wood: 20,
      stone: 38
    };

    const body = new CANNON.Body({
      mass: massMap[type] || 2.0,
      shape: new CANNON.Box(halfExtents),
      position: new CANNON.Vec3(...alignedPos),
      material: this.defaultMaterial,
      linearDamping: 0.06,
      angularDamping: 0.12,
      // Constrain block physics strictly to the 2D/3D hybrid XY plane
      linearFactor: new CANNON.Vec3(1, 1, 0),
      angularFactor: new CANNON.Vec3(0, 0, 1)
    });

    // Start asleep so the tower stays completely still until hit
    body.sleepSpeedLimit = 0.22;
    body.sleepTimeLimit = 0.35;
    body.sleep();

    const blockObj = {
      type,
      size,
      mesh,
      body,
      hp: hpMap[type] || 20,
      destroyed: false
    };

    body.addEventListener('collide', (event) => {
      if (!this.isPlayingLevel || blockObj.destroyed) return;
      const impact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      if (impact > 2.2) {
        this.audio?.playImpact(impact * 0.25);
        blockObj.hp -= impact * 1.85;
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
    // Angle slightly toward the slingshot (-0.18 rad) while facing the camera so 3D heart eyes & tufts shine
    mesh.rotation.set(0, -0.18, 0);
    this.scene.add(mesh);

    const body = new CANNON.Body({
      mass: isBoss ? 2.4 : 1.5,
      shape: new CANNON.Sphere(radius),
      position: new CANNON.Vec3(...alignedPos),
      material: this.defaultMaterial,
      linearDamping: 0.12,
      angularDamping: 0.22,
      // Constrain target movement strictly to the z = 0 gameplay plane
      linearFactor: new CANNON.Vec3(1, 1, 0),
      angularFactor: new CANNON.Vec3(0, 0, 1)
    });
    body.sleepSpeedLimit = 0.22;
    body.sleepTimeLimit = 0.35;
    body.sleep();

    const targetObj = {
      mesh,
      body,
      radius,
      isBoss,
      hp: isBoss ? 15 : 8.5,
      destroyed: false
    };

    body.addEventListener('collide', (event) => {
      if (!this.isPlayingLevel || targetObj.destroyed) return;
      const impact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      if (impact > 1.6) {
        targetObj.hp -= impact * 2.4;
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

    // Render remaining birds lined up behind the slingshot
    for (let i = 1; i < this.birdsQueue.length; i++) {
      const wMesh = createBirdMesh(this.birdsQueue[i]);
      const r = wMesh.userData.radius || 0.68;
      wMesh.position.set(-14.6 - (i - 1) * 1.65, r, 0.35);
      wMesh.rotation.set(0, 0.25, 0);
      this.scene.add(wMesh);
      this.waitingBirdMeshes.push(wMesh);
    }
  }

  handleBirdLaunch(launchPos, velocity) {
    if (!this.activeBird) return;

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

    // Wake up all blocks and targets when a bird launches so collisions respond instantaneously
    this.blocks.forEach((b) => b.body.wakeUp());
    this.targets.forEach((t) => t.body.wakeUp());

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
    this.scene.remove(blockObj.mesh);
    this.world.removeBody(blockObj.body);
    this.blocks = this.blocks.filter((b) => b !== blockObj);

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

    const blastRadius = 6.8;
    const blastForce = 36.0;

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
        b.hp -= (1 - dist / blastRadius) * 34;
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
        t.hp -= (1 - dist / blastRadius) * 30;
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

    this.audio?.playTargetPop();
    const pts = targetObj.isBoss ? 1000 : 500;
    const coinBounty = targetObj.isBoss ? 30 : 15;
    this.score += pts;
    this.levelCoinsEarned += coinBounty;
    this.storage.addCoins(coinBounty);

    this.onToast?.(`🎯 Target Eliminated! +${pts} pts (+${coinBounty} 🪙)`);
    this.spawnBurstParticles(pos, 0x38bdf8, 22);
    this.emitHudStats();
  }

  spawnBurstParticles(origin, colorHex, count = 14) {
    const geo = new THREE.BoxGeometry(0.22, 0.22, 0.22);
    const mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(origin);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        Math.random() * 7 + 2,
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
    const aspect = width / height;
    this.camera.aspect = aspect;
    this.updateStationaryCameraPosition(aspect);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const deltaTime = Math.min(this.clock.getDelta(), 0.05);

    // Step physics world with fixed 60Hz substeps for deterministic trajectory accuracy
    this.world.step(1 / 60, deltaTime, 4);

    // Sync active launched bird mesh with physics body
    if (this.activeBird && this.activeBird.body) {
      this.activeBird.mesh.position.copy(this.activeBird.body.position);
      this.activeBird.mesh.quaternion.copy(this.activeBird.body.quaternion);
    }

    // Sync blocks
    this.blocks.forEach((b) => {
      b.mesh.position.copy(b.body.position);
      b.mesh.quaternion.copy(b.body.quaternion);
    });

    // Sync targets
    this.targets.forEach((t) => {
      t.mesh.position.copy(t.body.position);
      t.mesh.quaternion.copy(t.body.quaternion);
    });

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
