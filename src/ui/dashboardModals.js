import coinLogoUrl from '../assets/coin-with-logo.png';
import char1Url from '../assets/character.png';
import char2Url from '../assets/character-2.png';
import char3Url from '../assets/character-3.png';
import char4Url from '../assets/sub-character-4.png';
import { AVATAR_PRESETS } from './avatarPresets.js';
import { leaderboardService } from '../services/leaderboardService.js';

export const INFERNO_FLARE_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <radialGradient id="fireBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f97316" />
      <stop offset="60%" stop-color="#dc2626" />
      <stop offset="100%" stop-color="#180404" />
    </radialGradient>
    <linearGradient id="fireCorona" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#fireBg)" stroke="#f97316" stroke-width="2.5" />
  <circle cx="50" cy="50" r="38" fill="none" stroke="url(#fireCorona)" stroke-width="2.5" stroke-dasharray="12 6" opacity="0.85" />
  <path d="M44 26 C40 14, 50 8, 50 8 C50 8, 60 14, 56 26 Z" fill="#fbbf24" stroke="#ea580c" stroke-width="1.5" />
  <rect x="22" y="34" width="56" height="32" rx="16" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <polygon points="50,66 52,73 53,66" fill="#dc2626" />
  <g transform="translate(34, 48) rotate(45)">
    <rect x="-6" y="-6" width="12" height="12" fill="#ffffff" />
    <rect x="-1" y="-5" width="6" height="6" fill="#090d16" />
  </g>
  <g transform="translate(66, 48) rotate(45)">
    <rect x="-6" y="-6" width="12" height="12" fill="#ffffff" />
    <rect x="-1" y="-5" width="6" height="6" fill="#090d16" />
  </g>
  <path d="M44 58 Q50 64 56 58" fill="none" stroke="#090d16" stroke-width="2.4" stroke-linecap="round" />
</svg>
`)}`;

export const VORTEX_TITAN_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <radialGradient id="vortexBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="60%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#090d16" />
    </radialGradient>
    <linearGradient id="vortexRing" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c7d2fe" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#vortexBg)" stroke="#818cf8" stroke-width="2.5" />
  <ellipse cx="50" cy="50" rx="40" ry="18" fill="none" stroke="url(#vortexRing)" stroke-width="2.4" transform="rotate(-25 50 50)" opacity="0.85" />
  <ellipse cx="50" cy="50" rx="40" ry="18" fill="none" stroke="url(#vortexRing)" stroke-width="2.0" transform="rotate(35 50 50)" opacity="0.7" />
  <rect x="22" y="34" width="56" height="32" rx="16" fill="#4f46e5" stroke="#3730a3" stroke-width="2" />
  <polygon points="50,66 52,73 53,66" fill="#4f46e5" />
  <g transform="translate(34, 48) rotate(45)">
    <rect x="-6" y="-6" width="12" height="12" fill="#ffffff" />
    <rect x="-1" y="-5" width="6" height="6" fill="#090d16" />
  </g>
  <g transform="translate(66, 48) rotate(45)">
    <rect x="-6" y="-6" width="12" height="12" fill="#ffffff" />
    <rect x="-1" y="-5" width="6" height="6" fill="#090d16" />
  </g>
  <path d="M44 58 Q50 64 56 58" fill="none" stroke="#090d16" stroke-width="2.4" stroke-linecap="round" />
</svg>
`)}`;

