/**
 * Segmented & High-Fidelity Web Audio System for Dili-Birds 3D.
 *
 * Requirements & Sound Engineering:
 *  1. Upbeat Background Music (BGM):
 *     - Highly unique, upbeat, energetic, and premium electronic groove soundtrack.
 *     - Features a bouncy synth bassline, sparkling cascading pluck arpeggios,
 *       rhythmic syncopated chord stabs, and crisp percussion groove.
 *     - Strictly plays ONLY during dashboard navigation and menu screens;
 *       stops completely the instant active gameplay begins (zero interference).
 *  2. Slingshot Mechanics (Pull & Shoot):
 *     - Pulling/Dragging: 100% completely silent (all stretch/charge sounds eliminated).
 *     - Shooting: Classic, professional Angry Birds-style rubber band release snap
 *       ("fwip-thwack!") triggered exactly when fired.
 *  3. In-Flight Silence:
 *     - 100% silent while airborne (zero wind, whistling, or whoosh sounds).
 *  4. Realistic Material Impact & Destruction SFX:
 *     - Wood: Solid snapping, cracking, and splintering timber impacts and breaks.
 *     - Stone: Heavy, forceful crushing and crumbling stone impact and masonry breaks.
 *     - Multi-block collapse scaling with deep seismic structural rumble.
 *     - Strictly non-cartoonish, non-goofy, professional physical audio.
 */
