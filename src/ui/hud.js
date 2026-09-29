import { isFullscreen, toggleFullscreen } from './fullscreenHelper.js';

/**
 * Manages the In-Game Unified HUD, aim telemetry, structured game menu dialog (Pause),
 * and the end-of-level Victory / Defeat modal.
 */
export class HudController {
  constructor({
    storage,
    totalLevelsCount = 8,
    onRetryLevel,
    onNextLevel,
    onReturnToMenu,
    onOpenProfile,
    onPauseGame,
    onResumeGame
  }) {
    this.storage = storage;
    this.totalLevelsCount = totalLevelsCount;
    this.onRetryLevel = onRetryLevel;
    this.onNextLevel = onNextLevel;
    this.onReturnToMenu = onReturnToMenu;
    this.onOpenProfile = onOpenProfile;
    this.onPauseGame = onPauseGame;
    this.onResumeGame = onResumeGame;

    // HUD DOM elements on the single unified Top Bar
    this.gameplayHudCluster = document.getElementById('gameplay-hud-cluster');
    this.restartLevelBtn = document.getElementById('btn-restart-level');
    this.pauseMenuBtn = document.getElementById('btn-pause-menu');
    this.displayLevelNumber = document.getElementById('display-player-level');
    this.targetsLeftEl = document.getElementById('hud-targets-left');
    this.birdQueueEl = document.getElementById('hud-bird-queue');
    this.scoreEl = document.getElementById('hud-score');
    this.aimTelemetryEl = document.getElementById('aim-telemetry');
    this.telemetryPowerEl = document.getElementById('telemetry-power');
    this.telemetryAngleEl = document.getElementById('telemetry-angle');

    // Structured Game Menu Modal elements
    this.gameMenuDialog = document.getElementById('game-menu-dialog');
    this.menuAvatarImg = document.getElementById('menu-avatar-img');
    this.menuUsername = document.getElementById('menu-username');
    this.menuPlayerLevel = document.getElementById('menu-player-level');
    this.menuCoins = document.getElementById('menu-coins');
    this.menuStars = document.getElementById('menu-stars');
    this.menuAudioIcon = document.getElementById('menu-audio-icon');
    this.menuAudioStatus = document.getElementById('menu-audio-status');
    this.menuFullscreenIcon = document.getElementById('menu-fullscreen-icon');
    this.menuFullscreenStatus = document.getElementById('menu-fullscreen-status');

    // Result Dialog elements
    this.resultDialog = document.getElementById('result-dialog');
    this.resultBadge = document.getElementById('result-badge');
    this.resultTitle = document.getElementById('result-dialog-title');
    this.resultStars = document.getElementById('result-stars');
    this.resultMessage = document.getElementById('result-message');
    this.resultScore = document.getElementById('result-score');
    this.resultCoins = document.getElementById('result-coins');
    this.btnResultMenu = document.getElementById('btn-result-menu');
    this.btnResultRetry = document.getElementById('btn-result-retry');
    this.btnResultNext = document.getElementById('btn-result-next');

    this.initListeners();
  }

  initListeners() {
    // HUD Header Buttons
    this.restartLevelBtn?.addEventListener('click', () => {
      this.closeGameMenu();
      this.closeResultModal();
      this.onRetryLevel?.();
    });

    this.pauseMenuBtn?.addEventListener('click', () => {
      this.openGameMenu();
    });

    // In-Game Menu Modal Buttons
    document.getElementById('btn-close-game-menu')?.addEventListener('click', () => {
      this.closeGameMenu();
    });

    document.getElementById('btn-menu-resume')?.addEventListener('click', () => {
      this.closeGameMenu();
    });

    document.getElementById('btn-menu-edit-profile')?.addEventListener('click', () => {
      this.closeGameMenu();
      this.onOpenProfile?.();
    });

    document.getElementById('btn-menu-retry')?.addEventListener('click', () => {
      this.closeGameMenu();
      this.onRetryLevel?.();
    });

    document.getElementById('btn-menu-roadmap')?.addEventListener('click', () => {
      this.closeGameMenu();
      this.onReturnToMenu?.();
    });

    document.getElementById('btn-menu-fullscreen')?.addEventListener('click', async () => {
      await toggleFullscreen();
      this.updateFullscreenUI();
    });

    document.getElementById('btn-menu-audio-toggle')?.addEventListener('click', () => {
      if (this.storage) {
        const enabled = this.storage.toggleSound();
        this.updateAudioUI(enabled);
      }
    });

    // Result Modal Buttons
    this.btnResultMenu?.addEventListener('click', () => {
      this.closeResultModal();
      this.onReturnToMenu?.();
    });

    this.btnResultRetry?.addEventListener('click', () => {
      this.closeResultModal();
      this.onRetryLevel?.();
    });

    this.btnResultNext?.addEventListener('click', () => {
      this.closeResultModal();
      this.onNextLevel?.();
    });

    // Listen for Escape key to close pause menu
    this.gameMenuDialog?.addEventListener('cancel', () => {
      this.onResumeGame?.();
    });
  }

