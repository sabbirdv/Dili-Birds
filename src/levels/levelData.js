/**
 * 20 Sequentially Unlocked Levels with Rich, Multi-Tier Architectural Structures
 * Elevated atop high terrain platforms (cliffs, mesas, monoliths, and volcanic spires).
 *
 * Hardened & Sturdy Architecture ("Mojbut"):
 * Built with reinforced columns, interlocking girders, shielded pillboxes, and protected chambers.
 *
 * Ground surface is at y = 0.
 * Slingshot anchor is at x = -12.5, y = 3.2, z = 0.
 * Structures sit on elevated platforms (y = 2.7m to 3.6m above ground).
 * When structures or supports are destroyed, blocks and targets tumble down
 * onto the lower ground, shattering on high-velocity impact.
 *
 * Materials: 'wood' | 'stone' | 'glass' | 'metal' | 'tnt' | 'coin'
 */
export const LEVELS = [
  {
    "id": 1,
    "name": "Timber Watchtower",
    "zone": "Emerald Valley",
    "icon": "🏰",
    "difficulty": "Easy",
    "description": "A fortified 4-story timber keep with shielded lower pillboxes and rooftop treasure vault.",
    "coinReward": 85,
    "birds": [
      "red",
      "red",
      "speed",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          10.5,
          1.4,
          0
        ],
        "size": [
          10.2,
          2.8,
          5
        ],
        "type": "cliff"
      }
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          6.8,
          3.6,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.2,
          3.6,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.2,
          3.6,
          0
        ],
        "size": [
          0.32,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.5,
          3.075,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.5,
          4.51,
          0
        ],
        "size": [
          2.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.1,
          5.17,
          0
        ],
        "size": [
          0.32,
          1.1,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.9,
          5.17,
          0
        ],
        "size": [
          0.32,
          1.1,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.5,
          5.82,
          0
        ],
        "size": [
          1.6,
          0.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.2,
          3.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.4,
          3.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.6,
          3.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.5,
          3.7,
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
          11.3,
          3.125,
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
          13.5,
          3.125,
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
          12.4,
          4.72,
          0
        ],
        "size": [
          5.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.8,
          5.64,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14,
          5.64,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.4,
          5.2,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.6,
          5.44,
          0
        ],
        "size": [
          0.3,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.2,
          5.44,
          0
        ],
        "size": [
          0.3,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.4,
          6.56,
          0
        ],
        "size": [
          4.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.4,
          7.38,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.4,
          7.38,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.4,
          8.19,
          0
        ],
        "size": [
          3.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.8,
          8.8,
          0
        ],
        "size": [
          0.32,
          1,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13,
          8.8,
          0
        ],
        "size": [
          0.32,
          1,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12.4,
          8.625,
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
          12.4,
          9.4,
          0
        ],
        "size": [
          2.2,
          0.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          9.8,
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
          13.3,
          9.8,
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
          7.5,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.5,
          5.06,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.3,
          3.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.5,
          3.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.4,
          7.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 2,
    "name": "Twin Crystal Spires",
    "zone": "Crystal Ridge",
    "icon": "💎",
    "difficulty": "Medium",
    "description": "Dual crystal towers perched over a bottomless chasm, connected by an overhead suspension span.",
    "coinReward": 95,
    "birds": [
      "red",
      "speed",
      "speed",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          8.4,
          1.35,
          0
        ],
        "size": [
          4.4,
          2.7,
          5
        ],
        "type": "cliff"
      },
      {
        "pos": [
          14.5,
          1.35,
          0
        ],
        "size": [
          4.4,
          2.7,
          5
        ],
        "type": "cliff"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          3.6,
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
          9.6,
          3.6,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.4,
          3.025,
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
          8.4,
          4.62,
          0
        ],
        "size": [
          3.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.6,
          5.49,
          0
        ],
        "size": [
          0.34,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.2,
          5.49,
          0
        ],
        "size": [
          0.34,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.4,
          6.35,
          0
        ],
        "size": [
          2.4,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.4,
          6.81,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.2,
          3.6,
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
          15.8,
          3.6,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14.5,
          3.05,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.5,
          4.62,
          0
        ],
        "size": [
          3.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.6,
          5.54,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.4,
          5.54,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.5,
          6.46,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14,
          7.18,
          0
        ],
        "size": [
          0.32,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15,
          7.18,
          0
        ],
        "size": [
          0.32,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.5,
          6.88,
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
          14.5,
          7.88,
          0
        ],
        "size": [
          1.8,
          0.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          4.86,
          0
        ],
        "size": [
          4.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          5.260000000000001,
          0
        ],
        "size": [
          0.65,
          0.55,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.4,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.4,
          5.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.5,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.5,
          5.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.5,
          5.8500000000000005,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 3,
    "name": "Granite Ramparts",
    "zone": "Granite Bastion",
    "icon": "🛡️",
    "difficulty": "Medium",
    "description": "A colossal fortress constructed from impenetrable granite columns and armored pillboxes.",
    "coinReward": 100,
    "birds": [
      "red",
      "heavy",
      "speed",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          11,
          1.5,
          0
        ],
        "size": [
          9.6,
          3,
          5
        ],
        "type": "stone"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.8,
          4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.2,
          4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7,
          4,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9,
          3.325,
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
          11.4,
          3.36,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.7,
          3.325,
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
          11.3,
          5.14,
          0
        ],
        "size": [
          7.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.8,
          6.18,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.3,
          6.18,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.8,
          6.18,
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
          10,
          5.605,
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
          5.605,
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
          11.3,
          7.21,
          0
        ],
        "size": [
          5.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.2,
          7.99,
          0
        ],
        "size": [
          0.36,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.4,
          7.99,
          0
        ],
        "size": [
          0.36,
          1.3,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.3,
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
        "type": "wood",
        "pos": [
          11.3,
          8.75,
          0
        ],
        "size": [
          3,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          7.6899999999999995,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.8,
          7.6899999999999995,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.7,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          10,
          6.37,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          6.37,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.3,
          8.43,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 4,
    "name": "Triple Colonnade",
    "zone": "Emerald Valley",
    "icon": "🏛️",
    "difficulty": "Hard",
    "description": "A massive multi-level stone colonnade garrison with heavily protected bunker apartments.",
    "coinReward": 110,
    "birds": [
      "red",
      "speed",
      "heavy",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.4,
          0
        ],
        "size": [
          3.8,
          2.8,
          5
        ],
        "type": "cliff"
      },
      {
        "pos": [
          14,
          1.4,
          0
        ],
        "size": [
          7.2,
          2.8,
          5
        ],
        "type": "cliff"
      }
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          7.4,
          3.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.6,
          3.7,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.8,
          3.7,
          0
        ],
        "size": [
          0.34,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.5,
          3.15,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          4.72,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          5.49,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          5.49,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          6.24,
          0
        ],
        "size": [
          2,
          0.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.2,
          3.8,
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
          13.8,
          3.8,
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
          16.4,
          3.8,
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
          12.5,
          3.125,
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
          15.1,
          3.125,
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
          13.8,
          4.93,
          0
        ],
        "size": [
          6,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.8,
          5.96,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.8,
          5.96,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.8,
          5.96,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          5.36,
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
          14.8,
          5.36,
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
          13.8,
          6.98,
          0
        ],
        "size": [
          4.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          7.8,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          7.8,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.8,
          7.425,
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
          13.8,
          8.61,
          0
        ],
        "size": [
          2.8,
          0.22,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          3.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          5.28,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          3.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.1,
          3.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.8,
          5.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.8,
          8.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 5,
    "name": "Valley Citadel",
    "zone": "Emerald Valley",
    "icon": "👑",
    "difficulty": "Boss",
    "description": "The fortified Emerald Citadel housing the Boss Pig inside an armored royal granite vault.",
    "coinReward": 160,
    "birds": [
      "red",
      "speed",
      "heavy",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          7.8,
          1.5,
          0
        ],
        "size": [
          3.8,
          3,
          5
        ],
        "type": "cliff"
      },
      {
        "pos": [
          13.8,
          1.5,
          0
        ],
        "size": [
          8.8,
          3,
          5
        ],
        "type": "cliff"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.8,
          3.9,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          3.9,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.2,
          3.9,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.8,
          3.35,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          4.92,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.4,
          4.1,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          4.1,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          4.1,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17,
          4.1,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.6,
          4.1,
          0
        ],
        "size": [
          0.4,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          3.325,
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
          13.7,
          3.36,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.9,
          3.325,
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
          13.7,
          5.34,
          0
        ],
        "size": [
          7.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.2,
          6.48,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.7,
          6.48,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.2,
          6.48,
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
          12.4,
          5.805,
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
          15,
          5.805,
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
          13.7,
          7.61,
          0
        ],
        "size": [
          5.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.2,
          8.64,
          0
        ],
        "size": [
          0.44,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.2,
          8.64,
          0
        ],
        "size": [
          0.44,
          1.8,
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
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.7,
          9.67,
          0
        ],
        "size": [
          3.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.8,
          10.4,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.6,
          10.4,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.7,
          10.15,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.7,
          11.11,
          0
        ],
        "size": [
          2.4,
          0.22,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.8,
          4.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.5,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.9,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.4,
          6.57,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15,
          6.57,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.7,
          8.32,
          0
        ],
        "radius": 0.58,
        "isBoss": true,
        "birdType": "boss"
      }
    ]
  },
  {
    "id": 6,
    "name": "Elevated Mesa Outpost",
    "zone": "Amber Canyon",
    "icon": "🏜️",
    "difficulty": "Medium",
    "description": "A heavily fortified medium tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 140,
    "birds": [
      "red",
      "speed",
      "heavy",
      "speed",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          11.8,
          1.7,
          0
        ],
        "size": [
          11,
          3.4,
          5
        ],
        "type": "mesa"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.95,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.48,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.12,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.65,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.96,
          4.4,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.16,
          3.725,
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
          11.8,
          3.76,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.44,
          3.725,
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
          11.8,
          5.54,
          0
        ],
        "size": [
          9.35,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.05,
          6.58,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.8,
          6.58,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.55,
          6.58,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.48,
          5.98,
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
          13.12,
          5.98,
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
          11.8,
          7.61,
          0
        ],
        "size": [
          7.48,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.04,
          8.64,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.56,
          8.64,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.16,
          8.64,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.8,
          9.66,
          0
        ],
        "size": [
          4.95,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.9,
          10.38,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.7,
          10.38,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.8,
          10.105,
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
          11.8,
          11.09,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          8.09,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.100000000000001,
          8.09,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.16,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.44,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.48,
          6.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.12,
          6.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.8,
          8.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 7,
    "name": "Sandstone Aqueduct",
    "zone": "Amber Canyon",
    "icon": "🏺",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 150,
    "birds": [
      "speed",
      "split",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          8.6,
          1.5,
          0
        ],
        "size": [
          4.4,
          3,
          5
        ],
        "type": "mesa"
      },
      {
        "pos": [
          13.8,
          1.5,
          0
        ],
        "size": [
          4.4,
          3,
          5
        ],
        "type": "mesa"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.28,
          3.9,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.92,
          3.9,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.752,
          3.9,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.6,
          3.35,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.6,
          4.92,
          0
        ],
        "size": [
          3.608,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.72,
          5.74,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.48,
          5.74,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.6,
          6.55,
          0
        ],
        "size": [
          2.8600000000000003,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.392,
          4,
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
          13.8,
          4,
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
          15.208,
          4,
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
          11.864,
          4,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.096,
          3.325,
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
          14.504,
          3.35,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          5.13,
          0
        ],
        "size": [
          3.74,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.832,
          6.16,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.768,
          6.16,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.8,
          5.585,
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
          13.8,
          7.18,
          0
        ],
        "size": [
          2.9920000000000004,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.14,
          7.9,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.46,
          7.9,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.8,
          7.575,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.8,
          8.61,
          0
        ],
        "size": [
          2.112,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.568000000000001,
          7.6,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.032,
          7.6,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.2,
          5.16,
          0
        ],
        "size": [
          4.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.2,
          5.51,
          0
        ],
        "size": [
          0.65,
          0.5,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.6,
          4.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.6,
          5.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.096,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.504,
          4.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.8,
          6.35,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.8,
          8.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.2,
          6.1000000000000005,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 8,
    "name": "Canyon Drawbridge",
    "zone": "Amber Canyon",
    "icon": "🌉",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 160,
    "birds": [
      "red",
      "split",
      "speed",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          8.1,
          1.6,
          0
        ],
        "size": [
          4.2,
          3.2,
          5
        ],
        "type": "mesa"
      },
      {
        "pos": [
          15.2,
          1.6,
          0
        ],
        "size": [
          4.6,
          3.2,
          5
        ],
        "type": "mesa"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.84,
          4.1,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.36,
          4.1,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.336,
          4.1,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.1,
          3.55,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.1,
          5.12,
          0
        ],
        "size": [
          3.444,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.26,
          5.94,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.94,
          5.94,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.1,
          6.75,
          0
        ],
        "size": [
          2.7300000000000004,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.728,
          4.2,
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
          15.2,
          4.2,
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
          16.672,
          4.2,
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
          13.176,
          4.2,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.464,
          3.525,
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
          15.936,
          3.55,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          5.33,
          0
        ],
        "size": [
          3.9099999999999997,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.188,
          6.36,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.212,
          6.36,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.2,
          5.785,
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
          15.2,
          7.38,
          0
        ],
        "size": [
          3.128,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.51,
          8.1,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.89,
          8.1,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.2,
          7.775,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.2,
          8.81,
          0
        ],
        "size": [
          2.2079999999999997,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.911999999999999,
          7.8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.488,
          7.8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.6,
          5.36,
          0
        ],
        "size": [
          4.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.6,
          5.71,
          0
        ],
        "size": [
          0.65,
          0.5,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.1,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.1,
          5.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.464,
          4.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.936,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.2,
          6.55,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.2,
          8.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.6,
          6.300000000000001,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 9,
    "name": "Double Bastion",
    "zone": "Amber Canyon",
    "icon": "🏰",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 170,
    "birds": [
      "split",
      "speed",
      "heavy",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          9.7,
          1.5,
          0
        ],
        "size": [
          4.8,
          3,
          5
        ],
        "type": "mesa"
      },
      {
        "pos": [
          14.1,
          1.5,
          0
        ],
        "size": [
          4.8,
          3,
          5
        ],
        "type": "mesa"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          8.26,
          3.9,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.14,
          3.9,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.684,
          3.9,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.7,
          3.35,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.7,
          4.92,
          0
        ],
        "size": [
          3.9359999999999995,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.74,
          5.74,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.66,
          5.74,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.7,
          6.55,
          0
        ],
        "size": [
          3.12,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.564,
          4,
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
          14.1,
          4,
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
          15.636,
          4,
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
          11.988,
          4,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.332,
          3.325,
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
          14.868,
          3.35,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.1,
          5.13,
          0
        ],
        "size": [
          4.08,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.044,
          6.16,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.156,
          6.16,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.1,
          5.585,
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
          14.1,
          7.18,
          0
        ],
        "size": [
          3.2640000000000002,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.38,
          7.9,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.82,
          7.9,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.1,
          7.575,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.1,
          8.61,
          0
        ],
        "size": [
          2.304,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.756,
          7.6,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.443999999999999,
          7.6,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.7,
          4.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.7,
          5.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.332,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.868,
          4.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.1,
          6.35,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.1,
          8.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 10,
    "name": "Canyon Stronghold",
    "zone": "Amber Canyon",
    "icon": "👑",
    "difficulty": "Boss",
    "description": "A heavily fortified boss tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 180,
    "birds": [
      "speed",
      "heavy",
      "split",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          12,
          1.8,
          0
        ],
        "size": [
          12.2,
          3.6,
          5
        ],
        "type": "mesa"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.73,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.536,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.464,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.27,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.632,
          4.6,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.072,
          3.925,
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
          12,
          3.96,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.928,
          3.925,
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
          12,
          5.74,
          0
        ],
        "size": [
          10.37,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.95,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.05,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.536,
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
        "type": "glass",
        "pos": [
          13.464,
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
        "type": "stone",
        "pos": [
          12,
          7.81,
          0
        ],
        "size": [
          8.296,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.048,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.952,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.072,
          8.84,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          9.86,
          0
        ],
        "size": [
          5.49,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.1,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.9,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.305,
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
          12,
          11.29,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.34,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.66,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.072,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.928,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.536,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.464,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12,
          8.52,
          0
        ],
        "radius": 0.58,
        "isBoss": true,
        "birdType": "boss"
      }
    ]
  },
  {
    "id": 11,
    "name": "The Steel Foundry",
    "zone": "Celestial Twilight",
    "icon": "⚙️",
    "difficulty": "Medium",
    "description": "A heavily fortified medium tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 190,
    "birds": [
      "fire",
      "heavy",
      "speed",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          11.5,
          1.6,
          0
        ],
        "size": [
          8.4,
          3.2,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          8.56,
          4.2,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.492,
          4.2,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.508,
          4.2,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.44,
          4.2,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.804,
          4.2,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.484,
          3.525,
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
          11.5,
          3.56,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.516,
          3.525,
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
          11.5,
          5.34,
          0
        ],
        "size": [
          7.14,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.4,
          6.38,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          6.38,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.6,
          6.38,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.492,
          5.78,
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
          12.508,
          5.78,
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
          11.5,
          7.41,
          0
        ],
        "size": [
          5.712000000000001,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.156,
          8.44,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.844,
          8.44,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.484,
          8.44,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          9.46,
          0
        ],
        "size": [
          3.7800000000000002,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.6,
          10.18,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.4,
          10.18,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.5,
          9.905,
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
          10.89,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.98,
          7.89,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.02,
          7.89,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.484,
          4.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.516,
          4.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.492,
          6.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.508,
          6.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.5,
          7.98,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 12,
    "name": "Skyward Observatory",
    "zone": "Celestial Twilight",
    "icon": "🔭",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 200,
    "birds": [
      "speed",
      "fire",
      "heavy",
      "split",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          12,
          1.8,
          0
        ],
        "size": [
          8.4,
          3.6,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "glass",
        "pos": [
          9.06,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.992,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.008,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.94,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.304,
          4.6,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.984,
          3.925,
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
          12,
          3.96,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.016,
          3.925,
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
          12,
          5.74,
          0
        ],
        "size": [
          7.14,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.9,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.1,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.992,
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
        "type": "glass",
        "pos": [
          13.008,
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
        "type": "glass",
        "pos": [
          12,
          7.81,
          0
        ],
        "size": [
          5.712000000000001,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.656,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.344,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.984,
          8.84,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          9.86,
          0
        ],
        "size": [
          3.7800000000000002,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.1,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.9,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.305,
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
          12,
          11.29,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.48,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.52,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.984,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.016,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.992,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.008,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12,
          8.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 13,
    "name": "Celestial Twin Cathedrals",
    "zone": "Celestial Twilight",
    "icon": "✨",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 210,
    "birds": [
      "split",
      "fire",
      "heavy",
      "speed",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          8.7,
          1.6,
          0
        ],
        "size": [
          4.4,
          3.2,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          14.8,
          1.6,
          0
        ],
        "size": [
          4.4,
          3.2,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.38,
          4.1,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.02,
          4.1,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.852,
          4.1,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.7,
          3.55,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          5.12,
          0
        ],
        "size": [
          3.608,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.82,
          5.94,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.58,
          5.94,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.7,
          6.75,
          0
        ],
        "size": [
          2.8600000000000003,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.392,
          4.2,
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
          14.8,
          4.2,
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
          16.208,
          4.2,
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
          12.864,
          4.2,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.096,
          3.525,
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
          15.504,
          3.55,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          5.33,
          0
        ],
        "size": [
          3.74,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.832,
          6.36,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.768,
          6.36,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.8,
          5.785,
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
          14.8,
          7.38,
          0
        ],
        "size": [
          2.9920000000000004,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.14,
          8.1,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.46,
          8.1,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          7.775,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          8.81,
          0
        ],
        "size": [
          2.112,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.568000000000001,
          7.8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.032,
          7.8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.75,
          5.36,
          0
        ],
        "size": [
          4.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.75,
          5.71,
          0
        ],
        "size": [
          0.65,
          0.5,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.7,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.7,
          5.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.096,
          4.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.504,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.8,
          6.55,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.8,
          8.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.75,
          6.300000000000001,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 14,
    "name": "Railway Viaduct",
    "zone": "Celestial Twilight",
    "icon": "🚂",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 220,
    "birds": [
      "heavy",
      "fire",
      "speed",
      "split",
      "heavy"
    ],
    "platforms": [
      {
        "pos": [
          8.8,
          1.6,
          0
        ],
        "size": [
          4.6,
          3.2,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          14.2,
          1.6,
          0
        ],
        "size": [
          4.6,
          3.2,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.42,
          4.1,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.18,
          4.1,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.868,
          4.1,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.8,
          3.55,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.8,
          5.12,
          0
        ],
        "size": [
          3.7719999999999994,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.88,
          5.94,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.72,
          5.94,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          6.75,
          0
        ],
        "size": [
          2.9899999999999998,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.728,
          4.2,
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
          14.2,
          4.2,
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
          15.672,
          4.2,
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
          12.176,
          4.2,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.464,
          3.525,
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
          14.936,
          3.55,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.2,
          5.33,
          0
        ],
        "size": [
          3.9099999999999997,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.188,
          6.36,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.212,
          6.36,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.2,
          5.785,
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
          14.2,
          7.38,
          0
        ],
        "size": [
          3.128,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.51,
          8.1,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.89,
          8.1,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.2,
          7.775,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.2,
          8.81,
          0
        ],
        "size": [
          2.2079999999999997,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.911999999999999,
          7.8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.488,
          7.8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          5.36,
          0
        ],
        "size": [
          4.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          5.71,
          0
        ],
        "size": [
          0.65,
          0.5,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.8,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.8,
          5.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.464,
          4.29,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.936,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.2,
          6.55,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.2,
          8.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.5,
          6.300000000000001,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 15,
    "name": "Celestial Citadel",
    "zone": "Celestial Twilight",
    "icon": "👑",
    "difficulty": "Boss",
    "description": "A heavily fortified boss tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 230,
    "birds": [
      "speed",
      "split",
      "fire",
      "heavy",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          12,
          1.8,
          0
        ],
        "size": [
          9.6,
          3.6,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          8.64,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.848,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.152,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.36,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.776,
          4.6,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.696,
          3.925,
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
          12,
          3.96,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.304,
          3.925,
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
          12,
          5.74,
          0
        ],
        "size": [
          8.16,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.6,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.4,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.848,
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
        "type": "glass",
        "pos": [
          13.152,
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
        "type": "stone",
        "pos": [
          12,
          7.81,
          0
        ],
        "size": [
          6.5280000000000005,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.464,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.536,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.696,
          8.84,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          9.86,
          0
        ],
        "size": [
          4.32,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.1,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.9,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.305,
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
          12,
          11.29,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.120000000000001,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.879999999999999,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.696,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.304,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.848,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.152,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12,
          8.52,
          0
        ],
        "radius": 0.58,
        "isBoss": true,
        "birdType": "boss"
      }
    ]
  },
  {
    "id": 16,
    "name": "The Iron Bastion",
    "zone": "Crown Summit",
    "icon": "🛡️",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 240,
    "birds": [
      "vortex",
      "heavy",
      "fire",
      "speed",
      "heavy"
    ],
    "platforms": [
      {
        "pos": [
          11.5,
          1.7,
          0
        ],
        "size": [
          9.2,
          3.4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          8.28,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.396,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.604,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.72,
          4.4,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.452,
          4.4,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.292,
          3.725,
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
          11.5,
          3.76,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.708,
          3.725,
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
          11.5,
          5.54,
          0
        ],
        "size": [
          7.819999999999999,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          6.58,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          6.58,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.8,
          6.58,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.396,
          5.98,
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
          12.604,
          5.98,
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
          11.5,
          7.61,
          0
        ],
        "size": [
          6.256,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.028,
          8.64,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.972,
          8.64,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.292,
          8.64,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.5,
          9.66,
          0
        ],
        "size": [
          4.14,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.6,
          10.38,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.4,
          10.38,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.5,
          10.105,
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
          11.09,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.74,
          8.09,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.26,
          8.09,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.292,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.708,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.396,
          6.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.604,
          6.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.5,
          8.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 17,
    "name": "Hanging Citadel",
    "zone": "Crown Summit",
    "icon": "🌋",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 250,
    "birds": [
      "speed",
      "split",
      "vortex",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          7.5,
          1.7,
          0
        ],
        "size": [
          3.8,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          15.5,
          1.7,
          0
        ],
        "size": [
          4.8,
          3.4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.36,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.64,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.904,
          4.3,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.5,
          3.75,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.5,
          5.32,
          0
        ],
        "size": [
          3.1159999999999997,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.74,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.26,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.5,
          6.95,
          0
        ],
        "size": [
          2.4699999999999998,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.964,
          4.4,
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
          15.5,
          4.4,
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
          17.036,
          4.4,
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
          13.388,
          4.4,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.732,
          3.725,
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
          16.268,
          3.75,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          5.53,
          0
        ],
        "size": [
          4.08,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.444,
          6.56,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.556,
          6.56,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.5,
          5.985,
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
          15.5,
          7.58,
          0
        ],
        "size": [
          3.2640000000000002,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.78,
          8.3,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.22,
          8.3,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          7.975,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          9.01,
          0
        ],
        "size": [
          2.304,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.156,
          8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.844,
          8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          5.5600000000000005,
          0
        ],
        "size": [
          5.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          5.91,
          0
        ],
        "size": [
          0.65,
          0.5,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.5,
          4.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.5,
          5.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.732,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.268,
          4.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          6.75,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          8.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.5,
          6.500000000000001,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 18,
    "name": "The Colossus Pagoda",
    "zone": "Crown Summit",
    "icon": "🏯",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 260,
    "birds": [
      "heavy",
      "vortex",
      "fire",
      "speed",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          12,
          1.8,
          0
        ],
        "size": [
          9.4,
          3.6,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          8.71,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.872,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.128,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.29,
          4.6,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.864,
          4.6,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.744,
          3.925,
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
          12,
          3.96,
          0
        ],
        "size": [
          0.72,
          0.72,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.256,
          3.925,
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
          12,
          5.74,
          0
        ],
        "size": [
          7.99,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.65,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.35,
          6.78,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.872,
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
        "type": "glass",
        "pos": [
          13.128,
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
        "type": "stone",
        "pos": [
          12,
          7.81,
          0
        ],
        "size": [
          6.392,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.496,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.504,
          8.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.744,
          8.84,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          9.86,
          0
        ],
        "size": [
          4.23,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.1,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.9,
          10.58,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12,
          10.305,
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
          12,
          11.29,
          0
        ],
        "size": [
          2.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.18,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.82,
          8.290000000000001,
          0
        ],
        "size": [
          0.4,
          0.7,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.744,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.256,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.872,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.128,
          6.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12,
          8.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 19,
    "name": "Dragon's Spire",
    "zone": "Crown Summit",
    "icon": "🐉",
    "difficulty": "Hard",
    "description": "A heavily fortified hard tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 270,
    "birds": [
      "fire",
      "vortex",
      "heavy",
      "split",
      "heavy"
    ],
    "platforms": [
      {
        "pos": [
          8.3,
          1.7,
          0
        ],
        "size": [
          4.4,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          14.8,
          1.7,
          0
        ],
        "size": [
          5.8,
          3.4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.98,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.62,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.452,
          4.3,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.3,
          3.75,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.3,
          5.32,
          0
        ],
        "size": [
          3.608,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.42,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.18,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.3,
          6.95,
          0
        ],
        "size": [
          2.8600000000000003,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.944,
          4.4,
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
          14.8,
          4.4,
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
          16.656,
          4.4,
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
          12.248,
          4.4,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.872,
          3.725,
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
          15.728,
          3.75,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          5.53,
          0
        ],
        "size": [
          4.93,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.524,
          6.56,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.076,
          6.56,
          0
        ],
        "size": [
          0.38,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          14.8,
          5.985,
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
          14.8,
          7.58,
          0
        ],
        "size": [
          3.944,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.93,
          8.3,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.67,
          8.3,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          7.975,
          0
        ],
        "size": [
          0.55,
          0.55,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          9.01,
          0
        ],
        "size": [
          2.784,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.176,
          8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.424,
          8,
          0
        ],
        "size": [
          0.35,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.3,
          4.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.3,
          5.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.872,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.728,
          4.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.8,
          6.75,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.8,
          8.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 20,
    "name": "Emperor's Final Fortress",
    "zone": "Crown Summit",
    "icon": "👑",
    "difficulty": "Grand Finale",
    "description": "A heavily fortified grand finale tier stronghold with reinforced multi-tier pillars and armored bunkers.",
    "coinReward": 280,
    "birds": [
      "vortex",
      "heavy",
      "fire",
      "split",
      "speed",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          7.6,
          1.7,
          0
        ],
        "size": [
          4.2,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          13,
          1.7,
          0
        ],
        "size": [
          6.4,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.4,
          1.7,
          0
        ],
        "size": [
          4.2,
          3.4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.4,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.8,
          4.3,
          0
        ],
        "size": [
          0.36,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.6,
          3.75,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.6,
          5.32,
          0
        ],
        "size": [
          3.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.8,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.6,
          6.95,
          0
        ],
        "size": [
          2.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11,
          4.5,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.3,
          4.5,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.7,
          4.5,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          4.5,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.65,
          3.725,
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
          13,
          3.775,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.35,
          3.725,
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
          13,
          5.74,
          0
        ],
        "size": [
          5.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          6.88,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          6.88,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.5,
          6.88,
          0
        ],
        "size": [
          0.42,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.25,
          6.205,
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
          13.75,
          6.205,
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
          13,
          8.01,
          0
        ],
        "size": [
          4.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.9,
          9.04,
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
          14.1,
          9.04,
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
          11.4,
          9.04,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          10.07,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.3,
          10.8,
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
          13.7,
          10.8,
          0
        ],
        "size": [
          0.32,
          1.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13,
          10.525,
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
          13,
          11.5,
          0
        ],
        "size": [
          2,
          0.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.2,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.6,
          4.3,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          18.4,
          3.75,
          0
        ],
        "size": [
          0.7,
          0.7,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          5.32,
          0
        ],
        "size": [
          3.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.6,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          19.2,
          6.14,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          18.4,
          6.95,
          0
        ],
        "size": [
          2.2,
          0.22,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.6,
          4.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.6,
          5.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.65,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.35,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.25,
          6.97,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.75,
          6.97,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13,
          8.72,
          0
        ],
        "radius": 0.58,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          18.4,
          4.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.4,
          5.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  }
];
