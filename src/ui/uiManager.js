import { ProfileModal } from './profileModal.js';
import { HudController } from './hud.js';
import { LEVELS } from '../levels/levelData.js';
import coinLogoUrl from '../assets/coin-with-logo.png';

/**
 * High-level UI orchestrator connecting the Single Top Nav Bar, Initial Menu, Level Select,
 * Profile Setup Screen, and In-Game HUD.
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

    this.hud = new HudController({
      storage: this.storage,
      totalLevelsCount: this.totalLevelsCount,
      onRetryLevel,
      onNextLevel,
      onReturnToMenu: () => this.showMainMenu(),
      onOpenProfile: () => this.profileModal.open('username'),
      onPauseGame: () => this.onPauseGame?.(),
      onResumeGame: () => this.onResumeGame?.()
    });

    this.bindTopBarEvents();
    this.refreshHeaderAndMenu();
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
   * Updates only the Top Bar and Summary Bar text/avatar values without destroying
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
    if (this.displayLevelEl) this.displayLevelEl.textContent = `LVL ${unlockedLevel}`;
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
    if (this.summaryStarsEl) this.summaryStarsEl.textContent = `${totalStars} / ${this.totalLevelsCount * 3} ★`;
  }

  refreshHeaderAndMenu() {
    this.refreshHeaderStats();
    this.levelSelect.render();
  }

  showMainMenu() {
    this.hud.closeResultModal();
    this.hud.hide();
    this.menuScreenEl?.classList.remove('hidden');
    this.refreshHeaderAndMenu();
    this.onReturnToMenu?.();
  }

  showGameView(levelConfig) {
    this.menuScreenEl?.classList.add('hidden');
    this.hud.updateLevelHeader(levelConfig);
    this.hud.show();
  }
}
