import { ProfileModal } from './profileModal.js';
import { HudController } from './hud.js';
import { LEVELS } from '../levels/levelData.js';

/**
 * High-level UI orchestrator connecting the Top Bar, Initial Menu, Level Select,
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
    onToggleCameraView
  }) {
    this.storage = storage;
    this.audio = audio;
    this.levelSelect = levelSelect;
    this.totalLevelsCount = totalLevelsCount;
    this.onSelectLevel = onSelectLevel;
    this.onReturnToMenu = onReturnToMenu;
    this.onBrandChanged = onBrandChanged;

    // Top bar elements
    this.displayUsernameEl = document.getElementById('display-username');
    this.topAvatarImgEl = document.getElementById('top-avatar-img');
    this.displayLevelEl = document.getElementById('display-player-level');
    this.displayCoinsEl = document.getElementById('display-coins');
    this.heroBrandTagEl = document.getElementById('hero-brand-tag');
    this.audioIconEl = document.getElementById('audio-icon');
    this.backMenuBtn = document.getElementById('btn-back-menu');
    this.menuScreenEl = document.getElementById('menu-screen');

    // Summary bar elements
    this.summaryUsernameEl = document.getElementById('summary-username');
    this.summaryAvatarImgEl = document.getElementById('summary-avatar-img');
    this.summaryLevelEl = document.getElementById('summary-level');
    this.summaryCoinsEl = document.getElementById('summary-coins');
    this.summaryStarsEl = document.getElementById('summary-stars');

    this.profileModal = new ProfileModal(
      this.storage,
      ({ username, brandName }) => {
        this.refreshHeaderAndMenu();
        this.onBrandChanged?.(brandName);
        this.hud?.spawnFloatingToast(`Welcome, Commander ${username}!`);
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
      onRetryLevel,
      onNextLevel,
      onReturnToMenu: () => this.showMainMenu(),
      onToggleCameraView
    });

    this.bindTopBarEvents();
    this.refreshHeaderAndMenu();
  }

  bindTopBarEvents() {
    const badgeBtn = document.getElementById('player-badge-btn');
    badgeBtn?.addEventListener('click', () => this.profileModal.open('username'));
    badgeBtn?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.profileModal.open('username');
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

    document.getElementById('btn-brand-theme')?.addEventListener('click', () => {
      this.profileModal.open('username');
    });

    document.getElementById('btn-audio-toggle')?.addEventListener('click', () => {
      const enabled = this.storage.toggleSound();
      if (this.audioIconEl) {
        this.audioIconEl.textContent = enabled ? '🔊' : '🔇';
      }
    });

    this.backMenuBtn?.addEventListener('click', () => {
      this.showMainMenu();
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
    if (this.audioIconEl) {
      this.audioIconEl.textContent = this.storage.isSoundEnabled() ? '🔊' : '🔇';
    }

    if (this.summaryUsernameEl) this.summaryUsernameEl.textContent = username;
    if (this.summaryAvatarImgEl) this.summaryAvatarImgEl.src = avatarUrl;
    if (this.summaryLevelEl) this.summaryLevelEl.textContent = `${unlockedLevel} / ${this.totalLevelsCount}`;
    if (this.summaryCoinsEl) this.summaryCoinsEl.textContent = `${coins.toLocaleString()} Coins`;
    if (this.summaryStarsEl) this.summaryStarsEl.textContent = `${totalStars} / ${this.totalLevelsCount * 3} ★`;
  }

  refreshHeaderAndMenu() {
    this.refreshHeaderStats();
    this.levelSelect.render();
  }

  showMainMenu() {
    this.hud.closeResultModal();
    this.hud.hide();
    this.backMenuBtn?.classList.add('hidden');
    this.menuScreenEl?.classList.remove('hidden');
    this.refreshHeaderAndMenu();
    this.onReturnToMenu?.();
  }

  showGameView(levelConfig) {
    this.menuScreenEl?.classList.add('hidden');
    this.backMenuBtn?.classList.remove('hidden');
    this.hud.updateLevelHeader(levelConfig);
    this.hud.show();
  }
}
