/**
 * Centralized, High-Fidelity & Immersive Web Audio System for Dili-Birds 3D.
 *
 * Core Audio Engineering & Architectural Pillars:
 *  1. Continuous Interface Background Music (BGM):
 *     - Beautiful, calm, playful, atmospheric, and immersive soundtrack.
 *     - Features organic acoustic marimba/kalimba plucks, lush warm Rhodes electric piano,
 *       sparkling celesta/bell counterpoints, warm round acoustic upright bass, and gentle
 *       organic shakers and wood taps.
 *     - Runs seamlessly across ALL non-gameplay sections (Main Dashboard, Profile Setup,
 *       Level Select Roadmap, Leaderboard Hall of Fame, Characters Codex, Daily Directives,
 *       Settings/Menu) without restarting or interrupting.
 *     - Sample-accurate Web Audio lookahead scheduling with zero clicks, phase issues, or duplicate instances.
 *  2. Gameplay Audio & Clean Transition:
 *     - Smoothly fades down / transitions to subtle ambient presence upon entering active gameplay.
 *     - Full tactile feedback for slingshot mechanics: bird grabbing/picking, dynamic elastic tension
 *       creaks and rising harmonic tension while pulling, release snap, and fast launch whoosh/swish.
 *     - Aerodynamic in-flight air movement smoothly tracking projectile speed.
 *  3. Material-Specific Physical Destruction & Layering:
 *     - Distinct physical acoustics for WOOD (splintering, snappy timber cracks, hollow resonance),
 *       STONE (concussive mineral cleavage, crumbling masonry, gritty friction), GLASS (sharp fracture,
 *       staggered cascading crystalline shards), and METAL (industrial buckle, resonant plate modes).
 *     - Multiple randomized sound variations per material with subtle pitch/volume/micro-timing jitter.
 *     - Voice-limiting, priority concurrency, and dynamic structural collapse merging so chain reactions
 *       sound like cohesive physical events rather than audio clutter.
 *  4. Complete 5-Phase TNT Audio Sequence:
 *     - Fuse ignition spark -> rapid fuse burning sizzle -> punchy mid-bass concussive blast ->
 *       tumbling debris scatter -> environmental reverb tail.
 *     - Automatic dynamic audio ducking of BGM and SFX to deliver powerful perceived impact without clipping.
 *  5. Subtle, Polished UI Sounds:
 *     - Non-intrusive organic taps, smooth rising menu opens, soft dismissals, bouncy stage clicks,
 *       sparkling unlock fanfares, and metallic bounty chimes.
 *  6. Device & Browser Optimization:
 *     - Built-in DynamicsCompressorNode on master bus prevents digital clipping on mobile speakers.
 *     - Low-frequency management calibrated for mobile phone speakers, laptop speakers, and headphones.
 *     - Unified autoplay unlock and background tab lifecycle management.
 */

