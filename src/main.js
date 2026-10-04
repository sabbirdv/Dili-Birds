import { StorageManager } from './storage/storageManager.js';
import { AudioManager } from './ui/audioManager.js';
import { LevelSelect } from './levels/levelSelect.js';
import { LEVELS } from './levels/levelData.js';
import { UIManager } from './ui/uiManager.js';
import { HEROES_DATA } from './ui/dashboardModals.js';
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
      },
      this.audio
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
      },
      onActivateAbility: () => {
        this.gameScene?.triggerBirdAbility();
      }
    });

    this.gameScene = new GameScene({
      container: canvasContainer,
      storage: this.storage,
      audio: this.audio,
      onStatsChange: (stats) => {
        this.ui.hud.updateStats(stats);
        this.ui.hud.updateRescueTracker(stats.targetsByType, stats.initialTargetsByType);
        this.ui.refreshHeaderStats();
      },
      onAimUpdate: (power, angle) => {
        this.ui.hud.showAimTelemetry(power, angle);
      },
      onAimEnd: () => {
        this.ui.hud.hideAimTelemetry();
      },
      onBirdReady: (data) => {
        this.ui.hud.setBirdAbilityReady(data);
      },
      onBirdLaunch: (data) => {
        this.ui.hud.setBirdAbilityInFlight(data);
      },
      onAbilityUsed: (data) => {
        this.ui.hud.setBirdAbilityUsed(data);
      },
      onBirdReset: () => {
        this.ui.hud.hideBirdAbility();
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
        let starsAdded = 0;
        let prevStars = 0;
        let bestStars = starsEarned;
        let newlyUnlockedHero = null;
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
          starsAdded = result?.starsAdded ?? 0;
          prevStars = result?.prevStars ?? 0;
          bestStars = result?.bestStars ?? this.storage.getStarsForLevel(levelId);
          const prevUnlockedLevel = result?.prevUnlockedLevel || this.storage.getUnlockedLevel();
          const newUnlockedLevel = result?.newUnlockedLevel || this.storage.getUnlockedLevel();
          const didAdvanceLevel = Boolean(result?.didAdvanceLevel);
          const unlockedNewZone = Boolean(result?.unlockedNewZone);

          if (didAdvanceLevel) {
            this.levelSelect.focusedLevelId = newUnlockedLevel;
            this.levelSelect.activeLevelId = newUnlockedLevel;
            if (levelId === 10 && !this.storage.isZoneRevealed(2)) {
              this.levelSelect.pendingZoneUnlock = 2;
            } else if (levelId === 20 && !this.storage.isZoneRevealed(3)) {
              this.levelSelect.pendingZoneUnlock = 3;
            } else if (levelId === 35 && !this.storage.isZoneRevealed(4)) {
              this.levelSelect.pendingZoneUnlock = 4;
            } else if (levelId === 50 && !this.storage.isZoneRevealed(5)) {
              this.levelSelect.pendingZoneUnlock = 5;
            } else if (levelId === 60 && !this.storage.isZoneRevealed(6)) {
              this.levelSelect.pendingZoneUnlock = 6;
            } else {
              this.levelSelect.pendingLevelUnlock = newUnlockedLevel;
            }
          } else {
            // Replay mode: Keep focus and active stage directly on the replayed stage
            this.levelSelect.focusedLevelId = levelId;
            this.levelSelect.activeLevelId = levelId;
            this.levelSelect.pendingLevelUnlock = null;
            this.levelSelect.pendingZoneUnlock = null;
          }

          // Strictly FIRST-TIME UNLOCK ONLY:
          // Triggers only when advancing a level, previous level was below milestone, new level reaches milestone, and never seen before.
          if (didAdvanceLevel) {
            newlyUnlockedHero = HEROES_DATA.find(
              (h) =>
                prevUnlockedLevel < h.milestoneLevel &&
                newUnlockedLevel >= h.milestoneLevel &&
                !this.storage.hasSeenHeroUnlock(h.id)
            ) || null;
            if (newlyUnlockedHero) {
              this.storage.markHeroUnlockSeen(newlyUnlockedHero.id);
            }
          }

          // Save best score and stars per level using Supabase, and preserve progress across sessions
          leaderboardService.syncLevelProgress({
            serverRowId: this.storage.getServerRowId(),
            username: this.storage.getUsername(),
            levelId,
            score,
            stars: bestStars,
            totalScore: this.storage.getCoins(),
            totalStars: this.storage.getTotalStars()
          }).then((res) => {
            if (res?.success && res.rowId && !this.storage.getServerRowId()) {
              this.storage.setServerRowId(res.rowId);
            }
          }).catch(() => {});
        }
        this.audio?.enterMenu();
        this.ui.refreshHeaderAndMenu();
        const hasNextLevel = levelId < LEVELS.length;
        this.ui.hud.showResultModal({
          won,
          levelId,
          hasNextLevel,
          score,
          coinsEarned: won ? actualCoinsAwarded : 0,
          isFirstTimeWin,
          starsEarned,
          prevStars,
          starsAdded,
          bestStars,
          totalStars: this.storage.getTotalStars(),
          newlyUnlockedHero
        });
      }
    });

    // Global audio unlock on any user interaction anywhere on screen
    const triggerGlobalAudio = () => {
      this.audio?.handleUserInteraction?.();
    };
    ['pointerdown', 'touchstart', 'click', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, triggerGlobalAudio, { passive: true });
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
