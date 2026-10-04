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
    onLevelComplete,
    onBirdReady,
    onBirdLaunch,
    onAbilityUsed,
    onBirdReset
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
    this.onBirdReady = onBirdReady;
    this.onBirdLaunch = onBirdLaunch;
    this.onAbilityUsed = onAbilityUsed;
    this.onBirdReset = onBirdReset;

    // Collections of active physics/visual objects
    this.blocks = [];
    this.targets = [];
    this.particles = [];
    this.waitingBirdMeshes = [];
    this.birdsQueue = [];
    this.secondaryBirds = [];

    this.activeBird = null; // { mesh, body, type, abilityUsed, launchTime }
    this.currentLevel = null;
    this.score = 0;
    this.levelCoinsEarned = 0;
    this.isPlayingLevel = false;
    this.levelResolved = false;
    this.isPaused = false;

    this.clock = new THREE.Clock();
    this.cameraShakeTrauma = 0;

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
    // while keeping the entire 2D/3D hybrid arena cleanly in view.
    this.camera = new THREE.PerspectiveCamera(28, aspect, 1.0, 160);
    this.stationaryLookAt = new THREE.Vector3(1.0, 4.2, 0.0);
    this.stationaryCameraPos = new THREE.Vector3(1.0, 4.2, 42.0);

    // Dynamic Action Cinematic Camera Controller
    // States: 'OVERVIEW' (static wide starting view) | 'TRACKING' (smooth projectile follow & subtle zoom) | 'FOCUS' (impact area close-up) | 'RETURN' (smooth glide back to overview)
    this.cameraState = 'OVERVIEW';
    this.overviewLookAt = new THREE.Vector3(1.0, 4.2, 0.0);
    this.overviewCameraPos = new THREE.Vector3(1.0, 4.2, 42.0);
    this.currentCameraPos = new THREE.Vector3(1.0, 4.2, 42.0);
    this.currentLookAt = new THREE.Vector3(1.0, 4.2, 0.0);
    this.targetCameraPos = new THREE.Vector3(1.0, 4.2, 42.0);
    this.targetLookAt = new THREE.Vector3(1.0, 4.2, 0.0);
    this.focusPoint = new THREE.Vector3(1.0, 4.2, 0.0);
    this.focusTimer = 0;
    this.fortressCenterX = 12.0;

    this.updateStationaryCameraPosition(aspect);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;

    this.container.appendChild(this.renderer.domElement);

    // Balanced studio + outdoor lighting to highlight 3D sculpted character geometry & glass orbs
    this.hemiLight = new THREE.HemisphereLight(0xf0f9ff, 0x1e293b, 0.95);
    this.scene.add(this.hemiLight);

    this.dirLight = new THREE.DirectionalLight(0xfff5e0, 1.55);
    this.dirLight.position.set(-8, 32, 28);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 2;
    this.dirLight.shadow.camera.far = 130;
    const d = 38;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.bias = -0.0005;
    this.scene.add(this.dirLight);

    // Subtle front-right fill light so sculpted faces and eyes pop with 3D depth
    this.fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.55);
    this.fillLight.position.set(14, 10, 20);
    this.scene.add(this.fillLight);

    // Dedicated reusable explosion flash light
    // Pre-added to the scene so Three.js compiles all PBR shaders with point light support on load.
    // This avoids runtime WebGL shader recompilation, which was the primary cause of screen freezes!
    this.explosionLight = new THREE.PointLight(0xff9900, 0, 24, 1.2);
    this.explosionLight.position.set(0, 0, 2);
    this.scene.add(this.explosionLight);
    this.explosionLightTimer = 0;

    // Shared zero-allocation particle geometries & materials for buttery smooth 60fps explosions
    this.sharedUnitBoxGeo = new THREE.BoxGeometry(1, 1, 1);
    this.sharedUnitSphereGeo = new THREE.SphereGeometry(1, 8, 8);
    this.sharedShockwaveGeo = new THREE.TorusGeometry(0.5, 0.12, 10, 36);
    this.sharedFireballGeo = new THREE.SphereGeometry(0.9, 14, 14);
    this.sharedSparkGeo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
    this.sharedSparkMat1 = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    this.sharedSparkMat2 = new THREE.MeshBasicMaterial({ color: 0xf97316 });

    // Pre-allocated shared materials for debris fragments to prevent runtime shader compilation
    this.sharedDebrisMaterials = {
      wood: new THREE.MeshBasicMaterial({ color: 0xc27838 }),
      stone: new THREE.MeshBasicMaterial({ color: 0x64748b }),
      glass: new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.82 }),
      metal: new THREE.MeshBasicMaterial({ color: 0x94a3b8 }),
      coin: new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    };
    this.sharedSmokeMaterial = new THREE.MeshBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });
    this.burstMatCache = new Map();
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

    if (levelConfig?.platforms && levelConfig.platforms.length > 0) {
      levelConfig.platforms.forEach((p) => {
        const hx = (p.size?.[0] || 1.0) / 2;
        const hy = (p.size?.[1] || 1.0) / 2;
        minX = Math.min(minX, p.pos[0] - hx);
        maxX = Math.max(maxX, p.pos[0] + hx);
        minY = Math.min(minY, p.pos[1] - hy);
        maxY = Math.max(maxY, p.pos[1] + hy);
      });
    }

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
      maxX: Math.max(15.0, maxX),
      minY: Math.min(0, minY),
      maxY: Math.max(9.0, maxY)
    };
  }

  /**
   * Dynamic Camera System:
   * Automatically calculates the total bounding box of the current level's structure.
   * Adjusts camera distance (moves further back on Z-axis) and FOV so that the entire
   * structure, slingshot, and ground are always fully visible in a wide-angle overview.
   */
  updateDynamicCamera(aspect) {
    const safeAspect = Math.max(0.65, aspect || 1.77);
    const bbox = this.computeLevelBoundingBox(this.currentLevel);

    // Padding around the bounding box (safe room for HUD, trajectory arc, and collapsing debris)
    const padLeft = 2.4;
    const padRight = 3.4;
    const padBottom = 1.8;
    const padTop = 3.6;

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

    this.overviewLookAt.set(centerX, Math.max(3.6, centerY), 0.0);
    this.overviewCameraPos.set(centerX, Math.max(4.0, centerY + 0.3), targetZ);
    this.fortressCenterX = Math.max(8.0, (bbox.maxX + Math.max(6.0, bbox.minX)) / 2);

    this.stationaryLookAt.copy(this.overviewLookAt);
    this.stationaryCameraPos.copy(this.overviewCameraPos);

    if (this.cameraState === 'OVERVIEW' || !this.hasBirdLaunched) {
      this.currentCameraPos.copy(this.overviewCameraPos);
      this.currentLookAt.copy(this.overviewLookAt);
      this.camera.position.copy(this.overviewCameraPos);
      this.camera.lookAt(this.overviewLookAt);
    }
    this.camera.updateProjectionMatrix();
  }

  // Alias for backward compatibility
  updateStationaryCameraPosition(aspect) {
    this.updateDynamicCamera(aspect);
  }

  initPhysics() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -18.0, 0);
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    this.world.allowSleep = true;
    this.world.solver.iterations = 10;

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
    groundBody.addEventListener('collide', (event) => {
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      if (this.isBirdBody(event.body)) {
        this.audio?.stopFlightSound?.();
      }
      if (normalImpact > 1.2) {
        this.audio?.playMaterialImpact('ground', Math.min(1.0, normalImpact * 0.05));
      }
    });
    this.world.addBody(groundBody);
  }

  /**
   * Awakens sleeping structures so realistic gravity and collision impulses propagate smoothly.
   */
  wakeAllStructures() {
    for (let i = 0; i < this.blocks.length; i++) {
      const b = this.blocks[i];
      if (!b.destroyed && b.body && b.body.sleepState === CANNON.Body.SLEEPING) {
        b.body.wakeUp();
      }
    }
    for (let i = 0; i < this.targets.length; i++) {
      const t = this.targets[i];
      if (!t.destroyed && t.body && t.body.sleepState === CANNON.Body.SLEEPING) {
        t.body.wakeUp();
      }
    }
  }

  wakeStructuresNear(pos, radius = 6.5) {
    const rSq = radius * radius;
    for (let i = 0; i < this.blocks.length; i++) {
      const b = this.blocks[i];
      if (!b.destroyed && b.body && b.body.sleepState === CANNON.Body.SLEEPING) {
        const dx = b.body.position.x - pos.x;
        const dy = b.body.position.y - pos.y;
        if (dx * dx + dy * dy < rSq) {
          b.body.wakeUp();
        }
      }
    }
    for (let i = 0; i < this.targets.length; i++) {
      const t = this.targets[i];
      if (!t.destroyed && t.body && t.body.sleepState === CANNON.Body.SLEEPING) {
        const dx = t.body.position.x - pos.x;
        const dy = t.body.position.y - pos.y;
        if (dx * dx + dy * dy < rSq) {
          t.body.wakeUp();
        }
      }
    }
  }

  createProceduralGrassTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#84cc16'); // Vibrant lime-green crest matching reference image
    grad.addColorStop(0.35, '#65a30d');
    grad.addColorStop(1, '#4d7c0f'); // Darker organic turf base
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Fine organic grass blade streaks
    ctx.strokeStyle = 'rgba(163, 230, 53, 0.45)';
    ctx.lineWidth = 3;
    for (let x = 8; x < 512; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (Math.sin(x * 0.2) * 5), 45 + (Math.cos(x * 0.3) * 15));
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(63, 98, 18, 0.35)';
    ctx.lineWidth = 2.5;
    for (let x = 16; x < 512; x += 22) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - (Math.cos(x * 0.25) * 4), 30 + (Math.sin(x * 0.4) * 10));
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.repeat.set(16, 1);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  createProceduralCliffTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#475569');
    grad.addColorStop(0.5, '#334155');
    grad.addColorStop(1, '#1e293b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Sedimentary strata horizontal layers matching reference image
    const strata = [40, 90, 145, 210, 265, 330, 395, 455];
    strata.forEach((sy, i) => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
      ctx.fillRect(0, sy, 512, 6);
      ctx.fillStyle = 'rgba(148, 163, 184, 0.25)';
      ctx.fillRect(0, sy + 6, 512, 3);

      ctx.strokeStyle = 'rgba(15, 23, 42, 0.4)';
      ctx.lineWidth = 2;
      for (let x = 15 + (i % 3) * 20; x < 512; x += 70) {
        ctx.beginPath();
        ctx.moveTo(x, sy);
        ctx.lineTo(x + (Math.sin(x) * 10), sy + 40);
        ctx.stroke();
      }
    });

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.repeat.set(12, 1);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  createProceduralHazardTexture() {
    if (this._hazardTexture) return this._hazardTexture;
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Vibrant warning yellow base matching Angry Birds aesthetic
    ctx.fillStyle = '#facc15';
    ctx.fillRect(0, 0, 128, 256);

    // Diagonal hazard stripes matching user reference image
    ctx.fillStyle = '#18181b';
    const stripeW = 28;
    for (let y = -128; y < 384; y += stripeW * 2) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(128, y + 128);
      ctx.lineTo(128, y + 128 + stripeW);
      ctx.lineTo(0, y + stripeW);
      ctx.closePath();
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    this._hazardTexture = tex;
    return tex;
  }

  buildEnvironment() {
    this.stageGroup = new THREE.Group();

    // Main grassy game stage with stylized procedural grass texture
    const grassGeo = new THREE.BoxGeometry(88, 2.0, 16);
    this.grassTex = this.createProceduralGrassTexture();
    const grassMat = new THREE.MeshStandardMaterial({
      map: this.grassTex,
      color: 0xffffff,
      roughness: 0.82
    });
    this.grassMesh = new THREE.Mesh(grassGeo, grassMat);
    this.grassMesh.position.set(1.5, -1.0, 0);
    this.grassMesh.receiveShadow = true;
    this.stageGroup.add(this.grassMesh);

    // Clean front trim bevel along the grass edge for a crisp 2D/3D hybrid stage look
    const trimGeo = new THREE.BoxGeometry(88.4, 0.35, 16.2);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0x3f6212,
      roughness: 0.78
    });
    this.trimMesh = new THREE.Mesh(trimGeo, trimMat);
    this.trimMesh.position.set(1.5, -0.18, 0);
    this.stageGroup.add(this.trimMesh);

    // Sub-surface rocky foundation with horizontal stratified sedimentary layers
    const cliffGeo = new THREE.BoxGeometry(84, 10.0, 15);
    this.cliffTex = this.createProceduralCliffTexture();
    const cliffMat = new THREE.MeshStandardMaterial({
      map: this.cliffTex,
      color: 0xffffff,
      roughness: 0.9
    });
    this.cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
    this.cliffMesh.position.set(1.5, -6.8, 0);
    this.stageGroup.add(this.cliffMesh);

    // Fortress stone foundation pad on the right side
    this.padMesh = new THREE.Mesh(
      new THREE.BoxGeometry(26.0, 0.12, 6.0),
      new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.78 })
    );
    this.padMesh.position.set(13.5, 0.04, 0);
    this.padMesh.receiveShadow = true;
    this.stageGroup.add(this.padMesh);

    this.scene.add(this.stageGroup);
  }

  /**
   * Dynamically applies environment visual theme across sky, fog, lighting, terrain, and scenery.
   * Themes evolve across level groups:
   *  - Levels 1–5: Bright & clean (Emerald Valley)
   *  - Levels 6–10: Richer terrain (Amber Canyon & sunset)
   *  - Levels 11–15: New visual theme (Celestial Twilight & glowing aurora)
   *  - Levels 16–20: Dramatic & advanced (Crown Summit & volcanic storm)
   * Always maintains complete gameplay visibility on the z = 0 action plane.
   */
  applyEnvironmentTheme(levelId = 1) {
    const id = Number(levelId) || 1;
    let themeId = 'emerald';
    if (id <= 10) {
      themeId = 'emerald';
    } else if (id <= 20) {
      themeId = 'amber';
    } else if (id <= 35) {
      themeId = 'celestial';
    } else if (id <= 50) {
      themeId = 'summit';
    } else if (id <= 60) {
      themeId = 'solar';
    } else {
      themeId = 'cosmic';
    }

    if (this.currentThemeId === themeId && this.hasAppliedSceneTheme) return;
    this.currentThemeId = themeId;
    this.hasAppliedSceneTheme = true;

    // Ensure tone mapping exposure is high and punchy for crisp gameplay clarity
    if (this.renderer) {
      this.renderer.toneMappingExposure = 1.15;
    }

    if (themeId === 'amber') {
      // Warm golden canyon sunset — bright horizon, crisp warm daylight illumination
      this.scene.background = new THREE.Color(0xd97706);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xfef3c7);
        this.scene.fog.density = 0.0010;
      }
      this.hemiLight?.color.setHex(0xfff7ed);
      this.hemiLight?.groundColor.setHex(0x9a3412);
      if (this.hemiLight) this.hemiLight.intensity = 1.45;

      this.dirLight?.color.setHex(0xffedd5);
      if (this.dirLight) this.dirLight.intensity = 2.05;

      this.fillLight?.color.setHex(0xfef08a);
      if (this.fillLight) this.fillLight.intensity = 1.05;

      this.grassMesh?.material.color.setHex(0xd97706);
      this.trimMesh?.material.color.setHex(0xb45309);
      this.cliffMesh?.material.color.setHex(0x9a3412);
      this.padMesh?.material.color.setHex(0x78350f);

    } else if (themeId === 'celestial') {
      // Mystical twilight aurora — vibrant cyan & royal indigo sky, high-key crystal illumination
      this.scene.background = new THREE.Color(0x2563eb);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0x60a5fa);
        this.scene.fog.density = 0.0008;
      }
      this.hemiLight?.color.setHex(0xe0f2fe);
      this.hemiLight?.groundColor.setHex(0x1e3a8a);
      if (this.hemiLight) this.hemiLight.intensity = 1.65;

      this.dirLight?.color.setHex(0xf0fdf4);
      if (this.dirLight) this.dirLight.intensity = 2.25;

      this.fillLight?.color.setHex(0x38bdf8);
      if (this.fillLight) this.fillLight.intensity = 1.15;

      this.grassMesh?.material.color.setHex(0x0284c7);
      this.trimMesh?.material.color.setHex(0x38bdf8);
      this.cliffMesh?.material.color.setHex(0x475569);
      this.padMesh?.material.color.setHex(0x1e293b);

    } else if (themeId === 'summit') {
      // Dramatic mountain summit & nebula — vibrant purple/crimson sky, bright studio highlights
      this.scene.background = new THREE.Color(0x6b21a8);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xc084fc);
        this.scene.fog.density = 0.0008;
      }
      this.hemiLight?.color.setHex(0xfce7f3);
      this.hemiLight?.groundColor.setHex(0x4c1d95);
      if (this.hemiLight) this.hemiLight.intensity = 1.65;

      this.dirLight?.color.setHex(0xffedd5);
      if (this.dirLight) this.dirLight.intensity = 2.25;

      this.fillLight?.color.setHex(0xf472b6);
      if (this.fillLight) this.fillLight.intensity = 1.10;

      this.grassMesh?.material.color.setHex(0x64748b);
      this.trimMesh?.material.color.setHex(0xf43f5e);
      this.cliffMesh?.material.color.setHex(0x475569);
      this.padMesh?.material.color.setHex(0x334155);

    } else if (themeId === 'solar') {
      // Solar Foundry & Golden Horizon — brilliant warm daylight, golden aura
      this.scene.background = new THREE.Color(0xea580c);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xfef08a);
        this.scene.fog.density = 0.0008;
      }
      this.hemiLight?.color.setHex(0xffedd5);
      this.hemiLight?.groundColor.setHex(0x7c2d12);
      if (this.hemiLight) this.hemiLight.intensity = 1.60;

      this.dirLight?.color.setHex(0xffedd5);
      if (this.dirLight) this.dirLight.intensity = 2.30;

      this.fillLight?.color.setHex(0xfde047);
      if (this.fillLight) this.fillLight.intensity = 1.15;

      this.grassMesh?.material.color.setHex(0xc2410c);
      this.trimMesh?.material.color.setHex(0xf59e0b);
      this.cliffMesh?.material.color.setHex(0x78350f);
      this.padMesh?.material.color.setHex(0x451a03);

    } else if (themeId === 'cosmic') {
      // Cosmic Apex & Singularity Realm — electric violet/cyan radiance, luminous rim lighting
      this.scene.background = new THREE.Color(0x312e81);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xa5b4fc);
        this.scene.fog.density = 0.0007;
      }
      this.hemiLight?.color.setHex(0xe0e7ff);
      this.hemiLight?.groundColor.setHex(0x1e1b4b);
      if (this.hemiLight) this.hemiLight.intensity = 1.70;

      this.dirLight?.color.setHex(0xf0fdf4);
      if (this.dirLight) this.dirLight.intensity = 2.35;

      this.fillLight?.color.setHex(0x67e8f9);
      if (this.fillLight) this.fillLight.intensity = 1.20;

      this.grassMesh?.material.color.setHex(0x4338ca);
      this.trimMesh?.material.color.setHex(0x818cf8);
      this.cliffMesh?.material.color.setHex(0x334155);
      this.padMesh?.material.color.setHex(0x1e293b);

    } else {
      // Emerald Valley & Sunny Skies (Default / Levels 1–10)
      this.scene.background = new THREE.Color(0x38bdf8);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xbae6fd);
        this.scene.fog.density = 0.0015;
      }
      this.hemiLight?.color.setHex(0xf0f9ff);
      this.hemiLight?.groundColor.setHex(0x1e293b);
      if (this.hemiLight) this.hemiLight.intensity = 1.40;

      this.dirLight?.color.setHex(0xfff5e0);
      if (this.dirLight) this.dirLight.intensity = 2.05;

      this.fillLight?.color.setHex(0xe0f2fe);
      if (this.fillLight) this.fillLight.intensity = 0.95;

      this.grassMesh?.material.color.setHex(0xffffff);
      this.trimMesh?.material.color.setHex(0x3f6212);
      this.cliffMesh?.material.color.setHex(0xffffff);
      this.padMesh?.material.color.setHex(0x64748b);
    }

    this.branding?.setThemeForLevel(id);
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
    this.structureAwakened = false;
    this.world.allowSleep = true;
    this.levelResolved = false;
    this.score = 0;
    this.levelCoinsEarned = 0;
    this.isLevelAlreadyCompleted = levelConfig ? Boolean(this.storage?.hasClaimedCoins(levelConfig.id)) : false;
    this.birdsQueue = [...levelConfig.birds];

    // Apply evolving environment theme for this level group (1-5 emerald, 6-10 amber, 11-15 celestial, 16-20 summit)
    this.applyEnvironmentTheme(levelConfig?.id || 1);

    // 0. Spawn Elevated Platforms (cliffs / pillars / plateaus)
    this.platforms = [];
    if (levelConfig?.platforms && levelConfig.platforms.length > 0) {
      if (this.padMesh) this.padMesh.visible = false;
      levelConfig.platforms.forEach((pCfg) => {
        this.spawnPlatform(pCfg);
      });
    } else {
      if (this.padMesh) this.padMesh.visible = true;
    }

    // 1. Spawn Blocks (strictly on z = 0 plane)
    levelConfig.blocks.forEach((bCfg) => {
      this.spawnBlock(bCfg);
    });

    // 2. Spawn Enemy Targets (strictly on z = 0 plane)
    this.initialTargetsByType = {};
    levelConfig.targets.forEach((tCfg, idx) => {
      const type = tCfg.birdType || tCfg.type || (tCfg.isBoss ? 'boss' : ['blue', 'pink', 'gold'][idx % 3]);
      this.initialTargetsByType[type] = (this.initialTargetsByType[type] || 0) + 1;
      this.spawnTarget(tCfg, idx);
    });

    // 3. Prepare Bird Queue & Active Slingshot Bird
    this.prepareNextBird();
    this.emitHudStats();

    // 4. Dynamically compute the total bounding box and frame the entire structure
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.updateDynamicCamera(width / Math.max(1, height));

    this.setDashboardMode(isMenuPreview);
  }

  setDashboardMode(isDashboard) {
    this.isDashboardMode = Boolean(isDashboard);
    if (this.stageGroup) {
      this.stageGroup.visible = !isDashboard;
    }
    if (this.branding) {
      this.branding.setDashboardMode(isDashboard);
    }
    if (this.slingshot) {
      this.slingshot.setVisible(!isDashboard);
    }
    if (this.platforms) {
      this.platforms.forEach((p) => {
        if (p.mesh) p.mesh.visible = !isDashboard;
      });
    }
    this.blocks.forEach((b) => {
      if (b.mesh) b.mesh.visible = !isDashboard;
    });
    this.targets.forEach((t) => {
      if (t.mesh) t.mesh.visible = !isDashboard;
    });
    this.waitingBirdMeshes.forEach((m) => {
      m.visible = !isDashboard;
    });
    if (this.activeBird?.mesh) {
      this.activeBird.mesh.visible = !isDashboard;
    }
    if (isDashboard) {
      this.onBirdReset?.();
    }
  }


  isBirdBody(body) {
    if (!body) return false;
    if (this.activeBird && this.activeBird.body === body) return true;
    if (this.secondaryBirds && this.secondaryBirds.some((sb) => sb.body === body)) return true;
    return false;
  }

  getBirdTypeForBody(body) {
    if (this.activeBird && this.activeBird.body === body) return this.activeBird.type;
    const found = this.secondaryBirds?.find((sb) => sb.body === body);
    if (found) return found.type;
    return this.activeBird?.type || 'red';
  }

  clearLevelEntities() {
    if (this.activeBird) {
      this.scene.remove(this.activeBird.mesh);
      if (this.activeBird.body) {
        this.world.removeBody(this.activeBird.body);
      }
      this.activeBird = null;
    }

    if (this.secondaryBirds) {
      this.secondaryBirds.forEach((sb) => {
        this.scene.remove(sb.mesh);
        if (sb.body) this.world.removeBody(sb.body);
      });
      this.secondaryBirds = [];
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

    if (this.platforms) {
      this.platforms.forEach((p) => {
        if (p.mesh) this.scene.remove(p.mesh);
        if (p.body) this.world.removeBody(p.body);
      });
      this.platforms = [];
    }

    this.particles.forEach((p) => {
      if (p.mesh) {
        this.scene.remove(p.mesh);
        if (
          p.mesh.geometry &&
          p.mesh.geometry !== this.sharedUnitBoxGeo &&
          p.mesh.geometry !== this.sharedUnitSphereGeo &&
          p.mesh.geometry !== this.sharedShockwaveGeo &&
          p.mesh.geometry !== this.sharedFireballGeo &&
          p.mesh.geometry !== this.sharedSparkGeo
        ) {
          p.mesh.geometry.dispose();
        }
        if (
          p.mesh.material &&
          p.mesh.material !== this.sharedSparkMat1 &&
          p.mesh.material !== this.sharedSparkMat2
        ) {
          p.mesh.material.dispose?.();
        }
      }
    });
    this.particles = [];
    if (this.explosionLight) {
      this.explosionLight.intensity = 0;
      this.explosionLightTimer = 0;
    }
    this.cameraShakeTrauma = 0;

    this.onHideAbilityPrompt?.();
  }

  spawnPlatform(cfg) {
    const { pos, size, type = 'cliff' } = cfg;
    const [w, h, d = 5.0] = size;
    const alignedPos = [pos[0], pos[1], 0];

    const platformGroup = new THREE.Group();

    // Theme color palette matching the current world zone
    const themeId = this.currentThemeId || 'emerald';
    let cliffColor = 0x334155;
    let deckColor = 0x1e293b;
    let trimColor = 0x475569;

    if (themeId === 'amber') {
      cliffColor = 0x9a3412;
      deckColor = 0x78350f;
      trimColor = 0xd97706;
    } else if (themeId === 'celestial') {
      cliffColor = 0x334155;
      deckColor = 0x1e3a8a;
      trimColor = 0x38bdf8;
    } else if (themeId === 'summit') {
      cliffColor = 0x475569;
      deckColor = 0x4c1d95;
      trimColor = 0xf43f5e;
    } else if (themeId === 'solar') {
      cliffColor = 0x78350f;
      deckColor = 0x451a03;
      trimColor = 0xf59e0b;
    } else if (themeId === 'cosmic') {
      cliffColor = 0x334155;
      deckColor = 0x1e1b4b;
      trimColor = 0x818cf8;
    }

    // 1. Main rock cliff body with strata texture
    const cliffGeo = new THREE.BoxGeometry(w, h, d);
    const cliffMat = new THREE.MeshStandardMaterial({
      map: this.cliffTex,
      color: cliffColor,
      roughness: 0.88,
      metalness: 0.08
    });
    const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
    cliffMesh.castShadow = true;
    cliffMesh.receiveShadow = true;
    platformGroup.add(cliffMesh);

    // 2. Beveled top deck slab (where structures stand)
    const deckH = 0.22;
    const deckGeo = new THREE.BoxGeometry(w + 0.16, deckH, d + 0.16);
    const deckMat = new THREE.MeshStandardMaterial({
      color: deckColor,
      roughness: 0.65,
      metalness: 0.2
    });
    const deckMesh = new THREE.Mesh(deckGeo, deckMat);
    deckMesh.position.set(0, h / 2 - deckH / 2, 0);
    deckMesh.receiveShadow = true;
    platformGroup.add(deckMesh);

    // 3. Iconic hazard corner warning plates (matching user reference image!)
    const hazardTex = this.createProceduralHazardTexture();
    const hazardMat = new THREE.MeshStandardMaterial({
      map: hazardTex,
      roughness: 0.45,
      metalness: 0.1
    });

    const plateW = Math.min(0.42, w * 0.12);
    const plateH = Math.min(0.85, h * 0.45);
    const plateGeo = new THREE.BoxGeometry(plateW, plateH, 0.06);

    // Left hazard corner plate
    const leftHazard = new THREE.Mesh(plateGeo, hazardMat);
    leftHazard.position.set(-w / 2 + plateW / 2 + 0.02, h / 2 - plateH / 2 - 0.04, d / 2 + 0.03);
    platformGroup.add(leftHazard);

    // Right hazard corner plate
    const rightHazard = new THREE.Mesh(plateGeo, hazardMat);
    rightHazard.position.set(w / 2 - plateW / 2 - 0.02, h / 2 - plateH / 2 - 0.04, d / 2 + 0.03);
    platformGroup.add(rightHazard);

    // 4. Subtle base foundation rim
    const footerH = 0.26;
    const footerGeo = new THREE.BoxGeometry(w + 0.24, footerH, d + 0.24);
    const footerMat = new THREE.MeshStandardMaterial({
      color: trimColor,
      roughness: 0.92
    });
    const footerMesh = new THREE.Mesh(footerGeo, footerMat);
    footerMesh.position.set(0, -h / 2 + footerH / 2, 0);
    platformGroup.add(footerMesh);

    platformGroup.position.set(...alignedPos);
    this.scene.add(platformGroup);

    // 2. CANNON.js static rigid body (rock-solid, unshakeable bedrock foundation)
    const halfExtents = new CANNON.Vec3(w / 2, h / 2, d / 2);
    const body = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(halfExtents),
      position: new CANNON.Vec3(...alignedPos),
      material: this.defaultMaterial
    });
    body.type = CANNON.Body.STATIC;

    body.addEventListener('collide', (event) => {
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      if (this.isBirdBody(event.body)) {
        this.audio?.stopFlightSound?.();
      }
      if (normalImpact > 1.2) {
        this.audio?.playMaterialImpact('stone', Math.min(1.0, normalImpact * 0.05));
      }
    });

    this.world.addBody(body);

    if (!this.platforms) this.platforms = [];
    this.platforms.push({
      mesh: platformGroup,
      body,
      size,
      pos
    });
  }

  spawnBlock(cfg) {
    const { type, pos, size, isStatic = false } = cfg;
    const alignedPos = [pos[0], pos[1], 0];
    const mesh = createBlockMesh(type, size);
    mesh.position.set(...alignedPos);
    this.scene.add(mesh);

    const halfExtents = new CANNON.Vec3(size[0] / 2, size[1] / 2, size[2] / 2);
    // Softer, realistic block mass so bird momentum naturally displaces structures
    const massMap = {
      glass: 1.4,
      wood: 2.4,
      coin: 1.6,
      tnt: 1.8,
      stone: 4.2,
      metal: 5.6
    };
    // Softer block durability for satisfying, classic Angry Birds-style destruction
    const hpMap = {
      glass: 18,
      coin: 22,
      tnt: 14,
      wood: 54,
      stone: 90,
      metal: 125,
    };

    const mass = isStatic ? 0 : (massMap[type] || 2.8);

    const body = new CANNON.Body({
      mass,
      shape: new CANNON.Box(halfExtents),
      position: new CANNON.Vec3(...alignedPos),
      material: this.defaultMaterial,
      linearDamping: 0.04,
      angularDamping: 0.08,
      // Constrain block physics strictly to the 2D XY plane
      linearFactor: new CANNON.Vec3(1, 1, 0),
      angularFactor: new CANNON.Vec3(0, 0, 1)
    });
    if (isStatic) {
      body.type = CANNON.Body.STATIC;
    }

    // Start settled on initial load; wakes up dynamically during gameplay
    body.sleepSpeedLimit = 0.12;
    body.sleepTimeLimit = 0.6;
    body.sleep();

    const lvl = this.currentLevelId || 1;
    const lvlScale = lvl > 30 ? Math.min(1.10, 1.0 + (lvl - 30) * 0.0025) : 1.0;
    const maxHp = Math.round((hpMap[type] || 60) * lvlScale);
    const blockObj = {
      type,
      size,
      mesh,
      body,
      isStatic,
      maxHp,
      hp: maxHp,
      destroyed: false,
      lastHitTime: 0
    };

    body.addEventListener('collide', (event) => {
      if (!this.isPlayingLevel || blockObj.destroyed || !this.hasBirdLaunched) return;

      const isBirdHit = this.isBirdBody(event.body);
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      const now = performance.now();

      // Debounce micro-contacts within 100ms (prevents multi-step iteration over-damage)
      if (now - blockObj.lastHitTime < 100) {
        return;
      }

      // Direct impact from player bird
      if (isBirdHit) {
        this.audio?.stopFlightSound?.();
        // Awaken localized structure physics around the hit point (smooth 60fps without full-world spike)
        this.wakeStructuresNear(blockObj.body.position, 6.5);

        const birdType = this.getBirdTypeForBody(event.body);

        // Fire bird direct impact on TNT causes instant detonation
        if (birdType === 'fire' && blockObj.type === 'tnt') {
          blockObj.lastHitTime = now;
          this.destroyBlock(blockObj);
          return;
        }

        // Light graze (< 1.2 normal impact) deals minimal bounce audio
        if (normalImpact < 1.2) {
          this.audio?.playMaterialImpact(blockObj.type, 0.15);
          return;
        }

        blockObj.lastHitTime = now;

        // Strategic material effectiveness matrix (enhanced for punchy, satisfying breaks)
        let birdMultiplier = 1.0;
        if (birdType === 'speed') {
          birdMultiplier = blockObj.type === 'glass' ? 3.2 : blockObj.type === 'wood' ? 1.6 : 0.85;
        } else if (birdType === 'heavy') {
          birdMultiplier = blockObj.type === 'stone' ? 2.6 : blockObj.type === 'metal' ? 2.4 : 1.9;
        } else if (birdType === 'red') {
          birdMultiplier = blockObj.type === 'wood' ? 1.8 : 1.15;
        } else if (birdType === 'split') {
          birdMultiplier = blockObj.type === 'glass' ? 2.0 : blockObj.type === 'wood' ? 1.5 : 1.0;
        } else if (birdType === 'fire') {
          birdMultiplier = blockObj.type === 'wood' ? 2.8 : blockObj.type === 'glass' ? 2.2 : blockObj.type === 'tnt' ? 4.0 : 1.6;
        } else if (birdType === 'vortex') {
          birdMultiplier = blockObj.type === 'metal' ? 2.3 : blockObj.type === 'stone' ? 2.2 : 1.7;
        } else if (birdType === 'lightning') {
          birdMultiplier = blockObj.type === 'metal' ? 1.7 : blockObj.type === 'stone' ? 1.5 : blockObj.type === 'glass' ? 1.4 : 1.3;
        } else if (birdType === 'chrono') {
          birdMultiplier = blockObj.type === 'stone' ? 2.4 : blockObj.type === 'metal' ? 2.3 : blockObj.type === 'glass' ? 2.1 : 1.75;
        }

        // Damage derived from normal impact collision force (tuned softer so blocks shatter cleanly on solid hits)
        const effectiveImpact = Math.max(0, normalImpact - 0.8);
        const dmg = effectiveImpact * 3.2 * birdMultiplier;

        if (dmg > 1.0) {
          this.audio?.playMaterialImpact(blockObj.type, Math.min(1.0, dmg * 0.06));
          blockObj.hp -= dmg;

          // Visual crack & stress feedback (darken slightly as it takes heavy structural damage)
          if (blockObj.mesh?.material && !blockObj.isDamagedTinted) {
            if (blockObj.hp < blockObj.maxHp * 0.6) {
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
      } else if (normalImpact >= 3.8) {
        // Falling structures, tumbling debris, and cascading collapses naturally crush blocks underneath
        blockObj.lastHitTime = now;
        this.audio?.playMaterialImpact(blockObj.type, Math.min(1.0, normalImpact * 0.06));
        const debrisDmg = (normalImpact - 2.8) * 3.0;
        blockObj.hp -= debrisDmg;
        if (blockObj.hp <= 0) {
          this.destroyBlock(blockObj);
        }
      }
    });

    this.world.addBody(body);
    this.blocks.push(blockObj);
  }

  spawnTarget(cfg, targetIndex = 0) {
    const { pos, isBoss = false } = cfg;
    let birdType = cfg.birdType || cfg.type;
    if (!birdType) {
      birdType = isBoss ? 'boss' : ['blue', 'pink', 'gold'][targetIndex % 3];
    }
    const radius = cfg.radius || (isBoss ? 0.58 : 0.44);
    const alignedPos = [pos[0], pos[1], 0];
    const mesh = createTargetMesh(radius, isBoss, birdType);
    mesh.position.set(...alignedPos);
    // Face directly toward the 2D camera
    mesh.rotation.set(0, 0, 0);
    this.scene.add(mesh);

    const body = new CANNON.Body({
      mass: isBoss ? 2.8 : 1.6,
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

    const lvl = this.currentLevelId || 1;
    const targetLvlScale = lvl > 30 ? Math.min(1.10, 1.0 + (lvl - 30) * 0.003) : 1.0;
    const baseHp = isBoss ? 35 : 18;
    const targetHp = Math.round(baseHp * targetLvlScale);

    const targetObj = {
      mesh,
      body,
      radius,
      isBoss,
      birdType,
      hp: targetHp,
      destroyed: false,
      lastHitTime: 0
    };

    body.addEventListener('collide', (event) => {
      if (!this.isPlayingLevel || targetObj.destroyed || !this.hasBirdLaunched) return;

      const isBirdHit = this.isBirdBody(event.body);
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      const now = performance.now();

      if (now - targetObj.lastHitTime < 100) {
        return;
      }

      if (isBirdHit) {
        if (normalImpact < 1.4) return;
        targetObj.lastHitTime = now;
        const dmg = (normalImpact - 0.9) * 3.4;
        if (dmg > 1.0) {
          targetObj.hp -= dmg;
          if (targetObj.hp <= 0) {
            this.defeatTarget(targetObj);
          }
        }
      } else if (normalImpact >= 2.8) {
        // Crushed by falling debris, collapsing roofs, or high drops
        targetObj.lastHitTime = now;
        const fallDmg = (normalImpact - 1.8) * 3.6;
        targetObj.hp -= fallDmg;
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

    // Smoothly return camera to overview when new bird is prepared
    this.cameraState = 'RETURN';

    if (this.birdsQueue.length === 0) {
      this.activeBird = null;
      this.onBirdReset?.();
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
    } else if (!this.isDashboardMode) {
      this.onBirdReady?.({
        birdType: nextType,
        hasActiveAbility: nextType !== 'red'
      });
    }

    // Render remaining birds lined up behind the slingshot strictly on z = 0
    for (let i = 1; i < this.birdsQueue.length; i++) {
      const wMesh = createBirdMesh(this.birdsQueue[i]);
      const r = wMesh.userData.radius || 0.46;
      wMesh.position.set(-14.4 - (i - 1) * 1.35, r, 0.0);
      wMesh.rotation.set(0, 0, 0);
      this.scene.add(wMesh);
      this.waitingBirdMeshes.push(wMesh);
    }
  }

  triggerCameraImpactFocus(pos) {
    if (this.cameraState === 'TRACKING' || this.cameraState === 'FOCUS') {
      this.cameraState = 'FOCUS';
      this.focusPoint.set(pos.x, pos.y, 0);
      this.focusTimer = 1.35;
    }
  }

  handleBirdLaunch(launchPos, velocity) {
    if (!this.activeBird) return;
    this.hasBirdLaunched = true;

    // Transition camera into smooth projectile tracking & subtle zoom
    this.cameraState = 'TRACKING';
    this.focusTimer = 0;

    const radius = this.activeBird.mesh.userData.radius || 0.46;
    const massMap = {
      red: 2.5,
      speed: 2.2,
      heavy: 4.8,
      split: 2.4,
      fire: 2.8,
      vortex: 3.8,
      lightning: 2.05,
      chrono: 3.24
    };
    const mass = massMap[this.activeBird.type] || 2.5;

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

    this.world.addBody(body);
    this.activeBird.body = body;
    this.activeBird.launchTime = performance.now();
    this.audio?.startFlightSound?.();

    this.onBirdLaunch?.({
      birdType: this.activeBird.type,
      hasActiveAbility: this.activeBird.type !== 'red'
    });

    const prompts = {
      speed: '⚡ Tap or Click mid-flight for Supersonic Boost!',
      heavy: '💣 Tap or Click mid-flight for Meteor Slam!',
      split: '✨ Tap or Click mid-flight for Tri-Cluster Split!',
      fire: '🔥 Tap or Click mid-flight for Inferno Burst!',
      vortex: '🌀 Tap or Click mid-flight for Vortex Shockwave!',
      lightning: '⚡ Tap or Click mid-flight for Thunderbolt Surge!',
      chrono: '⏳ Tap or Click mid-flight for Temporal Warp Surge!'
    };
    if (prompts[this.activeBird.type]) {
      this.onShowAbilityPrompt?.(prompts[this.activeBird.type]);
    }
  }

  triggerBirdAbility() {
    if (!this.activeBird || !this.activeBird.body || this.activeBird.abilityUsed) return;

    this.onAbilityUsed?.({
      birdType: this.activeBird.type
    });

    const bType = this.activeBird.type;
    const pos = this.activeBird.mesh.position.clone();

    if (bType === 'speed') {
      this.activeBird.abilityUsed = true;
      this.audio?.playBoost?.();
      this.activeBird.body.velocity.x *= 1.85;
      this.activeBird.body.velocity.y *= 1.1;
      this.spawnBurstParticles(pos, 0x38bdf8, 18);
      this.onHideAbilityPrompt?.();
    } else if (bType === 'heavy') {
      this.activeBird.abilityUsed = true;
      this.audio?.playBoost?.();
      this.activeBird.body.velocity.x *= 1.15;
      this.activeBird.body.velocity.y = -22.0;
      this.spawnBurstParticles(pos, 0xd946ef, 20);
      this.onHideAbilityPrompt?.();
    } else if (bType === 'split') {
      this.onHideAbilityPrompt?.();
      this.triggerSplitAbility();
    } else if (bType === 'fire') {
      this.activeBird.abilityUsed = true;
      this.onHideAbilityPrompt?.();
      this.detonateThermalBlast(pos);
    } else if (bType === 'vortex') {
      this.activeBird.abilityUsed = true;
      this.onHideAbilityPrompt?.();
      this.triggerVortexShockwave(pos);
    } else if (bType === 'lightning') {
      this.activeBird.abilityUsed = true;
      this.onHideAbilityPrompt?.();
      this.triggerLightningSurge(pos);
    } else if (bType === 'chrono') {
      this.activeBird.abilityUsed = true;
      this.onHideAbilityPrompt?.();
      this.triggerChronoSurge(pos);
    }
  }

  triggerSplitAbility() {
    if (!this.activeBird || !this.activeBird.body) return;
    this.activeBird.abilityUsed = true;
    this.audio?.playBoost?.();

    const pos = this.activeBird.mesh.position.clone();
    const currentVel = this.activeBird.body.velocity;
    this.spawnBurstParticles(pos, 0xfbbf24, 20);

    // Center bird surges forward
    currentVel.x *= 1.12;

    if (!this.secondaryBirds) this.secondaryBirds = [];

    const offsets = [
      { vy: currentVel.y + 5.5, dy: 0.28 },
      { vy: currentVel.y - 5.5, dy: -0.28 }
    ];

    offsets.forEach((off) => {
      const subMesh = createBirdMesh('split');
      subMesh.scale.setScalar(0.85);
      subMesh.position.set(pos.x, pos.y + off.dy, 0);
      this.scene.add(subMesh);

      const subBody = new CANNON.Body({
        mass: 1.8,
        shape: new CANNON.Sphere(0.38),
        position: new CANNON.Vec3(pos.x, pos.y + off.dy, 0),
        velocity: new CANNON.Vec3(currentVel.x * 1.02, off.vy, 0),
        material: this.defaultMaterial,
        linearDamping: 0.01,
        angularDamping: 0.08,
        linearFactor: new CANNON.Vec3(1, 1, 0),
        angularFactor: new CANNON.Vec3(0, 0, 1)
      });
      this.world.addBody(subBody);

      this.secondaryBirds.push({
        mesh: subMesh,
        body: subBody,
        type: 'split',
        launchTime: performance.now()
      });
    });
  }

  detonateThermalBlast(origin) {
    this.audio?.playExplosion?.();
    this.createModernExplosion(origin);
    this.cameraShakeTrauma = Math.min(1.0, this.cameraShakeTrauma + 0.6);
    this.wakeStructuresNear(origin, 6.5);

    const blastRadius = 4.2;
    [...this.blocks].forEach((b) => {
      if (b.destroyed || !b.body) return;
      const bPos = b.body.position;
      const dist = Math.hypot(bPos.x - origin.x, bPos.y - origin.y);
      if (dist < blastRadius) {
        b.body.wakeUp();
        if (b.type === 'tnt') {
          this.destroyBlock(b);
        } else {
          const falloff = 1 - dist / blastRadius;
          const dmg = falloff * (b.type === 'wood' ? 75 : b.type === 'glass' ? 60 : 45);
          b.hp -= dmg;
          const impulseDir = new CANNON.Vec3(bPos.x - origin.x, bPos.y - origin.y, 0);
          if (impulseDir.length() > 0.01) {
            impulseDir.normalize();
            b.body.applyImpulse(impulseDir.scale(falloff * 15), bPos);
          }
          if (b.hp <= 0) {
            this.destroyBlock(b);
          }
        }
      }
    });

    [...this.targets].forEach((t) => {
      if (t.destroyed || !t.body) return;
      const tPos = t.body.position;
      const dist = Math.hypot(tPos.x - origin.x, tPos.y - origin.y);
      if (dist < blastRadius) {
        t.body.wakeUp();
        const falloff = 1 - dist / blastRadius;
        t.hp -= falloff * 35;
        const impulseDir = new CANNON.Vec3(tPos.x - origin.x, tPos.y - origin.y, 0);
        if (impulseDir.length() > 0.01) {
          impulseDir.normalize();
          t.body.applyImpulse(impulseDir.scale(falloff * 14), tPos);
        }
        if (t.hp <= 0) {
          this.defeatTarget(t);
        }
      }
    });
  }

  triggerVortexShockwave(origin) {
    this.audio?.playExplosion?.();
    this.spawnVortexFX(origin);
    this.cameraShakeTrauma = Math.min(1.0, this.cameraShakeTrauma + 0.75);
    this.wakeStructuresNear(origin, 7.0);

    const shockwaveRadius = 6.2;
    [...this.blocks].forEach((b) => {
      if (b.destroyed || !b.body) return;
      const bPos = b.body.position;
      const dist = Math.hypot(bPos.x - origin.x, bPos.y - origin.y);
      if (dist < shockwaveRadius && dist > 0.08) {
        b.body.wakeUp();
        const falloff = 1 - dist / shockwaveRadius;
        const impulseDir = new CANNON.Vec3(bPos.x - origin.x, bPos.y - origin.y, 0).unit();
        b.body.applyImpulse(impulseDir.scale(falloff * 25), bPos);
        b.hp -= falloff * 32;
        if (b.hp <= 0) {
          this.destroyBlock(b);
        }
      }
    });

    [...this.targets].forEach((t) => {
      if (t.destroyed || !t.body) return;
      const tPos = t.body.position;
      const dist = Math.hypot(tPos.x - origin.x, tPos.y - origin.y);
      if (dist < shockwaveRadius && dist > 0.08) {
        t.body.wakeUp();
        const falloff = 1 - dist / shockwaveRadius;
        const impulseDir = new CANNON.Vec3(tPos.x - origin.x, tPos.y - origin.y, 0).unit();
        t.body.applyImpulse(impulseDir.scale(falloff * 22), tPos);
        t.hp -= falloff * 25;
        if (t.hp <= 0) {
          this.defeatTarget(t);
        }
      }
    });
  }

  spawnVortexFX(origin) {
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.9,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(this.sharedShockwaveGeo, shockwaveMat);
    mesh.position.set(origin.x, origin.y, 0.1);
    this.scene.add(mesh);
    this.particles.push({
      type: 'shockwave',
      mesh,
      baseScale: 0.3,
      maxExpansion: 6.2,
      baseOpacity: 0.9,
      life: 1.0,
      decay: 2.2
    });
    this.spawnBurstParticles(origin, 0xa5b4fc, 24);
  }

  triggerLightningSurge(origin) {
    this.audio?.playExplosion?.();
    this.audio?.playBoost?.();
    this.spawnLightningFX(origin);
    this.cameraShakeTrauma = Math.min(1.0, this.cameraShakeTrauma + 0.85);
    this.wakeStructuresNear(origin, 6.5);

    // High velocity forward boost for penetrating strike
    if (this.activeBird && this.activeBird.body) {
      this.activeBird.body.velocity.x *= 1.12;
      this.activeBird.body.velocity.y *= 0.75;
    }

    const lightningRadius = 3.8;
    // Zap nearby destructible blocks
    [...this.blocks].forEach((b) => {
      if (b.destroyed || !b.body) return;
      const bPos = b.body.position;
      const dist = Math.hypot(bPos.x - origin.x, bPos.y - origin.y);
      if (dist < lightningRadius) {
        b.body.wakeUp();
        if (b.type === 'tnt') {
          this.destroyBlock(b);
        } else {
          const falloff = 1 - dist / lightningRadius;
          // High voltage conductively destroys metal, stone, glass
          const dmg = falloff * (b.type === 'metal' ? 52 : b.type === 'stone' ? 42 : b.type === 'glass' ? 46 : 32);
          b.hp -= dmg;
          const impulseDir = new CANNON.Vec3(bPos.x - origin.x, bPos.y - origin.y, 0);
          if (impulseDir.length() > 0.01) {
            impulseDir.normalize();
            b.body.applyImpulse(impulseDir.scale(falloff * 11.0), bPos);
          }
          if (b.hp <= 0) {
            this.destroyBlock(b);
          }
        }
      }
    });

    // Zap nearby targets
    [...this.targets].forEach((t) => {
      if (t.destroyed || !t.body) return;
      const tPos = t.body.position;
      const dist = Math.hypot(tPos.x - origin.x, tPos.y - origin.y);
      if (dist < lightningRadius) {
        t.body.wakeUp();
        const falloff = 1 - dist / lightningRadius;
        t.hp -= falloff * 28;
        const impulseDir = new CANNON.Vec3(tPos.x - origin.x, tPos.y - origin.y, 0);
        if (impulseDir.length() > 0.01) {
          impulseDir.normalize();
          t.body.applyImpulse(impulseDir.scale(falloff * 9.5), tPos);
        }
        if (t.hp <= 0) {
          this.defeatTarget(t);
        }
      }
    });
  }

  spawnLightningFX(origin) {
    // 1. Cyan-electric expanding shockwave ring
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.95,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(this.sharedShockwaveGeo, shockwaveMat);
    mesh.position.set(origin.x, origin.y, 0.12);
    this.scene.add(mesh);
    this.particles.push({
      type: 'shockwave',
      mesh,
      baseScale: 0.35,
      maxExpansion: 6.8,
      baseOpacity: 0.95,
      life: 1.0,
      decay: 2.5
    });

    // 2. High-energy burst spark particles
    this.spawnBurstParticles(origin, 0x00f0ff, 28);
    this.spawnBurstParticles(origin, 0xfef08a, 16);

    // 3. Lightning arc branches to nearest objects
    const arcGroup = new THREE.Group();
    const arcMat = new THREE.LineBasicMaterial({
      color: 0xa5f3fc,
      linewidth: 3,
      transparent: true,
      opacity: 0.95
    });

    const nearbyObjects = [];
    this.targets.forEach((t) => {
      if (!t.destroyed && t.mesh) {
        const d = origin.distanceTo(t.mesh.position);
        if (d < 6.2 && d > 0.1) nearbyObjects.push({ pos: t.mesh.position.clone(), dist: d });
      }
    });
    this.blocks.forEach((b) => {
      if (!b.destroyed && b.mesh) {
        const d = origin.distanceTo(b.mesh.position);
        if (d < 5.8 && d > 0.1) nearbyObjects.push({ pos: b.mesh.position.clone(), dist: d });
      }
    });

    nearbyObjects.sort((a, b) => a.dist - b.dist).slice(0, 5).forEach((item) => {
      const points = [];
      const steps = 6;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = origin.clone().lerp(item.pos, t);
        if (i > 0 && i < steps) {
          p.x += (Math.random() - 0.5) * 0.45;
          p.y += (Math.random() - 0.5) * 0.45;
        }
        points.push(p);
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, arcMat);
      arcGroup.add(line);
    });

    this.scene.add(arcGroup);
    setTimeout(() => {
      this.scene.remove(arcGroup);
      arcGroup.traverse((c) => {
        if (c.geometry) c.geometry.dispose();
      });
      arcMat.dispose();
    }, 180);
  }

  triggerChronoSurge(origin) {
    this.audio?.playExplosion?.();
    this.audio?.playBoost?.();
    this.spawnChronoFX(origin);
    this.cameraShakeTrauma = Math.min(1.0, this.cameraShakeTrauma + 0.75);
    this.wakeStructuresNear(origin, 7.5);

    // High velocity quantum phase warp acceleration
    if (this.activeBird && this.activeBird.body) {
      this.activeBird.body.velocity.x *= 1.25;
      this.activeBird.body.velocity.y *= 0.85;
    }

    // Shockwave radius tuned for satisfying, soft structural collapse
    const chronoRadius = 4.0;
    // Shatter and dislodge destructible blocks in balanced radius
    [...this.blocks].forEach((b) => {
      if (b.destroyed || !b.body) return;
      const bPos = b.body.position;
      const dist = Math.hypot(bPos.x - origin.x, bPos.y - origin.y);
      if (dist < chronoRadius) {
        b.body.wakeUp();
        if (b.type === 'tnt') {
          this.destroyBlock(b);
        } else {
          const falloff = 1 - dist / chronoRadius;
          const dmg = falloff * (b.type === 'stone' ? 52 : b.type === 'metal' ? 46 : b.type === 'glass' ? 56 : 38);
          b.hp -= dmg;
          const impulseDir = new CANNON.Vec3(bPos.x - origin.x, bPos.y - origin.y, 0);
          if (impulseDir.length() > 0.01) {
            impulseDir.normalize();
            b.body.applyImpulse(impulseDir.scale(falloff * 11.5), bPos);
          }
          if (b.hp <= 0) {
            this.destroyBlock(b);
          }
        }
      }
    });

    // Damage & dislodge targets smoothly
    [...this.targets].forEach((t) => {
      if (t.destroyed || !t.body) return;
      const tPos = t.body.position;
      const dist = Math.hypot(tPos.x - origin.x, tPos.y - origin.y);
      if (dist < chronoRadius) {
        t.body.wakeUp();
        const falloff = 1 - dist / chronoRadius;
        t.hp -= falloff * 30;
        const impulseDir = new CANNON.Vec3(tPos.x - origin.x, tPos.y - origin.y, 0);
        if (impulseDir.length() > 0.01) {
          impulseDir.normalize();
          t.body.applyImpulse(impulseDir.scale(falloff * 9.8), tPos);
        }
        if (t.hp <= 0) {
          this.defeatTarget(t);
        }
      }
    });
  }

  spawnChronoFX(origin) {
    // 1. Violet & Magenta dual expanding quantum shockwaves (calibrated to exact midpoint)
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.95,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(this.sharedShockwaveGeo, shockwaveMat);
    mesh.position.set(origin.x, origin.y, 0.12);
    this.scene.add(mesh);
    this.particles.push({
      type: 'shockwave',
      mesh,
      baseScale: 0.35,
      maxExpansion: 7.55,
      baseOpacity: 0.95,
      life: 1.0,
      decay: 2.3
    });

    // Secondary cyan pulse
    const cyanMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const mesh2 = new THREE.Mesh(this.sharedShockwaveGeo, cyanMat);
    mesh2.position.set(origin.x, origin.y, 0.14);
    this.scene.add(mesh2);
    this.particles.push({
      type: 'shockwave',
      mesh: mesh2,
      baseScale: 0.2,
      maxExpansion: 5.4,
      baseOpacity: 0.85,
      life: 0.8,
      decay: 2.8
    });

    // 2. Quantum time-warp burst particles (optimized counts)
    this.spawnBurstParticles(origin, 0xa855f7, 20);
    this.spawnBurstParticles(origin, 0xec4899, 16);
    this.spawnBurstParticles(origin, 0x38bdf8, 12);
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

    // Wake up nearby structures so gravity acts naturally without waking entire world
    this.wakeStructuresNear(pos, 5.2);

    // Specifically for blocks directly above or resting on this block, give them an immediate gravity nudge
    this.blocks.forEach((b) => {
      if (!b.destroyed && b.body) {
        const bHalfWidth = (b.size?.[0] || 1.0) / 2;
        const horizOverlap = Math.abs(b.body.position.x - pos.x) < (halfWidth + bHalfWidth + 0.3);
        const isAbove = b.body.position.y > pos.y - halfHeight;
        if (isAbove && horizOverlap) {
          b.body.wakeUp();
          if (b.body.velocity.y > -0.5) {
            b.body.velocity.y = -1.5;
          }
        }
      }
    });

    this.targets.forEach((t) => {
      if (!t.destroyed && t.body) {
        const horizOverlap = Math.abs(t.body.position.x - pos.x) < (halfWidth + (t.radius || 0.75) + 0.3);
        const isAbove = t.body.position.y > pos.y - halfHeight;
        if (isAbove && horizOverlap) {
          t.body.wakeUp();
          if (t.body.velocity.y > -0.5) {
            t.body.velocity.y = -1.5;
          }
        }
      }
    });

    // Track rapid consecutive breaks to scale realistic structural collapse audio
    const now = performance.now();
    if (!this.recentBreakWindow || now - this.recentBreakWindow > 250) {
      this.recentBreakWindow = now;
      this.recentBreakCount = 1;
    } else {
      this.recentBreakCount = (this.recentBreakCount || 1) + 1;
    }
    const currentBreakCount = this.recentBreakCount;

    if (blockObj.type === 'coin') {
      this.audio?.playCoin();
      this.score += 300;
      const bonusCoins = 35;
      if (!this.isLevelAlreadyCompleted) {
        this.levelCoinsEarned += bonusCoins;
      }
      this.spawnBlockShatter(blockObj, pos);
    } else if (blockObj.type === 'tnt') {
      this.detonateTNT(pos);
    } else {
      this.score += 120;
      this.audio?.playBlockBreak(blockObj.type, currentBreakCount);
      this.spawnBlockShatter(blockObj, pos);
    }

    this.emitHudStats();
  }

  /**
   * Spawns physical 3D debris fragments and stylized smoke/dust puffs when a block breaks,
   * using shared materials and lightweight meshes for silky smooth 60fps performance.
   */
  spawnBlockShatter(blockObj, origin) {
    const size = blockObj.size || [1.0, 1.0, 1.0];
    const type = blockObj.type || 'wood';

    // Prune oldest particles if pool is full to maintain silky 60 FPS
    if (this.particles.length > 36) {
      const dropCount = Math.min(10, this.particles.length - 28);
      for (let k = 0; k < dropCount; k++) {
        const oldP = this.particles.shift();
        if (oldP?.mesh) {
          this.scene.remove(oldP.mesh);
        }
      }
    }

    // 1. Physical tumbling 3D debris chunks using zero-allocation pre-cached materials
    const mat = (this.sharedDebrisMaterials && this.sharedDebrisMaterials[type]) || this.sharedDebrisMaterials?.wood;
    const chunkCount = type === 'stone' || type === 'metal' ? 4 : 3;

    for (let i = 0; i < chunkCount; i++) {
      const chunkW = Math.max(0.12, (size[0] / 3) * (0.6 + Math.random() * 0.7));
      const chunkH = Math.max(0.12, (size[1] / 3) * (0.6 + Math.random() * 0.7));
      const chunkD = Math.max(0.12, (size[2] / 2) * (0.6 + Math.random() * 0.7));

      const mesh = new THREE.Mesh(this.sharedUnitBoxGeo, mat);
      mesh.scale.set(chunkW, chunkH, chunkD);
      mesh.castShadow = false; // Disable heavy shadow maps on transient fragments
      const offsetX = (Math.random() - 0.5) * (size[0] * 0.6);
      const offsetY = (Math.random() - 0.5) * (size[1] * 0.6);
      mesh.position.set(origin.x + offsetX, origin.y + offsetY, (Math.random() - 0.5) * 0.3);
      this.scene.add(mesh);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 7.0 + (offsetX * 3.0),
        Math.random() * 5.0 + 2.0,
        (Math.random() - 0.5) * 2.0
      );
      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 14
      );

      this.particles.push({
        type: 'debris',
        mesh,
        vel,
        rotVel,
        baseScaleVec: new THREE.Vector3(chunkW, chunkH, chunkD),
        baseScale: 1.0,
        life: 0.9,
        decay: 1.5,
        sharedMaterial: true
      });
    }

    // Additional shear sparks for metal breaks (optimized count)
    if (type === 'metal') {
      for (let s = 0; s < 4; s++) {
        const sMesh = new THREE.Mesh(this.sharedSparkGeo, s % 2 === 0 ? this.sharedSparkMat1 : this.sharedSparkMat2);
        sMesh.position.copy(origin);
        this.scene.add(sMesh);
        const sVel = new THREE.Vector3((Math.random() - 0.5) * 9, Math.random() * 6 + 2, (Math.random() - 0.5) * 2);
        this.particles.push({
          type: 'debris',
          mesh: sMesh,
          vel: sVel,
          rotVel: new THREE.Vector3(8, 8, 8),
          baseScale: 0.8,
          life: 0.7,
          decay: 2.4,
          sharedMaterial: true
        });
      }
    }

    // 2. Soft stylized dust / smoke puff using shared smoke material
    const dustCount = 2;
    for (let i = 0; i < dustCount; i++) {
      const mesh = new THREE.Mesh(this.sharedUnitSphereGeo, this.sharedSmokeMaterial);
      mesh.scale.setScalar(0.26);
      mesh.position.set(
        origin.x + (Math.random() - 0.5) * (size[0] * 0.5),
        origin.y + (Math.random() - 0.5) * (size[1] * 0.5),
        0.1
      );
      this.scene.add(mesh);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2.0,
        Math.random() * 2.0 + 0.8,
        0
      );

      this.particles.push({
        type: 'smoke',
        mesh,
        vel,
        baseScale: 0.26,
        baseOpacity: 0.55,
        life: 0.85,
        decay: 2.1,
        sharedMaterial: true
      });
    }
  }

  detonateTNT(origin) {
    this.audio?.playExplosion();
    this.score += 400;
    this.onToast?.('💥 BOOM! TNT Detonated!');

    // Subtle, smooth camera shake trauma
    this.cameraShakeTrauma = Math.min(0.35, this.cameraShakeTrauma + 0.22);

    // Modern multi-layer explosion VFX
    this.createModernExplosion(origin);

    // Awaken nearby structures
    this.wakeStructuresNear(origin, 7.5);

    // Balanced, punchy blast radius & force
    const blastRadius = 4.0;
    const blastForce = 17.5;

    // Push and damage nearby blocks
    const affectedBlocks = [...this.blocks];
    for (let i = 0; i < affectedBlocks.length; i++) {
      const b = affectedBlocks[i];
      if (b.destroyed) continue;

      const bPos = b.mesh.position;
      const dist = origin.distanceTo(bPos);
      if (dist < blastRadius) {
        b.body.wakeUp();

        let dirX = bPos.x - origin.x;
        let dirY = bPos.y - origin.y;
        const d = Math.hypot(dirX, dirY);
        if (d > 0.001) {
          dirX /= d;
          dirY /= d;
        } else {
          dirX = (Math.random() - 0.5) * 1.5;
          dirY = 1.0;
          const len = Math.hypot(dirX, dirY);
          dirX /= len;
          dirY /= len;
        }

        const factor = 1 - dist / blastRadius;
        const strength = factor * blastForce;
        b.body.applyImpulse(new CANNON.Vec3(dirX * strength, (dirY + 0.3) * strength, 0));
        b.hp -= factor * 68;

        if (b.hp <= 0) {
          if (b.type === 'tnt') {
            // Remove from active blocks immediately so it won't be processed again
            b.destroyed = true;
            this.scene.remove(b.mesh);
            this.world.removeBody(b.body);
            this.blocks = this.blocks.filter((item) => item !== b);

            // Stagger chained TNT detonations by 110ms for a dramatic cascade
            // and completely prevent frame freeze / synchronous call stack spikes
            setTimeout(() => {
              if (this.isPlayingLevel) {
                this.detonateTNT(bPos);
              }
            }, 110);
          } else {
            this.destroyBlock(b);
          }
        }
      }
    }

    // Push and damage nearby targets
    const affectedTargets = [...this.targets];
    for (let i = 0; i < affectedTargets.length; i++) {
      const t = affectedTargets[i];
      if (t.destroyed) continue;

      const tPos = t.mesh.position;
      const dist = origin.distanceTo(tPos);
      if (dist < blastRadius) {
        t.body.wakeUp();

        let dirX = tPos.x - origin.x;
        let dirY = tPos.y - origin.y;
        const d = Math.hypot(dirX, dirY);
        if (d > 0.001) {
          dirX /= d;
          dirY /= d;
        } else {
          dirX = (Math.random() - 0.5);
          dirY = 1.0;
          const len = Math.hypot(dirX, dirY);
          dirX /= len;
          dirY /= len;
        }

        const factor = 1 - dist / blastRadius;
        const targetStrength = factor * blastForce * 0.8;
        t.body.applyImpulse(new CANNON.Vec3(dirX * targetStrength, (dirY + 0.3) * targetStrength, 0));

        t.hp -= factor * 38;
        if (t.hp <= 0) {
          this.defeatTarget(t);
        }
      }
    }
  }

  /**
   * Modern stylized 3D explosion with expanding dual shockwaves, blazing fireball core,
   * rising volumetric smoke plumes, high-speed incandescent sparks, and dynamic light flash.
   */
  createModernExplosion(origin) {
    // 1. Primary High-Velocity Expanding Shockwave Ring (Torus on XY plane)
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0xfef08a,
      transparent: true,
      opacity: 0.98,
      depthWrite: false
    });
    const shockwaveMesh = new THREE.Mesh(this.sharedShockwaveGeo, shockwaveMat);
    shockwaveMesh.position.set(origin.x, origin.y, 0.05);
    this.scene.add(shockwaveMesh);
    this.particles.push({
      type: 'shockwave',
      mesh: shockwaveMesh,
      baseScale: 0.35,
      maxExpansion: 7.8,
      baseOpacity: 0.98,
      life: 1.0,
      decay: 2.6
    });

    // Secondary Thermal Shockwave (amber warm halo)
    const shockwaveMat2 = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.75,
      depthWrite: false
    });
    const shockwaveMesh2 = new THREE.Mesh(this.sharedShockwaveGeo, shockwaveMat2);
    shockwaveMesh2.position.set(origin.x, origin.y, 0.04);
    this.scene.add(shockwaveMesh2);
    this.particles.push({
      type: 'shockwave',
      mesh: shockwaveMesh2,
      baseScale: 0.25,
      maxExpansion: 5.2,
      baseOpacity: 0.75,
      life: 1.0,
      decay: 2.1
    });

    // 2. Blazing Fireball Plasma Core with color morphing
    const fireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
      depthWrite: false
    });
    const fireMesh = new THREE.Mesh(this.sharedFireballGeo, fireMat);
    fireMesh.position.set(origin.x, origin.y, 0.1);
    this.scene.add(fireMesh);
    this.particles.push({
      type: 'fireball',
      mesh: fireMesh,
      baseScale: 0.65,
      baseOpacity: 1.0,
      life: 1.0,
      decay: 3.0
    });

    // 3. Volumetric Billowing Smoke Plumes (optimized count & shared material)
    const smokeCount = 6;
    for (let i = 0; i < smokeCount; i++) {
      const radius = 0.4 + Math.random() * 0.3;
      const mesh = new THREE.Mesh(this.sharedUnitSphereGeo, this.sharedSmokeMaterial);
      mesh.scale.setScalar(radius);
      mesh.position.set(
        origin.x + (Math.random() - 0.5) * 0.5,
        origin.y + (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.3
      );
      this.scene.add(mesh);

      const angle = (i / smokeCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
      const speed = 2.4 + Math.random() * 2.8;
      const vel = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed * 0.8 + 1.8,
        (Math.random() - 0.5) * 1.2
      );

      this.particles.push({
        type: 'smoke',
        mesh,
        vel,
        baseScale: radius,
        baseOpacity: 0.65,
        life: 0.9,
        decay: 1.4,
        sharedMaterial: true
      });
    }

    // 4. Incandescent High-Speed Sparks & Shrapnel Embers (optimized count)
    const sparkCount = 14;
    for (let i = 0; i < sparkCount; i++) {
      const mesh = new THREE.Mesh(
        this.sharedSparkGeo,
        i % 2 === 0 ? this.sharedSparkMat1 : this.sharedSparkMat2
      );
      mesh.position.copy(origin);
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = 7.0 + Math.random() * 9.0;
      const vel = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed * 0.9 + 3.0,
        (Math.random() - 0.5) * 2.5
      );
      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );

      this.particles.push({
        type: 'debris',
        mesh,
        vel,
        rotVel,
        baseScale: 1.1,
        life: 0.85,
        decay: 1.8,
        sharedMaterial: true
      });
    }

    // 5. Dynamic Flash Light using pre-allocated point light (ZERO runtime shader recompilation!)
    if (this.explosionLight) {
      this.explosionLight.position.set(origin.x, origin.y, 2.0);
      this.explosionLight.intensity = 5.5;
      this.explosionLightTimer = 0.28;
    }
  }

  defeatTarget(targetObj) {
    if (targetObj.destroyed) return;
    targetObj.destroyed = true;

    const pos = targetObj.mesh.position.clone();
    this.scene.remove(targetObj.mesh);
    this.world.removeBody(targetObj.body);
    this.targets = this.targets.filter((t) => t !== targetObj);

    // Awaken nearby structures smoothly
    this.wakeStructuresNear(pos, 5.0);

    this.audio?.playTargetPop();
    const pts = targetObj.isBoss ? 1000 : 500;
    const coinBounty = targetObj.isBoss ? 30 : 15;
    this.score += pts;
    if (!this.isLevelAlreadyCompleted) {
      this.levelCoinsEarned += coinBounty;
    }

    const burstColor =
      targetObj.birdType === 'pink'
        ? 0xec4899
        : targetObj.birdType === 'gold' || targetObj.birdType === 'yellow'
        ? 0xfbbf24
        : targetObj.birdType === 'boss'
        ? 0x818cf8
        : 0x38bdf8;
    this.spawnBurstParticles(pos, burstColor, 16);
    this.emitHudStats();
  }

  spawnBurstParticles(origin, colorHex, count = 12) {
    let mat = this.burstMatCache.get(colorHex);
    if (!mat) {
      mat = new THREE.MeshBasicMaterial({ color: colorHex });
      this.burstMatCache.set(colorHex, mat);
    }

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sharedUnitBoxGeo, mat);
      const scale = 0.12 + Math.random() * 0.12;
      mesh.scale.set(scale, scale, scale);
      mesh.position.copy(origin);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 8.5,
        Math.random() * 6 + 2,
        (Math.random() - 0.5) * 2.8
      );
      this.scene.add(mesh);
      this.particles.push({
        type: 'debris',
        mesh,
        vel,
        rotVel: new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, 0),
        baseScale: scale,
        life: 0.85,
        decay: 1.7,
        sharedMaterial: true
      });
    }
  }

  emitHudStats() {
    if (!this.isPlayingLevel || this.isDashboardMode) {
      return;
    }

    const targetsByType = {};
    this.targets.forEach((t) => {
      if (!t.destroyed) {
        const type = t.birdType || 'blue';
        targetsByType[type] = (targetsByType[type] || 0) + 1;
      }
    });

    this.onStatsChange?.({
      targetsLeft: this.targets.length,
      targetsByType,
      initialTargetsByType: this.initialTargetsByType || {},
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
      this.cameraState = 'RETURN';
      this.onHideAbilityPrompt?.();

      const unusedBirds = Math.max(
        0,
        this.activeBird && this.activeBird.body ? this.birdsQueue.length - 1 : this.birdsQueue.length
      );
      const birdBonus = unusedBirds * 1000;
      this.score += birdBonus;

      if (!this.isLevelAlreadyCompleted) {
        const stageReward = this.currentLevel.coinReward || 100;
        this.levelCoinsEarned += stageReward;
      }

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

    // Check if the currently launched bird and any split projectiles have finished their flight
    if (this.activeBird && this.activeBird.body) {
      const bBody = this.activeBird.body;
      const speed = bBody.velocity.length();
      const flightDuration = (performance.now() - this.activeBird.launchTime) / 1000;
      const mainOutOfBounds =
        bBody.position.y < -1.8 || bBody.position.x > 28 || bBody.position.x < -24;
      const mainSettled = mainOutOfBounds || (flightDuration > 1.1 && speed < 0.45) || flightDuration > 5.0;

      let secondariesSettled = true;
      if (this.secondaryBirds && this.secondaryBirds.length > 0) {
        for (const sb of this.secondaryBirds) {
          if (!sb.body) continue;
          const sSpeed = sb.body.velocity.length();
          const sDur = (performance.now() - sb.launchTime) / 1000;
          const sOut = sb.body.position.y < -1.8 || sb.body.position.x > 28 || sb.body.position.x < -24;
          if (!sOut && (sDur <= 1.1 || sSpeed >= 0.45) && sDur <= 5.0) {
            secondariesSettled = false;
            break;
          }
        }
      }

      if (mainSettled && secondariesSettled) {
        this.audio?.stopFlightSound?.();
        this.cameraState = 'RETURN';
        this.onHideAbilityPrompt?.();
        this.scene.remove(this.activeBird.mesh);
        this.world.removeBody(this.activeBird.body);
        this.activeBird = null;

        if (this.secondaryBirds) {
          this.secondaryBirds.forEach((sb) => {
            this.scene.remove(sb.mesh);
            if (sb.body) this.world.removeBody(sb.body);
          });
          this.secondaryBirds = [];
        }

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
              if (!this.isLevelAlreadyCompleted) {
                const stageReward = this.currentLevel.coinReward || 100;
                this.levelCoinsEarned += stageReward;
              }
              this.onLevelComplete?.({
                won: true,
                levelId: this.currentLevel.id,
                score: this.score,
                coinsEarned: this.levelCoinsEarned,
                starsEarned: 1
              });
            } else {
              this.audio?.playDefeat();
              this.onLevelComplete?.({
                won: false,
                levelId: this.currentLevel.id,
                score: this.score,
                coinsEarned: 0,
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
    if (this.isPaused) return;
    this.isPaused = true;
    this.audio?.stopFlightSound?.();
    this.audio?.stopSlingshotPull?.();
    this.pauseStartTime = performance.now();

    if (this.slingshot) {
      // If player was actively dragging the slingshot when paused, reset drag smoothly
      if (this.slingshot.isDragging) {
        this.slingshot.isDragging = false;
        this.slingshot.activeTouchId = null;
        this.slingshot.hideTrajectory();
        this.slingshot.currentPullPos.set(this.slingshot.anchor.x, this.slingshot.anchor.y, 0);
        if (this.slingshot.currentBirdMesh) {
          this.slingshot.currentBirdMesh.position.set(this.slingshot.anchor.x, this.slingshot.anchor.y, 0);
          this.slingshot.currentBirdMesh.rotation.set(0, 0, 0);
        }
        this.slingshot.updateBands(this.slingshot.anchor);
        this.onAimEnd?.();
      }
      this.slingshot.canInteract = false;
    }
  }

  resume() {
    if (!this.isPaused) return;
    this.isPaused = false;

    // Reset clock delta so no time jump accumulates during pause
    this.clock.getDelta();

    // If bird is currently in flight, shift launchTime by the paused duration so it doesn't instantly timeout
    if (this.activeBird && this.activeBird.body && this.pauseStartTime) {
      const pausedDuration = performance.now() - this.pauseStartTime;
      this.activeBird.launchTime += pausedDuration;
    }

    // Restore slingshot interaction if level is active and bird has not been launched yet
    if (this.slingshot && !this.levelResolved && this.birdsQueue.length > 0) {
      const birdIsLaunched = Boolean(this.activeBird && this.activeBird.body);
      if (!birdIsLaunched) {
        this.slingshot.canInteract = true;
        this.slingshot.birdInFlight = false;
      }
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
    this.world.step(1 / 60, deltaTime, 2);

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

      const birdSpeed = Math.hypot(this.activeBird.body.velocity.x, this.activeBird.body.velocity.y);
      this.audio?.updateFlightSound?.(birdSpeed);
    }

    // Sync secondary split birds strictly on z = 0 plane
    if (this.secondaryBirds && this.secondaryBirds.length > 0) {
      this.secondaryBirds.forEach((sb) => {
        if (!sb.body || !sb.mesh) return;
        sb.mesh.position.set(sb.body.position.x, sb.body.position.y, 0);
        sb.body.position.z = 0;
        sb.body.velocity.z = 0;
        sb.mesh.quaternion.copy(sb.body.quaternion);
      });
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

    // Bodies sleep naturally when at rest, freeing CPU cycles for smooth 60fps rendering

    // Update pre-allocated explosion point light (zero runtime shader recompilation)
    if (this.explosionLight && this.explosionLightTimer > 0) {
      this.explosionLightTimer -= deltaTime;
      const progress = Math.max(0, this.explosionLightTimer / 0.28);
      this.explosionLight.intensity = 5.5 * progress;
    } else if (this.explosionLight && this.explosionLight.intensity > 0) {
      this.explosionLight.intensity = 0;
    }

    // Update explosion / debris / smoke / shockwave particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      const decay = p.decay || 1.5;
      p.life -= deltaTime * decay;

      if (p.life <= 0) {
        if (p.mesh) {
          this.scene.remove(p.mesh);
          if (
            p.mesh.geometry &&
            p.mesh.geometry !== this.sharedUnitBoxGeo &&
            p.mesh.geometry !== this.sharedUnitSphereGeo &&
            p.mesh.geometry !== this.sharedShockwaveGeo &&
            p.mesh.geometry !== this.sharedFireballGeo &&
            p.mesh.geometry !== this.sharedSparkGeo
          ) {
            p.mesh.geometry.dispose();
          }
          if (
            p.mesh.material &&
            p.mesh.material !== this.sharedSparkMat1 &&
            p.mesh.material !== this.sharedSparkMat2 &&
            !p.sharedMaterial
          ) {
            p.mesh.material.dispose?.();
          }
        }
        if (p.light) {
          this.scene.remove(p.light);
          p.light.dispose?.();
        }
        this.particles.splice(i, 1);
        continue;
      }

      if (p.type === 'shockwave') {
        const progress = 1.0 - Math.max(0, p.life);
        const currentScale = (p.baseScale || 0.3) + progress * (p.maxExpansion || 6.5);
        p.mesh.scale.set(currentScale, currentScale, 1.0);
        if (p.mesh.material) {
          p.mesh.material.opacity = (p.baseOpacity || 0.95) * (p.life * p.life);
        }
      } else if (p.type === 'fireball') {
        const progress = 1.0 - Math.max(0, p.life);
        const scale = (p.baseScale || 0.5) + progress * 2.8;
        p.mesh.scale.setScalar(scale);
        if (p.mesh.material) {
          p.mesh.material.opacity = (p.baseOpacity || 1.0) * (p.life * p.life);
          if (p.life > 0.6) {
            p.mesh.material.color.setHex(0xfef08a);
          } else if (p.life > 0.3) {
            p.mesh.material.color.setHex(0xf97316);
          } else {
            p.mesh.material.color.setHex(0xdc2626);
          }
        }
      } else if (p.type === 'smoke') {
        p.vel.x *= Math.max(0, 1.0 - deltaTime * 1.6);
        p.vel.y += deltaTime * 0.9; // buoyancy rise
        p.mesh.position.addScaledVector(p.vel, deltaTime);
        const progress = 1.0 - Math.max(0, p.life);
        const currentScale = (p.baseScale || 1.0) * (1.0 + progress * 1.9);
        p.mesh.scale.setScalar(currentScale);
        if (p.mesh.material) {
          p.mesh.material.opacity = (p.baseOpacity || 0.6) * Math.max(0, p.life);
        }
      } else {
        // 'debris' or standard burst particle
        p.vel.y -= 19.0 * deltaTime; // gravity
        p.mesh.position.addScaledVector(p.vel, deltaTime);

        // Ground bounce on z=0 floor plane
        if (p.mesh.position.y <= 0.12) {
          p.mesh.position.y = 0.12;
          p.vel.y = Math.abs(p.vel.y) * 0.38;
          p.vel.x *= 0.68;
        }

        if (p.rotVel) {
          p.mesh.rotation.x += p.rotVel.x * deltaTime;
          p.mesh.rotation.y += p.rotVel.y * deltaTime;
          p.mesh.rotation.z += (p.rotVel.z || 0) * deltaTime;
        } else {
          p.mesh.rotation.x += 4 * deltaTime;
          p.mesh.rotation.y += 5 * deltaTime;
        }

        if (p.baseScaleVec) {
          const s = Math.max(0.01, p.life);
          p.mesh.scale.set(p.baseScaleVec.x * s, p.baseScaleVec.y * s, p.baseScaleVec.z * s);
        } else {
          p.mesh.scale.setScalar(Math.max(0.01, p.life * (p.baseScale || 1.0)));
        }
      }
    }

    // Evaluate shot & win/loss conditions
    this.checkShotAndLevelState();

    // Animate anime environment (drifting clouds, falling cherry blossom petals)
    const elapsedTime = this.clock.elapsedTime;
    this.branding?.update(elapsedTime, deltaTime);

    // ── PROFESSIONAL CINEMATIC CAMERA SYSTEM (ANGRY BIRDS STYLE) ──
    // States: 'OVERVIEW', 'TRACKING', 'RETURN'
    if (this.cameraState === 'TRACKING') {
      if (this.activeBird && this.activeBird.body) {
        const bPos = this.activeBird.body.position;
        const startX = this.slingshot ? this.slingshot.anchor.x : -12.5;
        const targetDestX = this.fortressCenterX || 12.0;
        const totalDistance = Math.max(6.0, targetDestX - startX);
        const flightProgress = THREE.MathUtils.clamp(
          (bPos.x - startX) / totalDistance,
          0.0,
          1.0
        );

        // Smooth cinematic pan from slingshot overview towards fortress
        const targetX = THREE.MathUtils.lerp(
          this.overviewLookAt.x - 1.2,
          targetDestX,
          flightProgress
        );

        // Keep vertical height steady and serene at overviewLookAt.y (no vertical bobbing or jerking)
        const targetY = this.overviewLookAt.y;

        // Ultra-subtle, gentle zoom (~4-5% at most) so scale remains grand and visible
        const targetZ = this.overviewCameraPos.z * 0.95;

        this.targetLookAt.set(targetX, targetY, 0);
        this.targetCameraPos.set(targetX, targetY + 0.2, targetZ);
      } else {
        this.cameraState = 'RETURN';
      }
    } else if (this.cameraState === 'RETURN') {
      this.targetCameraPos.copy(this.overviewCameraPos);
      this.targetLookAt.copy(this.overviewLookAt);

      if (
        this.currentCameraPos.distanceTo(this.overviewCameraPos) < 0.15 &&
        this.currentLookAt.distanceTo(this.overviewLookAt) < 0.15
      ) {
        this.cameraState = 'OVERVIEW';
      }
    } else {
      // 'OVERVIEW'
      this.targetCameraPos.copy(this.overviewCameraPos);
      this.targetLookAt.copy(this.overviewLookAt);
    }

    // Professional cinematic damping rate for buttery-smooth motion without sudden jerks
    const lerpSpeed = this.cameraState === 'TRACKING' ? 2.4 : 2.0;
    const lerpFactor = 1.0 - Math.exp(-lerpSpeed * deltaTime);
    this.currentCameraPos.lerp(this.targetCameraPos, lerpFactor);
    this.currentLookAt.lerp(this.targetLookAt, lerpFactor);

    // Subtle, gentle camera shake (strictly for TNT explosions, decayed rapidly with smooth harmonic wave)
    let camX = this.currentCameraPos.x;
    let camY = this.currentCameraPos.y;
    let camZ = this.currentCameraPos.z;

    if (this.cameraShakeTrauma > 0.001) {
      const traumaSq = this.cameraShakeTrauma * this.cameraShakeTrauma;
      const timeFreq = performance.now() * 0.032;
      const offsetX = Math.sin(timeFreq) * 0.12 * traumaSq;
      const offsetY = Math.cos(timeFreq * 1.3) * 0.08 * traumaSq;
      camX += offsetX;
      camY += offsetY;
      // Fast exponential trauma dissipation so it never lingers or vibrates
      this.cameraShakeTrauma = Math.max(0, this.cameraShakeTrauma - deltaTime * 4.8);
    }

    this.camera.position.set(camX, camY, camZ);
    this.camera.lookAt(this.currentLookAt.x, this.currentLookAt.y, this.currentLookAt.z);

    // Render stationary camera frame
    this.renderer.render(this.scene, this.camera);
  }
}
