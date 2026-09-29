/**
 * 8 Sequentially Unlocked Levels with Rich, Multi-Tier Architectural Structures.
 * Built using perfectly calibrated modular blocks (columns, lintels, bricks, scaffolds,
 * TNT chambers, and coin vaults) with zero interpenetration so structures remain
 * completely stable until the player launches a bird.
 *
 * Ground surface is at y = 0.
 * Slingshot anchor is at x = -12.5, z = 0.
 * All gameplay physics bodies sit strictly on the z = 0 plane.
 */
export const LEVELS = [
  {
    id: 1,
    name: 'Timber Watchtower',
    zone: 'Emerald Valley',
    icon: '🏰',
    difficulty: 'Easy',
    description: 'A 3-story timber guard tower with an outer sentry outpost and rooftop coin vault.',
    coinReward: 85,
    birds: ['red', 'red', 'speed'],
    blocks: [
      // Outer Sentry Post (x = 7.3)
      { type: 'wood', pos: [6.6, 0.8, 0], size: [0.45, 1.6, 1.2] },
      { type: 'wood', pos: [8.0, 0.8, 0], size: [0.45, 1.6, 1.2] },
      { type: 'wood', pos: [7.3, 1.75, 0], size: [2.0, 0.3, 1.2] },
      { type: 'glass', pos: [7.3, 2.45, 0], size: [0.5, 1.1, 1.0] },

      // Main Tower - Ground Floor (y = 0 to 1.8)
      { type: 'wood', pos: [9.6, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [11.4, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [13.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [15.0, 0.9, 0], size: [0.45, 1.8, 1.2] },
      // 1st Floor Deck (single continuous spanning beam, no overlap)
      { type: 'wood', pos: [12.3, 1.95, 0], size: [5.8, 0.3, 1.2] },

      // Main Tower - 2nd Floor (y = 2.1 to 3.9)
      { type: 'wood', pos: [10.4, 3.0, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [14.2, 3.0, 0], size: [0.45, 1.8, 1.2] },
      // 2nd Floor Deck
      { type: 'wood', pos: [12.3, 4.05, 0], size: [4.4, 0.3, 1.2] },

      // Main Tower - 3rd Floor Observation Deck (y = 4.2 to 5.9)
      { type: 'glass', pos: [11.2, 5.05, 0], size: [0.4, 1.7, 1.0] },
      { type: 'glass', pos: [13.4, 5.05, 0], size: [0.4, 1.7, 1.0] },
      // Roof Battlements
      { type: 'wood', pos: [12.3, 6.05, 0], size: [3.0, 0.3, 1.2] },
      { type: 'wood', pos: [11.0, 6.5, 0], size: [0.4, 0.6, 1.0] },
      { type: 'wood', pos: [13.6, 6.5, 0], size: [0.4, 0.6, 1.0] },

      // Golden Treasure Vault atop the roof
      { type: 'coin', pos: [12.3, 6.6, 0], size: [0.8, 0.8, 0.8] }
    ],
    targets: [
      // Sits inside outer sentry post on ground
      { pos: [7.3, 0.55, 0], radius: 0.55, isBoss: false },
      // Sits on ground in main tower central bay
      { pos: [12.3, 0.55, 0], radius: 0.55, isBoss: false },
      // Sits on 1st floor deck inside 2nd floor room
      { pos: [12.3, 2.65, 0], radius: 0.55, isBoss: false },
      // Sits on 2nd floor deck in observation room
      { pos: [12.3, 4.75, 0], radius: 0.55, isBoss: false }
    ]
  },
  {
    id: 2,
    name: 'Twin Crystal Spires',
    zone: 'Crystal Ridge',
    icon: '💎',
    difficulty: 'Easy',
    description: 'Dual glass spires connected by an explosive TNT suspension walkway.',
    coinReward: 125,
    birds: ['red', 'speed', 'speed', 'heavy'],
    blocks: [
      // Left Spire - Ground & 1st Floor (y = 0 to 2.1)
      { type: 'wood', pos: [7.5, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [9.5, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'glass', pos: [8.5, 1.95, 0], size: [2.6, 0.3, 1.2] },

      // Left Spire - 2nd Floor (y = 2.1 to 4.2)
      { type: 'glass', pos: [7.8, 3.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'glass', pos: [9.2, 3.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'wood', pos: [8.5, 4.05, 0], size: [2.2, 0.3, 1.2] },

      // Left Spire - Roof Crystal (dual balanced columns)
      { type: 'glass', pos: [7.9, 5.0, 0], size: [0.35, 1.6, 1.0] },
      { type: 'glass', pos: [9.1, 5.0, 0], size: [0.35, 1.6, 1.0] },
      { type: 'wood', pos: [8.5, 5.95, 0], size: [1.8, 0.3, 1.0] },
      { type: 'coin', pos: [8.5, 6.5, 0], size: [0.75, 0.75, 0.75] },

      // Right Spire - Ground & 1st Floor (y = 0 to 2.1)
      { type: 'stone', pos: [13.5, 0.9, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [15.5, 0.9, 0], size: [0.5, 1.8, 1.2] },
      { type: 'wood', pos: [14.5, 1.95, 0], size: [2.6, 0.3, 1.2] },

      // Right Spire - 2nd Floor (y = 2.1 to 4.2)
      { type: 'glass', pos: [13.8, 3.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'glass', pos: [15.2, 3.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'wood', pos: [14.5, 4.05, 0], size: [2.2, 0.3, 1.2] },

      // Right Spire - Roof Bastion (dual balanced columns)
      { type: 'stone', pos: [13.9, 5.0, 0], size: [0.4, 1.6, 1.0] },
      { type: 'stone', pos: [15.1, 5.0, 0], size: [0.4, 1.6, 1.0] },
      { type: 'wood', pos: [14.5, 5.95, 0], size: [1.8, 0.3, 1.0] },
      { type: 'coin', pos: [14.5, 6.5, 0], size: [0.75, 0.75, 0.75] },

      // Central Support Pillar and Suspension Bridge connecting spires at y = 4.05
      { type: 'wood', pos: [11.5, 1.95, 0], size: [0.55, 3.9, 1.0] },
      { type: 'wood', pos: [11.5, 4.05, 0], size: [3.8, 0.3, 1.0] },
      { type: 'tnt', pos: [11.5, 4.6, 0], size: [0.8, 0.8, 0.8] },

      // Ground TNT between spires
      { type: 'tnt', pos: [10.2, 0.4, 0], size: [0.8, 0.8, 0.8] },
      { type: 'tnt', pos: [12.8, 0.4, 0], size: [0.8, 0.8, 0.8] }
    ],
    targets: [
      { pos: [8.5, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [14.5, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [8.5, 2.65, 0], radius: 0.55, isBoss: false },
      { pos: [14.5, 2.65, 0], radius: 0.55, isBoss: false },
      { pos: [11.5, 5.35, 0], radius: 0.55, isBoss: false }
    ]
  },
  {
    id: 3,
    name: 'Granite Ramparts',
    zone: 'Granite Bastion',
    icon: '🛡️',
    difficulty: 'Medium',
    description: 'Thick granite masonry shielding garrison commanders and treasure chambers.',
    coinReward: 165,
    birds: ['speed', 'heavy', 'heavy', 'red'],
    blocks: [
      // Ground foundation blocks (y = 0 to 0.9)
      { type: 'stone', pos: [7.2, 0.45, 0], size: [0.8, 0.9, 1.2] },
      { type: 'stone', pos: [9.6, 0.45, 0], size: [0.8, 0.9, 1.2] },
      { type: 'stone', pos: [12.0, 0.45, 0], size: [0.8, 0.9, 1.2] },
      { type: 'stone', pos: [14.4, 0.45, 0], size: [0.8, 0.9, 1.2] },
      { type: 'stone', pos: [16.8, 0.45, 0], size: [0.8, 0.9, 1.2] },

      // Lower Pillars (y = 0.9 to 2.7)
      { type: 'stone', pos: [7.2, 1.8, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [9.6, 1.8, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [12.0, 1.8, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [14.4, 1.8, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [16.8, 1.8, 0], size: [0.5, 1.8, 1.2] },

      // 1st Floor Continuous Beams (y = 2.7 to 3.0, zero gaps across all pillars)
      { type: 'stone', pos: [9.6, 2.85, 0], size: [5.2, 0.3, 1.2] },
      { type: 'stone', pos: [14.4, 2.85, 0], size: [5.2, 0.3, 1.2] },

      // 2nd Floor Fortifications (y = 3.0 to 4.8, perfectly seated on beams)
      { type: 'wood', pos: [8.4, 3.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [10.8, 3.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [13.2, 3.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [15.6, 3.9, 0], size: [0.45, 1.8, 1.2] },

      // 2nd Floor Deck (y = 4.8 to 5.1)
      { type: 'wood', pos: [12.0, 4.95, 0], size: [8.0, 0.3, 1.2] },

      // 3rd Floor High Keep (y = 5.1 to 6.9)
      { type: 'glass', pos: [10.8, 6.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'glass', pos: [13.2, 6.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'wood', pos: [12.0, 7.05, 0], size: [3.0, 0.3, 1.2] },
      { type: 'coin', pos: [12.0, 7.6, 0], size: [0.8, 0.8, 0.8] }
    ],
    targets: [
      { pos: [10.8, 0.75, 0], radius: 0.75, isBoss: true },
      { pos: [8.4, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [15.6, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [9.6, 3.55, 0], radius: 0.55, isBoss: false },
      { pos: [14.4, 3.55, 0], radius: 0.55, isBoss: false }
    ]
  },
  {
    id: 4,
    name: 'TNT Pyramid Citadel',
    zone: 'Cinder Dunes',
    icon: '💥',
    difficulty: 'Medium',
    description: 'A 4-tier stepped fortress pyramid rigged with volatile TNT charges and golden relics.',
    coinReward: 210,
    birds: ['speed', 'red', 'heavy', 'speed'],
    blocks: [
      // Tier 1 Base Pillars (y = 0 to 1.8)
      { type: 'wood', pos: [7.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [9.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [11.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [13.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [15.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [17.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      // Tier 1 Continuous Deck
      { type: 'stone', pos: [12.2, 1.95, 0], size: [10.8, 0.3, 1.2] },

      // Tier 2 Pillars (y = 2.1 to 3.9)
      { type: 'wood', pos: [8.8, 3.0, 0], size: [0.45, 1.8, 1.2] },
      { type: 'glass', pos: [11.0, 3.0, 0], size: [0.45, 1.8, 1.2] },
      { type: 'glass', pos: [13.4, 3.0, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [15.6, 3.0, 0], size: [0.45, 1.8, 1.2] },
      // Tier 2 Deck
      { type: 'wood', pos: [12.2, 4.05, 0], size: [7.4, 0.3, 1.2] },

      // Tier 3 Pillars (y = 4.2 to 6.0)
      { type: 'glass', pos: [10.4, 5.1, 0], size: [0.45, 1.8, 1.2] },
      { type: 'glass', pos: [14.0, 5.1, 0], size: [0.45, 1.8, 1.2] },
      // Tier 3 Deck
      { type: 'wood', pos: [12.2, 6.15, 0], size: [4.4, 0.3, 1.2] },

      // Tier 4 Spire (y = 6.3 to 8.0)
      { type: 'wood', pos: [11.4, 7.15, 0], size: [0.4, 1.7, 1.0] },
      { type: 'wood', pos: [13.0, 7.15, 0], size: [0.4, 1.7, 1.0] },
      { type: 'stone', pos: [12.2, 8.15, 0], size: [2.2, 0.3, 1.0] },
      { type: 'coin', pos: [12.2, 8.75, 0], size: [0.8, 0.8, 0.8] },

      // TNT Munition Caches (safely seated, zero overlap)
      { type: 'tnt', pos: [12.2, 0.4, 0], size: [0.8, 0.8, 0.8] },
      { type: 'tnt', pos: [10.0, 2.5, 0], size: [0.8, 0.8, 0.8] },
      { type: 'tnt', pos: [13.2, 4.6, 0], size: [0.8, 0.8, 0.8] }
    ],
    targets: [
      { pos: [8.2, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [16.2, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [12.2, 2.85, 0], radius: 0.75, isBoss: true },
      { pos: [11.2, 4.75, 0], radius: 0.55, isBoss: false },
      { pos: [12.2, 6.85, 0], radius: 0.55, isBoss: false }
    ]
  },
  {
    id: 5,
    name: 'Tri-Bastion Citadel',
    zone: 'Twin Horizon',
    icon: '🧭',
    difficulty: 'Hard',
    description: 'Three interconnected castle bastions with fortified bridges and central TNT chambers.',
    coinReward: 260,
    birds: ['speed', 'heavy', 'speed', 'heavy'],
    blocks: [
      // Bastion 1: Forward Guard Post (x = 6.6 to 8.4)
      { type: 'wood', pos: [6.8, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [8.2, 0.9, 0], size: [0.45, 1.8, 1.2] },
      { type: 'glass', pos: [7.5, 1.95, 0], size: [2.0, 0.3, 1.2] },
      { type: 'glass', pos: [7.0, 3.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'glass', pos: [8.0, 3.0, 0], size: [0.4, 1.8, 1.0] },
      { type: 'wood', pos: [7.5, 4.05, 0], size: [1.8, 0.3, 1.0] },
      { type: 'coin', pos: [7.5, 4.6, 0], size: [0.75, 0.75, 0.75] },

      // Bastion 2: Central Grand Keep (x = 10.2 to 14.4, rises to y = 8.8)
      { type: 'stone', pos: [10.6, 0.9, 0], size: [0.55, 1.8, 1.2] },
      { type: 'stone', pos: [12.3, 0.9, 0], size: [0.55, 1.8, 1.2] },
      { type: 'stone', pos: [14.0, 0.9, 0], size: [0.55, 1.8, 1.2] },
      { type: 'stone', pos: [12.3, 1.95, 0], size: [4.2, 0.35, 1.2] },

      // Central Keep - Floor 2
      { type: 'wood', pos: [11.0, 3.0, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [13.6, 3.0, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [12.3, 4.05, 0], size: [3.4, 0.35, 1.2] },

      // Central Keep - Floor 3
      { type: 'stone', pos: [11.3, 5.1, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [13.3, 5.1, 0], size: [0.45, 1.8, 1.2] },
      { type: 'wood', pos: [12.3, 6.15, 0], size: [2.8, 0.3, 1.2] },

      // Central Keep - Roof Spire
      { type: 'glass', pos: [11.8, 7.1, 0], size: [0.4, 1.6, 1.0] },
      { type: 'glass', pos: [12.8, 7.1, 0], size: [0.4, 1.6, 1.0] },
      { type: 'stone', pos: [12.3, 8.05, 0], size: [1.8, 0.3, 1.0] },
      { type: 'coin', pos: [12.3, 8.65, 0], size: [0.8, 0.8, 0.8] },

      // Bastion 3: Rear Artillery Tower (x = 16.2 to 18.0)
      { type: 'stone', pos: [16.3, 0.9, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [17.9, 0.9, 0], size: [0.5, 1.8, 1.2] },
      { type: 'wood', pos: [17.1, 1.95, 0], size: [2.4, 0.3, 1.2] },
      { type: 'wood', pos: [16.5, 3.0, 0], size: [0.45, 1.8, 1.0] },
      { type: 'wood', pos: [17.7, 3.0, 0], size: [0.45, 1.8, 1.0] },
      { type: 'wood', pos: [17.1, 4.05, 0], size: [2.0, 0.3, 1.0] },
      { type: 'coin', pos: [17.1, 4.6, 0], size: [0.75, 0.75, 0.75] },

      // TNT Munitions
      { type: 'tnt', pos: [9.4, 0.4, 0], size: [0.8, 0.8, 0.8] },
      { type: 'tnt', pos: [15.2, 0.4, 0], size: [0.8, 0.8, 0.8] },
      { type: 'tnt', pos: [12.3, 6.7, 0], size: [0.8, 0.8, 0.8] }
    ],
    targets: [
      { pos: [7.5, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [12.3, 2.85, 0], radius: 0.75, isBoss: true },
      { pos: [17.1, 0.55, 0], radius: 0.55, isBoss: false },
      { pos: [12.3, 4.75, 0], radius: 0.55, isBoss: false }
    ]
  },
  {
    id: 6,
    name: 'Aero Sky Viaduct',
    zone: 'Aero Canyon',
    icon: '🌉',
    difficulty: 'Hard',
    description: 'A multi-pier arched bridge structure supporting upper watch garrisons and high-altitude targets.',
    coinReward: 310,
    birds: ['speed', 'heavy', 'speed', 'heavy', 'red'],
    blocks: [
      // 4 Tall Stone Piers (y = 0 to 4.0)
      { type: 'stone', pos: [7.2, 1.0, 0], size: [0.6, 2.0, 1.4] },
      { type: 'stone', pos: [7.2, 3.0, 0], size: [0.55, 2.0, 1.3] },

      { type: 'stone', pos: [10.5, 1.0, 0], size: [0.6, 2.0, 1.4] },
      { type: 'stone', pos: [10.5, 3.0, 0], size: [0.55, 2.0, 1.3] },

      { type: 'stone', pos: [13.8, 1.0, 0], size: [0.6, 2.0, 1.4] },
      { type: 'stone', pos: [13.8, 3.0, 0], size: [0.55, 2.0, 1.3] },

      { type: 'stone', pos: [17.1, 1.0, 0], size: [0.6, 2.0, 1.4] },
      { type: 'stone', pos: [17.1, 3.0, 0], size: [0.55, 2.0, 1.3] },

      // Main Viaduct Road Deck (spans x = 6.8 to 17.5, y = 4.0 to 4.35)
      { type: 'stone', pos: [12.15, 4.175, 0], size: [11.0, 0.35, 1.4] },

      // Left Pavilion on Deck (x = 8.0 to 9.7)
      { type: 'glass', pos: [8.0, 5.35, 0], size: [0.45, 1.8, 1.1] },
      { type: 'glass', pos: [9.7, 5.35, 0], size: [0.45, 1.8, 1.1] },
      { type: 'wood', pos: [8.85, 6.4, 0], size: [2.4, 0.3, 1.1] },

      // Central High Watchtower on Deck (x = 11.2 to 13.1)
      { type: 'stone', pos: [11.2, 5.35, 0], size: [0.45, 1.8, 1.1] },
      { type: 'stone', pos: [13.1, 5.35, 0], size: [0.45, 1.8, 1.1] },
      { type: 'wood', pos: [12.15, 6.4, 0], size: [2.6, 0.3, 1.1] },

      // Right Pavilion on Deck (x = 14.6 to 16.3)
      { type: 'glass', pos: [14.6, 5.35, 0], size: [0.45, 1.8, 1.1] },
      { type: 'glass', pos: [16.3, 5.35, 0], size: [0.45, 1.8, 1.1] },
      { type: 'wood', pos: [15.45, 6.4, 0], size: [2.4, 0.3, 1.1] },

      // Central Sky Platform (y = 6.55 to 8.4)
      { type: 'wood', pos: [11.6, 7.35, 0], size: [0.4, 1.6, 1.0] },
      { type: 'wood', pos: [12.7, 7.35, 0], size: [0.4, 1.6, 1.0] },
      { type: 'stone', pos: [12.15, 8.3, 0], size: [1.8, 0.3, 1.0] },
      { type: 'coin', pos: [12.15, 8.9, 0], size: [0.8, 0.8, 0.8] },

      // TNT and Balcony Treasures
      { type: 'tnt', pos: [12.15, 0.4, 0], size: [0.8, 0.8, 0.8] },
      { type: 'coin', pos: [8.85, 6.95, 0], size: [0.75, 0.75, 0.75] },
      { type: 'coin', pos: [15.45, 6.95, 0], size: [0.75, 0.75, 0.75] }
    ],
    targets: [
      { pos: [8.85, 0.65, 0], radius: 0.65, isBoss: false },
      { pos: [15.45, 0.65, 0], radius: 0.65, isBoss: false },
      { pos: [8.85, 4.95, 0], radius: 0.55, isBoss: false },
      { pos: [15.45, 4.95, 0], radius: 0.55, isBoss: false },
      { pos: [12.15, 5.15, 0], radius: 0.75, isBoss: true }
    ]
  },
  {
    id: 7,
    name: 'Obsidian Monolith Vault',
    zone: 'Iron Peak',
    icon: '🏛️',
    difficulty: 'Expert',
    description: 'An impenetrable reinforced fortress of stacked stone and glass with deep treasure catacombs.',
    coinReward: 380,
    birds: ['heavy', 'speed', 'heavy', 'speed', 'red'],
    blocks: [
      // Deep foundation tier (y = 0 to 2.0)
      { type: 'stone', pos: [7.2, 1.0, 0], size: [0.65, 2.0, 1.4] },
      { type: 'stone', pos: [9.6, 1.0, 0], size: [0.65, 2.0, 1.4] },
      { type: 'stone', pos: [12.0, 1.0, 0], size: [0.65, 2.0, 1.4] },
      { type: 'stone', pos: [14.4, 1.0, 0], size: [0.65, 2.0, 1.4] },
      { type: 'stone', pos: [16.8, 1.0, 0], size: [0.65, 2.0, 1.4] },
      // Foundation Continuous Cap Beam
      { type: 'stone', pos: [12.0, 2.15, 0], size: [10.6, 0.35, 1.4] },

      // Level 2 Vault Walls (y = 2.3 to 4.3)
      { type: 'stone', pos: [7.8, 3.3, 0], size: [0.55, 1.9, 1.3] },
      { type: 'glass', pos: [10.2, 3.3, 0], size: [0.5, 1.9, 1.2] },
      { type: 'stone', pos: [13.8, 3.3, 0], size: [0.55, 1.9, 1.3] },
      { type: 'stone', pos: [16.2, 3.3, 0], size: [0.55, 1.9, 1.3] },
      // Level 2 Ceiling
      { type: 'stone', pos: [12.0, 4.45, 0], size: [9.6, 0.35, 1.3] },

      // Level 3 High Sanctuary (y = 4.6 to 6.6)
      { type: 'wood', pos: [9.0, 5.55, 0], size: [0.45, 1.8, 1.2] },
      { type: 'stone', pos: [11.0, 5.55, 0], size: [0.5, 1.8, 1.2] },
      { type: 'stone', pos: [13.0, 5.55, 0], size: [0.5, 1.8, 1.2] },
      { type: 'wood', pos: [15.0, 5.55, 0], size: [0.45, 1.8, 1.2] },
      // Level 3 Ceiling
      { type: 'stone', pos: [12.0, 6.65, 0], size: [6.8, 0.35, 1.3] },

      // Level 4 Spire (y = 6.8 to 8.8)
      { type: 'glass', pos: [11.0, 7.7, 0], size: [0.4, 1.8, 1.0] },
      { type: 'glass', pos: [13.0, 7.7, 0], size: [0.4, 1.8, 1.0] },
      { type: 'wood', pos: [12.0, 8.75, 0], size: [2.8, 0.3, 1.1] },
      { type: 'coin', pos: [12.0, 9.35, 0], size: [0.85, 0.85, 0.85] },

      // Flanking Treasure Spires
      { type: 'coin', pos: [7.2, 2.65, 0], size: [0.75, 0.75, 0.75] },
      { type: 'coin', pos: [16.8, 2.65, 0], size: [0.75, 0.75, 0.75] },

      // Hidden TNT Breaching Points
      { type: 'tnt', pos: [12.0, 0.45, 0], size: [0.85, 0.85, 0.85] },
      { type: 'tnt', pos: [12.0, 2.85, 0], size: [0.85, 0.85, 0.85] }
    ],
    targets: [
      { pos: [8.4, 0.6, 0], radius: 0.6, isBoss: false },
      { pos: [15.6, 0.6, 0], radius: 0.6, isBoss: false },
      { pos: [12.0, 5.35, 0], radius: 0.75, isBoss: true },
      { pos: [12.0, 7.45, 0], radius: 0.55, isBoss: false }
    ]
  },
  {
    id: 8,
    name: 'Dili Grand Royal Citadel',
    zone: 'Crown Summit',
    icon: '👑',
    difficulty: 'Boss',
    description: 'The monumental 5-tier royal palace citadel! Towering over 12 units high with grand chain-reaction TNT demolition.',
    coinReward: 500,
    birds: ['speed', 'heavy', 'speed', 'heavy', 'red'],
    blocks: [
      // ── TIER 1: Massive Foundation Bastion (y = 0 to 2.2) ──
      { type: 'stone', pos: [6.8, 1.0, 0], size: [0.65, 2.0, 1.5] },
      { type: 'stone', pos: [9.0, 1.0, 0], size: [0.65, 2.0, 1.5] },
      { type: 'stone', pos: [11.2, 1.0, 0], size: [0.65, 2.0, 1.5] },
      { type: 'stone', pos: [13.4, 1.0, 0], size: [0.65, 2.0, 1.5] },
      { type: 'stone', pos: [15.6, 1.0, 0], size: [0.65, 2.0, 1.5] },
      { type: 'stone', pos: [17.8, 1.0, 0], size: [0.65, 2.0, 1.5] },
      // Tier 1 Continuous Deck
      { type: 'stone', pos: [12.3, 2.15, 0], size: [12.2, 0.35, 1.5] },

      // ── TIER 2: Lower Castle Halls (y = 2.3 to 4.4) ──
      { type: 'wood', pos: [7.4, 3.3, 0], size: [0.5, 1.9, 1.3] },
      { type: 'wood', pos: [9.2, 3.3, 0], size: [0.5, 1.9, 1.3] },
      { type: 'stone', pos: [11.2, 3.3, 0], size: [0.55, 1.9, 1.4] },
      { type: 'stone', pos: [13.4, 3.3, 0], size: [0.55, 1.9, 1.4] },
      { type: 'wood', pos: [15.4, 3.3, 0], size: [0.5, 1.9, 1.3] },
      { type: 'wood', pos: [17.2, 3.3, 0], size: [0.5, 1.9, 1.3] },
      // Tier 2 Continuous Deck
      { type: 'stone', pos: [12.3, 4.45, 0], size: [10.8, 0.35, 1.4] },

      // ── TIER 3: Grand Throne Room (y = 4.6 to 6.8) ──
      { type: 'glass', pos: [10.4, 5.7, 0], size: [0.5, 2.1, 1.2] },
      { type: 'glass', pos: [14.2, 5.7, 0], size: [0.5, 2.1, 1.2] },
      // Tier 3 Deck
      { type: 'stone', pos: [12.3, 6.95, 0], size: [5.0, 0.35, 1.3] },

      // ── TIER 4: Royal Spire Gallery (y = 7.1 to 9.2) ──
      { type: 'wood', pos: [11.0, 8.1, 0], size: [0.45, 1.9, 1.1] },
      { type: 'wood', pos: [13.6, 8.1, 0], size: [0.45, 1.9, 1.1] },
      // Tier 4 Deck
      { type: 'wood', pos: [12.3, 9.25, 0], size: [3.6, 0.3, 1.2] },

      // ── TIER 5: Crown Watchtower (y = 9.4 to 11.4) ──
      { type: 'glass', pos: [11.4, 10.35, 0], size: [0.4, 1.9, 1.0] },
      { type: 'glass', pos: [13.2, 10.35, 0], size: [0.4, 1.9, 1.0] },
      { type: 'stone', pos: [12.3, 11.45, 0], size: [2.4, 0.3, 1.0] },

      // Crown Jewels Gold Chest (y = 11.6 to 12.5)
      { type: 'coin', pos: [12.3, 12.1, 0], size: [0.9, 0.9, 0.9] },

      // Flanking balcony treasures
      { type: 'coin', pos: [8.0, 4.9, 0], size: [0.75, 0.75, 0.75] },
      { type: 'coin', pos: [16.6, 4.9, 0], size: [0.75, 0.75, 0.75] },

      // Catacomb TNT Explosives
      { type: 'tnt', pos: [10.1, 0.45, 0], size: [0.85, 0.85, 0.85] },
      { type: 'tnt', pos: [14.5, 0.45, 0], size: [0.85, 0.85, 0.85] },
      { type: 'tnt', pos: [12.3, 2.75, 0], size: [0.85, 0.85, 0.85] },
      { type: 'tnt', pos: [13.0, 7.55, 0], size: [0.8, 0.8, 0.8] }
    ],
    targets: [
      { pos: [7.9, 0.6, 0], radius: 0.6, isBoss: false },
      { pos: [16.7, 0.6, 0], radius: 0.6, isBoss: false },
      { pos: [12.3, 5.45, 0], radius: 0.85, isBoss: true },
      { pos: [11.8, 7.65, 0], radius: 0.55, isBoss: false },
      { pos: [12.3, 9.95, 0], radius: 0.55, isBoss: false }
    ]
  }
];
