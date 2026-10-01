import { createClient } from '@supabase/supabase-js';

/**
 * Supabase configuration constants for Dilibirds Global Leaderboard.
 * Credentials provided by project specification.
 */
export const SUPABASE_URL = 'https://gfkquqqzuvmyjnrftapb.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdma3F1cXF6dXZteWpucmZ0YXBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3Nzc1NDksImV4cCI6MjEwNjM1MzU0OX0.92ojpMop-USWdIQEu8HNT24uwogEMrzDB0lYnAdOVYk';
export const LEADERBOARD_TABLE = 'Dili-Birds-Data';

export const ERROR_CONNECTION_FAILED =
  'Live server connection failed. Unable to establish the live connection to the Dilibirds database. Please check your internet connection or verify the Supabase configuration.';

/**
 * Calculates a verified composite ranking score combining star and coin values.
 * Stars reflect campaign stage mastery (1000 pts per star), coins reflect demolition wealth.
 */
export function calculateCombinedScore(stars = 0, coins = 0) {
  const s = Math.max(0, Number(stars) || 0);
  const c = Math.max(0, Number(coins) || 0);
  return s * 1000 + c;
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

  /**
   * Data Insertion on Username Entry:
   * Inserts a fresh player profile (with 0 coins and 0 stars) into the Dili-Birds-Data table.
   * Returns the newly generated primary key `id` for subsequent updates.
   */
  async registerNewPlayerProfile({ username }) {
    if (!this.supabase) {
      return { success: false, error: ERROR_CONNECTION_FAILED };
    }

    try {
      const cleanName = (username || '').trim().slice(0, 24) || 'Commander';
      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .insert([
          {
            player_name: cleanName,
            score: 0,
            star: 0
          }
        ])
        .select('id, player_name, score, star, created_at')
        .single();

      if (error) {
        console.warn('[LeaderboardService] Error inserting fresh profile:', error.message);
        return { success: false, error: error.message };
      }

      return { success: true, rowId: data.id, data };
    } catch (err) {
      console.warn('[LeaderboardService] Exception inserting profile:', err.message);
      return { success: false, error: err.message };
    }
  }

  /**
   * Username Change Logic:
   * Updates existing record in Supabase using unique ID/reference instead of creating a new row.
   * Their rank, coins (score), and stars remain completely intact.
   */
  async updateUsername({ serverRowId, newUsername, oldUsername }) {
    if (!this.supabase) {
      return { success: false, error: ERROR_CONNECTION_FAILED };
    }

    try {
      const cleanName = (newUsername || '').trim().slice(0, 24) || 'Commander';

      // 1. Update existing row by unique serverRowId if available
      if (serverRowId) {
        const { data, error } = await this.supabase
          .from(LEADERBOARD_TABLE)
          .update({ player_name: cleanName })
          .eq('id', serverRowId)
          .select('id, player_name, score, star')
          .maybeSingle();

        if (!error && data) {
          return { success: true, rowId: data.id, data };
        }
      }

      // 2. If no serverRowId yet or ID not found, attempt to update by oldUsername
      if (oldUsername && oldUsername.trim()) {
        const { data, error } = await this.supabase
          .from(LEADERBOARD_TABLE)
          .update({ player_name: cleanName })
          .eq('player_name', oldUsername.trim())
          .select('id, player_name, score, star')
          .maybeSingle();

        if (!error && data) {
          return { success: true, rowId: data.id, data };
        }
      }

      // 3. Fallback: If no existing record exists in database, register fresh profile
      return await this.registerNewPlayerProfile({ username: cleanName });
    } catch (err) {
      console.warn('[LeaderboardService] Exception updating username:', err.message);
      return { success: false, error: err.message };
    }
  }

  /**
   * Syncs the current player's stars and coin values to the Dili-Birds-Data table.
   * Uses existing serverRowId so no duplicate row is ever created.
   */
  async syncPlayerScore({ serverRowId, username, score, star }) {
    if (!this.supabase) {
      return { success: false, error: ERROR_CONNECTION_FAILED };
    }

    try {
      const cleanName = (username || '').trim().slice(0, 24) || 'Commander';
      const coinScore = Math.max(0, Number(score) || 0);
      const starCount = Math.max(0, Number(star) || 0);

      // If serverRowId is provided, update by ID
      if (serverRowId) {
        const { data, error } = await this.supabase
          .from(LEADERBOARD_TABLE)
          .update({
            score: coinScore,
            star: starCount,
            player_name: cleanName
          })
          .eq('id', serverRowId)
          .select('id, player_name, score, star')
          .maybeSingle();

        if (!error && data) {
          return { success: true, rowId: data.id, data };
        }
      }

      // If no serverRowId, try to update by player_name
      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .update({
          score: coinScore,
          star: starCount
        })
        .eq('player_name', cleanName)
        .select('id, player_name, score, star')
        .maybeSingle();

      if (!error && data) {
        return { success: true, rowId: data.id, data };
      }

      // If record doesn't exist yet, insert fresh
      const { data: inserted, error: insertErr } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .insert([
          {
            player_name: cleanName,
            score: coinScore,
            star: starCount
          }
        ])
        .select('id, player_name, score, star')
        .single();

      if (insertErr) {
        return { success: false, error: insertErr.message };
      }

      return { success: true, rowId: inserted?.id, data: inserted };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  /**
   * Retrieves all live records directly from the Dili-Birds-Data table on Supabase.
   * STRICT RULE: Zero demo, mock, or fake data. ONLY live server data is returned.
   * Ranks players based on a combination of their star and coin values in descending order.
   */
  async fetchLiveLeaderboard() {
    if (!this.supabase) {
      return {
        success: false,
        isLive: false,
        error: ERROR_CONNECTION_FAILED,
        data: []
      };
    }

    try {
      const { data, error } = await this.supabase
        .from(LEADERBOARD_TABLE)
        .select('*');

      if (error) {
        return {
          success: false,
          isLive: false,
          error: ERROR_CONNECTION_FAILED,
          details: error.message,
          data: []
        };
      }

      if (!Array.isArray(data)) {
        return {
          success: false,
          isLive: false,
          error: ERROR_CONNECTION_FAILED,
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

      // Calculate combination score: star and coin (score column)
      const rankedPlayers = data.map((row) => {
        const stars = Number(row.star) || 0;
        const score = Number(row.score) || 0;
        const combined = calculateCombinedScore(stars, score);

        return {
          id: row.id,
          rowId: row.id,
          name: (row.player_name || 'Commander').trim(),
          score,
          coins: score,
          star: stars,
          stars,
          combinedScore: combined,
          createdAt: row.created_at
        };
      });

      // Rank players based on combination of star and coin values descending
      rankedPlayers.sort((a, b) => {
        if (b.combinedScore !== a.combinedScore) {
          return b.combinedScore - a.combinedScore;
        }
        if (b.star !== a.star) {
          return b.star - a.star;
        }
        return b.score - a.score;
      });

      // Assign sequential rank 1, 2, 3...
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
        error: ERROR_CONNECTION_FAILED,
        details: err.message,
        data: []
      };
    }
  }

  /**
   * Calculates the exact worldwide rank for the current player based on live server records.
   * Matches by serverRowId or player_name, accurately determining rank even outside the top 10.
   */
  calculateCurrentPlayerRankFromRecords(records, serverRowId, currentUsername, currentStars, currentCoins) {
    if (!Array.isArray(records) || records.length === 0) {
      return { rank: 1, totalPlayers: 1, percentile: 100 };
    }

    let foundIndex = -1;
    if (serverRowId) {
      foundIndex = records.findIndex((r) => String(r.id) === String(serverRowId));
    }
    if (foundIndex === -1 && currentUsername) {
      foundIndex = records.findIndex(
        (r) => r.name.toLowerCase() === (currentUsername || '').trim().toLowerCase()
      );
    }

    if (foundIndex !== -1) {
      const exactRank = foundIndex + 1;
      const total = records.length;
      const percentile = Math.max(1, Math.round((exactRank / total) * 100));
      return { rank: exactRank, totalPlayers: total, percentile };
    }

    // If player record has not yet synced to server list, compute relative position
    const playerCombined = calculateCombinedScore(currentStars, currentCoins);
    const higherCount = records.filter((r) => r.combinedScore > playerCombined).length;
    const exactRank = higherCount + 1;
    const total = records.length + 1;
    const percentile = Math.max(1, Math.round((exactRank / total) * 100));
    return { rank: exactRank, totalPlayers: total, percentile };
  }
}

export const leaderboardService = new LeaderboardService();