export const VOLT_STRIKER_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <radialGradient id="voltBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="55%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#082f49" />
    </radialGradient>
    <linearGradient id="voltBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#00f0ff" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#voltBg)" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="50" cy="50" r="39" fill="none" stroke="#67e8f9" stroke-width="2" stroke-dasharray="10 5" opacity="0.8" />
  <!-- Lightning bolt top crest -->
  <polygon points="52,4 42,22 49,22 40,36 58,18 51,18" fill="url(#voltBoltGrad)" stroke="#0284c7" stroke-width="1.2" />
  <!-- Speech-bubble pill character body -->
  <rect x="22" y="34" width="56" height="32" rx="16" fill="#0284c7" stroke="#0369a1" stroke-width="2" />
  <polygon points="50,66 52,73 53,66" fill="#0284c7" />
  <!-- Side lightning fins -->
  <polygon points="12,48 22,42 18,52" fill="#38bdf8" />
  <polygon points="88,48 78,42 82,52" fill="#38bdf8" />
  <!-- Chevron eyes -->
  <g transform="translate(34, 48) rotate(45)">
    <rect x="-6" y="-6" width="12" height="12" fill="#ffffff" />
    <rect x="-1" y="-5" width="6" height="6" fill="#090d16" />
  </g>
  <g transform="translate(66, 48) rotate(45)">
    <rect x="-6" y="-6" width="12" height="12" fill="#ffffff" />
    <rect x="-1" y="-5" width="6" height="6" fill="#090d16" />
  </g>
  <path d="M44 58 Q50 64 56 58" fill="none" stroke="#090d16" stroke-width="2.4" stroke-linecap="round" />
</svg>
`)}`;

export const HEROES_DATA = [
  {
    id: 'commander_falcon',
    name: 'Commander Falcon',
    archetype: 'Winged Striker',
    type: 'red',
    avatarUrl: char1Url,
    milestoneLevel: 1,
    specialPower: 'Aero Kinetic Stability & Timber Demolition',
    abilityName: 'Aero-Wing Strike',
    abilityDesc: 'Signature aerodynamic balance and high kinetic impact. Delivers +60% bonus demolition damage against wooden guard posts and timber scaffolds.',
    recommendedLevels: 'Levels 1–6, 20',
    speed: 88,
    power: 82,
    pierce: 76,
    claimReward: 100,
    themeColor: '#38bdf8'
  },
  {
    id: 'speedster_swift',
    name: 'Speedster Swift',
    archetype: 'Sonic Plasma Orb',
    type: 'speed',
    avatarUrl: char2Url,
    milestoneLevel: 3,
    specialPower: 'Supersonic Dash & Glass Penetration',
    abilityName: 'Supersonic Boost',
    abilityDesc: 'Tap screen mid-flight to ignite high-velocity plasma thrust. Shatters through multi-layer glass structures with 3.2x demolition force.',
    recommendedLevels: 'Levels 3–15, 20',
    speed: 99,
    power: 75,
    pierce: 96,
    claimReward: 150,
    themeColor: '#0ea5e9'
  },
  {
    id: 'bomber_titan',
    name: 'Bomber Titan',
    archetype: 'Heavy Seismic Orb',
    type: 'heavy',
    avatarUrl: char3Url,
    milestoneLevel: 5,
    specialPower: 'Meteor Slam & Foundation Shatter',
    abilityName: 'Meteor Slam',
    abilityDesc: 'Heavy 4.8kg density core. Tap mid-flight to plummet vertically at high terminal velocity, triggering seismic shockwaves that crush granite and stone pillars.',
    recommendedLevels: 'Levels 5–20',
    speed: 64,
    power: 99,
    pierce: 88,
    claimReward: 200,
    themeColor: '#d946ef'
  },
  {
    id: 'splitter_trio',
    name: 'Splitter Trio',
    archetype: 'Tactical Tri-Cluster',
    type: 'split',
    avatarUrl: char4Url,
    milestoneLevel: 7,
    specialPower: 'Tri-Cluster Spread & Multi-Target Swarm',
    abilityName: 'Tri-Cluster Spread',
    abilityDesc: 'Tap mid-flight to multiply into 3 synchronized strike birds in a vertical fanned volley, blanketing multi-tier platforms and wide target arrays.',
    recommendedLevels: 'Levels 7–15, 17–20',
    speed: 86,
    power: 88,
    pierce: 90,
    claimReward: 250,
    themeColor: '#f59e0b'
  },
  {
    id: 'inferno_flare',
    name: 'Inferno Flare',
    archetype: 'Solar Pyre Orb',
    type: 'fire',
    avatarUrl: INFERNO_FLARE_AVATAR,
    milestoneLevel: 11,
    specialPower: 'Incendiary Detonation & Chain Reactions',
    abilityName: 'Inferno Burst',
    abilityDesc: 'Tap mid-flight or on impact to detonate a 3.8-unit thermal fireball blast. Instantly explodes distant TNT vaults, incinerates wood, and melts metal joint connections.',
    recommendedLevels: 'Levels 11–20',
    speed: 84,
    power: 96,
    pierce: 82,
    claimReward: 300,
    themeColor: '#f97316'
  },
  {
    id: 'vortex_titan',
    name: 'Vortex Titan',
    archetype: 'Gravitational Singularity',
    type: 'vortex',
    avatarUrl: VORTEX_TITAN_AVATAR,
    milestoneLevel: 16,
    specialPower: 'Kinetic Implosion & Fortress Repulsion',
    abilityName: 'Vortex Shockwave',
    abilityDesc: 'Tap mid-flight or on impact to release a high-frequency gravitational shockwave. Repels reinforced iron girders and stone blocks outward with massive impulse force.',
    recommendedLevels: 'Levels 16–20',
    speed: 78,
    power: 100,
    pierce: 95,
    claimReward: 400,
    themeColor: '#818cf8'
  },
  {
    id: 'volt_striker',
    name: 'Volt Striker',
    archetype: 'High-Voltage Arc Generator',
    type: 'lightning',
    avatarUrl: VOLT_STRIKER_AVATAR,
    milestoneLevel: 21,
    specialPower: 'Thunderbolt Surge & Chain Lightning',
    abilityName: 'Thunderbolt Surge',
    abilityDesc: 'Tap mid-flight to discharge high-frequency electric plasma bolts. Arcs through metal girders and stone columns, electrocuting multiple structures and targets simultaneously with piercing shockwaves.',
    recommendedLevels: 'Levels 21–35',
    speed: 94,
    power: 98,
    pierce: 99,
    claimReward: 500,
    themeColor: '#06b6d4'
  }
];

