import { LEVELS } from './levelData.js';
import coinLogoUrl from '../assets/coin-with-logo.png';
import mascotCharUrl from '../assets/character.png';
import logoWhiteUrl from '../assets/logo-white.png';

/**
 * Clockwise 3x3 Square Perimeter coordinates for the 8 campaign stages.
 * Center cell (row 2, col 2) is the Dili-Birds Mascot & Campaign Trophy Core.
 */
const SQUARE_ROADMAP_SLOTS = [
  { id: 1, row: 1, col: 1, nextArrow: '→', arrowPos: 'right' },
  { id: 2, row: 1, col: 2, nextArrow: '→', arrowPos: 'right' },
  { id: 3, row: 1, col: 3, nextArrow: '↓', arrowPos: 'bottom' },
  { id: 4, row: 2, col: 3, nextArrow: '↓', arrowPos: 'bottom' },
  { id: 5, row: 3, col: 3, nextArrow: '←', arrowPos: 'left' },
  { id: 6, row: 3, col: 2, nextArrow: '←', arrowPos: 'left' },
  { id: 7, row: 3, col: 1, nextArrow: '↑', arrowPos: 'top' },
  { id: 8, row: 2, col: 1, nextArrow: '★', arrowPos: 'end' }
];

/**
 * Renders the simplified, bold Square-Shaped Roadmap Interface.
 * - Unlocked tiles: Big level number (1, 2, 3...), earned stars, and coin reward.
 * - Locked tiles: Faint level number underneath with a frosted lock overlay on top.
 * - Center cell: Dili-Birds Mascot & Campaign Trophy Core.
 */
export class LevelSelect {
  constructor(storage, onSelectLevel, onPreviewLevel) {
    this.storage = storage;
    this.onSelectLevel = onSelectLevel;
    this.onPreviewLevel = onPreviewLevel;

    this.gridEl = document.getElementById('level-grid');
    this.viewportEl = document.getElementById('roadmap-viewport');
    this.focusedLevelId = this.storage.getUnlockedLevel();
    this.lastPreviewedLevelId = null;

    this.bindGridEvents();
  }

  /**
   * Uses event delegation on #level-grid so clicking anywhere on an unlocked level tile
   * reliably starts the level immediately without being interrupted by hover previews.
   */
  bindGridEvents() {
    if (!this.gridEl) return;

    this.gridEl.addEventListener('click', (e) => {
      const nodeEl = e.target.closest('.roadmap-square-node.unlocked');
      if (!nodeEl) return;

      const levelId = Number(nodeEl.dataset.levelId);
      const levelObj = LEVELS.find((l) => l.id === levelId);
      if (levelObj) {
        this.onSelectLevel?.(levelObj);
      }
    });

    this.gridEl.addEventListener('keydown', (e) => {
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

  buildSvgRoadmapTrack(unlockedLevel) {
    const fullPathD = 'M 50 50 L 150 50 L 250 50 L 250 150 L 250 250 L 150 250 L 50 250 L 50 150';
    const totalLength = 700;
    const unlockedSegments = Math.max(0, Math.min(7, unlockedLevel - 1));
    const activeLength = unlockedSegments * 100;

    return `
      <svg class="roadmap-svg-track" viewBox="0 0 300 300" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="roadmap-active-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#f97316" />
          </linearGradient>
          <filter id="roadmap-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect x="12" y="12" width="276" height="276" rx="18" fill="none" stroke="rgba(56, 189, 248, 0.12)" stroke-width="1" stroke-dasharray="4 6" />

        <path d="${fullPathD}" fill="none" stroke="rgba(148, 163, 184, 0.22)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="${fullPathD}" fill="none" stroke="rgba(15, 23, 42, 0.85)" stroke-width="2.5" stroke-dasharray="5 5" stroke-linecap="round" />

        <path
          d="${fullPathD}"
          fill="none"
          stroke="url(#roadmap-active-grad)"
          stroke-width="5.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="${activeLength} ${totalLength}"
          filter="url(#roadmap-glow)"
        />
      </svg>
    `;
  }

  render() {
    if (!this.gridEl) return;

    const unlockedLevel = this.storage.getUnlockedLevel();
    const totalStars = this.storage.getTotalStars();
    const maxStars = LEVELS.length * 3;
    const avatarUrl = this.storage.getAvatarUrl();

    let html = this.buildSvgRoadmapTrack(unlockedLevel);

    // Render all 8 Square Perimeter Stage Nodes with clean, bold numbers
    LEVELS.forEach((level, idx) => {
      const slot = SQUARE_ROADMAP_SLOTS[idx] || { row: 1, col: 1, nextArrow: '→', arrowPos: 'right' };
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

      html += `
        <article
          class="roadmap-square-node ${statusClass}"
          style="grid-row: ${slot.row}; grid-column: ${slot.col}; --node-index: ${idx};"
          data-level-id="${level.id}"
          role="button"
          tabindex="${isUnlocked ? '0' : '-1'}"
          aria-label="Level ${level.id} (${isUnlocked ? 'Unlocked' : 'Locked'})"
        >
          <div class="node-3d-bevel" aria-hidden="true"></div>

          ${
            isCurrentFrontier
              ? `<div class="commander-pin" title="Current Stage">
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
              <span class="coin-reward-badge">
                <img src="${coinLogoUrl}" class="coin-asset-icon" alt="Coins" />
                <span>+${level.coinReward}</span>
              </span>
            </div>
          </div>

          <!-- Frosted Lock Overlay for Locked Levels (shows big level number faintly underneath) -->
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

    // Center Cell (row 2, col 2): Dili-Birds Mascot & Trophy Emblem Showcase
    html += `
      <section
        class="roadmap-center-showcase"
        style="grid-row: 2; grid-column: 2;"
        aria-label="Dili-Birds Campaign Centerpiece"
      >
        <div class="center-glow-ring" aria-hidden="true"></div>
        <img src="${logoWhiteUrl}" class="center-bg-watermark" alt="" aria-hidden="true" />

        <div class="center-mascot-wrap">
          <img src="${mascotCharUrl}" class="center-mascot-img" alt="Dili-Birds Mascot" />
        </div>

        <div class="center-brand-caption">
          <span class="center-brand-title">DILI-BIRDS</span>
          <div class="center-trophy-pill">
            <span class="trophy-star">★</span>
            <span>${totalStars} / ${maxStars} STARS</span>
          </div>
        </div>
      </section>
    `;

    this.gridEl.innerHTML = html;
  }
}
