import { LEVELS } from './levelData.js';
import coinLogoUrl from '../assets/coin-with-logo.png';
import mascotCharUrl from '../assets/character.png';
import logoWhiteUrl from '../assets/logo-white.png';
import celestialMascotUrl from '../assets/sub-character.png';

/**
 * Clockwise 4x3 Perimeter coordinates for Zone 1 (Levels 1–10).
 * Center 2-column cell (row 2, cols 2 & 3) hosts the Dili-Birds Mascot & Campaign Showcase.
 */
export const ZONE_1_SLOTS = [
  { id: 1, row: 1, col: 1, nextArrow: '→', arrowPos: 'right' },
  { id: 2, row: 1, col: 2, nextArrow: '→', arrowPos: 'right' },
  { id: 3, row: 1, col: 3, nextArrow: '→', arrowPos: 'right' },
  { id: 4, row: 1, col: 4, nextArrow: '↓', arrowPos: 'bottom' },
  { id: 5, row: 2, col: 4, nextArrow: '↓', arrowPos: 'bottom' },
  { id: 6, row: 3, col: 4, nextArrow: '←', arrowPos: 'left' },
  { id: 7, row: 3, col: 3, nextArrow: '←', arrowPos: 'left' },
  { id: 8, row: 3, col: 2, nextArrow: '←', arrowPos: 'left' },
  { id: 9, row: 3, col: 1, nextArrow: '↑', arrowPos: 'top' },
  { id: 10, row: 2, col: 1, nextArrow: '★', arrowPos: 'end' }
];

/**
 * Clockwise 4x3 Perimeter coordinates for Zone 2 (Levels 11–20).
 * Center 2-column cell (row 2, cols 2 & 3) hosts the Celestial Citadel Showcase.
 */
export const ZONE_2_SLOTS = [
  { id: 11, row: 1, col: 1, nextArrow: '→', arrowPos: 'right' },
  { id: 12, row: 1, col: 2, nextArrow: '→', arrowPos: 'right' },
  { id: 13, row: 1, col: 3, nextArrow: '→', arrowPos: 'right' },
  { id: 14, row: 1, col: 4, nextArrow: '↓', arrowPos: 'bottom' },
  { id: 15, row: 2, col: 4, nextArrow: '↓', arrowPos: 'bottom' },
  { id: 16, row: 3, col: 4, nextArrow: '←', arrowPos: 'left' },
  { id: 17, row: 3, col: 3, nextArrow: '←', arrowPos: 'left' },
  { id: 18, row: 3, col: 2, nextArrow: '←', arrowPos: 'left' },
  { id: 19, row: 3, col: 1, nextArrow: '↑', arrowPos: 'top' },
  { id: 20, row: 2, col: 1, nextArrow: '👑', arrowPos: 'end' }
];

export const ZONES = [
  {
    id: 1,
    name: 'Sky Haven & Emerald Bastions',
    shortName: 'Sky Haven',
    tag: 'ZONE 1',
    startLevel: 1,
    endLevel: 10,
    accent: '#38bdf8'
  },
  {
    id: 2,
    name: 'Celestial Citadel & Frost Peaks',
    shortName: 'Celestial Citadel',
    tag: 'ZONE 2',
    startLevel: 11,
    endLevel: 20,
    accent: '#a855f7'
  }
];

