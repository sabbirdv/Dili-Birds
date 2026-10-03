import { AVATAR_PRESETS } from '../ui/avatarPresets.js';

const HARD_RESET_KEY = 'dili_birds_v2_hard_reset_applied_v1';
const STORAGE_KEY = 'dili_birds_3d_player_session_v1';
const DEFAULT_BRAND_NAME = 'Dili Birds';

const DEFAULT_STATE = {
  username: '',
  avatarUrl: AVATAR_PRESETS[0].url,
  avatarPresetId: AVATAR_PRESETS[0].id,
  profileConfigured: false,
  unlockedLevel: 1,
  coins: 0, // Fresh start: 0 coins for all players
  levelStars: {}, // e.g., { 1: 3, 2: 2 } - Total stars: 0
  levelHighScores: {},
  claimedCoinLevels: {}, // Tracks level IDs where coins have already been awarded
  claimedMissions: {}, // Tracks mission IDs where quest rewards have been claimed
  zoneRevealed: { 1: true, 2: false }, // Tracks revealed zones on roadmap
  brandName: DEFAULT_BRAND_NAME,
  soundEnabled: true,
  sfxVolume: 0.85,
  bgmVolume: 0.80,
  bgmMode: 'dashboard', // 'dashboard' (default) | 'always' (dashboard + in-game) | 'off'
  playerId: '',
  serverRowId: null, // Unique ID in Supabase Dili-Birds-Data table
  leaderboardRank: 1
};

export class StorageManager {
  constructor() {
    this.state = this.loadState();
  }

  loadState() {
    try {
      // Hard Data Reset for All Players (New or Existing)
      // When opened after this update, completely wipe previous localStorage and start at 0
      const hasAppliedHardReset = window.localStorage.getItem(HARD_RESET_KEY);
      if (!hasAppliedHardReset) {
        window.localStorage.clear();
        window.localStorage.setItem(HARD_RESET_KEY, 'true');
        const freshState = { ...DEFAULT_STATE };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(freshState));
        return freshState;
      }

      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return { ...DEFAULT_STATE };
      }
      const parsed = JSON.parse(raw);

      // If user hasn't explicitly configured a custom profile and was on default pet avatar, migrate to commander avatar
      if (!parsed.profileConfigured && (parsed.avatarPresetId === 'orb-blue' || !parsed.avatarPresetId)) {
        parsed.avatarPresetId = AVATAR_PRESETS[0].id;
        parsed.avatarUrl = AVATAR_PRESETS[0].url;
      }

      // Migrate any legacy inline SVG preset or match known preset
      const matchedPreset = AVATAR_PRESETS.find((p) => p.id === parsed.avatarPresetId);
      let resolvedAvatarUrl = parsed.avatarUrl || AVATAR_PRESETS[0].url;
      let resolvedPresetId = parsed.avatarPresetId || AVATAR_PRESETS[0].id;

      if (matchedPreset) {
        resolvedAvatarUrl = matchedPreset.url;
      }

