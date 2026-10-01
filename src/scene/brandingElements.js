import * as THREE from 'three';
import dilicomLogoBlueUrl from '../assets/logo-blue.png';

/**
 * High-quality anime-style environment with 3D parallax depth and subtle dynamic elements.
 *
 * Visual layers (back → front):
 *   1. Canvas-painted anime sky backdrop with fluffy clouds, sun glow, layered mountain
 *      silhouettes, and cherry blossom tree silhouettes (z = -36)
 *   2. 3D parallax rolling green hills at multiple depths (z = -18 to -24)
 *   3. 3D cherry blossom trees with pink canopy clusters (z = -8 to -16)
 *   4. Wildflower patches along the ground edges
 *   5. Drifting 3D cloud meshes at varying heights/depths
 *   6. Falling cherry blossom petal particle system
 *   7. Stationary "Dili-Birds" brand monument
 */
export class BrandingElements {
  constructor(scene, initialBrandName = 'Dili Birds') {
    this.scene = scene;
    this.brandName = initialBrandName || 'Dili Birds';
    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.clouds = [];   // { group, speed, baseY, phase }
    this.petals = [];   // { mesh, vy, vx, phase, rotSpeed }
    this.driftingPieces = []; // 3D drifting structural blocks & game assets
    this.targetTilt = { x: 0, y: 0 };
    this.currentTilt = { x: 0, y: 0 };
    this.initPointerParallax();

    this.buildAnimeSkyBackdrop();
    this.buildParallaxHills();
    this.buildCherryBlossomTrees();
    this.buildWildflowers();
    this.buildAnimeClouds();
    this.buildCherryBlossomPetals();
    this.buildDrifting3DAssets();
    this.buildStaticBrandMonument();
  }

