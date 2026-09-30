import { ProfileModal } from './profileModal.js';
import { HudController } from './hud.js';
import { DashboardModals, HEROES_DATA } from './dashboardModals.js';
import { LEVELS } from '../levels/levelData.js';
import coinLogoUrl from '../assets/coin-with-logo.png';

/**
 * High-level UI orchestrator connecting the Single Top Nav Bar, Initial Menu, Level Select,
 * Profile Setup Screen, In-Game HUD, and Dashboard Modals.
 */
export class UIManager {
  constructor({
    storage,
    audio,
    levelSelect,
    totalLevelsCount,
    onSelectLevel,
    onRetryLevel,
    onNextLevel,
    onReturnToMenu,
    onBrandChanged,
    onToggleCameraView,
    onPauseGame,
    onResumeGame
  }) {
    this.storage = storage;
    this.audio = audio;
    this.levelSelect = levelSelect;
    this.totalLevelsCount = totalLevelsCount;
    this.onSelectLevel = onSelectLevel;
    this.onReturnToMenu = onReturnToMenu;
    this.onBrandChanged = onBrandChanged;
    this.onPauseGame = onPauseGame;
    this.onResumeGame = onResumeGame;

    // Single unified top bar elements
    this.displayUsernameEl = document.getElementById('display-username');
    this.topAvatarImgEl = document.getElementById('top-avatar-img');
    this.displayLevelEl = document.getElementById('display-player-level');
    this.displayCoinsEl = document.getElementById('display-coins');
    this.heroBrandTagEl = document.getElementById('hero-brand-tag');
    this.menuScreenEl = document.getElementById('menu-screen');

    // Summary bar elements on Roadmap screen
    this.summaryUsernameEl = document.getElementById('summary-username');
    this.summaryAvatarImgEl = document.getElementById('summary-avatar-img');
    this.summaryLevelEl = document.getElementById('summary-level');
    this.summaryCoinsEl = document.getElementById('summary-coins');
    this.summaryCoinsTextEl = document.getElementById('summary-coins-text');
    this.summaryStarsEl = document.getElementById('summary-stars');
    this.summaryStarsValEl = document.getElementById('summary-stars-val');

    // Dashboard Hero Module elements
    this.heroStageBadgeEl = document.getElementById('hero-stage-badge');
    this.heroMissionNameEl = document.getElementById('hero-mission-name');
    this.heroMissionDescEl = document.getElementById('hero-mission-desc');
    this.heroDifficultyPillEl = document.getElementById('hero-difficulty-pill');
    this.heroTargetChipEl = document.getElementById('hero-target-chip');
    this.heroBirdChipEl = document.getElementById('hero-bird-chip');
    this.heroRewardChipEl = document.getElementById('hero-reward-chip');
    this.heroStartSubEl = document.getElementById('hero-start-sub');

    // Tracks the current playing level ID so top bar displays current level instead of max level
    this.currentPlayingLevelId = null;

    this.profileModal = new ProfileModal(
      this.storage,
      ({ username, brandName }) => {
        this.refreshHeaderAndMenu();
        this.onBrandChanged?.(brandName);
        // Launch active unlocked stage immediately on "Save Profile & Launch"
        const activeLevel =
          LEVELS.find((l) => l.id === this.storage.getUnlockedLevel()) || LEVELS[0];
        this.onSelectLevel?.(activeLevel);
      },
      () => {
        this.refreshHeaderAndMenu();
      }
    );

    this.dashboardModals = new DashboardModals({
      storage: this.storage,
      audio: this.audio,
      onRefreshHeader: () => this.refreshHeaderAndMenu()
    });

    this.hud = new HudController({
      storage: this.storage,
      audio: this.audio,
      totalLevelsCount: this.totalLevelsCount,
      onRetryLevel,
      onNextLevel,
      onReturnToMenu: () => this.showMainMenu(),
      onOpenProfile: () => this.profileModal.open('username'),
      onPauseGame: () => this.onPauseGame?.(),
      onResumeGame: () => this.onResumeGame?.()
    });

    this.bindTopBarEvents();
    this.bindHeroModuleEvents();
    this.refreshHeaderAndMenu();
  }

