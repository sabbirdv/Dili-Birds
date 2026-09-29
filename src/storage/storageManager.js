import { AVATAR_PRESETS } from '../ui/avatarPresets.js';

const STORAGE_KEY = 'dili_birds_3d_player_session_v1';
const DEFAULT_BRAND_NAME = 'Dili-Birds';

const DEFAULT_STATE = {
  username: '',
  avatarUrl: AVATAR_PRESETS[0].url,
  avatarPresetId: AVATAR_PRESETS[0].id,
  profileConfigured: false,
  unlockedLevel: 1,
  coins: 100, // Starter coin bonus for new players
  levelStars: {}, // e.g., { 1: 3, 2: 2 }
  levelHighScores: {},
  brandName: DEFAULT_BRAND_NAME,
  soundEnabled: true
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

      // Migrate any legacy inline SVG preset to the new src/assets character presets
      const matchedPreset = AVATAR_PRESETS.find((p) => p.id === parsed.avatarPresetId);
      let resolvedAvatarUrl = parsed.avatarUrl || AVATAR_PRESETS[0].url;
      let resolvedPresetId = parsed.avatarPresetId || AVATAR_PRESETS[0].id;

      if (matchedPreset) {
        resolvedAvatarUrl = matchedPreset.url;
      } else if (
        typeof resolvedAvatarUrl === 'string' &&
        resolvedAvatarUrl.startsWith('data:image/svg+xml')
      ) {
        resolvedAvatarUrl = AVATAR_PRESETS[0].url;
        resolvedPresetId = AVATAR_PRESETS[0].id;
      }

      return {
        ...DEFAULT_STATE,
        ...parsed,
        brandName: DEFAULT_BRAND_NAME,
        avatarUrl: resolvedAvatarUrl,
        avatarPresetId: resolvedPresetId,
        levelStars: { ...(parsed.levelStars || {}) },
        levelHighScores: { ...(parsed.levelHighScores || {}) }
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
   * Records level completion, awards coins, updates star ratings,
   * and sequentially unlocks the next level.
   */
  recordLevelWin(levelId, score, starsEarned, coinsEarned, totalLevelsCount) {
    const prevStars = this.getStarsForLevel(levelId);
    if (starsEarned > prevStars) {
      this.state.levelStars[levelId] = starsEarned;
    }

    const prevHigh = Number(this.state.levelHighScores[levelId]) || 0;
    if (score > prevHigh) {
      this.state.levelHighScores[levelId] = score;
    }

    this.addCoins(coinsEarned);

    // Sequential level unlocking
    if (levelId >= this.state.unlockedLevel && levelId < totalLevelsCount) {
      this.state.unlockedLevel = levelId + 1;
    }

    this.saveState();
  }

  isSoundEnabled() {
    return Boolean(this.state.soundEnabled);
  }

  toggleSound() {
    this.state.soundEnabled = !this.state.soundEnabled;
    this.saveState();
    return this.state.soundEnabled;
  }

  resetProgress() {
    const currentUsername = this.state.username;
    const currentAvatarUrl = this.state.avatarUrl;
    const currentAvatarPresetId = this.state.avatarPresetId;
    this.state = {
      ...DEFAULT_STATE,
      username: currentUsername,
      brandName: DEFAULT_BRAND_NAME,
      avatarUrl: currentAvatarUrl,
      avatarPresetId: currentAvatarPresetId,
      profileConfigured: Boolean(currentUsername),
      levelStars: {},
      levelHighScores: {}
    };
    this.saveState();
    return this.state;
  }
}
