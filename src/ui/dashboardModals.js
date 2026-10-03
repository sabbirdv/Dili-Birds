import coinLogoUrl from '../assets/coin-with-logo.png';
import char1Url from '../assets/character.png';
import char2Url from '../assets/character-2.png';
import char3Url from '../assets/character-3.png';
import char4Url from '../assets/sub-character-4.png';
import { AVATAR_PRESETS } from './avatarPresets.js';
import { leaderboardService } from '../services/leaderboardService.js';

export const HEROES_DATA = [
  {
    id: 'commander_falcon',
    name: 'Commander Falcon',
    archetype: 'Winged Striker',
    type: 'red',
    avatarUrl: char1Url,
    milestoneLevel: 1,
    abilityName: 'Aero-Wing Glide',
    abilityDesc: 'Signature aero-stabilized flight with high kinetic impact upon structural collision.',
    speed: 88,
    power: 82,
    pierce: 76,
    themeColor: '#38bdf8'
  },
  {
    id: 'speedster_swift',
    name: 'Speedster Swift',
    archetype: 'Sonic Plasma Orb',
    type: 'speed',
    avatarUrl: char2Url,
    milestoneLevel: 3,
    abilityName: 'Supersonic Boost',
    abilityDesc: 'Tap screen mid-flight to ignite plasma thrust, accelerating into a high-penetration drill projectile.',
    speed: 98,
    power: 74,
    pierce: 94,
    themeColor: '#0ea5e9'
  },
  {
    id: 'bomber_titan',
    name: 'Bomber Titan',
    archetype: 'Heavy Seismic Orb',
    type: 'heavy',
    avatarUrl: char3Url,
    milestoneLevel: 5,
    abilityName: 'Seismic Shockwave',
    abilityDesc: 'Heavy metallic core. Tap in mid-air or upon impact to trigger a massive 360-degree seismic ground quake.',
    speed: 64,
    power: 99,
    pierce: 86,
    themeColor: '#d946ef'
  },
  {
    id: 'splitter_trio',
    name: 'Splitter Trio',
    archetype: 'Tactical Tri-Cluster',
    type: 'split',
    avatarUrl: char4Url,
    milestoneLevel: 7,
    abilityName: 'Tri-Cluster Spread',
    abilityDesc: 'Tap mid-flight to release three synchronized strike birds covering a wide multi-tier blast zone.',
    speed: 86,
    power: 88,
    pierce: 90,
    themeColor: '#fbbf24'
  }
];

export const MISSIONS_DATA = [
  {
    id: 'mission_first_flight',
    title: 'First Flight',
    desc: 'Launch a bird into battle and engage the enemy fortifications.',
    target: 1,
    rewardCoins: 60,
    getProgress: (storage) => (storage.getUnlockedLevel() >= 1 ? 1 : 0)
  },
  {
    id: 'mission_stage_clear',
    title: 'Frontline Breaker',
    desc: 'Clear Stage 1 and secure the outpost perimeter.',
    target: 1,
    rewardCoins: 100,
    getProgress: (storage) => (storage.getStarsForLevel(1) > 0 ? 1 : 0)
  },
  {
    id: 'mission_speedster_unlocked',
    title: 'Sonic Mastery',
    desc: 'Reach Stage 3 to unlock Speedster Swift special character.',
    target: 3,
    rewardCoins: 150,
    getProgress: (storage) => Math.min(3, storage.getUnlockedLevel())
  },
  {
    id: 'mission_star_collector',
    title: 'Star Voyager',
    desc: 'Earn 6 or more Stars across your completed campaign stages.',
    target: 6,
    rewardCoins: 200,
    getProgress: (storage) => Math.min(6, storage.getTotalStars())
  },
  {
    id: 'mission_titan_arrival',
    title: 'Heavy Demolition',
    desc: 'Reach Stage 5 to unlock Bomber Titan special character.',
    target: 5,
    rewardCoins: 250,
    getProgress: (storage) => Math.min(5, storage.getUnlockedLevel())
  }
];

export class DashboardModals {
  constructor({ storage, audio, onRefreshHeader }) {
    this.storage = storage;
    this.audio = audio;
    this.onRefreshHeader = onRefreshHeader;

    this.leaderboardDialog = document.getElementById('leaderboard-dialog');
    this.missionsDialog = document.getElementById('missions-dialog');
    this.charactersDialog = document.getElementById('characters-dialog');

    this.bindEvents();
  }

