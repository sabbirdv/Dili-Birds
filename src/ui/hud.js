/**
 * Manages the In-Game Heads-Up Display (HUD), aim telemetry, floating coin toasts,
 * and the end-of-level Victory / Defeat modal.
 */
export class HudController {
  constructor({ onRetryLevel, onNextLevel, onReturnToMenu, onToggleCameraView }) {
    this.onRetryLevel = onRetryLevel;
    this.onNextLevel = onNextLevel;
    this.onReturnToMenu = onReturnToMenu;
    this.onToggleCameraView = onToggleCameraView;

    // HUD DOM elements
    this.hudLayer = document.getElementById('game-hud');
    this.levelNumberEl = document.getElementById('hud-level-number');
    this.levelTitleEl = document.getElementById('hud-level-title');
    this.targetsLeftEl = document.getElementById('hud-targets-left');
    this.birdQueueEl = document.getElementById('hud-bird-queue');
    this.scoreEl = document.getElementById('hud-score');
    this.aimTelemetryEl = document.getElementById('aim-telemetry');
    this.telemetryPowerEl = document.getElementById('telemetry-power');
    this.telemetryAngleEl = document.getElementById('telemetry-angle');
    this.abilityToastEl = document.getElementById('ability-toast');
    this.floatingToastsEl = document.getElementById('floating-toasts');

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
    document.getElementById('btn-restart-level')?.addEventListener('click', () => {
      this.closeResultModal();
      this.onRetryLevel?.();
    });

    document.getElementById('btn-camera-view')?.addEventListener('click', () => {
      this.onToggleCameraView?.();
    });

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
  }

  show() {
    this.hudLayer?.classList.remove('hidden');
  }

  hide() {
    this.hudLayer?.classList.add('hidden');
    this.hideAimTelemetry();
    this.hideAbilityPrompt();
  }

  updateLevelHeader(levelConfig) {
    if (this.levelNumberEl) this.levelNumberEl.textContent = `STAGE ${levelConfig.id}`;
    if (this.levelTitleEl) this.levelTitleEl.textContent = levelConfig.name;
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
        dot.title = birdType === 'speed' ? 'Yellow Speedster (Tap in flight to boost)' : birdType === 'heavy' ? 'Heavy Bomber Bird' : 'Red Striker Bird';
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

  showAbilityPrompt(text = '⚡ Tap or Click anywhere to trigger Bird Boost!') {
    if (!this.abilityToastEl) return;
    this.abilityToastEl.textContent = text;
    this.abilityToastEl.classList.remove('hidden');
  }

  hideAbilityPrompt() {
    this.abilityToastEl?.classList.add('hidden');
  }

  spawnFloatingToast(message) {
    if (!this.floatingToastsEl) return;
    const item = document.createElement('div');
    item.className = 'toast-item';
    item.textContent = message;
    this.floatingToastsEl.appendChild(item);
    setTimeout(() => {
      item.remove();
    }, 2200);
  }

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