  /* ═════════════════════════════════════════════════════════════
   * CANVAS PAINTING HELPERS
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Paints a soft, anime-style cumulus cloud using overlapping radial-gradient puffs.
   */
  paintAnimeCloud(ctx, cx, cy, w, h, alpha = 0.9) {
    const puffs = [
      [0, 0, w * 0.42, h * 0.48],
      [-w * 0.26, h * 0.06, w * 0.28, h * 0.36],
      [w * 0.28, h * 0.04, w * 0.3, h * 0.38],
      [-w * 0.46, h * 0.16, w * 0.2, h * 0.27],
      [w * 0.45, h * 0.14, w * 0.22, h * 0.29],
      [0, -h * 0.22, w * 0.26, h * 0.32],
      [-w * 0.14, -h * 0.08, w * 0.32, h * 0.38],
      [w * 0.15, -h * 0.06, w * 0.3, h * 0.36],
    ];

    ctx.save();

    // Warm blue-grey shadow underside
    puffs.forEach(([ox, oy, rx, ry]) => {
      const g = ctx.createRadialGradient(
        cx + ox, cy + oy + h * 0.14, 0,
        cx + ox, cy + oy + h * 0.14, Math.max(rx, ry) * 0.85
      );
      g.addColorStop(0, `rgba(165,185,215,${alpha * 0.26})`);
      g.addColorStop(1, 'rgba(165,185,215,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(cx + ox, cy + oy + h * 0.14, rx * 0.82, ry * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // Main bright white body with soft edge falloff
    puffs.forEach(([ox, oy, rx, ry]) => {
      const g = ctx.createRadialGradient(
        cx + ox, cy + oy, Math.min(rx, ry) * 0.45,
        cx + ox, cy + oy, Math.max(rx, ry)
      );
      g.addColorStop(0, `rgba(255,255,255,${alpha})`);
      g.addColorStop(0.75, `rgba(255,255,255,${alpha * 0.72})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(cx + ox, cy + oy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  /**
   * Paints a cherry blossom tree silhouette onto the canvas backdrop.
   */
  paintTreeSilhouette(ctx, tx, ty, s = 1.0) {
    // Trunk
    ctx.fillStyle = 'rgba(90,55,30,0.6)';
    ctx.fillRect(tx - 3 * s, ty, 6 * s, 35 * s);

    // Pink canopy blobs
    ctx.fillStyle = 'rgba(240,160,185,0.7)';
    [
      [0, -30], [18, -20], [-18, -22], [10, -42],
      [-10, -38], [22, -35], [-20, -32]
    ].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(tx + ox * s, ty + oy * s, 18 * s, 0, Math.PI * 2);
      ctx.fill();
    });

    // Lighter pink highlights
    ctx.fillStyle = 'rgba(255,195,215,0.5)';
    [[5, -35], [-12, -28], [15, -25]].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(tx + ox * s, ty + oy * s, 10 * s, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * BUILD METHODS
   * ═════════════════════════════════════════════════════════════ */

  /**
   * 2048×1024 canvas-painted anime sky with gradient, sun glow, clouds, layered mountain
   * silhouettes, and cherry blossom tree silhouettes.
   */
  buildAnimeSkyBackdrop() {
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 1024;
    const ctx = c.getContext('2d');

    // ── 1. Anime sky gradient ──
    const sky = ctx.createLinearGradient(0, 0, 0, 1024);
    sky.addColorStop(0.0, '#1a5fb4');    // deep azure zenith
    sky.addColorStop(0.20, '#3d98d8');   // bright blue
    sky.addColorStop(0.40, '#6cb8e8');   // mid sky
    sky.addColorStop(0.55, '#a8daf4');   // pale blue
    sky.addColorStop(0.66, '#e8f0d8');   // horizon cream-green
    sky.addColorStop(0.76, '#b8d888');   // distant hillside
    sky.addColorStop(0.86, '#78b050');   // closer green
    sky.addColorStop(1.0, '#4a8830');    // foreground green
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 2048, 1024);

    // ── 2. Warm sun glow (upper-right) ──
    const sg = ctx.createRadialGradient(1180, 420, 18, 1180, 420, 480);
    sg.addColorStop(0, 'rgba(255,250,220,0.55)');
    sg.addColorStop(0.25, 'rgba(255,245,200,0.3)');
    sg.addColorStop(0.6, 'rgba(200,230,248,0.1)');
    sg.addColorStop(1, 'rgba(200,230,248,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, 2048, 1024);

    // ── 3. Far mountain silhouettes (misty blue-grey) ──
    ctx.fillStyle = 'rgba(110,140,180,0.45)';
    ctx.beginPath();
    ctx.moveTo(0, 1024);
    [
      [0, 700], [140, 580], [320, 650], [520, 510], [740, 620],
      [980, 500], [1200, 580], [1420, 470], [1650, 560], [1850, 500],
      [2048, 555], [2048, 1024]
    ].forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fill();

    // ── 4. Mid mountain layer (blue-green) ──
    const mGrad = ctx.createLinearGradient(0, 580, 0, 820);
    mGrad.addColorStop(0, 'rgba(65,115,85,0.65)');
    mGrad.addColorStop(1, 'rgba(55,100,65,0.45)');
    ctx.fillStyle = mGrad;
    ctx.beginPath();
    ctx.moveTo(0, 1024);
    [
      [0, 740], [200, 660], [420, 720], [680, 630], [960, 700],
      [1250, 620], [1500, 710], [1780, 650], [2048, 710], [2048, 1024]
    ].forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fill();

    // ── 5. Near foothill layer (warm green) ──
    const fGrad = ctx.createLinearGradient(0, 690, 0, 1024);
    fGrad.addColorStop(0, '#5a9a3a');
    fGrad.addColorStop(0.5, '#4a8830');
    fGrad.addColorStop(1, '#3a7428');
    ctx.fillStyle = fGrad;
    ctx.beginPath();
    ctx.moveTo(0, 1024);
    [
      [0, 785], [280, 720], [560, 770], [840, 710], [1100, 750],
      [1380, 700], [1680, 760], [1920, 730], [2048, 770], [2048, 1024]
    ].forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fill();

    // ── 6. Cherry blossom tree silhouettes on foothills ──
    this.paintTreeSilhouette(ctx, 240, 758, 1.8);
    this.paintTreeSilhouette(ctx, 580, 748, 1.5);
    this.paintTreeSilhouette(ctx, 1050, 738, 1.3);
    this.paintTreeSilhouette(ctx, 1420, 728, 2.0);
    this.paintTreeSilhouette(ctx, 1780, 748, 1.6);

    // ── 7. Painted anime clouds (on top of everything) ──
    this.paintAnimeCloud(ctx, 300, 190, 260, 95, 0.90);
    this.paintAnimeCloud(ctx, 850, 155, 330, 115, 0.92);
    this.paintAnimeCloud(ctx, 1520, 215, 270, 100, 0.86);
    this.paintAnimeCloud(ctx, 160, 310, 185, 68, 0.68);
    this.paintAnimeCloud(ctx, 1160, 340, 225, 82, 0.72);
    this.paintAnimeCloud(ctx, 1820, 290, 200, 72, 0.75);

    // ── Create textured backdrop plane (expanded for dynamic camera zooming) ──
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;

    const backdrop = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 115),
      new THREE.MeshBasicMaterial({ map: tex, depthWrite: false, fog: false })
    );
    backdrop.position.set(1, 24, -48);
    this.root.add(backdrop);
  }

  /**
   * Smooth rolling 3D green hills at multiple Z-depths for natural parallax.
   */
  buildParallaxHills() {
    const greens = [
      new THREE.MeshStandardMaterial({ color: 0x4a9c32, roughness: 0.78 }),
      new THREE.MeshStandardMaterial({ color: 0x3a8a28, roughness: 0.82 }),
      new THREE.MeshStandardMaterial({ color: 0x58a840, roughness: 0.75 }),
    ];

    const hills = [
      { pos: [-38, -6, -25], sx: 20, sy: 9.0, sz: 10, mi: 0 },
      { pos: [-22, -5, -22], sx: 18, sy: 8.5, sz: 9, mi: 1 },
      { pos: [-4, -5.5, -24], sx: 22, sy: 9.5, sz: 10, mi: 0 },
      { pos: [14, -5, -21], sx: 17, sy: 8.0, sz: 8, mi: 1 },
      { pos: [28, -5, -23], sx: 15, sy: 7.5, sz: 9, mi: 0 },
      { pos: [40, -6, -25], sx: 19, sy: 8.8, sz: 10, mi: 1 },
      { pos: [-14, -3.5, -15], sx: 12, sy: 6.0, sz: 5.5, mi: 2 },
      { pos: [8, -3.8, -16], sx: 13, sy: 6.5, sz: 5.8, mi: 2 },
      { pos: [24, -3.2, -14], sx: 10, sy: 5.8, sz: 5, mi: 0 },
    ];

    hills.forEach(({ pos, sx, sy, sz, mi }) => {
      const geo = new THREE.SphereGeometry(1, 24, 16);
      geo.scale(sx, sy, sz);
      const mesh = new THREE.Mesh(geo, greens[mi]);
      mesh.position.set(...pos);
      mesh.receiveShadow = true;
      this.root.add(mesh);
    });
  }

  /**
   * Creates a single 3D cherry blossom tree: brown trunk + branches + pink canopy clusters.
   */
  createCherryTree(trunkH = 2.8, canopyR = 2.2, scale = 1.0) {
    const tree = new THREE.Group();

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3a20, roughness: 0.85 });
    const pinks = [
      new THREE.MeshStandardMaterial({ color: 0xffc0d0, roughness: 0.62, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xf5a0be, roughness: 0.65, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xe88098, roughness: 0.68, flatShading: true }),
    ];

    // Main trunk
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12 * scale, 0.24 * scale, trunkH * scale, 8),
      trunkMat
    );
    trunk.position.y = trunkH * scale * 0.5;
    trunk.castShadow = true;
    tree.add(trunk);

    // Major branches
    [[-0.7, 0.65, 0.6], [0.6, 0.72, -0.55], [0, 0.82, 0.15]].forEach(([xDir, hR, zDir]) => {
      const brLen = trunkH * scale * 0.45;
      const br = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04 * scale, 0.1 * scale, brLen, 6),
        trunkMat
      );
      br.position.set(xDir * 0.35 * scale, trunkH * scale * hR, zDir * 0.1 * scale);
      br.rotation.z = xDir * 0.65;
      tree.add(br);
    });

    // Blossom canopy clusters (overlapping dodecahedrons)
    const blossoms = [
      [0, 1.05, 0, 1.0],
      [-0.38, 0.88, 0.22, 0.85],
      [0.42, 0.92, -0.18, 0.88],
      [-0.2, 1.18, -0.14, 0.72],
      [0.24, 1.15, 0.16, 0.74],
      [-0.56, 0.75, -0.1, 0.6],
      [0.54, 0.78, 0.12, 0.62],
      [0, 0.82, 0.28, 0.58],
      [0.12, 1.25, -0.06, 0.52],
    ];

    blossoms.forEach(([xr, yr, zr, sizeR], i) => {
      const r = canopyR * scale * sizeR * 0.42;
      const geo = new THREE.DodecahedronGeometry(r, 1);
      const blob = new THREE.Mesh(geo, pinks[i % 3]);
      blob.position.set(
        xr * canopyR * scale,
        trunkH * scale * yr,
        zr * canopyR * scale
      );
      blob.rotation.set(i * 0.8, i * 1.2, i * 0.5);
      blob.castShadow = true;
      tree.add(blob);
    });

    return tree;
  }

  /**
   * Places 6 3D cherry blossom trees around the background, framing the gameplay area.
   */
  buildCherryBlossomTrees() {
    const trees = [
      { pos: [-20, 0, -9], h: 3.2, r: 2.6, s: 1.1 },
      { pos: [-16, 0, -13], h: 2.8, r: 2.2, s: 0.9 },
      { pos: [20, 0, -10], h: 3.0, r: 2.5, s: 1.05 },
      { pos: [24, 0, -13], h: 2.6, r: 2.0, s: 0.85 },
      { pos: [-8, 0, -17], h: 2.5, r: 2.0, s: 0.8 },
      { pos: [6, 0, -18], h: 2.4, r: 1.8, s: 0.75 },
    ];

    trees.forEach(({ pos, h, r, s }) => {
      const tree = this.createCherryTree(h, r, s);
      tree.position.set(...pos);
      this.root.add(tree);
    });
  }

  /**
   * Scatters small wildflower meshes along the ground edges for anime grassland charm.
   */
  buildWildflowers() {
    const colors = [0xffffff, 0xffd700, 0xff8c00, 0xffb6c1, 0xe8e048, 0xf08080, 0xdda0dd];
    const geo = new THREE.SphereGeometry(0.08, 6, 4);

    for (let i = 0; i < 30; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        roughness: 0.5
      });
      const flower = new THREE.Mesh(geo, mat);
      const x = -22 + Math.random() * 44;
      const z = Math.random() < 0.5
        ? -5.5 - Math.random() * 3
        : 5.5 + Math.random() * 3;
      flower.position.set(x, 0.08 + Math.random() * 0.06, z);
      this.root.add(flower);
    }

    // Taller grass-like wildflower clusters near foreground trees
    const tallGeo = new THREE.ConeGeometry(0.06, 0.28, 4);
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x5cb848, roughness: 0.7 });

    for (let i = 0; i < 20; i++) {
      const blade = new THREE.Mesh(tallGeo, greenMat);
      const x = -22 + Math.random() * 44;
      const z = Math.random() < 0.5
        ? -6 - Math.random() * 2
        : 6 + Math.random() * 2;
      blade.position.set(x, 0.14, z);
      blade.rotation.z = (Math.random() - 0.5) * 0.3;
      this.root.add(blade);
    }
  }

  /**
   * Creates 6 drifting 3D cloud groups at varying heights/depths.
   * Each cloud is a cluster of semi-transparent dodecahedrons.
   */
  buildAnimeClouds() {
    const cloudMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      fog: false
    });

    const cloudConfigs = [
      { x: -18, y: 16, z: -24, scale: 2.4, speed: 0.25 },
      { x: 4, y: 19, z: -28, scale: 3.0, speed: 0.18 },
      { x: 22, y: 14, z: -18, scale: 2.0, speed: 0.35 },
      { x: -10, y: 21, z: -30, scale: 2.8, speed: 0.15 },
      { x: 14, y: 17, z: -22, scale: 2.2, speed: 0.28 },
      { x: -28, y: 13, z: -15, scale: 1.8, speed: 0.4 },
    ];

    const puffLayout = [
      [0, 0, 0, 1.0],
      [-0.62, 0.05, 0.1, 0.72],
      [0.65, 0.08, -0.08, 0.75],
      [-1.12, 0.15, -0.05, 0.52],
      [1.08, 0.12, 0.1, 0.55],
    ];

    cloudConfigs.forEach((cfg, ci) => {
      const group = new THREE.Group();

      puffLayout.forEach(([px, py, pz, ps]) => {
        const puff = new THREE.Mesh(
          new THREE.DodecahedronGeometry(cfg.scale * ps * 0.45, 2),
          cloudMat
        );
        puff.position.set(px * cfg.scale * 1.6, py * cfg.scale, pz * cfg.scale);
        puff.scale.y *= 0.5; // flatten for cumulus shape
        group.add(puff);
      });

      group.position.set(cfg.x, cfg.y, cfg.z);
      this.root.add(group);

      this.clouds.push({
        group,
        speed: cfg.speed,
        baseY: cfg.y,
        phase: ci * 1.7
      });
    });
  }

  /**
   * Creates 65 falling cherry blossom petal meshes that drift and sway gently.
   */
  buildCherryBlossomPetals() {
    const petalColors = [0xffc0d0, 0xf8a0c0, 0xf07898, 0xfff0f5, 0xffb0c8];
    const geo = new THREE.PlaneGeometry(1, 1);

    for (let i = 0; i < 65; i++) {
      const size = 0.06 + Math.random() * 0.12;
      const mat = new THREE.MeshBasicMaterial({
        color: petalColors[i % petalColors.length],
        transparent: true,
        opacity: 0.78 + Math.random() * 0.18,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const petal = new THREE.Mesh(geo, mat);
      petal.scale.set(size, size * (0.6 + Math.random() * 0.4), 1);

      // Scatter across the full scene volume
      petal.position.set(
        -24 + Math.random() * 48,
        Math.random() * 24,
        -28 + Math.random() * 32
      );
      petal.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      this.root.add(petal);

      this.petals.push({
        mesh: petal,
        vy: -(0.8 + Math.random() * 1.4),   // gentle fall speed
        vx: 0.15 + Math.random() * 0.5,       // light rightward wind drift
        phase: Math.random() * Math.PI * 2,
        rotSpeed: {
          x: (Math.random() - 0.5) * 2.5,
          y: (Math.random() - 0.5) * 2.0,
          z: (Math.random() - 0.5) * 3.0
        }
      });
    }
  }

  /**
   * Creates a canvas texture displaying "Dili-Birds" text for the monument sign.
   */
  createBrandTexture(text = 'Dili-Birds') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 1024, 256);
    grad.addColorStop(0, '#1a3a4a');
    grad.addColorStop(0.5, '#2a4a5a');
    grad.addColorStop(1, '#1a3a4a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    ctx.strokeStyle = '#f5a0be';
    ctx.lineWidth = 8;
    ctx.strokeRect(14, 14, 996, 228);

    ctx.fillStyle = '#fff0f5';
    ctx.font = 'bold 100px "Fredoka", "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 512, 108);

    ctx.fillStyle = '#f5a0be';
    ctx.font = 'bold 26px "Inter", sans-serif';
    ctx.fillText('✿ OFFICIAL ARENA ✿', 512, 196);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  /**
   * Stationary "Dili-Birds" brand monument in the mid-ground with sculpted logo emblem.
   */
  buildStaticBrandMonument() {
    this.monumentGroup = new THREE.Group();
    this.monumentGroup.position.set(-1.0, 0, -11.5);

    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x3a4a55,
      roughness: 0.65,
      metalness: 0.2
    });

    const base = new THREE.Mesh(new THREE.BoxGeometry(8.6, 1.2, 1.6), pedestalMat);
    base.position.y = 0.6;
    base.receiveShadow = true;
    this.monumentGroup.add(base);

    [-3.6, 3.6].forEach((xOffset) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3.8, 0.9), pedestalMat);
      pillar.position.set(xOffset, 2.5, 0);
      this.monumentGroup.add(pillar);
    });

    this.monumentTexture = this.createBrandTexture(this.brandName);
    const signBoardMat = new THREE.MeshStandardMaterial({
      map: this.monumentTexture,
      roughness: 0.3,
      metalness: 0.1
    });

    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(7.2, 2.0, 0.45),
      new THREE.MeshStandardMaterial({ color: 0x1e3040, metalness: 0.4, roughness: 0.45 })
    );
    frame.position.set(0, 2.8, 0);
    this.monumentGroup.add(frame);

    this.monumentSignMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 1.7), signBoardMat);
    this.monumentSignMesh.position.set(0, 2.8, 0.24);
    this.monumentGroup.add(this.monumentSignMesh);

    // Mounting support stem connecting billboard top to rotating emblem
    const stemGeo = new THREE.CylinderGeometry(0.1, 0.14, 0.95, 16);
    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.5,
      roughness: 0.35
    });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.set(0, 4.25, 0);
    this.monumentGroup.add(stem);

    // Official Dilicom rotating brand emblem group
    this.rotatingLogoGroup = new THREE.Group();
    this.rotatingLogoGroup.position.set(0, 5.0, 0);

    // Load official Dilicom blue logo texture
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load(dilicomLogoBlueUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
    });

    // 3D Medallion Disc Base
    const discGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.15, 48);
    discGeo.rotateX(Math.PI / 2);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.22
    });
    const disc = new THREE.Mesh(discGeo, discMat);
    this.rotatingLogoGroup.add(disc);

    // Sleek metallic royal blue outer bezel ring
    const ringGeo = new THREE.TorusGeometry(0.98, 0.07, 16, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.75,
      roughness: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    this.rotatingLogoGroup.add(ring);

    // Front & Back Logo Face Materials
    const logoFaceMat = new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      roughness: 0.2,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });

    // Front face (facing +Z)
    const frontLogo = new THREE.Mesh(new THREE.PlaneGeometry(1.52, 0.92), logoFaceMat);
    frontLogo.position.set(0, 0, 0.082);
    this.rotatingLogoGroup.add(frontLogo);

    // Back face (facing -Z, un-mirrored scale so logo reads properly from both sides)
    const backLogo = new THREE.Mesh(new THREE.PlaneGeometry(1.52, 0.92), logoFaceMat);
    backLogo.position.set(0, 0, -0.082);
    backLogo.rotation.y = Math.PI;
    backLogo.scale.x = -1;
    this.rotatingLogoGroup.add(backLogo);

    this.monumentGroup.add(this.rotatingLogoGroup);
    this.root.add(this.monumentGroup);
  }

  /* ═════════════════════════════════════════════════════════════
   * 3D DRIFTING ASSETS & INTERACTIVE PARALLAX
   * ═════════════════════════════════════════════════════════════ */

  initPointerParallax() {
    if (typeof window === 'undefined') return;
    window.addEventListener('pointermove', (e) => {
      this.targetTilt.x = ((e.clientX / window.innerWidth) - 0.5) * 2;
      this.targetTilt.y = ((e.clientY / window.innerHeight) - 0.5) * 2;
    }, { passive: true });
  }

  /**
   * Builds a multi-layer 3D animated background system where game assets and structural pieces
   * (timber planks, stone blocks, golden coins, TNT crates, and glowing celestial crystals)
   * drift across deep, midground, and peripheral depths to create rich environmental perspective.
   */
  buildDrifting3DAssets() {
    this.driftingGroup = new THREE.Group();
    this.root.add(this.driftingGroup);

    // High-quality anime-stylized materials
    const woodMat = new THREE.MeshStandardMaterial({
      color: 0xc27838,
      roughness: 0.68,
      metalness: 0.08
    });

    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.82,
      metalness: 0.05
    });

    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.22,
      metalness: 0.88,
      emissive: 0xd97706,
      emissiveIntensity: 0.22
    });

    const tntMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.52,
      metalness: 0.08
    });

    const crystalCyanMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.65,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85
    });

    const crystalMagentaMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0xbe123c,
      emissiveIntensity: 0.65,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85
    });

    const assetTemplates = [
      { geo: new THREE.BoxGeometry(0.55, 2.4, 0.45), mat: woodMat, baseScale: 0.95 },
      { geo: new THREE.BoxGeometry(1.0, 1.0, 0.9), mat: woodMat, baseScale: 0.85 },
      { geo: new THREE.BoxGeometry(1.25, 1.25, 1.05), mat: stoneMat, baseScale: 0.9 },
      { geo: new THREE.BoxGeometry(0.7, 2.2, 0.7), mat: stoneMat, baseScale: 0.85 },
      { geo: new THREE.CylinderGeometry(0.6, 0.6, 0.16, 24), mat: coinMat, baseScale: 1.05 },
      { geo: new THREE.BoxGeometry(0.95, 0.95, 0.95), mat: tntMat, baseScale: 0.85 },
      { geo: new THREE.OctahedronGeometry(0.7, 0), mat: crystalCyanMat, baseScale: 0.9 },
      { geo: new THREE.IcosahedronGeometry(0.65, 0), mat: crystalMagentaMat, baseScale: 0.85 }
    ];

    const totalPieces = 24;
    for (let i = 0; i < totalPieces; i++) {
      const tmpl = assetTemplates[i % assetTemplates.length];
      const mesh = new THREE.Mesh(tmpl.geo, tmpl.mat);
      mesh.castShadow = false;
      mesh.receiveShadow = false;

      // 3 Depth layers:
      // Layer 0 (Deep backdrop): z ~ -24 to -18
      // Layer 1 (Midground): z ~ -14 to -8
      // Layer 2 (Atmospheric foreground periphery): z ~ 4 to 12
      const quadrant = i % 4;
      let x, y, z;
      if (quadrant === 0) {
        // Left flank
        x = -32 + Math.random() * 14;
        y = 2 + Math.random() * 16;
        z = -14 + Math.random() * 24;
      } else if (quadrant === 1) {
        // Right flank
        x = 18 + Math.random() * 16;
        y = 2 + Math.random() * 16;
        z = -14 + Math.random() * 24;
      } else if (quadrant === 2) {
        // Upper canopy / zenith
        x = -24 + Math.random() * 48;
        y = 13 + Math.random() * 9;
        z = -16 + Math.random() * 20;
      } else {
        // Lower atmosphere / floating foreground
        x = -26 + Math.random() * 52;
        y = -1.5 + Math.random() * 5.5;
        z = -8 + Math.random() * 22;
      }

      mesh.position.set(x, y, z);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const s = tmpl.baseScale * (0.8 + Math.random() * 0.45);
      mesh.scale.set(s, s, s);

      this.driftingGroup.add(mesh);

      this.driftingPieces.push({
        mesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        driftSpeed: (0.16 + Math.random() * 0.28) * (quadrant % 2 === 0 ? 1 : -0.8),
        floatFreq: 0.55 + Math.random() * 0.75,
        floatAmp: 0.4 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        tiltFactor: 1.2 + Math.random() * 1.4,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.35,
          y: (Math.random() - 0.5) * 0.45,
          z: (Math.random() - 0.5) * 0.3
        }
      });
    }

    // Default to true (in dashboard/menu)
    this.driftingGroup.visible = true;
  }

  setDashboardMode(isDashboard) {
    if (this.driftingGroup) {
      this.driftingGroup.visible = Boolean(isDashboard);
    }
    if (this.monumentGroup) {
      this.monumentGroup.visible = !isDashboard;
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * UPDATE — Animates clouds, petals, drifting assets, and logo
   * ═════════════════════════════════════════════════════════════ */

  update(elapsedTime, deltaTime) {
    // ── Rotate official Dilicom logo horizontally slowly ──
    if (this.rotatingLogoGroup) {
      this.rotatingLogoGroup.rotation.y += 0.85 * deltaTime;
    }

    // ── Smooth Interactive Parallax Pointer Sway ──
    this.currentTilt.x += (this.targetTilt.x - this.currentTilt.x) * 3.5 * deltaTime;
    this.currentTilt.y += (this.targetTilt.y - this.currentTilt.y) * 3.5 * deltaTime;

    // ── Animate 3D drifting structural blocks & game assets (ONLY in dashboard mode) ──
    if (this.driftingGroup && this.driftingGroup.visible) {
      this.driftingPieces.forEach((p) => {
        p.mesh.position.x += p.driftSpeed * deltaTime;
        if (p.mesh.position.x > 48) {
          p.mesh.position.x = -48;
        } else if (p.mesh.position.x < -48) {
          p.mesh.position.x = 48;
        }

        const floatOffset = Math.sin(elapsedTime * p.floatFreq + p.phase) * p.floatAmp;
        p.mesh.position.y = p.baseY + floatOffset - (this.currentTilt.y * p.tiltFactor * 0.65);
        p.mesh.position.z = p.baseZ + (this.currentTilt.x * p.tiltFactor * 0.75);

        p.mesh.rotation.x += p.rotSpeed.x * deltaTime;
        p.mesh.rotation.y += p.rotSpeed.y * deltaTime;
        p.mesh.rotation.z += p.rotSpeed.z * deltaTime;
      });
    }

    // ── Drift clouds ──
    this.clouds.forEach((c) => {
      c.group.position.x += c.speed * deltaTime;
      c.group.position.y = c.baseY + Math.sin(elapsedTime * 0.45 + c.phase) * 0.18;
      if (c.group.position.x > 52) c.group.position.x = -52;
    });

    // ── Animate falling cherry blossom petals ──
    this.petals.forEach((p) => {
      p.mesh.position.y += p.vy * deltaTime;
      p.mesh.position.x += (p.vx + Math.sin(elapsedTime * 1.3 + p.phase) * 0.55) * deltaTime;
      p.mesh.position.z += Math.cos(elapsedTime * 0.9 + p.phase * 1.3) * 0.28 * deltaTime;

      p.mesh.rotation.x += p.rotSpeed.x * deltaTime;
      p.mesh.rotation.y += p.rotSpeed.y * deltaTime;
      p.mesh.rotation.z += p.rotSpeed.z * deltaTime;

      if (p.mesh.position.y < -1.5) {
        p.mesh.position.set(
          -42 + Math.random() * 84,
          18 + Math.random() * 12,
          -32 + Math.random() * 40
        );
      }
      if (p.mesh.position.x > 45) {
        p.mesh.position.x = -42;
        p.mesh.position.y = 10 + Math.random() * 16;
      }
    });
  }

  updateBrandName(newBrandName) {
    this.brandName = newBrandName || 'Dili-Birds';
    if (this.monumentSignMesh) {
      this.monumentTexture?.dispose();
      this.monumentTexture = this.createBrandTexture(this.brandName);
      this.monumentSignMesh.material.map = this.monumentTexture;
      this.monumentSignMesh.material.needsUpdate = true;
    }
  }
}