  bindEvents() {
    // Upper Navigation Bar Action Triggers
    document.getElementById('btn-nav-leaderboard')?.addEventListener('click', () => {
      this.openLeaderboard();
    });

    document.getElementById('btn-nav-missions')?.addEventListener('click', () => {
      this.openMissions();
    });

    document.getElementById('btn-nav-characters')?.addEventListener('click', () => {
      this.openCharacters();
    });

    // Dashboard Hub Feature Card Triggers
    const lbCard = document.getElementById('card-dashboard-leaderboard');
    lbCard?.addEventListener('click', () => this.openLeaderboard());
    lbCard?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.openLeaderboard();
      }
    });

    const missionsCard = document.getElementById('card-dashboard-missions');
    missionsCard?.addEventListener('click', () => this.openMissions());
    missionsCard?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.openMissions();
      }
    });

    const charactersCard = document.getElementById('card-dashboard-characters');
    charactersCard?.addEventListener('click', () => this.openCharacters());
    charactersCard?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.openCharacters();
      }
    });

    // Close buttons & Leaderboard controls
    document.getElementById('btn-close-leaderboard')?.addEventListener('click', () => {
      this.audio?.playMenuClose?.();
      this.leaderboardDialog?.close();
    });

    document.getElementById('btn-leaderboard-retry')?.addEventListener('click', () => {
      this.audio?.playUiClick?.();
      this.loadLeaderboardData();
    });

    document.getElementById('btn-close-missions')?.addEventListener('click', () => {
      this.audio?.playMenuClose?.();
      this.missionsDialog?.close();
    });

    document.getElementById('btn-close-characters')?.addEventListener('click', () => {
      this.audio?.playMenuClose?.();
      this.charactersDialog?.close();
    });

    // Close on backdrop click
    [this.leaderboardDialog, this.missionsDialog, this.charactersDialog].forEach((dialog) => {
      dialog?.addEventListener('click', (e) => {
        if (e.target === dialog) {
          this.audio?.playMenuClose?.();
          dialog.close();
        }
      });
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * GLOBAL LEADERBOARD MODAL (Strict Live Supabase Backend)
   * ═════════════════════════════════════════════════════════════ */
  openLeaderboard() {
    if (!this.leaderboardDialog) return;
    this.audio?.playMenuOpen?.();
    this.leaderboardDialog.showModal();
    this.loadLeaderboardData();
  }

  renderLeaderboardLoading() {
    const bodyEl = document.getElementById('leaderboard-list-body');
    if (!bodyEl) return;
    let skeletonHtml = '';
    for (let i = 0; i < 7; i++) {
      skeletonHtml += `
        <div class="leaderboard-row skeleton-row" aria-hidden="true">
          <div class="col-rank">
            <span class="skeleton-shimmer skeleton-pill"></span>
          </div>
          <div class="col-player">
            <div class="skeleton-shimmer skeleton-avatar"></div>
            <div class="skeleton-info">
              <div class="skeleton-shimmer skeleton-line skeleton-name"></div>
              <div class="skeleton-shimmer skeleton-line skeleton-sub"></div>
            </div>
          </div>
          <div class="col-stars">
            <div class="skeleton-shimmer skeleton-star-pill"></div>
          </div>
          <div class="col-score">
            <div class="skeleton-shimmer skeleton-score-val"></div>
          </div>
        </div>
      `;
    }
    bodyEl.innerHTML = skeletonHtml;
  }

  async loadLeaderboardData() {
    const tableWrapEl = document.getElementById('leaderboard-table-wrap');
    const bodyEl = document.getElementById('leaderboard-list-body');
    const playerCardEl = document.getElementById('leaderboard-player-card');
    const errorStateEl = document.getElementById('leaderboard-error-state');
    const emptyStateEl = document.getElementById('leaderboard-empty-state');
    const syncBadgeEl = document.getElementById('leaderboard-sync-badge');
    const syncTextEl = document.getElementById('leaderboard-sync-text');
    const retryBtn = document.getElementById('btn-leaderboard-retry');

    if (retryBtn) retryBtn.classList.add('loading');

    // Reset to loading state: show table skeleton, hide error and empty states
    errorStateEl?.classList.add('hidden');
    emptyStateEl?.classList.add('hidden');
    tableWrapEl?.classList.remove('hidden');
    playerCardEl?.classList.remove('hidden');

    if (syncBadgeEl && syncTextEl) {
      syncBadgeEl.classList.remove('hidden', 'live');
      syncBadgeEl.classList.add('syncing');
      syncTextEl.textContent = 'Connecting to Server...';
    }

    this.renderLeaderboardLoading();

    const currentUsername = this.storage.getUsername();
    const currentAvatar = this.storage.getAvatarUrl();
    const currentLevel = this.storage.getUnlockedLevel();
    const currentStars = this.storage.getTotalStars();
    const currentCoins = this.storage.getCoins();
    const playerId = this.storage.getPlayerId();

    // Render calculating state on personal footer card
    this.renderPlayerFooterCard({
      rank: this.storage.getLeaderboardRank() || '...',
      totalPlayers: null,
      username: currentUsername,
      avatar: currentAvatar,
      level: currentLevel,
      stars: currentStars,
      score: currentCoins,
      coins: currentCoins,
      isCalculating: true
    });

    try {
      // 1. Sync current player's data to live Dili-Birds-Data table
      const syncUsername = this.storage.getUsername() || 'Commander';
      const syncRes = await leaderboardService.syncPlayerScore({
        serverRowId: this.storage.getServerRowId(),
        username: syncUsername,
        score: currentCoins,
        star: currentStars
      });
      if (syncRes?.success && syncRes.rowId && !this.storage.getServerRowId()) {
        this.storage.setServerRowId(syncRes.rowId);
      }

      // 2. Fetch all live records from the server (STRICT: no demo or placeholder data)
      const res = await leaderboardService.fetchLiveLeaderboard();

      if (!res.success) {
        // Live server connection failed: hide rankings and display error message with Retry button
        tableWrapEl?.classList.add('hidden');
        playerCardEl?.classList.add('hidden');
        emptyStateEl?.classList.add('hidden');
        errorStateEl?.classList.remove('hidden');

        const errorDescEl = document.getElementById('leaderboard-error-desc');
        if (errorDescEl) {
          if (res.isRlsBlocked || syncRes?.isRlsBlocked) {
            errorDescEl.innerHTML = `Supabase Row-Level Security (RLS) is blocking data operations on table <code>Dili-Birds-Data</code>.<br><span style="font-size:0.85em;color:#94a3b8;">Please enable public read/write RLS policies in your Supabase SQL Editor.</span>`;
          } else {
            errorDescEl.textContent = res.error || ERROR_CONNECTION_FAILED;
          }
        }

        if (syncBadgeEl) syncBadgeEl.classList.add('hidden');
        return;
      }

      // Connection succeeded: show Live Server Data badge
      if (syncBadgeEl && syncTextEl) {
        syncBadgeEl.classList.remove('hidden', 'syncing');
        syncBadgeEl.classList.add('live');
        syncTextEl.textContent = 'Live Server Data';
      }

      errorStateEl?.classList.add('hidden');

      if (res.isEmpty || !res.data || res.data.length === 0) {
        // Table is currently empty on Supabase
        tableWrapEl?.classList.add('hidden');
        emptyStateEl?.classList.remove('hidden');
        playerCardEl?.classList.remove('hidden');

        this.renderPlayerFooterCard({
          rank: 1,
          totalPlayers: 1,
          percentile: 100,
          username: currentUsername,
          avatar: currentAvatar,
          level: currentLevel,
          stars: currentStars,
          score: currentCoins,
          coins: currentCoins,
          isLive: true,
          isCalculating: false
        });
        return;
      }

      // Live data retrieved successfully
      emptyStateEl?.classList.add('hidden');
      tableWrapEl?.classList.remove('hidden');
      playerCardEl?.classList.remove('hidden');

      const serverRowId = this.storage.getServerRowId();
      let html = '';
      res.data.forEach((pilot) => {
        const isRank1 = pilot.rank === 1;
        const isTop3 = pilot.rank <= 3;
        const rankBadgeClass = pilot.rank === 1 ? 'gold rank-1-badge' : pilot.rank === 2 ? 'silver' : pilot.rank === 3 ? 'bronze' : '';
        const isCurrent = (serverRowId && String(pilot.id) === String(serverRowId)) || (pilot.name && pilot.name.toLowerCase() === currentUsername.trim().toLowerCase());
        const starVal = Number(pilot.star !== undefined ? pilot.star : pilot.stars) || 0;
        const scoreVal = Number(pilot.score) || 0;
        const pilotAvatar = pilot.avatar || (isCurrent ? currentAvatar : (AVATAR_PRESETS[(Math.abs(Number(pilot.id)) || 0) % AVATAR_PRESETS.length]?.url || currentAvatar));

        html += `
          <div class="leaderboard-row ${isRank1 ? 'rank-1-highlight' : ''} ${isTop3 ? 'top-rank' : ''} ${isCurrent ? 'current-player-row' : ''}">
            <div class="col-rank">
              <span class="rank-pill ${rankBadgeClass}">${pilot.rank === 1 ? '👑 #1' : `#${pilot.rank}`}</span>
            </div>
            <div class="col-player">
              <img class="row-avatar ${isRank1 ? 'avatar-rank-1' : ''}" src="${pilotAvatar}" alt="${pilot.name}" />
              <div class="row-pilot-info">
                <strong class="row-name ${isRank1 ? 'name-rank-1' : ''}">
                  ${pilot.name}
                  ${isCurrent ? '<span class="you-badge">YOU</span>' : ''}
                  ${isRank1 ? '<span class="crown-badge">CHAMPION</span>' : ''}
                </strong>
                <span class="row-sub">${isRank1 ? '★ Worldwide #1 Leader ★' : `Global Standing • #${pilot.rank}`}</span>
              </div>
            </div>
            <div class="col-stars">
              <span class="star-pill ${isRank1 ? 'star-rank-1' : ''}">
                <svg class="star-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${starVal} ★
              </span>
            </div>
            <div class="col-score">
              <strong class="${isRank1 ? 'score-rank-1' : ''}" title="Coins/Score: ${scoreVal.toLocaleString()}">${scoreVal.toLocaleString()}</strong>
            </div>
          </div>
        `;
      });

      if (bodyEl) {
        bodyEl.innerHTML = html;
      }

      // Calculate exact live rank for current player
      const rankInfo = leaderboardService.calculateCurrentPlayerRankFromRecords(
        res.data,
        serverRowId,
        currentUsername,
        currentStars,
        currentCoins
      );

      // Find player's matching record from live server data to display exact matching score
      const matchingPilot = res.data.find((pilot) => {
        return (serverRowId && String(pilot.id) === String(serverRowId)) ||
               (pilot.name && pilot.name.trim().toLowerCase() === currentUsername.trim().toLowerCase());
      });
      const exactScore = matchingPilot ? (Number(matchingPilot.score) || 0) : currentCoins;

      if (rankInfo?.rank) {
        this.storage.setLeaderboardRank(rankInfo.rank);
        this.onRefreshHeader?.();
      }

      this.renderPlayerFooterCard({
        rank: rankInfo.rank,
        totalPlayers: rankInfo.totalPlayers,
        percentile: rankInfo.percentile,
        username: currentUsername,
        avatar: currentAvatar,
        level: currentLevel,
        stars: currentStars,
        score: exactScore,
        coins: currentCoins,
        isLive: true,
        isCalculating: false
      });

    } catch (err) {
      console.warn('[Leaderboard] Connection failure:', err);
      tableWrapEl?.classList.add('hidden');
      playerCardEl?.classList.add('hidden');
      emptyStateEl?.classList.add('hidden');
      errorStateEl?.classList.remove('hidden');
      if (syncBadgeEl) syncBadgeEl.classList.add('hidden');
    } finally {
      if (retryBtn) retryBtn.classList.remove('loading');
    }
  }

  renderPlayerFooterCard({ rank, totalPlayers, percentile, username, avatar, level, stars, score, coins, isLive, isCalculating }) {
    const playerCardEl = document.getElementById('leaderboard-player-card');
    if (!playerCardEl) return;

    const isRank1 = rank === 1;
    const rankDisplay = isCalculating ? '...' : (rank === 1 ? '👑 #1' : `#${typeof rank === 'number' ? rank.toLocaleString() : rank}`);
    const rankClass = rank === 1 ? 'gold rank-1-badge' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : 'player-badge-pill';
    const totalWorldwideStr = totalPlayers && totalPlayers > 1
      ? ` • Top ${percentile || Math.max(1, Math.round((rank / totalPlayers) * 100))}% (${totalPlayers} Pilots)`
      : '';

    playerCardEl.className = `leaderboard-player-footer ${isRank1 ? 'rank-1-footer-highlight' : ''}`;

    playerCardEl.innerHTML = `
      <div class="player-rank-highlight">
        <div class="col-rank">
          <span class="rank-pill ${rankClass}" title="Your exact worldwide rank">${rankDisplay}</span>
        </div>
        <div class="col-player">
          <img class="row-avatar highlight-avatar ${isRank1 ? 'avatar-rank-1' : ''}" src="${avatar}" alt="${username}" />
          <div class="row-pilot-info">
            <strong class="row-name ${isRank1 ? 'name-rank-1' : ''}">
              ${username} <span class="you-badge">YOU</span>
              ${isRank1 ? '<span class="crown-badge">CHAMPION</span>' : ''}
            </strong>
            <span class="row-sub">${isRank1 ? '★ Worldwide #1 Champion ★' : `Worldwide Rank: <strong>${rankDisplay}</strong>${totalWorldwideStr} • Stage ${level}`}</span>
          </div>
        </div>
        <div class="col-stars">
          <span class="star-pill active ${isRank1 ? 'star-rank-1' : ''}">
            <svg class="star-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${stars} ★
          </span>
        </div>
        <div class="col-score">
          <strong class="highlight-score ${isRank1 ? 'score-rank-1' : ''}" title="Your Leaderboard Score">${score.toLocaleString()}</strong>
        </div>
      </div>
    `;
  }

  /* ═════════════════════════════════════════════════════════════
   * MISSIONS & TASKS MODAL
   * ═════════════════════════════════════════════════════════════ */
  openMissions() {
    if (!this.missionsDialog) return;
    this.audio?.playMenuOpen?.();
    this.renderMissionsList();
    this.missionsDialog.showModal();
  }

  renderMissionsList() {
    const listEl = document.getElementById('missions-list-container');
    if (!listEl) return;

    let html = '';
    MISSIONS_DATA.forEach((mission) => {
      const progress = mission.getProgress(this.storage);
      const isComplete = progress >= mission.target;
      const isClaimed = this.storage.hasClaimedMission(mission.id);
      const pct = Math.min(100, Math.round((progress / mission.target) * 100));

      let actionButtonHtml = '';
      if (isClaimed) {
        actionButtonHtml = `
          <button type="button" class="btn-mission-action claimed" disabled>
            <svg class="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>CLAIMED</span>
          </button>
        `;
      } else if (isComplete) {
        actionButtonHtml = `
          <button type="button" class="btn-mission-action ready" data-mission-id="${mission.id}" data-reward="${mission.rewardCoins}">
            <span>CLAIM +${mission.rewardCoins}</span>
            <img class="coin-icon-img" src="${coinLogoUrl}" alt="Coin" />
          </button>
        `;
      } else {
        actionButtonHtml = `
          <button type="button" class="btn-mission-action in-progress" disabled>
            <span>IN PROGRESS</span>
          </button>
        `;
      }

      html += `
        <article class="mission-card ${isComplete && !isClaimed ? 'ready-card' : ''}">
          <div class="mission-info-col">
            <div class="mission-header-row">
              <span class="mission-title">${mission.title}</span>
              <span class="mission-reward-badge">
                <img class="coin-icon-img" src="${coinLogoUrl}" alt="Coin" />
                +${mission.rewardCoins} Coins
              </span>
            </div>
            <p class="mission-desc">${mission.desc}</p>
            <div class="mission-progress-bar-wrap">
              <div class="mission-progress-bar" style="width: ${pct}%;"></div>
              <span class="mission-progress-text">${progress} / ${mission.target}</span>
            </div>
          </div>
          <div class="mission-action-col">
            ${actionButtonHtml}
          </div>
        </article>
      `;
    });

    listEl.innerHTML = html;

    // Attach click events to claim buttons
    listEl.querySelectorAll('.btn-mission-action.ready').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const missionId = targetBtn.dataset.missionId;
        const reward = Number(targetBtn.dataset.reward) || 0;
        this.claimMission(missionId, reward);
      });
    });
  }

  claimMission(missionId, rewardCoins) {
    if (this.storage.claimMission(missionId, rewardCoins)) {
      this.audio?.playCoin();
      this.onRefreshHeader?.();
      this.renderMissionsList();
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * CHARACTER COLLECTION & MILESTONE REWARD MODAL
   * ═════════════════════════════════════════════════════════════ */
  openCharacters() {
    if (!this.charactersDialog) return;
    this.audio?.playMenuOpen?.();
    this.renderCharactersList();
    this.charactersDialog.showModal();
  }

  renderCharactersList() {
    const gridEl = document.getElementById('characters-roster-grid');
    const milestoneBannerEl = document.getElementById('modal-milestone-banner');
    if (!gridEl) return;

    const unlockedLevel = this.storage.getUnlockedLevel();

    // Render Milestone Progression Stepper Track inside Characters Codex
    if (milestoneBannerEl) {
      let nextLockedHero = HEROES_DATA.find((h) => h.milestoneLevel > unlockedLevel);
      let bannerHint = nextLockedHero
        ? `Next Unlock: <strong>${nextLockedHero.name}</strong> at <strong>Level ${nextLockedHero.milestoneLevel}</strong>!`
        : `All 4 Heroes Unlocked!`;

      const maxMilestone = 7;
      const pct = Math.min(100, Math.max(16, Math.round(((unlockedLevel - 1) / (maxMilestone - 1)) * 100)));

      let nodesHtml = '';
      HEROES_DATA.forEach((hero) => {
        const isUnlocked = unlockedLevel >= hero.milestoneLevel;
        nodesHtml += `
          <div class="milestone-step-node ${isUnlocked ? 'unlocked' : 'locked'}" title="${hero.name} (Milestone: Level ${hero.milestoneLevel})">
            <div class="node-avatar-frame" style="--accent-hero: ${hero.themeColor};">
              <img class="node-hero-img ${!isUnlocked ? 'silhouetted' : ''}" src="${hero.avatarUrl}" alt="${hero.name}" />
              <span class="node-status-badge ${isUnlocked ? 'unlocked' : 'locked'}">
                ${isUnlocked
                  ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
                  : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>`
                }
              </span>
            </div>
            <span class="node-step-lvl">LVL ${hero.milestoneLevel}</span>
            <span class="node-hero-name">${hero.name.split(' ')[0]}</span>
          </div>
        `;
      });

      milestoneBannerEl.innerHTML = `
        <div class="modal-milestone-info">
          <div class="milestone-banner-top">
            <span class="milestone-badge-lead">HERO PROGRESSION MILESTONES</span>
            <span class="milestones-next-teaser">${bannerHint}</span>
          </div>
          <div class="milestones-track-container modal-track">
            <div class="milestones-progress-line">
              <div class="milestones-progress-fill" style="width: ${pct}%;"></div>
            </div>
            <div class="milestones-nodes-row">
              ${nodesHtml}
            </div>
          </div>
        </div>
      `;
    }


    let html = '';
    HEROES_DATA.forEach((hero) => {
      const isUnlocked = unlockedLevel >= hero.milestoneLevel;
      const statusPill = isUnlocked
        ? `<span class="hero-status-pill unlocked"><svg class="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> UNLOCKED</span>`
        : `<span class="hero-status-pill locked"><svg class="lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg> UNLOCKS AT LEVEL ${hero.milestoneLevel}</span>`;

      html += `
        <article class="hero-collection-card ${isUnlocked ? 'unlocked-card' : 'locked-card'}" style="--hero-color: ${hero.themeColor};">
          <div class="hero-card-glow" aria-hidden="true"></div>

          <div class="hero-portrait-frame">
            <img class="hero-portrait-img ${!isUnlocked ? 'silhouetted' : ''}" src="${hero.avatarUrl}" alt="${hero.name}" />
            ${!isUnlocked ? `<div class="hero-lock-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg></div>` : ''}
          </div>

          <div class="hero-details">
            <div class="hero-meta-row">
              <span class="hero-archetype">${hero.archetype}</span>
              ${statusPill}
            </div>

            <h3 class="hero-display-name">${hero.name}</h3>

            <div class="hero-ability-box">
              <span class="ability-title">
                <svg class="ability-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                ${hero.abilityName}
              </span>
              <p class="ability-desc">${hero.abilityDesc}</p>
            </div>

            <div class="hero-stats-bars">
              <div class="stat-line">
                <span class="stat-name">Velocity</span>
                <div class="stat-track"><div class="stat-fill" style="width: ${hero.speed}%;"></div></div>
              </div>
              <div class="stat-line">
                <span class="stat-name">Demolition</span>
                <div class="stat-track"><div class="stat-fill" style="width: ${hero.power}%;"></div></div>
              </div>
              <div class="stat-line">
                <span class="stat-name">Penetration</span>
                <div class="stat-track"><div class="stat-fill" style="width: ${hero.pierce}%;"></div></div>
              </div>
            </div>
          </div>
        </article>
      `;
    });

    gridEl.innerHTML = html;
  }
}
