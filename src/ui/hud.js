import { isFullscreen, toggleFullscreen } from './fullscreenHelper.js';
import coinLogoUrl from '../assets/coin-with-logo.png';

/**
 * Manages the In-Game Unified HUD, aim telemetry, structured game menu dialog (Pause),
 * and the end-of-level Victory / Defeat modal.
 */
export class HudController {
  constructor({
    storage,
    audio,
    totalLevelsCount = 8,
    onRetryLevel,
    onNextLevel,
    onReturnToMenu,
    onReturnToRoadmap,
    onReturnToDashboard,
    onOpenProfile,
    onPauseGame,
    onResumeGame
  }) {
    this.storage = storage;
    this.audio = audio;
    this.totalLevelsCount = totalLevelsCount;
    this.onRetryLevel = onRetryLevel;
    this.onNextLevel = onNextLevel;
    this.onReturnToMenu = onReturnToMenu;
    this.onReturnToRoadmap = onReturnToRoadmap || onReturnToMenu;
    this.onReturnToDashboard = onReturnToDashboard || onReturnToMenu;
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

    // Independent Volume Sliders
    this.sliderSfxVolume = document.getElementById('slider-sfx-volume');
    this.valSfxVolume = document.getElementById('val-sfx-volume');
    this.sliderBgmVolume = document.getElementById('slider-bgm-volume');
    this.valBgmVolume = document.getElementById('val-bgm-volume');

    // Result Dialog elements
    this.resultDialog = document.getElementById('result-dialog');
    this.resultBadge = document.getElementById('result-badge');
    this.resultTitle = document.getElementById('result-dialog-title');
    this.resultStars = document.getElementById('result-stars');
    this.resultMessage = document.getElementById('result-message');
    this.resultScore = document.getElementById('result-score');
    this.resultCoins = document.getElementById('result-coins');
    this.resultCoinsVal = document.getElementById('result-coins-val');
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
      this.onReturnToRoadmap?.();
    });

    document.getElementById('btn-menu-dashboard')?.addEventListener('click', () => {
      this.closeGameMenu();
      this.onReturnToDashboard?.();
    });

    document.getElementById('btn-menu-main-menu')?.addEventListener('click', () => {
      this.closeGameMenu();
      this.onReturnToDashboard?.();
    });

    document.getElementById('btn-menu-fullscreen')?.addEventListener('click', async () => {
      await toggleFullscreen();
      this.updateFullscreenUI();
    });

    document.getElementById('btn-menu-audio-toggle')?.addEventListener('click', () => {
      let enabled;
      if (this.audio) {
        enabled = this.audio.toggleMute();
      } else if (this.storage) {
        enabled = this.storage.toggleSound();
      }
      this.updateAudioUI(enabled);
    });

    this.sliderSfxVolume?.addEventListener('input', (e) => {
      const pct = Number(e.target.value) || 0;
      const vol = pct / 100;
      if (this.audio) {
        this.audio.setSFXVolume(vol);
      } else if (this.storage) {
        this.storage.setSfxVolume(vol);
      }
      if (this.valSfxVolume) this.valSfxVolume.textContent = `${Math.round(pct)}%`;
    });

    this.sliderBgmVolume?.addEventListener('input', (e) => {
      const pct = Number(e.target.value) || 0;
      const vol = pct / 100;
      if (this.audio) {
        this.audio.setBGMVolume(vol);
      } else if (this.storage) {
        this.storage.setBgmVolume(vol);
      }
      if (this.valBgmVolume) this.valBgmVolume.textContent = `${Math.round(pct)}%`;
    });

    // BGM Playback Mode Selectors
    const setBgmMode = (mode) => {
      if (this.audio) {
        this.audio.setBgmMode(mode);
      } else if (this.storage) {
        this.storage.setBgmMode(mode);
      }
      this.updateBgmModeUI(mode);
    };

    document.getElementById('btn-bgm-mode-dashboard')?.addEventListener('click', () => setBgmMode('dashboard'));
    document.getElementById('btn-bgm-mode-always')?.addEventListener('click', () => setBgmMode('always'));
    document.getElementById('btn-bgm-mode-off')?.addEventListener('click', () => setBgmMode('off'));

    // Result Modal Buttons
    document.getElementById('btn-result-dashboard')?.addEventListener('click', () => {
      this.closeResultModal();
      this.onReturnToDashboard?.();
    });

    this.btnResultMenu?.addEventListener('click', () => {
      this.closeResultModal();
      this.onReturnToRoadmap?.();
    });


    this.btnResultRetry?.addEventListener('click', () => {
      this.closeResultModal();
      this.onRetryLevel?.();
    });

    this.btnResultNext?.addEventListener('click', () => {
      this.closeResultModal();
      this.onNextLevel?.();
    });

    // Listen for Escape key, backdrop dismiss, or dialog close to resume game
    this.gameMenuDialog?.addEventListener('cancel', () => {
      this.onResumeGame?.();
    });
    this.gameMenuDialog?.addEventListener('close', () => {
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
      const sfxVal = this.storage.getSfxVolume();
      const bgmVal = this.storage.getBgmVolume();
      if (this.sliderSfxVolume) this.sliderSfxVolume.value = Math.round(sfxVal * 100);
      if (this.valSfxVolume) this.valSfxVolume.textContent = `${Math.round(sfxVal * 100)}%`;
      if (this.sliderBgmVolume) this.sliderBgmVolume.value = Math.round(bgmVal * 100);
      if (this.valBgmVolume) this.valBgmVolume.textContent = `${Math.round(bgmVal * 100)}%`;

      this.updateAudioUI(this.storage.isSoundEnabled());
      this.updateBgmModeUI(this.storage.getBgmMode());
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
    if (this.menuAudioStatus) this.menuAudioStatus.textContent = enabled ? 'ON' : 'MUTED';
    if (this.menuAudioIcon) {
      this.menuAudioIcon.style.opacity = enabled ? '1' : '0.45';
    }
  }

  updateBgmModeUI(mode) {
    const activeMode = mode || this.storage?.getBgmMode() || 'dashboard';
    const btnDash = document.getElementById('btn-bgm-mode-dashboard');
    const btnAlways = document.getElementById('btn-bgm-mode-always');
    const btnOff = document.getElementById('btn-bgm-mode-off');
    const badge = document.getElementById('badge-bgm-mode');

    btnDash?.classList.toggle('active', activeMode === 'dashboard');
    btnAlways?.classList.toggle('active', activeMode === 'always');
    btnOff?.classList.toggle('active', activeMode === 'off');

    if (badge) {
      if (activeMode === 'always') badge.textContent = 'In-Game + Dash';
      else if (activeMode === 'off') badge.textContent = 'Off Everywhere';
      else badge.textContent = 'Dashboard Only';
    }
  }

  updateFullscreenUI() {
    // Nav fullscreen is handled in UIManager
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
    if (this.displayLevelNumber && levelConfig) {
      this.displayLevelNumber.textContent = `LVL ${levelConfig.id}`;
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

  showResultModal({ won, levelId, hasNextLevel, score, coinsEarned, isFirstTimeWin = false, starsEarned }) {
    if (!this.resultDialog) return;

    this.resultBadge.textContent = won ? `STAGE ${levelId} CLEARED` : `STAGE ${levelId} FAILED`;
    this.resultTitle.textContent = won ? 'Victory!' : 'Out of Birds!';
    if (won) {
      this.resultMessage.textContent = coinsEarned > 0
        ? 'Fortress demolished! Coins added to your treasury and next mission unlocked.'
        : 'Fortress demolished! (Replay: coins already claimed on first clear)';
    } else {
      this.resultMessage.textContent =
        'Some targets survived the bombardment. Adjust your trajectory and try again!';
    }

    this.resultScore.textContent = score.toLocaleString();
    const coinsDisplay = won && coinsEarned > 0 ? `+${coinsEarned}` : '+0';
    if (this.resultCoinsVal) {
      this.resultCoinsVal.textContent = coinsDisplay;
    } else if (this.resultCoins) {
      this.resultCoins.innerHTML = `<span id="result-coins-val">${coinsDisplay}</span> <img class="coin-icon-img" src="${coinLogoUrl}" alt="Coin" />`;
    }

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
