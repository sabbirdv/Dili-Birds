import { createClient } from '@supabase/supabase-js';
import { AVATAR_PRESETS } from '../ui/avatarPresets.js';

/**
 * Supabase configuration constants for Dilibirds Global Leaderboard.
 * Public Anon Key provided by project specification.
 * Project URL uses VITE_SUPABASE_URL if present, otherwise default placeholder.
 */
export const SUPABASE_ANON_KEY = 'sb_publishable_5rn_ZhJjoROCfJj2LfQJ6Q_RQuSd5P0';
export const SUPABASE_URL = (import.meta.env && import.meta.env.VITE_SUPABASE_URL)
  ? import.meta.env.VITE_SUPABASE_URL
  : 'https://placeholder-project-ref.supabase.co';

export const LEADERBOARD_TABLE = 'Dili-Birds-Data';

// Fallback curated global benchmarks used when offline or while placeholder URL is active
export const FALLBACK_GLOBAL_PILOTS = [
  { rank: 1, name: 'Kaito_Ace', level: 8, stars: 24, score: 14850, avatar: AVATAR_PRESETS[0].url },
  { rank: 2, name: 'SakuraPilot', level: 8, stars: 23, score: 13920, avatar: AVATAR_PRESETS[1].url },
  { rank: 3, name: 'NeonValkyrie', level: 7, stars: 21, score: 11400, avatar: AVATAR_PRESETS[2].url },
  { rank: 4, name: 'BladeRunner_X', level: 6, stars: 18, score: 9650, avatar: AVATAR_PRESETS[3].url },
  { rank: 5, name: 'SkyPhantom', level: 5, stars: 15, score: 8200, avatar: AVATAR_PRESETS[4].url },
  { rank: 6, name: 'EchoFalcon', level: 4, stars: 11, score: 6150, avatar: AVATAR_PRESETS[5].url },
  { rank: 7, name: 'AeroPulse', level: 3, stars: 8, score: 4500, avatar: AVATAR_PRESETS[0].url },
  { rank: 8, name: 'VortexWing', level: 2, stars: 5, score: 3100, avatar: AVATAR_PRESETS[1].url }
];

export class LeaderboardService {
  constructor() {
    this.supabase = null;
    this.isPlaceholderUrl = SUPABASE_URL.includes('placeholder') || !SUPABASE_URL.startsWith('http');
    this.initClient();
  }

