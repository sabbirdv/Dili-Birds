import coinLogoUrl from '../assets/coin-with-logo.png';
import char1Url from '../assets/character.png';
import char2Url from '../assets/character-2.png';
import char3Url from '../assets/character-3.png';
import char4Url from '../assets/sub-character-4.png';
import { AVATAR_PRESETS } from './avatarPresets.js';

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

    // Close buttons
    document.getElementById('btn-close-leaderboard')?.addEventListener('click', () => {
      this.leaderboardDialog?.close();
    });

    document.getElementById('btn-close-missions')?.addEventListener('click', () => {
      this.missionsDialog?.close();
    });

    document.getElementById('btn-close-characters')?.addEventListener('click', () => {
      this.charactersDialog?.close();
    });

    // Close on backdrop click
    [this.leaderboardDialog, this.missionsDialog, this.charactersDialog].forEach((dialog) => {
      dialog?.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    });
  }

  /* ═════════════════════════════════════════════════════════════
   * LEADERBOARD MODAL
   * ═════════════════════════════════════════════════════════════ */
  openLeaderboard() {
    if (!this.leaderboardDialog) return;
    const bodyEl = document.getElementById('leaderboard-list-body');
    if (!bodyEl) return;

    const currentUsername = this.storage.getUsername();
    const currentAvatar = this.storage.getAvatarUrl();
    const currentLevel = this.storage.getUnlockedLevel();
    const currentStars = this.storage.getTotalStars();
    const currentCoins = this.storage.getCoins();
    const currentScore = currentStars * 450 + currentCoins * 2;

    const baseRankings = [
      { rank: 1, name: 'Kaito_Ace', level: 8, stars: 24, score: 14850, avatar: AVATAR_PRESETS[0].url },
      { rank: 2, name: 'SakuraPilot', level: 8, stars: 23, score: 13920, avatar: AVATAR_PRESETS[1].url },
      { rank: 3, name: 'NeonValkyrie', level: 7, stars: 21, score: 11400, avatar: AVATAR_PRESETS[2].url },
      { rank: 4, name: 'BladeRunner_X', level: 6, stars: 18, score: 9650, avatar: AVATAR_PRESETS[3].url },
      { rank: 5, name: 'SkyPhantom', level: 5, stars: 15, score: 8200, avatar: AVATAR_PRESETS[4].url },
      { rank: 6, name: 'EchoFalcon', level: 4, stars: 11, score: 6150, avatar: AVATAR_PRESETS[5].url },
      { rank: 7, name: 'AeroPulse', level: 3, stars: 8, score: 4500, avatar: AVATAR_PRESETS[0].url }
    ];

    // Determine player rank dynamically based on score
    let playerRank = baseRankings.filter((r) => r.score > currentScore).length + 1;
    if (playerRank > 8) playerRank = 8;

    let html = '';
    baseRankings.forEach((pilot) => {
      const isTop3 = pilot.rank <= 3;
      const rankBadgeClass = pilot.rank === 1 ? 'gold' : pilot.rank === 2 ? 'silver' : pilot.rank === 3 ? 'bronze' : '';
      html += `
        <div class="leaderboard-row ${isTop3 ? 'top-rank' : ''}">
          <div class="col-rank">
            <span class="rank-pill ${rankBadgeClass}">#${pilot.rank}</span>
          </div>
          <div class="col-player">
            <img class="row-avatar" src="${pilot.avatar}" alt="" />
            <div class="row-pilot-info">
              <strong class="row-name">${pilot.name}</strong>
              <span class="row-sub">Stage ${pilot.level} Cleared</span>
            </div>
          </div>
          <div class="col-stars">
            <span class="star-pill">
              <svg class="star-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${pilot.stars} ★
            </span>
          </div>
          <div class="col-score">
            <strong>${pilot.score.toLocaleString()}</strong>
          </div>
        </div>
      `;
    });

    // Player personal row card pinned at bottom of modal
    const playerCardEl = document.getElementById('leaderboard-player-card');
    if (playerCardEl) {
      playerCardEl.innerHTML = `
        <div class="player-rank-highlight">
          <div class="col-rank">
            <span class="rank-pill player-badge-pill">#${playerRank}</span>
          </div>
          <div class="col-player">
            <img class="row-avatar highlight-avatar" src="${currentAvatar}" alt="" />
            <div class="row-pilot-info">
              <strong class="row-name">${currentUsername} <span class="you-badge">YOU</span></strong>
              <span class="row-sub">Current Stage: Level ${currentLevel}</span>
            </div>
          </div>
          <div class="col-stars">
            <span class="star-pill active">
              <svg class="star-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${currentStars} ★
            </span>
          </div>
          <div class="col-score">
            <strong class="highlight-score">${currentScore.toLocaleString()} PTS</strong>
          </div>
        </div>
      `;
    }

    bodyEl.innerHTML = html;
    this.leaderboardDialog.showModal();
  }

  /* ═════════════════════════════════════════════════════════════
   * MISSIONS & TASKS MODAL
   * ═════════════════════════════════════════════════════════════ */
  openMissions() {
    if (!this.missionsDialog) return;
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
    this.renderCharactersList();
    this.charactersDialog.showModal();
  }

  renderCharactersList() {
    const gridEl = document.getElementById('characters-roster-grid');
    const milestoneBannerEl = document.getElementById('modal-milestone-banner');
    if (!gridEl) return;

    const unlockedLevel = this.storage.getUnlockedLevel();

    // Render Milestone Progression Banner
    if (milestoneBannerEl) {
      let nextLockedHero = HEROES_DATA.find((h) => h.milestoneLevel > unlockedLevel);
      let bannerHint = nextLockedHero
        ? `Next Special Character: <strong>${nextLockedHero.name}</strong> unlocks at <strong>Level ${nextLockedHero.milestoneLevel}</strong>!`
        : `All 4 Special Characters have been unlocked! Commander roster fully operational.`;

      milestoneBannerEl.innerHTML = `
        <div class="modal-milestone-info">
          <span class="milestone-badge-lead">PROGRESSION MILESTONE STATUS</span>
          <p class="milestone-desc-lead">${bannerHint}</p>
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