export const MISSIONS_DATA = [
  {
    id: 'mission_daily_claim',
    title: 'Daily Supply Drop',
    desc: 'Claim your first free daily coin drop from the supply treasury.',
    target: 1,
    rewardCoins: 100,
    getProgress: (storage) => (storage.state?.dailyClaim?.totalClaimedCoins > 0 ? 1 : 0)
  },
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
  },
  {
    id: 'mission_splitter_unlocked',
    title: 'Cluster Swarm',
    desc: 'Reach Stage 7 to unlock Splitter Trio tactical character.',
    target: 7,
    rewardCoins: 250,
    getProgress: (storage) => Math.min(7, storage.getUnlockedLevel())
  },
  {
    id: 'mission_inferno_unlocked',
    title: 'Solar Foundry',
    desc: 'Reach Stage 11 to unlock Inferno Flare incendiary character.',
    target: 11,
    rewardCoins: 300,
    getProgress: (storage) => Math.min(11, storage.getUnlockedLevel())
  },
  {
    id: 'mission_vortex_unlocked',
    title: 'Cosmic Singularity',
    desc: 'Reach Stage 16 to unlock Vortex Titan gravitational character.',
    target: 16,
    rewardCoins: 400,
    getProgress: (storage) => Math.min(16, storage.getUnlockedLevel())
  },
  {
    id: 'mission_grand_champion',
    title: 'Crown Conqueror',
    desc: 'Clear Stage 20 and demolish the Emperor\'s Final Fortress.',
    target: 20,
    rewardCoins: 600,
    getProgress: (storage) => (storage.getStarsForLevel(20) > 0 ? 20 : Math.min(19, storage.getUnlockedLevel()))
  },
  {
    id: 'mission_volt_unlocked',
    title: 'Thunderstorm Genesis',
    desc: 'Reach Stage 21 to unlock Volt Striker high-voltage character.',
    target: 21,
    rewardCoins: 500,
    getProgress: (storage) => Math.min(21, storage.getUnlockedLevel())
  },
  {
    id: 'mission_stage_25',
    title: 'Plasma Conqueror',
    desc: 'Clear Stage 25 in the Storm Bastion.',
    target: 25,
    rewardCoins: 400,
    getProgress: (storage) => (storage.getStarsForLevel(25) > 0 ? 25 : Math.min(24, storage.getUnlockedLevel()))
  },
  {
    id: 'mission_stage_30',
    title: 'Titan Dominator',
    desc: 'Clear Stage 30 and demolish the Colossus of Sparks.',
    target: 30,
    rewardCoins: 500,
    getProgress: (storage) => (storage.getStarsForLevel(30) > 0 ? 30 : Math.min(29, storage.getUnlockedLevel()))
  },
  {
    id: 'mission_grand_emperor',
    title: 'Supreme Apex Sovereign',
    desc: 'Clear Stage 35 and achieve total victory across all 35 realms.',
    target: 35,
    rewardCoins: 1000,
    getProgress: (storage) => (storage.getStarsForLevel(35) > 0 ? 35 : Math.min(34, storage.getUnlockedLevel()))
  },
  {
    id: 'mission_star_overlord',
    title: 'Centurion of Stars',
    desc: 'Earn 50 or more Stars across your completed campaign stages.',
    target: 50,
    rewardCoins: 600,
    getProgress: (storage) => Math.min(50, storage.getTotalStars())
  },
  {
    id: 'mission_star_perfection',
    title: 'Starlight Legend',
    desc: 'Earn 90 or more Stars across your completed campaign stages.',
    target: 90,
    rewardCoins: 800,
    getProgress: (storage) => Math.min(90, storage.getTotalStars())
  }
];

