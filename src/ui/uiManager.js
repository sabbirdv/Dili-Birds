import { ProfileModal } from './profileModal.js';
import { HudController } from './hud.js';
import { DashboardModals, HEROES_DATA } from './dashboardModals.js';
import { LEVELS } from '../levels/levelData.js';
import { isFullscreen, toggleFullscreen } from './fullscreenHelper.js';
import coinLogoUrl from '../assets/coin-with-logo.png';
import { leaderboardService } from '../services/leaderboardService.js';

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
    onResumeGame,
    onSetDashboard3DMode,
    onActivateAbility,
    onResetAllData
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
    this.onSetDashboard3DMode = onSetDashboard3DMode;
    this.onResetAllData = onResetAllData;

    // Dedicated Full-Screen Pages
    this.dashboardScreenEl = document.getElementById('dashboard-screen');
    this.roadmapScreenEl = document.getElementById('roadmap-screen');
    this.topBarEl = document.getElementById('top-bar');
    this.gameplayHudClusterEl = document.getElementById('gameplay-hud-cluster');

    // Single unified top bar elements
    this.displayUsernameEl = document.getElementById('display-username');
    this.topAvatarImgEl = document.getElementById('top-avatar-img');
    this.displayLevelEl = document.getElementById('display-player-level');
    this.displayCoinsEl = document.getElementById('display-coins');
    this.heroBrandTagEl = document.getElementById('hero-brand-tag');
    this.displayPlayerRankEl = document.getElementById('display-player-rank');
    this.navRankPillEl = document.getElementById('nav-rank-pill');

    // Summary bar elements on Roadmap screen
    this.summaryUsernameEl = document.getElementById('summary-username');
    this.summaryAvatarImgEl = document.getElementById('summary-avatar-img');
    this.summaryLevelEl = document.getElementById('summary-level');
    this.summaryCoinsEl = document.getElementById('summary-coins');
    this.summaryCoinsTextEl = document.getElementById('summary-coins-text');
    this.summaryStarsEl = document.getElementById('summary-stars');
    this.summaryStarsValEl = document.getElementById('summary-stars-val');

    // Tracks the current playing level ID so top bar displays current level instead of max level
    this.currentPlayingLevelId = null;


    this.profileModal = new ProfileModal(
      this.storage,
      async ({ username, avatarUrl, previousUsername, isFirstProfileSetup }) => {
        this.refreshHeaderAndMenu();

        if (isFirstProfileSetup) {
          // Data Insertion on Username Entry:
          // Immediately insert fresh profile (with 0 coins/stars) into the Supabase Dili-Birds-Data table
          const regRes = await leaderboardService.registerNewPlayerProfile({ username });
          if (regRes.success && regRes.rowId) {
            this.storage.setServerRowId(regRes.rowId);
          }
        } else {
          // Username Change Logic:
          // Update existing record in Supabase table (using unique ID/reference) instead of creating a new row.
          // Their rank, coins, and stars remain completely intact.
          const updRes = await leaderboardService.updateUsername({
            serverRowId: this.storage.getServerRowId(),
            newUsername: username,
            oldUsername: previousUsername
          });
          if (updRes.success && updRes.rowId && !this.storage.getServerRowId()) {
            this.storage.setServerRowId(updRes.rowId);
          }
        }
      },
      () => {
        this.refreshHeaderAndMenu();
      },
      this.audio
    );

    this.hud = new HudController({
      storage: this.storage,
      audio: this.audio,
      totalLevelsCount: this.totalLevelsCount,
      onRetryLevel,
      onNextLevel,
      onReturnToRoadmap: () => this.showRoadmapView(),
      onReturnToDashboard: () => this.showDashboardView(),
      onReturnToMenu: () => this.showDashboardView(),
      onOpenProfile: () => this.profileModal.open('username'),
      onPauseGame: () => this.onPauseGame?.(),
      onResumeGame: () => this.onResumeGame?.(),
      onActivateAbility: () => onActivateAbility?.(),
      onResetAllData: () => this.handleResetAllData()
    });

    this.dashboardModals = new DashboardModals({
      storage: this.storage,
      audio: this.audio,
      onRefreshHeader: () => this.refreshHeaderAndMenu(),
      onInspectHero: (hero) => this.hud?.openHeroSurprise(hero)
    });

    this.bindTopBarEvents();
    this.bindHeroModuleEvents();
    this.showDashboardView();

    // Once local data is reset to zero, prompt the user to enter a username
    if (!this.storage.isProfileConfigured()) {
      requestAnimationFrame(() => {
        this.profileModal.open();
      });
    }

    // Background sync of global leaderboard rank
    this.syncLeaderboardRank();
  }

  bindHeroModuleEvents() {
    // Primary Central "START GAME" Launch Button -> Navigates to Level Select Roadmap
    const startGameBtn = document.getElementById('btn-dashboard-start-game');
    startGameBtn?.addEventListener('click', () => {
      this.audio?.playMenuOpen?.();
      this.showRoadmapView();
    });

    // Return to Dashboard from Roadmap screen
    const roadmapBackBtn = document.getElementById('btn-roadmap-back');
    roadmapBackBtn?.addEventListener('click', () => {
      this.audio?.playMenuBack?.();
      this.showDashboardView();
    });
  }

  bindTopBarEvents() {
    const badgeBtn = document.getElementById('player-badge-btn');
    badgeBtn?.addEventListener('click', () => {
      this.audio?.playMenuOpen?.();
      this.profileModal.open('username');
    });
    badgeBtn?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.audio?.playMenuOpen?.();
        this.profileModal.open('username');
      }
    });

    const summaryProfileBtn = document.getElementById('summary-profile-btn');
    summaryProfileBtn?.addEventListener('click', () => {
      this.audio?.playMenuOpen?.();
      this.profileModal.open('username');
    });
    summaryProfileBtn?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.audio?.playMenuOpen?.();
        this.profileModal.open('username');
      }
    });

    // Top Nav Fullscreen Button
    const navFullscreenBtn = document.getElementById('btn-nav-fullscreen');
    navFullscreenBtn?.addEventListener('click', async () => {
      this.audio?.playUiClick?.();
      await toggleFullscreen();
      this.updateNavFullscreenIcon();
    });

    // Top Nav Leaderboard Rank Pill -> Opens Leaderboard Modal
    this.navRankPillEl?.addEventListener('click', () => {
      this.audio?.playMenuOpen?.();
      this.dashboardModals?.openLeaderboard();
    });
    this.navRankPillEl?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.audio?.playMenuOpen?.();
        this.dashboardModals?.openLeaderboard();
      }
    });

    document.addEventListener('fullscreenchange', () => {
      this.updateNavFullscreenIcon();
    });

    this.updateNavFullscreenIcon();
  }

  updateNavFullscreenIcon() {
    const iconEl = document.getElementById('nav-fullscreen-icon');
    const btnEl = document.getElementById('btn-nav-fullscreen');
    if (!iconEl) return;
    const full = isFullscreen();
    if (full) {
      iconEl.innerHTML = `<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>`;
      btnEl?.setAttribute('title', 'Exit Fullscreen');
    } else {
      iconEl.innerHTML = `<path d="M8 3H5a2.5 2.5 0 0 0-2.5 2.5v3m18.5 0v-3A2.5 2.5 0 0 0 18.5 3h-3m0 18.5h3a2.5 2.5 0 0 0 2.5-2.5v-3M2.5 15.5v3A2.5 2.5 0 0 0 5 21h3"/>`;
      btnEl?.setAttribute('title', 'Enter Fullscreen');
    }
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
    const currentRank = Number(this.storage.getLeaderboardRank()) || 1;

    if (this.displayUsernameEl) this.displayUsernameEl.textContent = username;
    if (this.topAvatarImgEl) this.topAvatarImgEl.src = avatarUrl;
    // CRITICAL: Display the currently played stage when in game, or progression level in menu
    const activeLevelNumber = this.currentPlayingLevelId ?? unlockedLevel;
    if (this.displayLevelEl) this.displayLevelEl.textContent = `LVL ${activeLevelNumber}`;
    if (this.displayPlayerRankEl) this.displayPlayerRankEl.textContent = currentRank === 1 ? '👑 #1' : `#${currentRank}`;

    if (this.navRankPillEl) {
      this.navRankPillEl.classList.remove('rank-top-1', 'rank-top-2', 'rank-top-3', 'rank-normal');
      if (currentRank === 1) {
        this.navRankPillEl.classList.add('rank-top-1');
        this.navRankPillEl.title = 'Rank #1 Worldwide Champion! (Click to View Leaderboard)';
      } else if (currentRank === 2) {
        this.navRankPillEl.classList.add('rank-top-2');
        this.navRankPillEl.title = 'Rank #2 Worldwide Standing! (Click to View Leaderboard)';
      } else if (currentRank === 3) {
        this.navRankPillEl.classList.add('rank-top-3');
        this.navRankPillEl.title = 'Rank #3 Worldwide Standing! (Click to View Leaderboard)';
      } else {
        this.navRankPillEl.classList.add('rank-normal');
        this.navRankPillEl.title = `Global Standing: Rank #${currentRank} (Click to View Leaderboard)`;
      }
    }

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
    const unlockedLevelsCount = Math.min(Math.max(1, Number(unlockedLevel) || 1), this.totalLevelsCount);
    const maxAchievableStars = unlockedLevelsCount * 3;
    const starsValEl = document.getElementById('summary-stars-val') || this.summaryStarsValEl;
    if (starsValEl) {
      starsValEl.textContent = `${totalStars} / ${maxAchievableStars}`;
    } else if (this.summaryStarsEl) {
      this.summaryStarsEl.textContent = `${totalStars} / ${maxAchievableStars} ★`;
    }
  }

  /**
   * Background rank synchronizer with Supabase live records
   */
  async syncLeaderboardRank() {
    try {
      const res = await leaderboardService.fetchLiveLeaderboard();
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        const rankInfo = leaderboardService.calculateCurrentPlayerRankFromRecords(
          res.data,
          this.storage.getServerRowId(),
          this.storage.getUsername(),
          this.storage.getTotalStars(),
          this.storage.getCoins()
        );
        if (rankInfo?.rank) {
          this.storage.setLeaderboardRank(rankInfo.rank);
          this.refreshHeaderStats();
        }
      }
    } catch {
      // Background rank sync is non-blocking
    }
  }

  refreshHeaderAndMenu() {
    this.refreshHeaderStats();
    this.levelSelect?.render();
  }

  showDashboardView() {
    this.currentPlayingLevelId = null;
    this.audio?.enterMenu();
    this.hud?.closeGameMenu();
    this.hud?.closeResultModal();
    this.hud?.hide();

    this.dashboardScreenEl?.classList.remove('hidden');
    this.roadmapScreenEl?.classList.add('hidden');
    this.topBarEl?.classList.remove('hidden');
    this.gameplayHudClusterEl?.classList.add('hidden');

    this.onSetDashboard3DMode?.(true);
    this.refreshHeaderStats();
    this.onReturnToMenu?.();
  }

  showRoadmapView() {
    this.currentPlayingLevelId = null;
    this.audio?.enterMenu();
    this.hud?.closeGameMenu();
    this.hud?.closeResultModal();
    this.hud?.hide();

    this.dashboardScreenEl?.classList.add('hidden');
    this.roadmapScreenEl?.classList.remove('hidden');
    this.topBarEl?.classList.add('hidden');

    this.onSetDashboard3DMode?.(true);
    this.levelSelect?.render();
    this.refreshHeaderStats();

    if (this.levelSelect?.pendingZoneUnlock) {
      const z = this.levelSelect.pendingZoneUnlock;
      this.levelSelect.pendingZoneUnlock = null;
      setTimeout(() => {
        this.levelSelect.animateCloudRemoval(z);
      }, 400);
    } else if (this.levelSelect?.pendingLevelUnlock) {
      const nextId = this.levelSelect.pendingLevelUnlock;
      this.levelSelect.pendingLevelUnlock = null;
      setTimeout(() => {
        this.levelSelect.panToNode(nextId, true);
        this.levelSelect.animatePlayerMarker(nextId - 1, nextId);
      }, 400);
    }
  }

  showMainMenu() {
    this.showDashboardView();
  }

  showGameView(levelConfig) {
    this.audio?.enterGameplay();
    this.currentPlayingLevelId = levelConfig ? Number(levelConfig.id) : null;

    this.dashboardScreenEl?.classList.add('hidden');
    this.roadmapScreenEl?.classList.add('hidden');
    this.topBarEl?.classList.remove('hidden');
    this.gameplayHudClusterEl?.classList.remove('hidden');

    this.onSetDashboard3DMode?.(false);
    this.hud?.updateLevelHeader(levelConfig);
    this.refreshHeaderStats();
    this.hud?.show();
  }

  handleResetAllData() {
    this.storage.resetAllData();
    this.currentPlayingLevelId = null;

    if (this.levelSelect) {
      this.levelSelect.focusedLevelId = 1;
      this.levelSelect.activeLevelId = 1;
      this.levelSelect.lastPreviewedLevelId = 1;
      this.levelSelect.pendingLevelUnlock = null;
      this.levelSelect.pendingZoneUnlock = null;
      this.levelSelect.render();
    }

    if (typeof this.onResetAllData === 'function') {
      this.onResetAllData();
    }

    this.showDashboardView();
    this.refreshHeaderAndMenu();

    // Re-prompt fresh user to create their Commander profile callsign
    requestAnimationFrame(() => {
      this.profileModal?.open();
    });
  }
}

