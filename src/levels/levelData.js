/**
 * 8 Sequentially Unlocked 3D Levels arranged around the 3D Square Roadmap.
 * Ground plane top surface is at y = 0.
 * Slingshot is at x = -12.5, z = 0.
 * All structures and targets sit strictly on the z = 0 plane between x = 6.5 and x = 17.5
 * so the entire stage fits cleanly inside the stationary 2D/3D hybrid camera view and
 * every bird shot along the trajectory preview hits targets with 100% accuracy.
 */
export const LEVELS = [
  {
    id: 1,
    name: 'Training Outpost',
    zone: 'Emerald Valley',
    icon: '🏰',
    difficulty: 'Easy',
    description: 'A classic timber watchtower guarding two Dili-Birds targets and a golden coin crate.',
    coinReward: 75,
    birds: ['red', 'red', 'speed'],
    blocks: [
      { type: 'wood', pos: [9.0, 1.5, 0], size: [0.8, 3.0, 1.6] },
      { type: 'wood', pos: [13.0, 1.5, 0], size: [0.8, 3.0, 1.6] },
      { type: 'wood', pos: [11.0, 3.3, 0], size: [5.4, 0.6, 1.8] },
      { type: 'glass', pos: [9.6, 4.7, 0], size: [0.7, 2.2, 1.4] },
      { type: 'glass', pos: [12.4, 4.7, 0], size: [0.7, 2.2, 1.4] },
      { type: 'wood', pos: [11.0, 6.05, 0], size: [4.0, 0.5, 1.6] },
      { type: 'coin', pos: [11.0, 6.8, 0], size: [1.0, 1.0, 1.0] }
    ],
    targets: [
      { pos: [11.0, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [11.0, 4.3, 0], radius: 0.7, isBoss: false }
    ]
  },
  {
    id: 2,
    name: 'Twin Glass Towers',
    zone: 'Crystal Ridge',
    icon: '💎',
    difficulty: 'Easy',
    description: 'Dual crystalline & timber towers connected by an explosive TNT core.',
    coinReward: 110,
    birds: ['red', 'speed', 'speed', 'heavy'],
    blocks: [
      { type: 'wood', pos: [7.8, 1.6, 0], size: [0.8, 3.2, 1.6] },
      { type: 'wood', pos: [10.6, 1.6, 0], size: [0.8, 3.2, 1.6] },
      { type: 'glass', pos: [9.2, 3.5, 0], size: [4.0, 0.6, 1.8] },
      { type: 'stone', pos: [13.4, 1.6, 0], size: [0.8, 3.2, 1.6] },
      { type: 'stone', pos: [16.2, 1.6, 0], size: [0.8, 3.2, 1.6] },
      { type: 'wood', pos: [14.8, 3.5, 0], size: [4.0, 0.6, 1.8] },
      { type: 'glass', pos: [13.8, 4.9, 0], size: [0.7, 2.2, 1.4] },
      { type: 'glass', pos: [15.8, 4.9, 0], size: [0.7, 2.2, 1.4] },
      { type: 'wood', pos: [14.8, 6.3, 0], size: [3.2, 0.6, 1.6] },
      { type: 'tnt', pos: [12.0, 0.65, 0], size: [1.3, 1.3, 1.3] },
      { type: 'coin', pos: [9.2, 4.35, 0], size: [1.1, 1.1, 1.1] }
    ],
    targets: [
      { pos: [9.2, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [14.8, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [14.8, 4.5, 0], radius: 0.7, isBoss: false }
    ]
  },
  {
    id: 3,
    name: 'Stone Bunker',
    zone: 'Granite Bastion',
    icon: '🛡️',
    difficulty: 'Medium',
    description: 'Heavy stone walls shield the garrison. Aim high or use the Heavy Orb to breach!',
    coinReward: 150,
    birds: ['speed', 'heavy', 'heavy', 'red'],
    blocks: [
      { type: 'stone', pos: [7.2, 1.4, 0], size: [1.0, 2.8, 2.0] },
      { type: 'coin', pos: [7.2, 3.35, 0], size: [1.1, 1.1, 1.1] },
      { type: 'stone', pos: [9.8, 1.8, 0], size: [0.9, 3.6, 2.0] },
      { type: 'stone', pos: [13.4, 1.8, 0], size: [0.9, 3.6, 2.0] },
      { type: 'stone', pos: [11.6, 3.95, 0], size: [4.8, 0.7, 2.0] },
      { type: 'wood', pos: [10.3, 5.4, 0], size: [0.8, 2.2, 1.8] },
      { type: 'wood', pos: [12.9, 5.4, 0], size: [0.8, 2.2, 1.8] },
      { type: 'wood', pos: [11.6, 6.8, 0], size: [4.0, 0.6, 1.8] },
      { type: 'wood', pos: [15.2, 1.5, 0], size: [0.8, 3.0, 1.6] },
      { type: 'wood', pos: [17.4, 1.5, 0], size: [0.8, 3.0, 1.6] },
      { type: 'glass', pos: [16.3, 3.3, 0], size: [3.4, 0.6, 1.8] }
    ],
    targets: [
      { pos: [11.6, 0.85, 0], radius: 0.85, isBoss: true },
      { pos: [11.6, 5.0, 0], radius: 0.7, isBoss: false },
      { pos: [16.3, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [16.3, 4.3, 0], radius: 0.7, isBoss: false }
    ]
  },
  {
    id: 4,
    name: 'TNT Pyramid',
    zone: 'Cinder Dunes',
    icon: '💥',
    difficulty: 'Medium',
    description: 'A stepped fortress pyramid packed with volatile TNT crates and golden treasure.',
    coinReward: 190,
    birds: ['speed', 'red', 'heavy', 'speed'],
    blocks: [
      { type: 'wood', pos: [7.8, 1.5, 0], size: [0.8, 3.0, 1.8] },
      { type: 'wood', pos: [11.0, 1.5, 0], size: [0.8, 3.0, 1.8] },
      { type: 'wood', pos: [14.2, 1.5, 0], size: [0.8, 3.0, 1.8] },
      { type: 'wood', pos: [17.4, 1.5, 0], size: [0.8, 3.0, 1.8] },
      { type: 'wood', pos: [9.4, 3.3, 0], size: [3.8, 0.6, 2.0] },
      { type: 'stone', pos: [12.6, 3.3, 0], size: [3.8, 0.6, 2.0] },
      { type: 'wood', pos: [15.8, 3.3, 0], size: [3.8, 0.6, 2.0] },
      { type: 'glass', pos: [9.6, 4.8, 0], size: [0.8, 2.4, 1.6] },
      { type: 'glass', pos: [12.6, 4.8, 0], size: [0.8, 2.4, 1.6] },
      { type: 'glass', pos: [15.6, 4.8, 0], size: [0.8, 2.4, 1.6] },
      { type: 'wood', pos: [11.1, 6.3, 0], size: [3.6, 0.6, 1.8] },
      { type: 'wood', pos: [14.1, 6.3, 0], size: [3.6, 0.6, 1.8] },
      { type: 'tnt', pos: [12.6, 0.7, 0], size: [1.4, 1.4, 1.4] },
      { type: 'coin', pos: [11.1, 7.15, 0], size: [1.1, 1.1, 1.1] },
      { type: 'coin', pos: [14.1, 7.15, 0], size: [1.1, 1.1, 1.1] }
    ],
    targets: [
      { pos: [9.4, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [15.8, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [11.1, 4.35, 0], radius: 0.75, isBoss: false },
      { pos: [14.1, 4.35, 0], radius: 0.8, isBoss: true }
    ]
  },
  {
    id: 5,
    name: 'Tri-Bastion Outpost',
    zone: 'Twin Horizon',
    icon: '🧭',
    difficulty: 'Hard',
    description: 'Three fortified bastions guarding a central TNT core and twin treasure vaults.',
    coinReward: 240,
    birds: ['speed', 'heavy', 'speed', 'heavy'],
    blocks: [
      // Front guard tower
      { type: 'wood', pos: [7.4, 1.4, 0], size: [0.8, 2.8, 1.8] },
      { type: 'wood', pos: [9.8, 1.4, 0], size: [0.8, 2.8, 1.8] },
      { type: 'glass', pos: [8.6, 3.1, 0], size: [3.4, 0.6, 1.8] },
      { type: 'coin', pos: [8.6, 3.95, 0], size: [1.1, 1.1, 1.1] },
      // Central stone citadel
      { type: 'stone', pos: [11.2, 1.6, 0], size: [0.9, 3.2, 1.8] },
      { type: 'stone', pos: [14.0, 1.6, 0], size: [0.9, 3.2, 1.8] },
      { type: 'stone', pos: [12.6, 3.55, 0], size: [3.8, 0.7, 2.0] },
      { type: 'tnt', pos: [12.6, 4.55, 0], size: [1.3, 1.3, 1.3] },
      // Rear guard tower
      { type: 'wood', pos: [15.2, 1.4, 0], size: [0.8, 2.8, 1.8] },
      { type: 'wood', pos: [17.4, 1.4, 0], size: [0.8, 2.8, 1.8] },
      { type: 'glass', pos: [16.3, 3.1, 0], size: [3.2, 0.6, 1.8] },
      { type: 'coin', pos: [16.3, 3.95, 0], size: [1.1, 1.1, 1.1] }
    ],
    targets: [
      { pos: [8.6, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [12.6, 0.85, 0], radius: 0.85, isBoss: true },
      { pos: [16.3, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [12.6, 5.9, 0], radius: 0.7, isBoss: false }
    ]
  },
  {
    id: 6,
    name: 'Sky Bridge Viaduct',
    zone: 'Aero Canyon',
    icon: '🌉',
    difficulty: 'Hard',
    description: 'An elevated double-span suspension bridge holding royal guards and volatile munitions.',
    coinReward: 290,
    birds: ['speed', 'heavy', 'speed', 'heavy', 'red'],
    blocks: [
      // Three tall stone bridge piers
      { type: 'stone', pos: [8.0, 2.0, 0], size: [1.0, 4.0, 2.0] },
      { type: 'stone', pos: [12.5, 2.0, 0], size: [1.0, 4.0, 2.0] },
      { type: 'stone', pos: [17.0, 2.0, 0], size: [1.0, 4.0, 2.0] },
      // Bridge decks
      { type: 'wood', pos: [10.25, 4.35, 0], size: [5.2, 0.7, 2.0] },
      { type: 'wood', pos: [14.75, 4.35, 0], size: [5.2, 0.7, 2.0] },
      // Upper bridge towers
      { type: 'glass', pos: [8.9, 5.9, 0], size: [0.8, 2.4, 1.6] },
      { type: 'glass', pos: [11.6, 5.9, 0], size: [0.8, 2.4, 1.6] },
      { type: 'wood', pos: [10.25, 7.4, 0], size: [3.8, 0.6, 1.8] },
      { type: 'glass', pos: [13.4, 5.9, 0], size: [0.8, 2.4, 1.6] },
      { type: 'glass', pos: [16.1, 5.9, 0], size: [0.8, 2.4, 1.6] },
      { type: 'wood', pos: [14.75, 7.4, 0], size: [3.8, 0.6, 1.8] },
      // TNT & Coins under and atop the bridge
      { type: 'tnt', pos: [10.25, 0.7, 0], size: [1.4, 1.4, 1.4] },
      { type: 'tnt', pos: [12.5, 5.35, 0], size: [1.3, 1.3, 1.3] },
      { type: 'coin', pos: [10.25, 8.25, 0], size: [1.1, 1.1, 1.1] },
      { type: 'coin', pos: [14.75, 8.25, 0], size: [1.1, 1.1, 1.1] }
    ],
    targets: [
      { pos: [14.75, 0.8, 0], radius: 0.8, isBoss: false },
      { pos: [10.25, 5.45, 0], radius: 0.75, isBoss: false },
      { pos: [14.75, 5.5, 0], radius: 0.85, isBoss: true },
      { pos: [12.5, 8.45, 0], radius: 0.7, isBoss: false }
    ]
  },
  {
    id: 7,
    name: 'Obsidian Vault',
    zone: 'Iron Peak',
    icon: '🏛️',
    difficulty: 'Expert',
    description: 'An armored monolith vault protecting a cache of golden crates. Use the TNT core to crack it open!',
    coinReward: 340,
    birds: ['heavy', 'speed', 'heavy', 'speed', 'red'],
    blocks: [
      // Outer armor columns
      { type: 'stone', pos: [7.6, 2.2, 0], size: [1.0, 4.4, 2.0] },
      { type: 'stone', pos: [11.0, 1.8, 0], size: [0.9, 3.6, 2.0] },
      { type: 'stone', pos: [14.6, 1.8, 0], size: [0.9, 3.6, 2.0] },
      { type: 'stone', pos: [17.6, 2.2, 0], size: [1.0, 4.4, 2.0] },
      // Vault ceiling
      { type: 'stone', pos: [12.8, 3.95, 0], size: [4.8, 0.7, 2.0] },
      // Upper spire
      { type: 'wood', pos: [11.4, 5.6, 0], size: [0.8, 2.6, 1.8] },
      { type: 'wood', pos: [14.2, 5.6, 0], size: [0.8, 2.6, 1.8] },
      { type: 'stone', pos: [12.8, 7.25, 0], size: [4.0, 0.7, 2.0] },
      // Explosives & Treasure
      { type: 'tnt', pos: [9.3, 0.7, 0], size: [1.4, 1.4, 1.4] },
      { type: 'tnt', pos: [16.1, 0.7, 0], size: [1.4, 1.4, 1.4] },
      { type: 'coin', pos: [12.8, 8.15, 0], size: [1.1, 1.1, 1.1] },
      { type: 'coin', pos: [7.6, 4.95, 0], size: [1.1, 1.1, 1.1] },
      { type: 'coin', pos: [17.6, 4.95, 0], size: [1.1, 1.1, 1.1] }
    ],
    targets: [
      { pos: [12.8, 0.9, 0], radius: 0.9, isBoss: true },
      { pos: [12.8, 5.05, 0], radius: 0.75, isBoss: false },
      { pos: [9.3, 2.1, 0], radius: 0.7, isBoss: false },
      { pos: [16.1, 2.1, 0], radius: 0.7, isBoss: false }
    ]
  },
  {
    id: 8,
    name: 'Dili Grand Citadel',
    zone: 'Crown Summit',
    icon: '👑',
    difficulty: 'Boss',
    description: 'The ultimate multi-tier fortress! Trigger chain-reaction TNT blasts to topple the Grand Citadel.',
    coinReward: 450,
    birds: ['speed', 'heavy', 'speed', 'heavy', 'red'],
    blocks: [
      // Front bastion
      { type: 'stone', pos: [7.4, 1.6, 0], size: [0.9, 3.2, 2.0] },
      { type: 'stone', pos: [10.0, 1.6, 0], size: [0.9, 3.2, 2.0] },
      { type: 'wood', pos: [8.7, 3.5, 0], size: [3.6, 0.6, 2.0] },
      { type: 'tnt', pos: [8.7, 4.45, 0], size: [1.3, 1.3, 1.3] },
      // Main grand keep
      { type: 'stone', pos: [12.0, 2.0, 0], size: [1.0, 4.0, 2.2] },
      { type: 'stone', pos: [16.0, 2.0, 0], size: [1.0, 4.0, 2.2] },
      { type: 'stone', pos: [14.0, 4.35, 0], size: [5.2, 0.7, 2.2] },
      { type: 'wood', pos: [12.6, 6.0, 0], size: [0.8, 2.6, 1.8] },
      { type: 'wood', pos: [15.4, 6.0, 0], size: [0.8, 2.6, 1.8] },
      { type: 'wood', pos: [14.0, 7.6, 0], size: [4.2, 0.6, 2.0] },
      { type: 'glass', pos: [13.0, 8.8, 0], size: [0.7, 1.8, 1.6] },
      { type: 'glass', pos: [15.0, 8.8, 0], size: [0.7, 1.8, 1.6] },
      { type: 'stone', pos: [14.0, 9.95, 0], size: [3.2, 0.5, 1.8] },
      { type: 'coin', pos: [14.0, 10.75, 0], size: [1.1, 1.1, 1.1] },
      // Rear explosive cache
      { type: 'tnt', pos: [17.4, 0.7, 0], size: [1.4, 1.4, 1.4] },
      { type: 'coin', pos: [17.4, 1.95, 0], size: [1.1, 1.1, 1.1] }
    ],
    targets: [
      { pos: [8.7, 0.75, 0], radius: 0.75, isBoss: false },
      { pos: [14.0, 0.95, 0], radius: 0.95, isBoss: true },
      { pos: [14.0, 5.5, 0], radius: 0.8, isBoss: false },
      { pos: [14.0, 8.65, 0], radius: 0.7, isBoss: false },
      { pos: [11.0, 0.75, 0], radius: 0.7, isBoss: false }
    ]
  }
];
