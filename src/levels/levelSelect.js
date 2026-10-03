import { LEVELS } from './levelData.js';
import coinLogoUrl from '../assets/coin-with-logo.png';
import coinTextUrl from '../assets/coin-with-text.png';
import mascotCharUrl from '../assets/character.png';
import char2Url from '../assets/character-2.png';
import char3Url from '../assets/character-3.png';
import subChar1Url from '../assets/sub-character.png';
import subChar2Url from '../assets/sub-character-2.png';
import subChar3Url from '../assets/sub-character-3.png';
import subChar4Url from '../assets/sub-character-4.png';
import logoWhiteUrl from '../assets/logo-white.png';
import logoBlueUrl from '../assets/logo-blue.png';
import logoBlackUrl from '../assets/logo-black.png';

/**
 * 20 Sequentially Placed Circular Level Nodes along a continuous, wavy undulating path.
 * Calibrated dimensions: width = 3800px, height = 460px.
 * Nodes oscillate organically between upper hills (y: 140–160) and lower meadows (y: 290–310),
 * perfectly fitting any mobile landscape screen without vertical scrolling.
 */
export const LEVEL_NODES = [
  // Zone 1: Sky Haven & Emerald Bastions (Levels 1–10)
  { id: 1,  x: 180,  y: 290, zoneId: 1, zone: 'Emerald Valley', name: 'Timber Watchtower' },
  { id: 2,  x: 360,  y: 150, zoneId: 1, zone: 'Crystal Ridge',  name: 'Twin Crystal Spires' },
  { id: 3,  x: 540,  y: 310, zoneId: 1, zone: 'Emerald Valley', name: 'Stone Bastion Fortress' },
  { id: 4,  x: 720,  y: 150, zoneId: 1, zone: 'Emerald Valley', name: 'Triple Bunker Redoubt' },
  { id: 5,  x: 910,  y: 290, zoneId: 1, zone: 'Emerald Valley', name: 'Grand Citadel', milestone: 'sunburst' },
  { id: 6,  x: 1100, y: 140, zoneId: 1, zone: 'Amber Canyon',   name: 'Canyon Gate Outpost' },
  { id: 7,  x: 1280, y: 310, zoneId: 1, zone: 'Amber Canyon',   name: 'High Scaffold Quarry' },
  { id: 8,  x: 1460, y: 160, zoneId: 1, zone: 'Amber Canyon',   name: 'Twin Citadels' },
  { id: 9,  x: 1640, y: 310, zoneId: 1, zone: 'Amber Canyon',   name: 'Obsidian Arch Stronghold' },
  { id: 10, x: 1830, y: 160, zoneId: 1, zone: 'Amber Canyon',   name: 'Colossus Gateway', milestone: 'airship' },

  // Zone 2: Celestial Citadel & Crown Summit (Levels 11–20)
  { id: 11, x: 2030, y: 300, zoneId: 2, zone: 'Celestial Twilight', name: 'Celestial Gateway' },
  { id: 12, x: 2210, y: 150, zoneId: 2, zone: 'Celestial Twilight', name: 'Crystal Monoliths' },
  { id: 13, x: 2390, y: 310, zoneId: 2, zone: 'Celestial Twilight', name: 'Starlight Sanctuary' },
  { id: 14, x: 2570, y: 150, zoneId: 2, zone: 'Celestial Twilight', name: 'Aurora Spires' },
  { id: 15, x: 2750, y: 290, zoneId: 2, zone: 'Celestial Twilight', name: 'Nebula Fortress', milestone: 'crystal' },
  { id: 16, x: 2930, y: 150, zoneId: 2, zone: 'Crown Summit',   name: 'Crown Bastion' },
  { id: 17, x: 3110, y: 310, zoneId: 2, zone: 'Crown Summit',   name: 'Stormkeep Citadel' },
  { id: 18, x: 3280, y: 160, zoneId: 2, zone: 'Crown Summit',   name: 'Dragon Spine Rampart' },
  { id: 19, x: 3440, y: 300, zoneId: 2, zone: 'Crown Summit',   name: 'Infernal Vaults' },
  { id: 20, x: 3580, y: 150, zoneId: 2, zone: 'Crown Summit',   name: 'Crown Summit Apex', milestone: 'crown' }
];

export const MAP_TOTAL_WIDTH = 3800;
export const MAP_TOTAL_HEIGHT = 460;

/**
 * Builds a natural, ultra-smooth cubic Bézier spline connecting nodes sequentially.
 */
