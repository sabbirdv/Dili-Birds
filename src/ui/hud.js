import { isFullscreen, toggleFullscreen } from './fullscreenHelper.js';
import coinLogoUrl from '../assets/coin-with-logo.png';
import blueBirdIcon from '../assets/sub-character.png';
import pinkBirdIcon from '../assets/sub-character-3.png';
import goldBirdIcon from '../assets/sub-character-4.png';
import bossBirdIcon from '../assets/sub-character-2.png';

export const RESCUE_BIRD_META = {
  blue: {
    name: 'Blue Bird',
    icon: blueBirdIcon,
    color: '#38bdf8'
  },
  pink: {
    name: 'Pink Bird',
    icon: pinkBirdIcon,
    color: '#ec4899'
  },
  gold: {
    name: 'Gold Bird',
    icon: goldBirdIcon,
    color: '#fbbf24'
  },
  yellow: {
    name: 'Gold Bird',
    icon: goldBirdIcon,
    color: '#fbbf24'
  },
  boss: {
    name: 'Boss Bird',
    icon: bossBirdIcon,
    color: '#818cf8'
  }
};

export const BIRD_ABILITY_CONFIG = {
  speed: {
    name: 'Supersonic Boost',
    icon: '⚡',
    hasAbility: true,
    color: '#38bdf8',
    hint: 'Tap mid-flight to boost speed & pierce through blocks!'
  },
  heavy: {
    name: 'Meteor Slam',
    icon: '💣',
    hasAbility: true,
    color: '#d946ef',
    hint: 'Tap mid-flight to slam down with seismic impact!'
  },
  split: {
    name: 'Tri-Cluster Split',
    icon: '✨',
    hasAbility: true,
    color: '#fbbf24',
    hint: 'Tap mid-flight to split into 3 striking birds!'
  },
  fire: {
    name: 'Inferno Burst',
    icon: '🔥',
    hasAbility: true,
    color: '#f97316',
    hint: 'Tap mid-flight to detonate a fiery blast wave!'
  },
  vortex: {
    name: 'Vortex Pull',
    icon: '🌀',
    hasAbility: true,
    color: '#6366f1',
    hint: 'Tap mid-flight to trigger a gravitational vortex!'
  },
  red: {
    name: 'Winged Striker',
    icon: '🎯',
    hasAbility: false,
    color: '#38bdf8',
    hint: 'Aerodynamic kinetic striker (passive high impact).'
  }
};

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
    onResumeGame,
    onActivateAbility
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
    this.onActivateAbility = onActivateAbility;

    this.isGameplayActive = false;
    this.currentActiveBirdType = null;
    this.currentBirdInFlight = false;
    this.currentBirdAbilityUsed = false;

    // HUD DOM elements on the single unified Top Bar
    this.gameplayHudCluster = document.getElementById('gameplay-hud-cluster');
    this.restartLevelBtn = document.getElementById('btn-restart-level');
    this.pauseMenuBtn = document.getElementById('btn-pause-menu');
    this.displayLevelNumber = document.getElementById('display-player-level');
    this.targetsLeftEl = document.getElementById('hud-targets-left');
    this.birdQueueEl = document.getElementById('hud-bird-queue');
    this.scoreEl = document.getElementById('hud-score');

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

    // Structure Birds Rescue Tracker (Right Screen Side - Not in Nav)
    this.rescueTrackerEl = document.getElementById('structure-birds-tracker');
    this.trackerListEl = document.getElementById('tracker-birds-list');

    // Status Highlight & Wish / Hooray Celebration Layer
    this.resultStatusHighlight = document.getElementById('result-status-highlight');
    this.statusHighlightIcon = document.getElementById('status-highlight-icon');
    this.statusHighlightText = document.getElementById('status-highlight-text');
    this.victoryCelebrationContainer = document.getElementById('victory-celebration-container');
    this.victoryConfettiCanvas = document.getElementById('victory-confetti-canvas');

    // Active Bird Ability Controller elements (Screen Bottom Center)
    this.birdAbilityDockEl = document.getElementById('bird-ability-dock');
    this.abilityFirstTimeTooltipEl = document.getElementById('ability-first-time-tooltip');
    this.btnActivateAbility = document.getElementById('btn-activate-ability');
    this.abilityBtnIconEl = document.getElementById('ability-btn-icon');
    this.abilityBtnNameEl = document.getElementById('ability-btn-name');
    this.abilityBtnStatusEl = document.getElementById('ability-btn-status');
    this.btnDismissAbilityTooltip = document.getElementById('btn-dismiss-ability-tooltip');

    this.confettiAnimationId = null;
    this.confettiParticles = [];

    this.initListeners();
  }

  initListeners() {
    // HUD Header Buttons
    this.restartLevelBtn?.addEventListener('click', () => {
      this.audio?.playRetry?.();
      this.closeGameMenu();
      this.closeResultModal();
      this.onRetryLevel?.();
    });

    this.pauseMenuBtn?.addEventListener('click', () => {
      this.audio?.playMenuOpen?.();
      this.openGameMenu();
    });

    // In-Game Menu Modal Buttons
    document.getElementById('btn-close-game-menu')?.addEventListener('click', () => {
      this.audio?.playMenuClose?.();
      this.closeGameMenu();
    });

    document.getElementById('btn-menu-resume')?.addEventListener('click', () => {
      this.audio?.playMenuClose?.();
      this.closeGameMenu();
    });

    document.getElementById('btn-menu-edit-profile')?.addEventListener('click', () => {
      this.audio?.playMenuOpen?.();
      this.closeGameMenu();
      this.onOpenProfile?.();
    });

    document.getElementById('btn-menu-retry')?.addEventListener('click', () => {
      this.audio?.playRetry?.();
      this.closeGameMenu();
      this.onRetryLevel?.();
    });

    document.getElementById('btn-menu-roadmap')?.addEventListener('click', () => {
      this.audio?.playMenuBack?.();
      this.closeGameMenu();
      this.onReturnToRoadmap?.();
    });

    document.getElementById('btn-menu-dashboard')?.addEventListener('click', () => {
      this.audio?.playMenuBack?.();
      this.closeGameMenu();
      this.onReturnToDashboard?.();
    });

    document.getElementById('btn-menu-main-menu')?.addEventListener('click', () => {
      this.audio?.playMenuBack?.();
      this.closeGameMenu();
      this.onReturnToDashboard?.();
    });

    document.getElementById('btn-menu-fullscreen')?.addEventListener('click', async () => {
      this.audio?.playUiClick?.();
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
      this.audio?.playUiClick?.();
      if (this.audio) {
        this.audio.setBgmMode(mode);
      } else if (this.storage) {
        this.storage.setBgmMode(mode);
      }
      this.updateBgmModeUI(mode);
    };

    const attachBgmModeBtn = (id, mode) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBgmMode(mode);
      });
    };

    attachBgmModeBtn('btn-bgm-mode-dashboard', 'dashboard');
    attachBgmModeBtn('btn-bgm-mode-always', 'always');
    attachBgmModeBtn('btn-bgm-mode-off', 'off');

    // Result Modal Buttons
    document.getElementById('btn-result-dashboard')?.addEventListener('click', () => {
      this.audio?.playMenuBack?.();
      this.closeResultModal();
      this.onReturnToDashboard?.();
    });

    this.btnResultMenu?.addEventListener('click', () => {
      this.audio?.playMenuBack?.();
      this.closeResultModal();
      this.onReturnToRoadmap?.();
    });

    this.btnResultRetry?.addEventListener('click', () => {
      this.audio?.playRetry?.();
      this.closeResultModal();
      this.onRetryLevel?.();
    });

    this.btnResultNext?.addEventListener('click', () => {
      this.audio?.playLevelSelect?.();
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

    // Bird Ability Dock Button Listeners
    this.btnActivateAbility?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handleAbilityClick();
    });

    this.btnDismissAbilityTooltip?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.dismissAbilityTooltip();
    });
  }

  openGameMenu() {
    if (!this.gameMenuDialog) return;
    this.onPauseGame?.();
    this.rescueTrackerEl?.classList.add('hidden');
    this.birdAbilityDockEl?.classList.add('hidden');

    const gameplayActionsEl = document.getElementById('menu-gameplay-actions');
    const headerKickerEl = document.getElementById('menu-header-kicker');
    const titleTextEl = document.getElementById('menu-title-text');

    if (this.isGameplayActive) {
      // In-Game Mode: Show in-game action buttons (Resume, Restart, Roadmap, Dashboard)
      gameplayActionsEl?.classList.remove('hidden');
      if (headerKickerEl) headerKickerEl.textContent = 'MISSION STATUS';
      if (titleTextEl) titleTextEl.textContent = 'Game Paused';
    } else {
      // Dashboard Mode: Hide gameplay action buttons
      gameplayActionsEl?.classList.add('hidden');
      if (headerKickerEl) headerKickerEl.textContent = 'AUDIO & SETTINGS';
      if (titleTextEl) titleTextEl.textContent = 'Game Settings';
    }

    if (this.storage) {
      if (this.menuAvatarImg) this.menuAvatarImg.src = this.storage.getAvatarUrl();
      if (this.menuUsername) this.menuUsername.textContent = this.storage.getUsername();
      if (this.menuPlayerLevel) this.menuPlayerLevel.textContent = `LVL ${this.storage.getUnlockedLevel()}`;
      if (this.menuCoins) this.menuCoins.textContent = this.storage.getCoins().toLocaleString();
      if (this.menuStars) {
        const stars = this.storage.getTotalStars();
        const playedCount = this.storage.getPlayedLevelsCount ? this.storage.getPlayedLevelsCount() : 0;
        const maxStarsForPlayed = playedCount > 0 ? playedCount * 3 : 0;
        this.menuStars.textContent = `${stars} / ${maxStarsForPlayed}`;
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
    if (this.isGameplayActive) {
      this.rescueTrackerEl?.classList.remove('hidden');
      if (this.currentActiveBirdType) {
        this.birdAbilityDockEl?.classList.remove('hidden');
      }
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
    this.isGameplayActive = true;
    this.gameplayHudCluster?.classList.remove('hidden');
    this.restartLevelBtn?.classList.remove('hidden');
    this.rescueTrackerEl?.classList.remove('hidden');
    if (this.currentActiveBirdType) {
      this.birdAbilityDockEl?.classList.remove('hidden');
    }
  }

  hide() {
    this.isGameplayActive = false;
    this.gameplayHudCluster?.classList.add('hidden');
    this.restartLevelBtn?.classList.add('hidden');
    this.rescueTrackerEl?.classList.add('hidden');
    this.hideBirdAbility();
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
      const birdInfoMap = {
        red: { icon: '🐦', name: 'Commander Falcon (Winged Striker)' },
        speed: { icon: '⚡', name: 'Speedster Swift (Sonic Plasma Orb)' },
        heavy: { icon: '💣', name: 'Bomber Titan (Heavy Seismic Orb)' },
        split: { icon: '✨', name: 'Splitter Trio (Tactical Tri-Cluster)' },
        fire: { icon: '🔥', name: 'Inferno Flare (Solar Pyre Orb)' },
        vortex: { icon: '🌀', name: 'Vortex Titan (Gravitational Singularity)' }
      };

      birdsQueue.forEach((birdType, idx) => {
        const dot = document.createElement('span');
        dot.className = `bird-dot ${idx === 0 ? 'active' : ''}`;
        const info = birdInfoMap[birdType] || birdInfoMap.red;
        dot.title = info.name;
        dot.textContent = info.icon;
        this.birdQueueEl.appendChild(dot);
      });
    }
  }

  /**
   * Updates the floating Structure Birds Rescue Tracker on the right side of the screen.
   * Shows mini bird icons and remaining multipliers (e.g. 2x, 1x) to free.
   */
  updateRescueTracker(targetsByType, initialTargetsByType) {
    if (!this.isGameplayActive || !this.rescueTrackerEl || !this.trackerListEl) {
      this.rescueTrackerEl?.classList.add('hidden');
      return;
    }

    if (
      (!targetsByType || Object.keys(targetsByType).length === 0) &&
      (!initialTargetsByType || Object.keys(initialTargetsByType).length === 0)
    ) {
      this.rescueTrackerEl.classList.add('hidden');
      return;
    }

    this.rescueTrackerEl.classList.remove('hidden');

    const types = Array.from(
      new Set([
        ...Object.keys(initialTargetsByType || {}),
        ...Object.keys(targetsByType || {})
      ])
    );

    if (types.length === 0) {
      this.rescueTrackerEl.classList.add('hidden');
      return;
    }

    this.trackerListEl.innerHTML = '';
    types.forEach((type) => {
      const remaining = targetsByType?.[type] || 0;
      const initial = initialTargetsByType?.[type] || remaining;
      const meta = RESCUE_BIRD_META[type] || RESCUE_BIRD_META.blue;

      const itemEl = document.createElement('div');
      itemEl.className = `tracker-bird-item ${remaining === 0 ? 'cleared' : ''}`;
      itemEl.setAttribute('data-type', type);
      itemEl.title = `${meta.name}: ${remaining} left to free`;

      itemEl.innerHTML = `
        <div class="tracker-avatar-wrap" style="--bird-theme-color: ${meta.color}">
          <img src="${meta.icon}" alt="${meta.name}" class="tracker-bird-img" />
          <span class="tracker-count-badge ${remaining === 0 ? 'badge-cleared' : ''}">
            ${remaining > 0 ? `${remaining}x` : '✓'}
          </span>
        </div>
      `;

      this.trackerListEl.appendChild(itemEl);
    });
  }

  // Aim telemetry removed per user request: no-op stubs
  showAimTelemetry() {}
  hideAimTelemetry() {}

  // Red-marked prompts removed per user request: no-op stubs
  showAbilityPrompt() {}
  hideAbilityPrompt() {}
  spawnFloatingToast() {}

  /**
   * Sets up the bottom-center Bird Ability Dock when a bird is queued on the slingshot.
   */
  setBirdAbilityReady(data) {
    const birdType = typeof data === 'string' ? data : data?.birdType;
    if (!birdType) return;
    this.currentActiveBirdType = birdType;
    this.currentBirdInFlight = false;
    this.currentBirdAbilityUsed = false;

    const cfg = BIRD_ABILITY_CONFIG[birdType] || BIRD_ABILITY_CONFIG.red;

    if (this.abilityBtnIconEl) this.abilityBtnIconEl.textContent = cfg.icon;
    if (this.abilityBtnNameEl) this.abilityBtnNameEl.textContent = cfg.name;
    if (this.abilityBtnStatusEl) {
      this.abilityBtnStatusEl.textContent = cfg.hasAbility ? 'Armed & Ready' : 'Standard Strike';
    }

    if (this.btnActivateAbility) {
      this.btnActivateAbility.disabled = true; // mid-flight activation only
      this.btnActivateAbility.classList.remove('in-flight-active', 'ability-used');
      this.btnActivateAbility.style.setProperty('--ability-color', cfg.color);
    }

    if (!this.isGameplayActive) {
      this.birdAbilityDockEl?.classList.add('hidden');
      return;
    }

    this.birdAbilityDockEl?.classList.remove('hidden');

    // First time tooltip for ability-enabled birds (persistent via localStorage)
    if (cfg.hasAbility) {
      let seen = false;
      try {
        seen = localStorage.getItem('dili_birds_seen_ability_tooltip') === 'true';
      } catch (e) {}

      if (!seen && this.abilityFirstTimeTooltipEl) {
        this.abilityFirstTimeTooltipEl.classList.remove('hidden');
      } else {
        this.abilityFirstTimeTooltipEl?.classList.add('hidden');
      }
    } else {
      this.abilityFirstTimeTooltipEl?.classList.add('hidden');
    }
  }

  setBirdAbilityInFlight(data) {
    this.currentBirdInFlight = true;
    if (this.currentBirdAbilityUsed) return;

    const birdType = (typeof data === 'string' ? data : data?.birdType) || this.currentActiveBirdType;
    const cfg = BIRD_ABILITY_CONFIG[birdType] || BIRD_ABILITY_CONFIG.red;

    if (cfg.hasAbility && this.btnActivateAbility) {
      this.btnActivateAbility.disabled = false;
      this.btnActivateAbility.classList.add('in-flight-active');
      if (this.abilityBtnStatusEl) {
        this.abilityBtnStatusEl.textContent = '⚡ TAP TO ACTIVATE!';
      }
    }
  }

  setBirdAbilityUsed(data) {
    this.currentBirdAbilityUsed = true;
    if (this.btnActivateAbility) {
      this.btnActivateAbility.disabled = true;
      this.btnActivateAbility.classList.remove('in-flight-active');
      this.btnActivateAbility.classList.add('ability-used');
    }
    if (this.abilityBtnStatusEl) {
      this.abilityBtnStatusEl.textContent = 'Activated ✓';
    }
    this.dismissAbilityTooltip();
  }

  hideBirdAbility() {
    this.currentActiveBirdType = null;
    this.currentBirdInFlight = false;
    this.currentBirdAbilityUsed = false;
    this.birdAbilityDockEl?.classList.add('hidden');
    this.abilityFirstTimeTooltipEl?.classList.add('hidden');
    if (this.btnActivateAbility) {
      this.btnActivateAbility.disabled = true;
      this.btnActivateAbility.classList.remove('in-flight-active', 'ability-used');
    }
  }

  handleAbilityClick() {
    if (this.currentBirdInFlight && !this.currentBirdAbilityUsed) {
      this.onActivateAbility?.();
      this.dismissAbilityTooltip();
    }
  }

  dismissAbilityTooltip() {
    try {
      localStorage.setItem('dili_birds_seen_ability_tooltip', 'true');
    } catch (e) {}
    this.abilityFirstTimeTooltipEl?.classList.add('hidden');
  }

  /**
   * Starts the high-energy Hooray banner and celebration confetti effect on Level Clear.
   */
  startVictoryCelebration() {
    if (this.victoryCelebrationContainer) {
      this.victoryCelebrationContainer.classList.remove('hidden');
    }
    this.startConfetti();
  }

  stopVictoryCelebration() {
    if (this.victoryCelebrationContainer) {
      this.victoryCelebrationContainer.classList.add('hidden');
    }
    this.stopConfetti();
  }

  startConfetti() {
    if (!this.victoryConfettiCanvas) return;
    const canvas = this.victoryConfettiCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.stopConfetti();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f59e0b', '#38bdf8', '#ec4899', '#10b981', '#a855f7', '#fbbf24', '#ffffff', '#3b82f6'];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 12));
    this.confettiParticles = [];

    for (let i = 0; i < particleCount; i++) {
      this.confettiParticles.push({
        x: window.innerWidth * 0.5 + (Math.random() - 0.5) * (window.innerWidth * 0.55),
        y: window.innerHeight * 0.25 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: 7 + Math.random() * 9,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        wobble: Math.random() * Math.PI,
        wobbleSpeed: 0.05 + Math.random() * 0.08,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        gravity: 0.32 + Math.random() * 0.18,
        drag: 0.985,
        opacity: 1
      });
    }

    const startTime = performance.now();
    const duration = 4000;

    const render = (now) => {
      const elapsed = now - startTime;
      if (elapsed > duration) {
        this.stopConfetti();
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeCount = 0;
      this.confettiParticles.forEach((p) => {
        p.vx *= p.drag;
        p.vy = (p.vy + p.gravity) * p.drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.wobble += p.wobbleSpeed;

        if (elapsed > duration - 1000) {
          p.opacity = Math.max(0, (duration - elapsed) / 1000);
        }

        if (p.y < canvas.height + 20 && p.opacity > 0) {
          activeCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.scale(Math.cos(p.wobble), 1);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          if (p.shape === 'rect') {
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      });

      if (activeCount > 0) {
        this.confettiAnimationId = requestAnimationFrame(render);
      } else {
        this.stopConfetti();
      }
    };

    this.confettiAnimationId = requestAnimationFrame(render);
  }

  stopConfetti() {
    if (this.confettiAnimationId) {
      cancelAnimationFrame(this.confettiAnimationId);
      this.confettiAnimationId = null;
    }
    if (this.victoryConfettiCanvas) {
      const ctx = this.victoryConfettiCanvas.getContext('2d');
      ctx?.clearRect(0, 0, this.victoryConfettiCanvas.width, this.victoryConfettiCanvas.height);
    }
    this.confettiParticles = [];
  }

  showResultModal({
    won,
    levelId,
    hasNextLevel,
    score,
    coinsEarned,
    isFirstTimeWin = false,
    starsEarned,
    prevStars = 0,
    starsAdded = 0,
    bestStars = 0,
    totalStars = 0
  }) {
    if (!this.resultDialog) return;

    // Ensure floating rescue tracker and ability dock are hidden during result modal
    this.rescueTrackerEl?.classList.add('hidden');
    this.hideBirdAbility();

    if (won) {
      // ═══════════════════════════════════════════════════════════
      // 1. VICTORY / STAGE CLEARED
      // ═══════════════════════════════════════════════════════════
      this.resultDialog.classList.remove('result-dialog-failed');
      this.resultDialog.classList.add('result-dialog-victory');

      // Prominent Victory Status Highlight Banner
      if (this.resultStatusHighlight) {
        this.resultStatusHighlight.classList.remove('hidden', 'fail-highlight');
        this.resultStatusHighlight.classList.add('win-highlight');
        if (this.statusHighlightIcon) this.statusHighlightIcon.textContent = '🏆';
        if (this.statusHighlightText) this.statusHighlightText.textContent = 'LEVEL COMPLETED SUCCESSFULLY!';
      }

      this.resultBadge.className = 'result-badge win-badge';
      this.resultBadge.textContent = `STAGE ${levelId} CLEARED`;
      this.resultTitle.textContent = 'Victory!';

      // SHOW STARS ONLY ON SUCCESS! (Requirement 2)
      if (this.resultStars) {
        this.resultStars.classList.remove('hidden');
        this.resultStars.style.display = 'flex';
      }

      const displayStars = Math.max(starsEarned || 0, bestStars || 0);
      const starSpans = this.resultStars?.querySelectorAll('.star') || [];
      starSpans.forEach((starEl, i) => {
        if (i < displayStars) {
          starEl.classList.add('earned');
        } else {
          starEl.classList.remove('earned');
        }
      });

      if (isFirstTimeWin) {
        this.resultMessage.innerHTML = `Fortress demolished! <span class="first-win-coin-text">+${coinsEarned} Coins added to treasury</span> and next stage unlocked.`;
      } else if (starsAdded > 0) {
        this.resultMessage.innerHTML = `<span class="star-upgrade-text">🌟 Star Rating Upgraded! +${starsAdded} Star${starsAdded > 1 ? 's' : ''} added to total stars (${displayStars}/3 ★).</span><br><span class="replay-coin-text">(Replay clear: coins already claimed on first clear — 0 coins added)</span>`;
      } else {
        this.resultMessage.innerHTML = `Fortress demolished! Stage Best: <strong>${displayStars}/3 Stars</strong>.<br><span class="replay-coin-text">(Replay clear: coins already claimed on first clear — 0 coins added)</span>`;
      }

      if (this.btnResultRetry) {
        this.btnResultRetry.classList.remove('primary-btn');
        this.btnResultRetry.classList.add('secondary-btn');
      }

      if (this.btnResultNext) {
        if (hasNextLevel) {
          this.btnResultNext.classList.remove('hidden');
        } else {
          this.btnResultNext.classList.add('hidden');
        }
      }

      // Celebratory Wish / Hooray & Confetti Effect (Requirement 3)
      this.startVictoryCelebration();
    } else {
      // ═══════════════════════════════════════════════════════════
      // 2. FAILED / INCOMPLETE STAGE (Requirement 2)
      // ═══════════════════════════════════════════════════════════
      this.resultDialog.classList.remove('result-dialog-victory');
      this.resultDialog.classList.add('result-dialog-failed');

      // Prominent RED Highlight Banner to make failure unmistakable
      if (this.resultStatusHighlight) {
        this.resultStatusHighlight.classList.remove('hidden', 'win-highlight');
        this.resultStatusHighlight.classList.add('fail-highlight');
        if (this.statusHighlightIcon) this.statusHighlightIcon.textContent = '⚠️';
        if (this.statusHighlightText) this.statusHighlightText.textContent = 'LEVEL NOT COMPLETED';
      }

      this.resultBadge.className = 'result-badge fail-badge';
      this.resultBadge.textContent = `STAGE ${levelId} FAILED`;
      this.resultTitle.textContent = 'Mission Failed!';

      // STRICT REQUIREMENT: HIDE STARS ENTIRELY WHEN LEVEL NOT COMPLETED!
      if (this.resultStars) {
        this.resultStars.classList.add('hidden');
        this.resultStars.style.display = 'none';
      }

      this.resultMessage.innerHTML = `<span class="fail-notice-text">❌ Some birds are still trapped! All target birds must be freed to clear the stage.<br>Adjust your slingshot aim and trajectory to try again!</span>`;

      if (this.btnResultRetry) {
        this.btnResultRetry.classList.remove('secondary-btn');
        this.btnResultRetry.classList.add('primary-btn');
      }

      if (this.btnResultNext) {
        this.btnResultNext.classList.add('hidden');
      }

      this.stopVictoryCelebration();
    }

    this.resultScore.textContent = score.toLocaleString();
    const coinsDisplay = won && coinsEarned > 0 ? `+${coinsEarned}` : '+0';
    if (this.resultCoinsVal) {
      this.resultCoinsVal.textContent = coinsDisplay;
    } else if (this.resultCoins) {
      this.resultCoins.innerHTML = `<span id="result-coins-val">${coinsDisplay}</span> <img class="coin-icon-img" src="${coinLogoUrl}" alt="Coin" />`;
    }

    if (!this.resultDialog.open) {
      this.resultDialog.showModal();
    }
  }

  closeResultModal() {
    this.stopVictoryCelebration();
    if (this.resultDialog && this.resultDialog.open) {
      this.resultDialog.close();
    }
  }
}