export class AudioManager {
  constructor(storage) {
    this.storage = storage;
    this.ctx = null;

    // Master node graph
    this.masterGain = null;
    this.sfxGain = null;
    this.bgmGain = null;
    this.bgmFadeGain = null;

    // Upbeat 24-Second BGM Sequencer State (120 BPM, 12 bars, 192 steps)
    this.bgmLookaheadTimer = null;
    this.bgmStep = 0;
    this.bgmNextStepTime = 0;
    this.isBgmPlaying = false;
    this.isPlayingGameplay = false; // Strictly enforces BGM stop during active gameplay

    // Reusable pre-computed pink noise buffer for realistic physical textures
    this.pinkNoiseBuffer = null;

    // Volume state cached from storage
    this.isMuted = !this.storage.isSoundEnabled();
    this.sfxVol = this.storage.getSfxVolume();
    this.bgmVol = this.storage.getBgmVolume();

    // Auto-unlock Web Audio on first user interaction (bypasses mobile restrictions)
    this.setupAutoplayUnlock();

    // Pause audio when switching tabs
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
    if (!this.ctx || this.masterGain) return;

    // Master Gain Bus (controlled by global mute toggle)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0 : 1.0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // SFX Bus
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.setValueAtTime(this.sfxVol, this.ctx.currentTime);
    this.sfxGain.connect(this.masterGain);

    // BGM Bus with dedicated smooth Fade Gain
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(this.bgmVol, this.ctx.currentTime);
    this.bgmGain.connect(this.masterGain);

    this.bgmFadeGain = this.ctx.createGain();
    this.bgmFadeGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.bgmFadeGain.connect(this.bgmGain);
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
              this.startBGM();
            }
          }).catch(() => {});
        } else if (!this.isPlayingGameplay) {
          this.startBGM();
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
      this.startBGM();
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

  /* ═════════════════════════════════════════════════════════════
   * UPBEAT, ENERGETIC BACKGROUND MUSIC (BGM)
   * Strictly active ONLY during dashboard/menu navigation.
   * Completely pauses once active gameplay begins.
   * ═════════════════════════════════════════════════════════════ */

  enterGameplay() {
    this.isPlayingGameplay = true;
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'always') {
      if (!this.isBgmPlaying && !this.isMuted) {
        this.startBGM(0.35);
      }
    } else {
      this.stopBGM(0.15);
    }
  }

  enterMenu() {
    this.isPlayingGameplay = false;
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'off' || this.isMuted) {
      this.stopBGM(0.15);
    } else {
      this.startBGM(0.35);
    }
  }

  setBgmMode(mode) {
    if (this.storage) {
      this.storage.setBgmMode(mode);
    }
    if (mode === 'off') {
      this.stopBGM(0.15);
    } else if (mode === 'dashboard') {
      if (this.isPlayingGameplay) {
        this.stopBGM(0.15);
      } else {
        this.startBGM(0.35);
      }
    } else if (mode === 'always') {
      this.startBGM(0.35);
    }
  }

  /**
   * Upbeat, Premium 24-Second Melodic Background Music (BGM).
   * 120 BPM, 12 bars (192 sixteenth-note steps) featuring:
   *  - Bars 1-2 (0-4s): Ambient intro groove with warm bass pulse and bell chimes
   *  - Bars 3-6 (4-12s): Section A - Funky syncopated bass, dance-pop beat, and catchy lead melody hook
   *  - Bars 7-10 (12-20s): Section B - Harmonic lift to higher register, sparkling arpeggios, climbing melody
   *  - Bars 11-12 (20-24s): Section C - Dynamic drum fill, resolution, and seamless cross-faded turnaround
   * Precision lookahead scheduler guarantees sample-accurate, gapless, non-repetitive looping.
   */
  startBGM(fadeDuration = 0.35) {
    const mode = this.storage?.getBgmMode?.() || 'dashboard';
    if (mode === 'off' || this.isMuted) return;
    if (mode === 'dashboard' && this.isPlayingGameplay) return;

    const ctx = this.ensureContext();
    if (!ctx || this.isBgmPlaying) return;
    this.isBgmPlaying = true;

    if (this.bgmFadeGain) {
      const now = ctx.currentTime;
      this.bgmFadeGain.gain.cancelScheduledValues(now);
      this.bgmFadeGain.gain.setValueAtTime(0.0001, now);
      this.bgmFadeGain.gain.linearRampToValueAtTime(1.0, now + fadeDuration);
    }

    // 120 BPM: 0.5s per beat, 0.125s per 16th note
    const stepDuration = 0.125;
    const scheduleAheadTime = 0.200; // 200ms lookahead window
    this.bgmStep = 0;
    this.bgmNextStepTime = ctx.currentTime + 0.05;

    const runScheduler = () => {
      const currentMode = this.storage?.getBgmMode?.() || 'dashboard';
      if (!this.isBgmPlaying || !this.ctx || this.isMuted) return;
      if (currentMode === 'off') {
        this.stopBGM(0.15);
        return;
      }
      if (currentMode === 'dashboard' && this.isPlayingGameplay) {
        this.stopBGM(0.15);
        return;
      }

      // Tab throttle / background safety: advance clock if stalled
      if (this.bgmNextStepTime < this.ctx.currentTime) {
        this.bgmNextStepTime = this.ctx.currentTime + 0.04;
      }
      while (this.bgmNextStepTime < this.ctx.currentTime + scheduleAheadTime) {
        this._scheduleBgmStep(this.bgmStep, this.bgmNextStepTime, stepDuration);
        this.bgmNextStepTime += stepDuration;
        this.bgmStep = (this.bgmStep + 1) % 192; // 12 bars * 16 steps = 192 steps (24.0s)
      }
    };

    runScheduler();
    this.bgmLookaheadTimer = setInterval(runScheduler, 30);
  }

  stopBGM(fadeDuration = 0.15) {
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
   * Internal high-fidelity step synthesizer for the 24-second BGM loop.
   */
  _scheduleBgmStep(step, time, stepDuration) {
    if (!this.ctx || !this.bgmFadeGain) return;

    const bar = Math.floor(step / 16); // 0 to 11
    const stepInBar = step % 16;       // 0 to 15

    // 12-Bar Harmonic Progression (24.0s total at 120 BPM)
    const BARS = [
      // Intro (Bars 0-1): Ambient groove establishing the upbeat vibe
      { root: 87.31, chord: [174.61, 220.00, 261.63, 329.63] }, // Bar 0: Fmaj7
      { root: 98.00, chord: [196.00, 246.94, 293.66, 329.63] }, // Bar 1: G6
      // Section A (Bars 2-5): Main Catchy Hook (Cmaj7 -> Em7 -> Am7 -> Fmaj7)
      { root: 65.41, chord: [196.00, 246.94, 261.63, 329.63] }, // Bar 2: Cmaj7
      { root: 82.41, chord: [196.00, 246.94, 293.66, 329.63] }, // Bar 3: Em7
      { root: 110.00, chord: [220.00, 261.63, 329.63, 392.00] }, // Bar 4: Am7
      { root: 87.31, chord: [174.61, 220.00, 261.63, 329.63] }, // Bar 5: Fmaj7
      // Section B (Bars 6-9): Melodic Lift & Sparkle (Dm7 -> Em7 -> Fmaj9 -> G7sus4)
      { root: 73.42, chord: [174.61, 220.00, 261.63, 293.66] }, // Bar 6: Dm7
      { root: 82.41, chord: [196.00, 246.94, 293.66, 329.63] }, // Bar 7: Em7
      { root: 87.31, chord: [174.61, 220.00, 261.63, 392.00] }, // Bar 8: Fmaj9
      { root: 98.00, chord: [196.00, 261.63, 293.66, 349.23] }, // Bar 9: G7sus4
      // Section C (Bars 10-11): Climax & Seamless Turnaround (Am9 -> G7)
      { root: 110.00, chord: [220.00, 246.94, 261.63, 329.63] }, // Bar 10: Am9
      { root: 98.00, chord: [196.00, 246.94, 293.66, 349.23] }   // Bar 11: G7
    ];
    const barData = BARS[bar] || BARS[0];

    // ── 1. DRUMS & PERCUSSION ─────────────────────────────────────
    let playKick = false;
    let playRim = false;
    let playHat = false;
    let hatAccent = false;

    if (bar <= 1) {
      // Intro: gentle kick on beats 1 & 3, soft shaker on eighth notes
      if (stepInBar === 0 || stepInBar === 8) playKick = true;
      if (stepInBar % 2 === 0) playHat = true;
    } else if (bar >= 2 && bar <= 5) {
      // Section A: punchy groove, kick on 1 & 3 (+ ghost 14 in bars 3 & 5), rim on 2 & 4
      if (stepInBar === 0 || stepInBar === 8 || ((bar === 3 || bar === 5) && stepInBar === 14)) playKick = true;
      if (stepInBar === 4 || stepInBar === 12) playRim = true;
      playHat = true;
      if (stepInBar % 4 === 2) hatAccent = true;
    } else if (bar >= 6 && bar <= 9) {
      // Section B: high-energy dance-pop kicks (0, 6, 8, 14), rim on 2 & 4
      if (stepInBar === 0 || stepInBar === 6 || stepInBar === 8 || stepInBar === 14) playKick = true;
      if (stepInBar === 4 || stepInBar === 12) playRim = true;
      playHat = true;
      if (stepInBar % 4 === 2) hatAccent = true;
    } else if (bar === 10) {
      // Section C: solid driving beats
      if (stepInBar === 0 || stepInBar === 8) playKick = true;
      if (stepInBar === 4 || stepInBar === 12) playRim = true;
      playHat = true;
      if (stepInBar % 4 === 2) hatAccent = true;
    } else if (bar === 11) {
      // Turnaround fill leading seamlessly into Bar 0:
      if (stepInBar === 0 || stepInBar === 6 || stepInBar === 8) playKick = true;
      if (stepInBar === 4 || stepInBar === 10 || stepInBar === 12 || stepInBar === 14) playRim = true;
      playHat = true;
      if (stepInBar % 2 === 0) hatAccent = true;
    }

    // Synthesize Kick
    if (playKick) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(bar <= 1 ? 95 : 120, time);
      osc.frequency.exponentialRampToValueAtTime(36, time + 0.08);

      const kickVol = bar <= 1 ? 0.045 : (bar >= 6 && bar <= 9 ? 0.070 : 0.065);
      gain.gain.setValueAtTime(kickVol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.085);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.09);
    }

    // Synthesize Rim Clack
    if (playRim) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, time);
      osc.frequency.exponentialRampToValueAtTime(150, time + 0.035);

      const rimVol = bar === 11 ? 0.035 : 0.030;
      gain.gain.setValueAtTime(rimVol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);

      osc.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.045);
    }

    // Synthesize Hi-Hat / Shaker
    if (playHat && this.pinkNoiseBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.pinkNoiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(4800, time);

      const gain = this.ctx.createGain();
      const isOpenSplash = (bar === 9 && stepInBar === 14);
      const hatVol = isOpenSplash ? 0.024 : (hatAccent ? 0.018 : 0.009);
      const hatDur = isOpenSplash ? 0.070 : 0.025;

      gain.gain.setValueAtTime(hatVol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + hatDur);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmFadeGain);
      src.start(time);
      src.stop(time + hatDur + 0.005);
    }

    // ── 2. BASSLINE SYNTHESIZER ──────────────────────────────────
    let playBass = false;
    let bassFreq = barData.root;

    if (bar <= 1) {
      // Intro: gentle round 4-on-the-floor root bass pulses
      if (stepInBar === 0 || stepInBar === 4 || stepInBar === 8 || stepInBar === 12) {
        playBass = true;
        bassFreq = barData.root;
      }
    } else if (bar >= 2 && bar <= 5) {
      // Section A: funky syncopated 16th groove with octave jumps
      const aBassSteps = [0, 3, 6, 8, 10, 12, 14];
      if (aBassSteps.includes(stepInBar)) {
        playBass = true;
        bassFreq = (stepInBar === 6 || stepInBar === 14) ? barData.root * 2 : barData.root;
      }
    } else if (bar >= 6 && bar <= 9) {
      // Section B: energetic walking bassline
      const bBassSteps = [0, 2, 4, 6, 8, 10, 12, 14];
      if (bBassSteps.includes(stepInBar)) {
        playBass = true;
        bassFreq = (stepInBar === 6 || stepInBar === 14) ? barData.root * 2 : barData.root;
      }
    } else if (bar === 10) {
      // Section C Bar 10: Am9 groove
      const cBassSteps = [0, 3, 6, 8, 10, 12];
      if (cBassSteps.includes(stepInBar)) {
        playBass = true;
        bassFreq = (stepInBar === 6) ? barData.root * 2 : barData.root;
      }
    } else if (bar === 11) {
      // Section C Bar 11: turnaround walk leading into Bar 0's Fmaj7
      if (stepInBar === 0) { playBass = true; bassFreq = 98.00; }       // G2
      else if (stepInBar === 4) { playBass = true; bassFreq = 110.00; }  // A2
      else if (stepInBar === 8) { playBass = true; bassFreq = 123.47; }  // B2
      else if (stepInBar === 12) { playBass = true; bassFreq = 130.81; } // C3
    }

    if (playBass) {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = bar <= 1 ? 'triangle' : 'sawtooth';
      osc.frequency.setValueAtTime(bassFreq, time);

      filter.type = 'lowpass';
      filter.Q.setValueAtTime(bar <= 1 ? 1.5 : 3.2, time);
      const startCutoff = bar <= 1 ? 240 : 400;
      const endCutoff = bar <= 1 ? 90 : 75;
      filter.frequency.setValueAtTime(startCutoff, time);
      filter.frequency.exponentialRampToValueAtTime(endCutoff, time + 0.11);

      const bassVol = bar <= 1 ? 0.038 : 0.045;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(bassVol, time + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + 0.13);
    }

    // ── 3. HARMONIC CHORD STABS & AMBIENT KEYS ───────────────────
    let playChord = false;
    let chordDur = 0.14;
    let chordVol = 0.012;

    if (bar <= 1) {
      if (stepInBar === 4 || stepInBar === 12) {
        playChord = true;
        chordDur = 0.22;
        chordVol = 0.010;
      }
    } else if (bar >= 2 && bar <= 5) {
      if (stepInBar === 4 || stepInBar === 7 || stepInBar === 12) {
        playChord = true;
        chordDur = 0.14;
        chordVol = 0.012;
      }
    } else if (bar >= 6 && bar <= 9) {
      if (stepInBar === 4 || stepInBar === 7 || stepInBar === 12 || stepInBar === 15) {
        playChord = true;
        chordDur = 0.16;
        chordVol = 0.013;
      }
    } else if (bar === 10) {
      if (stepInBar === 4 || stepInBar === 12) {
        playChord = true;
        chordDur = 0.16;
        chordVol = 0.012;
      }
    } else if (bar === 11) {
      if (stepInBar === 4) {
        playChord = true;
        chordDur = 0.14;
        chordVol = 0.012;
      } else if (stepInBar === 12) {
        // Sustaining turnaround chord that crossfades smoothly across loop boundary into Bar 0
        playChord = true;
        chordDur = 0.45;
        chordVol = 0.014;
      }
    }

    if (playChord) {
      barData.chord.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(680, time);

        gain.gain.setValueAtTime(0.0001, time);
        gain.gain.linearRampToValueAtTime(chordVol, time + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + chordDur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.bgmFadeGain);
        osc.start(time);
        osc.stop(time + chordDur + 0.01);
      });
    }

    // ── 4. SPARKLING HIGH ARPEGGIO CHIMES (Section B: Bars 6-9) ──
    if (bar >= 6 && bar <= 9) {
      const HIGH_ARPS = [
        [587.33, 698.46, 880.00, 1046.50], // Dm7: D5, F5, A5, C6
        [659.25, 783.99, 987.77, 1174.66], // Em7: E5, G5, B5, D6
        [698.46, 880.00, 1046.50, 1318.51], // Fmaj9: F5, A5, C6, E6
        [783.99, 987.77, 1046.50, 1174.66]  // G7sus: G5, B5, C6, D6
      ];
      const arpSet = HIGH_ARPS[bar - 6];
      const arpFreq = arpSet[stepInBar % arpSet.length];

      const pluckOsc = this.ctx.createOscillator();
      const pluckGain = this.ctx.createGain();

      pluckOsc.type = 'triangle';
      pluckOsc.frequency.setValueAtTime(arpFreq, time);

      pluckGain.gain.setValueAtTime(0.0001, time);
      pluckGain.gain.linearRampToValueAtTime(0.016, time + 0.005);
      pluckGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

      pluckOsc.connect(pluckGain);
      pluckGain.connect(this.bgmFadeGain);
      pluckOsc.start(time);
      pluckOsc.stop(time + 0.09);
    }

    // ── 5. CATCHY SINGABLE LEAD MELODY ───────────────────────────
    // Full 12-bar melodic composition across 192 steps (24.0 seconds)
    const MELODY = {
      // Intro (Bars 0-1): Ambient bell chimes welcoming player
      4:   { freq: 440.00, dur: 0.22, vol: 0.024 }, // A4
      8:   { freq: 523.25, dur: 0.25, vol: 0.026 }, // C5
      12:  { freq: 659.25, dur: 0.35, vol: 0.028 }, // E5
      20:  { freq: 493.88, dur: 0.22, vol: 0.024 }, // B4
      24:  { freq: 587.33, dur: 0.25, vol: 0.026 }, // D5
      28:  { freq: 783.99, dur: 0.40, vol: 0.030 }, // G5

      // Section A - Main Catchy Theme (Bars 2-5): Singable, joyful, playful hook!
      32:  { freq: 392.00, dur: 0.28, vol: 0.038 }, // G4
      36:  { freq: 329.63, dur: 0.16, vol: 0.034 }, // E4
      38:  { freq: 392.00, dur: 0.16, vol: 0.036 }, // G4
      40:  { freq: 440.00, dur: 0.35, vol: 0.040 }, // A4
      44:  { freq: 523.25, dur: 0.28, vol: 0.040 }, // C5

      48:  { freq: 493.88, dur: 0.28, vol: 0.038 }, // B4
      52:  { freq: 392.00, dur: 0.16, vol: 0.034 }, // G4
      54:  { freq: 329.63, dur: 0.16, vol: 0.034 }, // E4
      56:  { freq: 293.66, dur: 0.35, vol: 0.036 }, // D4
      60:  { freq: 329.63, dur: 0.22, vol: 0.036 }, // E4

      64:  { freq: 523.25, dur: 0.28, vol: 0.040 }, // C5
      68:  { freq: 493.88, dur: 0.16, vol: 0.036 }, // B4
      70:  { freq: 440.00, dur: 0.16, vol: 0.036 }, // A4
      72:  { freq: 392.00, dur: 0.28, vol: 0.038 }, // G4
      76:  { freq: 329.63, dur: 0.22, vol: 0.036 }, // E4

      80:  { freq: 392.00, dur: 0.22, vol: 0.036 }, // G4
      84:  { freq: 329.63, dur: 0.16, vol: 0.034 }, // E4
      86:  { freq: 293.66, dur: 0.16, vol: 0.034 }, // D4
      88:  { freq: 261.63, dur: 0.55, vol: 0.038 }, // C4 (held resolution)
      94:  { freq: 293.66, dur: 0.18, vol: 0.032 }, // D4 pickup

      // Section B - Harmonic Lift & Higher Register (Bars 6-9)
      96:  { freq: 440.00, dur: 0.22, vol: 0.038 }, // A4
      100: { freq: 523.25, dur: 0.22, vol: 0.040 }, // C5
      104: { freq: 587.33, dur: 0.28, vol: 0.042 }, // D5
      108: { freq: 659.25, dur: 0.32, vol: 0.042 }, // E5

      112: { freq: 783.99, dur: 0.30, vol: 0.044 }, // G5 (bright peak!)
      116: { freq: 659.25, dur: 0.20, vol: 0.040 }, // E5
      120: { freq: 587.33, dur: 0.22, vol: 0.038 }, // D5
      124: { freq: 493.88, dur: 0.28, vol: 0.038 }, // B4

      128: { freq: 523.25, dur: 0.22, vol: 0.040 }, // C5
      132: { freq: 659.25, dur: 0.24, vol: 0.042 }, // E5
      136: { freq: 880.00, dur: 0.35, vol: 0.044 }, // A5 (climax!)
      140: { freq: 783.99, dur: 0.25, vol: 0.040 }, // G5

      144: { freq: 698.46, dur: 0.24, vol: 0.040 }, // F5
      148: { freq: 587.33, dur: 0.22, vol: 0.038 }, // D5
      152: { freq: 493.88, dur: 0.22, vol: 0.036 }, // B4
      156: { freq: 392.00, dur: 0.28, vol: 0.036 }, // G4

      // Section C - Resolution & Turnaround (Bars 10-11)
      160: { freq: 440.00, dur: 0.22, vol: 0.038 }, // A4
      164: { freq: 523.25, dur: 0.22, vol: 0.040 }, // C5
      168: { freq: 659.25, dur: 0.28, vol: 0.042 }, // E5
      172: { freq: 587.33, dur: 0.25, vol: 0.038 }, // D5

      176: { freq: 523.25, dur: 0.22, vol: 0.038 }, // C5
      180: { freq: 493.88, dur: 0.20, vol: 0.036 }, // B4
      184: { freq: 392.00, dur: 0.24, vol: 0.036 }, // G4
      188: { freq: 440.00, dur: 0.42, vol: 0.038 }  // A4 (melodic suspension linking smoothly into Bar 0)
    };

    const note = MELODY[step];
    if (note) {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.freq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, time);
      filter.Q.setValueAtTime(1.2, time);

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(note.vol, time + 0.015);
      gain.gain.setValueAtTime(note.vol * 0.8, time + note.dur * 0.65);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + note.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmFadeGain);
      osc.start(time);
      osc.stop(time + note.dur + 0.01);
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * SLINGSHOT MECHANICS (PULL & SHOOT)
   * Pulling: 100% SILENT.
   * Shooting: Classic 'Angry Birds' style satisfying release snap.
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Completely silent on pulling/dragging per strict user constraint.
   */
  updateSlingshotCharge() {
    // 100% silent - no-op
  }

  stopSlingshotCharge() {
    // 100% silent - no-op
  }

  playStretch() {
    // 100% silent - no-op
  }

  /**
   * Classic Angry Birds style launch snap ("fwip-thwack!"):
   *  - Sharp high-tension rubber band whip-crack snap
   *  - Kinetic pouch pop & release thud
   *  - Tight aerodynamic air displacement
   */
  playLaunch(power = 1.0) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const clampedPower = Math.min(1.4, Math.max(0.6, power));

    // 1. High-tension rubber band snap (the classic "thwack!" transient)
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'sawtooth';
    snapOsc.frequency.setValueAtTime(1350 * clampedPower, now);
    snapOsc.frequency.exponentialRampToValueAtTime(220, now + 0.032);

    snapGain.gain.setValueAtTime(0.28 * clampedPower, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.036);

    snapOsc.connect(snapGain);
    snapGain.connect(this.sfxGain);
    snapOsc.start(now);
    snapOsc.stop(now + 0.04);

    // 2. Leather pouch kinetic release thud
    const thumpOsc = ctx.createOscillator();
    const thumpGain = ctx.createGain();
    thumpOsc.type = 'sine';
    thumpOsc.frequency.setValueAtTime(140 * clampedPower, now);
    thumpOsc.frequency.exponentialRampToValueAtTime(45, now + 0.065);

    thumpGain.gain.setValueAtTime(0.3 * clampedPower, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

    thumpOsc.connect(thumpGain);
    thumpGain.connect(this.sfxGain);
    thumpOsc.start(now);
    thumpOsc.stop(now + 0.08);

    // 3. Short, tight aerodynamic air slip
    if (this.pinkNoiseBuffer) {
      const noise = ctx.createBufferSource();
      noise.buffer = this.pinkNoiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(950 * clampedPower, now);
      filter.frequency.exponentialRampToValueAtTime(280, now + 0.08);
      filter.Q.setValueAtTime(2.2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.2 * clampedPower, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.sfxGain);

      noise.start(now);
      noise.stop(now + 0.09);
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * IN-FLIGHT SILENCE
   * Projectile travels through the air in complete silence.
   * ═════════════════════════════════════════════════════════════ */

  startFlightSound() {
    // 100% silent - no-op
  }

  updateFlightSound() {
    // 100% silent - no-op
  }

  stopFlightSound() {
    // 100% silent - no-op
  }

  /* ═════════════════════════════════════════════════════════════
   * REALISTIC IMPACT & DESTRUCTION SFX
   * Wood Structures: Solid snapping, cracking, splintering.
   * Stone Structures: Heavy, forceful crushing and crumbling stone.
   * Strictly avoid any cartoonish, goofy, or unnatural effects.
   * ═════════════════════════════════════════════════════════════ */

  /**
   * Realistic material collision impact sound upon contact.
   */
  playMaterialImpact(material = 'wood', intensity = 1.0) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const vol = Math.min(0.32, Math.max(0.06, intensity * 0.22));

    if (material === 'stone') {
      // Stone Impact: Heavy, forceful crushing stone contact
      // 1. Sharp, brutal mineral cleavage transient
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.type = 'sawtooth';
      click.frequency.setValueAtTime(1350, now);
      click.frequency.exponentialRampToValueAtTime(320, now + 0.018);
      clickGain.gain.setValueAtTime(vol * 0.9, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
      click.connect(clickGain);
      clickGain.connect(this.sfxGain);
      click.start(now);
      click.stop(now + 0.025);

      // 2. Heavy granite mass body thud
      const body = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      body.type = 'triangle';
      body.frequency.setValueAtTime(68, now);
      body.frequency.exponentialRampToValueAtTime(26, now + 0.09);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, now);

      bodyGain.gain.setValueAtTime(vol, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);

      body.connect(filter);
      filter.connect(bodyGain);
      bodyGain.connect(this.sfxGain);
      body.start(now);
      body.stop(now + 0.1);

    } else if (material === 'glass') {
      // Brittle crystal chip
      [2300, 3400].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.008);
        gain.gain.setValueAtTime(vol * 0.7, now + idx * 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.008 + 0.045);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now + idx * 0.008);
        osc.stop(now + idx * 0.008 + 0.05);
      });

    } else if (material === 'ground') {
      // Earth / turf displacement
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(74, now);
      osc.frequency.exponentialRampToValueAtTime(26, now + 0.09);

      gain.gain.setValueAtTime(vol * 0.9, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.11);

    } else {
      // Wood Structures: Solid timber knock upon impact
      // 1. Sharp wood contact snap
      const snap = ctx.createOscillator();
      const snapGain = ctx.createGain();
      snap.type = 'triangle';
      snap.frequency.setValueAtTime(850, now);
      snap.frequency.exponentialRampToValueAtTime(140, now + 0.02);
      snapGain.gain.setValueAtTime(vol * 0.85, now);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);
      snap.connect(snapGain);
      snapGain.connect(this.sfxGain);
      snap.start(now);
      snap.stop(now + 0.025);

      // 2. Hollow acoustic timber body
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(215, now);
      osc1.frequency.exponentialRampToValueAtTime(65, now + 0.07);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(330, now);
      osc2.frequency.exponentialRampToValueAtTime(110, now + 0.05);

      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.sfxGain);
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
   * Realistic Material Destruction SFX:
   *  - Wood: Solid snapping, cracking, and splintering timber.
   *  - Stone: Heavy, forceful crushing and crumbling stone debris.
   *  - Multi-block scaling with low-frequency seismic rumble.
   */
  playBlockBreak(type = 'wood', breakCount = 1) {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;
    const countMult = Math.min(2.4, 1.0 + (breakCount - 1) * 0.35);

    if (type === 'stone') {
      // Stone Structures: Heavy, forceful crushing and crumbling stone
      // 1. Deep concussive rock cleavage fracture
      const crackOsc = ctx.createOscillator();
      const crackGain = ctx.createGain();
      crackOsc.type = 'sawtooth';
      crackOsc.frequency.setValueAtTime(56, now);
      crackOsc.frequency.exponentialRampToValueAtTime(20, now + 0.22);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, now);
      filter.frequency.exponentialRampToValueAtTime(65, now + 0.2);

      crackGain.gain.setValueAtTime(0.22 * countMult, now);
      crackGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);

      crackOsc.connect(filter);
      filter.connect(crackGain);
      crackGain.connect(this.sfxGain);
      crackOsc.start(now);
      crackOsc.stop(now + 0.24);

      // 2. Gritty rock-on-rock crumbling friction & tumbling stone clatter
      if (this.pinkNoiseBuffer) {
        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = this.pinkNoiseBuffer;

        const nFilter = ctx.createBiquadFilter();
        nFilter.type = 'bandpass';
        nFilter.frequency.setValueAtTime(240, now);
        nFilter.Q.setValueAtTime(1.3, now);

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.2 * countMult, now);
        nGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

        noiseSrc.connect(nFilter);
        nFilter.connect(nGain);
        nGain.connect(this.sfxGain);
        noiseSrc.start(now);
        noiseSrc.stop(now + 0.3);
      }

    } else if (type === 'glass') {
      // Tempered crystal fracture
      [1850, 2450, 3100, 3750].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const start = now + idx * 0.01;
        osc.frequency.setValueAtTime(freq + Math.random() * 140, start);
        gain.gain.setValueAtTime(0.08 * countMult, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.13);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(start);
        osc.stop(start + 0.14);
      });

    } else {
      // Wood Structures: Solid, realistic snapping, cracking, and splintering
      // 1. High-energy structural timber snap
      const snapOsc = ctx.createOscillator();
      const snapGain = ctx.createGain();
      snapOsc.type = 'triangle';
      snapOsc.frequency.setValueAtTime(980, now);
      snapOsc.frequency.exponentialRampToValueAtTime(140, now + 0.035);

      snapGain.gain.setValueAtTime(0.22 * countMult, now);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      snapOsc.connect(snapGain);
      snapGain.connect(this.sfxGain);
      snapOsc.start(now);
      snapOsc.stop(now + 0.05);

      // 2. Dry hollow timber resonance
      const woodOsc = ctx.createOscillator();
      const woodGain = ctx.createGain();
      woodOsc.type = 'triangle';
      woodOsc.frequency.setValueAtTime(190, now);
      woodOsc.frequency.exponentialRampToValueAtTime(50, now + 0.12);

      woodGain.gain.setValueAtTime(0.15 * countMult, now);
      woodGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

      woodOsc.connect(woodGain);
      woodGain.connect(this.sfxGain);
      woodOsc.start(now);
      woodOsc.stop(now + 0.14);

      // 3. Realistic multi-stage wood fiber splintering bursts
      if (this.pinkNoiseBuffer) {
        [0.0, 0.008, 0.018, 0.030, 0.048].forEach((offset, idx) => {
          const sSrc = ctx.createBufferSource();
          sSrc.buffer = this.pinkNoiseBuffer;

          const sFilter = ctx.createBiquadFilter();
          sFilter.type = 'bandpass';
          sFilter.frequency.setValueAtTime(750 + idx * 220, now + offset);
          sFilter.Q.setValueAtTime(3.0, now + offset);

          const sGain = ctx.createGain();
          sGain.gain.setValueAtTime(0.14 * countMult, now + offset);
          sGain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.055);

          sSrc.connect(sFilter);
          sFilter.connect(sGain);
          sGain.connect(this.sfxGain);

          sSrc.start(now + offset);
          sSrc.stop(now + offset + 0.065);
        });
      }
    }

    // Dynamic structural collapse rumble when multiple blocks collapse together
    if (breakCount > 1) {
      const rumbleOsc = ctx.createOscillator();
      const rumbleGain = ctx.createGain();
      rumbleOsc.type = 'sine';
      rumbleOsc.frequency.setValueAtTime(48, now);
      rumbleOsc.frequency.exponentialRampToValueAtTime(24, now + 0.38);

      rumbleGain.gain.setValueAtTime(0.14 * Math.min(1.8, countMult), now);
      rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      rumbleOsc.connect(rumbleGain);
      rumbleGain.connect(this.sfxGain);
      rumbleOsc.start(now);
      rumbleOsc.stop(now + 0.42);
    }
  }

  /**
   * Resonant TNT explosion with deep sub-bass concussive blast and fiery roar.
   */
  playExplosion() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(75, now);
    osc.frequency.exponentialRampToValueAtTime(22, now + 0.6);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.65);

    if (this.pinkNoiseBuffer) {
      const noise = ctx.createBufferSource();
      noise.buffer = this.pinkNoiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(70, now + 0.48);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.sfxGain);
      noise.start(now);
      noise.stop(now + 0.55);
    }
  }

  /**
   * Target defeat: Solid physical kinetic elimination strike.
   */
  playTargetPop() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.15);
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
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.22);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
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

    [880.0, 1174.66].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      gain.gain.setValueAtTime(0.12, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.18);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.2);
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * GAME OUTCOME AUDIO (WIN / LOSS)
   * ═════════════════════════════════════════════════════════════ */

  playVictory() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const chord = [261.63, 329.63, 392.0, 493.88, 587.33];
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const noteTime = now + idx * 0.08;
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(0.14, noteTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.7);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.75);
    });

    setTimeout(() => {
      if (!this.ctx || this.isMuted) return;
      const cNow = this.ctx.currentTime;
      [1046.5, 1318.51].forEach((freq) => {
        const bell = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bell.type = 'sine';
        bell.frequency.setValueAtTime(freq, cNow);
        bGain.gain.setValueAtTime(0.08, cNow);
        bGain.gain.exponentialRampToValueAtTime(0.0001, cNow + 0.9);
        bell.connect(bGain);
        bGain.connect(this.sfxGain);
        bell.start(cNow);
        bell.stop(cNow + 0.95);
      });
    }, 450);
  }

  playDefeat() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    [155.56, 130.81].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const noteTime = now + idx * 0.35;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, noteTime);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.linearRampToValueAtTime(0.12, noteTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.45);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.48);
    });
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
      gain.connect(this.sfxGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.38);
    });
  }

  playCloudWhoosh() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    // Atmospheric sweeping wind using pink noise buffer & resonant filter sweep
    if (this.pinkNoiseBuffer) {
      const src = ctx.createBufferSource();
      src.buffer = this.pinkNoiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.6);
      filter.frequency.exponentialRampToValueAtTime(400, now + 1.4);
      filter.Q.setValueAtTime(3.0, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);
      src.start(now);
      src.stop(now + 1.5);
    }
  }

  playMarkerStep() {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.1);
  }
}