function buildWavySplinePath(nodes, endIndex = nodes.length) {
  if (!nodes || nodes.length === 0) return '';
  const count = Math.min(nodes.length, endIndex);
  if (count < 2) {
    return `M ${nodes[0].x} ${nodes[0].y}`;
  }

  // Smooth lead-in from before Level 1
  let d = `M ${Math.max(30, nodes[0].x - 110)} ${nodes[0].y + 12}`;
  const dx0 = 110;
  d += ` C ${nodes[0].x - dx0 * 0.5} ${nodes[0].y + 12}, ${nodes[0].x - dx0 * 0.3} ${nodes[0].y}, ${nodes[0].x} ${nodes[0].y}`;

  // Connect node i to node i+1 with S-curve cubic Béziers
  for (let i = 0; i < count - 1; i++) {
    const p1 = nodes[i];
    const p2 = nodes[i + 1];
    const dx = p2.x - p1.x;
    const cp1x = p1.x + dx * 0.46;
    const cp1y = p1.y;
    const cp2x = p2.x - dx * 0.46;
    const cp2y = p2.y;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  // Lead-out if at the end of all 20 nodes
  if (count === nodes.length) {
    const last = nodes[nodes.length - 1];
    d += ` C ${last.x + 80} ${last.y}, ${last.x + 120} ${last.y - 12}, ${last.x + 170} ${last.y - 12}`;
  }

  return d;
}

/**
 * Comprehensive, High-Fidelity Horizontal Level Selection Map.
 * - Calibrated for mobile landscape orientation (strictly zero vertical scroll).
 * - Continuous, winding wavy path across vibrant ground terrain.
 * - Large, tactile circular nodes for levels 1 to 20 with prominent numbers and stars.
 * - Background populated with official characters, coins, and logos (tinted & animated).
 * - Realistic volumetric cumulus Cloud Fog of War obscuring levels 11 onward, clearing progressively.
 * - Smooth horizontal drag/panning with velocity inertia.
 */
export class LevelSelect {
  constructor(storage, onSelectLevel, onPreviewLevel, audio = null) {
    this.storage = storage;
    this.onSelectLevel = onSelectLevel;
    this.onPreviewLevel = onPreviewLevel;
    this.audio = audio;

    this.gridEl = document.getElementById('level-grid');
    this.viewportEl = document.getElementById('roadmap-viewport');

    const unlocked = this.storage.getUnlockedLevel();
    this.activeLevelId = Math.min(20, Math.max(1, unlocked));
    this.focusedLevelId = this.activeLevelId;
    this.lastPreviewedLevelId = null;
    this.currentZoneId = unlocked > 10 ? 2 : 1;

    this.isInputLocked = false;
    this.pendingZone2Unlock = false;
    this.pendingLevelUnlock = null;

    // Drag / Pan interaction state
    this.isPointerDown = false;
    this.hasDragged = false;
    this.isDragSuppressingClick = false;
    this.startX = 0;
    this.startY = 0;
    this.scrollLeftStart = 0;
    this.lastX = 0;
    this.lastTime = 0;
    this.velocityX = 0;
    this.momentumRafId = null;
    this.currentScale = 1.0;

    this.bindViewportInteractions();
    this.bindResizeListener();
  }

  setAudio(audio) {
    this.audio = audio;
  }

  lockInput() {
    this.isInputLocked = true;
    if (this.viewportEl) {
      this.viewportEl.classList.add('roadmap-input-locked');
    }
  }

  unlockInput() {
    this.isInputLocked = false;
    if (this.viewportEl) {
      this.viewportEl.classList.remove('roadmap-input-locked');
    }
  }

  bindResizeListener() {
    const handleResize = () => {
      this.updateMobileScaling();
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });
  }

  /**
   * Automatically adapts the map world scale to fit the mobile landscape screen height.
   * Completely eliminates vertical scrolling while ensuring all nodes, mascot pins, and CTA buttons are visible.
   */
  updateMobileScaling() {
    if (!this.viewportEl) return;
    const vpHeight = this.viewportEl.clientHeight || 360;
    const baseHeight = MAP_TOTAL_HEIGHT;

    // In mobile landscape or short viewports, scale down to fit comfortably
    let scale = 1.0;
    if (vpHeight < baseHeight) {
      scale = Math.max(0.60, Math.min(1.0, (vpHeight - 2) / baseHeight));
    } else {
      scale = Math.min(1.25, vpHeight / baseHeight);
    }
    this.currentScale = scale;

    this.viewportEl.style.setProperty('--mobile-map-scale', scale.toFixed(3));

    const wrapper = this.gridEl;
    if (wrapper) {
      wrapper.style.width = `${Math.round(MAP_TOTAL_WIDTH * scale)}px`;
      wrapper.style.height = `${Math.round(MAP_TOTAL_HEIGHT * scale)}px`;
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * HORIZONTAL SCROLLING & DRAGGING MECHANICS
   * ═════════════════════════════════════════════════════════════ */

  bindViewportInteractions() {
    if (!this.viewportEl) return;
    const vp = this.viewportEl;

    // Pointer Drag (Mouse + Touch)
    vp.addEventListener('pointerdown', (e) => {
      if (this.isInputLocked) return;
      if (this.momentumRafId) {
        cancelAnimationFrame(this.momentumRafId);
        this.momentumRafId = null;
      }
      if (this.dragRafId) {
        cancelAnimationFrame(this.dragRafId);
        this.dragRafId = null;
      }
      this.pendingScrollLeft = null;

      this.isPointerDown = true;
      this.hasDragged = false;
      this.isDragSuppressingClick = false;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.lastX = e.clientX;
      this.scrollLeftStart = vp.scrollLeft;
      this.lastTime = performance.now();
      this.velocityX = 0;
    });

    vp.addEventListener('pointermove', (e) => {
      if (!this.isPointerDown) return;
      const dx = e.clientX - this.startX;
      const dy = e.clientY - this.startY;

      // 8px movement threshold to declare a drag
      if (!this.hasDragged && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        this.hasDragged = true;
        vp.classList.add('is-panning');
        try {
          vp.setPointerCapture(e.pointerId);
        } catch {}
      }

      if (this.hasDragged) {
        this.pendingScrollLeft = this.scrollLeftStart - dx;
        if (!this.dragRafId) {
          this.dragRafId = requestAnimationFrame(() => {
            if (this.viewportEl && this.pendingScrollLeft !== null) {
              this.viewportEl.scrollLeft = this.pendingScrollLeft;
            }
            this.dragRafId = null;
          });
        }

        const now = performance.now();
        const dt = now - this.lastTime;
        if (dt > 10) {
          this.velocityX = (e.clientX - this.lastX) / dt;
          this.lastX = e.clientX;
          this.lastTime = now;
        }
      }
    });

    const handlePointerEnd = (e) => {
      if (!this.isPointerDown) return;
      this.isPointerDown = false;
      vp.classList.remove('is-panning');

      if (this.dragRafId) {
        cancelAnimationFrame(this.dragRafId);
        this.dragRafId = null;
      }
      if (this.pendingScrollLeft !== null) {
        vp.scrollLeft = this.pendingScrollLeft;
        this.pendingScrollLeft = null;
      }

      try {
        if (vp.hasPointerCapture(e.pointerId)) {
          vp.releasePointerCapture(e.pointerId);
        }
      } catch {}

      if (this.hasDragged) {
        this.isDragSuppressingClick = true;
        setTimeout(() => {
          this.isDragSuppressingClick = false;
          this.hasDragged = false;
        }, 140);

        if (Math.abs(this.velocityX) > 0.18) {
          this.startMomentumGlide(this.velocityX);
        }
      } else {
        this.hasDragged = false;
        this.isDragSuppressingClick = false;
      }
    };

    vp.addEventListener('pointerup', handlePointerEnd);
    vp.addEventListener('pointercancel', handlePointerEnd);

    // Mouse wheel horizontal translation
    vp.addEventListener('wheel', (e) => {
      if (this.isInputLocked) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 0.5) {
        e.preventDefault();
        vp.scrollLeft += delta * 1.15;
      }
    }, { passive: false });
  }

  startMomentumGlide(initialVelocity) {
    const vp = this.viewportEl;
    if (!vp) return;

    let v = initialVelocity * 16;
    const friction = 0.92;

    const step = () => {
      if (Math.abs(v) < 0.25) {
        this.momentumRafId = null;
        return;
      }
      vp.scrollLeft -= v;
      v *= friction;
      this.momentumRafId = requestAnimationFrame(step);
    };

    this.momentumRafId = requestAnimationFrame(step);
  }

  centerOnLevel(levelId, smooth = true) {
    if (!this.viewportEl) return;
    const node = LEVEL_NODES.find((n) => n.id === Number(levelId)) || LEVEL_NODES[0];
    const vpWidth = this.viewportEl.clientWidth || 800;
    const targetScroll = (node.x * this.currentScale) - vpWidth / 2;
    this.viewportEl.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  panToNode(levelId, gentleZoom = true) {
    this.centerOnLevel(levelId, true);
    const nodeEl = document.getElementById(`node-level-${levelId}`);
    if (nodeEl && gentleZoom) {
      nodeEl.classList.remove('gentle-node-pulse');
      void nodeEl.offsetWidth;
      nodeEl.classList.add('gentle-node-pulse');
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * MAP RENDERING & TERRAIN GRAPHICS
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Generates the multi-layer SVG world canvas:
   * 1. Dynamic sky & mountain backdrops.
   * 2. Lush green rolling hills, cliffs, lagoon, and celestial crags.
   * 3. Winding wavy road layers.
   * 4. Official characters & icons embedded into scenery.
   */
  buildWorldSvgTerrain(unlockedLevel) {
    const fullPathD = buildWavySplinePath(LEVEL_NODES, LEVEL_NODES.length);
    const activePathD = buildWavySplinePath(LEVEL_NODES, Math.min(unlockedLevel, LEVEL_NODES.length));

    return `
      <svg
        class="map-terrain-svg"
        viewBox="0 0 ${MAP_TOTAL_WIDTH} ${MAP_TOTAL_HEIGHT}"
        width="${MAP_TOTAL_WIDTH}"
        height="${MAP_TOTAL_HEIGHT}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <!-- Panoramic Atmosphere Sky Gradient (0 to 3800px) -->
          <linearGradient id="skyAtmosphereGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="26%" stop-color="#60a5fa" />
            <stop offset="48%" stop-color="#818cf8" />
            <stop offset="68%" stop-color="#6366f1" />
            <stop offset="85%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#312e81" />
          </linearGradient>

          <!-- Horizon Soft Warmth Glow -->
          <linearGradient id="skyHorizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="60%" stop-color="#fed7aa" stop-opacity="0.18" />
            <stop offset="100%" stop-color="#ffedd5" stop-opacity="0.38" />
          </linearGradient>

          <!-- Golden Winding Road Gradient -->
          <linearGradient id="roadSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef3c7" />
            <stop offset="35%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>

          <!-- Glowing Active Progress Line Gradient -->
          <linearGradient id="activeRoadProgressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="45%" stop-color="#fbbf24" />
            <stop offset="85%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#ef4444" />
          </linearGradient>

          <!-- Far Mountain Backdrop Gradient -->
          <linearGradient id="farMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#64748b" />
            <stop offset="40%" stop-color="#475569" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>

          <!-- Mid-Distance Mountain Ridge Gradient -->
          <linearGradient id="midMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#475569" />
            <stop offset="45%" stop-color="#334155" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>

          <!-- Zone 1: Lush Rolling Meadow Far Hills -->
          <linearGradient id="greenHillGradFar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#86efac" />
            <stop offset="30%" stop-color="#22c55e" />
            <stop offset="70%" stop-color="#15803d" />
            <stop offset="100%" stop-color="#14532d" />
          </linearGradient>

          <!-- Zone 1: Lush Rolling Pasture Near Hills -->
          <linearGradient id="greenHillGradNear" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#bbf7d0" />
            <stop offset="25%" stop-color="#4ade80" />
            <stop offset="65%" stop-color="#16a34a" />
            <stop offset="100%" stop-color="#166534" />
          </linearGradient>

          <!-- Zone 2: Enchanted Celestial Far Hills -->
          <linearGradient id="celestialHillGradFar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#d8b4fe" />
            <stop offset="35%" stop-color="#a855f7" />
            <stop offset="75%" stop-color="#7e22ce" />
            <stop offset="100%" stop-color="#3b0764" />
          </linearGradient>

          <!-- Zone 2: Enchanted Celestial Near Hills -->
          <linearGradient id="celestialHillGradNear" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#e9d5ff" />
            <stop offset="30%" stop-color="#c084fc" />
            <stop offset="70%" stop-color="#9333ea" />
            <stop offset="100%" stop-color="#581c87" />
          </linearGradient>

          <!-- Turquoise Coastal Water Lagoon Gradient -->
          <linearGradient id="lagoonWaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#0284c7" />
          </linearGradient>

          <!-- Soft Glow Filters -->
          <filter id="roadGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="lightBeaconGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <!-- Reusable Stylized Nature Elements -->
          <!-- 1. Cartoon Deciduous Tree -->
          <g id="decoTreeRound">
            <ellipse cx="14" cy="46" rx="15" ry="4" fill="#0f291e" opacity="0.3" />
            <!-- Trunk -->
            <path d="M 11 44 L 11 26 Q 14 28 17 26 L 17 44 Z" fill="#78350f" />
            <!-- Leaf Puffs -->
            <circle cx="8" cy="22" r="11" fill="#15803d" />
            <circle cx="20" cy="22" r="11" fill="#15803d" />
            <circle cx="14" cy="14" r="13" fill="#22c55e" />
            <!-- Highlight Arc -->
            <path d="M 6 12 Q 14 6 22 12" fill="none" stroke="#86efac" stroke-width="3" stroke-linecap="round" />
          </g>

          <!-- 2. Cartoon Pine Tree -->
          <g id="decoTreePine">
            <ellipse cx="12" cy="44" rx="12" ry="3.5" fill="#0f291e" opacity="0.25" />
            <rect x="10" y="32" width="4" height="12" rx="1.5" fill="#78350f" />
            <!-- Pine tiers -->
            <polygon points="12,6 23,20 1,20" fill="#065f46" />
            <polygon points="12,12 21,27 3,27" fill="#047857" />
            <polygon points="12,18 20,34 4,34" fill="#059669" />
            <path d="M 7 19 Q 12 15 17 19" fill="none" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round" />
          </g>

          <!-- 3. Fluffy Cartoon Bush -->
          <g id="decoBush">
            <ellipse cx="14" cy="18" rx="14" ry="4" fill="#0f291e" opacity="0.22" />
            <circle cx="7" cy="12" r="7" fill="#15803d" />
            <circle cx="21" cy="12" r="7" fill="#15803d" />
            <circle cx="14" cy="8" r="9" fill="#22c55e" />
            <circle cx="11" cy="6" r="2" fill="#fef08a" />
            <circle cx="18" cy="9" r="1.8" fill="#fef08a" />
          </g>

          <!-- 4. Wildflower Patch -->
          <g id="decoFlowers">
            <!-- Daisy 1 -->
            <circle cx="5" cy="5" r="2" fill="#fef08a" />
            <circle cx="5" cy="2" r="1.4" fill="#ffffff" /><circle cx="5" cy="8" r="1.4" fill="#ffffff" />
            <circle cx="2" cy="5" r="1.4" fill="#ffffff" /><circle cx="8" cy="5" r="1.4" fill="#ffffff" />
            <!-- Daisy 2 -->
            <circle cx="16" cy="8" r="1.8" fill="#f59e0b" />
            <circle cx="16" cy="5" r="1.2" fill="#fef08a" /><circle cx="16" cy="11" r="1.2" fill="#fef08a" />
            <circle cx="13" cy="8" r="1.2" fill="#fef08a" /><circle cx="19" cy="8" r="1.2" fill="#fef08a" />
          </g>

          <!-- 5. Celestial Enchanted Tree (Zone 2) -->
          <g id="decoTreeCelestial">
            <ellipse cx="14" cy="46" rx="16" ry="4" fill="#1e1b4b" opacity="0.35" />
            <path d="M 11 44 L 11 26 Q 14 28 17 26 L 17 44 Z" fill="#4c1d95" />
            <circle cx="8" cy="22" r="11" fill="#6b21a8" />
            <circle cx="20" cy="22" r="11" fill="#7e22ce" />
            <circle cx="14" cy="14" r="13" fill="#a855f7" />
            <circle cx="10" cy="12" r="3.5" fill="#fef08a" opacity="0.35" />
            <circle cx="10" cy="12" r="1.5" fill="#fef08a" />
            <circle cx="18" cy="15" r="3" fill="#fef08a" opacity="0.35" />
            <circle cx="18" cy="15" r="1.2" fill="#fef08a" />
          </g>

          <!-- 6. Soft Background Cloud Puff -->
          <g id="decoBgCloud" opacity="0.55">
            <circle cx="25" cy="22" r="18" fill="#ffffff" />
            <circle cx="45" cy="18" r="22" fill="#ffffff" />
            <circle cx="68" cy="22" r="17" fill="#ffffff" />
            <rect x="15" y="22" width="65" height="18" rx="9" fill="#ffffff" />
          </g>
        </defs>

        <!-- 1. SKY BACKDROP & AMBIENCE -->
        <rect x="0" y="0" width="${MAP_TOTAL_WIDTH}" height="${MAP_TOTAL_HEIGHT}" fill="url(#skyAtmosphereGrad)" opacity="0.4" />
        <rect x="0" y="0" width="${MAP_TOTAL_WIDTH}" height="${MAP_TOTAL_HEIGHT}" fill="url(#skyHorizonGlow)" />

        <!-- Distant Soft Background Clouds -->
        <use href="#decoBgCloud" x="220" y="35" transform="scale(0.85)" />
        <use href="#decoBgCloud" x="900" y="45" transform="scale(0.95)" />
        <use href="#decoBgCloud" x="1650" y="30" transform="scale(0.8)" />
        <use href="#decoBgCloud" x="2400" y="40" transform="scale(0.9)" />
        <use href="#decoBgCloud" x="3150" y="35" transform="scale(0.85)" />

        <!-- 2. LAYERED MOUNTAIN RIDGES (SMOOTH ORGANIC CURVES - NO JAGGED POLYGONS) -->
        <!-- Layer 1: Far Mountain Silhouettes -->
        <path
          d="M 0 240 C 250 140, 500 130, 750 230 C 1000 150, 1250 140, 1500 220 C 1750 160, 2000 150, 2250 210 C 2500 140, 2750 150, 3000 210 C 3300 140, 3550 150, 3800 230 L 3800 460 L 0 460 Z"
          fill="url(#farMountainGrad)"
          opacity="0.38"
        />

        <!-- Layer 2: Mid-Distance Mountain Ridge -->
        <path
          d="M 0 270 C 200 180, 400 170, 650 260 C 900 190, 1150 180, 1400 250 C 1650 190, 1900 190, 2150 240 C 2400 180, 2650 170, 2900 230 C 3200 170, 3500 180, 3800 250 L 3800 460 L 0 460 Z"
          fill="url(#midMountainGrad)"
          opacity="0.5"
        />

        <!-- 3. CONTINUOUS ROLLING MEADOW HILLS (HARMONIOUS BIO-TRANSITION ACROSS 3800PX) -->

        <!-- Zone 1 Far Rolling Hills (x: 0 to 1950) -->
        <path
          d="M -40 310 C 180 170, 380 160, 560 300 C 740 170, 930 160, 1120 290 C 1310 170, 1490 180, 1670 300 C 1850 180, 2030 170, 2220 300 L 2220 460 L -40 460 Z"
          fill="url(#greenHillGradFar)"
        />
        <!-- Zone 1 Far Hill Crest Rim Highlight -->
        <path
          d="M -40 310 C 180 170, 380 160, 560 300 C 740 170, 930 160, 1120 290 C 1310 170, 1490 180, 1670 300 C 1850 180, 2030 170, 2220 300"
          fill="none"
          stroke="rgba(255, 255, 255, 0.28)"
          stroke-width="5"
          stroke-linecap="round"
        />

        <!-- Zone 2 Far Celestial Hills (x: 1950 to 3840) -->
        <path
          d="M 2000 310 C 2200 170, 2400 180, 2600 290 C 2800 170, 3000 180, 3200 290 C 3400 170, 3600 180, 3840 280 L 3840 460 L 2000 460 Z"
          fill="url(#celestialHillGradFar)"
        />
        <!-- Zone 2 Far Hill Crest Starlight Highlight -->
        <path
          d="M 2000 310 C 2200 170, 2400 180, 2600 290 C 2800 170, 3000 180, 3200 290 C 3400 170, 3600 180, 3840 280"
          fill="none"
          stroke="#f3e8ff"
          stroke-width="4"
          stroke-linecap="round"
          opacity="0.5"
        />

        <!-- Zone 1 Near Rolling Pastures (x: 0 to 2050) -->
        <path
          d="M -40 350 C 160 260, 340 250, 520 360 C 700 260, 890 250, 1080 360 C 1260 260, 1450 270, 1630 360 C 1810 270, 2000 260, 2190 360 L 2190 460 L -40 460 Z"
          fill="url(#greenHillGradNear)"
        />
        <path
          d="M -40 350 C 160 260, 340 250, 520 360 C 700 260, 890 250, 1080 360 C 1260 260, 1450 270, 1630 360 C 1810 270, 2000 260, 2190 360"
          fill="none"
          stroke="rgba(255, 255, 255, 0.35)"
          stroke-width="4"
          stroke-linecap="round"
        />

        <!-- Zone 2 Near Celestial Highlands (x: 2000 to 3840) -->
        <path
          d="M 2050 360 C 2240 260, 2430 270, 2620 360 C 2810 260, 3000 270, 3190 360 C 3380 260, 3560 270, 3840 340 L 3840 460 L 2050 460 Z"
          fill="url(#celestialHillGradNear)"
        />
        <path
          d="M 2050 360 C 2240 260, 2430 270, 2620 360 C 2810 260, 3000 270, 3190 360 C 3380 260, 3560 270, 3840 340"
          fill="none"
          stroke="#e9d5ff"
          stroke-width="4.5"
          stroke-linecap="round"
          opacity="0.6"
        />

        <!-- Smooth Coastal Lagoon Cove at Stage 1–2 -->
        <path
          d="M 0 380 C 120 360, 220 395, 340 420 C 420 435, 470 450, 510 460 L 0 460 Z"
          fill="url(#lagoonWaterGrad)"
          opacity="0.8"
        />
        <!-- Sandy Beach Shoreline -->
        <path
          d="M 0 376 C 120 356, 220 391, 342 416 C 422 431, 472 446, 512 458"
          fill="none"
          stroke="#fef08a"
          stroke-width="5"
          stroke-linecap="round"
          opacity="0.85"
        />

        <!-- 4. NATURAL SCENERY DECORATIONS & CHARMING VEGETATION -->

        <!-- Zone 1 Trees, Bushes & Flowers along the gentle meadows -->
        <use href="#decoTreeRound" x="220" y="165" />
        <use href="#decoTreePine" x="290" y="180" />
        <use href="#decoFlowers" x="240" y="325" />
        <use href="#decoBush" x="330" y="275" />

        <use href="#decoTreePine" x="480" y="175" />
        <use href="#decoTreeRound" x="610" y="170" />
        <use href="#decoFlowers" x="590" y="330" />
        <use href="#decoBush" x="650" y="280" />

        <use href="#decoTreeRound" x="840" y="260" />
        <use href="#decoTreePine" x="980" y="165" />
        <use href="#decoFlowers" x="960" y="315" />
        <use href="#decoBush" x="1030" y="270" />

        <use href="#decoTreeRound" x="1200" y="168" />
        <use href="#decoTreePine" x="1350" y="275" />
        <use href="#decoFlowers" x="1320" y="330" />

        <use href="#decoTreeRound" x="1530" y="170" />
        <use href="#decoTreePine" x="1690" y="275" />

        <!-- Zone 2 Celestial Starlight Trees along the enchanted twilight peaks -->
        <use href="#decoTreeCelestial" x="2100" y="168" />
        <use href="#decoTreePine" x="2260" y="275" />
        <use href="#decoTreeCelestial" x="2460" y="170" />
        <use href="#decoTreeCelestial" x="2640" y="275" />
        <use href="#decoTreeCelestial" x="2820" y="170" />
        <use href="#decoTreeCelestial" x="3000" y="275" />
        <use href="#decoTreeCelestial" x="3200" y="170" />
        <use href="#decoTreeCelestial" x="3370" y="275" />

        <!-- 5. SCENERY PROPS WITH OFFICIAL CHARACTERS & BRANDING -->

        <!-- Stage 2: Official Character-2 (Yellow Bird) Cheering atop the Hill -->
        <g class="map-bg-actor actor-bob-slow" transform="translate(390, 85)">
          <ellipse cx="24" cy="46" rx="16" ry="5" fill="#0f291e" opacity="0.3" />
          <image href="${char2Url}" x="0" y="0" width="48" height="48" preserveAspectRatio="xMidYMid meet" />
        </g>

        <!-- Stage 3 Shoreline: Treasure Crate with Official Coin Logo -->
        <g transform="translate(460, 360)">
          <rect x="0" y="8" width="32" height="24" rx="4" fill="#78350f" stroke="#b45309" stroke-width="2" />
          <rect x="-2" y="4" width="36" height="8" rx="2" fill="#92400e" />
          <image href="${coinLogoUrl}" x="6" y="-6" width="20" height="20" class="coin-glint-bob" />
        </g>

        <!-- Stage 4: Cozy Wooden Watchtower with Official Sub-Character-2 on Lookout -->
        <g transform="translate(680, 50)" opacity="0.95">
          <!-- Timber posts -->
          <line x1="15" y1="105" x2="25" y2="40" stroke="#78350f" stroke-width="4.5" stroke-linecap="round" />
          <line x1="55" y1="105" x2="45" y2="40" stroke="#78350f" stroke-width="4.5" stroke-linecap="round" />
          <line x1="18" y1="90" x2="52" y2="55" stroke="#92400e" stroke-width="2.5" />
          <line x1="18" y1="55" x2="52" y2="90" stroke="#92400e" stroke-width="2.5" />
          <!-- Platform deck -->
          <rect x="10" y="36" width="50" height="7" rx="2" fill="#b45309" stroke="#78350f" stroke-width="1.5" />
          <!-- Sub-Character-2 on Deck -->
          <image href="${subChar2Url}" x="22" y="8" width="30" height="30" class="actor-lookout" />
          <!-- Thatched canopy roof -->
          <polygon points="5,36 35,12 65,36" fill="#ca8a04" stroke="#854d0e" stroke-width="2" />
        </g>

        <!-- Stage 6: Wooden Outpost Barricade with Official Sub-Character-3 Peeking -->
        <g transform="translate(1145, 75)">
          <rect x="12" y="24" width="32" height="36" rx="3" fill="#78350f" stroke="#451a03" stroke-width="2" />
          <image href="${subChar3Url}" x="2" y="4" width="36" height="36" class="actor-peek" />
        </g>

        <!-- Stage 7: Wooden Suspension Bridge over Scenic Ravine -->
        <path d="M 1210 325 Q 1280 345 1350 325" fill="none" stroke="#78350f" stroke-width="5" stroke-linecap="round" />
        <path d="M 1210 325 Q 1280 345 1350 325" fill="none" stroke="#ca8a04" stroke-width="3" stroke-dasharray="4 8" stroke-linecap="round" />

        <!-- Stage 8: Official Character-3 (Heavy Black Bird) Standing near TNT Depot -->
        <g class="map-bg-actor actor-stand" transform="translate(1495, 95)">
          <ellipse cx="24" cy="46" rx="18" ry="6" fill="#000000" opacity="0.3" />
          <!-- TNT Barrel -->
          <rect x="36" y="22" width="18" height="24" rx="3" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
          <text x="39" y="38" font-size="8" font-weight="900" fill="#ffffff" font-family="sans-serif">TNT</text>
          <image href="${char3Url}" x="0" y="2" width="46" height="46" />
        </g>

        <!-- Stage 9: Natural Stone Arch with Floating Official Coin with Text -->
        <g transform="translate(1600, 245)">
          <path d="M -15 65 Q 10 -25 35 65" fill="none" stroke="#78350f" stroke-width="12" stroke-linecap="round" />
          <image href="${coinTextUrl}" x="-4" y="0" width="28" height="28" class="coin-glint-bob" />
        </g>

        <!-- ═════════════════════════════════════════════════════════════
             STAGE 10: COLOSSUS ALTAR & OFFICIAL AIRSHIP (WITH SUB-CHAR-4)
             ═════════════════════════════════════════════════════════════ -->
        <!-- Stone Altar Dais under Level 10 Node (x = 1830, y = 160) -->
        <g transform="translate(1775, 170)">
          <ellipse cx="55" cy="30" rx="65" ry="24" fill="#1e293b" stroke="#475569" stroke-width="3" />
          <ellipse cx="55" cy="24" rx="55" ry="18" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
          <!-- Engraved Official Dlicom Blue Logo in Center of Stone Dais -->
          <image href="${logoBlueUrl}" x="35" y="12" width="40" height="22" opacity="0.85" filter="url(#lightBeaconGlow)" />
          <!-- Radiant upward light columns -->
          <polygon points="18,22 42,-120 68,-120 92,22" fill="url(#skyAtmosphereGrad)" opacity="0.45" filter="url(#lightBeaconGlow)" />
        </g>

        <!-- Floating Airship above Level 10 piloted by Official Sub-Character-4 -->
        <g id="map-level-10-airship" class="map-floating-airship" transform="translate(1760, 10)">
          <ellipse cx="70" cy="125" rx="36" ry="8" fill="#000000" opacity="0.25" filter="url(#roadGlowFilter)" />
          <!-- Striped Airship Envelope -->
          <ellipse cx="70" cy="45" rx="58" ry="38" fill="#facc15" stroke="#ca8a04" stroke-width="2.5" />
          <path d="M 40 18 Q 70 45 40 72" fill="none" stroke="#16a34a" stroke-width="6" opacity="0.85" />
          <path d="M 70 8 Q 70 45 70 82" fill="none" stroke="#16a34a" stroke-width="6" opacity="0.85" />
          <path d="M 100 18 Q 70 45 100 72" fill="none" stroke="#16a34a" stroke-width="6" opacity="0.85" />

          <!-- Rigging Cords -->
          <line x1="35" y1="65" x2="50" y2="92" stroke="#78350f" stroke-width="1.8" />
          <line x1="105" y1="65" x2="90" y2="92" stroke="#78350f" stroke-width="1.8" />

          <!-- Wooden Basket Gondola -->
          <rect x="46" y="90" width="48" height="20" rx="5" fill="#b45309" stroke="#78350f" stroke-width="2" />
          <!-- Official Sub-Character-4 as Pilot at the Helm -->
          <image href="${subChar4Url}" x="55" y="72" width="30" height="30" />

          <!-- Rear Wooden Propeller -->
          <g class="airship-spinning-propeller" transform="translate(18, 55)">
            <ellipse cx="0" cy="0" rx="3.5" ry="14" fill="#a16207" stroke="#713f12" stroke-width="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#451a03" />
          </g>

          <!-- Trailing Ribbon with Official Logo-White Banner -->
          <g transform="translate(126, 35)">
            <path class="airship-fluttering-ribbon" d="M 0 10 Q 18 5 36 12 Q 54 18 72 8" fill="none" stroke="#ef4444" stroke-width="16" stroke-linecap="round" />
            <image href="${logoWhiteUrl}" x="12" y="2" width="34" height="18" />
          </g>
        </g>

        <!-- ═════════════════════════════════════════════════════════════
             ZONE 2: CELESTIAL REALM WITH OFFICIAL CHARACTERS & CREST
             ═════════════════════════════════════════════════════════════ -->

        <!-- Stage 12: Official Sub-Character (Celestial Mascot) Floating on Cloud -->
        <g class="map-bg-actor actor-float-celestial" transform="translate(2250, 75)">
          <ellipse cx="24" cy="48" rx="22" ry="6" fill="#c084fc" opacity="0.3" filter="url(#roadGlowFilter)" />
          <image href="${subChar1Url}" x="0" y="0" width="50" height="50" style="filter: drop-shadow(0 0 14px #c084fc);" />
        </g>

        <!-- Stage 15: Glowing Nebula Monolith with Official Golden Logo Crest -->
        <g transform="translate(2700, 240)">
          <ellipse cx="34" cy="38" rx="28" ry="7" fill="#1e1b4b" opacity="0.4" />
          <polygon points="12,35 22,5 32,35" fill="#c084fc" stroke="#e9d5ff" stroke-width="1.5" filter="url(#roadGlowFilter)" />
          <polygon points="32,35 44,-10 56,35" fill="#a855f7" stroke="#f3e8ff" stroke-width="1.5" filter="url(#roadGlowFilter)" />
          <image href="${logoWhiteUrl}" x="28" y="2" width="30" height="16" style="filter: drop-shadow(0 0 10px #fbbf24);" />
        </g>

        <!-- Stage 17: Official Character-2 (Frost Knight) Cheering on Mountain Peak -->
        <g class="map-bg-actor actor-bob-slow" transform="translate(3150, 240)">
          <ellipse cx="20" cy="42" rx="15" ry="5" fill="#000000" opacity="0.25" />
          <image href="${char2Url}" x="0" y="0" width="42" height="42" style="filter: drop-shadow(0 0 10px #38bdf8);" />
        </g>

        <!-- Stage 20: Royal Grand Crown Citadel Fortress with Official Red Bird Monument -->
        <g transform="translate(3510, 35)" opacity="0.98">
          <!-- Citadel Walls & Towers -->
          <rect x="15" y="45" width="110" height="70" rx="5" fill="#1e1b4b" stroke="#c084fc" stroke-width="2.5" />
          <rect x="0" y="20" width="32" height="95" rx="4" fill="#312e81" stroke="#a855f7" stroke-width="2" />
          <rect x="108" y="20" width="32" height="95" rx="4" fill="#312e81" stroke="#a855f7" stroke-width="2" />
          <!-- Central Spire -->
          <polygon points="50,45 70,2 90,45" fill="#f59e0b" stroke="#d97706" stroke-width="2" />
          <!-- Official Logo-White Crest on Castle Wall -->
          <image href="${logoWhiteUrl}" x="48" y="60" width="44" height="24" style="filter: drop-shadow(0 0 8px #fbbf24);" />

          <!-- Monumental Golden Champion Throne: Official Character-1 with Royal Crown -->
          <g transform="translate(48, -25)">
            <!-- Golden Royal Crown -->
            <polygon points="12,12 18,2 24,8 30,2 36,12" fill="#fbbf24" stroke="#b45309" stroke-width="1.8" filter="url(#roadGlowFilter)" />
            <image href="${mascotCharUrl}" x="0" y="8" width="46" height="46" style="filter: drop-shadow(0 4px 14px rgba(251, 191, 36, 0.9));" />
          </g>
          <!-- Floating Medallions -->
          <image href="${coinLogoUrl}" x="-8" y="5" width="22" height="22" class="coin-glint-bob" />
          <image href="${coinLogoUrl}" x="126" y="5" width="22" height="22" class="coin-glint-bob" />
        </g>

        <!-- ═════════════════════════════════════════════════════════════
             6. THE CONTINUOUS WAVY PATH (MULTI-LAYER RIBBON)
             ═════════════════════════════════════════════════════════════ -->

        <!-- Layer 1: Soil Bed Drop Shadow -->
        <path d="${fullPathD}" fill="none" stroke="#0f291e" stroke-width="58" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />

        <!-- Layer 2: Green Grass Berm / Shoulder -->
        <path d="${fullPathD}" fill="none" stroke="#22541c" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Layer 3: Cobblestone Earth Curb -->
        <path d="${fullPathD}" fill="none" stroke="#78350f" stroke-width="42" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Layer 4: Golden Sandy Paved Wavy Roadway -->
        <path d="${fullPathD}" fill="none" stroke="url(#roadSurfaceGrad)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Layer 5: Cobblestone Edge Texture -->
        <path d="${fullPathD}" fill="none" stroke="#d97706" stroke-width="18" stroke-dasharray="2 16" stroke-linecap="round" opacity="0.6" />

        <!-- Layer 6: Center Glowing Trail Dashes -->
        <path d="${fullPathD}" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-dasharray="8 14" stroke-linecap="round" opacity="0.85" />

        <!-- Layer 7: Active Journey Progress Line -->
        <path
          d="${activePathD}"
          fill="none"
          stroke="url(#activeRoadProgressGrad)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
          filter="url(#roadGlowFilter)"
          class="roadmap-active-progress-pulse"
        />
      </svg>
    `;
  }

  /**
   * Builds the 20 Circular Level Nodes positioned along the wavy path.
   * Prominently sized (96px) for effortless tapping on mobile touchscreen.
   * Visually highlights the Active Level with Red Bird mascot, pulsing beacon ring, and juicy PLAY! button.
   */
  buildLevelNodesHtml(unlockedLevel, avatarUrl) {
    let html = '';

    LEVEL_NODES.forEach((node) => {
      const levelId = node.id;
      const levelObj = LEVELS.find((l) => l.id === levelId) || { id: levelId, name: node.name, coinReward: 100 };
      const isUnlocked = levelId <= unlockedLevel;
      const isActive = levelId === this.activeLevelId;
      const starsEarned = this.storage.getStarsForLevel(levelId) || 0;
      const isCompleted = levelId < unlockedLevel || starsEarned > 0;
      const isClaimed = this.storage.hasClaimedCoins(levelId);

      // Stars crowning completed node (arched above circular disk)
      let starsHtml = '';
      if (starsEarned > 0 || isCompleted) {
        starsHtml = `
          <div class="node-stars-crown" title="${starsEarned} / 3 Stars Earned">
            <span class="crown-star ${starsEarned >= 1 ? 'earned' : ''}">★</span>
            <span class="crown-star center ${starsEarned >= 2 ? 'earned' : ''}">★</span>
            <span class="crown-star ${starsEarned >= 3 ? 'earned' : ''}">★</span>
          </div>
        `;
      } else if (isUnlocked) {
        starsHtml = `
          <div class="node-stars-crown unearned-crown" title="Unconquered Stage">
            <span class="crown-star">★</span>
            <span class="crown-star center">★</span>
            <span class="crown-star">★</span>
          </div>
        `;
      }

      // Milestone badges
      let milestoneBadgeHtml = '';
      if (node.milestone === 'sunburst') {
        milestoneBadgeHtml = `<div class="milestone-sunburst-rays" aria-hidden="true"></div>`;
      } else if (node.milestone === 'airship') {
        milestoneBadgeHtml = `<div class="milestone-boss-beacon" aria-hidden="true"><span class="beacon-label">GATEWAY 10</span></div>`;
      } else if (node.milestone === 'crystal') {
        milestoneBadgeHtml = `<div class="milestone-crystal-aura" aria-hidden="true"></div>`;
      } else if (node.milestone === 'crown') {
        milestoneBadgeHtml = `<div class="milestone-crown-apex" aria-hidden="true">👑</div>`;
      }

      // Active Level Elements (Mascot Pin, Pulsing Beacon Ring, Juicy PLAY! CTA)
      let activeIndicatorHtml = '';
      if (isActive) {
        activeIndicatorHtml = `
          <div class="active-beacon-pulse" aria-hidden="true"></div>

          <div class="active-commander-mascot" id="commander-pin-${levelId}" title="Active Stage ${levelId}">
            <div class="mascot-speech-cloud">Stage ${levelId}</div>
            <img src="${mascotCharUrl}" alt="Dili Bird" class="mascot-bird-img" />
          </div>

          <button
            type="button"
            class="roadmap-juicy-play-cta"
            data-level-id="${levelId}"
            title="Launch Stage ${levelId}"
            aria-label="Play Level ${levelId}"
          >
            <div class="play-cta-pointer-hand" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8H9L12 2Z"/></svg>
            </div>
            <span class="play-cta-text">PLAY! ▶</span>
          </button>
        `;
      }

      let nodeClass = '';
      if (!isUnlocked) {
        nodeClass = 'locked';
      } else if (isActive) {
        nodeClass = isCompleted ? 'unlocked active completed' : 'unlocked active frontier';
      } else if (isCompleted) {
        nodeClass = 'unlocked completed';
      } else {
        nodeClass = 'unlocked frontier';
      }

      html += `
        <article
          class="map-level-node ${nodeClass} ${node.milestone ? `milestone-${node.milestone}` : ''}"
          id="node-level-${levelId}"
          style="left: ${node.x}px; top: ${node.y}px;"
          data-level-id="${levelId}"
          role="button"
          tabindex="${isUnlocked ? '0' : '-1'}"
          aria-label="Level ${levelId}: ${node.name} (${isUnlocked ? (isActive ? 'Active Stage' : 'Unlocked') : 'Locked'})"
        >
          ${milestoneBadgeHtml}
          ${starsHtml}

          <!-- 3D Circular Disk (Enlarged to 96px for Mobile Touch) -->
          <div class="node-circle-body">
            <div class="node-circle-bevel"></div>
            <div class="node-circle-core">
              <span class="node-number-text">${levelId}</span>
            </div>

            ${
              !isUnlocked
                ? `<div class="node-lock-overlay" aria-hidden="true">
                    <svg class="node-lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="4" y="11" width="16" height="10" rx="3" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                  </div>`
                : ''
            }
          </div>

          <!-- Bottom Coin Tag Preview -->
          <div class="node-coin-pill ${isClaimed ? 'claimed' : ''}" title="${isClaimed ? 'Coins Claimed' : `Reward: +${levelObj.coinReward} Coins`}">
            <img src="${coinLogoUrl}" class="coin-pill-img" alt="" />
            <span>${isClaimed ? '✓' : `+${levelObj.coinReward}`}</span>
          </div>

          ${activeIndicatorHtml}
        </article>
      `;
    });

    return html;
  }

  /**
   * Realistic Volumetric Cumulus Cloud Fog of War:
   * Levels 1 through 10 visible initially.
   * Levels 11 onward obscured by stylized, realistic white cloud layers with volumetric shading,
   * ambient depth, and rolling mist, clearing progressively as stages are completed.
   */
  buildCloudFogOfWar(unlockedLevel) {
    if (unlockedLevel >= 20) {
      return '';
    }

    let fogStartX = 1910;
    if (unlockedLevel > 10) {
      const currentLevelNode = LEVEL_NODES[unlockedLevel - 1];
      if (currentLevelNode) {
        fogStartX = currentLevelNode.x + 95;
      }
    }

    const fogWidth = Math.max(0, MAP_TOTAL_WIDTH - fogStartX + 60);

    return `
      <section
        id="cloud-fog-overlay"
        class="cloud-fog-of-war"
        style="left: ${fogStartX}px; width: ${fogWidth}px;"
        aria-label="Cloud Fog of War: Celestial Citadel"
      >
        <!-- Realistic Sunbeam Crepuscular Rays Streaming through Cloud Edges -->
        <div class="cloud-sunray-bank" aria-hidden="true">
          <div class="cloud-sunray ray-1"></div>
          <div class="cloud-sunray ray-2"></div>
          <div class="cloud-sunray ray-3"></div>
        </div>

        <!-- Realistic Volumetric Layered Cumulus Cloud Puffs on Leading Edge -->
        <div class="cloud-puff-bank" aria-hidden="true">
          <!-- Background Atmospheric Haze -->
          <div class="cloud-billow haze-layer billow-bg-1"></div>
          <div class="cloud-billow haze-layer billow-bg-2"></div>

          <!-- Midground Volumetric Cumulus Bodies -->
          <div class="cloud-billow billow-volumetric billow-1"></div>
          <div class="cloud-billow billow-volumetric billow-2"></div>
          <div class="cloud-billow billow-volumetric billow-3"></div>
          <div class="cloud-billow billow-volumetric billow-4"></div>
          <div class="cloud-billow billow-volumetric billow-5"></div>
          <div class="cloud-billow billow-volumetric billow-6"></div>

          <!-- Foreground Crisp Sunlit Cloud Puffs -->
          <div class="cloud-billow billow-sunlit billow-7"></div>
          <div class="cloud-billow billow-sunlit billow-8"></div>
          <div class="cloud-billow billow-sunlit billow-9"></div>
        </div>

        <!-- Dense Misty Volumetric Fog Mass with Celestial Starlight -->
        <div class="cloud-fog-body" aria-hidden="true">
          <div class="cloud-fog-volumetric-gradient"></div>
          <div class="cloud-celestial-stars"></div>
        </div>

        <!-- Frosted Zone 2 Celestial Citadel Seal & Tooltip -->
        <div class="cloud-sanctuary-seal" id="cloud-sanctuary-seal" role="button" tabindex="0" title="Click to inspect Cloud Fog">
          <div class="seal-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="11" width="16" height="10" rx="3" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </div>
          <div class="seal-text-group">
            <span class="seal-kicker">ZONE 2 • CLOUD SANCTUARY</span>
            <strong class="seal-title">Celestial Citadel</strong>
            <p class="seal-hint">Conquer Stage ${Math.min(unlockedLevel, 10)} to dispel the mystical clouds!</p>
          </div>
        </div>
      </section>
    `;
  }

  render() {
    if (!this.gridEl) return;

    const unlockedLevel = this.storage.getUnlockedLevel();
    const avatarUrl = this.storage.getAvatarUrl();

    // Default activeLevelId to highest unlocked level if unset or beyond unlocked boundary
    if (!this.activeLevelId || this.activeLevelId > Math.min(20, unlockedLevel)) {
      this.activeLevelId = Math.min(20, Math.max(1, unlockedLevel));
    }

    const html = `
      <div class="map-world-container" id="map-world-container" style="width: ${MAP_TOTAL_WIDTH}px; height: ${MAP_TOTAL_HEIGHT}px;">
        <!-- 1. Multi-Layer SVG Landscape, Terrain & Continuous Wavy Road -->
        ${this.buildWorldSvgTerrain(unlockedLevel)}

        <!-- 2. Circular Level Nodes (Levels 1 to 20) -->
        <div class="map-nodes-layer" id="map-nodes-layer">
          ${this.buildLevelNodesHtml(unlockedLevel, avatarUrl)}
        </div>

        <!-- 3. Dynamic Realistic White Cloud Fog of War -->
        ${this.buildCloudFogOfWar(unlockedLevel)}
      </div>
    `;

    this.gridEl.innerHTML = html;
    this.bindNodeEvents();

    // Auto-scale to landscape screen height and center on the active node
    requestAnimationFrame(() => {
      this.updateMobileScaling();
      this.centerOnLevel(this.activeLevelId, false);
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * INTERACTIVE NAVIGATION & EVENTS
   * ═════════════════════════════════════════════════════════════ */

  bindNodeEvents() {
    if (!this.viewportEl) return;

    if (!this.viewportEventsBound) {
      this.viewportEventsBound = true;

      // Viewport-level delegated click listener
      this.viewportEl.addEventListener('click', (e) => {
        if (this.isInputLocked || this.isDragSuppressingClick) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Check PLAY! Button click
        const playBtn = e.target.closest('.roadmap-juicy-play-cta');
        if (playBtn) {
          e.preventDefault();
          e.stopPropagation();
          const levelId = Number(playBtn.dataset.levelId);
          this.launchLevel(levelId);
          return;
        }

        // Check Level Node Click
        const nodeEl = e.target.closest('.map-level-node');
        if (nodeEl) {
          e.preventDefault();
          e.stopPropagation();
          const levelId = Number(nodeEl.dataset.levelId);
          if (nodeEl.classList.contains('locked')) {
            this.handleLockedNodeClick(levelId, nodeEl);
          } else {
            this.launchLevel(levelId);
          }
          return;
        }

        // Check Cloud Sanctuary Seal Click / Cloud Tap
        const cloudSeal = e.target.closest('#cloud-sanctuary-seal, .cloud-fog-of-war');
        if (cloudSeal) {
          const seal = document.getElementById('cloud-sanctuary-seal');
          if (seal) {
            seal.classList.remove('seal-shake');
            void seal.offsetWidth;
            seal.classList.add('seal-shake');
          }
          const unlocked = this.storage.getUnlockedLevel();
          this.audio?.playCloudWhoosh?.();
          this.spawnMapSpeechBubble(
            seal || e.target,
            `☁️ Obscured by Cloud Fog! Complete Stage ${Math.min(unlocked, 10)} to clear the mist!`
          );
        }
      });

      this.viewportEl.addEventListener('keydown', (e) => {
        if (this.isInputLocked) return;
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const nodeEl = e.target.closest('.map-level-node.unlocked');
        if (!nodeEl) return;

        e.preventDefault();
        const levelId = Number(nodeEl.dataset.levelId);
        this.launchLevel(levelId);
      });

      this.viewportEl.addEventListener('pointerover', (e) => {
        if (this.isInputLocked || this.hasDragged) return;
        const nodeEl = e.target.closest('.map-level-node.unlocked');
        if (!nodeEl) return;

        const levelId = Number(nodeEl.dataset.levelId);
        if (this.lastPreviewedLevelId === levelId) return;
        this.lastPreviewedLevelId = levelId;

        const levelObj = LEVELS.find((l) => l.id === levelId);
        if (levelObj) {
          this.onPreviewLevel?.(levelObj);
        }
      });
    }

    // Fail-safe direct click listeners on each node
    const nodes = this.viewportEl.querySelectorAll('.map-level-node');
    nodes.forEach((nodeEl) => {
      nodeEl.addEventListener('click', (e) => {
        if (this.isInputLocked || this.isDragSuppressingClick) return;
        const levelId = Number(nodeEl.dataset.levelId);
        if (nodeEl.classList.contains('locked')) {
          this.handleLockedNodeClick(levelId, nodeEl);
        } else {
          this.launchLevel(levelId);
        }
      });
    });
  }

  handleLockedNodeClick(levelId, nodeEl = null) {
    const el = nodeEl || document.getElementById(`node-level-${levelId}`);
    if (el) {
      el.classList.remove('node-lock-shake');
      void el.offsetWidth;
      el.classList.add('node-lock-shake');
    }
    this.audio?.playError?.();
    this.spawnMapSpeechBubble(
      el,
      `🔒 Stage ${levelId} is locked! Clear Stage ${levelId - 1} first.`
    );
  }

  launchLevel(levelId) {
    if (this.isInputLocked) return;
    const num = Number(levelId);
    const levelObj = LEVELS.find((l) => l.id === num);
    if (!levelObj) return;

    const unlocked = this.storage.getUnlockedLevel();
    if (num > unlocked) {
      this.handleLockedNodeClick(num);
      return;
    }

    // Set active level
    this.activeLevelId = num;
    this.focusedLevelId = num;

    const nodeEl = document.getElementById(`node-level-${num}`);
    if (nodeEl) {
      nodeEl.classList.add('node-tap-pop');
      setTimeout(() => nodeEl.classList.remove('node-tap-pop'), 200);
    }

    this.audio?.playLevelSelect?.();
    this.onSelectLevel?.(levelObj);
  }

  spawnMapSpeechBubble(anchorEl, text) {
    if (!anchorEl) return;
    const existing = document.querySelector('.map-floating-bubble');
    existing?.remove();

    const bubble = document.createElement('div');
    bubble.className = 'map-floating-bubble';
    bubble.textContent = text;

    anchorEl.appendChild(bubble);
    setTimeout(() => {
      bubble.classList.add('fade-out');
      setTimeout(() => bubble.remove(), 400);
    }, 2200);
  }

  animatePlayerMarker(fromLevelId, toLevelId) {
    return new Promise((resolve) => {
      const fromNode = document.getElementById(`node-level-${fromLevelId}`);
      const toNode = document.getElementById(`node-level-${toLevelId}`);
      if (!fromNode || !toNode) {
        resolve();
        return;
      }

      this.lockInput();
      this.audio?.playMarkerStep?.();

      const existingPin = document.getElementById(`commander-pin-${fromLevelId}`);
      if (existingPin) {
        existingPin.classList.add('pin-traveling');
      }

      setTimeout(() => {
        this.activeLevelId = toLevelId;
        this.focusedLevelId = toLevelId;
        this.render();
        this.audio?.playLevelUnlock?.();
        this.centerOnLevel(toLevelId, true);
        const newPin = document.getElementById(`commander-pin-${toLevelId}`);
        if (newPin) {
          newPin.classList.add('pin-landing');
          setTimeout(() => newPin.classList.remove('pin-landing'), 600);
        }
        this.unlockInput();
        resolve();
      }, 650);
    });
  }

  async animateCloudRemoval() {
    this.lockInput();
    this.centerOnLevel(10, true);

    const cloudFogEl = document.getElementById('cloud-fog-overlay');
    if (!cloudFogEl) {
      this.storage.setZoneRevealed(2, true);
      this.unlockInput();
      return;
    }

    this.audio?.playCloudWhoosh?.();
    cloudFogEl.classList.add('cloud-dissipating');

    await new Promise((r) => setTimeout(r, 1200));

    this.storage.setZoneRevealed(2, true);
    this.audio?.playLevelUnlock?.();
    this.render();

    this.centerOnLevel(11, true);

    const level11Node = document.getElementById('node-level-11');
    if (level11Node) {
      level11Node.classList.add('node-unlocked-flare');
      setTimeout(() => level11Node.classList.remove('node-unlocked-flare'), 1000);
    }

    await this.animatePlayerMarker(10, 11);
    this.unlockInput();
  }
}