  bindHeroModuleEvents() {
    // Primary Central "START GAME" Launch Button
    const startGameBtn = document.getElementById('btn-dashboard-start-game');
    startGameBtn?.addEventListener('click', () => {
      const unlockedLevel = this.storage.getUnlockedLevel();
      const activeLevel = LEVELS.find((l) => l.id === unlockedLevel) || LEVELS[0];
      this.onSelectLevel?.(activeLevel);
    });

    // Roadmap View Toggle Button
    const toggleRoadmapBtn = document.getElementById('btn-toggle-roadmap');
    toggleRoadmapBtn?.addEventListener('click', () => {
      const roadmapSection = document.querySelector('.level-select-section');
      roadmapSection?.scrollIntoView({ behavior: 'smooth' });
    });

    // View All Heroes Button
    document.getElementById('btn-view-all-heroes')?.addEventListener('click', () => {
      this.dashboardModals?.openCharacters();
    });
  }

  bindTopBarEvents() {
    const badgeBtn = document.getElementById('player-badge-btn');
    badgeBtn?.addEventListener('click', () => this.hud.openGameMenu());
    badgeBtn?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.hud.openGameMenu();
      }
    });

    const summaryProfileBtn = document.getElementById('summary-profile-btn');
    summaryProfileBtn?.addEventListener('click', () => this.profileModal.open('username'));
    summaryProfileBtn?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.profileModal.open('username');
      }
    });
  }

  /**
   * Updates only the Top Bar, Summary Bar, and Dashboard Hero Module text/avatar values without destroying
   * and re-rendering the #level-grid DOM nodes.
   */
  refreshHeaderStats() {
    const username = this.storage.getUsername();
    const avatarUrl = this.storage.getAvatarUrl();
    const unlockedLevel = this.storage.getUnlockedLevel();
    const coins = this.storage.getCoins();
    const totalStars = this.storage.getTotalStars();
    const brandName = this.storage.getBrandName();

    if (this.displayUsernameEl) this.displayUsernameEl.textContent = username;
    if (this.topAvatarImgEl) this.topAvatarImgEl.src = avatarUrl;
    // CRITICAL: Display the currently played stage when in game, or progression level in menu
    const activeLevelNumber = this.currentPlayingLevelId ?? unlockedLevel;
    if (this.displayLevelEl) this.displayLevelEl.textContent = `LVL ${activeLevelNumber}`;

    const navLevelPill = document.getElementById('nav-level-pill');
    if (navLevelPill) {
      navLevelPill.title = this.currentPlayingLevelId
        ? `Current Stage: Level ${this.currentPlayingLevelId}`
        : `Current Progression: Level ${unlockedLevel}`;
    }

    if (this.displayCoinsEl) this.displayCoinsEl.textContent = coins.toLocaleString();
    if (this.heroBrandTagEl) this.heroBrandTagEl.textContent = `${brandName} • 3D WORLD`;

    if (this.summaryUsernameEl) this.summaryUsernameEl.textContent = username;
    if (this.summaryAvatarImgEl) this.summaryAvatarImgEl.src = avatarUrl;
    if (this.summaryLevelEl) this.summaryLevelEl.textContent = `${unlockedLevel} / ${this.totalLevelsCount}`;
    if (this.summaryCoinsTextEl) {
      this.summaryCoinsTextEl.textContent = `${coins.toLocaleString()} Coins`;
    } else if (this.summaryCoinsEl) {
      this.summaryCoinsEl.innerHTML = `<img class="coin-icon-img" src="${coinLogoUrl}" alt="Coin" /> <span id="summary-coins-text">${coins.toLocaleString()} Coins</span>`;
    }
    if (this.summaryStarsValEl) {
      this.summaryStarsValEl.textContent = `${totalStars} / ${this.totalLevelsCount * 3}`;
    } else if (this.summaryStarsEl) {
      this.summaryStarsEl.textContent = `${totalStars} / ${this.totalLevelsCount * 3} ★`;
    }

    // Dashboard Hero Launch Module Data
    const activeLevel = LEVELS.find((l) => l.id === unlockedLevel) || LEVELS[0];
    if (this.heroStageBadgeEl) this.heroStageBadgeEl.textContent = `ACTIVE CAMPAIGN • STAGE ${activeLevel.id}`;
    if (this.heroMissionNameEl) this.heroMissionNameEl.textContent = activeLevel.name;
    if (this.heroMissionDescEl) this.heroMissionDescEl.textContent = activeLevel.description;
    if (this.heroDifficultyPillEl) {
      this.heroDifficultyPillEl.textContent = activeLevel.difficulty.toUpperCase();
      this.heroDifficultyPillEl.className = `difficulty-chip ${activeLevel.difficulty.toLowerCase()}`;
    }
    if (this.heroTargetChipEl) this.heroTargetChipEl.textContent = `${activeLevel.targets.length} Targets`;
    if (this.heroBirdChipEl) this.heroBirdChipEl.textContent = `${activeLevel.birds.length} Slingshot Birds`;
    if (this.heroRewardChipEl) this.heroRewardChipEl.textContent = `+${activeLevel.coinReward} Coins`;
    if (this.heroStartSubEl) this.heroStartSubEl.textContent = `Launch Stage ${activeLevel.id}`;

    // Render Milestone Character Stepper
    this.renderMilestoneSteps(unlockedLevel);
  }

  renderMilestoneSteps(unlockedLevel) {
    const nodesRow = document.getElementById('milestones-nodes-row');
    const fillBar = document.getElementById('milestones-progress-fill');
    const hintEl = document.getElementById('hero-milestone-hint');
    if (!nodesRow) return;

    const milestones = HEROES_DATA;
    let nextLocked = milestones.find((m) => m.milestoneLevel > unlockedLevel);

    if (hintEl) {
      hintEl.textContent = nextLocked
        ? `Next Unlock: ${nextLocked.name} at Level ${nextLocked.milestoneLevel}`
        : 'All 4 Heroes Unlocked!';
    }

    // Progress percentage
    const maxMilestone = 7;
    const pct = Math.min(100, Math.max(16, Math.round(((unlockedLevel - 1) / (maxMilestone - 1)) * 100)));
    if (fillBar) fillBar.style.width = `${pct}%`;

    let html = '';
    milestones.forEach((hero) => {
      const isUnlocked = unlockedLevel >= hero.milestoneLevel;
      html += `
        <div class="milestone-step-node ${isUnlocked ? 'unlocked' : 'locked'}" data-hero-id="${hero.id}" role="button" tabindex="0" title="${hero.name} (Milestone: Level ${hero.milestoneLevel})">
          <div class="node-avatar-frame" style="--accent-hero: ${hero.themeColor};">
            <img class="node-hero-img ${!isUnlocked ? 'silhouetted' : ''}" src="${hero.avatarUrl}" alt="${hero.name}" />
            <span class="node-status-badge ${isUnlocked ? 'unlocked' : 'locked'}">
              ${isUnlocked
                ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
                : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>`
              }
            </span>
          </div>
          <span class="node-step-lvl">LVL ${hero.milestoneLevel}</span>
          <span class="node-hero-name">${hero.name.split(' ')[0]}</span>
        </div>
      `;
    });

    nodesRow.innerHTML = html;

    nodesRow.querySelectorAll('.milestone-step-node').forEach((node) => {
      node.addEventListener('click', () => {
        this.dashboardModals?.openCharacters();
      });
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.dashboardModals?.openCharacters();
        }
      });
    });
  }

  refreshHeaderAndMenu() {
    this.refreshHeaderStats();
    this.levelSelect.render();
  }

  showMainMenu() {
    this.currentPlayingLevelId = null;
    this.audio?.enterMenu();
    this.hud.closeResultModal();
    this.hud.hide();
    this.menuScreenEl?.classList.remove('hidden');
    document.getElementById('nav-dashboard-actions')?.classList.remove('hidden');
    document.getElementById('gameplay-hud-cluster')?.classList.add('hidden');
    this.refreshHeaderAndMenu();
    this.onReturnToMenu?.();
  }

  showGameView(levelConfig) {
    this.audio?.enterGameplay();
    this.currentPlayingLevelId = levelConfig ? Number(levelConfig.id) : null;
    this.menuScreenEl?.classList.add('hidden');
    document.getElementById('nav-dashboard-actions')?.classList.add('hidden');
    document.getElementById('gameplay-hud-cluster')?.classList.remove('hidden');
    this.hud.updateLevelHeader(levelConfig);
    this.refreshHeaderStats();
    this.hud.show();
  }
}
