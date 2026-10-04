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
  claimedCharacters: {}, // Tracks unlocked heroes claimed by player
  seenHeroUnlocks: { commander_falcon: true }, // Tracks heroes whose unlock surprise modal has been seen
  zoneRevealed: { 1: true, 2: false, 3: false }, // Tracks revealed zones on roadmap
  dailyClaim: { lastClaimDate: null, streak: 0, totalClaimedCoins: 0, lastClaimTimestamp: 0 },
  equippedHeroId: 'crimson_ace',
  brandName: DEFAULT_BRAND_NAME,
  soundEnabled: true,
  sfxVolume: 0.90,
  bgmVolume: 0.90,
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
        sfxVolume: typeof parsed.sfxVolume === 'number'
          ? (parsed.sfxVolume < 0.90 ? 0.90 : Math.max(0, Math.min(1, parsed.sfxVolume)))
          : 0.90,
        bgmVolume: typeof parsed.bgmVolume === 'number'
          ? (parsed.bgmVolume < 0.90 ? 0.90 : Math.max(0, Math.min(1, parsed.bgmVolume)))
          : 0.90,
        bgmMode: ['dashboard', 'always', 'off'].includes(parsed.bgmMode) ? parsed.bgmMode : 'dashboard',
        coins: Math.max(0, Number(parsed.coins) || 0),
        levelStars: { ...(parsed.levelStars || {}) },
        levelHighScores: { ...(parsed.levelHighScores || {}) },
        claimedCoinLevels: { ...(parsed.claimedCoinLevels || {}) },
        claimedMissions: { ...(parsed.claimedMissions || {}) },
        claimedCharacters: { ...(parsed.claimedCharacters || {}) },
        seenHeroUnlocks: (() => {
          const seen = { commander_falcon: true, ...(parsed.seenHeroUnlocks || {}) };
          const unlockedLvl = Math.max(1, Number(parsed.unlockedLevel) || 1);
          const milestones = [
            { id: 'commander_falcon', lvl: 1 },
            { id: 'speedster_swift', lvl: 3 },
            { id: 'bomber_titan', lvl: 5 },
            { id: 'splitter_trio', lvl: 7 },
            { id: 'inferno_flare', lvl: 11 },
            { id: 'vortex_titan', lvl: 16 },
            { id: 'volt_striker', lvl: 21 }
          ];
          milestones.forEach((m) => {
            if (m.lvl < unlockedLvl) {
              seen[m.id] = true;
            }
          });
          return seen;
        })(),
        zoneRevealed: {
          1: true,
          2: Boolean(parsed.zoneRevealed?.[2] || Number(parsed.unlockedLevel) > 10),
          3: Boolean(parsed.zoneRevealed?.[3] || Number(parsed.unlockedLevel) > 20)
        },
        dailyClaim: parsed.dailyClaim && typeof parsed.dailyClaim === 'object' ? {
          lastClaimDate: parsed.dailyClaim.lastClaimDate || null,
          streak: Number(parsed.dailyClaim.streak) || 0,
          totalClaimedCoins: Number(parsed.dailyClaim.totalClaimedCoins) || 0,
          lastClaimTimestamp: Number(parsed.dailyClaim.lastClaimTimestamp) || 0
        } : { lastClaimDate: null, streak: 0, totalClaimedCoins: 0, lastClaimTimestamp: 0 },
        equippedHeroId: typeof parsed.equippedHeroId === 'string' && parsed.equippedHeroId ? parsed.equippedHeroId : 'crimson_ace',
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
    if (!this.state?.levelStars) return 0;
    const num = Number(levelId);
    return Math.max(
      Number(this.state.levelStars[num]) || 0,
      Number(this.state.levelStars[String(levelId)]) || 0
    );
  }

  getHighScoreForLevel(levelId) {
    if (!this.state?.levelHighScores) return 0;
    const num = Number(levelId);
    return Math.max(
      Number(this.state.levelHighScores[num]) || 0,
      Number(this.state.levelHighScores[String(levelId)]) || 0
    );
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
    if (!this.state?.levelStars) return 0;
    return Object.values(this.state.levelStars).reduce((acc, s) => acc + (Number(s) || 0), 0);
  }

  getPlayedLevelsCount() {
    const unlocked = this.getUnlockedLevel();
    const playedSet = new Set();
    if (this.state.levelStars) {
      for (const [lvl, s] of Object.entries(this.state.levelStars)) {
        if (Number(s) > 0) playedSet.add(Number(lvl));
      }
    }
    if (this.state.levelHighScores) {
      for (const [lvl, sc] of Object.entries(this.state.levelHighScores)) {
        if (Number(sc) > 0) playedSet.add(Number(lvl));
      }
    }
    for (let i = 1; i < unlocked; i++) {
      playedSet.add(i);
    }
    return playedSet.size;
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
    const earnedStarsNum = Math.min(3, Math.max(0, Number(starsEarned) || 0));
    let starsAdded = 0;
    if (earnedStarsNum > prevStars) {
      starsAdded = earnedStarsNum - prevStars;
      this.state.levelStars[id] = earnedStarsNum;
      this.state.levelStars[String(id)] = earnedStarsNum;
    }
    const bestStars = this.getStarsForLevel(id);

    if (!this.state.levelHighScores) {
      this.state.levelHighScores = {};
    }
    const prevHigh = Number(this.state.levelHighScores[id]) || 0;
    const scoreNum = Math.max(0, Number(score) || 0);
    if (scoreNum > prevHigh) {
      this.state.levelHighScores[id] = scoreNum;
      this.state.levelHighScores[String(id)] = scoreNum;
    }

    let actualCoinsAwarded = 0;
    if (isFirstTimeWin) {
      if (!this.state.claimedCoinLevels) {
        this.state.claimedCoinLevels = {};
      }
      this.state.claimedCoinLevels[id] = true;
      this.state.claimedCoinLevels[String(id)] = true;
      actualCoinsAwarded = Math.max(0, Number(coinsEarned) || 0);
      if (actualCoinsAwarded > 0) {
        this.addCoins(actualCoinsAwarded);
      }
    }

    const prevUnlocked = this.getUnlockedLevel();
    let unlockedNewZone = false;
    let didAdvanceLevel = false;

    // Sequential level unlocking
    if (id >= this.state.unlockedLevel && id < totalLevelsCount) {
      this.state.unlockedLevel = id + 1;
      didAdvanceLevel = true;
      if (id === 10 && prevUnlocked <= 10) {
        unlockedNewZone = true;
        this.setZoneRevealed(2, true);
      }
      if (id === 20 && prevUnlocked <= 20) {
        unlockedNewZone = true;
        this.setZoneRevealed(3, true);
      }
    }

    this.saveState();
    return {
      actualCoinsAwarded,
      isFirstTimeWin,
      prevStars,
      starsEarned: earnedStarsNum,
      starsAdded,
      bestStars,
      totalStars: this.getTotalStars(),
      unlockedNewZone,
      didAdvanceLevel,
      prevUnlockedLevel: prevUnlocked,
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
    return typeof this.state.sfxVolume === 'number' ? this.state.sfxVolume : 0.90;
  }

  setSfxVolume(val) {
    this.state.sfxVolume = Math.max(0, Math.min(1, Number(val) || 0));
    this.saveState();
    return this.state.sfxVolume;
  }

  getBgmVolume() {
    return typeof this.state.bgmVolume === 'number' ? this.state.bgmVolume : 0.90;
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

  hasClaimedCharacter(heroId) {
    return Boolean(this.state.claimedCharacters?.[heroId]);
  }

  hasSeenHeroUnlock(heroId) {
    return Boolean(this.state.seenHeroUnlocks?.[heroId]);
  }

  markHeroUnlockSeen(heroId) {
    if (!this.state.seenHeroUnlocks) {
      this.state.seenHeroUnlocks = { commander_falcon: true };
    }
    this.state.seenHeroUnlocks[heroId] = true;
    this.saveState();
    return true;
  }

  claimCharacter(heroId, coinReward = 0) {
    if (this.hasClaimedCharacter(heroId)) return false;
    if (!this.state.claimedCharacters) this.state.claimedCharacters = {};
    this.state.claimedCharacters[heroId] = true;
    if (coinReward > 0) {
      this.addCoins(coinReward);
    }
    this.saveState();
    return true;
  }

  /* ═════════════════════════════════════════════════════════════
   * DAILY COIN CLAIM SYSTEM (7-DAY STREAK SUPPLY DROP)
   * ═════════════════════════════════════════════════════════════ */
  getDailyRewardSchedule() {
    return [100, 150, 200, 250, 300, 400, 600];
  }

  getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getDailyClaimStatus() {
    const today = this.getTodayDateString();
    const dc = this.state.dailyClaim || { lastClaimDate: null, streak: 0, totalClaimedCoins: 0, lastClaimTimestamp: 0 };
    const schedule = this.getDailyRewardSchedule();

    const isClaimedToday = dc.lastClaimDate === today;

    // Check if streak was broken (missed yesterday)
    let currentStreak = Number(dc.streak) || 0;
    if (!isClaimedToday && dc.lastClaimDate) {
      try {
        const lastParts = dc.lastClaimDate.split('-').map(Number);
        const todayParts = today.split('-').map(Number);
        const lastDate = new Date(lastParts[0], lastParts[1] - 1, lastParts[2]);
        const todayDate = new Date(todayParts[0], todayParts[1] - 1, todayParts[2]);
        const diffMs = todayDate.getTime() - lastDate.getTime();
        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
          currentStreak = 0; // Streak broken, restart from Day 1
        }
      } catch (e) {
        currentStreak = 0;
      }
    }

    const dayIndex = isClaimedToday
      ? ((Math.max(1, currentStreak) - 1) % schedule.length)
      : (currentStreak % schedule.length);

    const dayNumber = dayIndex + 1;
    const rewardCoins = schedule[dayIndex];

    // Compute live countdown until midnight (next daily drop)
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const remainingMs = Math.max(0, midnight.getTime() - now.getTime());
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

    return {
      canClaim: !isClaimedToday,
      isClaimedToday,
      currentStreak,
      dayNumber,
      rewardCoins,
      schedule,
      remainingMs,
      hours,
      minutes,
      seconds
    };
  }

  claimDailyReward() {
    const status = this.getDailyClaimStatus();
    if (!status.canClaim) {
      return { success: false, reason: 'already_claimed' };
    }

    const today = this.getTodayDateString();
    if (!this.state.dailyClaim) {
      this.state.dailyClaim = { lastClaimDate: null, streak: 0, totalClaimedCoins: 0, lastClaimTimestamp: 0 };
    }

    const newStreak = status.currentStreak + 1;
    const rewardCoins = status.rewardCoins;

    this.state.dailyClaim.lastClaimDate = today;
    this.state.dailyClaim.streak = newStreak;
    this.state.dailyClaim.totalClaimedCoins = (this.state.dailyClaim.totalClaimedCoins || 0) + rewardCoins;
    this.state.dailyClaim.lastClaimTimestamp = Date.now();

    this.addCoins(rewardCoins);
    this.saveState();

    return {
      success: true,
      rewardCoins,
      newStreak,
      totalCoins: this.getCoins()
    };
  }

  getEquippedHeroId() {
    return this.state.equippedHeroId || 'crimson_ace';
  }

  setEquippedHeroId(heroId) {
    this.state.equippedHeroId = heroId;
    this.saveState();
    return this.state.equippedHeroId;
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
      claimedCharacters: {},
      zoneRevealed: { 1: true, 2: false, 3: false },
      dailyClaim: { lastClaimDate: null, streak: 0, totalClaimedCoins: 0, lastClaimTimestamp: 0 },
      equippedHeroId: 'crimson_ace',
      serverRowId: this.state.serverRowId
    };
    this.saveState();
    return this.state;
  }
}
