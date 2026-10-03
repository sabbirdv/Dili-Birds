/**
 * Centralized, High-Fidelity & Immersive Web Audio System for Dili-Birds 3D.
 *
 * Requirements & Sound Engineering:
 *  1. Advanced, Joyful, & Highly Engaging Interface BGM:
 *     - Signature casual-physics game soundtrack (Angry Birds / Rayman / Mario / Bad Piggies style).
 *     - Multi-layered rich instrumental casual orchestration:
 *       * Bright, bouncy acoustic marimba & xylophone lead with playful double-strikes and trills
 *       * Joyful cartoon melodica/brass stabs on upbeat syncopations
 *       * Rhythmic acoustic ukulele/guitar percussive strumming ("chuk-a-chick, cha!")
 *       * Bouncy acoustic upright slap bass with walking chromatic lines and octave pops
 *       * Sparkling celesta & glockenspiel counter-melodies
 *       * Cheerful swinging acoustic percussion (round kick, crisp woodblock rim-clack, shakers, tambourine)
 *       * Calibrated stereo spatial depth and acoustic body
 *     - Full 16-bar, 30.48-second composition at 126 BPM with Intro, A-Section, A'-Variation,
 *       B-Lift, and seamless turnaround looping gaplessly without clicks or seams.
 *     - 2x Increased volume output with full presence, protected by DynamicsCompressorNode.
 *  2. Bulletproof Audio Lifecycle & Auto-Awaken:
 *     - Immediate audio awakening on ANY user interaction (click, touch, key, pointer) anywhere on screen.
 *     - Continuous playback across all non-gameplay pages (Dashboard, Roadmap, Profile, Leaderboard,
 *       Characters, Missions, Settings) without stopping or restarting.
 *     - Watchdog recovery preventing BGM from ever cutting off or becoming silent.
 *  3. Seamless Gameplay Transition:
 *     - Smoothly ducks or fades when entering active stage; resumes cleanly when returning or on level complete.
 *  4. Tactile Slingshot & Physics Audio:
 *     - Bird grabbing, dynamic elastic tension creaks, whip-crack snap, fast whoosh, aerodynamic in-flight sound.
 *     - 4 material destruction acoustics (Wood, Stone, Glass, Metal) with concurrency voice limiting.
 *     - Complete 5-phase TNT explosion sequence with dynamic ducking.
 *  5. Polished UI Sound Suite:
 *     - Organic button taps, rising menu opens, dismissals, bouncy stage clicks, reward fanfares.
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

    // Spatial Delay Line for Warmth & Stereo Width
    this.delayNodeL = null;
    this.delayNodeR = null;
    this.delayFeedbackGain = null;

    // Joyful 126 BPM BGM State (16 bars, 256 steps, 30.48s loop)
    this.bgmLookaheadTimer = null;
    this.bgmWatchdogTimer = null;
    this.bgmStep = 0;
    this.bgmNextStepTime = 0;
    this.isBgmPlaying = false;
    this.isPlayingGameplay = false;

    // Cartoon Slingshot Dynamic Rubber Stretch Synth State
    this.lastPullRatio = 0;
    this.lastPullTickTime = 0;

    // Cartoon Comical Slide Whistle Flight Synth
    this.flightOsc = null;
    this.flightOsc2 = null;
    this.flightLfo = null;
    this.flightLfoGain = null;
    this.flightTremolo = null;
    this.flightTremoloGain = null;
    this.flightGain = null;
    this.isFlightSoundActive = false;

    // Destruction Concurrency & Voice Limiter
    this.activeBreakVoices = 0;
    this.maxConcurrentBreaks = 4;
    this.lastBreakTime = 0;
    this.recentBreakCountInWindow = 0;

    // Pre-computed Pink Noise Buffer
    this.pinkNoiseBuffer = null;

    // Volume & Mute State (90% Default for both SFX and BGM, with 3x Sound Boost)
    this.isMuted = !this.storage.isSoundEnabled();
    const storedSfx = this.storage.getSfxVolume();
    this.sfxVol = typeof storedSfx === 'number' ? Math.max(0, Math.min(1.0, storedSfx)) : 0.90;
    const storedBgm = this.storage.getBgmVolume();
    this.bgmVol = typeof storedBgm === 'number' ? Math.max(0, Math.min(1.0, storedBgm)) : 0.90;

    // Autoplay Unlock on any user interaction
    this.setupAutoplayUnlock();

    // Background tab visibility listener
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.ctx && this.ctx.state === 'running') {
          this.ctx.suspend().catch(() => {});
        }
      } else {
        if (this.ctx && this.ctx.state === 'suspended' && !this.isMuted) {
          this.ctx.resume().then(() => {
            if (!this.isPlayingGameplay && !this.isBgmPlaying) {
              this.startBGM(0.3);
            }
          }).catch(() => {});
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
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  initNodeGraph() {
    if (!this.ctx || this.masterCompressor) return;

    // 1. Master Dynamics Compressor: Prevents clipping and provides punchy broadcast loudness
    this.masterCompressor = this.ctx.createDynamicsCompressor();
    this.masterCompressor.threshold.setValueAtTime(-5.0, this.ctx.currentTime);
    this.masterCompressor.knee.setValueAtTime(10.0, this.ctx.currentTime);
    this.masterCompressor.ratio.setValueAtTime(4.0, this.ctx.currentTime);
    this.masterCompressor.attack.setValueAtTime(0.002, this.ctx.currentTime);
    this.masterCompressor.release.setValueAtTime(0.14, this.ctx.currentTime);
    this.masterCompressor.connect(this.ctx.destination);

    // 2. Master Gain Bus
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0 : 1.25, this.ctx.currentTime);
    this.masterGain.connect(this.masterCompressor);

    // 3. SFX Bus (Elevated bus multiplier for true 3x punchy presence)
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.setValueAtTime(this.sfxVol * 1.5, this.ctx.currentTime);
    this.sfxGain.connect(this.masterGain);

    this.sfxDuckingGain = this.ctx.createGain();
    this.sfxDuckingGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.sfxDuckingGain.connect(this.sfxGain);

    // 4. Ambience Bus
    this.ambienceGain = this.ctx.createGain();
    this.ambienceGain.gain.setValueAtTime(0.95, this.ctx.currentTime);
    this.ambienceGain.connect(this.sfxGain);

    // 5. BGM Bus at 90% default
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(this.bgmVol, this.ctx.currentTime);
    this.bgmGain.connect(this.masterGain);

    this.bgmDuckingGain = this.ctx.createGain();
    this.bgmDuckingGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.bgmDuckingGain.connect(this.bgmGain);

    this.bgmFadeGain = this.ctx.createGain();
    this.bgmFadeGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.bgmFadeGain.connect(this.bgmDuckingGain);

    // 6. Stereo Acoustic Delay Space
    try {
      this.delayNodeL = this.ctx.createDelay(1.0);
      this.delayNodeL.delayTime.setValueAtTime(0.160, this.ctx.currentTime);

      this.delayNodeR = this.ctx.createDelay(1.0);
      this.delayNodeR.delayTime.setValueAtTime(0.238, this.ctx.currentTime);

      const delayFilter = this.ctx.createBiquadFilter();
      delayFilter.type = 'lowpass';
      delayFilter.frequency.setValueAtTime(2200, this.ctx.currentTime);

      this.delayFeedbackGain = this.ctx.createGain();
      this.delayFeedbackGain.gain.setValueAtTime(0.20, this.ctx.currentTime);

      this.delayNodeL.connect(delayFilter);
      this.delayNodeR.connect(delayFilter);
      delayFilter.connect(this.delayFeedbackGain);
      this.delayFeedbackGain.connect(this.delayNodeL);
      this.delayFeedbackGain.connect(this.delayNodeR);

      const delayWetGain = this.ctx.createGain();
      delayWetGain.gain.setValueAtTime(0.24, this.ctx.currentTime);
      delayFilter.connect(delayWetGain);
      delayWetGain.connect(this.bgmFadeGain);
    } catch {}
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

  /**
   * Universal, bulletproof audio unlocker:
   * Awaken audio on ANY interaction anywhere on the screen without waiting for menu click.
   */
  handleUserInteraction() {
    const ctx = this.ensureContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => {
        if (!this.isPlayingGameplay && !this.isBgmPlaying && !this.isMuted) {
          this.startBGM(0.3);
        }
      }).catch(() => {});
    } else if (!this.isPlayingGameplay && !this.isBgmPlaying && !this.isMuted) {
      this.startBGM(0.3);
    }
  }

  setupAutoplayUnlock() {
    const unlock = () => {
      this.handleUserInteraction();
      // Only remove once AudioContext is genuinely running and BGM is started
      if (this.ctx && this.ctx.state === 'running' && this.isBgmPlaying) {
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('touchstart', unlock);
        window.removeEventListener('click', unlock);
        window.removeEventListener('keydown', unlock);
      }
    };

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
  }

  /* ═════════════════════════════════════════════════════════════
   * VOLUME & MUTE CONTROLS
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
      this.startBGM(0.3);
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
      this.sfxGain.gain.setValueAtTime(this.sfxGain.gain.value, now);
      this.sfxGain.gain.linearRampToValueAtTime(this.sfxVol * 1.5, now + 0.05);
    }
  }

  setBGMVolume(val) {
    this.bgmVol = Math.max(0, Math.min(1, Number(val) || 0));
    this.storage.setBgmVolume(this.bgmVol);
    if (this.ctx && this.bgmGain) {
      const now = this.ctx.currentTime;
      this.bgmGain.gain.cancelScheduledValues(now);
      this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value, now);
      this.bgmGain.gain.linearRampToValueAtTime(this.bgmVol, now + 0.05);
    }
  }

  duck(duckLevel = 0.35, holdTime = 0.16, recoverTime = 0.45) {
    if (!this.ctx || !this.bgmDuckingGain) return;
    const now = this.ctx.currentTime;

    const curBgm = Math.max(0.1, this.bgmDuckingGain.gain.value);
    this.bgmDuckingGain.gain.cancelScheduledValues(now);
    this.bgmDuckingGain.gain.setValueAtTime(curBgm, now);
    this.bgmDuckingGain.gain.linearRampToValueAtTime(duckLevel, now + 0.03);
    this.bgmDuckingGain.gain.setValueAtTime(duckLevel, now + holdTime);
    this.bgmDuckingGain.gain.linearRampToValueAtTime(1.0, now + holdTime + recoverTime);

    if (this.sfxDuckingGain) {
      const curSfx = Math.max(0.1, this.sfxDuckingGain.gain.value);
      this.sfxDuckingGain.gain.cancelScheduledValues(now);
      this.sfxDuckingGain.gain.setValueAtTime(curSfx, now);
      this.sfxDuckingGain.gain.linearRampToValueAtTime(0.75, now + 0.02);
      this.sfxDuckingGain.gain.setValueAtTime(0.75, now + holdTime);
      this.sfxDuckingGain.gain.linearRampToValueAtTime(1.0, now + holdTime + recoverTime * 0.7);
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * 1. ADVANCED, JOYFUL & ENGAGING INSTRUMENTAL BGM
   * 126 BPM, 16 Bars (256 sixteenth-note steps, 30.48s loop)
   * ═════════════════════════════════════════════════════════════ */

  enterGameplay() {
    this.isPlayingGameplay = true;
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'always') {
      if (this.ctx && this.bgmFadeGain) {
        const now = this.ctx.currentTime;
        const cur = Math.max(0.0001, this.bgmFadeGain.gain.value);
        this.bgmFadeGain.gain.cancelScheduledValues(now);
        this.bgmFadeGain.gain.setValueAtTime(cur, now);
        this.bgmFadeGain.gain.linearRampToValueAtTime(0.25, now + 0.35);
      }
      if (!this.isBgmPlaying && !this.isMuted) {
        this.startBGM(0.35);
      }
    } else {
      this.stopBGM(0.3);
    }
  }

  enterMenu() {
    this.isPlayingGameplay = false;
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'off' || this.isMuted) {
      this.stopBGM(0.15);
    } else {
      if (this.isBgmPlaying && this.bgmFadeGain && this.ctx) {
        const now = this.ctx.currentTime;
        const cur = Math.max(0.0001, this.bgmFadeGain.gain.value);
        this.bgmFadeGain.gain.cancelScheduledValues(now);
        this.bgmFadeGain.gain.setValueAtTime(cur, now);
        this.bgmFadeGain.gain.linearRampToValueAtTime(1.0, now + 0.35);
      } else {
        this.startBGM(0.35);
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
        this.startBGM(0.35);
      }
    } else if (mode === 'always') {
      if (this.isPlayingGameplay && this.bgmFadeGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.bgmFadeGain.gain.linearRampToValueAtTime(0.25, now + 0.3);
      }
      this.startBGM(0.35);
    }
  }

  startBGM(fadeDuration = 0.35) {
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'off' || this.isMuted) return;
    if (mode === 'dashboard' && this.isPlayingGameplay) return;

    const ctx = this.ensureContext();
    if (!ctx) return;

    const targetGain = (this.isPlayingGameplay && mode === 'always') ? 0.25 : 1.0;

    if (this.isBgmPlaying) {
      if (this.bgmFadeGain) {
        const now = ctx.currentTime;
        const cur = Math.max(0.0001, this.bgmFadeGain.gain.value);
        this.bgmFadeGain.gain.cancelScheduledValues(now);
        this.bgmFadeGain.gain.setValueAtTime(cur, now);
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

    // 126 BPM: 0.4762s per beat, 0.1190s per 16th-note step
    const stepDuration = 0.11905;
    const scheduleAheadTime = 0.220;
    this.bgmNextStepTime = ctx.currentTime + 0.04;

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

      // If context is suspended by browser, wait cleanly
      if (this.ctx.state !== 'running') {
        return;
      }

      // Catch-up safety if clock lagged
      if (this.bgmNextStepTime < this.ctx.currentTime) {
        this.bgmNextStepTime = this.ctx.currentTime + 0.02;
      }

      while (this.bgmNextStepTime < this.ctx.currentTime + scheduleAheadTime) {
        this._scheduleBgmStep(this.bgmStep, this.bgmNextStepTime, stepDuration);
        this.bgmNextStepTime += stepDuration;
        this.bgmStep = (this.bgmStep + 1) % 256; // 16 bars * 16 steps = 256 steps (30.48s)
      }
    };

    runScheduler();
    if (this.bgmLookaheadTimer) clearInterval(this.bgmLookaheadTimer);
    this.bgmLookaheadTimer = setInterval(runScheduler, 30);

    // Watchdog check: guarantees BGM never stays silent accidentally
    if (!this.bgmWatchdogTimer) {
      this.bgmWatchdogTimer = setInterval(() => {
        const currentMode = this.storage?.getBgmMode?.() || 'dashboard';
        if (!this.isMuted && currentMode !== 'off') {
          if (!this.isPlayingGameplay || currentMode === 'always') {
            if (this.ctx && this.ctx.state === 'running' && (!this.isBgmPlaying || (this.bgmFadeGain && this.bgmFadeGain.gain.value < 0.05))) {
              this.startBGM(0.3);
            }
          }
        }
      }, 1000);
    }
  }

  stopBGM(fadeDuration = 0.2) {
    this.isBgmPlaying = false;
    if (this.bgmLookaheadTimer) {
      clearInterval(this.bgmLookaheadTimer);
      this.bgmLookaheadTimer = null;
    }

    if (this.ctx && this.bgmFadeGain) {
      const now = this.ctx.currentTime;
      const cur = Math.max(0.0001, this.bgmFadeGain.gain.value);
      this.bgmFadeGain.gain.cancelScheduledValues(now);
      this.bgmFadeGain.gain.setValueAtTime(cur, now);
      this.bgmFadeGain.gain.linearRampToValueAtTime(0.0001, now + fadeDuration);
    }
  }

  /**
   * Advanced Instrumental Step Synthesizer (126 BPM, 16 Bars)
   * Joyful, catchy casual game anthem featuring:
   *  - Bouncy wooden marimba & crisp xylophone riffs
   *  - Upbeat brass / melodica stabs
   *  - Rhythm ukulele / acoustic guitar strumming
   *  - Walking upright slap bass
   *  - Glockenspiel sparkles
   *  - Dynamic acoustic swing percussion
   */
  _scheduleBgmStep(step, time, stepDuration) {
    if (!this.ctx || !this.bgmFadeGain) return;

    const bar = Math.floor(step / 16); // 0 to 15
    const stepInBar = step % 16;       // 0 to 15

    // 16-Bar Joyful Harmonic Progression (Key: C Major / G / F with modal jazz-pop bounce)
    const BARS = [
      // Intro & Section A: Joyful, Bouncy & Catchy Hook (Bars 0-3)
      { root: 130.81, chord: [329.63, 392.00, 523.25], horn: 659.25 },  // Bar 0: C Major
      { root: 110.00, chord: [261.63, 329.63, 440.00], horn: 523.25 },  // Bar 1: A Minor
      { root: 146.83, chord: [293.66, 349.23, 440.00], horn: 587.33 },  // Bar 2: D Minor
      { root: 98.00,  chord: [246.94, 293.66, 392.00], horn: 493.88 },  // Bar 3: G7 (turn)

      // Section A2: Playful Syncopation with Brass Counterpoint (Bars 4-7)
      { root: 130.81, chord: [329.63, 392.00, 523.25], horn: 659.25 },  // Bar 4: C Major
      { root: 164.81, chord: [329.63, 392.00, 493.88], horn: 587.33 },  // Bar 5: E Minor
      { root: 174.61, chord: [261.63, 349.23, 440.00], horn: 659.25 },  // Bar 6: F Major
      { root: 98.00,  chord: [246.94, 293.66, 392.00], horn: 783.99 },  // Bar 7: G Major

      // Section B: Energetic Harmonic Lift (Bars 8-11)
      { root: 174.61, chord: [349.23, 440.00, 523.25], horn: 698.46 },  // Bar 8: F Major (Bright lift!)
      { root: 98.00,  chord: [293.66, 392.00, 493.88], horn: 783.99 },  // Bar 9: G Major
      { root: 130.81, chord: [329.63, 392.00, 523.25], horn: 659.25 },  // Bar 10: C Major
      { root: 110.00, chord: [261.63, 329.63, 440.00], horn: 523.25 },  // Bar 11: A Minor

      // Section C: Playful Climax & Seamless Turnaround (Bars 12-15)
      { root: 146.83, chord: [293.66, 349.23, 440.00], horn: 587.33 },  // Bar 12: D Minor
      { root: 164.81, chord: [329.63, 392.00, 493.88], horn: 659.25 },  // Bar 13: E Minor
      { root: 174.61, chord: [349.23, 440.00, 523.25], horn: 698.46 },  // Bar 14: F Major
      { root: 98.00,  chord: [246.94, 293.66, 349.23], horn: 783.99 }   // Bar 15: G7sus4 (resolves right to Bar 0 C)
    ];
    const barData = BARS[bar] || BARS[0];

    // ── 1. CHEERFUL ACOUSTIC CASUAL DRUMS & PERCUSSION ────────────
    let playKick = false;
    let playRim = false;
    let playShaker = false;
    let shakerAccent = false;
    let playWoodblock = false;

    // Bouncy kick on beats 1 & 3, plus syncopated upbeat kicks
    if (stepInBar === 0 || stepInBar === 8 || ((bar % 2 === 1) && stepInBar === 14)) {
      playKick = true;
    }
    // Crisp acoustic rim-clack / woodblock on beats 2 & 4
    if (stepInBar === 4 || stepInBar === 12) {
      playRim = true;
    }
    // Playful woodblock taps on syncopated offbeats
    if (stepInBar === 6 || stepInBar === 10) {
      playWoodblock = true;
    }
    // Swinging shakers on 16ths
    playShaker = true;
    if (stepInBar % 4 === 2 || stepInBar === 14) {
      shakerAccent = true;
    }

    if (playKick) {
      this._playAcousticDrum('kick', time, 0.088);
    }
    if (playRim) {
      this._playAcousticDrum('rim', time, 0.052);
    }
    if (playWoodblock) {
      this._playAcousticDrum('woodblock', time, 0.038);
    }
    if (playShaker) {
      this._playAcousticDrum('shaker', time, shakerAccent ? 0.032 : 0.016);
    }

    // ── 2. BOUNCY UPRIGHT SLAP BASS ──────────────────────────────
    // Groovy walking bassline with fifths, octaves, and approach notes
    let playBass = false;
    let bassFreq = barData.root;
    let isSlap = false;

    const bassPattern = [0, 4, 6, 8, 10, 12, 14];
    if (bassPattern.includes(stepInBar)) {
      playBass = true;
      if (stepInBar === 0) {
        bassFreq = barData.root;
      } else if (stepInBar === 4) {
        bassFreq = barData.root * 1.5; // 5th
      } else if (stepInBar === 6) {
        bassFreq = barData.root * 2.0; // Octave pop
        isSlap = true;
      } else if (stepInBar === 8) {
        bassFreq = barData.root;
      } else if (stepInBar === 10) {
        bassFreq = barData.root * 1.5;
      } else if (stepInBar === 12) {
        bassFreq = barData.root * 1.33; // 4th
      } else if (stepInBar === 14) {
        // Chromatic approach to next bar root
        bassFreq = barData.root * 0.94;
        isSlap = true;
      }
    }

    if (playBass) {
      this._playUprightBass(bassFreq, time, 0.16, 0.085, isSlap);
    }

    // ── 3. ACOUSTIC UKULELE / GUITAR STRUM (Rhythm Drive) ────────
    // Joyful reggae/ska/pop upbeat strums on 16ths: steps 2, 6, 10, 14
    if (stepInBar === 2 || stepInBar === 6 || stepInBar === 10 || stepInBar === 14) {
      this._playUkuleleStrum(barData.chord, time, 0.034, stepInBar === 2 || stepInBar === 10);
    }

    // ── 4. JOYFUL BRASS / MELODICA OFFBEAT STABS ─────────────────
    // Signature cartoon adventure horn punches
    if (stepInBar === 4 || stepInBar === 12 || (bar >= 8 && stepInBar === 7)) {
      this._playHornStab(barData.horn, time, 0.14, 0.048);
    }

    // ── 5. ICONIC JOYFUL MARIMBA & XYLOPHONE LEAD MELODY ─────────
    // Fast, catchy, playful singable theme (Key of C / Pentatonic / Lydian)
    const MARIMBA_THEME = {
      // Bar 0: Joyful Opening Hook!
      0:   { freq: 523.25, dur: 0.18, vol: 0.088 }, // C5
      2:   { freq: 587.33, dur: 0.14, vol: 0.082 }, // D5
      4:   { freq: 659.25, dur: 0.22, vol: 0.092 }, // E5
      7:   { freq: 783.99, dur: 0.20, vol: 0.095 }, // G5 (Bouncy leap!)
      10:  { freq: 659.25, dur: 0.15, vol: 0.084 }, // E5
      12:  { freq: 523.25, dur: 0.22, vol: 0.088 }, // C5
      14:  { freq: 587.33, dur: 0.14, vol: 0.080 }, // D5

      // Bar 1: Playful Answer Motif
      16:  { freq: 659.25, dur: 0.18, vol: 0.088 }, // E5
      18:  { freq: 698.46, dur: 0.14, vol: 0.082 }, // F5
      20:  { freq: 783.99, dur: 0.24, vol: 0.094 }, // G5
      24:  { freq: 880.00, dur: 0.26, vol: 0.098 }, // A5 (Peak!)
      28:  { freq: 783.99, dur: 0.22, vol: 0.088 }, // G5

      // Bar 2: Rhythmic Double-Tap Riff
      32:  { freq: 587.33, dur: 0.14, vol: 0.084 }, // D5
      34:  { freq: 587.33, dur: 0.14, vol: 0.080 }, // D5 (double strike)
      36:  { freq: 659.25, dur: 0.18, vol: 0.088 }, // E5
      40:  { freq: 587.33, dur: 0.20, vol: 0.085 }, // D5
      44:  { freq: 523.25, dur: 0.24, vol: 0.088 }, // C5

      // Bar 3: Turnaround Hook
      48:  { freq: 493.88, dur: 0.18, vol: 0.082 }, // B4
      52:  { freq: 587.33, dur: 0.18, vol: 0.084 }, // D5
      56:  { freq: 783.99, dur: 0.28, vol: 0.095 }, // G5 (Bright jump!)
      62:  { freq: 659.25, dur: 0.16, vol: 0.080 }, // E5

      // Bar 4: Section A2 - Embellished High Variation
      64:  { freq: 1046.50, dur: 0.20, vol: 0.098 }, // C6 (High sparkle!)
      68:  { freq: 880.00,  dur: 0.18, vol: 0.090 }, // A5
      72:  { freq: 783.99,  dur: 0.22, vol: 0.092 }, // G5
      76:  { freq: 659.25,  dur: 0.18, vol: 0.086 }, // E5
      78:  { freq: 698.46,  dur: 0.14, vol: 0.082 }, // F5

      // Bar 5: Cascading Riff
      80:  { freq: 783.99, dur: 0.20, vol: 0.092 }, // G5
      84:  { freq: 659.25, dur: 0.16, vol: 0.086 }, // E5
      88:  { freq: 587.33, dur: 0.18, vol: 0.084 }, // D5
      92:  { freq: 523.25, dur: 0.24, vol: 0.088 }, // C5

      // Bar 6: Jaunty Syncopated Figure
      96:  { freq: 698.46, dur: 0.18, vol: 0.088 }, // F5
      100: { freq: 783.99, dur: 0.18, vol: 0.090 }, // G5
      104: { freq: 880.00, dur: 0.24, vol: 0.095 }, // A5
      108: { freq: 987.77, dur: 0.20, vol: 0.092 }, // B5

      // Bar 7: Resolution to G
      112: { freq: 1046.50, dur: 0.24, vol: 0.096 }, // C6
      116: { freq: 987.77,  dur: 0.18, vol: 0.088 }, // B5
      120: { freq: 783.99,  dur: 0.28, vol: 0.090 }, // G5

      // Bar 8: Section B Lift - Energetic Climax!
      128: { freq: 880.00,  dur: 0.20, vol: 0.095 }, // A5
      132: { freq: 1046.50, dur: 0.22, vol: 0.098 }, // C6
      136: { freq: 1174.66, dur: 0.26, vol: 0.102 }, // D6 (Excitement peak!)
      140: { freq: 1046.50, dur: 0.18, vol: 0.092 }, // C6

      // Bar 9: Singing Brass & Marimba Counterpoint
      144: { freq: 987.77,  dur: 0.20, vol: 0.092 }, // B5
      148: { freq: 880.00,  dur: 0.18, vol: 0.088 }, // A5
      152: { freq: 783.99,  dur: 0.22, vol: 0.090 }, // G5
      156: { freq: 659.25,  dur: 0.20, vol: 0.086 }, // E5

      // Bar 10: Playful Bounce
      160: { freq: 698.46, dur: 0.18, vol: 0.088 }, // F5
      164: { freq: 783.99, dur: 0.18, vol: 0.090 }, // G5
      168: { freq: 880.00, dur: 0.24, vol: 0.094 }, // A5
      172: { freq: 659.25, dur: 0.20, vol: 0.086 }, // E5

      // Bar 11: Fast Triplet-feel Run
      176: { freq: 587.33, dur: 0.14, vol: 0.084 }, // D5
      178: { freq: 659.25, dur: 0.14, vol: 0.084 }, // E5
      180: { freq: 698.46, dur: 0.16, vol: 0.088 }, // F5
      184: { freq: 783.99, dur: 0.22, vol: 0.092 }, // G5
      188: { freq: 880.00, dur: 0.24, vol: 0.096 }, // A5

      // Bar 12: Section C Climax Run
      192: { freq: 1046.50, dur: 0.22, vol: 0.100 }, // C6
      196: { freq: 880.00,  dur: 0.18, vol: 0.090 }, // A5
      200: { freq: 783.99,  dur: 0.20, vol: 0.092 }, // G5
      204: { freq: 659.25,  dur: 0.20, vol: 0.088 }, // E5

      // Bar 13: Chromatic Playful Descent
      208: { freq: 698.46, dur: 0.18, vol: 0.088 }, // F5
      212: { freq: 659.25, dur: 0.18, vol: 0.086 }, // E5
      216: { freq: 587.33, dur: 0.20, vol: 0.085 }, // D5
      220: { freq: 523.25, dur: 0.22, vol: 0.088 }, // C5

      // Bar 14: Drum & Bass Driven Build
      224: { freq: 440.00, dur: 0.18, vol: 0.084 }, // A4
      228: { freq: 523.25, dur: 0.20, vol: 0.088 }, // C5
      232: { freq: 587.33, dur: 0.22, vol: 0.090 }, // D5
      236: { freq: 659.25, dur: 0.22, vol: 0.092 }, // E5

      // Bar 15: Grand Seamless Turnaround!
      240: { freq: 783.99, dur: 0.18, vol: 0.095 }, // G5
      244: { freq: 880.00, dur: 0.18, vol: 0.096 }, // A5
      248: { freq: 987.77, dur: 0.20, vol: 0.098 }, // B5
      252: { freq: 1046.50, dur: 0.35, vol: 0.104 }  // C6 (Suspension connecting right into Step 0 C5!)
    };

    const note = MARIMBA_THEME[step];
    if (note) {
      this._playMarimbaNote(note.freq, time, note.dur, note.vol);
    }

    // ── 6. SPARKLY GLOCKENSPIEL & CELESTA COUNTERPOINTS ──────────
    // Adds magical diamond-bright sparkles to high registers
    if (bar >= 4 && bar <= 12) {
      const GLOCK_NOTES = {
        66: 1318.51, 74: 1567.98, 82: 1318.51, 90: 1046.50,
        130: 1567.98, 138: 1760.00, 146: 1567.98, 154: 1318.51
      };
      const gNote = GLOCK_NOTES[step];
      if (gNote) {
        this._playGlockenspiel(gNote, time, 0.42, 0.038);
      }
    }
  }

  _playMarimbaNote(freq, time, duration, vol) {
    // 1. Acoustic Rosewood Bar Fundamental
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, time);

    // 2. Tuned Wooden Mallet Strike Overtone (tuned ~3x with fast ring)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 3.01, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2600, time);
    filter.frequency.exponentialRampToValueAtTime(850, time + duration);

    gain1.gain.setValueAtTime(0.0001, time);
    gain1.gain.linearRampToValueAtTime(vol, time + 0.005);
    gain1.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    gain2.gain.setValueAtTime(0.0001, time);
    gain2.gain.linearRampToValueAtTime(vol * 0.45, time + 0.003);
    gain2.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.4);

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

  _playHornStab(freq, time, duration, vol) {
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(freq, time);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.005, time); // Subtle rich chorus

    filter.type = 'lowpass';
    filter.Q.setValueAtTime(2.2, time);
    filter.frequency.setValueAtTime(1800, time);
    filter.frequency.exponentialRampToValueAtTime(650, time + duration);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmFadeGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration + 0.02);
    osc2.stop(time + duration + 0.02);
  }

  _playUkuleleStrum(chordNotes, time, vol, isDown = true) {
    chordNotes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Stagger notes by 5ms to emulate natural acoustic finger strum
      const noteTime = time + (isDown ? idx : (chordNotes.length - 1 - idx)) * 0.005;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1250, noteTime);
      filter.Q.setValueAtTime(1.8, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(vol, noteTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.12);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmFadeGain);

      osc.start(noteTime);
      osc.stop(noteTime + 0.13);
    });
  }

  _playUprightBass(freq, time, duration, vol, isSlap = false) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = isSlap ? 'sawtooth' : 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isSlap ? 380 : 240, time);
    filter.Q.setValueAtTime(1.6, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmFadeGain);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  _playGlockenspiel(freq, time, duration, vol) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmFadeGain);

    if (this.delayNodeR) {
      gain.connect(this.delayNodeR);
    }

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  _playAcousticDrum(type, time, vol) {
    if (type === 'kick') {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(95, time);
      osc.frequency.exponentialRampToValueAtTime(42, time + 0.08);

      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.085);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.09);
    } else if (type === 'rim') {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(680, time);
      osc.frequency.exponentialRampToValueAtTime(220, time + 0.03);

      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.035);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.04);
    } else if (type === 'woodblock') {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(980, time);
      osc.frequency.exponentialRampToValueAtTime(450, time + 0.025);

      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.028);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.03);
    } else if (type === 'shaker' && this.pinkNoiseBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.pinkNoiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(4200, time);

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
   * 2. CARTOON SLINGSHOT MECHANICS & GAMEPLAY AUDIO
   * Playful, joyful cartoon audio replacing realistic tension/drone.
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Cartoon Bird Grab / Pick-up:
   * Playful, bouncy cartoon bird chirp/peep ("peep-peep!")
   */
  playBirdGrab() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    // First cute cartoon peep
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(680, now);
    osc1.frequency.exponentialRampToValueAtTime(1150, now + 0.032);

    gain1.gain.setValueAtTime(0.0001, now);
    gain1.gain.linearRampToValueAtTime(0.40, now + 0.008);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.048);

    osc1.connect(gain1);
    gain1.connect(this.sfxDuckingGain);
    osc1.start(now);
    osc1.stop(now + 0.052);

    // Second bounce peep
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1020, now + 0.038);
    osc2.frequency.exponentialRampToValueAtTime(1450, now + 0.075);

    gain2.gain.setValueAtTime(0.0001, now + 0.038);
    gain2.gain.linearRampToValueAtTime(0.44, now + 0.046);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);

    osc2.connect(gain2);
    gain2.connect(this.sfxDuckingGain);
    osc2.start(now + 0.038);
    osc2.stop(now + 0.10);
  }

  /**
   * Cartoon Slingshot Rubber Band Pull & Stretch:
   * Playful cartoon rubber stretch twang ("twip... bwo-o-ing!")
   * CRITICAL FIX: When holding still (aiming), ZERO continuous sound/drone is played.
   * Only triggers cute, bouncy cartoon rubber stretch steps while actively dragging.
   */
  updateSlingshotPull(ratio = 0) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const clampedRatio = Math.max(0, Math.min(1.0, ratio));

    const pullDelta = Math.abs(clampedRatio - this.lastPullRatio);
    // Only play sound when actively pulling or changing stretch significantly
    if (pullDelta > 0.032 && (now - this.lastPullTickTime > 0.060)) {
      this.lastPullTickTime = now;
      this.lastPullRatio = clampedRatio;

      // Cartoon rubber band pitch scales with stretch
      const baseFreq = 220 + clampedRatio * 460; // 220Hz to 680Hz
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Triangle for rubbery harmonic body
      osc.type = 'triangle';
      // Pitch bends up with cartoon rubber elasticity
      osc.frequency.setValueAtTime(baseFreq * 0.88, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.18, now + 0.022);
      osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.07);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(baseFreq * 3.4, now);

      const stepVol = 0.32 + clampedRatio * 0.28;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(stepVol, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(now);
      osc.stop(now + 0.08);

      // Cute cartoon rubber strain squeak when near full stretch
      if (clampedRatio > 0.82 && Math.random() > 0.35) {
        const squeak = ctx.createOscillator();
        const sqGain = ctx.createGain();
        squeak.type = 'sine';
        squeak.frequency.setValueAtTime(1180, now + 0.01);
        squeak.frequency.exponentialRampToValueAtTime(780, now + 0.05);

        sqGain.gain.setValueAtTime(0.24, now + 0.01);
        sqGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

        squeak.connect(sqGain);
        sqGain.connect(this.sfxDuckingGain);
        squeak.start(now + 0.01);
        squeak.stop(now + 0.06);
      }
    }
  }

  stopSlingshotPull() {
    this.lastPullRatio = 0;
  }

  /**
   * Cartoon Slingshot Cancel:
   * Playful cartoon rubber spring unwind ("bwo-o-ing... down")
   */
  playSlingshotCancel() {
    this.stopSlingshotPull();
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.09);

    gain.gain.setValueAtTime(0.38, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.10);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.11);
  }

  /**
   * Cartoon Slingshot Launch:
   * Punchy cartoon rubber snap + comical cork pop + bright cartoon slide whistle launch chirp
   */
  playLaunch(power = 1.0) {
    this.stopSlingshotPull();
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const clampedPower = Math.min(1.4, Math.max(0.6, power));

    // 1. Sharp cartoon rubber whip-snap
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'sawtooth';
    snapOsc.frequency.setValueAtTime(1750 * clampedPower, now);
    snapOsc.frequency.exponentialRampToValueAtTime(240, now + 0.038);

    snapGain.gain.setValueAtTime(0.78 * clampedPower, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.048);

    // 2. Comical cartoon launch pop
    const popOsc = ctx.createOscillator();
    const popGain = ctx.createGain();
    popOsc.type = 'sine';
    popOsc.frequency.setValueAtTime(180 * clampedPower, now);
    popOsc.frequency.exponentialRampToValueAtTime(45, now + 0.08);

    popGain.gain.setValueAtTime(0.72 * clampedPower, now);
    popGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    popOsc.connect(popGain);
    popGain.connect(this.sfxDuckingGain);
    popOsc.start(now);
    popOsc.stop(now + 0.095);

    // 3. Bright cartoon slide whistle launch whoop
    const whistleOsc = ctx.createOscillator();
    const whistleGain = ctx.createGain();
    whistleOsc.type = 'sine';
    whistleOsc.frequency.setValueAtTime(440, now);
    whistleOsc.frequency.exponentialRampToValueAtTime(1200 * clampedPower, now + 0.085);

    whistleGain.gain.setValueAtTime(0.0001, now);
    whistleGain.gain.linearRampToValueAtTime(0.55 * clampedPower, now + 0.02);
    whistleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    whistleOsc.connect(whistleGain);
    whistleGain.connect(this.sfxDuckingGain);
    whistleOsc.start(now);
    whistleOsc.stop(now + 0.095);
  }

  updateSlingshotCharge(power) { this.updateSlingshotPull(power); }
  stopSlingshotCharge() { this.stopSlingshotPull(); }
  playStretch(ratio) { this.updateSlingshotPull(ratio); }

  /* ═════════════════════════════════════════════════════════════
   * CARTOON BIRD FLIGHT SOUND (Comical Slide-Whistle & Flutter)
   * Replaces realistic noise rush with a cheerful, melodic cartoon
   * slide-whistle glide ("wheeeee-e-e!") with subtle comic vibrato.
   * ═════════════════════════════════════════════════════════════ */

  startFlightSound() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted || this.isFlightSoundActive) return;
    this.isFlightSoundActive = true;
    const now = ctx.currentTime;

    // 1. Primary Whistle Oscillator (Warm Sine)
    this.flightOsc = ctx.createOscillator();
    this.flightOsc.type = 'sine';
    this.flightOsc.frequency.setValueAtTime(640, now);

    // 2. Harmonic Whistle Layer (Soft Triangle 1 octave up for airy cartoon whistle timbre)
    this.flightOsc2 = ctx.createOscillator();
    this.flightOsc2.type = 'triangle';
    this.flightOsc2.frequency.setValueAtTime(1280, now);

    // 3. Comical Vibrato LFO (9.5 Hz warble for iconic cartoon slide-whistle feel)
    this.flightLfo = ctx.createOscillator();
    this.flightLfo.type = 'sine';
    this.flightLfo.frequency.setValueAtTime(9.5, now);

    this.flightLfoGain = ctx.createGain();
    this.flightLfoGain.gain.setValueAtTime(26, now); // ±26 Hz vibrato depth

    this.flightLfo.connect(this.flightLfoGain);
    this.flightLfoGain.connect(this.flightOsc.frequency);
    this.flightLfoGain.connect(this.flightOsc2.frequency);

    // 4. Tremolo Flutter (Wing flapping flutter at 8 Hz)
    this.flightTremolo = ctx.createOscillator();
    this.flightTremolo.type = 'sine';
    this.flightTremolo.frequency.setValueAtTime(8.0, now);

    this.flightTremoloGain = ctx.createGain();
    this.flightTremoloGain.gain.setValueAtTime(0.08, now); // subtle 8% AM flutter
    this.flightTremolo.connect(this.flightTremoloGain);

    // 5. Output Gain and Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2800, now);

    this.flightGain = ctx.createGain();
    this.flightGain.gain.setValueAtTime(0.0001, now);
    this.flightGain.gain.linearRampToValueAtTime(0.24, now + 0.08);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.18, now);

    this.flightOsc.connect(filter);
    this.flightOsc2.connect(osc2Gain);
    osc2Gain.connect(filter);

    filter.connect(this.flightGain);
    this.flightGain.connect(this.sfxDuckingGain);

    this.flightOsc.start(now);
    this.flightOsc2.start(now);
    this.flightLfo.start(now);
    this.flightTremolo.start(now);
  }

  updateFlightSound(speed = 10) {
    if (!this.isFlightSoundActive || !this.flightOsc || !this.flightGain || !this.ctx) return;
    const now = this.ctx.currentTime;
    const normalizedSpeed = Math.min(2.5, Math.max(0.2, speed / 12));

    // Dynamic comical cartoon pitch glide: rises with speed, dips at apex
    const targetFreq = 540 + normalizedSpeed * 380;
    this.flightOsc.frequency.cancelScheduledValues(now);
    this.flightOsc.frequency.setValueAtTime(this.flightOsc.frequency.value, now);
    this.flightOsc.frequency.linearRampToValueAtTime(targetFreq, now + 0.06);

    if (this.flightOsc2) {
      this.flightOsc2.frequency.cancelScheduledValues(now);
      this.flightOsc2.frequency.setValueAtTime(this.flightOsc2.frequency.value, now);
      this.flightOsc2.frequency.linearRampToValueAtTime(targetFreq * 2, now + 0.06);
    }

    if (this.flightLfo) {
      // Flutter speed increases when flying faster
      const targetLfoRate = 8.5 + normalizedSpeed * 3.5;
      this.flightLfo.frequency.linearRampToValueAtTime(targetLfoRate, now + 0.06);
    }

    // Dynamic volume tracking
    const targetGain = Math.min(0.35, 0.16 + normalizedSpeed * 0.10);
    this.flightGain.gain.cancelScheduledValues(now);
    this.flightGain.gain.setValueAtTime(this.flightGain.gain.value, now);
    this.flightGain.gain.linearRampToValueAtTime(targetGain, now + 0.06);
  }

  stopFlightSound() {
    if (!this.isFlightSoundActive) return;
    this.isFlightSoundActive = false;

    if (this.flightGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.flightGain.gain.cancelScheduledValues(now);
      this.flightGain.gain.setValueAtTime(this.flightGain.gain.value, now);
      this.flightGain.gain.linearRampToValueAtTime(0.0001, now + 0.04);
    }

    const oscsToStop = [this.flightOsc, this.flightOsc2, this.flightLfo, this.flightTremolo];
    setTimeout(() => {
      oscsToStop.forEach((osc) => {
        if (osc) {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        }
      });
    }, 50);

    this.flightOsc = null;
    this.flightOsc2 = null;
    this.flightLfo = null;
    this.flightLfoGain = null;
    this.flightTremolo = null;
    this.flightTremoloGain = null;
    this.flightGain = null;
  }

  /* ═════════════════════════════════════════════════════════════
   * 3. MATERIAL-SPECIFIC COLLISION & DESTRUCTION AUDIO
   * ═════════════════════════════════════════════════════════════ */

  playMaterialImpact(material = 'wood', intensity = 1.0) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const vol = Math.min(0.85, Math.max(0.24, intensity * 0.60));
    const pitchJitter = 0.92 + Math.random() * 0.16;

    if (material === 'stone') {
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
      [1450, 2200, 3100].forEach((baseFreq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(baseFreq * pitchJitter, now + idx * 0.003);
        gain.gain.setValueAtTime(vol * 0.85, now + idx * 0.003);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.003 + 0.07);
        osc.connect(gain);
        gain.connect(this.sfxDuckingGain);
        osc.start(now + idx * 0.003);
        osc.stop(now + idx * 0.003 + 0.075);
      });
    } else if (material === 'glass') {
      [2300, 3400].forEach((baseFreq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * pitchJitter, now + idx * 0.006);
        gain.gain.setValueAtTime(vol * 0.75, now + idx * 0.006);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.006 + 0.05);
        osc.connect(gain);
        gain.connect(this.sfxDuckingGain);
        osc.start(now + idx * 0.006);
        osc.stop(now + idx * 0.006 + 0.055);
      });
    } else if (material === 'ground') {
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
      const snap = ctx.createOscillator();
      const snapGain = ctx.createGain();
      snap.type = 'triangle';
      snap.frequency.setValueAtTime(850 * pitchJitter, now);
      snap.frequency.exponentialRampToValueAtTime(140, now + 0.02);
      snapGain.gain.setValueAtTime(vol * 0.88, now);
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

  playBlockBreak(type = 'wood', breakCount = 1) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;

    const now = ctx.currentTime;

    if (now - this.lastBreakTime < 0.25) {
      this.recentBreakCountInWindow++;
    } else {
      this.recentBreakCountInWindow = 1;
    }
    this.lastBreakTime = now;

    if (this.activeBreakVoices >= this.maxConcurrentBreaks) {
      if (this.recentBreakCountInWindow >= 3) {
        this._playStructuralCollapseRumble(now, this.recentBreakCountInWindow);
      }
      return;
    }

    this.activeBreakVoices++;
    setTimeout(() => {
      this.activeBreakVoices = Math.max(0, this.activeBreakVoices - 1);
    }, 180);

    const countMult = Math.min(1.8, Math.max(0.65, 1.0 / Math.sqrt(Math.max(1, breakCount))));
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

    if (breakCount > 1 || this.recentBreakCountInWindow >= 3) {
      this._playStructuralCollapseRumble(playTime, Math.max(breakCount, this.recentBreakCountInWindow));
    }
  }

  _playWoodBreak(now, countMult) {
    const ctx = this.ctx;
    const pitchJitter = 0.90 + Math.random() * 0.20;

    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(1050 * pitchJitter, now);
    snapOsc.frequency.exponentialRampToValueAtTime(140, now + 0.035);

    snapGain.gain.setValueAtTime(0.26 * countMult, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.05);

    const woodOsc = ctx.createOscillator();
    const woodGain = ctx.createGain();
    woodOsc.type = 'triangle';
    woodOsc.frequency.setValueAtTime(210 * pitchJitter, now);
    woodOsc.frequency.exponentialRampToValueAtTime(55, now + 0.12);

    woodGain.gain.setValueAtTime(0.18 * countMult, now);
    woodGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

    woodOsc.connect(woodGain);
    woodGain.connect(this.sfxDuckingGain);
    woodOsc.start(now);
    woodOsc.stop(now + 0.14);

    if (this.pinkNoiseBuffer) {
      [0.0, 0.010, 0.024, 0.042].forEach((offset, idx) => {
        const sSrc = ctx.createBufferSource();
        sSrc.buffer = this.pinkNoiseBuffer;

        const sFilter = ctx.createBiquadFilter();
        sFilter.type = 'bandpass';
        sFilter.frequency.setValueAtTime((800 + idx * 240) * pitchJitter, now + offset);
        sFilter.Q.setValueAtTime(2.8, now + offset);

        const sGain = ctx.createGain();
        sGain.gain.setValueAtTime(0.14 * countMult, now + offset);
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

    const crackOsc = ctx.createOscillator();
    const crackGain = ctx.createGain();
    crackOsc.type = 'sawtooth';
    crackOsc.frequency.setValueAtTime(62 * pitchJitter, now);
    crackOsc.frequency.exponentialRampToValueAtTime(22, now + 0.22);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, now);
    filter.frequency.exponentialRampToValueAtTime(70, now + 0.2);

    crackGain.gain.setValueAtTime(0.26 * countMult, now);
    crackGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);

    crackOsc.connect(filter);
    filter.connect(crackGain);
    crackGain.connect(this.sfxDuckingGain);
    crackOsc.start(now);
    crackOsc.stop(now + 0.24);

    if (this.pinkNoiseBuffer) {
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = this.pinkNoiseBuffer;

      const nFilter = ctx.createBiquadFilter();
      nFilter.type = 'bandpass';
      nFilter.frequency.setValueAtTime(260 * pitchJitter, now);
      nFilter.Q.setValueAtTime(1.4, now);

      const nGain = ctx.createGain();
      nGain.gain.setValueAtTime(0.24 * countMult, now);
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

    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'sine';
    snapOsc.frequency.setValueAtTime(3400 * pitchJitter, now);
    snapOsc.frequency.exponentialRampToValueAtTime(1200, now + 0.02);

    snapGain.gain.setValueAtTime(0.20 * countMult, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.03);

    const SHARD_FREQS = [2100, 2650, 3150, 3600, 4100, 2400];
    SHARD_FREQS.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const start = now + idx * 0.012 + Math.random() * 0.006;
      osc.frequency.setValueAtTime(freq * pitchJitter + (Math.random() - 0.5) * 80, start);

      gain.gain.setValueAtTime(0.10 * countMult, start);
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

    const buckleOsc = ctx.createOscillator();
    const buckleGain = ctx.createGain();
    buckleOsc.type = 'sawtooth';
    buckleOsc.frequency.setValueAtTime(440 * pitchJitter, now);
    buckleOsc.frequency.exponentialRampToValueAtTime(75, now + 0.16);

    buckleGain.gain.setValueAtTime(0.26 * countMult, now);
    buckleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    buckleOsc.connect(buckleGain);
    buckleGain.connect(this.sfxDuckingGain);
    buckleOsc.start(now);
    buckleOsc.stop(now + 0.19);

    [1600, 2350, 3400].forEach((baseFreq, idx) => {
      const ring = ctx.createOscillator();
      const rGain = ctx.createGain();
      ring.type = 'triangle';
      ring.frequency.setValueAtTime(baseFreq * pitchJitter, now + idx * 0.008);

      rGain.gain.setValueAtTime(0.13 * countMult, now + idx * 0.008);
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

    const rumbleVol = Math.min(0.24, 0.10 + breakCount * 0.028);
    rumbleGain.gain.setValueAtTime(rumbleVol, now);
    rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.44);

    rumbleOsc.connect(rumbleGain);
    rumbleGain.connect(this.sfxDuckingGain);
    rumbleOsc.start(now);
    rumbleOsc.stop(now + 0.45);
  }

  /* ═════════════════════════════════════════════════════════════
   * 4. COMPLETE TNT AUDIO SEQUENCE
   * ═════════════════════════════════════════════════════════════ */

  playTNTSequence() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    this.duck(0.25, 0.18, 0.50);

    // Fuse Sizzle
    if (this.pinkNoiseBuffer) {
      const fuseSrc = ctx.createBufferSource();
      fuseSrc.buffer = this.pinkNoiseBuffer;

      const fuseFilter = ctx.createBiquadFilter();
      fuseFilter.type = 'bandpass';
      fuseFilter.frequency.setValueAtTime(3200, now);
      fuseFilter.Q.setValueAtTime(3.5, now);

      const fuseGain = ctx.createGain();
      fuseGain.gain.setValueAtTime(0.20, now);
      fuseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      fuseSrc.connect(fuseFilter);
      fuseFilter.connect(fuseGain);
      fuseGain.connect(this.sfxGain);
      fuseSrc.start(now);
      fuseSrc.stop(now + 0.065);
    }

    // Mid-Bass Blast (88Hz -> 32Hz, punchy and clear on mobile)
    const blastTime = now + 0.015;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(88, blastTime);
    osc.frequency.exponentialRampToValueAtTime(32, blastTime + 0.45);

    gain.gain.setValueAtTime(0.40, blastTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.48);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(blastTime);
    osc.stop(blastTime + 0.5);

    // Plasma fireball roar
    if (this.pinkNoiseBuffer) {
      const roarSrc = ctx.createBufferSource();
      roarSrc.buffer = this.pinkNoiseBuffer;

      const roarFilter = ctx.createBiquadFilter();
      roarFilter.type = 'lowpass';
      roarFilter.frequency.setValueAtTime(1100, blastTime);
      roarFilter.frequency.exponentialRampToValueAtTime(85, blastTime + 0.42);

      const roarGain = ctx.createGain();
      roarGain.gain.setValueAtTime(0.34, blastTime);
      roarGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.45);

      roarSrc.connect(roarFilter);
      roarFilter.connect(roarGain);
      roarGain.connect(this.sfxGain);
      roarSrc.start(blastTime);
      roarSrc.stop(blastTime + 0.48);
    }

    // Shrapnel crack
    const shrapnelOsc = ctx.createOscillator();
    const shrapnelGain = ctx.createGain();
    shrapnelOsc.type = 'sawtooth';
    shrapnelOsc.frequency.setValueAtTime(780, blastTime);
    shrapnelOsc.frequency.exponentialRampToValueAtTime(120, blastTime + 0.05);

    shrapnelGain.gain.setValueAtTime(0.25, blastTime);
    shrapnelGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + 0.055);

    shrapnelOsc.connect(shrapnelGain);
    shrapnelGain.connect(this.sfxGain);
    shrapnelOsc.start(blastTime);
    shrapnelOsc.stop(blastTime + 0.06);

    // Debris scatter
    if (this.pinkNoiseBuffer) {
      [0.08, 0.16, 0.24].forEach((offset, idx) => {
        const dSrc = ctx.createBufferSource();
        dSrc.buffer = this.pinkNoiseBuffer;

        const dFilter = ctx.createBiquadFilter();
        dFilter.type = 'bandpass';
        dFilter.frequency.setValueAtTime(450 + idx * 280, blastTime + offset);
        dFilter.Q.setValueAtTime(2.2, blastTime + offset);

        const dGain = ctx.createGain();
        dGain.gain.setValueAtTime(0.15 - idx * 0.03, blastTime + offset);
        dGain.gain.exponentialRampToValueAtTime(0.0001, blastTime + offset + 0.12);

        dSrc.connect(dFilter);
        dFilter.connect(dGain);
        dGain.connect(this.sfxGain);

        dSrc.start(blastTime + offset);
        dSrc.stop(blastTime + offset + 0.13);
      });
    }

    // Reverb tail
    const tailOsc = ctx.createOscillator();
    const tailGain = ctx.createGain();
    tailOsc.type = 'sine';
    tailOsc.frequency.setValueAtTime(48, blastTime + 0.1);
    tailOsc.frequency.exponentialRampToValueAtTime(22, blastTime + 0.65);

    tailGain.gain.setValueAtTime(0.14, blastTime + 0.1);
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
   * 5. TARGET DEFEAT, POWERS & VICTORY/DEFEAT
   * ═════════════════════════════════════════════════════════════ */

  playTargetPop() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const snap = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snap.type = 'triangle';
    snap.frequency.setValueAtTime(780, now);
    snap.frequency.exponentialRampToValueAtTime(140, now + 0.03);

    snapGain.gain.setValueAtTime(0.28, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    snap.connect(snapGain);
    snapGain.connect(this.sfxDuckingGain);
    snap.start(now);
    snap.stop(now + 0.04);

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.13);

    gain.gain.setValueAtTime(0.26, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.15);

    const bell = ctx.createOscillator();
    const bGain = ctx.createGain();
    bell.type = 'sine';
    bell.frequency.setValueAtTime(1174.66, now + 0.02);

    bGain.gain.setValueAtTime(0.14, now + 0.02);
    bGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    bell.connect(bGain);
    bGain.connect(this.sfxDuckingGain);
    bell.start(now + 0.02);
    bell.stop(now + 0.19);
  }

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

    gain.gain.setValueAtTime(0.20, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.26);
  }

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

      gain.gain.setValueAtTime(0.16, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.19);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.21);
    });
  }

  playVictory() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const chord = [523.25, 659.25, 783.99, 1046.50];
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const noteTime = now + idx * 0.09;
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(0.18, noteTime + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.65);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.70);
    });

    setTimeout(() => {
      if (!this.ctx || this.isMuted) return;
      const cNow = this.ctx.currentTime;
      [1046.50, 1318.51, 1567.98].forEach((freq) => {
        const bell = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bell.type = 'sine';
        bell.frequency.setValueAtTime(freq, cNow);
        bGain.gain.setValueAtTime(0.11, cNow);
        bGain.gain.exponentialRampToValueAtTime(0.0001, cNow + 0.95);
        bell.connect(bGain);
        bGain.connect(this.sfxDuckingGain);
        bell.start(cNow);
        bell.stop(cNow + 1.0);
      });
    }, 420);
  }

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
      gain.gain.linearRampToValueAtTime(0.12, noteTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.32);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.35);
    });
  }

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

    gain.gain.setValueAtTime(0.14, now);
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
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const noteTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.20, noteTime + 0.02);
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
    gain.gain.linearRampToValueAtTime(0.24, now + 0.35);
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

    gain.gain.setValueAtTime(0.10, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  /* ═════════════════════════════════════════════════════════════
   * 6. SUBTLE, POLISHED UI SOUNDS
   * ═════════════════════════════════════════════════════════════ */

  playUiClick() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.018);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.025);
  }

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
      gain.gain.linearRampToValueAtTime(0.09, noteTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.14);

      osc.connect(gain);
      gain.connect(this.sfxDuckingGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.15);
    });
  }

  playMenuClose() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.05);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  playMenuBack() {
    this.playMenuClose();
  }

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
    gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playUnlock() {
    this.playLevelUnlock();
  }

  playPurchase() {
    this.playCoin();
  }

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

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxDuckingGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }
}
