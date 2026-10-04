import * as THREE from 'three';
import dilicomLogoBlueUrl from '../assets/logo-blue.png';
import logoWhiteUrl from '../assets/logo-white.png';
import coinLogoUrl from '../assets/coin-with-logo.png';
import characterRedUrl from '../assets/character.png';
import characterYellowUrl from '../assets/character-2.png';
import characterBlackUrl from '../assets/character-3.png';
import subCharPinkUrl from '../assets/sub-character.png';
import subCharGreenUrl from '../assets/sub-character-2.png';
import subCharBlueUrl from '../assets/sub-character-3.png';
import subCharSparkUrl from '../assets/sub-character-4.png';

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
    this.hillMeshes = [];
    this.treeCanopyMeshes = [];
    this.treeTrunkMeshes = [];
    this.flowerMeshes = [];
    this.backdropTextures = new Map();
    this.currentTheme = 'emerald';
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
   * Generates high-resolution canvas backdrop for the given theme (cached in Map).
   */
  getThemeBackdropTexture(theme = 'emerald') {
    if (this.backdropTextures.has(theme)) {
      return this.backdropTextures.get(theme);
    }

    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 1024;
    const ctx = c.getContext('2d');

    if (theme === 'amber') {
      // ══════════════════════════════════════════════════════════
      // THEME 2: AMBER CANYON & GOLDEN PEAKS (Levels 6–10)
      // Rich golden-hour sunset, layered sandstone bluffs, autumn foliage
      // ══════════════════════════════════════════════════════════
      const sky = ctx.createLinearGradient(0, 0, 0, 1024);
      sky.addColorStop(0.0, '#7c2d12');    // deep russet sunset zenith
      sky.addColorStop(0.22, '#c2410c');   // rich amber-orange
      sky.addColorStop(0.42, '#ea580c');   // fiery apricot
      sky.addColorStop(0.58, '#f59e0b');   // warm golden horizon
      sky.addColorStop(0.68, '#fef3c7');   // luminous sunburst band
      sky.addColorStop(0.78, '#b45309');   // canyon rim
      sky.addColorStop(0.88, '#92400e');   // deep canyon rock
      sky.addColorStop(1.0, '#78350f');    // foreground canyon earth
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, 2048, 1024);

      // Radiant golden sunset disc & crepuscular rays
      const sg = ctx.createRadialGradient(1280, 480, 24, 1280, 480, 520);
      sg.addColorStop(0, 'rgba(255, 255, 230, 0.85)');
      sg.addColorStop(0.2, 'rgba(254, 240, 138, 0.55)');
      sg.addColorStop(0.5, 'rgba(249, 115, 22, 0.22)');
      sg.addColorStop(1, 'rgba(249, 115, 22, 0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, 2048, 1024);

      // Distant towering red-rock mesa & plateau silhouettes
      ctx.fillStyle = 'rgba(124, 45, 18, 0.52)';
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 680], [160, 680], [190, 520], [380, 520], [420, 670],
        [680, 670], [720, 480], [980, 480], [1020, 660],
        [1280, 660], [1320, 460], [1560, 460], [1600, 650],
        [1820, 650], [1860, 510], [2000, 510], [2048, 640], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Mid-distance layered sandstone canyon ridges
      const mGrad = ctx.createLinearGradient(0, 580, 0, 840);
      mGrad.addColorStop(0, 'rgba(180, 83, 9, 0.72)');
      mGrad.addColorStop(1, 'rgba(146, 64, 14, 0.55)');
      ctx.fillStyle = mGrad;
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 720], [240, 640], [480, 710], [760, 620], [1040, 680],
        [1320, 610], [1600, 690], [1880, 630], [2048, 700], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Golden autumn tree silhouettes on ridges
      this.paintAutumnTreeSilhouette(ctx, 320, 720, 1.8);
      this.paintAutumnTreeSilhouette(ctx, 780, 710, 1.6);
      this.paintAutumnTreeSilhouette(ctx, 1260, 690, 1.9);
      this.paintAutumnTreeSilhouette(ctx, 1680, 710, 1.5);

      // Warm golden anime sunset clouds
      this.paintAnimeCloud(ctx, 280, 210, 280, 100, 0.88);
      this.paintAnimeCloud(ctx, 880, 170, 340, 120, 0.90);
      this.paintAnimeCloud(ctx, 1580, 230, 290, 110, 0.85);
      this.paintAnimeCloud(ctx, 1220, 350, 240, 85, 0.75);

    } else if (theme === 'celestial') {
      // ══════════════════════════════════════════════════════════
      // THEME 3: CELESTIAL TWILIGHT & FLOATING CRYSTALS (Levels 11–15)
      // Mystical deep indigo-to-cyan sky, luminous waving aurora borealis, stars
      // ══════════════════════════════════════════════════════════
      const sky = ctx.createLinearGradient(0, 0, 0, 1024);
      sky.addColorStop(0.0, '#1e293b');    // vibrant deep navy
      sky.addColorStop(0.25, '#2e3875');   // rich indigo
      sky.addColorStop(0.48, '#4338ca');   // royal twilight purple
      sky.addColorStop(0.68, '#0284c7');   // glowing electric cyan
      sky.addColorStop(0.82, '#0ea5e9');   // horizon glow
      sky.addColorStop(1.0, '#164e63');    // crystal base
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, 2048, 1024);

      // Twinkling celestial constellations and star field
      ctx.fillStyle = '#ffffff';
      for (let s = 0; s < 180; s++) {
        const sx = (s * 97) % 2040 + 4;
        const sy = (s * 43) % 480 + 10;
        const sRadius = (s % 3 === 0) ? 2.2 : (s % 2 === 0 ? 1.5 : 0.9);
        const sAlpha = 0.4 + (s % 5) * 0.14;
        ctx.fillStyle = `rgba(255, 255, 255, ${sAlpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, sRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Luminous waving Aurora Borealis ribbons across the sky
      for (let a = 0; a < 3; a++) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 320 + a * 50);
        for (let x = 0; x <= 2048; x += 64) {
          const wave = Math.sin((x * 0.0035) + a * 1.8) * 75 + Math.cos((x * 0.008) - a) * 45;
          ctx.lineTo(x, 260 + a * 65 + wave);
        }
        ctx.lineTo(2048, 1024);
        ctx.lineTo(0, 1024);
        ctx.closePath();

        const aurGrad = ctx.createLinearGradient(0, 180 + a * 50, 0, 500 + a * 60);
        aurGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        aurGrad.addColorStop(0.3, a === 1 ? 'rgba(52, 211, 153, 0.42)' : 'rgba(56, 189, 248, 0.38)');
        aurGrad.addColorStop(0.7, 'rgba(167, 139, 250, 0.25)');
        aurGrad.addColorStop(1, 'rgba(30, 27, 75, 0)');
        ctx.fillStyle = aurGrad;
        ctx.fill();
        ctx.restore();
      }

      // Floating crystal archipelago silhouettes in the distance
      ctx.fillStyle = 'rgba(49, 46, 129, 0.65)';
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 680], [180, 560], [280, 620], [480, 480], [620, 600],
        [840, 470], [1060, 590], [1280, 490], [1520, 610], [1760, 510],
        [1940, 580], [2048, 540], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Near crystal ridge with bioluminescent accents
      const cGrad = ctx.createLinearGradient(0, 680, 0, 1024);
      cGrad.addColorStop(0, '#1e1b4b');
      cGrad.addColorStop(0.5, '#134e4a');
      cGrad.addColorStop(1, '#064e3b');
      ctx.fillStyle = cGrad;
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 760], [280, 690], [560, 750], [840, 680], [1120, 740],
        [1400, 670], [1680, 730], [1960, 690], [2048, 740], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Luminous crystal trees on ridges
      this.paintCrystalTreeSilhouette(ctx, 360, 730, 1.7);
      this.paintCrystalTreeSilhouette(ctx, 840, 710, 1.8);
      this.paintCrystalTreeSilhouette(ctx, 1380, 700, 1.9);
      this.paintCrystalTreeSilhouette(ctx, 1820, 720, 1.6);

      // Glowing twilight clouds
      this.paintAnimeCloud(ctx, 320, 200, 260, 95, 0.78);
      this.paintAnimeCloud(ctx, 920, 160, 320, 115, 0.82);
      this.paintAnimeCloud(ctx, 1620, 220, 270, 100, 0.75);

    } else if (theme === 'summit') {
      // ══════════════════════════════════════════════════════════
      // THEME 4: CROWN SUMMIT & VOLCANIC STORM FORTRESS (Levels 36–50)
      // Bright dramatic dusk, luminous amethyst sky, golden horizon — crisp high visibility
      // ══════════════════════════════════════════════════════════
      const sky = ctx.createLinearGradient(0, 0, 0, 1024);
      sky.addColorStop(0.0, '#581c87');    // vibrant royal purple zenith
      sky.addColorStop(0.24, '#7c3aed');   // luminous violet
      sky.addColorStop(0.44, '#c026d3');   // vivid magenta
      sky.addColorStop(0.62, '#e11d48');   // radiant rose dusk
      sky.addColorStop(0.76, '#f97316');   // blazing bright sunset amber
      sky.addColorStop(0.88, '#fef08a');   // luminous golden-white horizon
      sky.addColorStop(1.0, '#78350f');    // warm earthy base
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, 2048, 1024);

      // Distant lightning flash radiance along horizon
      const lg = ctx.createRadialGradient(920, 560, 30, 920, 560, 600);
      lg.addColorStop(0, 'rgba(255, 255, 230, 0.90)');
      lg.addColorStop(0.25, 'rgba(254, 215, 170, 0.65)');
      lg.addColorStop(0.65, 'rgba(217, 70, 239, 0.25)');
      lg.addColorStop(1, 'rgba(147, 51, 234, 0)');
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, 2048, 1024);

      // Towering jagged peaks in soft atmospheric contrast
      ctx.fillStyle = 'rgba(76, 29, 149, 0.45)';
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 700], [140, 480], [240, 650], [380, 430], [520, 620],
        [720, 390], [860, 580], [1080, 360], [1240, 550], [1460, 410],
        [1620, 600], [1820, 440], [1960, 630], [2048, 510], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Near basalt ramparts
      const bGrad = ctx.createLinearGradient(0, 660, 0, 1024);
      bGrad.addColorStop(0, 'rgba(100, 116, 139, 0.65)');
      bGrad.addColorStop(0.5, 'rgba(71, 85, 105, 0.65)');
      bGrad.addColorStop(1, 'rgba(51, 65, 85, 0.85)');
      ctx.fillStyle = bGrad;
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 740], [220, 660], [480, 730], [740, 650], [1020, 710],
        [1300, 640], [1580, 720], [1840, 660], [2048, 730], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Ancient stone obelisks & fortress pinnacles on ridges
      this.paintObeliskSilhouette(ctx, 380, 710, 2.0);
      this.paintObeliskSilhouette(ctx, 860, 680, 2.2);
      this.paintObeliskSilhouette(ctx, 1340, 670, 2.1);
      this.paintObeliskSilhouette(ctx, 1780, 690, 1.9);

      // Dramatic thundercloud anvil clouds with incandescent rim light
      this.paintAnimeCloud(ctx, 360, 180, 320, 110, 0.90);
      this.paintAnimeCloud(ctx, 1020, 140, 380, 135, 0.92);
      this.paintAnimeCloud(ctx, 1680, 190, 330, 120, 0.88);

    } else if (theme === 'solar') {
      // ══════════════════════════════════════════════════════════
      // THEME 5: SOLAR FOUNDRY & GALACTIC HORIZON (Levels 51–60)
      // Brilliant solar radiance, gold & crimson flares, high-key ambient
      // ══════════════════════════════════════════════════════════
      const sky = ctx.createLinearGradient(0, 0, 0, 1024);
      sky.addColorStop(0.0, '#c2410c');    // rich vermilion zenith
      sky.addColorStop(0.25, '#ea580c');   // solar orange
      sky.addColorStop(0.50, '#f97316');   // blazing amber
      sky.addColorStop(0.70, '#facc15');   // brilliant solar yellow
      sky.addColorStop(0.85, '#fef9c3');   // incandescent white horizon
      sky.addColorStop(1.0, '#9a3412');    // rich bronze terrain
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, 2048, 1024);

      // Giant radiant solar orb
      const sg = ctx.createRadialGradient(1024, 460, 40, 1024, 460, 560);
      sg.addColorStop(0, 'rgba(255, 255, 240, 0.95)');
      sg.addColorStop(0.25, 'rgba(254, 240, 138, 0.70)');
      sg.addColorStop(0.60, 'rgba(251, 146, 60, 0.30)');
      sg.addColorStop(1, 'rgba(234, 88, 12, 0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, 2048, 1024);

      // Distant industrial foundry pinnacles
      ctx.fillStyle = 'rgba(154, 52, 18, 0.45)';
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 680], [200, 520], [380, 650], [600, 490], [820, 630],
        [1040, 460], [1280, 620], [1520, 500], [1760, 640], [2048, 530], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      // Near glowing dunes
      const sGrad = ctx.createLinearGradient(0, 640, 0, 1024);
      sGrad.addColorStop(0, 'rgba(217, 119, 6, 0.75)');
      sGrad.addColorStop(1, 'rgba(146, 64, 14, 0.85)');
      ctx.fillStyle = sGrad;
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 720], [260, 650], [540, 710], [820, 640], [1100, 700],
        [1380, 630], [1660, 710], [1940, 650], [2048, 710], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      this.paintAnimeCloud(ctx, 320, 190, 300, 105, 0.90);
      this.paintAnimeCloud(ctx, 960, 150, 360, 125, 0.92);
      this.paintAnimeCloud(ctx, 1620, 200, 310, 110, 0.88);

    } else if (theme === 'cosmic') {
      // ══════════════════════════════════════════════════════════
      // THEME 6: COSMIC APEX & SUPREME REALM (Levels 61–70)
      // Luminous electric indigo, glowing cyan starlight, radiant nebulas
      // ══════════════════════════════════════════════════════════
      const sky = ctx.createLinearGradient(0, 0, 0, 1024);
      sky.addColorStop(0.0, '#312e81');    // vibrant royal indigo zenith
      sky.addColorStop(0.25, '#4338ca');   // electric purple
      sky.addColorStop(0.50, '#2563eb');   // brilliant azure
      sky.addColorStop(0.70, '#06b6d4');   // glowing electric cyan
      sky.addColorStop(0.85, '#a5f3fc');   // luminous horizon glow
      sky.addColorStop(1.0, '#1e1b4b');    // crystal dark base
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, 2048, 1024);

      // Starfield
      for (let s = 0; s < 180; s++) {
        const sx = (s * 97) % 2040 + 4;
        const sy = (s * 43) % 480 + 10;
        const sRadius = (s % 3 === 0) ? 2.5 : 1.5;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.beginPath();
        ctx.arc(sx, sy, sRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Luminous cyan nebula ribbons
      const nebGrad = ctx.createRadialGradient(1024, 480, 50, 1024, 480, 550);
      nebGrad.addColorStop(0, 'rgba(165, 243, 252, 0.85)');
      nebGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.50)');
      nebGrad.addColorStop(0.7, 'rgba(129, 140, 248, 0.25)');
      nebGrad.addColorStop(1, 'rgba(49, 46, 129, 0)');
      ctx.fillStyle = nebGrad;
      ctx.fillRect(0, 0, 2048, 1024);

      // Floating crystal archipelago silhouettes in clean contrast
      ctx.fillStyle = 'rgba(67, 56, 202, 0.40)';
      ctx.beginPath();
      ctx.moveTo(0, 1024);
      [
        [0, 680], [180, 540], [380, 660], [620, 500], [860, 640],
        [1100, 480], [1340, 630], [1580, 520], [1820, 650], [2048, 550], [2048, 1024]
      ].forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fill();

      this.paintCrystalTreeSilhouette(ctx, 360, 710, 1.8);
      this.paintCrystalTreeSilhouette(ctx, 840, 690, 1.9);
      this.paintCrystalTreeSilhouette(ctx, 1380, 680, 2.0);
      this.paintCrystalTreeSilhouette(ctx, 1820, 700, 1.7);

      this.paintAnimeCloud(ctx, 340, 180, 280, 100, 0.88);
      this.paintAnimeCloud(ctx, 980, 150, 340, 120, 0.90);
      this.paintAnimeCloud(ctx, 1600, 210, 290, 105, 0.85);

    } else {
      // ══════════════════════════════════════════════════════════
      // THEME 1: EMERALD VALLEY & SUNNY SKIES (Levels 1–5, Bright & Clean)
      // Classic anime blue sky, warm sun glow, lush rolling green hills, cherry trees
      // ══════════════════════════════════════════════════════════
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

      // Warm sun glow (upper-right)
      const sg = ctx.createRadialGradient(1180, 420, 18, 1180, 420, 480);
      sg.addColorStop(0, 'rgba(255,250,220,0.55)');
      sg.addColorStop(0.25, 'rgba(255,245,200,0.3)');
      sg.addColorStop(0.6, 'rgba(200,230,248,0.1)');
      sg.addColorStop(1, 'rgba(200,230,248,0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, 2048, 1024);

      // Far mountain silhouettes (misty blue-grey)
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

      // Mid mountain layer (blue-green)
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

      // Near foothill layer (warm green)
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

      // Cherry blossom tree silhouettes on foothills
      this.paintTreeSilhouette(ctx, 240, 758, 1.8);
      this.paintTreeSilhouette(ctx, 580, 748, 1.5);
      this.paintTreeSilhouette(ctx, 1050, 738, 1.3);
      this.paintTreeSilhouette(ctx, 1420, 728, 2.0);
      this.paintTreeSilhouette(ctx, 1780, 748, 1.6);

      // Painted anime clouds
      this.paintAnimeCloud(ctx, 300, 190, 260, 95, 0.90);
      this.paintAnimeCloud(ctx, 850, 155, 330, 115, 0.92);
      this.paintAnimeCloud(ctx, 1520, 215, 270, 100, 0.86);
      this.paintAnimeCloud(ctx, 160, 310, 185, 68, 0.68);
      this.paintAnimeCloud(ctx, 1160, 340, 225, 82, 0.72);
      this.paintAnimeCloud(ctx, 1820, 290, 200, 72, 0.75);
    }

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.backdropTextures.set(theme, tex);
    return tex;
  }

  paintAutumnTreeSilhouette(ctx, tx, ty, s = 1.0) {
    ctx.fillStyle = 'rgba(74, 30, 12, 0.75)';
    ctx.fillRect(tx - 3 * s, ty, 6 * s, 36 * s);

    ctx.fillStyle = 'rgba(217, 119, 6, 0.85)';
    [ [0, -32], [20, -22], [-20, -24], [12, -44], [-12, -40], [24, -36], [-22, -34] ].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(tx + ox * s, ty + oy * s, 19 * s, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = 'rgba(251, 191, 36, 0.75)';
    [ [6, -38], [-14, -30], [16, -28] ].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(tx + ox * s, ty + oy * s, 11 * s, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  paintCrystalTreeSilhouette(ctx, tx, ty, s = 1.0) {
    ctx.fillStyle = 'rgba(30, 27, 75, 0.85)';
    ctx.fillRect(tx - 2.5 * s, ty, 5 * s, 36 * s);

    ctx.fillStyle = 'rgba(56, 189, 248, 0.75)';
    [ [0, -34], [16, -24], [-16, -26], [8, -46], [-8, -42], [20, -38], [-18, -36] ].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(tx + ox * s, ty + oy * s, 17 * s, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = 'rgba(167, 139, 250, 0.85)';
    [ [4, -40], [-10, -32], [12, -30] ].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(tx + ox * s, ty + oy * s, 10 * s, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  paintObeliskSilhouette(ctx, tx, ty, s = 1.0) {
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.beginPath();
    ctx.moveTo(tx - 6 * s, ty + 40 * s);
    ctx.lineTo(tx - 3 * s, ty - 35 * s);
    ctx.lineTo(tx, ty - 50 * s);
    ctx.lineTo(tx + 3 * s, ty - 35 * s);
    ctx.lineTo(tx + 6 * s, ty + 40 * s);
    ctx.closePath();
    ctx.fill();

    // Glowing rune line
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.75)';
    ctx.lineWidth = 2 * s;
    ctx.beginPath();
    ctx.moveTo(tx, ty + 30 * s);
    ctx.lineTo(tx, ty - 30 * s);
    ctx.stroke();
  }

  buildAnimeSkyBackdrop() {
    const tex = this.getThemeBackdropTexture(this.currentTheme);
    this.backdropMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 115),
      new THREE.MeshBasicMaterial({ map: tex, depthWrite: false, fog: false })
    );
    this.backdropMesh.position.set(1, 24, -48);
    this.root.add(this.backdropMesh);
  }

  /**
   * Smooth rolling 3D hills at multiple Z-depths for natural parallax.
   */
  buildParallaxHills() {
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
      const mat = new THREE.MeshStandardMaterial({ color: 0x4a9c32, roughness: 0.78 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.receiveShadow = true;
      mesh.userData = { hillIndex: mi };
      this.hillMeshes.push(mesh);
      this.root.add(mesh);
    });
  }

  /**
   * Creates a single 3D tree with theme-responsive foliage clusters.
   */
  createCherryTree(trunkH = 2.8, canopyR = 2.2, scale = 1.0) {
    const tree = new THREE.Group();

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3a20, roughness: 0.85 });
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12 * scale, 0.24 * scale, trunkH * scale, 8),
      trunkMat
    );
    trunk.position.y = trunkH * scale * 0.5;
    trunk.castShadow = true;
    this.treeTrunkMeshes.push(trunk);
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
      this.treeTrunkMeshes.push(br);
      tree.add(br);
    });

    // Foliage canopy clusters
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
      const blob = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({ color: 0xffc0d0, roughness: 0.65, flatShading: true })
      );
      blob.position.set(
        xr * canopyR * scale,
        trunkH * scale * yr,
        zr * canopyR * scale
      );
      blob.rotation.set(i * 0.8, i * 1.2, i * 0.5);
      blob.castShadow = true;
      blob.userData = { blobIndex: i };
      this.treeCanopyMeshes.push(blob);
      tree.add(blob);
    });

    return tree;
  }

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
      this.flowerMeshes.push(flower);
      this.root.add(flower);
    }

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
      this.flowerMeshes.push(blade);
      this.root.add(blade);
    }
  }

  /**
   * Applies the environment visual theme across backdrop, hills, trees, and particles.
   */
  setTheme(theme = 'emerald') {
    if (this.currentTheme === theme && this.hasAppliedThemeOnce) return;
    this.currentTheme = theme;
    this.hasAppliedThemeOnce = true;

    // 1. Update backdrop canvas map
    if (this.backdropMesh && this.backdropMesh.material) {
      this.backdropMesh.material.map = this.getThemeBackdropTexture(theme);
      this.backdropMesh.material.needsUpdate = true;
    }

    // 2. Update 3D parallax hill colors
    const hillPaletteMap = {
      emerald: [0x4a9c32, 0x3a8a28, 0x58a840],
      amber: [0xc2410c, 0xb45309, 0xd97706],
      celestial: [0x4338ca, 0x312e81, 0x0284c7],
      summit: [0x64748b, 0x475569, 0x7c3aed],
      solar: [0xd97706, 0xb45309, 0xea580c],
      cosmic: [0x4338ca, 0x312e81, 0x0ea5e9]
    };
    const hillPalette = hillPaletteMap[theme] || hillPaletteMap.emerald;
    this.hillMeshes.forEach((mesh) => {
      if (mesh?.material) {
        const mi = mesh.userData?.hillIndex || 0;
        mesh.material.color.setHex(hillPalette[mi % hillPalette.length]);
      }
    });

    // 3. Update 3D tree canopies & trunks
    const canopyPaletteMap = {
      emerald: [0xffc0d0, 0xf5a0be, 0xe88098],
      amber: [0xf59e0b, 0xd97706, 0xb45309],
      celestial: [0x38bdf8, 0x818cf8, 0x34d399],
      summit: [0xc084fc, 0xf472b6, 0xfb7185],
      solar: [0xfde047, 0xfbbf24, 0xf97316],
      cosmic: [0x38bdf8, 0xa855f7, 0x67e8f9]
    };
    const canopyPalette = canopyPaletteMap[theme] || canopyPaletteMap.emerald;
    this.treeCanopyMeshes.forEach((mesh) => {
      if (mesh?.material) {
        const bi = mesh.userData?.blobIndex || 0;
        mesh.material.color.setHex(canopyPalette[bi % canopyPalette.length]);
      }
    });

    const trunkColorMap = {
      emerald: 0x5c3a20,
      amber: 0x78350f,
      celestial: 0x312e81,
      summit: 0x475569,
      solar: 0x7c2d12,
      cosmic: 0x1e1b4b
    };
    const trunkColor = trunkColorMap[theme] || 0x5c3a20;
    this.treeTrunkMeshes.forEach((mesh) => {
      if (mesh?.material) {
        mesh.material.color.setHex(trunkColor);
      }
    });

    // 4. Update falling ambient particles (petals / autumn leaves / stardust / embers)
    const particleColorsMap = {
      emerald: [0xffc0d0, 0xf8a0c0, 0xf07898, 0xfff0f5],
      amber: [0xfbbf24, 0xf59e0b, 0xd97706, 0xfde047],
      celestial: [0x38bdf8, 0xa5f3fc, 0xc084fc, 0x67e8f9],
      summit: [0xf472b6, 0xc084fc, 0xfbbf24, 0xf43f5e],
      solar: [0xfef08a, 0xfde047, 0xf97316, 0xfbbf24],
      cosmic: [0xa5f3fc, 0x38bdf8, 0xc084fc, 0x818cf8]
    };
    const pPalette = particleColorsMap[theme] || particleColorsMap.emerald;
    this.petals.forEach((p, idx) => {
      if (p.mesh?.material) {
        p.mesh.material.color.setHex(pPalette[idx % pPalette.length]);
      }
    });
  }

  /**
   * Sets the theme based on the level ID across all 70 levels
   */
  setThemeForLevel(levelId = 1) {
    const id = Number(levelId) || 1;
    if (id <= 10) {
      this.setTheme('emerald');
    } else if (id <= 20) {
      this.setTheme('amber');
    } else if (id <= 35) {
      this.setTheme('celestial');
    } else if (id <= 50) {
      this.setTheme('summit');
    } else if (id <= 60) {
      this.setTheme('solar');
    } else {
      this.setTheme('cosmic');
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
   * Creates 18 lightweight falling cherry blossom petal meshes that drift gently in the menu.
   */
  buildCherryBlossomPetals() {
    const petalColors = [0xffc0d0, 0xf8a0c0, 0xf07898, 0xfff0f5, 0xffb0c8];
    const geo = new THREE.PlaneGeometry(1, 1);

    for (let i = 0; i < 18; i++) {
      const size = 0.06 + Math.random() * 0.1;
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
   * Builds a vibrant 3D animated background floating system featuring official
   * game logo icons (Dili Birds Blue Logo, White Hologram Logo, Golden Coin)
   * and signature game characters (Crimson Dili, Speedy Dash, Boom, and Sweetheart/Target Birds).
   * They gently float, drift, bob, and slowly spin in 3D with interactive pointer parallax.
   */
  buildDrifting3DAssets() {
    this.driftingGroup = new THREE.Group();
    this.root.add(this.driftingGroup);

    const textureLoader = new THREE.TextureLoader();

    // Cache textures for optimal performance & crisp sRGB presentation
    const loadTex = (url) => {
      return textureLoader.load(url, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
      });
    };

    const textures = {
      logoBlue: loadTex(dilicomLogoBlueUrl),
      logoWhite: loadTex(logoWhiteUrl),
      coinLogo: loadTex(coinLogoUrl),
      charRed: loadTex(characterRedUrl),
      charYellow: loadTex(characterYellowUrl),
      charBlack: loadTex(characterBlackUrl),
      charPink: loadTex(subCharPinkUrl),
      charGreen: loadTex(subCharGreenUrl),
      charBlue: loadTex(subCharBlueUrl),
      charSpark: loadTex(subCharSparkUrl)
    };

    const itemTemplates = [
      // 1. Official Dilicom Blue Logo Badge
      {
        name: 'logo-blue',
        tex: textures.logoBlue,
        width: 2.7,
        height: 1.64,
        rimColor: 0x0284c7,
        emissiveColor: 0x38bdf8,
        coreColor: 0xffffff,
        shape: 'pill'
      },
      // 2. Dili Birds White Hologram Logo Badge
      {
        name: 'logo-white',
        tex: textures.logoWhite,
        width: 2.7,
        height: 1.64,
        rimColor: 0x38bdf8,
        emissiveColor: 0x0ea5e9,
        coreColor: 0x0f172a,
        shape: 'pill'
      },
      // 3. 3D Golden Dili Coin Medallion
      {
        name: 'coin-gold',
        tex: textures.coinLogo,
        width: 2.2,
        height: 2.2,
        rimColor: 0xf59e0b,
        emissiveColor: 0xfbbf24,
        coreColor: 0xd97706,
        shape: 'circle'
      },
      // 4. Dili - The Crimson Leader (character.png)
      {
        name: 'char-red',
        tex: textures.charRed,
        width: 2.5,
        height: 1.76,
        rimColor: 0xef4444,
        emissiveColor: 0xf87171,
        coreColor: 0x7f1d1d,
        shape: 'pill'
      },
      // 5. Dash - Sonic Swift Bird (character-2.png)
      {
        name: 'char-yellow',
        tex: textures.charYellow,
        width: 2.8,
        height: 1.58,
        rimColor: 0xfbbf24,
        emissiveColor: 0xfde047,
        coreColor: 0x78350f,
        shape: 'pill'
      },
      // 6. Boom - Shockwave Master (character-3.png)
      {
        name: 'char-black',
        tex: textures.charBlack,
        width: 2.8,
        height: 1.58,
        rimColor: 0xf97316,
        emissiveColor: 0xfb923c,
        coreColor: 0x18181b,
        shape: 'pill'
      },
      // 7. Sweetheart Pink Bird (sub-character.png)
      {
        name: 'char-pink',
        tex: textures.charPink,
        width: 2.3,
        height: 1.86,
        rimColor: 0xec4899,
        emissiveColor: 0xf472b6,
        coreColor: 0x831843,
        shape: 'pill'
      },
      // 8. Emerald Target Bird (sub-character-2.png)
      {
        name: 'char-green',
        tex: textures.charGreen,
        width: 2.3,
        height: 1.86,
        rimColor: 0x10b981,
        emissiveColor: 0x34d399,
        coreColor: 0x064e3b,
        shape: 'pill'
      },
      // 9. Azure Blue Target Bird (sub-character-3.png)
      {
        name: 'char-blue',
        tex: textures.charBlue,
        width: 2.4,
        height: 1.8,
        rimColor: 0x06b6d4,
        emissiveColor: 0x22d3ee,
        coreColor: 0x164e63,
        shape: 'pill'
      },
      // 10. Spark Violet Bird (sub-character-4.png)
      {
        name: 'char-spark',
        tex: textures.charSpark,
        width: 2.3,
        height: 1.86,
        rimColor: 0xa855f7,
        emissiveColor: 0xc084fc,
        coreColor: 0x581c87,
        shape: 'pill'
      }
    ];

    const createFloatingToken = (tmpl) => {
      const group = new THREE.Group();
      const w = tmpl.width;
      const h = tmpl.height;
      const depth = 0.16;

      if (tmpl.shape === 'circle') {
        const radius = w * 0.5;
        // Central coin disc
        const discGeo = new THREE.CylinderGeometry(radius, radius, depth, 32);
        discGeo.rotateX(Math.PI / 2);
        const discMat = new THREE.MeshStandardMaterial({
          color: tmpl.coreColor,
          roughness: 0.25,
          metalness: 0.85
        });
        const disc = new THREE.Mesh(discGeo, discMat);
        group.add(disc);

        // Glowing outer metallic bezel ring
        const ringGeo = new THREE.TorusGeometry(radius, 0.08, 16, 36);
        const ringMat = new THREE.MeshStandardMaterial({
          color: tmpl.rimColor,
          emissive: tmpl.emissiveColor,
          emissiveIntensity: 0.6,
          roughness: 0.2,
          metalness: 0.85
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        group.add(ring);
      } else {
        // Backing core plate
        const boxGeo = new THREE.BoxGeometry(w + 0.12, h + 0.12, depth);
        const boxMat = new THREE.MeshStandardMaterial({
          color: tmpl.coreColor,
          roughness: 0.35,
          metalness: 0.4
        });
        const box = new THREE.Mesh(boxGeo, boxMat);
        group.add(box);

        // Outer vibrant glowing bezel frame
        const frameGeo = new THREE.BoxGeometry(w + 0.22, h + 0.22, depth * 0.85);
        const frameMat = new THREE.MeshStandardMaterial({
          color: tmpl.rimColor,
          emissive: tmpl.emissiveColor,
          emissiveIntensity: 0.55,
          roughness: 0.25,
          metalness: 0.5
        });
        const frame = new THREE.Mesh(frameGeo, frameMat);
        frame.position.z = -0.005;
        group.add(frame);
      }

      // Front & Back face materials: MeshBasicMaterial for bright, vivid, un-shadowed character/logo art
      const faceMat = new THREE.MeshBasicMaterial({
        map: tmpl.tex,
        transparent: true,
        alphaTest: 0.05,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1
      });

      // Front Face (+Z)
      const frontPlane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), faceMat);
      frontPlane.position.z = depth * 0.5 + 0.012;
      group.add(frontPlane);

      // Back Face (-Z, un-mirrored scale so text & characters read properly from both sides)
      const backPlane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), faceMat);
      backPlane.position.z = -(depth * 0.5 + 0.012);
      backPlane.rotation.y = Math.PI;
      backPlane.scale.x = -1;
      group.add(backPlane);

      return group;
    };

    const totalPieces = 22;
    for (let i = 0; i < totalPieces; i++) {
      const tmpl = itemTemplates[i % itemTemplates.length];
      const tokenMesh = createFloatingToken(tmpl);
      tokenMesh.castShadow = false;
      tokenMesh.receiveShadow = false;

      // Spread strategically around the screen margins and background
      const quadrant = i % 4;
      let x, y, z;
      if (quadrant === 0) {
        // Left flank
        x = -34 + Math.random() * 16;
        y = 2 + Math.random() * 16;
        z = 0 + Math.random() * 16;
      } else if (quadrant === 1) {
        // Right flank
        x = 18 + Math.random() * 16;
        y = 2 + Math.random() * 16;
        z = 0 + Math.random() * 16;
      } else if (quadrant === 2) {
        // Upper canopy / zenith
        x = -26 + Math.random() * 52;
        y = 12 + Math.random() * 8;
        z = -2 + Math.random() * 16;
      } else {
        // Lower atmosphere / floating foreground
        x = -28 + Math.random() * 56;
        y = -0.5 + Math.random() * 4.5;
        z = 2 + Math.random() * 16;
      }

      tokenMesh.position.set(x, y, z);
      const initialRotY = Math.random() * Math.PI * 2;
      tokenMesh.rotation.set(0, initialRotY, 0);

      // Scale variation for natural depth perspective
      const scaleMult = 0.9 + Math.random() * 0.25;
      tokenMesh.scale.set(scaleMult, scaleMult, scaleMult);

      this.driftingGroup.add(tokenMesh);

      this.driftingPieces.push({
        mesh: tokenMesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        driftSpeed: (0.28 + Math.random() * 0.35) * (quadrant % 2 === 0 ? 1 : -0.85),
        floatFreq: 0.55 + Math.random() * 0.65,
        floatAmp: 0.45 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        tiltFactor: 1.1 + Math.random() * 1.2,
        rotSpeedY: (0.45 + Math.random() * 0.55) * (quadrant % 2 === 0 ? 1 : -1),
        wobbleFreq: 0.75 + Math.random() * 0.6,
        wobbleAmp: 0.08 + Math.random() * 0.08
      });
    }

    // Default to true (in dashboard/menu)
    this.driftingGroup.visible = true;
  }

  setDashboardMode(isDashboard) {
    this.isDashboardMode = Boolean(isDashboard);
    if (this.driftingGroup) {
      this.driftingGroup.visible = Boolean(isDashboard);
    }
    if (this.monumentGroup) {
      this.monumentGroup.visible = !isDashboard;
    }
    if (this.petals) {
      this.petals.forEach((p) => {
        p.mesh.visible = Boolean(isDashboard);
      });
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

    // ── Animate 3D drifting game logo icons & character tokens (ONLY in dashboard mode) ──
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

        // Smooth slow 3D Y rotation showcasing front & back of character/logo badge
        p.mesh.rotation.y += p.rotSpeedY * deltaTime;
        // Subtle natural floating wobble on Z and X
        p.mesh.rotation.z = Math.sin(elapsedTime * p.wobbleFreq + p.phase) * p.wobbleAmp;
        p.mesh.rotation.x = Math.cos(elapsedTime * p.wobbleFreq * 0.7 + p.phase) * 0.06;
      });
    }

    // ── Drift clouds ──
    this.clouds.forEach((c) => {
      c.group.position.x += c.speed * deltaTime;
      c.group.position.y = c.baseY + Math.sin(elapsedTime * 0.45 + c.phase) * 0.18;
      if (c.group.position.x > 52) c.group.position.x = -52;
    });

    // ── Animate falling cherry blossom petals (ONLY in dashboard/menu mode) ──
    if (this.isDashboardMode !== false && this.petals.length > 0) {
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