  initClient() {
    try {
      this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      });
    } catch (err) {
      console.warn('[LeaderboardService] Supabase client initialization deferred:', err.message);
      this.supabase = null;
    }
  }

  /**
   * Syncs the current player's stats to the Dili-Birds-Data table.
   * Upserts on unique player_id or id.
   */
  async syncPlayerScore({ playerId, username, score, stars, level, avatarUrl }) {
    if (!this.supabase || this.isPlaceholderUrl) {
      return { success: false, reason: 'placeholder_or_uninitialized' };
    }

    try {
      const payload = {
        player_id: playerId,
        username: username || 'Commander',
        score: Number(score) || 0,
        stars: Number(stars) || 0,
        level: Number(level) || 1,
        avatar_url: avatarUrl || '',
        updated_at: new Date().toISOString()
      };

      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .upsert(payload, { onConflict: 'player_id' });

      if (error) {
        // Fallback try with 'id' if 'player_id' column constraint differs
        const fallbackPayload = { ...payload, id: playerId };
        const { error: err2 } = await this.supabase
          .from(LEADERBOARD_TABLE)
          .upsert(fallbackPayload, { onConflict: 'id' });

        if (err2) {
          console.warn('[LeaderboardService] syncPlayerScore error:', error.message);
          return { success: false, error: error.message };
        }
      }

      return { success: true, data };
    } catch (err) {
      console.warn('[LeaderboardService] Network error syncing player score:', err.message);
      return { success: false, error: err.message };
    }
  }

  /**
   * Fetches top players worldwide sorted by score in descending order.
   * Target table: Dili-Birds-Data
   */
  async fetchTopPlayersWorldwide(limit = 25) {
    if (!this.supabase || this.isPlaceholderUrl) {
      return {
        success: false,
        isLive: false,
        data: [...FALLBACK_GLOBAL_PILOTS],
        reason: 'placeholder_url'
      };
    }

    try {
      // PostgREST query: SELECT * FROM "Dili-Birds-Data" ORDER BY score DESC LIMIT limit
      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .select('*')
        .order('score', { ascending: false })
        .limit(limit);

      if (error) {
        console.warn('[LeaderboardService] fetchTopPlayersWorldwide query error:', error.message);
        return {
          success: false,
          isLive: false,
          data: [...FALLBACK_GLOBAL_PILOTS],
          error: error.message
        };
      }

      if (!Array.isArray(data) || data.length === 0) {
        // Table exists but is empty yet
        return {
          success: true,
          isLive: true,
          data: [...FALLBACK_GLOBAL_PILOTS],
          isEmpty: true
        };
      }

      // Normalize row schema
      const normalized = data.map((row, idx) => ({
        rank: idx + 1,
        playerId: row.player_id || row.id || `pilot_${idx}`,
        name: row.username || row.player_name || row.name || 'Anonymous Pilot',
        score: Number(row.score) || 0,
        stars: Number(row.stars) || 0,
        level: Number(row.level) || 1,
        avatar: row.avatar_url || row.avatar || AVATAR_PRESETS[idx % AVATAR_PRESETS.length].url
      }));

      return {
        success: true,
        isLive: true,
        data: normalized
      };
    } catch (err) {
      console.warn('[LeaderboardService] Network failure fetching global leaderboard:', err.message);
      return {
        success: false,
        isLive: false,
        data: [...FALLBACK_GLOBAL_PILOTS],
        error: err.message
      };
    }
  }

  /**
   * Calculates the exact worldwide rank of the current player globally,
   * even if they are outside the top 10 list!
   *
   * Logic:
   * Count how many worldwide players have score strictly greater than currentPlayerScore.
   * Exact Rank = (Count of players with score > currentScore) + 1.
   */
  async calculateCurrentPlayerGlobalRank(currentScore, playerId) {
    const scoreVal = Number(currentScore) || 0;

    if (!this.supabase || this.isPlaceholderUrl) {
      // Local benchmark calculation
      const higherCount = FALLBACK_GLOBAL_PILOTS.filter((p) => p.score > scoreVal).length;
      return {
        rank: higherCount + 1,
        totalPlayers: FALLBACK_GLOBAL_PILOTS.length + 1,
        isLive: false
      };
    }

    try {
      // Efficient count query: SELECT count(*) FROM "Dili-Birds-Data" WHERE score > currentScore
      const { count, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .select('*', { count: 'exact', head: true })
        .gt('score', scoreVal);

      if (error) {
        console.warn('[LeaderboardService] Error calculating exact global rank:', error.message);
        const higherCount = FALLBACK_GLOBAL_PILOTS.filter((p) => p.score > scoreVal).length;
        return {
          rank: higherCount + 1,
          totalPlayers: FALLBACK_GLOBAL_PILOTS.length + 1,
          isLive: false,
          error: error.message
        };
      }

      const exactRank = (typeof count === 'number' ? count : 0) + 1;

      // Also get total player count for extra immersion
      const { count: totalCount } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .select('*', { count: 'exact', head: true });

      return {
        rank: exactRank,
        totalPlayers: typeof totalCount === 'number' ? Math.max(totalCount, exactRank) : exactRank,
        isLive: true
      };
    } catch (err) {
      console.warn('[LeaderboardService] Network failure calculating global rank:', err.message);
      const higherCount = FALLBACK_GLOBAL_PILOTS.filter((p) => p.score > scoreVal).length;
      return {
        rank: higherCount + 1,
        totalPlayers: FALLBACK_GLOBAL_PILOTS.length + 1,
        isLive: false,
        error: err.message
      };
    }
  }
}

export const leaderboardService = new LeaderboardService();
