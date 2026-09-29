import { StorageManager } from './storage/storageManager.js';
import { AudioManager } from './ui/audioManager.js';
import { LevelSelect } from './levels/levelSelect.js';
import { LEVELS } from './levels/levelData.js';
import { UIManager } from './ui/uiManager.js';
import { GameScene } from './scene/gameScene.js';

class DiliBirdsApp {
  constructor() {
    this.storage = new StorageManager();
    this.audio = new AudioManager(this.storage);
    this.currentLevelConfig = LEVELS[0];

    const canvasContainer = document.getElementById('canvas-container');

    this.levelSelect = new LevelSelect(
      this.storage,
      (selectedLevel) => {
        this.startLevel(selectedLevel);
      },
      (previewLevel) => {
        this.gameScene?.loadLevel(previewLevel, true);
      }
    );

    this.ui = new UIManager({
      storage: this.storage,
      audio: this.audio,
      levelSelect: this.levelSelect,
      totalLevelsCount: LEVELS.length,
      onSelectLevel: (level) => this.startLevel(level),
      onRetryLevel: () => this.startLevel(this.currentLevelConfig),
      onNextLevel: () => {
        const nextIdx = LEVELS.findIndex((l) => l.id === this.currentLevelConfig.id) + 1;
        if (nextIdx >= 0 && nextIdx < LEVELS.length) {
          this.startLevel(LEVELS[nextIdx]);
        } else {
          this.ui.showMainMenu();
        }
      },
      onReturnToMenu: () => {
        const previewLevel =
          LEVELS.find((l) => l.id === this.storage.getUnlockedLevel()) || LEVELS[0];
        this.levelSelect.focusedLevelId = previewLevel.id;
        this.levelSelect.lastPreviewedLevelId = previewLevel.id;
        this.levelSelect.render();
        this.gameScene?.loadLevel(previewLevel, true);
      },
      onBrandChanged: (newBrand) => {
        this.gameScene?.updateBrandName(newBrand);
      },
      onToggleCameraView: () => {
        this.gameScene?.toggleCameraView();
      }
    });

    this.gameScene = new GameScene({
      container: canvasContainer,
      storage: this.storage,
      audio: this.audio,
      onStatsChange: (stats) => {
        this.ui.hud.updateStats(stats);
        this.ui.refreshHeaderStats();
      },
      onAimUpdate: (power, angle) => {
        this.ui.hud.showAimTelemetry(power, angle);
      },
      onAimEnd: () => {
        this.ui.hud.hideAimTelemetry();
      },
      onShowAbilityPrompt: (msg) => {
        this.ui.hud.showAbilityPrompt(msg);
      },
      onHideAbilityPrompt: () => {
        this.ui.hud.hideAbilityPrompt();
      },
      onToast: (msg) => {
        this.ui.hud.spawnFloatingToast(msg);
        this.ui.refreshHeaderStats();
      },
      onLevelComplete: ({ won, levelId, score, coinsEarned, starsEarned }) => {
        if (won) {
          this.storage.recordLevelWin(
            levelId,
            score,
            starsEarned,
            this.currentLevelConfig.coinReward || 0,
            LEVELS.length
          );
          this.levelSelect.focusedLevelId = this.storage.getUnlockedLevel();
        }
        this.ui.refreshHeaderAndMenu();
        const hasNextLevel = levelId < LEVELS.length;
        this.ui.hud.showResultModal({
          won,
          levelId,
          hasNextLevel,
          score,
          coinsEarned,
          starsEarned
        });
      }
    });

    // Load the highest unlocked level as a live 3D background diorama behind the initial menu
    const initialPreview =
      LEVELS.find((l) => l.id === this.storage.getUnlockedLevel()) || LEVELS[0];
    this.levelSelect.lastPreviewedLevelId = initialPreview.id;
    this.gameScene.loadLevel(initialPreview, true);
  }

  startLevel(levelConfig) {
    if (!levelConfig) return;
    this.currentLevelConfig = levelConfig;
    tryLockLandscape();
    this.ui.showGameView(levelConfig);
    this.gameScene?.loadLevel(levelConfig, false);
  }
}

/**
 * Automatically locks the mobile device in landscape mode using the Screen Orientation API
 * with graceful fallback for unsupported browsers (e.g. iOS Safari).
 */
export async function tryLockLandscape() {
  try {
    if (screen.orientation && typeof screen.orientation.lock === 'function') {
      await screen.orientation.lock('landscape');
    } else if (screen.lockOrientation) {
      screen.lockOrientation('landscape');
    } else if (screen.mozLockOrientation) {
      screen.mozLockOrientation('landscape');
    } else if (screen.msLockOrientation) {
      screen.msLockOrientation('landscape');
    }
  } catch (err) {
    // Orientation lock might require fullscreen or is unsupported on iOS Safari
  }
}

function initLandscapeGuard() {
  const guard = document.getElementById('orientation-guard');
  const btnForce = document.getElementById('btn-force-landscape');
  const btnDismiss = document.getElementById('btn-dismiss-landscape');
  let userDismissed = false;

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  const checkOrientation = () => {
    if (userDismissed) {
      guard?.classList.remove('active-portrait');
      guard?.classList.add('dismissed');
      document.body.classList.add('orientation-dismissed');
      return;
    }

    const isPortrait =
      isTouchDevice() &&
      window.innerHeight > window.innerWidth &&
      window.innerWidth <= 1024;

    if (guard) {
      if (isPortrait) {
        guard.classList.add('active-portrait');
      } else {
        guard.classList.remove('active-portrait');
      }
    }
  };

  btnDismiss?.addEventListener('click', () => {
    userDismissed = true;
    checkOrientation();
  });

  btnForce?.addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          await document.documentElement.webkitRequestFullscreen();
        }
      }
    } catch (e) {}
    await tryLockLandscape();
    checkOrientation();
  });

  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', () => {
    setTimeout(checkOrientation, 150);
  });
  if (screen.orientation) {
    screen.orientation.addEventListener('change', () => {
      setTimeout(checkOrientation, 150);
    });
  }

  checkOrientation();

  // Attempt orientation lock on first touch or click
  const onFirstInteraction = () => {
    tryLockLandscape();
    window.removeEventListener('pointerdown', onFirstInteraction);
    window.removeEventListener('touchstart', onFirstInteraction);
  };
  window.addEventListener('pointerdown', onFirstInteraction, { passive: true });
  window.addEventListener('touchstart', onFirstInteraction, { passive: true });
}

function boot() {
  initLandscapeGuard();
  window.diliBirdsApp = new DiliBirdsApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