export class DashboardModals {
  constructor({ storage, audio, onRefreshHeader, onInspectHero }) {
    this.storage = storage;
    this.audio = audio;
    this.onRefreshHeader = onRefreshHeader;
    this.onInspectHero = onInspectHero;

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
  /* ═════════════════════════════════════════════════════════════
   * MISSIONS & TASKS MODAL WITH DAILY COIN CLAIM SUPPLY DROP
   * ═════════════════════════════════════════════════════════════ */
  openMissions() {
    if (!this.missionsDialog) return;
    this.audio?.playMenuOpen?.();
    this.renderMissionsList();
    this.startDailyCountdownTimer();
    this.missionsDialog.showModal();

    const onDialogClose = () => {
      this.stopDailyCountdownTimer();
      this.missionsDialog?.removeEventListener('close', onDialogClose);
    };
    this.missionsDialog.addEventListener('close', onDialogClose);
  }

  startDailyCountdownTimer() {
    this.stopDailyCountdownTimer();
    this.dailyCountdownTimerId = setInterval(() => {
      const countdownEl = document.getElementById('daily-reset-countdown');
      if (!countdownEl) return;
      const status = this.storage.getDailyClaimStatus();
      if (status.canClaim) {
        this.renderMissionsList();
      } else {
        countdownEl.textContent = `Reset in ${String(status.hours).padStart(2, '0')}:${String(status.minutes).padStart(2, '0')}:${String(status.seconds).padStart(2, '0')}`;
      }
    }, 1000);
  }

  stopDailyCountdownTimer() {
    if (this.dailyCountdownTimerId) {
      clearInterval(this.dailyCountdownTimerId);
      this.dailyCountdownTimerId = null;
    }
  }

  renderMissionsList() {
    const listEl = document.getElementById('missions-list-container');
    if (!listEl) return;

    // 1. Daily Supply Drop / Daily Coin Claim Hero Card
    const dailyStatus = this.storage.getDailyClaimStatus();
    const streakDays = [1, 2, 3, 4, 5, 6, 7];

    let streakCardsHtml = '';
    streakDays.forEach((dayNum) => {
      const reward = dailyStatus.schedule[dayNum - 1];
      const isPast = dailyStatus.currentStreak >= dayNum && (dailyStatus.isClaimedToday || dayNum < dailyStatus.dayNumber);
      const isCurrent = dayNum === dailyStatus.dayNumber;

      let stateClass = '';
      let badgeText = `+${reward}`;
      if (isPast) {
        stateClass = 'completed-day';
        badgeText = '✓';
      } else if (isCurrent) {
        stateClass = dailyStatus.canClaim ? 'active-claimable pulse-ring' : 'active-claimed';
      } else {
        stateClass = 'future-day';
      }

      streakCardsHtml += `
        <div class="daily-streak-node ${stateClass}" title="Day ${dayNum}: +${reward} Free Coins">
          <span class="daily-node-day">D${dayNum}</span>
          <img class="daily-node-coin" src="${coinLogoUrl}" alt="Coin" />
          <span class="daily-node-val">${badgeText}</span>
        </div>
      `;
    });

    const dailyBannerHtml = `
      <section class="daily-reward-banner glass-card" aria-label="Daily Coin Supply Drop">
        <div class="daily-banner-header">
          <div class="daily-header-left">
            <span class="daily-tag-kicker">DAILY SUPPLY DROP</span>
            <h3 class="daily-heading">Daily Treasury Rewards</h3>
          </div>
          <div class="daily-streak-count-badge">
            <span class="streak-flame">⚡</span>
            <span>Streak: <strong>${dailyStatus.currentStreak} Days</strong></span>
          </div>
        </div>

        <div class="daily-streak-track">
          ${streakCardsHtml}
        </div>

        <div class="daily-banner-action-row">
          <div class="daily-reward-preview">
            <span class="preview-label">Today's Supply:</span>
            <strong class="preview-amount">+${dailyStatus.rewardCoins} Free Coins</strong>
          </div>
          ${dailyStatus.canClaim ? `
            <button type="button" class="btn-daily-claim pulse-glow" id="btn-claim-daily-coin">
              <span>CLAIM TODAY</span>
              <img class="coin-icon-img" src="${coinLogoUrl}" alt="Coin" />
              <span>+${dailyStatus.rewardCoins}</span>
            </button>
          ` : `
            <div class="daily-claimed-status-pill">
              <span class="status-check">✓ Claimed Today</span>
              <span class="daily-countdown" id="daily-reset-countdown">Reset in ${String(dailyStatus.hours).padStart(2, '0')}:${String(dailyStatus.minutes).padStart(2, '0')}:${String(dailyStatus.seconds).padStart(2, '0')}</span>
            </div>
          `}
        </div>
      </section>
    `;

    // 2. Campaign Missions & Quests List
    let missionsHtml = '';
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

      missionsHtml += `
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

    listEl.innerHTML = dailyBannerHtml + missionsHtml;

    // Attach click event for daily claim
    const dailyBtn = listEl.querySelector('#btn-claim-daily-coin');
    if (dailyBtn) {
      dailyBtn.addEventListener('click', () => {
        const res = this.storage.claimDailyReward();
        if (res.success) {
          this.audio?.playCoin?.();
          this.audio?.playVictory?.();
          this.onRefreshHeader?.();
          this.renderMissionsList();
        }
      });
    }

    // Attach click events to mission claim buttons
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
      this.audio?.playCoin?.();
      this.onRefreshHeader?.();
      this.renderMissionsList();
    }
  }

  /* ═════════════════════════════════════════════════════════════
   * CHARACTER COLLECTION & MILESTONE REWARD MODAL (7 HEROES)
   * ═════════════════════════════════════════════════════════════ */
  openCharacters() {
    if (!this.charactersDialog) return;
    this.audio?.playMenuOpen?.();
    this.renderCharactersList();
    this.charactersDialog.showModal();
  }

  claimHero(heroId, rewardCoins) {
    if (this.storage.claimCharacter(heroId, rewardCoins)) {
      this.audio?.playCoin?.();
      this.onRefreshHeader?.();
      this.renderCharactersList();
    }
  }

  renderCharactersList() {
    const gridEl = document.getElementById('characters-roster-grid');
    const milestoneBannerEl = document.getElementById('modal-milestone-banner');
    if (!gridEl) return;

    const unlockedLevel = this.storage.getUnlockedLevel();
    const equippedHeroId = this.storage.getEquippedHeroId();

    // Render Milestone Progression Stepper Track inside Characters Codex
    if (milestoneBannerEl) {
      let nextLockedHero = HEROES_DATA.find((h) => h.milestoneLevel > unlockedLevel);
      let bannerHint = nextLockedHero
        ? `Next Unlock: <strong>${nextLockedHero.name}</strong> at <strong>Level ${nextLockedHero.milestoneLevel}</strong>!`
        : `All 7 Legendary Birds Unlocked & Ready!`;

      const maxMilestone = 21;
      const pct = Math.min(100, Math.max(8, Math.round(((unlockedLevel - 1) / (maxMilestone - 1)) * 100)));

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
            <span class="milestone-badge-lead">HERO PROGRESSION MILESTONES (LEVELS 1–35)</span>
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
      const isClaimed = this.storage.hasClaimedCharacter(hero.id);
      const isLead = equippedHeroId === hero.id;

      let statusPill = '';
      let actionFooterHtml = '';

      if (!isUnlocked) {
        statusPill = `<span class="hero-status-pill locked"><svg class="lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg> UNLOCKS AT LEVEL ${hero.milestoneLevel}</span>`;
        actionFooterHtml = `
          <div class="hero-footer-actions-row">
            <div class="hero-locked-tag">
              <svg class="lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              <span>Unlocks in Stage ${hero.milestoneLevel}</span>
            </div>
            <button type="button" class="btn-hero-inspect secondary" data-hero-id="${hero.id}" title="Preview Ability & Stats">
              <svg class="inspect-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>DETAILS</span>
            </button>
          </div>
        `;
      } else if (!isClaimed) {
        statusPill = `<span class="hero-status-pill ready-claim"><svg class="star-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> UNLOCKED • CLAIM BONUS</span>`;
        actionFooterHtml = `
          <div class="hero-footer-actions-row">
            <button type="button" class="btn-hero-claim ready" data-hero-id="${hero.id}" data-reward="${hero.claimReward}">
              <span class="btn-claim-text">CLAIM BONUS</span>
              <span class="btn-claim-reward">+${hero.claimReward} <img class="coin-icon-mini" src="${coinLogoUrl}" alt="Coin" /></span>
            </button>
            <button type="button" class="btn-hero-inspect highlight" data-hero-id="${hero.id}" title="View Hero Ability Card">
              <svg class="inspect-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>ABILITY CARD</span>
            </button>
          </div>
        `;
      } else {
        statusPill = isLead
          ? `<span class="hero-status-pill lead-pill"><svg class="star-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> SQUAD LEADER</span>`
          : `<span class="hero-status-pill unlocked"><svg class="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ACTIVE IN SQUAD</span>`;

        actionFooterHtml = `
          <div class="hero-footer-actions-row">
            <button type="button" class="btn-hero-equip ${isLead ? 'active-lead' : ''}" data-hero-id="${hero.id}" title="${isLead ? 'Current Squad Lead' : 'Equip as Squad Leader'}">
              <span>${isLead ? '★ SQUAD LEAD' : 'EQUIP LEAD'}</span>
            </button>
            <button type="button" class="btn-hero-inspect highlight" data-hero-id="${hero.id}" title="View Hero Ability Card">
              <svg class="inspect-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>ABILITY CARD</span>
            </button>
          </div>
        `;
      }

      html += `
        <article class="hero-collection-card ${isUnlocked ? 'unlocked-card' : 'locked-card'} ${isLead ? 'squad-lead-card' : ''}" style="--hero-color: ${hero.themeColor};">
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

            <div class="hero-title-group">
              <h3 class="hero-display-name">${hero.name}</h3>
              <span class="hero-rec-tag">🎯 ${hero.recommendedLevels}</span>
            </div>

            <div class="hero-power-row">
              <span class="power-label">POWER</span>
              <span class="power-val">${hero.specialPower}</span>
            </div>

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

            <div class="hero-card-footer">
              ${actionFooterHtml}
            </div>
          </div>
        </article>
      `;
    });

    gridEl.innerHTML = html;

    // Attach click events to claim buttons
    gridEl.querySelectorAll('.btn-hero-claim.ready').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const heroId = targetBtn.dataset.heroId;
        const reward = Number(targetBtn.dataset.reward) || 0;
        this.claimHero(heroId, reward);
      });
    });

    // Attach click events to equip as squad lead
    gridEl.querySelectorAll('.btn-hero-equip').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const heroId = e.currentTarget.dataset.heroId;
        this.storage.setEquippedHeroId(heroId);
        this.audio?.playBoost?.();
        this.renderCharactersList();
      });
    });

    // Attach click events to inspect ability card buttons
    gridEl.querySelectorAll('.btn-hero-inspect').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const heroId = e.currentTarget.dataset.heroId;
        const hero = HEROES_DATA.find((h) => h.id === heroId);
        if (hero) {
          this.audio?.playUiClick?.();
          this.onInspectHero?.(hero);
        }
      });
    });
  }
}