  openGameMenu() {
    if (!this.gameMenuDialog) return;
    this.onPauseGame?.();
    if (this.storage) {
      if (this.menuAvatarImg) this.menuAvatarImg.src = this.storage.getAvatarUrl();
      if (this.menuUsername) this.menuUsername.textContent = this.storage.getUsername();
      if (this.menuPlayerLevel) this.menuPlayerLevel.textContent = `LVL ${this.storage.getUnlockedLevel()}`;
      if (this.menuCoins) this.menuCoins.textContent = this.storage.getCoins().toLocaleString();
      if (this.menuStars) {
        const stars = this.storage.getTotalStars();
        const maxStars = this.totalLevelsCount * 3;
        this.menuStars.textContent = `${stars} / ${maxStars}`;
      }
      this.updateAudioUI(this.storage.isSoundEnabled());
      this.updateFullscreenUI();
    }

    if (!this.gameMenuDialog.open) {
      this.gameMenuDialog.showModal();
    }
  }

  closeGameMenu() {
    if (this.gameMenuDialog?.open) {
      this.gameMenuDialog.close();
    }
    this.onResumeGame?.();
  }

  updateAudioUI(enabled) {
    if (this.menuAudioIcon) this.menuAudioIcon.textContent = enabled ? '🔊' : '🔇';
    if (this.menuAudioStatus) this.menuAudioStatus.textContent = enabled ? 'ON' : 'OFF';
  }

  updateFullscreenUI() {
    const full = isFullscreen();
    if (this.menuFullscreenIcon) this.menuFullscreenIcon.textContent = full ? '⛶' : '⛶';
    if (this.menuFullscreenStatus) this.menuFullscreenStatus.textContent = full ? 'FULLSCREEN' : 'WINDOWED';
  }

  show() {
    this.gameplayHudCluster?.classList.remove('hidden');
    this.restartLevelBtn?.classList.remove('hidden');
  }

  hide() {
    this.gameplayHudCluster?.classList.add('hidden');
    this.restartLevelBtn?.classList.add('hidden');
    this.closeGameMenu();
    this.hideAimTelemetry();
  }

  updateLevelHeader(levelConfig) {
    if (this.displayLevelNumber) {
      this.displayLevelNumber.textContent = `STAGE ${levelConfig.id}`;
    }
  }

  updateStats({ targetsLeft, birdsQueue, score }) {
    if (this.targetsLeftEl) {
      this.targetsLeftEl.textContent = String(targetsLeft);
    }
    if (this.scoreEl) {
      this.scoreEl.textContent = score.toLocaleString();
    }
    if (this.birdQueueEl && Array.isArray(birdsQueue)) {
      this.birdQueueEl.innerHTML = '';
      birdsQueue.forEach((birdType, idx) => {
        const dot = document.createElement('span');
        dot.className = `bird-dot ${idx === 0 ? 'active' : ''}`;
        dot.title = birdType === 'speed' ? 'Yellow Speedster' : birdType === 'heavy' ? 'Heavy Bomber Bird' : 'Red Striker Bird';
        dot.textContent = birdType === 'speed' ? '⚡' : birdType === 'heavy' ? '💣' : '🐦';
        this.birdQueueEl.appendChild(dot);
      });
    }
  }

  showAimTelemetry(powerPercent, angleDeg) {
    if (!this.aimTelemetryEl) return;
    this.aimTelemetryEl.classList.remove('hidden');
    if (this.telemetryPowerEl) {
      this.telemetryPowerEl.textContent = `Power: ${Math.round(powerPercent)}%`;
    }
    if (this.telemetryAngleEl) {
      this.telemetryAngleEl.textContent = `Angle: ${Math.round(angleDeg)}°`;
    }
  }

  hideAimTelemetry() {
    this.aimTelemetryEl?.classList.add('hidden');
  }

  // Red-marked prompts removed per user request: no-op stubs
  showAbilityPrompt() {}
  hideAbilityPrompt() {}
  spawnFloatingToast() {}

  showResultModal({ won, levelId, hasNextLevel, score, coinsEarned, starsEarned }) {
    if (!this.resultDialog) return;

    this.resultBadge.textContent = won ? `STAGE ${levelId} CLEARED` : `STAGE ${levelId} FAILED`;
    this.resultTitle.textContent = won ? 'Victory!' : 'Out of Birds!';
    this.resultMessage.textContent = won
      ? 'Fortress demolished! Coins added to your treasury and next mission unlocked.'
      : 'Some targets survived the bombardment. Adjust your trajectory and try again!';

    this.resultScore.textContent = score.toLocaleString();
    this.resultCoins.textContent = `+${coinsEarned} 🪙`;

    const starSpans = this.resultStars.querySelectorAll('.star');
    starSpans.forEach((starEl, i) => {
      if (won && i < starsEarned) {
        starEl.classList.add('earned');
      } else {
        starEl.classList.remove('earned');
      }
    });

    if (this.btnResultNext) {
      if (won && hasNextLevel) {
        this.btnResultNext.classList.remove('hidden');
      } else {
        this.btnResultNext.classList.add('hidden');
      }
    }

    if (!this.resultDialog.open) {
      this.resultDialog.showModal();
    }
  }

  closeResultModal() {
    if (this.resultDialog && this.resultDialog.open) {
      this.resultDialog.close();
    }
  }
}