      return {
        ...DEFAULT_STATE,
        ...parsed,
        brandName: DEFAULT_BRAND_NAME,
        avatarUrl: resolvedAvatarUrl,
        avatarPresetId: resolvedPresetId,
        soundEnabled: parsed.soundEnabled !== undefined ? Boolean(parsed.soundEnabled) : true,
        sfxVolume: typeof parsed.sfxVolume === 'number' ? Math.max(0, Math.min(1, parsed.sfxVolume)) : 0.85,
        bgmVolume: typeof parsed.bgmVolume === 'number'
          ? (parsed.bgmVolume === 0.45 ? 0.80 : Math.max(0, Math.min(1, parsed.bgmVolume)))
          : 0.80,
        bgmMode: ['dashboard', 'always', 'off'].includes(parsed.bgmMode) ? parsed.bgmMode : 'dashboard',
        coins: Math.max(0, Number(parsed.coins) || 0),
        levelStars: { ...(parsed.levelStars || {}) },
        levelHighScores: { ...(parsed.levelHighScores || {}) },
        claimedCoinLevels: { ...(parsed.claimedCoinLevels || {}) },
        claimedMissions: { ...(parsed.claimedMissions || {}) },
        zoneRevealed: { 1: true, 2: Boolean(parsed.zoneRevealed?.[2] || Number(parsed.unlockedLevel) > 10) },
        playerId: typeof parsed.playerId === 'string' && parsed.playerId ? parsed.playerId : '',
        serverRowId: parsed.serverRowId !== undefined ? parsed.serverRowId : null
      };
    } catch (err) {
      console.warn('LocalStorage unavailable or corrupted, using in-memory fallback:', err);
      return { ...DEFAULT_STATE };
    }
  }

  saveState() {
    try {
      this.state.brandName = DEFAULT_BRAND_NAME;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (err) {
      console.warn('Failed to persist session to LocalStorage:', err);
    }
  }

  isProfileConfigured() {
    return Boolean(this.state.profileConfigured && this.hasUsername());
  }

  hasUsername() {
    return Boolean(this.state.username && this.state.username.trim().length >= 2);
  }

  getUsername() {
    return this.hasUsername() ? this.state.username.trim() : 'Commander';
  }

  setUsername(name) {
    const cleaned = (name || '').trim().slice(0, 24);
    if (cleaned) {
      this.state.username = cleaned;
      this.state.profileConfigured = true;
      this.saveState();
    }
    return this.getUsername();
  }

  getAvatarUrl() {
    return this.state.avatarUrl || AVATAR_PRESETS[0].url;
  }

  getAvatarPresetId() {
    return this.state.avatarPresetId || AVATAR_PRESETS[0].id;
  }

  setAvatar(url, presetId = 'custom') {
    if (url) {
      this.state.avatarUrl = url;
      this.state.avatarPresetId = presetId;
      this.saveState();
    }
    return this.state.avatarUrl;
  }

  getBrandName() {
    return DEFAULT_BRAND_NAME;
  }

  getUnlockedLevel() {
    return Math.max(1, Number(this.state.unlockedLevel) || 1);
  }

  getCoins() {
    return Math.max(0, Number(this.state.coins) || 0);
  }

  addCoins(amount) {
    const delta = Math.max(0, Math.round(Number(amount) || 0));
    this.state.coins = this.getCoins() + delta;
    this.saveState();
    return this.state.coins;
  }

  getStarsForLevel(levelId) {
    return Number(this.state.levelStars[levelId]) || 0;
  }

  getHighScoreForLevel(levelId) {
    return Number(this.state.levelHighScores[levelId]) || 0;
  }

  isZoneRevealed(zoneId) {
    const zid = Number(zoneId);
    if (zid <= 1) return true;
    if (this.getUnlockedLevel() > 10) return true;
    return Boolean(this.state.zoneRevealed?.[zid]);
  }

  setZoneRevealed(zoneId, revealed = true) {
    const zid = Number(zoneId);
    if (!this.state.zoneRevealed) {
      this.state.zoneRevealed = { 1: true };
    }
    this.state.zoneRevealed[zid] = Boolean(revealed);
    this.saveState();
    return this.state.zoneRevealed[zid];
  }

  getTotalStars() {
    return Object.values(this.state.levelStars).reduce((acc, s) => acc + (Number(s) || 0), 0);
  }

  getServerRowId() {
    return this.state.serverRowId || null;
  }

  setServerRowId(rowId) {
    if (rowId !== undefined && rowId !== null) {
      this.state.serverRowId = rowId;
      this.saveState();
    }
    return this.state.serverRowId;
  }

  getPlayerId() {
    if (!this.state.playerId) {
      this.state.playerId = 'pilot_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      this.saveState();
    }
    return this.state.playerId;
  }

  getLeaderboardRank() {
    return this.state.leaderboardRank || 1;
  }

  setLeaderboardRank(rank) {
    const num = Math.max(1, Number(rank) || 1);
    this.state.leaderboardRank = num;
    this.saveState();
  }

  getTotalScore() {
    const stars = this.getTotalStars();
    const coins = this.getCoins();
    const highScoresSum = Object.values(this.state.levelHighScores || {}).reduce((acc, v) => acc + (Number(v) || 0), 0);
    return Math.max(stars * 450 + coins * 2, highScoresSum);
  }

  /**
   * Checks whether coins for a given level have already been awarded.
   * Ensures that repeating/replaying an already completed level gives 0 coins.
   */
  hasClaimedCoins(levelId) {
    const id = Number(levelId);
    if (this.state.claimedCoinLevels && this.state.claimedCoinLevels[id]) {
      return true;
    }
    // Backward compatibility: If level already has stars recorded, coins were already claimed
    if (this.state.levelStars && Number(this.state.levelStars[id]) > 0) {
      if (!this.state.claimedCoinLevels) this.state.claimedCoinLevels = {};
      this.state.claimedCoinLevels[id] = true;
      return true;
    }
    // Backward compatibility: If level is strictly less than unlockedLevel, it was previously completed
    if (id < this.getUnlockedLevel()) {
      if (!this.state.claimedCoinLevels) this.state.claimedCoinLevels = {};
      this.state.claimedCoinLevels[id] = true;
      return true;
    }
    return false;
  }

  /**
   * Records level completion, awards coins (only once per level), updates star ratings,
   * and sequentially unlocks the next level.
   */
  recordLevelWin(levelId, score, starsEarned, coinsEarned, totalLevelsCount) {
    const id = Number(levelId);
    const isFirstTimeWin = !this.hasClaimedCoins(id);

    if (!this.state.levelStars) {
      this.state.levelStars = {};
    }
    const prevStars = this.getStarsForLevel(id);
    let starsAdded = 0;
    if (starsEarned > prevStars) {
      starsAdded = starsEarned - prevStars;
      this.state.levelStars[id] = starsEarned;
    }
    const bestStars = this.state.levelStars[id] || 0;

    if (!this.state.levelHighScores) {
      this.state.levelHighScores = {};
    }
    const prevHigh = Number(this.state.levelHighScores[id]) || 0;
    if (score > prevHigh) {
      this.state.levelHighScores[id] = score;
    }

    let actualCoinsAwarded = 0;
    if (isFirstTimeWin) {
      if (!this.state.claimedCoinLevels) {
        this.state.claimedCoinLevels = {};
      }
      this.state.claimedCoinLevels[id] = true;
      actualCoinsAwarded = Math.max(0, Number(coinsEarned) || 0);
      if (actualCoinsAwarded > 0) {
        this.addCoins(actualCoinsAwarded);
      }
    }

    const prevUnlocked = this.getUnlockedLevel();
    let unlockedNewZone = false;

    // Sequential level unlocking
    if (id >= this.state.unlockedLevel && id < totalLevelsCount) {
      this.state.unlockedLevel = id + 1;
      if (id === 10 && prevUnlocked <= 10) {
        unlockedNewZone = true;
      }
    }

    this.saveState();
    return {
      actualCoinsAwarded,
      isFirstTimeWin,
      prevStars,
      starsEarned,
      starsAdded,
      bestStars,
      totalStars: this.getTotalStars(),
      unlockedNewZone,
      newUnlockedLevel: this.state.unlockedLevel
    };
  }

  isSoundEnabled() {
    return Boolean(this.state.soundEnabled);
  }

  setSoundEnabled(enabled) {
    this.state.soundEnabled = Boolean(enabled);
    this.saveState();
    return this.state.soundEnabled;
  }

  toggleSound() {
    this.state.soundEnabled = !this.state.soundEnabled;
    this.saveState();
    return this.state.soundEnabled;
  }

  getSfxVolume() {
    return typeof this.state.sfxVolume === 'number' ? this.state.sfxVolume : 0.85;
  }

  setSfxVolume(val) {
    this.state.sfxVolume = Math.max(0, Math.min(1, Number(val) || 0));
    this.saveState();
    return this.state.sfxVolume;
  }

  getBgmVolume() {
    return typeof this.state.bgmVolume === 'number' ? this.state.bgmVolume : 0.45;
  }

  setBgmVolume(val) {
    this.state.bgmVolume = Math.max(0, Math.min(1, Number(val) || 0));
    this.saveState();
    return this.state.bgmVolume;
  }

  getBgmMode() {
    return this.state.bgmMode || 'dashboard';
  }

  setBgmMode(mode) {
    if (['dashboard', 'always', 'off'].includes(mode)) {
      this.state.bgmMode = mode;
      this.saveState();
    }
    return this.state.bgmMode;
  }

  hasClaimedMission(missionId) {
    return Boolean(this.state.claimedMissions?.[missionId]);
  }

  claimMission(missionId, coinReward = 0) {
    if (this.hasClaimedMission(missionId)) return false;
    if (!this.state.claimedMissions) this.state.claimedMissions = {};
    this.state.claimedMissions[missionId] = true;
    if (coinReward > 0) {
      this.addCoins(coinReward);
    }
    this.saveState();
    return true;
  }

  resetProgress() {
    const currentUsername = this.state.username;
    const currentAvatarUrl = this.state.avatarUrl;
    const currentAvatarPresetId = this.state.avatarPresetId;
    const currentSound = this.state.soundEnabled;
    const currentSfx = this.getSfxVolume();
    const currentBgm = this.getBgmVolume();

    this.state = {
      ...DEFAULT_STATE,
      username: currentUsername,
      brandName: DEFAULT_BRAND_NAME,
      avatarUrl: currentAvatarUrl,
      avatarPresetId: currentAvatarPresetId,
      profileConfigured: Boolean(currentUsername),
      soundEnabled: currentSound,
      sfxVolume: currentSfx,
      bgmVolume: currentBgm,
      coins: 0,
      levelStars: {},
      levelHighScores: {},
      claimedCoinLevels: {},
      claimedMissions: {},
      zoneRevealed: { 1: true, 2: false },
      serverRowId: this.state.serverRowId
    };
    this.saveState();
    return this.state;
  }
}