/**
 * Professional 3D Level Selection & Progression System.
 * - Dual 10-level Zones (1–10 and 11–20) maintaining the exact look & feel of the current map.
 * - Soft cloud/fog cover overlaying locked future zones.
 * - Animated cloud removal sequence when Level 10 is conquered.
 * - Locked, Unlocked (Frontier), and Completed states with 0–3 stars.
 * - Smooth player marker path movement, camera panning, and gentle zoom on unlock.
 * - Input locking during cinematic transitions.
 * - Mobile-friendly touch drag & responsive navigation.
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

    // Mobile swipe tracking
    this.touchStartX = 0;
    this.touchStartY = 0;

    this.bindGridEvents();
    this.bindTouchSwipe();
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

  bindGridEvents() {
    if (!this.gridEl) return;

    this.gridEl.addEventListener('click', (e) => {
      if (this.isInputLocked) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Zone tab buttons
      const tabBtn = e.target.closest('.zone-tab-btn');
      if (tabBtn) {
        const targetZone = Number(tabBtn.dataset.zoneId);
        if (targetZone && targetZone !== this.currentZoneId) {
          this.switchZone(targetZone, true);
        }
        return;
      }

      // Quick Zone Navigation Arrows
      const zoneArrowBtn = e.target.closest('.zone-nav-arrow');
      if (zoneArrowBtn) {
        const nextZone = Number(zoneArrowBtn.dataset.nextZone);
        if (nextZone) {
          this.switchZone(nextZone, true);
        }
        return;
      }

      // Center Play button
      const centerPlayBtn = e.target.closest('#btn-roadmap-center-play, .roadmap-center-play-cta');
      if (centerPlayBtn) {
        const unlockedLevel = this.storage.getUnlockedLevel();
        // If player is in Zone 1 and already unlocked Zone 2, play highest unlocked level in current zone
        let targetLevelId = unlockedLevel;
        if (this.currentZoneId === 1 && unlockedLevel > 10) {
          targetLevelId = 10;
        } else if (this.currentZoneId === 2 && unlockedLevel < 11) {
          targetLevelId = 1;
        }
        const levelObj = LEVELS.find((l) => l.id === targetLevelId) || LEVELS[0];
        this.onSelectLevel?.(levelObj);
        return;
      }

      // Unlocked level tile click
      const nodeEl = e.target.closest('.roadmap-square-node.unlocked');
      if (nodeEl) {
        const levelId = Number(nodeEl.dataset.levelId);
        const levelObj = LEVELS.find((l) => l.id === levelId);
        if (levelObj) {
          this.onSelectLevel?.(levelObj);
        }
        return;
      }

      // Click on locked Zone 2 cloud cover
      const cloudCover = e.target.closest('.zone-cloud-cover');
      if (cloudCover) {
        const lockSeal = cloudCover.querySelector('.cloud-lock-seal');
        if (lockSeal) {
          lockSeal.classList.remove('lock-seal-shake');
          // Force reflow
          void lockSeal.offsetWidth;
          lockSeal.classList.add('lock-seal-shake');
        }
      }
    });

    this.gridEl.addEventListener('keydown', (e) => {
      if (this.isInputLocked) return;
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const nodeEl = e.target.closest('.roadmap-square-node.unlocked');
      if (!nodeEl) return;

      e.preventDefault();
      const levelId = Number(nodeEl.dataset.levelId);
      const levelObj = LEVELS.find((l) => l.id === levelId);
      if (levelObj) {
        this.onSelectLevel?.(levelObj);
      }
    });

    this.gridEl.addEventListener('pointerover', (e) => {
      if (this.isInputLocked) return;
      const nodeEl = e.target.closest('.roadmap-square-node.unlocked');
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

  bindTouchSwipe() {
    if (!this.viewportEl) return;

    this.viewportEl.addEventListener('touchstart', (e) => {
      if (this.isInputLocked || !e.touches || e.touches.length === 0) return;
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    }, { passive: true });

    this.viewportEl.addEventListener('touchend', (e) => {
      if (this.isInputLocked || !e.changedTouches || e.changedTouches.length === 0) return;
      const deltaX = e.changedTouches[0].clientX - this.touchStartX;
      const deltaY = e.changedTouches[0].clientY - this.touchStartY;

      // Check horizontal swipe gesture (> 45px delta and more horizontal than vertical)
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        if (deltaX < 0 && this.currentZoneId === 1) {
          // Swipe left -> Next zone
          this.switchZone(2, true);
        } else if (deltaX > 0 && this.currentZoneId === 2) {
          // Swipe right -> Previous zone
          this.switchZone(1, true);
        }
      }
    }, { passive: true });
  }

  buildZoneSvgTrack(unlockedLevel, startId, endId, zoneId) {
    // 4 cols x 3 rows perimeter circuit track
    const fullPathD = 'M 50 50 L 150 50 L 250 50 L 350 50 L 350 150 L 350 250 L 250 250 L 150 250 L 50 250 L 50 150';
    const totalLength = 900;

    let unlockedSegments = 0;
    if (unlockedLevel >= endId) {
      unlockedSegments = 9;
    } else if (unlockedLevel >= startId) {
      unlockedSegments = Math.max(0, unlockedLevel - startId);
    }

    const activeLength = unlockedSegments * 100;
    const gradId = `roadmap-active-grad-z${zoneId}`;
    const glowId = `roadmap-glow-z${zoneId}`;

    return `
      <svg class="roadmap-svg-track" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${zoneId === 1 ? '#38bdf8' : '#c084fc'}" />
            <stop offset="50%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#f97316" />
          </linearGradient>
          <filter id="${glowId}" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect x="12" y="12" width="376" height="276" rx="20" fill="none" stroke="rgba(56, 189, 248, 0.12)" stroke-width="1" stroke-dasharray="4 6" />

        <path d="${fullPathD}" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="${fullPathD}" fill="none" stroke="rgba(15, 23, 42, 0.85)" stroke-width="2.5" stroke-dasharray="5 5" stroke-linecap="round" />

        <path
          d="${fullPathD}"
          fill="none"
          stroke="url(#${gradId})"
          stroke-width="5.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="${activeLength} ${totalLength}"
          filter="url(#${glowId})"
        />
      </svg>
    `;
  }

  buildSoftCloudCover() {
    return `
      <div id="zone-2-cloud-cover" class="zone-cloud-cover" aria-label="Zone 2 Fog Cover (Locked)">
        <!-- Ethereal drifting soft anime-style cumulus cloud puffs -->
        <div class="cloud-puff-layer">
          <div class="cloud-puff cloud-puff-1"></div>
          <div class="cloud-puff cloud-puff-2"></div>
          <div class="cloud-puff cloud-puff-3"></div>
          <div class="cloud-puff cloud-puff-4"></div>
          <div class="cloud-puff cloud-puff-5"></div>
          <div class="cloud-puff cloud-puff-6"></div>
          <div class="cloud-puff cloud-puff-7"></div>
        </div>

        <div class="cloud-sunburst-flare" aria-hidden="true"></div>

        <!-- Central Frosted Zone Lock Seal -->
        <div class="cloud-lock-seal">
          <div class="cloud-lock-icon-wrap">
            <svg class="cloud-lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="11" width="16" height="10" rx="3" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </div>
          <div class="cloud-seal-meta">
            <span class="cloud-seal-kicker">ZONE 2 • CLOUD SANCTUARY</span>
            <strong class="cloud-seal-title">Celestial Citadel</strong>
            <p class="cloud-seal-desc">Complete Level 10 to dispel the celestial fog and reveal Stages 11–20.</p>
          </div>
        </div>
      </div>
    `;
  }

  buildZoneTabs(unlockedLevel) {
    const isZone2Revealed = this.storage.isZoneRevealed(2);
    const zone1Cleared = unlockedLevel > 10;
    const zone2Unlocked = unlockedLevel >= 11;

    return `
      <nav class="roadmap-zone-tabs" role="tablist" aria-label="Campaign Zones">
        <button
          type="button"
          class="zone-tab-btn ${this.currentZoneId === 1 ? 'active' : ''}"
          id="tab-zone-1"
          data-zone-id="1"
          role="tab"
          aria-selected="${this.currentZoneId === 1}"
          title="Switch to Zone 1: Sky Haven (Levels 1–10)"
        >
          <div class="zone-tab-left">
            <span class="zone-tab-badge z1">ZONE 1</span>
            <span class="zone-tab-name">Sky Haven</span>
          </div>
          <span class="zone-tab-progress">${zone1Cleared ? '10 / 10 Cleared ★' : `Stage ${Math.min(unlockedLevel, 10)} / 10`}</span>
        </button>

        <button
          type="button"
          class="zone-tab-btn ${this.currentZoneId === 2 ? 'active' : ''} ${!isZone2Revealed ? 'locked-tab' : ''}"
          id="tab-zone-2"
          data-zone-id="2"
          role="tab"
          aria-selected="${this.currentZoneId === 2}"
          title="Switch to Zone 2: Celestial Citadel (Levels 11–20)"
        >
          <div class="zone-tab-left">
            <span class="zone-tab-badge z2">ZONE 2</span>
            <span class="zone-tab-name">Celestial Citadel</span>
          </div>
          <span class="zone-tab-progress" id="zone-2-tab-progress">
            ${isZone2Revealed ? (unlockedLevel >= 20 ? '10 / 10 Cleared ★' : `Stage ${unlockedLevel} / 20`) : '☁️ Defeat Lv 10'}
          </span>
        </button>
      </nav>
    `;
  }

  buildZoneNodes(zone, unlockedLevel, avatarUrl) {
    const isZone1 = zone.id === 1;
    const slots = isZone1 ? ZONE_1_SLOTS : ZONE_2_SLOTS;
    const zoneLevels = LEVELS.filter((l) => l.id >= zone.startLevel && l.id <= zone.endLevel);

    let html = '';

    zoneLevels.forEach((level, idx) => {
      const slot = slots[idx] || { row: 1, col: 1, nextArrow: '→', arrowPos: 'right' };
      const isUnlocked = level.id <= unlockedLevel;
      const isCurrentFrontier = level.id === unlockedLevel;
      const starsEarned = this.storage.getStarsForLevel(level.id);

      const starsHtml = [1, 2, 3]
        .map((s) => `<span class="star-glyph ${s <= starsEarned ? 'earned' : ''}">★</span>`)
        .join('');

      const statusClass = isUnlocked
        ? isCurrentFrontier
          ? 'unlocked frontier-node'
          : 'unlocked completed-node'
        : 'locked';

      const isClaimed = this.storage.hasClaimedCoins(level.id);

      html += `
        <article
          class="roadmap-square-node ${statusClass}"
          id="node-level-${level.id}"
          style="grid-row: ${slot.row}; grid-column: ${slot.col}; --node-index: ${idx};"
          data-level-id="${level.id}"
          role="button"
          tabindex="${isUnlocked ? '0' : '-1'}"
          aria-label="Level ${level.id} (${isUnlocked ? 'Unlocked' : 'Locked'})"
        >
          <div class="node-3d-bevel" aria-hidden="true"></div>

          ${
            isCurrentFrontier
              ? `<div class="commander-pin" id="commander-pin-${level.id}" title="Current Stage">
                  <img src="${avatarUrl}" alt="Commander Pin" />
                </div>`
              : ''
          }

          <span class="roadmap-dir-Step dir-${slot.arrowPos}" aria-hidden="true">${slot.nextArrow}</span>

          <!-- Base Layer: Stars on top, Big Level Number in center, Coin Reward at bottom -->
          <div class="node-simple-content ${!isUnlocked ? 'faint-underlay' : ''}">
            <div class="node-stars-bar" title="${starsEarned} / 3 Stars">
              ${starsHtml}
            </div>

            <div class="node-big-number">${level.id}</div>

            <div class="node-coin-footer">
              <span class="coin-reward-badge ${isClaimed ? 'claimed' : ''}" title="${isClaimed ? 'Coins already claimed' : `Reward: +${level.coinReward} Coins`}">
                <img src="${coinLogoUrl}" class="coin-asset-icon" alt="Coins" />
                <span>${isClaimed ? 'Claimed' : `+${level.coinReward}`}</span>
              </span>
            </div>
          </div>

          <!-- Frosted Lock Overlay for Locked Levels -->
          ${
            !isUnlocked
              ? `<div class="node-locked-overlay" aria-hidden="true">
                  <div class="lock-badge-circle">
                    <svg class="lock-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="4" y="11" width="16" height="10" rx="2.5" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                  </div>
                </div>`
              : ''
          }
        </article>
      `;
    });

    return html;
  }

  buildCenterShowcase(zone, unlockedLevel, totalStars) {
    const isZone1 = zone.id === 1;
    const mascotImg = isZone1 ? mascotCharUrl : celestialMascotUrl;
    const brandTitle = isZone1 ? 'DILI-BIRDS' : 'CELESTIAL CITADEL';
    const zoneStarsMax = 30; // 10 levels * 3 stars

    // Stars earned in this specific zone
    const zoneLevels = LEVELS.filter((l) => l.id >= zone.startLevel && l.id <= zone.endLevel);
    const zoneStars = zoneLevels.reduce((acc, l) => acc + (this.storage.getStarsForLevel(l.id) || 0), 0);

    const activeStageInZone = Math.max(
      zone.startLevel,
      Math.min(zone.endLevel, unlockedLevel)
    );

    return `
      <section
        class="roadmap-center-showcase ${!isZone1 ? 'zone-2-showcase' : ''}"
        style="grid-row: 2; grid-column: 2 / span 2;"
        aria-label="${zone.name} Showcase"
      >
        <div class="center-glow-ring" aria-hidden="true"></div>
        <img src="${logoWhiteUrl}" class="center-bg-watermark" alt="" aria-hidden="true" />

        <div class="center-mascot-wrap">
          <img src="${mascotImg}" class="center-mascot-img" alt="${brandTitle} Mascot" />
        </div>

        <div class="center-brand-caption">
          <span class="center-brand-title">${brandTitle}</span>
          <div class="center-trophy-pill">
            <span class="trophy-star">★</span>
            <span>${zoneStars} / ${zoneStarsMax} ZONE STARS</span>
          </div>
        </div>

        <button
          type="button"
          class="roadmap-center-play-cta"
          id="btn-roadmap-center-play"
          title="Play Active Stage ${activeStageInZone}"
          aria-label="Play Active Stage ${activeStageInZone}"
        >
          <span class="play-cta-icon" aria-hidden="true">▶</span>
          <span class="play-cta-label">PLAY STAGE ${activeStageInZone}</span>
        </button>
      </section>
    `;
  }

  render() {
    if (!this.gridEl) return;

    const unlockedLevel = this.storage.getUnlockedLevel();
    const totalStars = this.storage.getTotalStars();
    const avatarUrl = this.storage.getAvatarUrl();
    const isZone2Revealed = this.storage.isZoneRevealed(2);

    let html = `
      <div class="roadmap-top-navigation-shell">
        ${this.buildZoneTabs(unlockedLevel)}
      </div>

      <div class="roadmap-dual-zone-container" id="roadmap-world-canvas" style="--active-zone-index: ${this.currentZoneId - 1};">
        <!-- Zone 1 Board (Levels 1–10) -->
        <div class="roadmap-zone-card ${this.currentZoneId === 1 ? 'is-focused' : ''}" id="zone-card-1">
          <div class="zone-card-header">
            <span class="zone-tag-pill z1">ZONE 1</span>
            <h3 class="zone-card-title">Sky Haven &amp; Emerald Bastions</h3>
            <button type="button" class="zone-nav-arrow next-arrow" data-next-zone="2" title="View Zone 2: Celestial Citadel">
              <span>Zone 2 ➔</span>
            </button>
          </div>

          <div class="roadmap-square-board" id="board-zone-1">
            ${this.buildZoneSvgTrack(unlockedLevel, 1, 10, 1)}
            ${this.buildZoneNodes(ZONES[0], unlockedLevel, avatarUrl)}
            ${this.buildCenterShowcase(ZONES[0], unlockedLevel, totalStars)}
          </div>
        </div>

        <!-- Inter-Zone Skybridge Pathway -->
        <div class="interzone-skybridge-track" aria-hidden="true">
          <div class="skybridge-connector-line ${unlockedLevel >= 11 ? 'unlocked-bridge' : 'locked-bridge'}">
            <span class="bridge-gate-badge">${unlockedLevel >= 11 ? '⚡ GATE OPEN' : '🔒 SKYBRIDGE'}</span>
          </div>
        </div>

        <!-- Zone 2 Board (Levels 11–20) -->
        <div class="roadmap-zone-card ${this.currentZoneId === 2 ? 'is-focused' : ''}" id="zone-card-2">
          <div class="zone-card-header">
            <button type="button" class="zone-nav-arrow prev-arrow" data-next-zone="1" title="View Zone 1: Sky Haven">
              <span>◀ Zone 1</span>
            </button>
            <span class="zone-tag-pill z2">ZONE 2</span>
            <h3 class="zone-card-title">Celestial Citadel &amp; Frost Peaks</h3>
          </div>

          <div class="roadmap-square-board" id="board-zone-2">
            ${this.buildZoneSvgTrack(unlockedLevel, 11, 20, 2)}
            ${this.buildZoneNodes(ZONES[1], unlockedLevel, avatarUrl)}
            ${this.buildCenterShowcase(ZONES[1], unlockedLevel, totalStars)}

            <!-- Soft Cloud/Fog Cover over Zone 2 if not yet dispelled -->
            ${!isZone2Revealed ? this.buildSoftCloudCover() : ''}
          </div>
        </div>
      </div>
    `;

    this.gridEl.innerHTML = html;
    this.updateCameraPan(false);
  }

  switchZone(zoneId, gentleZoom = false) {
    this.currentZoneId = Number(zoneId);
    this.updateCameraPan(gentleZoom);
  }

  updateCameraPan(gentleZoom = false) {
    const worldCanvas = document.getElementById('roadmap-world-canvas');
    if (!worldCanvas) return;

    worldCanvas.style.setProperty('--active-zone-index', this.currentZoneId - 1);

    // Update active tab buttons
    const tab1 = document.getElementById('tab-zone-1');
    const tab2 = document.getElementById('tab-zone-2');
    if (tab1 && tab2) {
      tab1.classList.toggle('active', this.currentZoneId === 1);
      tab1.setAttribute('aria-selected', this.currentZoneId === 1);
      tab2.classList.toggle('active', this.currentZoneId === 2);
      tab2.setAttribute('aria-selected', this.currentZoneId === 2);
    }

    // Update zone card focused state
    const card1 = document.getElementById('zone-card-1');
    const card2 = document.getElementById('zone-card-2');
    card1?.classList.toggle('is-focused', this.currentZoneId === 1);
    card2?.classList.toggle('is-focused', this.currentZoneId === 2);

    if (gentleZoom) {
      worldCanvas.classList.remove('gentle-zoom-pulse');
      void worldCanvas.offsetWidth;
      worldCanvas.classList.add('gentle-zoom-pulse');
      setTimeout(() => {
        worldCanvas.classList.remove('gentle-zoom-pulse');
      }, 700);
    }
  }

  /**
   * Smoothly pans the camera to focus on a given level node with a gentle zoom.
   */
  panToNode(levelId, gentleZoom = true) {
    const targetId = Number(levelId);
    const targetZone = targetId > 10 ? 2 : 1;
    if (targetZone !== this.currentZoneId) {
      this.switchZone(targetZone, gentleZoom);
    } else if (gentleZoom) {
      const worldCanvas = document.getElementById('roadmap-world-canvas');
      if (worldCanvas) {
        worldCanvas.classList.remove('gentle-zoom-pulse');
        void worldCanvas.offsetWidth;
        worldCanvas.classList.add('gentle-zoom-pulse');
      }
    }
  }

  /**
   * Smoothly moves the player marker along the path from previous node to target node.
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
   * Reveals Zone 2 (Levels 11–20) with sweeping sunburst and particle dissipation.
   */
  async animateCloudRemoval() {
    this.lockInput();
    this.switchZone(2, true);

    const cloudCoverEl = document.getElementById('zone-2-cloud-cover');
    if (!cloudCoverEl) {
      this.storage.setZoneRevealed(2, true);
      this.unlockInput();
      return;
    }

    // Play atmospheric rushing wind audio
    this.audio?.playCloudWhoosh?.();

    // Trigger cloud dissipation keyframe animations
    cloudCoverEl.classList.add('cloud-dissipating');

    await new Promise((r) => setTimeout(r, 1200));

    // Save zone reveal in storage so progress is preserved
    this.storage.setZoneRevealed(2, true);

    // Audio chime for level unlock
    this.audio?.playLevelUnlock?.();

    // Re-render roadmap with Zone 2 revealed
    this.render();

    // Highlight Level 11 with unlocked flare pulse
    const level11Node = document.getElementById('node-level-11');
    if (level11Node) {
      level11Node.classList.add('node-unlocked-flare');
      setTimeout(() => level11Node.classList.remove('node-unlocked-flare'), 1000);
    }

    // Smoothly animate marker onto Level 11
    await this.animatePlayerMarker(10, 11);

    this.unlockInput();
  }
}
