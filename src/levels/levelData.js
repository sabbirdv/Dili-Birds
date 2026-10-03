/**
 * 20 Sequentially Unlocked Levels with Rich, Multi-Tier Architectural Structures.
 * Built using calibrated modular physics blocks (columns, lintels, bricks, scaffolds,
 * TNT chambers, and coin vaults) with zero interpenetration for pure Angry Birds style stability.
 *
 * Ground surface is at y = 0.
 * Slingshot anchor is at x = -12.5, z = 0.
 * All gameplay physics bodies sit strictly on the z = 0 plane.
 *
 * Materials: 'wood' | 'stone' | 'glass' | 'metal' | 'tnt' | 'coin'
 *
 * Themes evolve across level groups:
 *  - Levels 1–5: Bright & clean (Emerald Valley)
 *  - Levels 6–10: Richer terrain & platforms (Amber Canyon)
 *  - Levels 11–15: New visual theme & metal girders (Celestial Twilight)
 *  - Levels 16–20: Dramatic & advanced volcanic forts (Crown Summit)
 */
export const LEVELS = [
  {
    "id": 1,
    "name": "Timber Watchtower",
    "zone": "Emerald Valley",
    "icon": "🏰",
    "difficulty": "Easy",
    "description": "A tall 4-story timber guard tower with a side sentry post and rooftop coin vault.",
    "coinReward": 85,
    "birds": [
      "red",
      "red",
      "red"
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          6.6,
          0.8,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          0.8,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.2,
          1.71,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.2,
          2.42,
          0
        ],
        "size": [
          0.32,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.8,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.2,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          1.91,
          0
        ],
        "size": [
          5.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.4,
          2.87,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.6,
          2.87,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          3.83,
          0
        ],
        "size": [
          4.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.7,
          4.79,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.3,
          4.79,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          5.75,
          0
        ],
        "size": [
          3.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.2,
          6.66,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.8,
          6.66,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          7.57,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          8.005,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11,
          7.98,
          0
        ],
        "size": [
          0.3,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13,
          7.98,
          0
        ],
        "size": [
          0.3,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.2,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          10.9,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.1,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          4.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Twin Crystal Spires",
    "zone": "Crystal Ridge",
    "icon": "💎",
    "difficulty": "Easy",
    "description": "Dual tall glass spires connected by an explosive TNT suspension walkway.",
    "coinReward": 125,
    "birds": [
      "red",
      "red",
      "red",
      "red"
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          7.4,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.4,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.4,
          1.91,
          0
        ],
        "size": [
          3.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.6,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.2,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          3.93,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.8,
          4.94,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9,
          4.94,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          5.95,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          8.4,
          6.385,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.6,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.4,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.5,
          1.91,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.8,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.2,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.5,
          3.93,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          4.94,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15,
          4.94,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.5,
          5.95,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.5,
          6.385,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          4.15,
          0
        ],
        "size": [
          4.4,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.5,
          4.56,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          10.2,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.7,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.4,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.4,
          2.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.5,
          2.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          5.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Granite Ramparts",
    "zone": "Granite Bastion",
    "icon": "🛡️",
    "difficulty": "Easy",
    "description": "Heavy granite foundation pillars supporting multi-story wooden decks and an observation arch.",
    "coinReward": 150,
    "birds": [
      "red",
      "speed",
      "speed",
      "red"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          8.5,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.5,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          2.01,
          0
        ],
        "size": [
          7.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.8,
          3.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          3.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.2,
          3.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          4.03,
          0
        ],
        "size": [
          6.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.5,
          4.99,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.5,
          4.99,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          5.95,
          0
        ],
        "size": [
          5.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.3,
          6.96,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.7,
          6.96,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          7.97,
          0
        ],
        "size": [
          3.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.5,
          8.405,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.2,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.2,
          1.2,
          0
        ],
        "size": [
          0.3,
          1.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          10.15,
          2.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12.85,
          2.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          4.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 4,
    "name": "Triple Colonnade",
    "zone": "Emerald Valley",
    "icon": "🏛️",
    "difficulty": "Medium",
    "description": "Three interconnected colonnades with cantilevered balconies and high-altitude skylights.",
    "coinReward": 180,
    "birds": [
      "red",
      "speed",
      "speed",
      "red"
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          7.6,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.4,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          1.91,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.8,
          2.87,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.2,
          2.87,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          3.83,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8,
          4.74,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9,
          4.74,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          5.65,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          8.5,
          6.085,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.8,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.2,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          1.91,
          0
        ],
        "size": [
          3.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.8,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.2,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          3.93,
          0
        ],
        "size": [
          3.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11,
          4.94,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13,
          4.94,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          5.95,
          0
        ],
        "size": [
          3.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.2,
          6.91,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.8,
          6.91,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          7.87,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.4,
          8.78,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          8.78,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          9.69,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.125,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.6,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.4,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          1.91,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          2.92,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          3.93,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15,
          4.89,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          4.89,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          5.85,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.5,
          6.285,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10,
          4.05,
          0
        ],
        "size": [
          2.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          10,
          4.46,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.5,
          2.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          4.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Valley Citadel",
    "zone": "Emerald Valley",
    "icon": "👑",
    "difficulty": "Medium",
    "description": "The mighty fortress of the Emerald Valley with twin outer ramparts and a fortified Boss throne room.",
    "coinReward": 250,
    "birds": [
      "red",
      "speed",
      "heavy",
      "heavy"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.6,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          1.91,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.2,
          2.82,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          2.82,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          3.73,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.8,
          4.14,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.4,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.2,
          1.91,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.6,
          2.82,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.8,
          2.82,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.2,
          3.73,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          16.2,
          4.14,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.6,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.4,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          2.02,
          0
        ],
        "size": [
          5.94,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.8,
          3.04,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          3.04,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.2,
          3.04,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          4.05,
          0
        ],
        "size": [
          5.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.2,
          5.16,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.8,
          5.16,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          6.28,
          0
        ],
        "size": [
          4.74,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.6,
          7.25,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.4,
          7.25,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          8.21,
          0
        ],
        "size": [
          3.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.2,
          9.12,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          9.12,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          10.03,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.465,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.8,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          16.2,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          10.8,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.2,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          4.74,
          0
        ],
        "radius": 0.58,
        "isBoss": true
      },
      {
        "pos": [
          12,
          6.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 6,
    "name": "Elevated Mesa Outpost",
    "zone": "Amber Canyon",
    "icon": "🏜️",
    "difficulty": "Medium",
    "description": "An elevated stone mesa foundation with a 4-story observation fortress and ground-level fuel depot.",
    "coinReward": 220,
    "birds": [
      "red",
      "speed",
      "heavy",
      "speed"
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          7.2,
          0.8,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9,
          0.8,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.1,
          1.71,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.1,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.5,
          1.2,
          0
        ],
        "size": [
          6.4,
          2.4,
          0.8
        ],
        "isStatic": true
      },
      {
        "type": "stone",
        "pos": [
          11,
          3.3,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.5,
          3.3,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          3.3,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          4.31,
          0
        ],
        "size": [
          6.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.6,
          5.32,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.4,
          5.32,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          6.33,
          0
        ],
        "size": [
          4.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.2,
          7.29,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          7.29,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.5,
          8.25,
          0
        ],
        "size": [
          3.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.6,
          9.16,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.4,
          9.16,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          10.07,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.5,
          10.505,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.1,
          2.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12.2,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.8,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.5,
          4.86,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.5,
          6.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 7,
    "name": "Sandstone Aqueduct",
    "zone": "Amber Canyon",
    "icon": "🌊",
    "difficulty": "Medium",
    "description": "A multi-arch sandstone aqueduct carrying heavy conduits and explosive TNT barrels.",
    "coinReward": 240,
    "birds": [
      "speed",
      "split",
      "split",
      "heavy"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.5,
          1.2,
          0
        ],
        "size": [
          0.36,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10,
          1.2,
          0
        ],
        "size": [
          0.36,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          1.2,
          0
        ],
        "size": [
          0.36,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15,
          1.2,
          0
        ],
        "size": [
          0.36,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.25,
          2.53,
          0
        ],
        "size": [
          8.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.2,
          3.66,
          0
        ],
        "size": [
          0.32,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10,
          3.66,
          0
        ],
        "size": [
          0.32,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.5,
          3.66,
          0
        ],
        "size": [
          0.32,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.3,
          3.66,
          0
        ],
        "size": [
          0.32,
          2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.25,
          2.96,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.25,
          4.78,
          0
        ],
        "size": [
          7.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.2,
          5.8,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.3,
          5.8,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.25,
          6.81,
          0
        ],
        "size": [
          3.24,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.25,
          7.245,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.75,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.25,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.75,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          9.1,
          3.1,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.4,
          3.1,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.25,
          5.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 8,
    "name": "Canyon Drawbridge",
    "zone": "Amber Canyon",
    "icon": "🌉",
    "difficulty": "Hard",
    "description": "Twin cliff bastions connected by a multi-tier counterweighted suspension bridge.",
    "coinReward": 270,
    "birds": [
      "red",
      "split",
      "speed",
      "heavy"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.1,
          2.32,
          0
        ],
        "size": [
          2.94,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.4,
          3.34,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.8,
          3.34,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.1,
          4.35,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.1,
          4.76,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.6,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.3,
          2.32,
          0
        ],
        "size": [
          3.74,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          3.44,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.4,
          3.44,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.3,
          4.55,
          0
        ],
        "size": [
          3.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.5,
          5.56,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.1,
          5.56,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.3,
          6.57,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.3,
          7.005,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          4.59,
          0
        ],
        "size": [
          5,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.5,
          5.6,
          0
        ],
        "size": [
          0.3,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          5.6,
          0
        ],
        "size": [
          0.3,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          6.61,
          0
        ],
        "size": [
          3,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.5,
          7.02,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.1,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.1,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.3,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.3,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.3,
          5.1,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          5.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 9,
    "name": "Double Bastion",
    "zone": "Amber Canyon",
    "icon": "🏯",
    "difficulty": "Hard",
    "description": "Two fortified sand-brick bastions with interlocking timber trusses and armored bunkers.",
    "coinReward": 300,
    "birds": [
      "split",
      "speed",
      "heavy",
      "heavy"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          8.2,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.2,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.7,
          2.11,
          0
        ],
        "size": [
          4.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          3.12,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11,
          3.12,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.7,
          4.13,
          0
        ],
        "size": [
          3.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.6,
          5.14,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.8,
          5.14,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.7,
          6.15,
          0
        ],
        "size": [
          3.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          9.7,
          6.585,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.6,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.1,
          2.12,
          0
        ],
        "size": [
          4.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          3.24,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.4,
          3.24,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.1,
          4.35,
          0
        ],
        "size": [
          3.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13,
          5.36,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.2,
          5.36,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.1,
          6.37,
          0
        ],
        "size": [
          3.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.3,
          7.38,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.9,
          7.38,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.1,
          8.39,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.1,
          8.825,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.9,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.9,
          2.33,
          0
        ],
        "size": [
          1.8,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.9,
          2.74,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.7,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          9.7,
          2.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          9.7,
          4.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.1,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.1,
          2.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.1,
          4.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.9,
          3.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 10,
    "name": "Canyon Stronghold",
    "zone": "Amber Canyon",
    "icon": "👑",
    "difficulty": "Hard",
    "description": "A massive 5-tier desert fortress guarding the canyon pass with armored stone vaults and Boss Commander.",
    "coinReward": 380,
    "birds": [
      "speed",
      "heavy",
      "split",
      "heavy",
      "speed"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          13.75,
          0.9,
          0
        ],
        "size": [
          7.8,
          1.8,
          0.8
        ],
        "isStatic": true
      },
      {
        "type": "wood",
        "pos": [
          7,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.6,
          0.9,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          1.91,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.8,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.4,
          2.8,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.75,
          2.8,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.1,
          2.8,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.75,
          3.92,
          0
        ],
        "size": [
          7.84,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.6,
          4.99,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.75,
          4.99,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.9,
          4.99,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.75,
          6.06,
          0
        ],
        "size": [
          7.44,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.2,
          7.28,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.3,
          7.28,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.75,
          8.51,
          0
        ],
        "size": [
          6.24,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12,
          9.54,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          9.54,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.75,
          10.55,
          0
        ],
        "size": [
          4.64,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          11.46,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.7,
          11.46,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.75,
          12.37,
          0
        ],
        "size": [
          3.04,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.75,
          12.805,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.8,
          2.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.5,
          2.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12.1,
          4.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.4,
          4.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.75,
          6.76,
          0
        ],
        "radius": 0.58,
        "isBoss": true
      },
      {
        "pos": [
          13.75,
          9.08,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 11,
    "name": "The Steel Foundry",
    "zone": "Celestial Twilight",
    "icon": "⚙️",
    "difficulty": "Hard",
    "description": "Industrial metal girders and glass observation decks engineered to absorb direct hits.",
    "coinReward": 340,
    "birds": [
      "fire",
      "heavy",
      "speed",
      "fire"
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          8.5,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.5,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          2.12,
          0
        ],
        "size": [
          7.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.7,
          3.19,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.5,
          3.19,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.3,
          3.19,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          4.25,
          0
        ],
        "size": [
          6.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.2,
          5.31,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          5.31,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          6.37,
          0
        ],
        "size": [
          5.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          10,
          4.66,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          13,
          4.66,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.8,
          7.38,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.2,
          7.38,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          8.39,
          0
        ],
        "size": [
          4.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.5,
          9.35,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          9.35,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          10.31,
          0
        ],
        "size": [
          3.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.5,
          10.745,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          2.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          4.8,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          8.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 12,
    "name": "Skyward Observatory",
    "zone": "Celestial Twilight",
    "icon": "🔭",
    "difficulty": "Hard",
    "description": "A 6-story astronomical spire with crystal telescope domes reaching high into the aurora.",
    "coinReward": 380,
    "birds": [
      "speed",
      "fire",
      "heavy",
      "split"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          9,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15,
          0.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          2.01,
          0
        ],
        "size": [
          7.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.2,
          3.07,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          3.07,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          3.07,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          4.13,
          0
        ],
        "size": [
          6.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.6,
          5.14,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.4,
          5.14,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          6.15,
          0
        ],
        "size": [
          5.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          7.16,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          7.16,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          8.17,
          0
        ],
        "size": [
          4.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.8,
          9.13,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.2,
          9.13,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          10.09,
          0
        ],
        "size": [
          3.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.3,
          11,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.7,
          11,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          11.91,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          12.345,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          4.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          6.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          8.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 13,
    "name": "Celestial Twin Cathedrals",
    "zone": "Celestial Twilight",
    "icon": "⛪",
    "difficulty": "Very Hard",
    "description": "Twin Gothic cathedrals connected by delicate high-altitude buttresses and suspended bell towers.",
    "coinReward": 420,
    "birds": [
      "split",
      "fire",
      "heavy",
      "speed",
      "heavy"
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          7.6,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.8,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.7,
          2.11,
          0
        ],
        "size": [
          3.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.8,
          3.17,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.6,
          3.17,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          4.23,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          5.24,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.4,
          5.24,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.7,
          6.25,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          7.21,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.2,
          7.21,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.7,
          8.17,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          8.7,
          8.605,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.7,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.9,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          2.11,
          0
        ],
        "size": [
          3.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.9,
          3.17,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.7,
          3.17,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          4.23,
          0
        ],
        "size": [
          2.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.1,
          5.24,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          5.24,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          6.25,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.3,
          7.21,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.3,
          7.21,
          0
        ],
        "size": [
          0.34,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          8.17,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.8,
          8.605,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.75,
          4.45,
          0
        ],
        "size": [
          4.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.75,
          4.86,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.75,
          6.47,
          0
        ],
        "size": [
          4.6,
          0.22,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.7,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.7,
          2.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.7,
          4.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.8,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.8,
          2.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.8,
          4.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.75,
          5.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.75,
          7.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 14,
    "name": "Railway Viaduct",
    "zone": "Celestial Twilight",
    "icon": "🚂",
    "difficulty": "Very Hard",
    "description": "An elevated railway bridge supported by steel/stone pillars with explosive ammunition cargo train cars.",
    "coinReward": 450,
    "birds": [
      "heavy",
      "fire",
      "speed",
      "split",
      "heavy"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.5,
          0.9,
          0
        ],
        "size": [
          0.44,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.5,
          2.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          0.9,
          0
        ],
        "size": [
          0.44,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          2.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          0.9,
          0
        ],
        "size": [
          0.44,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          2.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          3.74,
          0
        ],
        "size": [
          10.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.4,
          4.68,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.4,
          4.68,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          5.59,
          0
        ],
        "size": [
          3.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.4,
          4.18,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.4,
          4.68,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          4.68,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          5.59,
          0
        ],
        "size": [
          3.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.5,
          4.18,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.5,
          4.78,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          4.78,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.5,
          5.8,
          0
        ],
        "size": [
          3.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.5,
          6.245,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.4,
          6.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          6.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.5,
          4.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 15,
    "name": "Celestial Citadel",
    "zone": "Celestial Twilight",
    "icon": "👑",
    "difficulty": "Very Hard",
    "description": "Monolithic 6-story twilight citadel reinforced with steel armor plates and protecting the Supreme Archon.",
    "coinReward": 520,
    "birds": [
      "speed",
      "split",
      "fire",
      "heavy",
      "heavy"
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          8.4,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.6,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          2.33,
          0
        ],
        "size": [
          8.34,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.6,
          3.46,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          3.46,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.4,
          3.46,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          4.58,
          0
        ],
        "size": [
          7.94,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.2,
          5.8,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          5.8,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          7.03,
          0
        ],
        "size": [
          6.74,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.8,
          8.11,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.2,
          8.11,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          9.17,
          0
        ],
        "size": [
          5.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.6,
          10.18,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.4,
          10.18,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          11.19,
          0
        ],
        "size": [
          3.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.2,
          12.1,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          12.1,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          13.01,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          13.445,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10.2,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.8,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          10.3,
          2.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.7,
          2.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          5.28,
          0
        ],
        "radius": 0.58,
        "isBoss": true
      },
      {
        "pos": [
          12,
          7.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          9.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 16,
    "name": "The Iron Bastion",
    "zone": "Crown Summit",
    "icon": "🌋",
    "difficulty": "Extreme",
    "description": "An impenetrable volcanic iron fortress with triple-thick steel girders and concealed thermal vents.",
    "coinReward": 480,
    "birds": [
      "vortex",
      "heavy",
      "fire",
      "speed"
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          8,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          1,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          2.12,
          0
        ],
        "size": [
          8.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          3.24,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          3.24,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          3.24,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          4.36,
          0
        ],
        "size": [
          7.74,
          0.24,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.75,
          2.54,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          13.25,
          2.54,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.8,
          5.43,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.2,
          5.43,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          6.5,
          0
        ],
        "size": [
          6.54,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.5,
          7.57,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.5,
          7.57,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          8.64,
          0
        ],
        "size": [
          5.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.3,
          9.66,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.7,
          9.66,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          10.67,
          0
        ],
        "size": [
          3.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.5,
          11.105,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.75,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.25,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          2.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          4.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.5,
          7.06,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 17,
    "name": "Hanging Citadel",
    "zone": "Crown Summit",
    "icon": "⛓️",
    "difficulty": "Extreme",
    "description": "A multi-tier citadel suspended from elevated anchor pylons over a volcanic abyss.",
    "coinReward": 540,
    "birds": [
      "speed",
      "split",
      "vortex",
      "heavy",
      "fire"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.5,
          1.9,
          0
        ],
        "size": [
          0.5,
          3.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.5,
          5.9,
          0
        ],
        "size": [
          0.44,
          4.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          1.9,
          0
        ],
        "size": [
          0.5,
          3.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.5,
          5.9,
          0
        ],
        "size": [
          0.44,
          4.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          8.16,
          0
        ],
        "size": [
          10.2,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10,
          6.5,
          0
        ],
        "size": [
          0.32,
          3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14,
          6.5,
          0
        ],
        "size": [
          0.32,
          3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          4.89,
          0
        ],
        "size": [
          4.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12,
          6.18,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.8,
          3.59,
          0
        ],
        "size": [
          0.3,
          2.38,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.2,
          3.59,
          0
        ],
        "size": [
          0.3,
          2.38,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          2.29,
          0
        ],
        "size": [
          3,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.5,
          9.22,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.5,
          9.22,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          10.23,
          0
        ],
        "size": [
          4.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.665,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.5,
          8.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          16.5,
          8.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          8.76,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 18,
    "name": "The Colossus Pagoda",
    "zone": "Crown Summit",
    "icon": "🏯",
    "difficulty": "Extreme",
    "description": "A legendary 7-story skyscraper pagoda reaching height 14.5 units, demanding precision structural strikes.",
    "coinReward": 600,
    "birds": [
      "heavy",
      "vortex",
      "fire",
      "speed",
      "split"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          8.5,
          0.95,
          0
        ],
        "size": [
          0.5,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          0.95,
          0
        ],
        "size": [
          0.5,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          0.95,
          0
        ],
        "size": [
          0.5,
          1.9,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          2.02,
          0
        ],
        "size": [
          8.3,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.8,
          3.04,
          0
        ],
        "size": [
          0.5,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          3.04,
          0
        ],
        "size": [
          0.5,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          3.04,
          0
        ],
        "size": [
          0.5,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          4.06,
          0
        ],
        "size": [
          7.7,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          5.08,
          0
        ],
        "size": [
          0.45,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          5.08,
          0
        ],
        "size": [
          0.45,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          6.1,
          0
        ],
        "size": [
          6.85,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.7,
          7.12,
          0
        ],
        "size": [
          0.45,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.3,
          7.12,
          0
        ],
        "size": [
          0.45,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          8.14,
          0
        ],
        "size": [
          5.85,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.2,
          9.11,
          0
        ],
        "size": [
          0.4,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.8,
          9.11,
          0
        ],
        "size": [
          0.4,
          1.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          10.08,
          0
        ],
        "size": [
          4.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          11,
          0
        ],
        "size": [
          0.35,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.2,
          11,
          0
        ],
        "size": [
          0.35,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          11.92,
          0
        ],
        "size": [
          3.55,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.3,
          12.84,
          0
        ],
        "size": [
          0.3,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.7,
          12.84,
          0
        ],
        "size": [
          0.3,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          13.76,
          0
        ],
        "size": [
          2.5,
          0.24,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          14.205,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10.2,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13.8,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          2.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          4.62,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          6.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          8.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          12,
          10.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 19,
    "name": "Dragon's Spire",
    "zone": "Crown Summit",
    "icon": "🐉",
    "difficulty": "Master",
    "description": "Twin towering volcanic spires with magma vaults and high-altitude warheads reaching height 15 units.",
    "coinReward": 700,
    "birds": [
      "fire",
      "vortex",
      "heavy",
      "split",
      "heavy"
    ],
    "blocks": [
      {
        "type": "tnt",
        "pos": [
          10.8,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.8,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.8,
          0.3,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.4,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.3,
          2.32,
          0
        ],
        "size": [
          3.34,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.4,
          3.49,
          0
        ],
        "size": [
          0.34,
          2.1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.2,
          3.49,
          0
        ],
        "size": [
          0.34,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.3,
          4.66,
          0
        ],
        "size": [
          2.94,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.6,
          5.78,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9,
          5.78,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.3,
          6.89,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.8,
          7.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.8,
          7.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.3,
          9.01,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          10.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.6,
          10.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.3,
          11.03,
          0
        ],
        "size": [
          1.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.3,
          11.44,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          8.3,
          12.065,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.4,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.6,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          2.32,
          0
        ],
        "size": [
          3.34,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.6,
          3.49,
          0
        ],
        "size": [
          0.34,
          2.1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.4,
          3.49,
          0
        ],
        "size": [
          0.34,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          4.66,
          0
        ],
        "size": [
          2.94,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          5.78,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          5.78,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          6.89,
          0
        ],
        "size": [
          2.54,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15,
          7.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16,
          7.95,
          0
        ],
        "size": [
          0.34,
          1.9,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          9.01,
          0
        ],
        "size": [
          2.14,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          10.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.8,
          10.02,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          11.03,
          0
        ],
        "size": [
          1.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15.5,
          11.44,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.5,
          12.065,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.9,
          7.12,
          0
        ],
        "size": [
          5.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.9,
          8.42,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          11.8,
          1.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.3,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.3,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          8.3,
          5.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.5,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.5,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          15.5,
          5.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.9,
          7.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  },
  {
    "id": 20,
    "name": "Emperor's Final Fortress",
    "zone": "Crown Summit",
    "icon": "👑",
    "difficulty": "Master",
    "description": "The ultimate monumental citadel spanning 18 units across, 7 stories high, with armored vaults and the Supreme Boss.",
    "coinReward": 1000,
    "birds": [
      "vortex",
      "heavy",
      "fire",
      "split",
      "speed",
      "red"
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.6,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.6,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.6,
          2.32,
          0
        ],
        "size": [
          3.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          3.44,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.4,
          3.44,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.6,
          4.55,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7,
          5.56,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          5.56,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.6,
          6.57,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.6,
          6.98,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.2,
          8.08,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          8.08,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.6,
          8.99,
          0
        ],
        "size": [
          1.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          7.6,
          9.425,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.4,
          1.1,
          0
        ],
        "size": [
          0.34,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          2.32,
          0
        ],
        "size": [
          3.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.6,
          3.44,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.2,
          3.44,
          0
        ],
        "size": [
          0.34,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          18.4,
          4.55,
          0
        ],
        "size": [
          2.74,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          5.56,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19,
          5.56,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.4,
          6.57,
          0
        ],
        "size": [
          2.34,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          18.4,
          6.98,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18,
          8.08,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.8,
          8.08,
          0
        ],
        "size": [
          0.34,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          8.99,
          0
        ],
        "size": [
          1.94,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          18.4,
          9.425,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.8,
          1.1,
          0
        ],
        "size": [
          0.5,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          1.1,
          0
        ],
        "size": [
          0.5,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          1.1,
          0
        ],
        "size": [
          0.5,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          2.33,
          0
        ],
        "size": [
          7.7,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10,
          3.46,
          0
        ],
        "size": [
          0.5,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          3.46,
          0
        ],
        "size": [
          0.5,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          3.46,
          0
        ],
        "size": [
          0.5,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          4.58,
          0
        ],
        "size": [
          7.3,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.5,
          5.9,
          0
        ],
        "size": [
          0.44,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          5.9,
          0
        ],
        "size": [
          0.44,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          7.23,
          0
        ],
        "size": [
          6.24,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11,
          8.36,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          8.36,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          9.48,
          0
        ],
        "size": [
          5.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          7.665,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14,
          7.665,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.6,
          10.55,
          0
        ],
        "size": [
          0.35,
          1.9,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.4,
          10.55,
          0
        ],
        "size": [
          0.35,
          1.9,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13,
          11.61,
          0
        ],
        "size": [
          3.95,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.1,
          12.62,
          0
        ],
        "size": [
          0.3,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.9,
          12.62,
          0
        ],
        "size": [
          0.3,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          13.63,
          0
        ],
        "size": [
          2.9,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          13,
          14.04,
          0
        ],
        "size": [
          0.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.4,
          15.14,
          0
        ],
        "size": [
          0.25,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.6,
          15.14,
          0
        ],
        "size": [
          0.25,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          16.05,
          0
        ],
        "size": [
          2.25,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13,
          16.485,
          0
        ],
        "size": [
          0.65,
          0.65,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.6,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          7.6,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          18.4,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          18.4,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          11.4,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          14.6,
          0.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13,
          2.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13,
          5.26,
          0
        ],
        "radius": 0.58,
        "isBoss": true
      },
      {
        "pos": [
          13,
          7.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      },
      {
        "pos": [
          13,
          10.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false
      }
    ]
  }
];
