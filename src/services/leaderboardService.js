import { createClient } from '@supabase/supabase-js';
import { AVATAR_PRESETS } from '../ui/avatarPresets.js';

/**
 * Supabase configuration constants for Dilibirds Global Leaderboard.
 * Public Anon Key provided by project specification.
 * Project URL supports dynamic configuration via VITE_SUPABASE_URL, localStorage, or placeholder.
 */
export const SUPABASE_ANON_KEY = 'sb_publishable_5rn_ZhJjoROCfJj2LfQJ6Q_RQuSd5P0';

const getInitialProjectUrl = () => {
  if (typeof window !== 'undefined' && window.localStorage?.getItem('dilibirds_supabase_url')) {
    return window.localStorage.getItem('dilibirds_supabase_url');
  }
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) {
    return import.meta.env.VITE_SUPABASE_URL;
  }
  return 'https://placeholder-project-ref.supabase.co';
};

export const SUPABASE_URL = getInitialProjectUrl();
export const LEADERBOARD_TABLE = 'Dili-Birds-Data';

/**
 * Calculates a verified composite score combining campaign stars and stage score (coins).
 * Stars reward strategic mission mastery, while score & coins reflect precision demolition.
 */
export function calculateCombinedScore(stars, score, coins = 0) {
  const s = Math.max(0, Number(stars) || 0);
  const pts = Math.max(0, Number(score) || 0);
  const c = Math.max(0, Number(coins) || 0);
  return (s * 1000) + pts + (c * 2);
}

export class LeaderboardService {
  constructor() {
    this.projectUrl = SUPABASE_URL;
    this.anonKey = SUPABASE_ANON_KEY;
    this.supabase = null;
    this.initClient();
  }

  initClient() {
    try {
      if (!this.projectUrl || !this.projectUrl.startsWith('http')) {
        this.supabase = null;
        return;
      }
      this.supabase = createClient(this.projectUrl, this.anonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      });
    } catch (err) {
      console.warn('[LeaderboardService] Client initialization error:', err.message);
      this.supabase = null;
    }
  }

  setProjectUrl(newUrl) {
    if (newUrl && typeof newUrl === 'string') {
      this.projectUrl = newUrl.trim();
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('dilibirds_supabase_url', this.projectUrl);
      }
      this.initClient();
    }
  }

  /**
   * Syncs the current player's stats to the Dili-Birds-Data table on Supabase.
   * Upserts on unique player_id or id.
   */
  async syncPlayerScore({ playerId, username, score, stars, level, avatarUrl, coins = 0 }) {
    if (!this.supabase) {
      return { success: false, error: 'Database client not initialized' };
    }

    try {
      const payload = {
        player_id: playerId,
        username: username || 'Commander',
        score: Number(score) || 0,
        stars: Number(stars) || 0,
        level: Number(level) || 1,
        coins: Number(coins) || 0,
        avatar_url: avatarUrl || '',
        updated_at: new Date().toISOString()
      };

      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .upsert(payload, { onConflict: 'player_id' });

      if (error) {
        // Fallback try with 'id' if primary key constraint uses id
        const fallbackPayload = { ...payload, id: playerId };
        const { error: err2 } = await this.supabase
          .from(LEADERBOARD_TABLE)
          .upsert(fallbackPayload, { onConflict: 'id' });

        if (err2) {
          return { success: false, error: error.message };
        }
      }

      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  /**
   * Retrieves all live records from the Dili-Birds-Data table on Supabase.
   * STRICT: Zero demo or placeholder data. Only live server data is returned.
   * Computes combination ranking score (stars * 1000 + score + coins * 2) and sorts in descending order.
   */
  async fetchLiveLeaderboard() {
    if (!this.supabase) {
      return {
        success: false,
        isLive: false,
        error: 'Database connection not initialized',
        data: []
      };
    }

    try {
      // Query all records live from the Dili-Birds-Data table
      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .select('*');

      if (error) {
        return {
          success: false,
          isLive: false,
          error: error.message || 'Error querying Dili-Birds-Data table',
          data: []
        };
      }

      if (!Array.isArray(data)) {
        return {
          success: false,
          isLive: false,
          error: 'Unexpected response format from server',
          data: []
        };
      }

      if (data.length === 0) {
        return {
          success: true,
          isLive: true,
          data: [],
          isEmpty: true
        };
      }

      // Calculate combined score for every record and sort worldwide in descending order
      const rankedPlayers = data.map((row, idx) => {
        const stars = Number(row.stars) || 0;
        const score = Number(row.score) || 0;
        const coins = Number(row.coins) || 0;
        const combined = calculateCombinedScore(stars, score, coins);

        return {
          playerId: row.player_id || row.id || `pilot_${idx}`,
          name: (row.username || row.name || row.player_name || 'Anonymous Pilot').trim(),
          score,
          stars,
          coins,
          level: Number(row.level) || 1,
          avatar: row.avatar_url || row.avatar || AVATAR_PRESETS[0].url,
          combinedScore: combined
        };
      });

      // Sort descending by combination of stars, score and coins
      rankedPlayers.sort((a, b) => b.combinedScore - a.combinedScore);

      // Assign exact sequential rank
      rankedPlayers.forEach((player, i) => {
        player.rank = i + 1;
      });

      return {
        success: true,
        isLive: true,
        data: rankedPlayers,
        isEmpty: false
      };
    } catch (err) {
      return {
        success: false,
        isLive: false,
        error: err.message || 'Network connection failed',
        data: []
      };
    }
  }

  /**
   * Calculates the exact worldwide rank for the current player based on the live records list.
   * Accurately determines their position even if outside the top 10.
   */
  calculateCurrentPlayerRankFromRecords(records, currentPlayerId, currentStars, currentScore, currentCoins) {
    if (!Array.isArray(records)) {
      return { rank: 1, totalPlayers: 1, percentile: 100 };
    }

    const playerCombined = calculateCombinedScore(currentStars, currentScore, currentCoins);

    // If current player is in the live records
    const foundIndex = records.findIndex((r) => r.playerId && r.playerId === currentPlayerId);
    if (foundIndex !== -1) {
      const exactRank = foundIndex + 1;
      const total = records.length;
      const percentile = Math.max(1, Math.round((exactRank / total) * 100));
      return { rank: exactRank, totalPlayers: total, percentile };
    }

    // If player record has not synced yet, calculate rank against all other live players
    const higherCount = records.filter((r) => r.combinedScore > playerCombined).length;
    const exactRank = higherCount + 1;
    const total = records.length + 1;
    const percentile = Math.max(1, Math.round((exactRank / total) * 100));
    return { rank: exactRank, totalPlayers: total, percentile };
  }
}

export const leaderboardService = new LeaderboardService();
