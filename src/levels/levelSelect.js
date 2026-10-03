import { LEVELS } from './levelData.js';
import coinLogoUrl from '../assets/coin-with-logo.png';
import mascotCharUrl from '../assets/character.png';
import logoWhiteUrl from '../assets/logo-white.png';
import celestialMascotUrl from '../assets/sub-character.png';

/**
 * 20 Sequentially Placed Circular Level Nodes along a continuous, wavy undulating path.
 * Map total dimensions: width = 3720px, height = 580px.
 * Nodes oscillate organically in a wave pattern (y: 200–380) across the vibrant terrain.
 */
export const LEVEL_NODES = [
  // Zone 1: Sky Haven & Emerald Bastions (Levels 1–10)
  { id: 1,  x: 180,  y: 360, zoneId: 1, zone: 'Emerald Valley', name: 'Timber Watchtower' },
  { id: 2,  x: 360,  y: 210, zoneId: 1, zone: 'Crystal Ridge',  name: 'Twin Crystal Spires' },
  { id: 3,  x: 540,  y: 380, zoneId: 1, zone: 'Emerald Valley', name: 'Stone Bastion Fortress' },
  { id: 4,  x: 720,  y: 210, zoneId: 1, zone: 'Emerald Valley', name: 'Triple Bunker Redoubt' },
  { id: 5,  x: 910,  y: 360, zoneId: 1, zone: 'Emerald Valley', name: 'Grand Citadel', milestone: 'sunburst' },
  { id: 6,  x: 1100, y: 190, zoneId: 1, zone: 'Amber Canyon',   name: 'Canyon Gate Outpost' },
  { id: 7,  x: 1280, y: 380, zoneId: 1, zone: 'Amber Canyon',   name: 'High Scaffold Quarry' },
  { id: 8,  x: 1460, y: 230, zoneId: 1, zone: 'Amber Canyon',   name: 'Twin Citadels' },
  { id: 9,  x: 1640, y: 380, zoneId: 1, zone: 'Amber Canyon',   name: 'Obsidian Arch Stronghold' },
  { id: 10, x: 1830, y: 210, zoneId: 1, zone: 'Amber Canyon',   name: 'Colossus Gateway', milestone: 'airship' },

  // Zone 2: Celestial Citadel & Crown Summit (Levels 11–20)
  { id: 11, x: 2030, y: 370, zoneId: 2, zone: 'Celestial Twilight', name: 'Celestial Gateway' },
  { id: 12, x: 2210, y: 210, zoneId: 2, zone: 'Celestial Twilight', name: 'Crystal Monoliths' },
  { id: 13, x: 2390, y: 380, zoneId: 2, zone: 'Celestial Twilight', name: 'Starlight Sanctuary' },
  { id: 14, x: 2570, y: 210, zoneId: 2, zone: 'Celestial Twilight', name: 'Aurora Spires' },
  { id: 15, x: 2750, y: 360, zoneId: 2, zone: 'Celestial Twilight', name: 'Nebula Fortress', milestone: 'crystal' },
  { id: 16, x: 2930, y: 210, zoneId: 2, zone: 'Crown Summit',   name: 'Crown Bastion' },
  { id: 17, x: 3110, y: 380, zoneId: 2, zone: 'Crown Summit',   name: 'Stormkeep Citadel' },
  { id: 18, x: 3280, y: 220, zoneId: 2, zone: 'Crown Summit',   name: 'Dragon Spine Rampart' },
  { id: 19, x: 3440, y: 370, zoneId: 2, zone: 'Crown Summit',   name: 'Infernal Vaults' },
  { id: 20, x: 3580, y: 210, zoneId: 2, zone: 'Crown Summit',   name: 'Crown Summit Apex', milestone: 'crown' }
];

export const MAP_TOTAL_WIDTH = 3760;
export const MAP_TOTAL_HEIGHT = 580;

/**
 * Builds a natural, ultra-smooth cubic Bézier spline connecting nodes sequentially.
 */
function buildWavySplinePath(nodes, endIndex = nodes.length) {
  if (!nodes || nodes.length === 0) return '';
  const count = Math.min(nodes.length, endIndex);
  if (count < 2) {
    return `M ${nodes[0].x} ${nodes[0].y}`;
  }

  // Lead-in from before Level 1
  let d = `M ${Math.max(40, nodes[0].x - 100)} ${nodes[0].y + 10}`;
  // Smooth curve into node 0
  const dx0 = 100;
  d += ` C ${nodes[0].x - dx0 * 0.5} ${nodes[0].y + 10}, ${nodes[0].x - dx0 * 0.3} ${nodes[0].y}, ${nodes[0].x} ${nodes[0].y}`;

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
    d += ` C ${last.x + 80} ${last.y}, ${last.x + 120} ${last.y - 10}, ${last.x + 160} ${last.y - 10}`;
  }

  return d;
}

