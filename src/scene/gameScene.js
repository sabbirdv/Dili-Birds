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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
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
      maxX: Math.max(14.0, maxX),
      minY: Math.min(0, minY),
      maxY: Math.max(8.0, maxY)
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
    groundBody.addEventListener('collide', (event) => {
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      if (event.body === this.activeBird?.body) {
        this.audio?.stopFlightSound?.();
      }
      if (normalImpact > 1.2) {
        this.audio?.playMaterialImpact('ground', Math.min(1.0, normalImpact * 0.05));
      }
    });
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
    if (id <= 5) {
      themeId = 'emerald';
    } else if (id <= 10) {
      themeId = 'amber';
    } else if (id <= 15) {
      themeId = 'celestial';
    } else {
      themeId = 'summit';
    }

    if (this.currentThemeId === themeId && this.hasAppliedSceneTheme) return;
    this.currentThemeId = themeId;
    this.hasAppliedSceneTheme = true;

    if (themeId === 'amber') {
      this.scene.background = new THREE.Color(0xb45309);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xfce7c8);
        this.scene.fog.density = 0.0035;
      }
      this.hemiLight?.color.setHex(0xffedd5);
      this.hemiLight?.groundColor.setHex(0x78350f);
      if (this.hemiLight) this.hemiLight.intensity = 1.05;
      this.dirLight?.color.setHex(0xffedd5);
      if (this.dirLight) this.dirLight.intensity = 1.65;
      this.fillLight?.color.setHex(0xfde047);

      this.grassMesh?.material.color.setHex(0xd97706);
      this.trimMesh?.material.color.setHex(0xb45309);
      this.cliffMesh?.material.color.setHex(0x78350f);
      this.padMesh?.material.color.setHex(0x92400e);

    } else if (themeId === 'celestial') {
      this.scene.background = new THREE.Color(0x1e1b4b);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0x312e81);
        this.scene.fog.density = 0.0038;
      }
      this.hemiLight?.color.setHex(0x818cf8);
      this.hemiLight?.groundColor.setHex(0x0f172a);
      if (this.hemiLight) this.hemiLight.intensity = 0.95;
      this.dirLight?.color.setHex(0xc7d2fe);
      if (this.dirLight) this.dirLight.intensity = 1.45;
      this.fillLight?.color.setHex(0x38bdf8);

      this.grassMesh?.material.color.setHex(0x0284c7);
      this.trimMesh?.material.color.setHex(0x38bdf8);
      this.cliffMesh?.material.color.setHex(0x1e1b4b);
      this.padMesh?.material.color.setHex(0x312e81);

    } else if (themeId === 'summit') {
      this.scene.background = new THREE.Color(0x090d16);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0x2e1065);
        this.scene.fog.density = 0.004;
      }
      this.hemiLight?.color.setHex(0xfca5a5);
      this.hemiLight?.groundColor.setHex(0x18181b);
      if (this.hemiLight) this.hemiLight.intensity = 1.1;
      this.dirLight?.color.setHex(0xfecdd3);
      if (this.dirLight) this.dirLight.intensity = 1.6;
      this.fillLight?.color.setHex(0xf97316);

      this.grassMesh?.material.color.setHex(0x334155);
      this.trimMesh?.material.color.setHex(0xf59e0b);
      this.cliffMesh?.material.color.setHex(0x0f172a);
      this.padMesh?.material.color.setHex(0x1e293b);

    } else {
      // Emerald
      this.scene.background = new THREE.Color(0x4da8e0);
      if (this.scene.fog) {
        this.scene.fog.color.setHex(0xb8daf0);
        this.scene.fog.density = 0.003;
      }
      this.hemiLight?.color.setHex(0xf0f9ff);
      this.hemiLight?.groundColor.setHex(0x1e293b);
      if (this.hemiLight) this.hemiLight.intensity = 0.95;
      this.dirLight?.color.setHex(0xfff5e0);
      if (this.dirLight) this.dirLight.intensity = 1.55;
      this.fillLight?.color.setHex(0xe0f2fe);

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

  spawnBlock(cfg) {
    const { type, pos, size, isStatic = false } = cfg;
    const alignedPos = [pos[0], pos[1], 0];
    const mesh = createBlockMesh(type, size);
    mesh.position.set(...alignedPos);
    this.scene.add(mesh);

    const halfExtents = new CANNON.Vec3(size[0] / 2, size[1] / 2, size[2] / 2);
    const massMap = {
      glass: 1.6,
      wood: 3.2,
      coin: 2.2,
      tnt: 2.0,
      stone: 5.6,
      metal: 6.8
    };
    const hpMap = {
      glass: 20,
      coin: 26,
      tnt: 16,
      wood: 50,
      stone: 95,
      metal: 120
    };

    const mass = isStatic ? 0 : (massMap[type] || 3.2);

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
    body.sleepSpeedLimit = 0.1;
    body.sleepTimeLimit = 0.8;
    body.sleep();

    const maxHp = hpMap[type] || 50;
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

      const isBirdHit = event.body === this.activeBird?.body;
      const normalImpact = Math.abs(event.contact.getImpactVelocityAlongNormal());
      const now = performance.now();

      // Debounce micro-contacts within 100ms (prevents multi-step iteration over-damage)
      if (now - blockObj.lastHitTime < 100) {
        return;
      }

      // Direct impact from player bird
      if (isBirdHit) {
        this.audio?.stopFlightSound?.();
        // Awaken full structure physics when bird actually strikes the tower
        if (!this.structureAwakened) {
          this.structureAwakened = true;
          this.world.allowSleep = false;
          this.wakeAllStructures();
        }

        // Light graze or glancing collision (< 1.8 normal impact) deals zero damage
        if (normalImpact < 1.8) {
          this.audio?.playMaterialImpact(blockObj.type, 0.15);
          return;
        }

        blockObj.lastHitTime = now;

        const birdType = this.activeBird?.type || 'red';
        let birdMultiplier = 1.0;
        if (birdType === 'speed') {
          birdMultiplier = blockObj.type === 'glass' ? 2.5 : 1.0;
        } else if (birdType === 'heavy') {
          birdMultiplier = blockObj.type === 'stone' ? 2.3 : blockObj.type === 'metal' ? 2.4 : 1.8;
        }

        // Damage derived from normal impact collision force
        const effectiveImpact = normalImpact - 1.2;
        const dmg = effectiveImpact * 2.8 * birdMultiplier;

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
      } else if (normalImpact >= 7.8) {
        // Only high-velocity falls or heavy direct crushes damage blocks (prevents normal leaning from collapsing towers)
        blockObj.lastHitTime = now;
        this.audio?.playMaterialImpact(blockObj.type, Math.min(1.0, normalImpact * 0.06));
        const debrisDmg = (normalImpact - 6.2) * 2.0;
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
    const { pos, isBoss = false } = cfg;
    const radius = cfg.radius || (isBoss ? 0.58 : 0.44);
    const alignedPos = [pos[0], pos[1], 0];
    const mesh = createTargetMesh(radius, isBoss);
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

    const targetObj = {
      mesh,
      body,
      radius,
      isBoss,
      hp: isBoss ? 26 : 14,
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

    // Smoothly return camera to overview when new bird is prepared
    this.cameraState = 'RETURN';

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
    const mass = this.activeBird.type === 'heavy' ? 4.8 : 2.5;

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
   * replacing instant vanishing with a satisfying tactile shattering effect.
   */
  spawnBlockShatter(blockObj, origin) {
    const size = blockObj.size || [1.0, 1.0, 1.0];
    const type = blockObj.type || 'wood';

    // Prune oldest particles if pool is full to maintain 60 FPS
    if (this.particles.length > 70) {
      const dropCount = Math.min(15, this.particles.length - 55);
      for (let k = 0; k < dropCount; k++) {
        const oldP = this.particles.shift();
        if (oldP?.mesh) {
          this.scene.remove(oldP.mesh);
        }
      }
    }

    // 1. Physical tumbling 3D debris chunks
    const paletteMap = {
      wood: [0xc27838, 0x8f4f1a, 0xd97706],
      stone: [0x64748b, 0x475569, 0x94a3b8],
      glass: [0x7dd3fc, 0x38bdf8, 0xe0f2fe],
      metal: [0x94a3b8, 0x64748b, 0x334155, 0x38bdf8],
      coin: [0xfbbf24, 0xf59e0b, 0x38bdf8]
    };
    const colors = paletteMap[type] || [0xc27838, 0x8f4f1a];
    const chunkCount = type === 'stone' || type === 'metal' ? 6 : type === 'glass' ? 7 : 5;

    for (let i = 0; i < chunkCount; i++) {
      const color = colors[i % colors.length];
      const chunkW = Math.max(0.12, (size[0] / 3) * (0.6 + Math.random() * 0.7));
      const chunkH = Math.max(0.12, (size[1] / 3) * (0.6 + Math.random() * 0.7));
      const chunkD = Math.max(0.12, (size[2] / 2) * (0.6 + Math.random() * 0.7));

      const isGlass = type === 'glass';
      const isMetal = type === 'metal';
      const mat = isGlass
        ? new THREE.MeshPhysicalMaterial({
            color,
            transparent: true,
            opacity: 0.85,
            roughness: 0.1,
            metalness: 0.1,
            transmission: 0.3
          })
        : new THREE.MeshStandardMaterial({
            color,
            roughness: isMetal ? 0.28 : type === 'stone' ? 0.8 : 0.55,
            metalness: isMetal ? 0.85 : type === 'coin' ? 0.6 : 0.05
          });

      // Scale unit box via matrix rather than allocating new geometries every hit
      const mesh = new THREE.Mesh(this.sharedUnitBoxGeo, mat);
      mesh.scale.set(chunkW, chunkH, chunkD);
      mesh.castShadow = true;
      const offsetX = (Math.random() - 0.5) * (size[0] * 0.6);
      const offsetY = (Math.random() - 0.5) * (size[1] * 0.6);
      mesh.position.set(origin.x + offsetX, origin.y + offsetY, (Math.random() - 0.5) * 0.3);
      this.scene.add(mesh);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 7.5 + (offsetX * 3.5),
        Math.random() * 5.5 + 2.0,
        (Math.random() - 0.5) * 2.2
      );
      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 16
      );

      this.particles.push({
        type: 'debris',
        mesh,
        vel,
        rotVel,
        baseScaleVec: new THREE.Vector3(chunkW, chunkH, chunkD),
        baseScale: 1.0,
        life: 1.0,
        decay: 1.3
      });
    }

    // Additional shear sparks for metal breaks
    if (type === 'metal') {
      for (let s = 0; s < 8; s++) {
        const sMesh = new THREE.Mesh(this.sharedSparkGeo, s % 2 === 0 ? this.sharedSparkMat1 : this.sharedSparkMat2);
        sMesh.position.copy(origin);
        this.scene.add(sMesh);
        const sVel = new THREE.Vector3((Math.random() - 0.5) * 10, Math.random() * 7 + 2, (Math.random() - 0.5) * 2);
        this.particles.push({
          type: 'debris',
          mesh: sMesh,
          vel: sVel,
          rotVel: new THREE.Vector3(8, 8, 8),
          baseScale: 0.8,
          life: 0.8,
          decay: 2.2,
          sharedMaterial: true
        });
      }
    }

    // 2. Soft stylized dust / smoke puff
    const dustCount = 3;
    const dustColor = type === 'stone' || type === 'metal' ? 0x94a3b8 : type === 'glass' ? 0xe0f2fe : 0xd1a06d;
    for (let i = 0; i < dustCount; i++) {
      const dustMat = new THREE.MeshBasicMaterial({
        color: dustColor,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(this.sharedUnitSphereGeo, dustMat);
      mesh.scale.setScalar(0.28);
      mesh.position.set(
        origin.x + (Math.random() - 0.5) * (size[0] * 0.5),
        origin.y + (Math.random() - 0.5) * (size[1] * 0.5),
        0.1
      );
      this.scene.add(mesh);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2.2,
        Math.random() * 2.2 + 0.8,
        0
      );

      this.particles.push({
        type: 'smoke',
        mesh,
        vel,
        baseScale: 0.28,
        baseOpacity: 0.55,
        life: 1.0,
        decay: 1.9
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

    // Awaken entire fortress
    this.wakeAllStructures();

    // Balanced, punchy blast radius & force
    const blastRadius = 3.9;
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
        b.hp -= factor * 65;

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

        t.hp -= factor * 35;
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

    // 3. Volumetric Billowing Smoke Plumes
    const smokeColors = [0x1e293b, 0x334155, 0x475569, 0x0f172a, 0x64748b];
    const smokeCount = 12;
    for (let i = 0; i < smokeCount; i++) {
      const color = smokeColors[i % smokeColors.length];
      const radius = 0.42 + Math.random() * 0.35;
      const smokeMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.8,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(this.sharedUnitSphereGeo, smokeMat);
      mesh.scale.setScalar(radius);
      mesh.position.set(
        origin.x + (Math.random() - 0.5) * 0.5,
        origin.y + (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.3
      );
      this.scene.add(mesh);

      const angle = (i / smokeCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
      const speed = 2.6 + Math.random() * 3.4;
      const vel = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed * 0.8 + 2.0,
        (Math.random() - 0.5) * 1.4
      );

      this.particles.push({
        type: 'smoke',
        mesh,
        vel,
        baseScale: radius,
        baseOpacity: 0.8,
        life: 1.0,
        decay: 1.3
      });
    }

    // 4. Incandescent High-Speed Sparks & Shrapnel Embers
    const sparkCount = 26;
    for (let i = 0; i < sparkCount; i++) {
      const mesh = new THREE.Mesh(
        this.sharedSparkGeo,
        i % 2 === 0 ? this.sharedSparkMat1 : this.sharedSparkMat2
      );
      mesh.position.copy(origin);
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = 7.5 + Math.random() * 11.0;
      const vel = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed * 0.9 + 3.2,
        (Math.random() - 0.5) * 2.8
      );
      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18
      );

      this.particles.push({
        type: 'debris',
        mesh,
        vel,
        rotVel,
        baseScale: 1.1,
        life: 1.0,
        decay: 1.6,
        sharedMaterial: true
      });
    }

    // 5. Dynamic Flash Light using pre-allocated point light (ZERO runtime shader recompilation!)
    if (this.explosionLight) {
      this.explosionLight.position.set(origin.x, origin.y, 2.0);
      this.explosionLight.intensity = 6.5;
      this.explosionLightTimer = 0.32;
    }
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
    if (!this.isLevelAlreadyCompleted) {
      this.levelCoinsEarned += coinBounty;
    }

    this.spawnBurstParticles(pos, 0x38bdf8, 18);
    this.emitHudStats();
  }

  spawnBurstParticles(origin, colorHex, count = 14) {
    const mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.45 });

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sharedUnitBoxGeo, mat);
      const scale = 0.12 + Math.random() * 0.14;
      mesh.scale.set(scale, scale, scale);
      mesh.position.copy(origin);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        Math.random() * 7 + 2,
        (Math.random() - 0.5) * 3.5
      );
      this.scene.add(mesh);
      this.particles.push({
        type: 'debris',
        mesh,
        vel,
        rotVel: new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, 0),
        baseScale: scale,
        life: 1.0,
        decay: 1.5
      });
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

    // Check if the currently launched bird has finished its flight
    if (this.activeBird && this.activeBird.body) {
      const bBody = this.activeBird.body;
      const speed = bBody.velocity.length();
      const flightDuration = (performance.now() - this.activeBird.launchTime) / 1000;
      const outOfBounds =
        bBody.position.y < -1.8 || bBody.position.x > 28 || bBody.position.x < -24;

      if (outOfBounds || (flightDuration > 1.1 && speed < 0.45) || flightDuration > 5.0) {
        this.audio?.stopFlightSound?.();
        this.cameraState = 'RETURN';
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

      const birdSpeed = Math.hypot(this.activeBird.body.velocity.x, this.activeBird.body.velocity.y);
      this.audio?.updateFlightSound?.(birdSpeed);
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
    if (this.isPlayingLevel && !this.levelResolved && this.structureAwakened) {
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
