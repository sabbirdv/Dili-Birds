import { AVATAR_PRESETS } from '../ui/avatarPresets.js';

const STORAGE_KEY = 'dili_birds_3d_player_session_v1';
const DEFAULT_BRAND_NAME = 'Dili Birds';

const DEFAULT_STATE = {
  username: '',
  avatarUrl: AVATAR_PRESETS[0].url,
  avatarPresetId: AVATAR_PRESETS[0].id,
  profileConfigured: false,
  unlockedLevel: 1,
  coins: 100, // Starter coin bonus for new players
  levelStars: {}, // e.g., { 1: 3, 2: 2 }
  levelHighScores: {},
  claimedCoinLevels: {}, // Tracks level IDs where coins have already been awarded
  claimedMissions: {}, // Tracks mission IDs where quest rewards have been claimed
  brandName: DEFAULT_BRAND_NAME,
  soundEnabled: true,
  sfxVolume: 0.85,
  bgmVolume: 0.45,
  bgmMode: 'dashboard' // 'dashboard' (default) | 'always' (dashboard + in-game) | 'off'
};

export class StorageManager {
  constructor() {
    this.state = this.loadState();
  }

  loadState() {
    try {
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
        bgmVolume: typeof parsed.bgmVolume === 'number' ? Math.max(0, Math.min(1, parsed.bgmVolume)) : 0.45,
        bgmMode: ['dashboard', 'always', 'off'].includes(parsed.bgmMode) ? parsed.bgmMode : 'dashboard',
        levelStars: { ...(parsed.levelStars || {}) },
        levelHighScores: { ...(parsed.levelHighScores || {}) },
        claimedCoinLevels: { ...(parsed.claimedCoinLevels || {}) },
        claimedMissions: { ...(parsed.claimedMissions || {}) }
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

  getTotalStars() {
    return Object.values(this.state.levelStars).reduce((acc, s) => acc + (Number(s) || 0), 0);
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

    const prevStars = this.getStarsForLevel(id);
    if (starsEarned > prevStars) {
      this.state.levelStars[id] = starsEarned;
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

    // Sequential level unlocking
    if (id >= this.state.unlockedLevel && id < totalLevelsCount) {
      this.state.unlockedLevel = id + 1;
    }

    this.saveState();
    return { actualCoinsAwarded, isFirstTimeWin };
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
      this.state.coins = (this.state.coins || 0) + coinReward;
    }
    this.saveState();
    return true;
  }

  addCoins(amount) {
    if (!amount || amount <= 0) return this.state.coins;
    this.state.coins = (this.state.coins || 0) + amount;
    this.saveState();
    return this.state.coins;
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
      levelStars: {},
      levelHighScores: {},
      claimedCoinLevels: {}
    };
    this.saveState();
    return this.state;
  }
}