export class AudioManager {
  constructor(storage) {
    this.storage = storage;
    this.ctx = null;

    // Master Node Graph
    this.masterCompressor = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.sfxDuckingGain = null;
    this.bgmGain = null;
    this.bgmDuckingGain = null;
    this.bgmFadeGain = null;
    this.ambienceGain = null;

    // Atmospheric Reverb & Delay Bus (synthesized multi-tap spatial delay)
    this.delayNodeL = null;
    this.delayNodeR = null;
    this.delayFeedbackGain = null;

    // Background Music (BGM) State - 112 BPM, 16 bars (256 sixteenth-note steps, 34.28s loop)
    this.bgmLookaheadTimer = null;
    this.bgmStep = 0;
    this.bgmNextStepTime = 0;
    this.isBgmPlaying = false;
    this.isPlayingGameplay = false;

    // Dynamic Slingshot Pull Continuous Tension Synth
    this.pullOsc = null;
    this.pullGain = null;
    this.pullFilter = null;
    this.lastPullRatio = 0;
    this.lastPullTickTime = 0;

    // In-Flight Aerodynamic Wind Loop
    this.flightNoiseSrc = null;
    this.flightFilter = null;
    this.flightGain = null;
    this.isFlightSoundActive = false;

    // Destruction Concurrency & Voice Limiter
    this.activeBreakVoices = 0;
    this.maxConcurrentBreaks = 4;
    this.lastBreakTime = 0;
    this.recentBreakCountInWindow = 0;

    // Reusable Pre-computed Pink Noise Buffer for realistic physical textures
    this.pinkNoiseBuffer = null;

    // Volume & Mute State
    this.isMuted = !this.storage.isSoundEnabled();
    this.sfxVol = this.storage.getSfxVolume();
    this.bgmVol = this.storage.getBgmVolume();

    // Auto-unlock Web Audio on first user interaction
    this.setupAutoplayUnlock();

    // Background tab throttling & safety
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.ctx && this.ctx.state === 'running') {
          this.ctx.suspend().catch(() => {});
        }
      } else {
        if (this.ctx && this.ctx.state === 'suspended' && !this.isMuted) {
          this.ctx.resume().catch(() => {});
        }
      }
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * AUDIO CONTEXT & NODE GRAPH INITIALIZATION
   * ═════════════════════════════════════════════════════════════ */

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initNodeGraph();
        this.generatePinkNoiseBuffer();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended' && !this.isMuted) {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  initNodeGraph() {
    if (!this.ctx || this.masterCompressor) return;

    // 1. Master Dynamics Compressor: Guarantees zero digital distortion or clipping
    //    across mobile speakers, cheap laptops, and headphones.
    this.masterCompressor = this.ctx.createDynamicsCompressor();
    this.masterCompressor.threshold.setValueAtTime(-5.0, this.ctx.currentTime);
    this.masterCompressor.knee.setValueAtTime(10.0, this.ctx.currentTime);
    this.masterCompressor.ratio.setValueAtTime(4.0, this.ctx.currentTime);
    this.masterCompressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
    this.masterCompressor.release.setValueAtTime(0.22, this.ctx.currentTime);
    this.masterCompressor.connect(this.ctx.destination);

    // 2. Master Gain Bus (controlled by global mute toggle)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0 : 1.0, this.ctx.currentTime);
    this.masterGain.connect(this.masterCompressor);

    // 3. SFX Bus with Dedicated Dynamic Ducking Node
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.setValueAtTime(this.sfxVol, this.ctx.currentTime);
    this.sfxGain.connect(this.masterGain);

    this.sfxDuckingGain = this.ctx.createGain();
    this.sfxDuckingGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.sfxDuckingGain.connect(this.sfxGain);

    // 4. Ambience Bus (for subtle flight rushes & atmospheric texture)
    this.ambienceGain = this.ctx.createGain();
    this.ambienceGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
    this.ambienceGain.connect(this.sfxGain);

    // 5. BGM Bus with Ducking and Smooth Screen Fade Gains
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(this.bgmVol, this.ctx.currentTime);
    this.bgmGain.connect(this.masterGain);

    this.bgmDuckingGain = this.ctx.createGain();
    this.bgmDuckingGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.bgmDuckingGain.connect(this.bgmGain);

    this.bgmFadeGain = this.ctx.createGain();
    this.bgmFadeGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.bgmFadeGain.connect(this.bgmDuckingGain);

    // 6. Spatial Atmosphere Delay Line (warm stereo acoustic space for BGM)
    try {
      this.delayNodeL = this.ctx.createDelay(1.0);
      this.delayNodeL.delayTime.setValueAtTime(0.185, this.ctx.currentTime);

      this.delayNodeR = this.ctx.createDelay(1.0);
      this.delayNodeR.delayTime.setValueAtTime(0.245, this.ctx.currentTime);

      const delayFilter = this.ctx.createBiquadFilter();
      delayFilter.type = 'lowpass';
      delayFilter.frequency.setValueAtTime(1800, this.ctx.currentTime);

      this.delayFeedbackGain = this.ctx.createGain();
      this.delayFeedbackGain.gain.setValueAtTime(0.22, this.ctx.currentTime);

      this.delayNodeL.connect(delayFilter);
      this.delayNodeR.connect(delayFilter);
      delayFilter.connect(this.delayFeedbackGain);
      this.delayFeedbackGain.connect(this.delayNodeL);
      this.delayFeedbackGain.connect(this.delayNodeR);

      // Mix wet delay subtly into BGM bus
      const delayWetGain = this.ctx.createGain();
      delayWetGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      delayFilter.connect(delayWetGain);
      delayWetGain.connect(this.bgmFadeGain);
    } catch {
      // Graceful fallback if delay creation fails on legacy browser
    }
  }

  generatePinkNoiseBuffer() {
    if (!this.ctx || this.pinkNoiseBuffer) return;
    const bufferSize = this.ctx.sampleRate * 2.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }
    this.pinkNoiseBuffer = buffer;
  }

  setupAutoplayUnlock() {
    const unlock = () => {
      this.ensureContext();
      if (this.ctx) {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(() => {
            if (!this.isPlayingGameplay) {
              this.startBGM(0.4);
            }
          }).catch(() => {});
        } else if (!this.isPlayingGameplay) {
          this.startBGM(0.4);
        }
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
  }

  /* ═════════════════════════════════════════════════════════════
   * VOLUME, MUTE & DUCKING CONTROLS
   * ═════════════════════════════════════════════════════════════ */

  setMuted(muted) {
    this.isMuted = Boolean(muted);
    this.storage.setSoundEnabled(!this.isMuted);

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0 : 1.0, now);
    }

    if (!this.isMuted && !this.isBgmPlaying && !this.isPlayingGameplay) {
      this.startBGM(0.4);
    }
    return !this.isMuted;
  }

  toggleMute() {
    return this.setMuted(!this.isMuted);
  }

  setSFXVolume(val) {
    this.sfxVol = Math.max(0, Math.min(1, Number(val) || 0));
    this.storage.setSfxVolume(this.sfxVol);
    if (this.ctx && this.sfxGain) {
      const now = this.ctx.currentTime;
      this.sfxGain.gain.cancelScheduledValues(now);
      this.sfxGain.gain.linearRampToValueAtTime(this.sfxVol, now + 0.05);
    }
  }

  setBGMVolume(val) {
    this.bgmVol = Math.max(0, Math.min(1, Number(val) || 0));
    this.storage.setBgmVolume(this.bgmVol);
    if (this.ctx && this.bgmGain) {
      const now = this.ctx.currentTime;
      this.bgmGain.gain.cancelScheduledValues(now);
      this.bgmGain.gain.linearRampToValueAtTime(this.bgmVol, now + 0.05);
    }
  }

  /**
   * Smooth dynamic ducking for major physical events (e.g. TNT explosions, structural collapses).
   * Briefly attenuates background music and SFX buses, then smoothly restores full volume.
   */
  duck(duckLevel = 0.32, holdTime = 0.16, recoverTime = 0.45) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.bgmDuckingGain) {
      this.bgmDuckingGain.gain.cancelScheduledValues(now);
      this.bgmDuckingGain.gain.setValueAtTime(this.bgmDuckingGain.gain.value, now);
      this.bgmDuckingGain.gain.linearRampToValueAtTime(duckLevel, now + 0.025);
      this.bgmDuckingGain.gain.setValueAtTime(duckLevel, now + holdTime);
      this.bgmDuckingGain.gain.linearRampToValueAtTime(1.0, now + holdTime + recoverTime);
    }

    if (this.sfxDuckingGain) {
      this.sfxDuckingGain.gain.cancelScheduledValues(now);
      this.sfxDuckingGain.gain.setValueAtTime(this.sfxDuckingGain.gain.value, now);
      this.sfxDuckingGain.gain.linearRampToValueAtTime(0.75, now + 0.02);
      this.sfxDuckingGain.gain.setValueAtTime(0.75, now + holdTime);
      this.sfxDuckingGain.gain.linearRampToValueAtTime(1.0, now + holdTime + recoverTime * 0.7);
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * 1. CONTINUOUS INTERFACE BACKGROUND MUSIC (BGM)
   * Beautiful, calm, playful, atmospheric, and immersive soundtrack.
   * Plays seamlessly across ALL non-gameplay screens without restarting!
   * ═════════════════════════════════════════════════════════════ */

  enterGameplay() {
    this.isPlayingGameplay = true;
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'always') {
      // In "always" mode, smoothly duck BGM to 20% so gameplay SFX are crystal clear
      if (this.ctx && this.bgmFadeGain) {
        const now = this.ctx.currentTime;
        this.bgmFadeGain.gain.cancelScheduledValues(now);
        this.bgmFadeGain.gain.linearRampToValueAtTime(0.22, now + 0.4);
      }
      if (!this.isBgmPlaying && !this.isMuted) {
        this.startBGM(0.4);
      }
    } else {
      // Default: clean, smooth 0.35s fade down to silence during active stage
      this.stopBGM(0.35);
    }
  }

  enterMenu() {
    this.isPlayingGameplay = false;
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'off' || this.isMuted) {
      this.stopBGM(0.2);
    } else {
      // Restore full BGM volume smoothly without restarting track position
      if (this.isBgmPlaying && this.bgmFadeGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.bgmFadeGain.gain.cancelScheduledValues(now);
        this.bgmFadeGain.gain.linearRampToValueAtTime(1.0, now + 0.35);
      } else {
        this.startBGM(0.4);
      }
    }
  }

  setBgmMode(mode) {
    if (this.storage) {
      this.storage.setBgmMode(mode);
    }
    if (mode === 'off') {
      this.stopBGM(0.2);
    } else if (mode === 'dashboard') {
      if (this.isPlayingGameplay) {
        this.stopBGM(0.2);
      } else {
        this.startBGM(0.4);
      }
    } else if (mode === 'always') {
      if (this.isPlayingGameplay && this.bgmFadeGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.bgmFadeGain.gain.linearRampToValueAtTime(0.22, now + 0.3);
      }
      this.startBGM(0.4);
    }
  }

  /**
   * Starts the continuous, seamless 16-bar interface BGM.
   * If already playing, maintains playback position across navigation!
   */
  startBGM(fadeDuration = 0.4) {
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'off' || this.isMuted) return;
    if (mode === 'dashboard' && this.isPlayingGameplay) return;

    const ctx = this.ensureContext();
    if (!ctx) return;

    const targetGain = (this.isPlayingGameplay && mode === 'always') ? 0.22 : 1.0;

    if (this.isBgmPlaying) {
      // Already running: smoothly ramp fade gain if needed
      if (this.bgmFadeGain) {
        const now = ctx.currentTime;
        this.bgmFadeGain.gain.cancelScheduledValues(now);
        this.bgmFadeGain.gain.linearRampToValueAtTime(targetGain, now + fadeDuration);
      }
      return;
    }

    this.isBgmPlaying = true;

    if (this.bgmFadeGain) {
      const now = ctx.currentTime;
      this.bgmFadeGain.gain.cancelScheduledValues(now);
      this.bgmFadeGain.gain.setValueAtTime(0.0001, now);
      this.bgmFadeGain.gain.linearRampToValueAtTime(targetGain, now + fadeDuration);
    }

    // 112 BPM: 0.5357s per beat, 0.1339s per 16th-note step
    const stepDuration = 0.1339;
    const scheduleAheadTime = 0.220; // 220ms lookahead window
    this.bgmNextStepTime = ctx.currentTime + 0.05;

    const runScheduler = () => {
      const currentMode = this.storage?.getBgmMode?.() || 'dashboard';
      if (!this.isBgmPlaying || !this.ctx || this.isMuted) return;
      if (currentMode === 'off') {
        this.stopBGM(0.2);
        return;
      }
      if (currentMode === 'dashboard' && this.isPlayingGameplay) {
        this.stopBGM(0.2);
        return;
      }

      // Tab throttling / sleep safety: advance clock cleanly if lagged
      if (this.bgmNextStepTime < this.ctx.currentTime) {
        this.bgmNextStepTime = this.ctx.currentTime + 0.04;
      }
      while (this.bgmNextStepTime < this.ctx.currentTime + scheduleAheadTime) {
        this._scheduleBgmStep(this.bgmStep, this.bgmNextStepTime, stepDuration);
        this.bgmNextStepTime += stepDuration;
        this.bgmStep = (this.bgmStep + 1) % 256; // 16 bars * 16 steps = 256 steps (34.28s)
      }
    };

    runScheduler();
    this.bgmLookaheadTimer = setInterval(runScheduler, 35);
  }

  stopBGM(fadeDuration = 0.2) {
    this.isBgmPlaying = false;
    if (this.bgmLookaheadTimer) {
      clearInterval(this.bgmLookaheadTimer);
      this.bgmLookaheadTimer = null;
    }

    if (this.ctx && this.bgmFadeGain) {
      const now = this.ctx.currentTime;
      this.bgmFadeGain.gain.cancelScheduledValues(now);
      this.bgmFadeGain.gain.linearRampToValueAtTime(0.0001, now + fadeDuration);
    }
  }

  /**
   * Internal high-fidelity step synthesizer for the 34.28-Second BGM Loop.
   * Features 16 bars of charming, calm, playful casual game orchestration:
   *  - Warm marimba/kalimba wooden mallets
   *  - Soft Rhodes chord swells
   *  - Sparkly celesta/bell counterpoints
   *  - Bouncy acoustic upright bass
   *  - Gentle organic shaker & woodblock groove
   */
  _scheduleBgmStep(step, time, stepDuration) {
    if (!this.ctx || !this.bgmFadeGain) return;

    const bar = Math.floor(step / 16); // 0 to 15
    const stepInBar = step % 16;       // 0 to 15

    // 16-Bar Harmonic Progression (Key: C Major with modal touches)
    const BARS = [
      // Section A: Joyful, calm, sunny intro (Bars 0-3)
      { root: 130.81, chord: [329.63, 392.00, 493.88] },         // Bar 0: Cmaj7
      { root: 123.47, chord: [293.66, 392.00, 659.25] },         // Bar 1: G6/B
      { root: 110.00, chord: [261.63, 329.63, 392.00] },         // Bar 2: Am7
      { root: 82.41,  chord: [246.94, 329.63, 392.00] },         // Bar 3: Em7
      // Section A2: Playful expansion (Bars 4-7)
      { root: 87.31,  chord: [220.00, 261.63, 329.63, 392.00] }, // Bar 4: Fmaj7
      { root: 82.41,  chord: [196.00, 261.63, 329.63] },         // Bar 5: C/E
      { root: 73.42,  chord: [174.61, 220.00, 261.63] },         // Bar 6: Dm7
      { root: 98.00,  chord: [196.00, 261.63, 293.66, 349.23] }, // Bar 7: G7sus4
      // Section B: Melodic lift & whimsical exploration (Bars 8-11)
      { root: 130.81, chord: [329.63, 392.00, 493.88, 587.33] }, // Bar 8: Cmaj9
      { root: 103.83, chord: [329.63, 415.30, 493.88, 587.33] }, // Bar 9: E7/G#
      { root: 110.00, chord: [261.63, 329.63, 392.00, 493.88] }, // Bar 10: Am9
      { root: 73.42,  chord: [220.00, 277.18, 329.63, 392.00] }, // Bar 11: D7
      // Section C: Atmospheric resolution & turnaround (Bars 12-15)
      { root: 87.31,  chord: [220.00, 261.63, 329.63, 392.00] }, // Bar 12: Fmaj7
      { root: 82.41,  chord: [196.00, 246.94, 293.66, 392.00] }, // Bar 13: Em7
      { root: 73.42,  chord: [174.61, 220.00, 261.63, 329.63] }, // Bar 14: Dm7
      { root: 98.00,  chord: [174.61, 246.94, 293.66, 392.00] }  // Bar 15: G7sus4 (seamless loop into Bar 0)
    ];
    const barData = BARS[bar] || BARS[0];

    // ── 1. GENTLE ORGANIC PERCUSSION (Shaker, Woodblock & Round Tap) ──
    let playKick = false;
    let playWoodblock = false;
    let playShaker = false;
    let shakerAccent = false;

    if (bar <= 3) {
      // Intro: gentle kick tap on beat 1 & 3, soft shaker on 8ths
      if (stepInBar === 0 || stepInBar === 8) playKick = true;
      if (stepInBar % 2 === 0) playShaker = true;
      if (stepInBar === 4 || stepInBar === 12) playWoodblock = true;
    } else {
      // Main groove: playful bounce
      if (stepInBar === 0 || stepInBar === 8 || (bar % 2 === 1 && stepInBar === 14)) playKick = true;
      if (stepInBar === 4 || stepInBar === 12) playWoodblock = true;
      playShaker = true;
      if (stepInBar % 4 === 2) shakerAccent = true;
    }

    if (playKick) {
      this._playSoftPercussion('kick', time, bar <= 3 ? 0.038 : 0.045);
    }
    if (playWoodblock) {
      this._playSoftPercussion('woodblock', time, 0.022);
    }
    if (playShaker) {
      this._playSoftPercussion('shaker', time, shakerAccent ? 0.016 : 0.009);
    }

    // ── 2. BOUNCY ACOUSTIC UPRIGHT BASS ──────────────────────────
    let playBass = false;
    let bassFreq = barData.root;

    if (bar <= 3) {
      if (stepInBar === 0 || stepInBar === 6 || stepInBar === 8 || stepInBar === 14) {
        playBass = true;
        bassFreq = (stepInBar === 6 || stepInBar === 14) ? barData.root * 1.5 : barData.root;
      }
    } else {
      const bassSteps = [0, 4, 6, 8, 12, 14];
      if (bassSteps.includes(stepInBar)) {
        playBass = true;
        bassFreq = (stepInBar === 6 || stepInBar === 14) ? barData.root * 1.5 : barData.root;
      }
    }

    if (playBass) {
      this._playAcousticBass(bassFreq, time, 0.18, 0.038);
    }

    // ── 3. WARM RHODES CHORD SWELLS ──────────────────────────────
    if (stepInBar === 4 || stepInBar === 12) {
      this._playRhodesChord(barData.chord, time, 0.32, 0.011);
    }

    // ── 4. CHARMING MARIMBA LEAD MELODY ──────────────────────────
    // 256-step composed melody (Key of C / Pentatonic / Lydian)
    const MARIMBA_MELODY = {
      // Bar 0 (Cmaj7)
      0:   523.25, // C5
      4:   659.25, // E5
      8:   783.99, // G5
      12:  659.25, // E5
      // Bar 1 (G6/B)
      16:  587.33, // D5
      20:  493.88, // B4
      24:  587.33, // D5
      28:  783.99, // G5
      // Bar 2 (Am7)
      32:  880.00, // A5
      36:  783.99, // G5
      40:  659.25, // E5
      44:  523.25, // C5
      // Bar 3 (Em7)
      48:  587.33, // D5
      52:  493.88, // B4
      56:  392.00, // G4
      60:  440.00, // A4
      // Bar 4 (Fmaj7) - Playful variation
      64:  523.25, // C5
      68:  659.25, // E5
      72:  698.46, // F5
      76:  783.99, // G5
      // Bar 5 (C/E)
      80:  880.00, // A5
      84:  783.99, // G5
      88:  659.25, // E5
      92:  523.25, // C5
      // Bar 6 (Dm7)
      96:  587.33, // D5
      100: 659.25, // E5
      104: 587.33, // D5
      108: 493.88, // B4
      // Bar 7 (G7sus4)
      112: 523.25, // C5
      116: 587.33, // D5
      120: 392.00, // G4
      // Bar 8 (Cmaj9) - Section B High Register
      128: 1046.50,// C6 (Bright playful peak!)
      132: 987.77, // B5
      136: 783.99, // G5
      140: 880.00, // A5
      // Bar 9 (E7/G#)
      144: 987.77, // B5
      148: 830.61, // G#5
      152: 659.25, // E5
      156: 783.99, // G5
      // Bar 10 (Am9)
      160: 880.00, // A5
      164: 783.99, // G5
      168: 659.25, // E5
      172: 587.33, // D5
      // Bar 11 (D7)
      176: 739.99, // F#5
      180: 880.00, // A5
      184: 783.99, // G5
      188: 659.25, // E5
      // Bar 12 (Fmaj7) - Resolution
      192: 698.46, // F5
      196: 659.25, // E5
      200: 587.33, // D5
      204: 523.25, // C5
      // Bar 13 (Em7)
      208: 659.25, // E5
      212: 587.33, // D5
      216: 493.88, // B4
      220: 392.00, // G4
      // Bar 14 (Dm7)
      224: 440.00, // A4
      228: 523.25, // C5
      232: 587.33, // D5
      236: 659.25, // E5
      // Bar 15 (G7sus4) - Seamless turnaround
      240: 783.99, // G5
      244: 659.25, // E5
      248: 587.33, // D5
      252: 493.88  // B4 (smoothly leads into C5 at step 0)
    };

    const marimbaNote = MARIMBA_MELODY[step];
    if (marimbaNote) {
      this._playMarimbaNote(marimbaNote, time, 0.24, 0.034);
    }

    // ── 5. SPARKLY CELESTA / BELL COUNTERPOINTS (Bars 4-12) ─────
    if (bar >= 4 && bar <= 11) {
      const CELESTA_NOTES = {
        66: 1046.50, 74: 1318.51, 82: 1174.66, 90: 1046.50,
        130: 1318.51, 138: 1567.98, 146: 1318.51, 154: 1174.66,
        162: 1046.50, 170: 1174.66, 178: 1318.51, 186: 1567.98
      };
      const bellNote = CELESTA_NOTES[step];
      if (bellNote) {
        this._playBellNote(bellNote, time, 0.4, 0.018);
      }
    }
  }

  _playMarimbaNote(freq, time, duration, vol) {
    // 1. Fundamental warm acoustic body
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, time);

    // 2. Soft wooden overtone (tuned slightly sharp to emulate real rosewood bar)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 3.01, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1900, time);
    filter.frequency.exponentialRampToValueAtTime(700, time + duration);

    gain1.gain.setValueAtTime(0.0001, time);
    gain1.gain.linearRampToValueAtTime(vol, time + 0.006);
    gain1.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    gain2.gain.setValueAtTime(0.0001, time);
    gain2.gain.linearRampToValueAtTime(vol * 0.35, time + 0.004);
    gain2.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.45);

    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(filter);
    gain2.connect(filter);
    filter.connect(this.bgmFadeGain);

    if (this.delayNodeL) {
      filter.connect(this.delayNodeL);
    }

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration + 0.02);
    osc2.stop(time + duration + 0.02);
  }

  _playBellNote(freq, time, duration, vol) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmFadeGain);

    if (this.delayNodeR) {
      gain.connect(this.delayNodeR);
    }

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  _playRhodesChord(chordNotes, time, duration, vol) {
    chordNotes.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(850, time);

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(vol, time + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmFadeGain);

      osc.start(time);
      osc.stop(time + duration + 0.02);
    });
  }

  _playAcousticBass(freq, time, duration, vol) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmFadeGain);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  _playSoftPercussion(type, time, vol) {
    if (type === 'kick') {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(90, time);
      osc.frequency.exponentialRampToValueAtTime(42, time + 0.08);

      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.085);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.09);
    } else if (type === 'woodblock') {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(740, time);
      osc.frequency.exponentialRampToValueAtTime(280, time + 0.025);

      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.03);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.035);
    } else if (type === 'shaker' && this.pinkNoiseBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.pinkNoiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(3900, time);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.035);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmFadeGain);

      src.start(time);
      src.stop(time + 0.04);
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * 2. SLINGSHOT MECHANICS & GAMEPLAY AUDIO
   *  - Bird grabbing/pulling
   *  - Elastic/stretch tension while pulling
   *  - Bird release
   *  - Fast launch whoosh/swish
   *  - Subtle in-flight air movement
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Tactile organic pop/chirp when player grabs/touches the bird in the slingshot.
   */
  playBirdGrab() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    // Cheerful, friendly rubber touch / chirp
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(820, now + 0.035);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.055);
  }

  /**
   * Dynamic elastic tension audio while pulling back the slingshot.
   * Generates micro-friction latex creaks and subtle harmonic tension as pull ratio scales from 0 to 1.
   */
  updateSlingshotPull(ratio = 0) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const clampedRatio = Math.max(0, Math.min(1.0, ratio));

    // 1. Maintain continuous subtle rubber tension tone
    if (!this.pullOsc) {
      this.pullOsc = ctx.createOscillator();
      this.pullFilter = ctx.createBiquadFilter();
      this.pullGain = ctx.createGain();

      this.pullOsc.type = 'triangle';
      this.pullFilter.type = 'bandpass';
      this.pullFilter.Q.setValueAtTime(3.2, now);

      this.pullGain.gain.setValueAtTime(0.0001, now);

      this.pullOsc.connect(this.pullFilter);
      this.pullFilter.connect(this.pullGain);
      this.pullGain.connect(this.sfxDuckingGain);
      this.pullOsc.start(now);
    }

    // Dynamic pitch and cutoff rising with elastic stretch
    const targetFreq = 160 + clampedRatio * 240;
    this.pullOsc.frequency.linearRampToValueAtTime(targetFreq, now + 0.04);
    this.pullFilter.frequency.linearRampToValueAtTime(targetFreq * 1.5, now + 0.04);

    const targetGain = clampedRatio > 0.08 ? (0.015 + clampedRatio * 0.045) : 0.0001;
    this.pullGain.gain.linearRampToValueAtTime(targetGain, now + 0.04);

    // 2. Micro-friction latex creak ticks as pull displacement changes
    const pullDelta = Math.abs(clampedRatio - this.lastPullRatio);
    if (pullDelta > 0.06 && (now - this.lastPullTickTime > 0.075)) {
      this.lastPullTickTime = now;
      this.lastPullRatio = clampedRatio;

      const click = ctx.createOscillator();
      const cGain = ctx.createGain();
      click.type = 'triangle';
      click.frequency.setValueAtTime(920 + Math.random() * 400, now);
      click.frequency.exponentialRampToValueAtTime(350, now + 0.012);

      cGain.gain.setValueAtTime(0.028 * clampedRatio, now);
      cGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      click.connect(cGain);
      cGain.connect(this.sfxDuckingGain);
      click.start(now);
      click.stop(now + 0.02);
    }
  }

  /**
   * Safely silences the continuous tension tone when slingshot is released or cancelled.
   */
  stopSlingshotPull() {
    if (this.pullGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.pullGain.gain.cancelScheduledValues(now);
      this.pullGain.gain.linearRampToValueAtTime(0.0001, now + 0.03);
    }
    if (this.pullOsc) {
      try {
        this.pullOsc.stop(this.ctx.currentTime + 0.035);
      } catch {}
      this.pullOsc = null;
      this.pullGain = null;
      this.pullFilter = null;
    }
    this.lastPullRatio = 0;
  }

  /**
   * Soft rubber snap-back when the player lets go without launching (< minPullDistance).
   */
  playSlingshotCancel() {
    this.stopSlingshotPull();
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  /**
   * Classic Angry Birds style launch snap ("fwip-thwack!"):
   *  - Sharp high-tension rubber band whip-crack snap
   *  - Kinetic pouch pop & release thud
   *  - Fast launch aerodynamic whoosh/swish
   */
  playLaunch(power = 1.0) {
    this.stopSlingshotPull();
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const clampedPower = Math.min(1.4, Math.max(0.6, power));

    // 1. High-tension rubber band snap (the classic "thwack!" transient)
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'sawtooth';
    snapOsc.frequency.setValueAtTime(1450 * clampedPower, now);
    snapOsc.frequency.exponentialRampToValueAtTime(210, now + 0.034);

    snapGain.gain.setValueAtTime(0.26 * clampedPower, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.042);

    // 2. Leather pouch kinetic release thud
    const thumpOsc = ctx.createOscillator();
    const thumpGain = ctx.createGain();
    thumpOsc.type = 'sine';
    thumpOsc.frequency.setValueAtTime(160 * clampedPower, now);
    thumpOsc.frequency.exponentialRampToValueAtTime(42, now + 0.07);

    thumpGain.gain.setValueAtTime(0.28 * clampedPower, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    thumpOsc.connect(thumpGain);
    thumpGain.connect(this.sfxDuckingGain);
    thumpOsc.start(now);
    thumpOsc.stop(now + 0.085);

    // 3. Fast aerodynamic launch whoosh/swish
    if (this.pinkNoiseBuffer) {
      const noise = ctx.createBufferSource();
      noise.buffer = this.pinkNoiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1150 * clampedPower, now);
      filter.frequency.exponentialRampToValueAtTime(320, now + 0.11);
      filter.Q.setValueAtTime(2.4, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.22 * clampedPower, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.115);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.sfxDuckingGain);

      noise.start(now);
      noise.stop(now + 0.12);
    }
  }

  // Backward compatibility aliases
  updateSlingshotCharge(power) { this.updateSlingshotPull(power); }
  stopSlingshotCharge() { this.stopSlingshotPull(); }
  playStretch(ratio) { this.updateSlingshotPull(ratio); }

  /* ═════════════════════════════════════════════════════════════
   * IN-FLIGHT AERODYNAMIC AIR MOVEMENT
   * Subtle, clean rush tracking projectile speed without whistling.
   * ═════════════════════════════════════════════════════════════ */

  startFlightSound() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted || this.isFlightSoundActive || !this.pinkNoiseBuffer) return;
    this.isFlightSoundActive = true;
    const now = ctx.currentTime;

    this.flightNoiseSrc = ctx.createBufferSource();
    this.flightNoiseSrc.buffer = this.pinkNoiseBuffer;
    this.flightNoiseSrc.loop = true;

    this.flightFilter = ctx.createBiquadFilter();
    this.flightFilter.type = 'bandpass';
    this.flightFilter.frequency.setValueAtTime(800, now);
    this.flightFilter.Q.setValueAtTime(1.8, now);

    this.flightGain = ctx.createGain();
    this.flightGain.gain.setValueAtTime(0.0001, now);
    this.flightGain.gain.linearRampToValueAtTime(0.035, now + 0.08);

    this.flightNoiseSrc.connect(this.flightFilter);
    this.flightFilter.connect(this.flightGain);
    this.flightGain.connect(this.ambienceGain);

    this.flightNoiseSrc.start(now);
  }

  updateFlightSound(speed = 10) {
    if (!this.isFlightSoundActive || !this.flightFilter || !this.flightGain || !this.ctx) return;
    const now = this.ctx.currentTime;
    const normalizedSpeed = Math.min(2.5, Math.max(0.2, speed / 12));

    this.flightFilter.frequency.linearRampToValueAtTime(700 + normalizedSpeed * 450, now + 0.05);
    const targetGain = Math.min(0.065, 0.02 + normalizedSpeed * 0.025);
    this.flightGain.gain.linearRampToValueAtTime(targetGain, now + 0.05);
  }

  stopFlightSound() {
    if (!this.isFlightSoundActive) return;
    this.isFlightSoundActive = false;

    if (this.flightGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.flightGain.gain.cancelScheduledValues(now);
      this.flightGain.gain.linearRampToValueAtTime(0.0001, now + 0.06);
    }
    if (this.flightNoiseSrc) {
      try {
        this.flightNoiseSrc.stop(this.ctx.currentTime + 0.07);
      } catch {}
      this.flightNoiseSrc = null;
      this.flightFilter = null;
      this.flightGain = null;
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * 3. MATERIAL-SPECIFIC COLLISION & DESTRUCTION AUDIO
   * WOOD: Cracking, snapping, splintering, wooden debris.
   * STONE: Heavy impact, cracking, rock breaking, debris and dust.
   * GLASS: Sharp impact, shattering, multiple small cascading fragments.
   * METAL: Metallic impact, bending, buckling, plate resonance.
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Realistic material collision impact sound upon physical contact.
   */
  playMaterialImpact(material = 'wood', intensity = 1.0) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const vol = Math.min(0.32, Math.max(0.06, intensity * 0.22));

    // Randomize pitch by +/- 8% for natural variation
    const pitchJitter = 0.92 + Math.random() * 0.16;

    if (material === 'stone') {
      // 1. Sharp concussive cleavage transient
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.type = 'sawtooth';
      click.frequency.setValueAtTime(1350 * pitchJitter, now);
      click.frequency.exponentialRampToValueAtTime(320 * pitchJitter, now + 0.018);
      clickGain.gain.setValueAtTime(vol * 0.9, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
      click.connect(clickGain);
      clickGain.connect(this.sfxDuckingGain);
      click.start(now);
      click.stop(now + 0.025);

      // 2. Heavy granite mass body thud
      const body = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      body.type = 'triangle';
      body.frequency.setValueAtTime(68 * pitchJitter, now);
      body.frequency.exponentialRampToValueAtTime(26, now + 0.09);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, now);

      bodyGain.gain.setValueAtTime(vol, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);

      body.connect(filter);
      filter.connect(bodyGain);
      bodyGain.connect(this.sfxDuckingGain);
      body.start(now);
      body.stop(now + 0.1);

    } else if (material === 'metal') {
      // Metallic resonant clang
      [1450, 2200, 3100].forEach((baseFreq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(baseFreq * pitchJitter, now + idx * 0.003);
        gain.gain.setValueAtTime(vol * 0.8, now + idx * 0.003);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.003 + 0.07);
        osc.connect(gain);
        gain.connect(this.sfxDuckingGain);
        osc.start(now + idx * 0.003);
        osc.stop(now + idx * 0.003 + 0.075);
      });

    } else if (material === 'glass') {
      // Brittle crystal chip
      [2300, 3400].forEach((baseFreq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * pitchJitter, now + idx * 0.006);
        gain.gain.setValueAtTime(vol * 0.7, now + idx * 0.006);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.006 + 0.05);
        osc.connect(gain);
        gain.connect(this.sfxDuckingGain);
        osc.start(now + idx * 0.006);
        osc.stop(now + idx * 0.006 + 0.055);
      });

    } else if (material === 'ground') {
      // Earth / turf displacement
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(74 * pitchJitter, now);
      osc.frequency.exponentialRampToValueAtTime(26, now + 0.09);

      gain.gain.setValueAtTime(vol * 0.9, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(now);
      osc.stop(now + 0.11);

    } else {
      // Wood Structures: Solid timber knock upon impact
      const snap = ctx.createOscillator();
      const snapGain = ctx.createGain();
      snap.type = 'triangle';
      snap.frequency.setValueAtTime(850 * pitchJitter, now);
      snap.frequency.exponentialRampToValueAtTime(140, now + 0.02);
      snapGain.gain.setValueAtTime(vol * 0.85, now);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);
      snap.connect(snapGain);
      snapGain.connect(this.sfxDuckingGain);
      snap.start(now);
      snap.stop(now + 0.025);

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(215 * pitchJitter, now);
      osc1.frequency.exponentialRampToValueAtTime(65, now + 0.07);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(330 * pitchJitter, now);
      osc2.frequency.exponentialRampToValueAtTime(110, now + 0.05);

      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.09);
      osc2.stop(now + 0.09);
    }
  }

  playImpact(intensity = 1.0, material = 'wood') {
    this.playMaterialImpact(material, intensity);
  }

  /**
   * 4. REALISTIC DESTRUCTION AUDIO LAYERING & VOICE MANAGEMENT
   * When multiple blocks break rapidly:
   *  - Prioritizes audio and limits simultaneous voices to avoid distortion.
   *  - Staggers micro-timings (12-25ms) so debris cascades naturally.
   *  - Dynamic volume attenuation so 5 breaks don't blow out speakers.
   *  - Blends into cohesive physical structural collapse event.
   */
  playBlockBreak(type = 'wood', breakCount = 1) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;

    const now = ctx.currentTime;

    // Track rapid consecutive breaks to avoid audio clutter
    if (now - this.lastBreakTime < 0.25) {
      this.recentBreakCountInWindow++;
    } else {
      this.recentBreakCountInWindow = 1;
    }
    this.lastBreakTime = now;

    // Voice limiting: cap simultaneous individual destruction voices
    if (this.activeBreakVoices >= this.maxConcurrentBreaks) {
      // If voice limit exceeded, trigger structural rumble instead of duplicate snap transients
      if (this.recentBreakCountInWindow >= 3) {
        this._playStructuralCollapseRumble(now, this.recentBreakCountInWindow);
      }
      return;
    }

    this.activeBreakVoices++;
    setTimeout(() => {
      this.activeBreakVoices = Math.max(0, this.activeBreakVoices - 1);
    }, 180);

    // Dynamic volume compression per voice: total energy remains balanced
    const countMult = Math.min(1.8, Math.max(0.65, 1.0 / Math.sqrt(Math.max(1, breakCount))));

    // Random micro-timing stagger for natural chain reaction cascade
    const staggerDelay = (breakCount > 1) ? Math.random() * 0.024 : 0;
    const playTime = now + staggerDelay;

    if (type === 'stone') {
      this._playStoneBreak(playTime, countMult);
    } else if (type === 'glass') {
      this._playGlassBreak(playTime, countMult);
    } else if (type === 'metal') {
      this._playMetalBreak(playTime, countMult);
    } else {
      this._playWoodBreak(playTime, countMult);
    }

    // Layer structural collapse rumble when multiple blocks break in sequence
    if (breakCount > 1 || this.recentBreakCountInWindow >= 3) {
      this._playStructuralCollapseRumble(playTime, Math.max(breakCount, this.recentBreakCountInWindow));
    }
  }

  _playWoodBreak(now, countMult) {
    const ctx = this.ctx;
    const pitchJitter = 0.90 + Math.random() * 0.20;

    // 1. High-energy structural timber snap
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(1050 * pitchJitter, now);
    snapOsc.frequency.exponentialRampToValueAtTime(140, now + 0.035);

    snapGain.gain.setValueAtTime(0.24 * countMult, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.05);

    // 2. Hollow acoustic timber resonance
    const woodOsc = ctx.createOscillator();
    const woodGain = ctx.createGain();
    woodOsc.type = 'triangle';
    woodOsc.frequency.setValueAtTime(210 * pitchJitter, now);
    woodOsc.frequency.exponentialRampToValueAtTime(55, now + 0.12);

    woodGain.gain.setValueAtTime(0.16 * countMult, now);
    woodGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

    woodOsc.connect(woodGain);
    woodGain.connect(this.sfxDuckingGain);
    woodOsc.start(now);
    woodOsc.stop(now + 0.14);

    // 3. Multi-stage splintering fiber bursts
    if (this.pinkNoiseBuffer) {
      [0.0, 0.010, 0.024, 0.042].forEach((offset, idx) => {
        const sSrc = ctx.createBufferSource();
        sSrc.buffer = this.pinkNoiseBuffer;

        const sFilter = ctx.createBiquadFilter();
        sFilter.type = 'bandpass';
        sFilter.frequency.setValueAtTime((800 + idx * 240) * pitchJitter, now + offset);
        sFilter.Q.setValueAtTime(2.8, now + offset);

        const sGain = ctx.createGain();
        sGain.gain.setValueAtTime(0.13 * countMult, now + offset);
        sGain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.055);

        sSrc.connect(sFilter);
        sFilter.connect(sGain);
        sGain.connect(this.sfxDuckingGain);

        sSrc.start(now + offset);
        sSrc.stop(now + offset + 0.065);
      });
    }
  }

  _playStoneBreak(now, countMult) {
    const ctx = this.ctx;
    const pitchJitter = 0.88 + Math.random() * 0.24;

    // 1. Concussive rock cleavage fracture
    const crackOsc = ctx.createOscillator();
    const crackGain = ctx.createGain();
    crackOsc.type = 'sawtooth';
    crackOsc.frequency.setValueAtTime(62 * pitchJitter, now);
    crackOsc.frequency.exponentialRampToValueAtTime(22, now + 0.22);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, now);
    filter.frequency.exponentialRampToValueAtTime(70, now + 0.2);

    crackGain.gain.setValueAtTime(0.24 * countMult, now);
    crackGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);

    crackOsc.connect(filter);
    filter.connect(crackGain);
    crackGain.connect(this.sfxDuckingGain);
    crackOsc.start(now);
    crackOsc.stop(now + 0.24);

    // 2. Gritty rock-on-rock tumbling crunch & debris
    if (this.pinkNoiseBuffer) {
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = this.pinkNoiseBuffer;

      const nFilter = ctx.createBiquadFilter();
      nFilter.type = 'bandpass';
      nFilter.frequency.setValueAtTime(260 * pitchJitter, now);
      nFilter.Q.setValueAtTime(1.4, now);

      const nGain = ctx.createGain();
      nGain.gain.setValueAtTime(0.22 * countMult, now);
      nGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

      noiseSrc.connect(nFilter);
      nFilter.connect(nGain);
      nGain.connect(this.sfxDuckingGain);
      noiseSrc.start(now);
      noiseSrc.stop(now + 0.3);
    }
  }

  _playGlassBreak(now, countMult) {
    const ctx = this.ctx;
    const pitchJitter = 0.94 + Math.random() * 0.12;

    // 1. Sharp initial crystal puncture
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'sine';
    snapOsc.frequency.setValueAtTime(3400 * pitchJitter, now);
    snapOsc.frequency.exponentialRampToValueAtTime(1200, now + 0.02);

    snapGain.gain.setValueAtTime(0.18 * countMult, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.03);

    // 2. Staggered cascade of multiple small crystal fragments (1800Hz - 4200Hz)
    const SHARD_FREQS = [2100, 2650, 3150, 3600, 4100, 2400];
    SHARD_FREQS.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const start = now + idx * 0.012 + Math.random() * 0.006;
      osc.frequency.setValueAtTime(freq * pitchJitter + (Math.random() - 0.5) * 80, start);

      gain.gain.setValueAtTime(0.09 * countMult, start);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.11);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(start);
      osc.stop(start + 0.12);
    });
  }

  _playMetalBreak(now, countMult) {
    const ctx = this.ctx;
    const pitchJitter = 0.92 + Math.random() * 0.16;

    // 1. Heavy industrial metal buckle & shear
    const buckleOsc = ctx.createOscillator();
    const buckleGain = ctx.createGain();
    buckleOsc.type = 'sawtooth';
    buckleOsc.frequency.setValueAtTime(440 * pitchJitter, now);
    buckleOsc.frequency.exponentialRampToValueAtTime(75, now + 0.16);

    buckleGain.gain.setValueAtTime(0.24 * countMult, now);
    buckleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    buckleOsc.connect(buckleGain);
    buckleGain.connect(this.sfxDuckingGain);
    buckleOsc.start(now);
    buckleOsc.stop(now + 0.19);

    // 2. Ringing plate modal resonance (inharmonic overtones)
    [1600, 2350, 3400].forEach((baseFreq, idx) => {
      const ring = ctx.createOscillator();
      const rGain = ctx.createGain();
      ring.type = 'triangle';
      ring.frequency.setValueAtTime(baseFreq * pitchJitter, now + idx * 0.008);

      rGain.gain.setValueAtTime(0.12 * countMult, now + idx * 0.008);
      rGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.008 + 0.18);

      ring.connect(rGain);
      rGain.connect(this.sfxDuckingGain);
      ring.start(now + idx * 0.008);
      ring.stop(now + idx * 0.008 + 0.19);
    });
  }

  _playStructuralCollapseRumble(now, breakCount) {
    const ctx = this.ctx;
    const rumbleOsc = ctx.createOscillator();
    const rumbleGain = ctx.createGain();
    rumbleOsc.type = 'sine';
    rumbleOsc.frequency.setValueAtTime(52, now);
    rumbleOsc.frequency.exponentialRampToValueAtTime(24, now + 0.42);

    const rumbleVol = Math.min(0.22, 0.09 + breakCount * 0.025);
    rumbleGain.gain.setValueAtTime(rumbleVol, now);
    rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.44);

    rumbleOsc.connect(rumbleGain);
    rumbleGain.connect(this.sfxDuckingGain);
    rumbleOsc.start(now);
    rumbleOsc.stop(now + 0.45);
  }

  /* ═════════════════════════════════════════════════════════════
   * 5. COMPLETE TNT AUDIO SEQUENCE
   * Complete 5-phase physical detonation:
   *  1. Fuse ignition spark
   *  2. Fuse burning/tension sizzle
   *  3. Punchy concussive blast (calibrated for mobile & PC)
   *  4. Debris cascade
   *  5. Environmental reverb tail
   * Synchronized precisely with the visual explosion!
   * ═════════════════════════════════════════════════════════════ */

  playTNTSequence() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    // Trigger smooth audio ducking so the explosion takes full cinematic focus
    this.duck(0.25, 0.18, 0.50);

    // ── Phase 1 & 2: Fuse Sizzle Transient (0 to 60ms) ──────────
    if (this.pinkNoiseBuffer) {
      const fuseSrc = ctx.createBufferSource();
      fuseSrc.buffer = this.pinkNoiseBuffer;

      const fuseFilter = ctx.createBiquadFilter();
      fuseFilter.type = 'bandpass';
      fuseFilter.frequency.setValueAtTime(3200, now);
      fuseFilter.Q.setValueAtTime(3.5, now);

      const fuseGain = ctx.createGain();
      fuseGain.gain.setValueAtTime(0.18, now);
      fuseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      fuseSrc.connect(fuseFilter);
      fuseFilter.connect(fuseGain);
      fuseGain.connect(this.sfxGain);
      fuseSrc.start(now);
      fuseSrc.stop(now + 0.065);
    }

    // ── Phase 3: Punchy Concussive Mid-Bass Blast (t + 0.02s) ────
    // Calibrated: Starts at 88Hz dropping to 34Hz.
    // Perfectly audible on phone/tablet/laptop speakers without sub-30Hz blown-out distortion!
    const blastTime = now + 0.015;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(88, blastTime);
    osc.frequency.exponentialRampToValueAtTime(32, blastTime + 0.45);

    gain.gain.setValueAtTime(0.38, blastTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.48);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(blastTime);
    osc.stop(blastTime + 0.5);

    // Plasma fireball wideband noise roar
    if (this.pinkNoiseBuffer) {
      const roarSrc = ctx.createBufferSource();
      roarSrc.buffer = this.pinkNoiseBuffer;

      const roarFilter = ctx.createBiquadFilter();
      roarFilter.type = 'lowpass';
      roarFilter.frequency.setValueAtTime(1100, blastTime);
      roarFilter.frequency.exponentialRampToValueAtTime(85, blastTime + 0.42);

      const roarGain = ctx.createGain();
      roarGain.gain.setValueAtTime(0.32, blastTime);
      roarGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.45);

      roarSrc.connect(roarFilter);
      roarFilter.connect(roarGain);
      roarGain.connect(this.sfxGain);
      roarSrc.start(blastTime);
      roarSrc.stop(blastTime + 0.48);
    }

    // Casing shrapnel crack transient
    const shrapnelOsc = ctx.createOscillator();
    const shrapnelGain = ctx.createGain();
    shrapnelOsc.type = 'sawtooth';
    shrapnelOsc.frequency.setValueAtTime(780, blastTime);
    shrapnelOsc.frequency.exponentialRampToValueAtTime(120, blastTime + 0.05);

    shrapnelGain.gain.setValueAtTime(0.24, blastTime);
    shrapnelGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.055);

    shrapnelOsc.connect(shrapnelGain);
    shrapnelGain.connect(this.sfxGain);
    shrapnelOsc.start(blastTime);
    shrapnelOsc.stop(blastTime + 0.06);

    // ── Phase 4: Secondary Debris Scattering (t + 0.12s to 0.45s) ─
    if (this.pinkNoiseBuffer) {
      [0.08, 0.16, 0.24].forEach((offset, idx) => {
        const dSrc = ctx.createBufferSource();
        dSrc.buffer = this.pinkNoiseBuffer;

        const dFilter = ctx.createBiquadFilter();
        dFilter.type = 'bandpass';
        dFilter.frequency.setValueAtTime(450 + idx * 280, blastTime + offset);
        dFilter.Q.setValueAtTime(2.2, blastTime + offset);

        const dGain = ctx.createGain();
        dGain.gain.setValueAtTime(0.14 - idx * 0.03, blastTime + offset);
        dGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + offset + 0.12);

        dSrc.connect(dFilter);
        dFilter.connect(dGain);
        dGain.connect(this.sfxGain);

        dSrc.start(blastTime + offset);
        dSrc.stop(blastTime + offset + 0.13);
      });
    }

    // ── Phase 5: Environmental Reverb Tail (t + 0.20s to 0.85s) ──
    const tailOsc = ctx.createOscillator();
    const tailGain = ctx.createGain();
    tailOsc.type = 'sine';
    tailOsc.frequency.setValueAtTime(48, blastTime + 0.1);
    tailOsc.frequency.exponentialRampToValueAtTime(22, blastTime + 0.65);

    tailGain.gain.setValueAtTime(0.12, blastTime + 0.1);
    tailGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.7);

    tailOsc.connect(tailGain);
    tailGain.connect(this.sfxGain);
    tailOsc.start(blastTime + 0.1);
    tailOsc.stop(blastTime + 0.72);
  }

  playExplosion() {
    this.playTNTSequence();
  }

  /* ═════════════════════════════════════════════════════════════
   * 6. TARGET DEFEAT, POWERS & VICTORY/DEFEAT
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Juicy, highly satisfying target defeat pop:
   *  - Snappy kinetic impact punch
   *  - Bubble pop pitch drop
   *  - Sparkling bounty star chime
   */
  playTargetPop() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    // 1. Punchy kinetic transient
    const snap = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snap.type = 'triangle';
    snap.frequency.setValueAtTime(780, now);
    snap.frequency.exponentialRampToValueAtTime(140, now + 0.03);

    snapGain.gain.setValueAtTime(0.26, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    snap.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snap.start(now);
    snap.stop(now + 0.04);

    // 2. Juicy bubble-pop body
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.13);

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.15);

    // 3. Sparkling reward chime
    const bell = ctx.createOscillator();
    const bGain = ctx.createGain();
    bell.type = 'sine';
    bell.frequency.setValueAtTime(1174.66, now + 0.02); // D6

    bGain.gain.setValueAtTime(0.12, now + 0.02);
    bGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    bell.connect(bGain);
    bGain.connect(this.sfxDuckingGain);
    bell.start(now + 0.02);
    bell.stop(now + 0.19);
  }

  /**
   * Special ability surge (Speedster boost / Heavy slam).
   */
  playBoost() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(740, now + 0.22);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.26);
  }

  /**
   * Sparkling crate / coin bounty collection.
   */
  playCoin() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    [987.77, 1318.51].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const noteTime = now + idx * 0.045;
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.14, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.19);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.21);
    });
  }

  /**
   * Celebratory Victory Fanfare with bright ascending chimes, triumphant bell chord, and sparkle.
   */
  playVictory() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    // Ascending arpeggio: C5 -> E5 -> G5 -> C6
    const chord = [523.25, 659.25, 783.99, 1046.50];
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const noteTime = now + idx * 0.09;
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(0.16, noteTime + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.65);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.70);
    });

    // Sustained celebratory bell shimmer
    setTimeout(() => {
      if (!this.ctx || this.isMuted) return;
      const cNow = this.ctx.currentTime;
      [1046.50, 1318.51, 1567.98].forEach((freq) => {
        const bell = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bell.type = 'sine';
        bell.frequency.setValueAtTime(freq, cNow);
        bGain.gain.setValueAtTime(0.09, cNow);
        bGain.gain.exponentialRampToValueAtTime(0.0001, cNow + 0.95);
        bell.connect(bGain);
        bGain.connect(this.sfxDuckingGain);
        bell.start(cNow);
        bell.stop(cNow + 1.0);
      });
    }, 420);
  }

  /**
   * Playful, gentle descending trombone defeat wobble ("wa-wa-waa").
   */
  playDefeat() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    [185.00, 164.81, 146.83, 130.81].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const noteTime = now + idx * 0.22;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, noteTime);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(0.11, noteTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.32);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.35);
    });
  }

  /**
   * Snappy rewind tape/swish sound for retrying a stage.
   */
  playRetry() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.06);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  playLevelUnlock() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    // Pleasant rising arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const noteTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.18, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.35);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.38);
    });
  }

  playCloudWhoosh() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted || !this.pinkNoiseBuffer) return;
    const now = ctx.currentTime;

    const src = ctx.createBufferSource();
    src.buffer = this.pinkNoiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(400, now + 1.2);
    filter.Q.setValueAtTime(2.6, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.25);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxDuckingGain);
    src.start(now);
    src.stop(now + 1.3);
  }

  playMarkerStep() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.07);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  /* ═════════════════════════════════════════════════════════════
   * 7. SUBTLE, POLISHED UI SOUNDS
   * Non-intrusive organic taps, smooth rising opens, soft dismissals,
   * bouncy stage selections, and unlocks.
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Crisp, subtle organic button click/tap.
   */
  playUiClick() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.018);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.025);
  }

  /**
   * Gentle, elegant rising chime for opening modal dialogs and menus.
   */
  playMenuOpen() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    [523.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const noteTime = now + idx * 0.045;
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(0.08, noteTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.14);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.15);
    });
  }

  /**
   * Soft, gentle descending tap for closing modal dialogs or going back.
   */
  playMenuClose() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.05);

    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  playMenuBack() {
    this.playMenuClose();
  }

  /**
   * Bouncy, cheerful stage selection bubble pop.
   */
  playLevelSelect() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(784, now + 0.06);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.10, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  /**
   * Sparkly reward chime for unlocking characters, zones, or items.
   */
  playUnlock() {
    this.playLevelUnlock();
  }

  playPurchase() {
    this.playCoin();
  }

  /**
   * Soft, muted wooden thud for locked stage or invalid action.
   */
  playError() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.07);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }
}