/**
 * Comprehensive, High-Fidelity Horizontal Level Selection Map.
 * - Continuous, winding wavy path across lush ground terrain.
 * - Circular nodes for levels 1 to 20 sequentially positioned on the path.
 * - 0–3 stars crowning completed nodes, red bird avatar on active frontier node, and juicy PLAY! button.
 * - Smooth horizontal touch and mouse dragging with velocity inertia; vertical scrolling disabled.
 * - Dynamic white Cloud Fog of War covering levels 11 onward, clearing progressively as stages are completed.
 * - Interactive navigation: tapping any unlocked node launches that level immediately.
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
    this.focusedLevelId = unlocked;
    this.lastPreviewedLevelId = null;
    this.currentZoneId = unlocked > 10 ? 2 : 1;

    this.isInputLocked = false;
    this.pendingZone2Unlock = false;
    this.pendingLevelUnlock = null;

    // Drag / Pan interaction state
    this.isPointerDown = false;
    this.hasDragged = false;
    this.startX = 0;
    this.startY = 0;
    this.scrollLeftStart = 0;
    this.lastX = 0;
    this.lastTime = 0;
    this.velocityX = 0;
    this.momentumRafId = null;

    this.bindViewportInteractions();
    this.bindQuickZoneJumps();
    this.bindFloatingNavButtons();
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

  /* ═════════════════════════════════════════════════════════════
   * HORIZONTAL SCROLLING & DRAGGING MECHANICS
   * ═════════════════════════════════════════════════════════════ */

  bindViewportInteractions() {
    if (!this.viewportEl) return;
    const vp = this.viewportEl;

    // Pointer Drag (Mouse + Touch)
    vp.addEventListener('pointerdown', (e) => {
      if (this.isInputLocked) return;
      // Cancel any ongoing momentum coasting
      if (this.momentumRafId) {
        cancelAnimationFrame(this.momentumRafId);
        this.momentumRafId = null;
      }

      this.isPointerDown = true;
      this.hasDragged = false;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.lastX = e.clientX;
      this.scrollLeftStart = vp.scrollLeft;
      this.lastTime = performance.now();
      this.velocityX = 0;
      vp.classList.add('is-panning');

      try {
        vp.setPointerCapture(e.pointerId);
      } catch {}
    });

    vp.addEventListener('pointermove', (e) => {
      if (!this.isPointerDown) return;
      const dx = e.clientX - this.startX;
      const dy = e.clientY - this.startY;

      // Check drag threshold (6px) to distinguish drag from tap
      if (!this.hasDragged && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        this.hasDragged = true;
      }

      if (this.hasDragged) {
        vp.scrollLeft = this.scrollLeftStart - dx;

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

      try {
        if (vp.hasPointerCapture(e.pointerId)) {
          vp.releasePointerCapture(e.pointerId);
        }
      } catch {}

      // Apply smooth momentum coasting
      if (this.hasDragged && Math.abs(this.velocityX) > 0.2) {
        this.startMomentumGlide(this.velocityX);
      }

      this.updateScrubberAndNavControls();
    };

    vp.addEventListener('pointerup', handlePointerEnd);
    vp.addEventListener('pointercancel', handlePointerEnd);

    // Mouse wheel horizontal translation (vertical wheel delta scrolls horizontally)
    vp.addEventListener('wheel', (e) => {
      if (this.isInputLocked) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 0.5) {
        e.preventDefault();
        vp.scrollLeft += delta * 1.1;
        this.updateScrubberAndNavControls();
      }
    }, { passive: false });

    // Ensure strictly no vertical movement on touch
    vp.addEventListener('touchmove', (e) => {
      // Touch-action: pan-x already helps, but prevent any vertical overscroll
    }, { passive: true });

    // Sync scrubber on scroll
    vp.addEventListener('scroll', () => {
      this.updateScrubberAndNavControls();
    }, { passive: true });
  }

  startMomentumGlide(initialVelocity) {
    const vp = this.viewportEl;
    if (!vp) return;

    let v = initialVelocity * 15; // Scale velocity to pixels per frame
    const friction = 0.93;

    const step = () => {
      if (Math.abs(v) < 0.3) {
        this.momentumRafId = null;
        return;
      }
      vp.scrollLeft -= v;
      v *= friction;
      this.updateScrubberAndNavControls();
      this.momentumRafId = requestAnimationFrame(step);
    };

    this.momentumRafId = requestAnimationFrame(step);
  }

  bindFloatingNavButtons() {
    const btnLeft = document.getElementById('btn-map-pan-left');
    const btnRight = document.getElementById('btn-map-pan-right');

    btnLeft?.addEventListener('click', () => {
      if (this.isInputLocked || !this.viewportEl) return;
      this.viewportEl.scrollBy({ left: -420, behavior: 'smooth' });
    });

    btnRight?.addEventListener('click', () => {
      if (this.isInputLocked || !this.viewportEl) return;
      this.viewportEl.scrollBy({ left: 420, behavior: 'smooth' });
    });
  }

  bindQuickZoneJumps() {
    const jumpBtn1 = document.getElementById('btn-jump-zone-1');
    const jumpBtn2 = document.getElementById('btn-jump-zone-2');

    jumpBtn1?.addEventListener('click', () => {
      this.panToZone(1, true);
    });

    jumpBtn2?.addEventListener('click', () => {
      this.panToZone(2, true);
    });
  }

  panToZone(zoneId, smooth = true) {
    if (!this.viewportEl) return;
    this.currentZoneId = Number(zoneId);
    let targetX = 0;
    if (zoneId === 1) {
      targetX = 0;
    } else {
      targetX = 1860 - 80;
    }
    this.viewportEl.scrollTo({ left: Math.max(0, targetX), behavior: smooth ? 'smooth' : 'auto' });
    this.updateZoneButtons();
  }

  centerOnLevel(levelId, smooth = true) {
    if (!this.viewportEl) return;
    const node = LEVEL_NODES.find((n) => n.id === Number(levelId)) || LEVEL_NODES[0];
    const vpWidth = this.viewportEl.clientWidth || 800;
    const targetScroll = node.x - vpWidth / 2;
    this.viewportEl.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto'
    });
    this.updateScrubberAndNavControls();
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

  updateZoneButtons() {
    const jumpBtn1 = document.getElementById('btn-jump-zone-1');
    const jumpBtn2 = document.getElementById('btn-jump-zone-2');
    if (!this.viewportEl) return;

    const scrollLeft = this.viewportEl.scrollLeft;
    const isZone2 = scrollLeft >= 1400;
    this.currentZoneId = isZone2 ? 2 : 1;

    jumpBtn1?.classList.toggle('active', !isZone2);
    jumpBtn2?.classList.toggle('active', isZone2);
  }

  updateScrubberAndNavControls() {
    if (!this.viewportEl) return;
    const vp = this.viewportEl;
    const maxScroll = Math.max(1, vp.scrollWidth - vp.clientWidth);
    const currentScroll = vp.scrollLeft;

    // Update floating nav arrows opacity / visibility
    const btnLeft = document.getElementById('btn-map-pan-left');
    const btnRight = document.getElementById('btn-map-pan-right');
    if (btnLeft) {
      btnLeft.classList.toggle('disabled', currentScroll <= 10);
    }
    if (btnRight) {
      btnRight.classList.toggle('disabled', currentScroll >= maxScroll - 10);
    }

    // Update Scrubber marker
    const scrubberMarker = document.getElementById('scrubber-marker');
    if (scrubberMarker) {
      const pct = Math.max(0, Math.min(100, (currentScroll / maxScroll) * 100));
      scrubberMarker.style.left = `${pct}%`;
    }

    this.updateZoneButtons();
  }

  /* ═════════════════════════════════════════════════════════════
   * MAP RENDERING & TERRAIN GRAPHICS
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Generates the multi-layer SVG world canvas:
   * 1. Sky gradients & celestial transition
   * 2. Distant mountain silhouettes
   * 3. Green hill plateaus, lagoon, cliffs, and floating rocks
   * 4. Multi-layer winding wavy road (shadow, curb, road, stones, center dashes, active progress)
   * 5. Thematic scenery props (Watchtowers, bridges, Colossus Altar, Level 10 Airship, Level 20 Citadel)
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
          <!-- Atmosphere & Sky Gradient across 3760px -->
          <linearGradient id="skyAtmosphereGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="30%" stop-color="#60a5fa" />
            <stop offset="48%" stop-color="#f59e0b" stop-opacity="0.3" />
            <stop offset="54%" stop-color="#4f46e5" />
            <stop offset="78%" stop-color="#3b0764" />
            <stop offset="100%" stop-color="#1e1b4b" />
          </linearGradient>

          <!-- Golden Winding Road Gradient -->
          <linearGradient id="roadSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="40%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>

          <!-- Glowing Active Progress Line Gradient -->
          <linearGradient id="activeRoadProgressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="45%" stop-color="#fbbf24" />
            <stop offset="85%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#ef4444" />
          </linearGradient>

          <!-- Vibrant Lush Green Hills Gradients -->
          <linearGradient id="greenHillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#86efac" />
            <stop offset="25%" stop-color="#22c55e" />
            <stop offset="80%" stop-color="#15803d" />
            <stop offset="100%" stop-color="#14532d" />
          </linearGradient>
          <linearGradient id="greenHillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#4ade80" />
            <stop offset="45%" stop-color="#16a34a" />
            <stop offset="100%" stop-color="#166534" />
          </linearGradient>

          <!-- Amber Canyon Rock Gradient -->
          <linearGradient id="amberCanyonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fde68a" />
            <stop offset="35%" stop-color="#d97706" />
            <stop offset="100%" stop-color="#78350f" />
          </linearGradient>

          <!-- Celestial Mountain Gradient (Zone 2) -->
          <linearGradient id="celestialPeakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#c084fc" />
            <stop offset="40%" stop-color="#7e22ce" />
            <stop offset="100%" stop-color="#3b0764" />
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
        </defs>

        <!-- 1. SKY BACKDROP & AMBIENCE -->
        <rect x="0" y="0" width="${MAP_TOTAL_WIDTH}" height="${MAP_TOTAL_HEIGHT}" fill="url(#skyAtmosphereGrad)" opacity="0.32" />

        <!-- Distant Mountain Silhouettes -->
        <path d="M 0 320 Q 300 180 600 300 T 1200 290 T 1800 280 T 2400 270 T 3000 280 T 3760 300 L 3760 580 L 0 580 Z" fill="#0f291e" opacity="0.45" />
        <path d="M 0 350 Q 250 240 500 330 T 1000 320 T 1500 300 T 2000 310 T 2600 290 T 3200 310 T 3760 330 L 3760 580 L 0 580 Z" fill="#133d26" opacity="0.55" />

        <!-- 2. MIDGROUND TERRAIN ISLANDS & PLATEAUS -->

        <!-- Zone 1: Emerald Valley Rolling Hills (x: 0 to 1100) -->
        <path d="M -40 380 Q 180 260 400 370 T 800 330 T 1150 380 L 1150 580 L -40 580 Z" fill="url(#greenHillGrad1)" />
        <path d="M 120 440 Q 360 140 600 420 T 980 430 L 980 580 L 120 580 Z" fill="url(#greenHillGrad2)" opacity="0.85" />

        <!-- Coastal Water Cove at start (Levels 1–3) -->
        <path d="M 0 460 Q 140 430 260 480 T 480 510 L 480 580 L 0 580 Z" fill="url(#lagoonWaterGrad)" opacity="0.75" />
        <!-- Sandy Beach Shoreline -->
        <path d="M 0 455 Q 140 425 260 475 T 490 505" fill="none" stroke="#fef08a" stroke-width="8" stroke-linecap="round" opacity="0.8" />

        <!-- Amber Canyon Rocky Cliffs (x: 1050 to 1950) -->
        <path d="M 1050 420 Q 1250 160 1450 390 T 1750 340 T 1980 420 L 1980 580 L 1050 580 Z" fill="url(#amberCanyonGrad)" />
        <!-- Canyon Outcroppings & Spires -->
        <polygon points="1080,430 1100,165 1135,430" fill="#b45309" opacity="0.9" />
        <polygon points="1440,430 1460,205 1490,430" fill="#92400e" opacity="0.9" />

        <!-- Zone 2: Celestial Citadel & Frost Peaks (x: 1950 to 3760) -->
        <path d="M 1950 420 Q 2200 170 2450 380 T 2950 340 T 3450 320 T 3760 380 L 3760 580 L 1950 580 Z" fill="url(#celestialPeakGrad)" />
        <polygon points="2180,420 2210,185 2245,420" fill="#6b21a8" opacity="0.85" />
        <polygon points="2540,420 2570,185 2605,420" fill="#581c87" opacity="0.85" />
        <polygon points="3250,420 3280,195 3315,420" fill="#4c1d95" opacity="0.85" />

        <!-- 3. SCENERY PROPS & STRUCTURES (Inspired by Angry Birds 2 Map) -->

        <!-- Watchtower at Level 4 (x = 720) -->
        <g transform="translate(680, 110)" opacity="0.92">
          <!-- Timber posts -->
          <line x1="15" y1="110" x2="25" y2="40" stroke="#78350f" stroke-width="4.5" stroke-linecap="round" />
          <line x1="55" y1="110" x2="45" y2="40" stroke="#78350f" stroke-width="4.5" stroke-linecap="round" />
          <!-- Cross bracing -->
          <line x1="18" y1="95" x2="52" y2="55" stroke="#92400e" stroke-width="2.5" />
          <line x1="18" y1="55" x2="52" y2="95" stroke="#92400e" stroke-width="2.5" />
          <!-- Platform deck -->
          <rect x="10" y="36" width="50" height="7" rx="2" fill="#b45309" stroke="#78350f" stroke-width="1.5" />
          <!-- Thatched canopy roof -->
          <polygon points="5,36 35,12 65,36" fill="#ca8a04" stroke="#854d0e" stroke-width="2" />
          <line x1="35" y1="12" x2="35" y2="2" stroke="#451a03" stroke-width="2" />
          <polygon points="35,2 48,6 35,10" fill="#ef4444" />
        </g>

        <!-- Sentry Outpost with Cute Peeking Green Pig at Level 6 (x = 1100) -->
        <g transform="translate(1140, 120)">
          <!-- Wooden Tower Frame -->
          <rect x="0" y="40" width="36" height="50" fill="none" stroke="#78350f" stroke-width="3" />
          <line x1="0" y1="40" x2="36" y2="90" stroke="#92400e" stroke-width="2" />
          <rect x="-4" y="34" width="44" height="6" rx="2" fill="#b45309" />
          <!-- Cute Green Pig Peeking -->
          <circle cx="28" cy="24" r="14" fill="#22c55e" stroke="#15803d" stroke-width="2" />
          <!-- Pig Ears -->
          <circle cx="20" cy="12" r="4" fill="#22c55e" stroke="#15803d" stroke-width="1.5" />
          <circle cx="36" cy="12" r="4" fill="#22c55e" stroke="#15803d" stroke-width="1.5" />
          <!-- Pig Snout -->
          <ellipse cx="28" cy="26" rx="6.5" ry="4.5" fill="#4ade80" stroke="#16a34a" stroke-width="1" />
          <circle cx="26" cy="26" r="1.2" fill="#14532d" />
          <circle cx="30" cy="26" r="1.2" fill="#14532d" />
          <!-- Pig Eyes -->
          <circle cx="23" cy="20" r="2.5" fill="#ffffff" /><circle cx="23" cy="20" r="1.2" fill="#000000" />
          <circle cx="33" cy="20" r="2.5" fill="#ffffff" /><circle cx="33" cy="20" r="1.2" fill="#000000" />
        </g>

        <!-- Wooden Plank Suspension Bridge over Ravine at Level 7 (x = 1280) -->
        <path d="M 1210 395 Q 1280 415 1350 395" fill="none" stroke="#78350f" stroke-width="5" stroke-linecap="round" />
        <path d="M 1210 395 Q 1280 415 1350 395" fill="none" stroke="#ca8a04" stroke-width="3" stroke-dasharray="4 8" stroke-linecap="round" />

        <!-- Golden Key on the road between Lv 7 & Lv 8 (x = 1370) -->
        <g transform="translate(1370, 310) rotate(-25)">
          <circle cx="8" cy="8" r="7" fill="none" stroke="#fbbf24" stroke-width="2.5" />
          <line x1="15" y1="8" x2="30" y2="8" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" />
          <line x1="24" y1="8" x2="24" y2="14" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" />
          <line x1="28" y1="8" x2="28" y2="13" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" />
        </g>

        <!-- ═════════════════════════════════════════════════════════════
             LEVEL 10: GRAND COLOSSUS ALTAR & FLOATING AIRSHIP
             ═════════════════════════════════════════════════════════════ -->
        <!-- Stone Altar Platform Base under Level 10 Node (x = 1830, y = 210) -->
        <g transform="translate(1780, 220)">
          <!-- Circular Carved Stone Dais -->
          <ellipse cx="50" cy="30" rx="60" ry="24" fill="#334155" stroke="#64748b" stroke-width="3" />
          <ellipse cx="50" cy="25" rx="52" ry="18" fill="#1e293b" stroke="#94a3b8" stroke-width="2" />
          <!-- Rune glow ring -->
          <ellipse cx="50" cy="23" rx="42" ry="14" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 6" opacity="0.8" />
          <!-- Radiant upward light columns shooting to the airship -->
          <polygon points="15,22 40,-130 60,-130 85,22" fill="url(#skyAtmosphereGrad)" opacity="0.45" filter="url(#lightBeaconGlow)" />
        </g>

        <!-- Floating Airship / Hot Air Balloon above Level 10 (Animated via CSS) -->
        <g id="map-level-10-airship" class="map-floating-airship" transform="translate(1765, 30)">
          <!-- Shadow beneath airship -->
          <ellipse cx="65" cy="140" rx="35" ry="8" fill="#000000" opacity="0.25" filter="url(#roadGlowFilter)" />

          <!-- Airship Balloon Envelope (Yellow & Green Stripes like reference image) -->
          <ellipse cx="65" cy="55" rx="55" ry="38" fill="#facc15" stroke="#ca8a04" stroke-width="2.5" />
          <path d="M 35 25 Q 65 55 35 85" fill="none" stroke="#16a34a" stroke-width="6" opacity="0.8" />
          <path d="M 65 17 Q 65 55 65 93" fill="none" stroke="#16a34a" stroke-width="6" opacity="0.8" />
          <path d="M 95 25 Q 65 55 95 85" fill="none" stroke="#16a34a" stroke-width="6" opacity="0.8" />

          <!-- Rigging Cords -->
          <line x1="30" y1="75" x2="45" y2="105" stroke="#78350f" stroke-width="1.8" />
          <line x1="100" y1="75" x2="85" y2="105" stroke="#78350f" stroke-width="1.8" />
          <line x1="65" y1="92" x2="65" y2="105" stroke="#78350f" stroke-width="1.8" />

          <!-- Wooden Basket Gondola -->
          <rect x="42" y="103" width="46" height="22" rx="6" fill="#b45309" stroke="#78350f" stroke-width="2" />
          <line x1="42" y1="114" x2="88" y2="114" stroke="#78350f" stroke-width="1.5" />

          <!-- Green Pig Pilot in Airship Gondola -->
          <circle cx="65" cy="100" r="10" fill="#22c55e" stroke="#15803d" stroke-width="1.5" />
          <ellipse cx="65" cy="102" rx="4.5" ry="3" fill="#4ade80" />
          <circle cx="62" cy="98" r="1.5" fill="#fff" /><circle cx="62" cy="98" r="0.8" fill="#000" />
          <circle cx="68" cy="98" r="1.5" fill="#fff" /><circle cx="68" cy="98" r="0.8" fill="#000" />

          <!-- Rear Wooden Propeller (Spinning) -->
          <g class="airship-spinning-propeller" transform="translate(18, 70)">
            <ellipse cx="0" cy="0" rx="3.5" ry="14" fill="#a16207" stroke="#713f12" stroke-width="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#451a03" />
          </g>

          <!-- Trailing Red Streamer Ribbon -->
          <path class="airship-fluttering-ribbon" d="M 120 55 Q 135 50 150 56 Q 160 62 170 54" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
        </g>

        <!-- ═════════════════════════════════════════════════════════════
             ZONE 2: CELESTIAL CRYSTALS & LEVEL 20 GRAND CITADEL
             ═════════════════════════════════════════════════════════════ -->
        <!-- Glowing Crystal Clusters at Level 15 (x = 2750) -->
        <g transform="translate(2700, 310)">
          <polygon points="10,40 18,10 26,40" fill="#c084fc" stroke="#e9d5ff" stroke-width="1.5" filter="url(#roadGlowFilter)" />
          <polygon points="26,40 36,0 46,40" fill="#a855f7" stroke="#f3e8ff" stroke-width="1.5" filter="url(#roadGlowFilter)" />
          <polygon points="46,40 52,15 58,40" fill="#c084fc" stroke="#e9d5ff" stroke-width="1.5" filter="url(#roadGlowFilter)" />
        </g>

        <!-- Level 20: Royal Grand Crown Citadel Fortress (x = 3580, y = 210) -->
        <g transform="translate(3520, 95)" opacity="0.95">
          <!-- Citadel Walls & Towers -->
          <rect x="10" y="45" width="100" height="65" rx="4" fill="#1e1b4b" stroke="#c084fc" stroke-width="2.5" />
          <!-- Left & Right Battlements -->
          <rect x="0" y="25" width="28" height="85" rx="3" fill="#312e81" stroke="#a855f7" stroke-width="2" />
          <rect x="92" y="25" width="28" height="85" rx="3" fill="#312e81" stroke="#a855f7" stroke-width="2" />
          <!-- Central Spire -->
          <polygon points="45,45 60,8 75,45" fill="#f59e0b" stroke="#d97706" stroke-width="2" />
          <!-- Crown on top of Central Spire -->
          <polygon points="50,12 55,2 60,8 65,2 70,12" fill="#fbbf24" stroke="#b45309" stroke-width="1.5" />
          <!-- Royal Banners -->
          <line x1="14" y1="25" x2="14" y2="10" stroke="#fbbf24" stroke-width="2" />
          <polygon points="14,10 28,15 14,20" fill="#a855f7" />
          <line x1="106" y1="25" x2="106" y2="10" stroke="#fbbf24" stroke-width="2" />
          <polygon points="106,10 120,15 106,20" fill="#a855f7" />
        </g>

        <!-- ═════════════════════════════════════════════════════════════
             4. THE CONTINUOUS WAVY PATH (MULTI-LAYER RIBBON)
             ═════════════════════════════════════════════════════════════ -->

        <!-- Layer 1: Soil Bed Drop Shadow -->
        <path d="${fullPathD}" fill="none" stroke="#14290d" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" />

        <!-- Layer 2: Green Grass Berm / Shoulder -->
        <path d="${fullPathD}" fill="none" stroke="#2d5312" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Layer 3: Cobblestone Earth Curb -->
        <path d="${fullPathD}" fill="none" stroke="#78350f" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Layer 4: Golden Sandy Paved Wavy Roadway -->
        <path d="${fullPathD}" fill="none" stroke="url(#roadSurfaceGrad)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Layer 5: Cobblestone Edge Texture -->
        <path d="${fullPathD}" fill="none" stroke="#d97706" stroke-width="14" stroke-dasharray="2 16" stroke-linecap="round" opacity="0.65" />

        <!-- Layer 6: Center Glowing Trail Dashes -->
        <path d="${fullPathD}" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-dasharray="8 14" stroke-linecap="round" opacity="0.82" />

        <!-- Layer 7: Active Journey Progress Line (Illuminates from Lv 1 up to unlocked level) -->
        <path
          d="${activePathD}"
          fill="none"
          stroke="url(#activeRoadProgressGrad)"
          stroke-width="6.5"
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
   */
  buildLevelNodesHtml(unlockedLevel, avatarUrl) {
    let html = '';

    LEVEL_NODES.forEach((node) => {
      const levelId = node.id;
      const levelObj = LEVELS.find((l) => l.id === levelId) || { id: levelId, name: node.name, coinReward: 100 };
      const isUnlocked = levelId <= unlockedLevel;
      const isFrontier = levelId === unlockedLevel;
      const starsEarned = this.storage.getStarsForLevel(levelId) || 0;
      const isClaimed = this.storage.hasClaimedCoins(levelId);

      // Stars crowning completed node (arched above circular disk, matching reference screenshot)
      let starsHtml = '';
      if (starsEarned > 0 || !isUnlocked) {
        starsHtml = `
          <div class="node-stars-crown" title="${starsEarned} / 3 Stars Earned">
            <span class="crown-star ${starsEarned >= 1 ? 'earned' : ''}">★</span>
            <span class="crown-star center ${starsEarned >= 2 ? 'earned' : ''}">★</span>
            <span class="crown-star ${starsEarned >= 3 ? 'earned' : ''}">★</span>
          </div>
        `;
      } else if (isFrontier) {
        starsHtml = `
          <div class="node-stars-crown frontier-crown" title="Unconquered Stage">
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

      // Active Frontier Bird Mascot Pin and Juicy PLAY! Button (Matching Image 1)
      let frontierMarkerHtml = '';
      if (isFrontier) {
        frontierMarkerHtml = `
          <div class="active-commander-mascot" id="commander-pin-${levelId}" title="You are here!">
            <div class="mascot-speech-cloud">Stage ${levelId}</div>
            <img src="${mascotCharUrl}" alt="Dili Bird" class="mascot-bird-img" />
          </div>

          <button
            type="button"
            class="roadmap-juicy-play-cta"
            id="btn-play-frontier-node"
            data-level-id="${levelId}"
            title="Launch Stage ${levelId}"
            aria-label="Play Level ${levelId}"
          >
            <div class="play-cta-pointer-hand" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8H9L12 2Z"/></svg>
            </div>
            <span class="play-cta-text">PLAY!</span>
          </button>
        `;
      }

      const nodeClass = isUnlocked
        ? isFrontier
          ? 'unlocked frontier'
          : 'unlocked completed'
        : 'locked';

      html += `
        <article
          class="map-level-node ${nodeClass} ${node.milestone ? `milestone-${node.milestone}` : ''}"
          id="node-level-${levelId}"
          style="left: ${node.x}px; top: ${node.y}px;"
          data-level-id="${levelId}"
          role="button"
          tabindex="${isUnlocked ? '0' : '-1'}"
          aria-label="Level ${levelId}: ${node.name} (${isUnlocked ? 'Unlocked' : 'Locked'})"
        >
          ${milestoneBadgeHtml}
          ${starsHtml}

          <!-- 3D Circular Disk -->
          <div class="node-circle-body">
            <div class="node-circle-bevel"></div>
            <div class="node-circle-core">
              <span class="node-number-text">${levelId}</span>
            </div>

            ${
              !isUnlocked
                ? `<div class="node-lock-overlay" aria-hidden="true">
                    <svg class="node-lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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

          ${frontierMarkerHtml}
        </article>
      `;
    });

    return html;
  }

  /**
   * Dynamic Cloud Covering System (Fog of War):
   * Levels 1 through 10 visible initially.
   * Levels 11 onward obscured by stylized white cloud overlay.
   * Progressively clears as levels are completed.
   */
  buildCloudFogOfWar(unlockedLevel) {
    // If all 20 levels cleared, fog is completely dispelled
    if (unlockedLevel >= 20) {
      return '';
    }

    // Determine the dynamic X boundary where the cloud fog begins:
    let fogStartX = 1910; // Default: immediately after Level 10
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
        <!-- Stylized Billowing White Cumulus Cloud Puffs on the leading edge -->
        <div class="cloud-puff-bank" aria-hidden="true">
          <div class="cloud-billow billow-1"></div>
          <div class="cloud-billow billow-2"></div>
          <div class="cloud-billow billow-3"></div>
          <div class="cloud-billow billow-4"></div>
          <div class="cloud-billow billow-5"></div>
          <div class="cloud-billow billow-6"></div>
          <div class="cloud-billow billow-7"></div>
          <div class="cloud-billow billow-8"></div>
        </div>

        <!-- Dense misty white/ethereal cloud mass -->
        <div class="cloud-fog-body" aria-hidden="true">
          <div class="cloud-fog-gradient-shim"></div>
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

    const html = `
      <div class="map-world-container" id="map-world-container" style="width: ${MAP_TOTAL_WIDTH}px; height: ${MAP_TOTAL_HEIGHT}px;">
        <!-- 1. Multi-Layer SVG Landscape, Terrain & Continuous Wavy Road -->
        ${this.buildWorldSvgTerrain(unlockedLevel)}

        <!-- 2. Circular Level Nodes (Levels 1 to 20) -->
        <div class="map-nodes-layer" id="map-nodes-layer">
          ${this.buildLevelNodesHtml(unlockedLevel, avatarUrl)}
        </div>

        <!-- 3. Dynamic Stylized White Cloud Fog of War -->
        ${this.buildCloudFogOfWar(unlockedLevel)}
      </div>
    `;

    this.gridEl.innerHTML = html;
    this.bindNodeEvents();

    // Auto-center viewport on current frontier node and sync UI indicators
    requestAnimationFrame(() => {
      this.centerOnLevel(unlockedLevel, false);
      this.updateScrubberAndNavControls();

      const scrubberFill = document.getElementById('scrubber-progress-fill');
      if (scrubberFill) {
        const pct = Math.min(100, Math.max(5, (unlockedLevel / 20) * 100));
        scrubberFill.style.width = `${pct}%`;
      }
      const labelZ2 = document.getElementById('label-jump-zone-2');
      if (labelZ2) {
        const isRevealed = this.storage.isZoneRevealed(2) || unlockedLevel > 10;
        labelZ2.textContent = isRevealed
          ? 'Zone 2: Celestial Citadel (11–20) ★'
          : 'Zone 2: Celestial Citadel (11–20) ☁️';
      }
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * INTERACTIVE NAVIGATION & EVENTS
   * ═════════════════════════════════════════════════════════════ */

  bindNodeEvents() {
    if (!this.gridEl) return;

    // Node Click & PLAY Button Click
    this.gridEl.addEventListener('click', (e) => {
      if (this.isInputLocked || this.hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Check PLAY! Button click
      const playBtn = e.target.closest('#btn-play-frontier-node, .roadmap-juicy-play-cta');
      if (playBtn) {
        const levelId = Number(playBtn.dataset.levelId);
        const levelObj = LEVELS.find((l) => l.id === levelId) || LEVELS[0];
        this.audio?.playMarkerStep?.();
        this.onSelectLevel?.(levelObj);
        return;
      }

      // Check Unlocked Node Click
      const nodeEl = e.target.closest('.map-level-node.unlocked');
      if (nodeEl) {
        const levelId = Number(nodeEl.dataset.levelId);
        const levelObj = LEVELS.find((l) => l.id === levelId);
        if (levelObj) {
          // Playful tap pop effect
          nodeEl.classList.add('node-tap-pop');
          setTimeout(() => nodeEl.classList.remove('node-tap-pop'), 200);
          this.audio?.playMarkerStep?.();
          this.onSelectLevel?.(levelObj);
        }
        return;
      }

      // Check Locked Node Click (Give cheerful feedback)
      const lockedNodeEl = e.target.closest('.map-level-node.locked');
      if (lockedNodeEl) {
        const levelId = Number(lockedNodeEl.dataset.levelId);
        lockedNodeEl.classList.remove('node-lock-shake');
        void lockedNodeEl.offsetWidth;
        lockedNodeEl.classList.add('node-lock-shake');
        this.audio?.playMaterialImpact?.('wood', 0.5);
        this.spawnMapSpeechBubble(
          lockedNodeEl,
          `🔒 Stage ${levelId} is locked! Clear Stage ${levelId - 1} first.`
        );
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

    // Keyboard support on nodes
    this.gridEl.addEventListener('keydown', (e) => {
      if (this.isInputLocked) return;
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const nodeEl = e.target.closest('.map-level-node.unlocked');
      if (!nodeEl) return;

      e.preventDefault();
      const levelId = Number(nodeEl.dataset.levelId);
      const levelObj = LEVELS.find((l) => l.id === levelId);
      if (levelObj) {
        this.onSelectLevel?.(levelObj);
      }
    });

    // Hover preview
    this.gridEl.addEventListener('pointerover', (e) => {
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

  /**
   * Smoothly animates player marker between levels.
   */
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

  /**
   * Cinematic animated cloud removal sequence when Level 10 is defeated.
   * Sweeping winds disperse the white cloud overlay to reveal Level 11 and Zone 2!
   */
  async animateCloudRemoval() {
    this.lockInput();
    this.centerOnLevel(10, true);

    const cloudFogEl = document.getElementById('cloud-fog-overlay');
    if (!cloudFogEl) {
      this.storage.setZoneRevealed(2, true);
      this.unlockInput();
      return;
    }

    // Play rushing wind audio
    this.audio?.playCloudWhoosh?.();

    // Trigger cloud dissipation animation
    cloudFogEl.classList.add('cloud-dissipating');

    await new Promise((r) => setTimeout(r, 1200));

    // Save zone reveal in storage
    this.storage.setZoneRevealed(2, true);

    // Audio chime for level unlock
    this.audio?.playLevelUnlock?.();

    // Re-render roadmap with Zone 2 revealed
    this.render();

    // Pan camera to Level 11
    this.centerOnLevel(11, true);

    // Highlight Level 11 with unlocked flare pulse
    const level11Node = document.getElementById('node-level-11');
    if (level11Node) {
      level11Node.classList.add('node-unlocked-flare');
      setTimeout(() => level11Node.classList.remove('node-unlocked-flare'), 1000);
    }

    // Animate marker from 10 to 11
    await this.animatePlayerMarker(10, 11);

    this.unlockInput();
  }
}
