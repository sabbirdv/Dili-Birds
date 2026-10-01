import { StorageManager } from './storage/storageManager.js';
import { AudioManager } from './ui/audioManager.js';
import { LevelSelect } from './levels/levelSelect.js';
import { LEVELS } from './levels/levelData.js';
import { UIManager } from './ui/uiManager.js';
import { GameScene } from './scene/gameScene.js';
import { requestFullscreen } from './ui/fullscreenHelper.js';
import { leaderboardService } from './services/leaderboardService.js';

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
        this.audio?.enterMenu();
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
      },
      onPauseGame: () => {
        this.gameScene?.pause();
        this.audio?.enterMenu();
      },
      onResumeGame: () => {
        this.gameScene?.resume();
        this.audio?.enterGameplay();
      },
      onSetDashboard3DMode: (isDash) => {
        this.gameScene?.setDashboardMode(isDash);
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
        let actualCoinsAwarded = 0;
        let isFirstTimeWin = false;
        if (won) {
          const result = this.storage.recordLevelWin(
            levelId,
            score,
            starsEarned,
            coinsEarned,
            LEVELS.length
          );
          actualCoinsAwarded = result?.actualCoinsAwarded || 0;
          isFirstTimeWin = Boolean(result?.isFirstTimeWin);
          this.levelSelect.focusedLevelId = this.storage.getUnlockedLevel();

          // Sync player's updated coins and stars to Supabase Dili-Birds-Data globally
          leaderboardService.syncPlayerScore({
            serverRowId: this.storage.getServerRowId(),
            username: this.storage.getUsername(),
            score: this.storage.getCoins(),
            star: this.storage.getTotalStars()
          }).then((res) => {
            if (res?.success && res.rowId && !this.storage.getServerRowId()) {
              this.storage.setServerRowId(res.rowId);
            }
          }).catch(() => {});
        }
        this.ui.refreshHeaderAndMenu();
        const hasNextLevel = levelId < LEVELS.length;
        this.ui.hud.showResultModal({
          won,
          levelId,
          hasNextLevel,
          score,
          coinsEarned: won ? actualCoinsAwarded : 0,
          isFirstTimeWin,
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
    this.audio?.enterGameplay();
    tryLockLandscape();
    // Auto-request fullscreen on touch devices to ensure full-screen mobile gameplay
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      requestFullscreen().catch(() => {});
    }
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

/**
 * Strict landscape orientation enforcement for mobile devices.
 * In portrait mode, gameplay is strictly blocked until the device is turned sideways.
 */
function initLandscapeGuard() {
  const guard = document.getElementById('orientation-guard');
  const btnForce = document.getElementById('btn-force-landscape');

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  const checkOrientation = () => {
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

  btnForce?.addEventListener('click', async () => {
    await requestFullscreen();
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
