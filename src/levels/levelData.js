// Level Configurations for Dili Birds
// Each level defines platforms, blocks, targets, birds available, and environment properties.
// Materials: 'wood', 'stone', 'glass', 'metal', 'tnt', 'coin'
// Targets: 'blue' (Red Bird), 'pink' (Speed Bird), 'gold' (Bomb Bird), 'green' (Split Bird)
// Birds queue: 'red', 'speed', 'heavy', 'split', 'fire', 'vortex', 'lightning', 'chrono'

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
      "red",
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
      "red",
      "red",
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
      "speed",
      "red",
      "speed",
      "red",
      "speed"
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
      "speed",
      "red",
      "speed",
      "speed",
      "red"
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
      "heavy",
      "speed",
      "heavy",
      "red",
      "speed"
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
      "heavy",
      "speed",
      "heavy",
      "speed",
      "red"
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
      "split",
      "heavy",
      "speed",
      "split",
      "red"
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
      "split",
      "heavy",
      "speed",
      "split",
      "red"
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
      "heavy",
      "speed",
      "heavy",
      "split"
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
      "split",
      "heavy",
      "speed",
      "heavy",
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
      "split",
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
      "fire"
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
  },
  {
    "id": 21,
    "name": "Thunderfall Gate",
    "zone": "Thunder Peaks",
    "icon": "⚡",
    "difficulty": "Advanced",
    "description": "First gateway into the electrified mountains. High-voltage metal towers conduct lightning arcs straight through structural joints.",
    "coinReward": 320,
    "birds": [
      "lightning",
      "speed",
      "heavy",
      "fire",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          7.8,
          1.7,
          0
        ],
        "size": [
          5.2,
          3.4,
          5
        ],
        "type": "stone"
      },
      {
        "pos": [
          15,
          1.7,
          0
        ],
        "size": [
          5.6,
          3.4,
          5
        ],
        "type": "stone"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.2,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.8,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.4,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7,
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
          8.6,
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
          7.8,
          5.33,
          0
        ],
        "size": [
          4.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.6,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.8,
          5.81,
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
          7.8,
          7.08,
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
          7.8,
          7.7,
          0
        ],
        "size": [
          0.34,
          1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.4,
          5.33,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.4,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.6,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
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
        "type": "tnt",
        "pos": [
          15.8,
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
          15,
          5.54,
          0
        ],
        "size": [
          4.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.8,
          6.48,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          6.48,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15,
          6.03,
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
          15,
          6.83,
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
          15,
          7.4,
          0
        ],
        "size": [
          3.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.4,
          8.12,
          0
        ],
        "size": [
          0.36,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.6,
          8.12,
          0
        ],
        "size": [
          0.36,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15,
          8.83,
          0
        ],
        "size": [
          2.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15,
          9.29,
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
          15,
          6.48,
          0
        ],
        "size": [
          1.2,
          0.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.4,
          5.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.2,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15,
          7.96,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 22,
    "name": "Storm Pillar Bastion",
    "zone": "Thunder Peaks",
    "icon": "⚡",
    "difficulty": "Advanced",
    "description": "Triple fortified high-voltage colonnade defending the thunder peaks. Shatter the stone capitals to trigger cascading pillar collapse.",
    "coinReward": 330,
    "birds": [
      "lightning",
      "heavy",
      "split",
      "fire",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
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
          12.6,
          1.7,
          0
        ],
        "size": [
          5.4,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          1.7,
          0
        ],
        "size": [
          4.4,
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
          5.54,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.06,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          6.8,
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
          6.8,
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
        "type": "stone",
        "pos": [
          5.74,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.86,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.8,
          5.81,
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
          6.8,
          7.08,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.99,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.21,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.6,
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
          12.6,
          5.33,
          0
        ],
        "size": [
          4.59,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.19,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.01,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          5.81,
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
          12.6,
          7.08,
          0
        ],
        "size": [
          3.672,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.94,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.46,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          18.2,
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
          18.2,
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
        "type": "glass",
        "pos": [
          17.14,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          19.26,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.2,
          5.81,
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
          18.2,
          7.08,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.7,
          5.33,
          0
        ],
        "size": [
          4.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          5.33,
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
          12.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          18.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.3,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.6,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.6,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.2,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 23,
    "name": "Electric Gorge",
    "zone": "Thunder Peaks",
    "icon": "⚡",
    "difficulty": "Expert",
    "description": "Twin colossal mountain towers spanned by multi-tiered suspension spans over a chasm of lightning.",
    "coinReward": 350,
    "birds": [
      "lightning",
      "vortex",
      "heavy",
      "speed",
      "fire",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.7,
          0
        ],
        "size": [
          5.6,
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
          6.2,
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
          6.32,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.68,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
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
          8,
          5.33,
          0
        ],
        "size": [
          4.76,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.52,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.48,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          5.81,
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
          8,
          7.08,
          0
        ],
        "size": [
          3.808,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.61,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.39,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15.5,
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
          5.33,
          0
        ],
        "size": [
          5.27,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.81,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.19,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          5.81,
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
          15.5,
          7.08,
          0
        ],
        "size": [
          4.216,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.75,
          5.33,
          0
        ],
        "size": [
          6.3,
          0.24,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.5,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.5,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.75,
          5.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          7.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 24,
    "name": "Static Spire Outpost",
    "zone": "Thunder Peaks",
    "icon": "⚡",
    "difficulty": "Expert",
    "description": "Heavily braced high-altitude electrical transmission fortress with armored central battery bunkers.",
    "coinReward": 370,
    "birds": [
      "lightning",
      "fire",
      "heavy",
      "vortex",
      "speed",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.7,
          0
        ],
        "size": [
          5.6,
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
          6.2,
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
          6.32,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.68,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8,
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
          8,
          5.33,
          0
        ],
        "size": [
          4.76,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.52,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.48,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          5.81,
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
          8,
          7.08,
          0
        ],
        "size": [
          3.808,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          7.85,
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
          8.7,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.61,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.39,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15.5,
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
          5.33,
          0
        ],
        "size": [
          5.27,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.81,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.19,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          5.81,
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
          15.5,
          7.08,
          0
        ],
        "size": [
          4.216,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          7.85,
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
          16.2,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.75,
          5.33,
          0
        ],
        "size": [
          6.3,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      }
    ]
  },
  {
    "id": 25,
    "name": "Plasma Stronghold",
    "zone": "Thunder Peaks",
    "icon": "👑",
    "difficulty": "Expert Boss",
    "description": "Grand Boss Keep of Thunder Peaks! Multi-level fortress with central armored throne room guarded by triple perimeter watchtowers.",
    "coinReward": 420,
    "birds": [
      "lightning",
      "vortex",
      "heavy",
      "fire",
      "split",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
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
          12.6,
          1.7,
          0
        ],
        "size": [
          5.4,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          1.7,
          0
        ],
        "size": [
          4.4,
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
          5.54,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.06,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
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
          6.8,
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
        "type": "stone",
        "pos": [
          5.74,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.86,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.8,
          5.81,
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
          6.8,
          7.08,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.1,
          7.85,
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
          7.5,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.99,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.21,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.6,
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
          12.6,
          5.33,
          0
        ],
        "size": [
          4.59,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.19,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.01,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          5.81,
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
          12.6,
          7.08,
          0
        ],
        "size": [
          3.672,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.9,
          7.85,
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
          13.3,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.94,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.46,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
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
          18.2,
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
        "type": "glass",
        "pos": [
          17.14,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          19.26,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.2,
          5.81,
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
          18.2,
          7.08,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.5,
          7.85,
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
          18.9,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.7,
          5.33,
          0
        ],
        "size": [
          4.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          5.33,
          0
        ],
        "size": [
          4.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.3,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          13.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          6.8,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.2,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 26,
    "name": "Bunker of Thunder",
    "zone": "Storm Bastion",
    "icon": "🛡️",
    "difficulty": "Master",
    "description": "Reinforced subterranean and surface vault complex encased in heavy metal plating and interlocking stone blocks.",
    "coinReward": 440,
    "birds": [
      "lightning",
      "heavy",
      "vortex",
      "fire",
      "speed",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.7,
          0
        ],
        "size": [
          5.6,
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
          6.2,
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
          6.32,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.68,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8,
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
          8,
          5.33,
          0
        ],
        "size": [
          4.76,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.52,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.48,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          5.81,
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
          8,
          7.08,
          0
        ],
        "size": [
          3.808,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          7.85,
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
          8.7,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.61,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.39,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15.5,
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
          5.33,
          0
        ],
        "size": [
          5.27,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.81,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.19,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          5.81,
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
          15.5,
          7.08,
          0
        ],
        "size": [
          4.216,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          7.85,
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
          16.2,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.75,
          5.33,
          0
        ],
        "size": [
          6.3,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.75,
          7.08,
          0
        ],
        "size": [
          5.9,
          0.22,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.5,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          11.75,
          5.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 27,
    "name": "Obsidian Rampart",
    "zone": "Storm Bastion",
    "icon": "🛡️",
    "difficulty": "Master",
    "description": "Tiered darkstone curtain walls and high ramparts engineered with cantilevered defense platforms.",
    "coinReward": 460,
    "birds": [
      "lightning",
      "vortex",
      "heavy",
      "fire",
      "speed",
      "red",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
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
          12.6,
          1.7,
          0
        ],
        "size": [
          5.4,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          1.7,
          0
        ],
        "size": [
          4.4,
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
          5.54,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.06,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
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
          6.8,
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
        "type": "glass",
        "pos": [
          5.74,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.86,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.8,
          5.81,
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
          6.8,
          7.08,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.1,
          7.85,
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
          7.5,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.99,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.21,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.6,
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
          12.6,
          5.33,
          0
        ],
        "size": [
          4.59,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.19,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.01,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          5.81,
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
          12.6,
          7.08,
          0
        ],
        "size": [
          3.672,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.9,
          7.85,
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
          13.3,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.94,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.46,
          4.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
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
          18.2,
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
          17.14,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          19.26,
          6.21,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.2,
          5.81,
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
          18.2,
          7.08,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.5,
          7.85,
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
          18.9,
          7.85,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          8.61,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.7,
          5.33,
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
          9.7,
          7.08,
          0
        ],
        "size": [
          4.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          5.33,
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
          15.4,
          7.08,
          0
        ],
        "size": [
          4,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          18.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.3,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          6.8,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          7.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.2,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.2,
          6.51,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 28,
    "name": "Twin Storm Towers",
    "zone": "Storm Bastion",
    "icon": "🛡️",
    "difficulty": "Master",
    "description": "Dual four-story mega-towers interconnected by skybridges and cross-braced against hurricane-force gales.",
    "coinReward": 480,
    "birds": [
      "lightning",
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
          8,
          1.7,
          0
        ],
        "size": [
          5.6,
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
          6.2,
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
          6.32,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.68,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8,
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
          8,
          5.63,
          0
        ],
        "size": [
          4.76,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.52,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.48,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          6.11,
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
          8,
          7.38,
          0
        ],
        "size": [
          3.808,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          8.15,
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
          8.7,
          8.15,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          8.91,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.61,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.39,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15.5,
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
          5.63,
          0
        ],
        "size": [
          5.27,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.81,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.19,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          6.11,
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
          15.5,
          7.38,
          0
        ],
        "size": [
          4.216,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          8.15,
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
          16.2,
          8.15,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          8.91,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.1,
          9.52,
          0
        ],
        "size": [
          0.3,
          1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.9,
          9.52,
          0
        ],
        "size": [
          0.3,
          1,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.5,
          10.27,
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
          11.75,
          5.33,
          0
        ],
        "size": [
          6.3,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.75,
          7.08,
          0
        ],
        "size": [
          5.9,
          0.22,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8.5,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.5,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8,
          6.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8,
          7.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          6.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          7.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          11.75,
          5.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          8.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 29,
    "name": "Titan Barricade",
    "zone": "Storm Bastion",
    "icon": "🛡️",
    "difficulty": "Grand Master",
    "description": "An enormous unbroken defensive fortification wall spanning the entire mountain pass with layered blast bunkers.",
    "coinReward": 500,
    "birds": [
      "lightning",
      "heavy",
      "vortex",
      "fire",
      "split",
      "speed",
      "red"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
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
          12.6,
          1.7,
          0
        ],
        "size": [
          5.4,
          3.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          1.7,
          0
        ],
        "size": [
          4.4,
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
          5.54,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.06,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
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
          6.8,
          5.63,
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
          5.74,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.86,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.8,
          6.11,
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
          6.8,
          7.38,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.1,
          8.15,
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
          7.5,
          8.15,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          8.91,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.99,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.21,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.6,
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
          12.6,
          5.63,
          0
        ],
        "size": [
          4.59,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.19,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.01,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          6.11,
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
          12.6,
          7.38,
          0
        ],
        "size": [
          3.672,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.9,
          8.15,
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
          13.3,
          8.15,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          8.91,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.2,
          9.52,
          0
        ],
        "size": [
          0.3,
          1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          9.52,
          0
        ],
        "size": [
          0.3,
          1,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          12.6,
          10.27,
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
          16.94,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.46,
          4.45,
          0
        ],
        "size": [
          0.42,
          2.1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
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
          18.2,
          5.63,
          0
        ],
        "size": [
          3.74,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.14,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.26,
          6.51,
          0
        ],
        "size": [
          0.38,
          1.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.2,
          6.11,
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
          18.2,
          7.38,
          0
        ],
        "size": [
          2.992,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.5,
          8.15,
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
          18.9,
          8.15,
          0
        ],
        "size": [
          0.34,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          8.91,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.7,
          5.33,
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
          9.7,
          7.08,
          0
        ],
        "size": [
          4.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          5.33,
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
          15.4,
          7.08,
          0
        ],
        "size": [
          4,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.3,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.1,
          5.7,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          17.7,
          7.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.3,
          4.2,
          0
        ],
        "size": [
          0.45,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          6.8,
          7.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          6.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          7.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.2,
          4.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.2,
          6.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.7,
          5.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 30,
    "name": "Colossus of Sparks",
    "zone": "Storm Bastion",
    "icon": "⚡",
    "difficulty": "Grand Master Boss",
    "description": "A titanic spark-forged automaton straddling dual cliffs with an explosive heart, shoulder pods, and crowned boss helm.",
    "coinReward": 250,
    "birds": [
      "lightning",
      "vortex",
      "heavy",
      "fire",
      "speed",
      "heavy"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.2,
          0
        ],
        "size": [
          4.8,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          16.5,
          1.2,
          0
        ],
        "size": [
          4.8,
          2.4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          7.2,
          2.7,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.8,
          2.7,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          3.9,
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
          9.8,
          3.9,
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
          8.5,
          3.4,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          4.95,
          0
        ],
        "size": [
          3.4,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          2.7,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          2.7,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          3.9,
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
          17.8,
          3.9,
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
          16.5,
          3.4,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.5,
          4.95,
          0
        ],
        "size": [
          3.4,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          5.9,
          0
        ],
        "size": [
          0.5,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.2,
          5.7,
          0
        ],
        "size": [
          0.6,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          5.9,
          0
        ],
        "size": [
          0.5,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.8,
          5.7,
          0
        ],
        "size": [
          0.6,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          6.89,
          0
        ],
        "size": [
          11.4,
          0.38,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.2,
          8.08,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          8.08,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          8.08,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.35,
          7.38,
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
          13.65,
          7.38,
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
          12.5,
          8.13,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.6,
          7.88,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.4,
          7.88,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.6,
          8.79,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          8.79,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          9.24,
          0
        ],
        "size": [
          5.6,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.2,
          10.2,
          0
        ],
        "size": [
          0.44,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          10.2,
          0
        ],
        "size": [
          0.44,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          11.14,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          11.78,
          0
        ],
        "size": [
          0.34,
          1,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.5,
          11.58,
          0
        ],
        "size": [
          0.5,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          11.58,
          0
        ],
        "size": [
          0.5,
          0.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.5,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.35,
          8.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.65,
          8.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          7.6,
          9.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.4,
          9.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          10.08,
          0
        ],
        "radius": 0.68,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.5,
          12.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 31,
    "name": "Quantum Overlook",
    "zone": "Cyber Apex",
    "icon": "🔭",
    "difficulty": "Apex Master",
    "description": "A cantilevered glass observatory suspended over an abyss with a lower bunker guard outpost.",
    "coinReward": 260,
    "birds": [
      "speed",
      "heavy",
      "lightning",
      "split",
      "fire",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          7.2,
          1,
          0
        ],
        "size": [
          4.4,
          2,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          14.8,
          2.6,
          0
        ],
        "size": [
          6.8,
          5.2,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          5.6,
          2.8,
          0
        ],
        "size": [
          0.8,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.6,
          2.8,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          2.8,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.7,
          2.3,
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
          3.74,
          0
        ],
        "size": [
          3.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.4,
          4.48,
          0
        ],
        "size": [
          0.36,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8,
          4.48,
          0
        ],
        "size": [
          0.36,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          5.19,
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
          14.8,
          5.37,
          0
        ],
        "size": [
          6.6,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.2,
          6.44,
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
          14.8,
          6.44,
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
          17.4,
          6.44,
          0
        ],
        "size": [
          0.44,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          5.94,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.1,
          5.94,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          7.51,
          0
        ],
        "size": [
          7.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.8,
          8.48,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.4,
          8.48,
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
          11.6,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          8.58,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
          8.58,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          15.4,
          7.98,
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
          15.4,
          9.63,
          0
        ],
        "size": [
          4.2,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.6,
          10.18,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          10.18,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.4,
          10.7,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.7,
          3.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.2,
          4.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.5,
          6.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.1,
          6.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          10.8,
          9.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.4,
          8.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.4,
          10.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.4,
          11.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 32,
    "name": "Nebula Core Redoubt",
    "zone": "Cyber Apex",
    "icon": "🌌",
    "difficulty": "Apex Master",
    "description": "Three stepped island pylons protecting a multi-tier central energy redoubt with explosive glass batteries.",
    "coinReward": 270,
    "birds": [
      "split",
      "fire",
      "vortex",
      "heavy",
      "speed",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.8,
          0
        ],
        "size": [
          2.8,
          3.6,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          12.6,
          1.2,
          0
        ],
        "size": [
          5,
          2.4,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          18.2,
          2.2,
          0
        ],
        "size": [
          2.8,
          4.4,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6,
          4.5,
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
          7.6,
          4.5,
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
          5.52,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          6.8,
          6.34,
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
          6.8,
          7.14,
          0
        ],
        "size": [
          1.6,
          0.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.4,
          5.4,
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
          19,
          5.4,
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
          18.2,
          6.52,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          7.34,
          0
        ],
        "size": [
          0.34,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.2,
          8.14,
          0
        ],
        "size": [
          1.8,
          0.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          3.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.4,
          3.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          2.8,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.7,
          2.7,
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
          13.5,
          2.7,
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
          12.6,
          4.77,
          0
        ],
        "size": [
          4.6,
          0.34,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.2,
          5.84,
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
          14,
          5.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.6,
          5.44,
          0
        ],
        "size": [
          1,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          6.89,
          0
        ],
        "size": [
          3.8,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.8,
          7.84,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.4,
          7.84,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          8.76,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          9.28,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          7.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.2,
          4.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.2,
          8.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.7,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          13.5,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          6.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.6,
          7.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          10.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 33,
    "name": "Astral Vault",
    "zone": "Cyber Apex",
    "icon": "💎",
    "difficulty": "Apex Master",
    "description": "A heavily fortified brutalist treasury bank with three reinforced subterranean vaults and twin battle towers.",
    "coinReward": 280,
    "birds": [
      "heavy",
      "speed",
      "lightning",
      "fire",
      "split",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.5,
          0
        ],
        "size": [
          13,
          3,
          5
        ],
        "type": "stone"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          7.2,
          4.2,
          0
        ],
        "size": [
          0.52,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.7,
          4.2,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.3,
          4.2,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          4.2,
          0
        ],
        "size": [
          0.52,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.95,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          3.3,
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
          11.6,
          3.25,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.4,
          3.25,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.05,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          5.59,
          0
        ],
        "size": [
          11.8,
          0.38,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          6.78,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.2,
          6.78,
          0
        ],
        "size": [
          0.4,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.8,
          6.78,
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
          16.8,
          6.78,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.7,
          6.18,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.3,
          6.18,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          7.95,
          0
        ],
        "size": [
          10,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          8.92,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10,
          8.92,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.1,
          9.84,
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
          15,
          8.92,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
          8.92,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.9,
          9.84,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.95,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.05,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.7,
          7.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          6.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.3,
          7.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.1,
          8.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.9,
          8.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 34,
    "name": "Sky Empress Bastion",
    "zone": "Cyber Apex",
    "icon": "⛩️",
    "difficulty": "Imperial Apex",
    "description": "An elegant three-tiered imperial pagoda palace featuring cantilevered eaves, delicate paper walls, and flying buttresses.",
    "coinReward": 290,
    "birds": [
      "speed",
      "split",
      "vortex",
      "heavy",
      "fire",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          8.2,
          1.4,
          0
        ],
        "size": [
          5,
          2.8,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          15.5,
          2.2,
          0
        ],
        "size": [
          6.2,
          4.4,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          6.4,
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
        "type": "wood",
        "pos": [
          10,
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
        "type": "glass",
        "pos": [
          8.2,
          3.8,
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
          7.3,
          3.2,
          0
        ],
        "size": [
          0.6,
          0.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.1,
          3.2,
          0
        ],
        "size": [
          0.6,
          0.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.2,
          4.94,
          0
        ],
        "size": [
          4.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          5.38,
          0
        ],
        "size": [
          1.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          5.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          5.5,
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
          18,
          5.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14.25,
          4.7,
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
          4.65,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          6.76,
          0
        ],
        "size": [
          6.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.8,
          7.92,
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
          17.2,
          7.92,
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
          15.5,
          7.92,
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
          15.5,
          9.07,
          0
        ],
        "size": [
          5.2,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.5,
          10.02,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.5,
          10.02,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          10.95,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          11.48,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.3,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.1,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.2,
          6.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.25,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.75,
          4.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.65,
          7.36,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.35,
          7.36,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          9.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          12.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 35,
    "name": "Supreme Grand Apex",
    "zone": "Cyber Apex",
    "icon": "👑",
    "difficulty": "Apex Emperor Boss",
    "description": "The imperial citadel connecting twin defensive watchtowers across suspension bridges to the Emperor's sky throne.",
    "coinReward": 320,
    "birds": [
      "heavy",
      "fire",
      "lightning",
      "vortex",
      "speed",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.5,
          0
        ],
        "size": [
          3.8,
          3,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.8,
          2.4,
          0
        ],
        "size": [
          5.4,
          4.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.5,
          1.5,
          0
        ],
        "size": [
          3.8,
          3,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          5.6,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.6,
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
          8,
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
          6.8,
          5.73,
          0
        ],
        "size": [
          3.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6,
          6.66,
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
          7.6,
          6.66,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          7.57,
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
          6.8,
          8.28,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.3,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.7,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.3,
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
        "type": "metal",
        "pos": [
          19.7,
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
        "type": "metal",
        "pos": [
          18.5,
          5.73,
          0
        ],
        "size": [
          3.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.7,
          6.66,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.3,
          6.66,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.5,
          7.57,
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
          18.5,
          8.28,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.6,
          6,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          6,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.8,
          5.1,
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
          11.7,
          5.05,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.9,
          5.05,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.3,
          5.72,
          0
        ],
        "size": [
          3.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.3,
          5.72,
          0
        ],
        "size": [
          3.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          7.38,
          0
        ],
        "size": [
          5.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          8.66,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.6,
          8.66,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.8,
          8.06,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          9.92,
          0
        ],
        "size": [
          4.4,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          10.48,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          9.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.5,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.5,
          6.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.5,
          9.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.8,
          5.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.8,
          9.24,
          0
        ],
        "radius": 0.68,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.8,
          11.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 36,
    "name": "Chrono Horizon",
    "zone": "Chrono Void",
    "icon": "⏳",
    "difficulty": "Singularity Master",
    "description": "An immense hourglass clocktower balanced upon a fragile glass bottleneck holding a massive stone reservoir.",
    "coinReward": 330,
    "birds": [
      "speed",
      "heavy",
      "vortex",
      "fire",
      "split",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.4,
          0
        ],
        "size": [
          11,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.6,
          3.2,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          3.2,
          0
        ],
        "size": [
          0.8,
          0.8,
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
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.2,
          3.9,
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
          13.8,
          3.9,
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
          16.2,
          3.9,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          3.1,
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
          12.5,
          5.17,
          0
        ],
        "size": [
          9.4,
          0.34,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.2,
          6.24,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          6.24,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          7.29,
          0
        ],
        "size": [
          5.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.6,
          8.24,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.4,
          8.24,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          9.19,
          0
        ],
        "size": [
          4.8,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          10.24,
          0
        ],
        "size": [
          0.44,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11,
          10.24,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14,
          10.24,
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
          16.2,
          10.24,
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
          12.5,
          9.84,
          0
        ],
        "size": [
          1.4,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          11.31,
          0
        ],
        "size": [
          8.8,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          5.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          7.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.9,
          9.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.1,
          9.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          11.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 37,
    "name": "Temporal Rift Keep",
    "zone": "Chrono Void",
    "icon": "🌉",
    "difficulty": "Singularity Master",
    "description": "Dual sheer cliff castles linked by a vulnerable wooden suspension bridge hung over a bottomless chasm.",
    "coinReward": 340,
    "birds": [
      "split",
      "fire",
      "lightning",
      "heavy",
      "vortex",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          7.5,
          2,
          0
        ],
        "size": [
          4.6,
          4,
          5
        ],
        "type": "cliff"
      },
      {
        "pos": [
          17.5,
          2,
          0
        ],
        "size": [
          4.6,
          4,
          5
        ],
        "type": "cliff"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          5.6,
          4.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.6,
          5.1,
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
          9,
          5.1,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          7.8,
          4.3,
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
          7.8,
          6.35,
          0
        ],
        "size": [
          4,
          0.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.8,
          7.3,
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
          8.8,
          7.3,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.8,
          8.22,
          0
        ],
        "size": [
          3,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.4,
          4.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          5.1,
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
          18.4,
          5.1,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          17.2,
          4.25,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.2,
          6.35,
          0
        ],
        "size": [
          4,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          7.3,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          7.3,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.2,
          8.22,
          0
        ],
        "size": [
          3,
          0.24,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.5,
          4.13,
          0
        ],
        "size": [
          6.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.8,
          5.16,
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
          15.2,
          5.16,
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
          6.16,
          0
        ],
        "size": [
          6.2,
          0.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.8,
          5.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.8,
          6.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.8,
          8.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.2,
          4.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          17.2,
          6.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.2,
          8.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.2,
          4.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.8,
          4.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 38,
    "name": "Quantum Core Redoubt",
    "zone": "Chrono Void",
    "icon": "🛡️",
    "difficulty": "Singularity Master",
    "description": "A concentric subterranean bunker complex shielded by forward blast baffles and sliding blast doors.",
    "coinReward": 350,
    "birds": [
      "heavy",
      "speed",
      "vortex",
      "fire",
      "lightning",
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
          5.5,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          16.2,
          1.4,
          0
        ],
        "size": [
          6.5,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.5,
          3.9,
          0
        ],
        "size": [
          0.8,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          3.9,
          0
        ],
        "size": [
          0.4,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.5,
          3.9,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.2,
          3.1,
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
          8.5,
          5.16,
          0
        ],
        "size": [
          5.2,
          0.32,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          5.72,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.6,
          4,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          4,
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
          18.8,
          4,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14.9,
          3.1,
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
          16.2,
          5.38,
          0
        ],
        "size": [
          6,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.4,
          6.56,
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
          18,
          6.56,
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
          16.2,
          6.16,
          0
        ],
        "size": [
          1.2,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          7.71,
          0
        ],
        "size": [
          4.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.2,
          8.56,
          0
        ],
        "size": [
          0.38,
          1.4,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.2,
          8.56,
          0
        ],
        "size": [
          0.38,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          9.38,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.2,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          6.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.9,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.5,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.2,
          7.2,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.2,
          8.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 39,
    "name": "Dimensional Vault",
    "zone": "Chrono Void",
    "icon": "🏛️",
    "difficulty": "Singularity Master",
    "description": "A monumental five-tiered Mesopotamian Ziggurat featuring stepped ascending terraces and a summit high altar.",
    "coinReward": 360,
    "birds": [
      "speed",
      "split",
      "fire",
      "lightning",
      "heavy",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.2,
          0
        ],
        "size": [
          12.5,
          2.4,
          5
        ],
        "type": "stone"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          3.4,
          0
        ],
        "size": [
          0.48,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.8,
          3.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          3.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.2,
          3.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          3.4,
          0
        ],
        "size": [
          0.48,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          4.57,
          0
        ],
        "size": [
          11.6,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.4,
          5.64,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.1,
          5.64,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.9,
          5.64,
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
          16.6,
          5.64,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          5.04,
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
          12.5,
          6.7,
          0
        ],
        "size": [
          9.6,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.6,
          7.66,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          7.66,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          7.66,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          8.61,
          0
        ],
        "size": [
          7.2,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          9.46,
          0
        ],
        "size": [
          0.38,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          9.46,
          0
        ],
        "size": [
          0.38,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          10.29,
          0
        ],
        "size": [
          4.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          10.82,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.15,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.85,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.5,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.75,
          5.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.25,
          5.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.05,
          7.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.95,
          7.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          9.2,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          11.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 40,
    "name": "Void Airship Bastion",
    "zone": "Chrono Void",
    "icon": "🛸",
    "difficulty": "Void Emperor Boss",
    "description": "A colossal sky dreadnought moored across three launch pylons, guarded by the Void Commander upon the bridge.",
    "coinReward": 400,
    "birds": [
      "fire",
      "heavy",
      "vortex",
      "lightning",
      "speed",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          7,
          1.4,
          0
        ],
        "size": [
          3.4,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.5,
          1,
          0
        ],
        "size": [
          4.2,
          2,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18,
          1.4,
          0
        ],
        "size": [
          3.4,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7,
          3.1,
          0
        ],
        "size": [
          1,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7,
          4.4,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          3.6,
          0
        ],
        "size": [
          0.44,
          3.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          3.6,
          0
        ],
        "size": [
          0.44,
          3.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          2.3,
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
          18,
          3.1,
          0
        ],
        "size": [
          1,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          4.4,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          5.59,
          0
        ],
        "size": [
          13.4,
          0.38,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.5,
          6.38,
          0
        ],
        "size": [
          1.2,
          1.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.2,
          6.68,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.6,
          6.68,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.4,
          6.68,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.8,
          6.68,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          6.08,
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
          12.5,
          7.75,
          0
        ],
        "size": [
          10.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.2,
          8.92,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          8.92,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          8.92,
          0
        ],
        "size": [
          0.36,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          10.74,
          0
        ],
        "size": [
          4.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          11.48,
          0
        ],
        "size": [
          0.34,
          1.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7,
          5.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          3.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18,
          5.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.4,
          6.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          6.82,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.6,
          6.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          10.6,
          0
        ],
        "radius": 0.68,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.5,
          12.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 41,
    "name": "Phase Shift Colonnade",
    "zone": "Chrono Void",
    "icon": "🏛️",
    "difficulty": "Chrono Legend",
    "description": "A monumental classical Parthenon colonnade with six load-bearing stone pillars, architrave, and pediment.",
    "coinReward": 410,
    "birds": [
      "speed",
      "heavy",
      "lightning",
      "split",
      "vortex",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.5,
          0
        ],
        "size": [
          12,
          3,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          12.5,
          3.13,
          0
        ],
        "size": [
          11.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.5,
          4.46,
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
          9.5,
          4.46,
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
          11.5,
          4.46,
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
          13.5,
          4.46,
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
          4.46,
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
          17.5,
          4.46,
          0
        ],
        "size": [
          0.44,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          3.56,
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
          12.5,
          5.84,
          0
        ],
        "size": [
          11.6,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          6.82,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11,
          6.82,
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
          6.82,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          6.82,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          7.78,
          0
        ],
        "size": [
          9.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.2,
          8.34,
          0
        ],
        "size": [
          2.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          8.34,
          0
        ],
        "size": [
          2.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          8.64,
          0
        ],
        "size": [
          1.8,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          9.48,
          0
        ],
        "size": [
          4.6,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          3.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.5,
          3.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          4.3,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.5,
          3.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.5,
          3.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.75,
          6.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.25,
          6.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          9.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          10.06,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 42,
    "name": "Event Horizon Fortress",
    "zone": "Chrono Void",
    "icon": "⚖️",
    "difficulty": "Chrono Legend",
    "description": "An asymmetric kinetic balance fortress extending a counterweighted cantilever beam far out over empty air.",
    "coinReward": 420,
    "birds": [
      "split",
      "fire",
      "heavy",
      "vortex",
      "lightning",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.2,
          0
        ],
        "size": [
          4.4,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          15.5,
          2.4,
          0
        ],
        "size": [
          5.5,
          4.8,
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
          3.3,
          0
        ],
        "size": [
          0.8,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.8,
          3.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.6,
          3.3,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.7,
          2.7,
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
          8,
          4.34,
          0
        ],
        "size": [
          4,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          5.9,
          0
        ],
        "size": [
          0.52,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.2,
          5.9,
          0
        ],
        "size": [
          0.52,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          5.3,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.2,
          7.19,
          0
        ],
        "size": [
          8.8,
          0.38,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.5,
          7.98,
          0
        ],
        "size": [
          1.8,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.5,
          9.08,
          0
        ],
        "size": [
          1.6,
          1,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          10.5,
          8.18,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.2,
          8.18,
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
          11.35,
          9.1,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.7,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8,
          4.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          6.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.5,
          10.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.5,
          9.42,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.35,
          9.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      }
    ]
  },
  {
    "id": 43,
    "name": "Warp Lattice Citadel",
    "zone": "Chrono Void",
    "icon": "🌐",
    "difficulty": "Chrono Legend",
    "description": "Interlocking geodesic lattice framework towers linked by a fragile skybridge over open airspace.",
    "coinReward": 430,
    "birds": [
      "heavy",
      "speed",
      "fire",
      "lightning",
      "split",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          8.8,
          1.4,
          0
        ],
        "size": [
          5.2,
          2.8,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          16.2,
          1.4,
          0
        ],
        "size": [
          5.2,
          2.8,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          7,
          3.8,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.6,
          3.8,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.8,
          3.1,
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
          8.8,
          4.94,
          0
        ],
        "size": [
          4.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          7.6,
          5.98,
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
          10,
          5.98,
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
          8.8,
          7.01,
          0
        ],
        "size": [
          3.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.8,
          7.54,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.4,
          3.8,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          3.8,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          16.2,
          3.05,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          4.94,
          0
        ],
        "size": [
          4.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15,
          5.98,
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
          17.4,
          5.98,
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
          16.2,
          7.01,
          0
        ],
        "size": [
          3.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          7.54,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.5,
          7.02,
          0
        ],
        "size": [
          5.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          8.4,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.8,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.8,
          5.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.8,
          8.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.2,
          3.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.2,
          5.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.2,
          8.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          7.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 44,
    "name": "Singularity Array",
    "zone": "Chrono Void",
    "icon": "📡",
    "difficulty": "Chrono Legend",
    "description": "Three parabolic communications arrays mounted on staggered pylons, focusing deep energy signals.",
    "coinReward": 440,
    "birds": [
      "speed",
      "split",
      "vortex",
      "heavy",
      "fire",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          7.2,
          1.2,
          0
        ],
        "size": [
          3.4,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.5,
          2.2,
          0
        ],
        "size": [
          4,
          4.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          17.8,
          1.4,
          0
        ],
        "size": [
          3.4,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          2.7,
          0
        ],
        "size": [
          1,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          4,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          5.13,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          5.8,
          5.96,
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
          8.6,
          5.96,
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
          7.2,
          6.77,
          0
        ],
        "size": [
          3.6,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          5.6,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          5.6,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          4.7,
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
          12.5,
          6.95,
          0
        ],
        "size": [
          4,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          8.1,
          0
        ],
        "size": [
          0.38,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          9.22,
          0
        ],
        "size": [
          3,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          3.1,
          0
        ],
        "size": [
          1,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          4.4,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          5.53,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.4,
          6.36,
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
          19.2,
          6.36,
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
          17.8,
          7.17,
          0
        ],
        "size": [
          3.6,
          0.22,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.2,
          5.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.2,
          7.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.3,
          7.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.7,
          7.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          9.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.8,
          6.1,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.8,
          7.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 45,
    "name": "Chrono Sovereign Palace",
    "zone": "Chrono Void",
    "icon": "🏰",
    "difficulty": "Chrono Emperor Boss",
    "description": "A grand gothic sovereign cathedral flanked by twin belltowers with the Chrono Emperor seated in the rose-window throne.",
    "coinReward": 480,
    "birds": [
      "heavy",
      "fire",
      "lightning",
      "vortex",
      "speed",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.4,
          0
        ],
        "size": [
          3.8,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.6,
          1.8,
          0
        ],
        "size": [
          6,
          3.6,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          1.4,
          0
        ],
        "size": [
          3.8,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          5.4,
          3.9,
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
          8.2,
          3.9,
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
          6.8,
          5.13,
          0
        ],
        "size": [
          3.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          6.8,
          5.56,
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
          5.6,
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
          8,
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
        "type": "stone",
        "pos": [
          6.8,
          7.18,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
          3.9,
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
          19.6,
          3.9,
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
          18.2,
          5.13,
          0
        ],
        "size": [
          3.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17,
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
        "type": "metal",
        "pos": [
          19.4,
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
        "type": "stone",
        "pos": [
          18.2,
          7.18,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          4.8,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          4.8,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          11.6,
          3.85,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          13.6,
          3.85,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          6.18,
          0
        ],
        "size": [
          5.6,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.8,
          7.46,
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
          14.4,
          7.46,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          7.46,
          0
        ],
        "size": [
          0.38,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          9.39,
          0
        ],
        "size": [
          4.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          9.94,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          7.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.2,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.2,
          5.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.2,
          7.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.6,
          9.24,
          0
        ],
        "radius": 0.68,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.6,
          10.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 46,
    "name": "Tesseract Bulwark",
    "zone": "Chrono Void",
    "icon": "🧊",
    "difficulty": "Tesseract Overlord",
    "description": "A four-chamber hypercube bunker matrix built with interlocking blast bulkheads and reinforced corner pillars.",
    "coinReward": 490,
    "birds": [
      "split",
      "speed",
      "vortex",
      "fire",
      "heavy",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.4,
          0
        ],
        "size": [
          11.5,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          7.6,
          4,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          4,
          0
        ],
        "size": [
          0.52,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.4,
          4,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          10.05,
          3.1,
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
          14.95,
          3.05,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          5.39,
          0
        ],
        "size": [
          10.8,
          0.38,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          6.68,
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
          12.5,
          6.68,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17,
          6.68,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.75,
          5.98,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          7.95,
          0
        ],
        "size": [
          10,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          8.52,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          8.52,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          8.92,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          10.05,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.95,
          3.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.25,
          6.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.75,
          6.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.8,
          9.36,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.2,
          9.36,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          10.16,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 47,
    "name": "Void Titan Foundry",
    "zone": "Chrono Void",
    "icon": "🏭",
    "difficulty": "Tesseract Overlord",
    "description": "An industrial ore-smelting complex featuring a towering blast furnace chimney and a gantry crane over molten vats.",
    "coinReward": 500,
    "birds": [
      "speed",
      "heavy",
      "lightning",
      "split",
      "fire",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.6,
          0
        ],
        "size": [
          5.4,
          3.2,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          16,
          1.2,
          0
        ],
        "size": [
          6.2,
          2.4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.4,
          4.4,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.6,
          4.4,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.5,
          3.5,
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
          8.5,
          5.77,
          0
        ],
        "size": [
          4.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          7.04,
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
          9.8,
          7.04,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          8.28,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          9.12,
          0
        ],
        "size": [
          0.38,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.6,
          3.6,
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
          18.4,
          3.6,
          0
        ],
        "size": [
          0.44,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          16,
          2.7,
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
          16,
          4.96,
          0
        ],
        "size": [
          5.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.6,
          6.02,
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
          17.4,
          6.02,
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
          16,
          7.04,
          0
        ],
        "size": [
          3.6,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.5,
          6.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          10.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.6,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.4,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16,
          5.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16,
          7.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 48,
    "name": "Hypercube Rampart",
    "zone": "Chrono Void",
    "icon": "🧱",
    "difficulty": "Tesseract Overlord",
    "description": "A formidable curtain-wall fortress with an outer barbican gatehouse, murder holes, and high parapet battlements.",
    "coinReward": 510,
    "birds": [
      "heavy",
      "fire",
      "vortex",
      "lightning",
      "speed",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.2,
          0
        ],
        "size": [
          5,
          2.4,
          5
        ],
        "type": "stone"
      },
      {
        "pos": [
          15.5,
          2,
          0
        ],
        "size": [
          7.2,
          4,
          5
        ],
        "type": "stone"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          6.2,
          2.8,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7,
          3.5,
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
          9.8,
          3.5,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.4,
          2.7,
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
          8.4,
          4.75,
          0
        ],
        "size": [
          4.2,
          0.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          5.6,
          0
        ],
        "size": [
          0.38,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12,
          5.2,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.4,
          5.2,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.6,
          5.2,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19,
          5.2,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.5,
          4.25,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          6.58,
          0
        ],
        "size": [
          7.8,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.2,
          7.66,
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
          17.8,
          7.66,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          7.16,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.4,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.4,
          6.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.2,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.8,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          13.2,
          9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.8,
          9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          8,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 49,
    "name": "Chrono Zenith Bastion",
    "zone": "Chrono Void",
    "icon": "⚡",
    "difficulty": "Tesseract Overlord",
    "description": "A needle sky-citadel flanked by sheer crags with alternating cantilevered decks extending out into open airspace.",
    "coinReward": 520,
    "birds": [
      "speed",
      "split",
      "lightning",
      "heavy",
      "fire",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          7.2,
          1.4,
          0
        ],
        "size": [
          3.2,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.8,
          1.2,
          0
        ],
        "size": [
          4.4,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          2.4,
          0
        ],
        "size": [
          3.6,
          4.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "wood",
        "pos": [
          7.2,
          3.8,
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
          7.2,
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
        "type": "metal",
        "pos": [
          18.2,
          5.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          7.13,
          0
        ],
        "size": [
          2.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.4,
          3.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          3.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.8,
          2.7,
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
          12.8,
          4.75,
          0
        ],
        "size": [
          4,
          0.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.2,
          5.03,
          0
        ],
        "size": [
          3.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          5.9,
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
          13.6,
          5.9,
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
          12.8,
          7.04,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.4,
          7.31,
          0
        ],
        "size": [
          3.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          8.08,
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
          12.8,
          9.1,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.2,
          5.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.2,
          7.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.8,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.2,
          5.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.8,
          5.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.4,
          7.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          9.42,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.8,
          9.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 50,
    "name": "Temporal Singularity Apex",
    "zone": "Chrono Void",
    "icon": "⏳",
    "difficulty": "Chrono Overlord Boss",
    "description": "The colossal singularity apex pyramid where the Chrono Overlord reigns over time and space upon his crowned throne.",
    "coinReward": 600,
    "birds": [
      "heavy",
      "chrono",
      "vortex",
      "lightning",
      "fire",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.4,
          0
        ],
        "size": [
          4,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.8,
          2.2,
          0
        ],
        "size": [
          6.2,
          4.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.5,
          1.4,
          0
        ],
        "size": [
          4,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          5.6,
          4,
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
          8,
          4,
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
          6.8,
          5.33,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          5.96,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.3,
          4,
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
          19.7,
          4,
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
          18.5,
          5.33,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.5,
          5.96,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          5.6,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          5.6,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          5.6,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.6,
          4.7,
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
          14,
          4.7,
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
          12.8,
          6.99,
          0
        ],
        "size": [
          6,
          0.38,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          8.28,
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
          14.6,
          8.28,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          7.88,
          0
        ],
        "size": [
          1.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          9.55,
          0
        ],
        "size": [
          4.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.6,
          10.72,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14,
          10.72,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          11.87,
          0
        ],
        "size": [
          3.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          12.42,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.5,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.5,
          6.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.6,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          9.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.8,
          10.44,
          0
        ],
        "radius": 0.72,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.8,
          13.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 51,
    "name": "Solar Core Genesis",
    "zone": "Solar Foundry",
    "icon": "☀️",
    "difficulty": "Galactic Master",
    "description": "A tokamak magnetic fusion reactor shielded by heavy metal containment walls with dual explosive plasma cores.",
    "coinReward": 620,
    "birds": [
      "speed",
      "chrono",
      "heavy",
      "split",
      "fire",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.4,
          0
        ],
        "size": [
          5.4,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          16,
          1.8,
          0
        ],
        "size": [
          6.4,
          3.6,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.2,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.8,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.2,
          4.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.8,
          4.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8,
          3.1,
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
          8,
          5.75,
          0
        ],
        "size": [
          4.4,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          8,
          6.7,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          7.61,
          0
        ],
        "size": [
          2.4,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.4,
          4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.6,
          4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.4,
          5.6,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.6,
          5.6,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          4.8,
          0
        ],
        "size": [
          0.44,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14.7,
          3.9,
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
          17.3,
          3.9,
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
          16,
          6.98,
          0
        ],
        "size": [
          6.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14,
          8.16,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          8.16,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16,
          7.86,
          0
        ],
        "size": [
          1.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          9.32,
          0
        ],
        "size": [
          4.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.2,
          10.28,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
          10.28,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          11.2,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8,
          7.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.7,
          4.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.3,
          4.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16,
          9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16,
          9.92,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16,
          11.76,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 52,
    "name": "Prometheus Forge",
    "zone": "Solar Foundry",
    "icon": "🔨",
    "difficulty": "Galactic Master",
    "description": "A colossal blacksmith anvil with a massive suspended drop-hammer held by fragile glass trigger pins.",
    "coinReward": 630,
    "birds": [
      "split",
      "fire",
      "chrono",
      "heavy",
      "speed",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          7.2,
          1.8,
          0
        ],
        "size": [
          3.6,
          3.6,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.5,
          1.2,
          0
        ],
        "size": [
          5,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          17.8,
          2,
          0
        ],
        "size": [
          3.6,
          4,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          3.9,
          0
        ],
        "size": [
          1,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          5.3,
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
          7.2,
          6.52,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          4.3,
          0
        ],
        "size": [
          1,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          5.7,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          6.92,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          3.3,
          0
        ],
        "size": [
          1.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.2,
          3.3,
          0
        ],
        "size": [
          1.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          2.7,
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
          12.5,
          4.39,
          0
        ],
        "size": [
          5,
          0.38,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.2,
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
        "type": "glass",
        "pos": [
          13.8,
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
        "type": "metal",
        "pos": [
          12.5,
          7.44,
          0
        ],
        "size": [
          4.4,
          0.36,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          8.42,
          0
        ],
        "size": [
          1.8,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          10.23,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.2,
          6.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.8,
          7.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.2,
          5.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.8,
          5.02,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          9.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 53,
    "name": "Helios Radiant Keep",
    "zone": "Solar Foundry",
    "icon": "🌅",
    "difficulty": "Galactic Master",
    "description": "A radiating sunburst fortress with four cantilevered ray buttresses flanking a sacred solar crystal altar.",
    "coinReward": 640,
    "birds": [
      "heavy",
      "speed",
      "chrono",
      "lightning",
      "fire",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.5,
          0
        ],
        "size": [
          12.5,
          3,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          4.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.5,
          4.2,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.5,
          4.2,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          4.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.85,
          3.3,
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
          12.5,
          3.25,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          16.15,
          3.3,
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
          12.5,
          5.59,
          0
        ],
        "size": [
          11.6,
          0.38,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          5.91,
          0
        ],
        "size": [
          3.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.2,
          5.91,
          0
        ],
        "size": [
          3.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          6.88,
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
          14.2,
          6.88,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.5,
          6.48,
          0
        ],
        "size": [
          1.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          8.14,
          0
        ],
        "size": [
          5.2,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.6,
          9.2,
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
          13.4,
          9.2,
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
          12.5,
          10.23,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.85,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          3.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.15,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          6.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.2,
          6.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          7.62,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          8.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          10.8,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 54,
    "name": "Supernova Rampart",
    "zone": "Solar Foundry",
    "icon": "🛡️",
    "difficulty": "Galactic Master",
    "description": "A tiered coastal breakwater fortress featuring heavy kinetic energy-absorbing baffles and upper artillery nests.",
    "coinReward": 660,
    "birds": [
      "speed",
      "split",
      "chrono",
      "vortex",
      "heavy",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.2,
          0
        ],
        "size": [
          5.5,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          15.5,
          2.4,
          0
        ],
        "size": [
          6.5,
          4.8,
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
          3.3,
          0
        ],
        "size": [
          1.2,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          3.3,
          0
        ],
        "size": [
          1.2,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          3.5,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.2,
          2.7,
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
          8.5,
          4.76,
          0
        ],
        "size": [
          5,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          5.2,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          5.2,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13,
          6.7,
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
          15.5,
          6,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          6.7,
          0
        ],
        "size": [
          0.5,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14.25,
          5.1,
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
          5.05,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          7.99,
          0
        ],
        "size": [
          6.2,
          0.38,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.8,
          9.18,
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
          17.2,
          9.18,
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
          15.5,
          10.33,
          0
        ],
        "size": [
          4.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          10.88,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.2,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          5.36,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.25,
          5.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.75,
          5.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          8.62,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          11.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 55,
    "name": "Solaris Grand Colosseum",
    "zone": "Solar Foundry",
    "icon": "🏟️",
    "difficulty": "Solar Sovereign Boss",
    "description": "A monumental gladiatorial arena with tiered spectator galleries and the Solaris Sovereign presiding from the royal box.",
    "coinReward": 720,
    "birds": [
      "heavy",
      "fire",
      "chrono",
      "vortex",
      "lightning",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.6,
          0
        ],
        "size": [
          4.2,
          3.2,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.6,
          1,
          0
        ],
        "size": [
          5.4,
          2,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.4,
          1.6,
          0
        ],
        "size": [
          4.2,
          3.2,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          5.6,
          3.5,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          3.5,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.6,
          4.9,
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
          8,
          4.9,
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
          6.8,
          6.14,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.8,
          7.08,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          8,
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
          17.2,
          3.5,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.6,
          3.5,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.2,
          4.9,
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
          19.6,
          4.9,
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
          18.4,
          6.14,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          18.4,
          7.08,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          8,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          3.3,
          0
        ],
        "size": [
          0.5,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          3.3,
          0
        ],
        "size": [
          0.5,
          2.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.6,
          2.3,
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
          12.6,
          4.78,
          0
        ],
        "size": [
          5.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          6.06,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          6.06,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          7.31,
          0
        ],
        "size": [
          4.4,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          7.86,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          8.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.4,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.4,
          8.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          11.5,
          2.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.7,
          2.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          5.66,
          0
        ],
        "radius": 0.7,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.6,
          8.7,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 56,
    "name": "Plasma Reactor Spire",
    "zone": "Solar Foundry",
    "icon": "⚡",
    "difficulty": "Galactic Overlord",
    "description": "Hyperbolic cooling towers linked by a volatile glass plasma pipeline spanning across open airspace.",
    "coinReward": 740,
    "birds": [
      "split",
      "chrono",
      "heavy",
      "speed",
      "fire",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.5,
          0
        ],
        "size": [
          5.2,
          3,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          16.2,
          1.5,
          0
        ],
        "size": [
          5.2,
          3,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.6,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.6,
          4.7,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          4.7,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.5,
          3.3,
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
          8.5,
          5.95,
          0
        ],
        "size": [
          4.4,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          7,
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
          9.8,
          7,
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
          8.5,
          8.02,
          0
        ],
        "size": [
          3.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.3,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.1,
          3.3,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.3,
          4.7,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.1,
          4.7,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          16.2,
          3.25,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          5.95,
          0
        ],
        "size": [
          4.4,
          0.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.9,
          7,
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
          17.5,
          7,
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
          16.2,
          8.02,
          0
        ],
        "size": [
          3.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.35,
          5.94,
          0
        ],
        "size": [
          5,
          0.28,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.35,
          6.38,
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
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          6.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.2,
          3.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.2,
          6.54,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.35,
          7.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 57,
    "name": "Fusion Blast Furnace",
    "zone": "Solar Foundry",
    "icon": "🔥",
    "difficulty": "Galactic Overlord",
    "description": "A triple-chamber underground blast vault flanked by exhaust stacks and buried beneath a massive stepped pyramid blast-shield.",
    "coinReward": 760,
    "birds": [
      "speed",
      "heavy",
      "chrono",
      "lightning",
      "split",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.4,
          0
        ],
        "size": [
          11.8,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          7.4,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.4,
          4.4,
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
          10.8,
          4.1,
          0
        ],
        "size": [
          0.46,
          2.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          4.1,
          0
        ],
        "size": [
          0.46,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.6,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.6,
          4.4,
          0
        ],
        "size": [
          0.5,
          2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          3.1,
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
          15.9,
          4.05,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          5.6,
          0
        ],
        "size": [
          11.2,
          0.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.6,
          6.9,
          0
        ],
        "size": [
          0.4,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.6,
          8.11,
          0
        ],
        "size": [
          1.8,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.4,
          6.9,
          0
        ],
        "size": [
          0.4,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          8.11,
          0
        ],
        "size": [
          1.8,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.6,
          6.8,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          6.8,
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
          15.4,
          6.8,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          7.97,
          0
        ],
        "size": [
          8,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.8,
          8.94,
          0
        ],
        "size": [
          0.42,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          8.94,
          0
        ],
        "size": [
          0.42,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          9.89,
          0
        ],
        "size": [
          5.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          10.64,
          0
        ],
        "size": [
          1.6,
          1.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.1,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.9,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.6,
          8.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.4,
          8.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.05,
          6.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          13.95,
          6.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          8.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          11.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 58,
    "name": "Starlight Bastion Matrix",
    "zone": "Solar Foundry",
    "icon": "✨",
    "difficulty": "Galactic Overlord",
    "description": "Four archipelago islands perched at staggered heights connected by perilous wooden stepping bridges.",
    "coinReward": 780,
    "birds": [
      "heavy",
      "fire",
      "chrono",
      "vortex",
      "speed",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          6.4,
          1.2,
          0
        ],
        "size": [
          2.8,
          2.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          10.4,
          2.2,
          0
        ],
        "size": [
          3,
          4.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          14.6,
          1.6,
          0
        ],
        "size": [
          3.2,
          3.2,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.8,
          2.6,
          0
        ],
        "size": [
          3,
          5.2,
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
          2.7,
          0
        ],
        "size": [
          1.2,
          0.6,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          5.8,
          3.8,
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
          7,
          3.8,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.4,
          4.71,
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
          6.4,
          5.12,
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
          10.4,
          4.7,
          0
        ],
        "size": [
          1.4,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.6,
          5.9,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.2,
          5.9,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          6.92,
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
          10.4,
          7.64,
          0
        ],
        "size": [
          0.32,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.6,
          3.5,
          0
        ],
        "size": [
          1.4,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.4,
          4.7,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.8,
          4.7,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14.6,
          4.1,
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
          14.6,
          5.73,
          0
        ],
        "size": [
          3.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          5.5,
          0
        ],
        "size": [
          1.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.6,
          6.8,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20,
          6.8,
          0
        ],
        "size": [
          0.46,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          7.94,
          0
        ],
        "size": [
          3.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.8,
          8.88,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.8,
          9.79,
          0
        ],
        "size": [
          2,
          0.22,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.4,
          4.5,
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
          12.5,
          4.5,
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
          16.7,
          5.3,
          0
        ],
        "size": [
          2.2,
          0.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.4,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.4,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          10.4,
          8.68,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.6,
          4.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.8,
          6.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.8,
          10.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 59,
    "name": "Corona Shield Citadel",
    "zone": "Solar Foundry",
    "icon": "🛡️",
    "difficulty": "Galactic Overlord",
    "description": "A fortified energy redoubt sheltered behind a massive forward deflection shield that absorbs frontal impacts.",
    "coinReward": 800,
    "birds": [
      "split",
      "speed",
      "chrono",
      "heavy",
      "vortex",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.4,
          0
        ],
        "size": [
          5,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          15.5,
          1.8,
          0
        ],
        "size": [
          6.5,
          3.6,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.4,
          4.1,
          0
        ],
        "size": [
          0.9,
          2.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.5,
          4.1,
          0
        ],
        "size": [
          0.9,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.6,
          4.1,
          0
        ],
        "size": [
          0.9,
          2.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          9.8,
          3.9,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.8,
          5.3,
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
          8,
          5.76,
          0
        ],
        "size": [
          4.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8,
          6.52,
          0
        ],
        "size": [
          0.36,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          4.8,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          4.8,
          0
        ],
        "size": [
          0.46,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          4.8,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          6.18,
          0
        ],
        "size": [
          6.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.6,
          7.36,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          7.36,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.5,
          6.76,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          15.5,
          7.41,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          8.51,
          0
        ],
        "size": [
          4.8,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.6,
          9.46,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.4,
          9.46,
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
          15.5,
          10.38,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.5,
          6.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8,
          7.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.25,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.75,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          8.1,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          9.1,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          10.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 60,
    "name": "Solar Emperor Fortress",
    "zone": "Solar Foundry",
    "icon": "👑",
    "difficulty": "Solar Emperor Boss",
    "description": "The grand imperial citadel of the Sun, with fortified gatehouses and the Solar Emperor presiding within the core.",
    "coinReward": 850,
    "birds": [
      "heavy",
      "chrono",
      "lightning",
      "vortex",
      "fire",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          6.6,
          1.4,
          0
        ],
        "size": [
          3.8,
          2.8,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.6,
          2.2,
          0
        ],
        "size": [
          6.2,
          4.4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.6,
          1.4,
          0
        ],
        "size": [
          3.8,
          2.8,
          5
        ],
        "type": "volcanic"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          5.2,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.2,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.6,
          5.54,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.6,
          6.48,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.6,
          7.39,
          0
        ],
        "size": [
          2.4,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.2,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          20,
          3.1,
          0
        ],
        "size": [
          0.8,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.2,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20,
          4.4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.6,
          5.54,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.6,
          6.48,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.6,
          7.39,
          0
        ],
        "size": [
          2.4,
          0.22,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          5.7,
          0
        ],
        "size": [
          0.52,
          2.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          5.7,
          0
        ],
        "size": [
          0.46,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          5.7,
          0
        ],
        "size": [
          0.52,
          2.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.4,
          4.7,
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
          13.8,
          4.7,
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
          12.6,
          7.2,
          0
        ],
        "size": [
          6.2,
          0.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          8.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          8.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.6,
          7.9,
          0
        ],
        "size": [
          1.4,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          9.77,
          0
        ],
        "size": [
          4.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          10.44,
          0
        ],
        "size": [
          1.4,
          1,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.6,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.6,
          7.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.6,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.6,
          7.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.4,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.8,
          5.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.6,
          9.12,
          0
        ],
        "radius": 0.72,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.6,
          11.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 61,
    "name": "Cosmic Genesis Spire",
    "zone": "Cosmic Singularity",
    "icon": "🚀",
    "difficulty": "Cosmic Deity",
    "description": "An orbital space-elevator base station anchored by heavy guy-wire towers and soaring tension rails.",
    "coinReward": 880,
    "birds": [
      "speed",
      "chrono",
      "heavy",
      "fire",
      "lightning",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          12,
          1.6,
          0
        ],
        "size": [
          9.2,
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
          7.6,
          3.6,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.4,
          3.6,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.6,
          5.1,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          4.5,
          0
        ],
        "size": [
          0.48,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.2,
          4.5,
          0
        ],
        "size": [
          0.48,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.4,
          5.1,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.3,
          3.5,
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
          12,
          5.99,
          0
        ],
        "size": [
          9.6,
          0.38,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.6,
          7.18,
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
          11,
          7.18,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13,
          7.18,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.4,
          7.18,
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
          12,
          8.35,
          0
        ],
        "size": [
          8,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.2,
          9.62,
          0
        ],
        "size": [
          0.42,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          9.62,
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
          12,
          10.87,
          0
        ],
        "size": [
          5,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12,
          11.62,
          0
        ],
        "size": [
          1.4,
          1.2,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.3,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.7,
          3.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12,
          6.62,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12,
          8.96,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12,
          12.66,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 62,
    "name": "Nebula Titan Colossus",
    "zone": "Cosmic Singularity",
    "icon": "🤖",
    "difficulty": "Cosmic Deity",
    "description": "A mythical cosmic war colossus standing astride two mountain ridges with its command cockpit suspended over the abyss.",
    "coinReward": 900,
    "birds": [
      "split",
      "fire",
      "chrono",
      "heavy",
      "vortex",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          7.8,
          1.8,
          0
        ],
        "size": [
          4.4,
          3.6,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          16.8,
          1.8,
          0
        ],
        "size": [
          4.4,
          3.6,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.4,
          4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.2,
          4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.4,
          5.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.2,
          5.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.8,
          6.75,
          0
        ],
        "size": [
          3.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.2,
          4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          5.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.2,
          5.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.8,
          6.75,
          0
        ],
        "size": [
          3.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.3,
          7.1,
          0
        ],
        "size": [
          11.8,
          0.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10,
          8.4,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.6,
          8.4,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.3,
          7.8,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.3,
          8.6,
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
          12.3,
          9.69,
          0
        ],
        "size": [
          8.6,
          0.38,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.2,
          10.78,
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
          13.4,
          10.78,
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
          12.3,
          11.82,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.8,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.8,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.3,
          9.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.2,
          7.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.4,
          7.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.3,
          10.46,
          0
        ],
        "radius": 0.58,
        "isBoss": false,
        "birdType": "boss"
      },
      {
        "pos": [
          12.3,
          12.4,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 63,
    "name": "Dark Matter Bastion",
    "zone": "Cosmic Singularity",
    "icon": "🌑",
    "difficulty": "Cosmic Deity",
    "description": "A monolithic brutalist bunker complex designed with deep recessed cells that protect enemies from direct impacts.",
    "coinReward": 920,
    "birds": [
      "heavy",
      "speed",
      "chrono",
      "lightning",
      "vortex",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.2,
          0
        ],
        "size": [
          5.5,
          2.4,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          16,
          2,
          0
        ],
        "size": [
          6.2,
          4,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.2,
          3.4,
          0
        ],
        "size": [
          1.4,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          3.4,
          0
        ],
        "size": [
          1.4,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          3.6,
          0
        ],
        "size": [
          0.48,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9.2,
          2.7,
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
          8.5,
          4.98,
          0
        ],
        "size": [
          5.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          5.56,
          0
        ],
        "size": [
          1.4,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.2,
          5.2,
          0
        ],
        "size": [
          1.6,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          5.2,
          0
        ],
        "size": [
          1.6,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          5.2,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          6.61,
          0
        ],
        "size": [
          6.6,
          0.42,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.8,
          7.92,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          7.92,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          7.32,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          9.19,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.2,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          6.4,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.6,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.4,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16,
          8.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16,
          9.8,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 64,
    "name": "Astral Aegis Citadel",
    "zone": "Cosmic Singularity",
    "icon": "🔮",
    "difficulty": "Cosmic Deity",
    "description": "Three concentric crystal dome observatories linked by energy arches across cosmic pillar foundations.",
    "coinReward": 940,
    "birds": [
      "speed",
      "split",
      "chrono",
      "heavy",
      "fire",
      "lightning"
    ],
    "platforms": [
      {
        "pos": [
          7.2,
          1.4,
          0
        ],
        "size": [
          3.6,
          2.8,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          12.6,
          2,
          0
        ],
        "size": [
          5,
          4,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          18,
          1.4,
          0
        ],
        "size": [
          3.6,
          2.8,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7.2,
          3.1,
          0
        ],
        "size": [
          1.2,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          5.8,
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
        "type": "glass",
        "pos": [
          8.6,
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
          7.2,
          5.54,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18,
          3.1,
          0
        ],
        "size": [
          1.2,
          0.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.6,
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
        "type": "glass",
        "pos": [
          19.4,
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
          18,
          5.54,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.6,
          5.2,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.6,
          5.2,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.6,
          4.3,
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
          12.6,
          6.59,
          0
        ],
        "size": [
          5.2,
          0.38,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11.2,
          7.68,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14,
          7.68,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          7.28,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          8.73,
          0
        ],
        "size": [
          4,
          0.3,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.2,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.2,
          6.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18,
          6.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          5.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.6,
          8.22,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          9.32,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 65,
    "name": "Galactic Titan Pantheon",
    "zone": "Cosmic Singularity",
    "icon": "🏛️",
    "difficulty": "Cosmic Emperor Boss",
    "description": "The celestial council hall of cosmic deities, crowned by the throne of the Galactic Titan Emperor.",
    "coinReward": 1050,
    "birds": [
      "heavy",
      "chrono",
      "vortex",
      "fire",
      "lightning",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.6,
          0
        ],
        "size": [
          4,
          3.2,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          12.6,
          2.4,
          0
        ],
        "size": [
          5.6,
          4.8,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          18.4,
          1.6,
          0
        ],
        "size": [
          4,
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
          6.8,
          3.5,
          0
        ],
        "size": [
          1.2,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.4,
          4.9,
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
          8.2,
          4.9,
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
          6.8,
          6.14,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          3.5,
          0
        ],
        "size": [
          1.2,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17,
          4.9,
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
          19.8,
          4.9,
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
          18.4,
          6.14,
          0
        ],
        "size": [
          3.6,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          6.1,
          0
        ],
        "size": [
          0.52,
          2.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          6.1,
          0
        ],
        "size": [
          0.48,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15,
          6.1,
          0
        ],
        "size": [
          0.52,
          2.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.4,
          5.1,
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
          13.8,
          5.1,
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
          12.6,
          7.6,
          0
        ],
        "size": [
          5.8,
          0.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11,
          8.9,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.2,
          8.9,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          10.17,
          0
        ],
        "size": [
          4.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          10.84,
          0
        ],
        "size": [
          1.6,
          1,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.4,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.4,
          6.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.4,
          5.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.8,
          5.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          8.54,
          0
        ],
        "radius": 0.74,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.6,
          11.78,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 66,
    "name": "Infinity Core Stronghold",
    "zone": "Cosmic Singularity",
    "icon": "♾️",
    "difficulty": "Deity Sovereign",
    "description": "Dual figure-eight cylindrical towers supporting a fragile suspended prisoner cage hanging over open airspace.",
    "coinReward": 1100,
    "birds": [
      "split",
      "chrono",
      "heavy",
      "speed",
      "fire",
      "vortex"
    ],
    "platforms": [
      {
        "pos": [
          9,
          1.4,
          0
        ],
        "size": [
          5.8,
          2.8,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          16.5,
          1.4,
          0
        ],
        "size": [
          5.8,
          2.8,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          9,
          3.1,
          0
        ],
        "size": [
          1.4,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7,
          4.5,
          0
        ],
        "size": [
          0.48,
          2.2,
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
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          9,
          3.7,
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
          9,
          5.77,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          6.84,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          10.2,
          6.84,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9,
          7.88,
          0
        ],
        "size": [
          3.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          3.1,
          0
        ],
        "size": [
          1.4,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.5,
          4.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.5,
          4.5,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "coin",
        "pos": [
          16.5,
          3.65,
          0
        ],
        "size": [
          0.5,
          0.5,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          5.77,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.3,
          6.84,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.7,
          6.84,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          7.88,
          0
        ],
        "size": [
          3.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.75,
          5.75,
          0
        ],
        "size": [
          5.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12,
          6.7,
          0
        ],
        "size": [
          0.36,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          13.5,
          6.7,
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
          12.75,
          7.62,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9,
          6.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.5,
          4.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.5,
          6.38,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.75,
          6.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 67,
    "name": "Celestial Vault of Gods",
    "zone": "Cosmic Singularity",
    "icon": "⛩️",
    "difficulty": "Deity Sovereign",
    "description": "An ascending celestial acropolis spanning three stepped terraces that rise progressively into the heavens.",
    "coinReward": 1150,
    "birds": [
      "speed",
      "heavy",
      "chrono",
      "lightning",
      "vortex",
      "split"
    ],
    "platforms": [
      {
        "pos": [
          7,
          1.2,
          0
        ],
        "size": [
          3.8,
          2.4,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          12.2,
          2,
          0
        ],
        "size": [
          4.4,
          4,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          17.5,
          2.8,
          0
        ],
        "size": [
          4.2,
          5.6,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "stone",
        "pos": [
          7,
          2.7,
          0
        ],
        "size": [
          1.2,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.8,
          4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          4,
          0
        ],
        "size": [
          0.44,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7,
          5.14,
          0
        ],
        "size": [
          3.4,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.6,
          4.52,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.2,
          4.3,
          0
        ],
        "size": [
          1.4,
          0.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          5.7,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.6,
          5.7,
          0
        ],
        "size": [
          0.48,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.2,
          4.9,
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
          12.2,
          6.96,
          0
        ],
        "size": [
          4,
          0.32,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.8,
          6.12,
          0
        ],
        "size": [
          2.8,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.5,
          5.9,
          0
        ],
        "size": [
          1.6,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          7.4,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19,
          7.4,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.5,
          8.77,
          0
        ],
        "size": [
          4.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.5,
          9.84,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7,
          3.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7,
          5.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.2,
          5.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.2,
          7.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          17.5,
          6.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.5,
          11.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 68,
    "name": "Imperial Sky Pantheon",
    "zone": "Cosmic Singularity",
    "icon": "🚢",
    "difficulty": "Deity Sovereign",
    "description": "An imperial dreadnought battleship docked atop mountain pylons, bristling with heavy deck armor and munition bays.",
    "coinReward": 1200,
    "birds": [
      "heavy",
      "fire",
      "chrono",
      "vortex",
      "lightning",
      "speed"
    ],
    "platforms": [
      {
        "pos": [
          8,
          1.4,
          0
        ],
        "size": [
          5.4,
          2.8,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          15.8,
          1.8,
          0
        ],
        "size": [
          6.6,
          3.6,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          6.4,
          4.1,
          0
        ],
        "size": [
          0.5,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.6,
          4.1,
          0
        ],
        "size": [
          0.5,
          2.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8,
          3.1,
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
          13.6,
          4.8,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          4.8,
          0
        ],
        "size": [
          0.5,
          2.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          6.22,
          0
        ],
        "size": [
          14.8,
          0.44,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.2,
          7.14,
          0
        ],
        "size": [
          1.8,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.4,
          7.54,
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
          12.5,
          7.54,
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
          15.6,
          7.54,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          14,
          6.74,
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
          13,
          8.82,
          0
        ],
        "size": [
          10.8,
          0.36,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          9.9,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.4,
          9.9,
          0
        ],
        "size": [
          0.42,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.2,
          10.94,
          0
        ],
        "size": [
          3.4,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.8,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          6.2,
          8.28,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11,
          6.88,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14,
          7.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          13.2,
          9.6,
          0
        ],
        "radius": 0.6,
        "isBoss": false,
        "birdType": "boss"
      }
    ]
  },
  {
    "id": 69,
    "name": "Singularity Apex Sanctum",
    "zone": "Cosmic Singularity",
    "icon": "🎯",
    "difficulty": "Deity Sovereign",
    "description": "An intricate multi-tier house-of-cards kinetic puzzle where shattering key balance fulcrums triggers a catastrophic domino collapse.",
    "coinReward": 1250,
    "birds": [
      "speed",
      "chrono",
      "heavy",
      "split",
      "fire",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          12.5,
          1.4,
          0
        ],
        "size": [
          10.2,
          2.8,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "glass",
        "pos": [
          8.4,
          3.9,
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
          10.8,
          3.9,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          14.2,
          3.9,
          0
        ],
        "size": [
          0.44,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.6,
          3.9,
          0
        ],
        "size": [
          0.4,
          2.2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          12.5,
          3.1,
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
          12.5,
          5.19,
          0
        ],
        "size": [
          9.6,
          0.38,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.8,
          6.28,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.2,
          6.28,
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
          12.5,
          7.35,
          0
        ],
        "size": [
          7.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          11,
          8.32,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14,
          8.32,
          0
        ],
        "size": [
          0.38,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          9.28,
          0
        ],
        "size": [
          4.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          10.24,
          0
        ],
        "size": [
          0.4,
          1.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          12.32,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          9.6,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.4,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          5.82,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          7.96,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          11.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          13.16,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  },
  {
    "id": 70,
    "name": "Omnipotent God Sovereign Citadel",
    "zone": "Cosmic Singularity",
    "icon": "👑",
    "difficulty": "Supreme God Finale Boss",
    "description": "The ultimate cosmic deity megastructure crowned by the throne of the Omnipotent God Sovereign King.",
    "coinReward": 1500,
    "birds": [
      "heavy",
      "fire",
      "chrono",
      "lightning",
      "vortex",
      "chrono"
    ],
    "platforms": [
      {
        "pos": [
          6.8,
          1.5,
          0
        ],
        "size": [
          4.2,
          3,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          12.8,
          2.5,
          0
        ],
        "size": [
          6.4,
          5,
          5
        ],
        "type": "celestial"
      },
      {
        "pos": [
          18.8,
          1.5,
          0
        ],
        "size": [
          4.2,
          3,
          5
        ],
        "type": "celestial"
      }
    ],
    "blocks": [
      {
        "type": "metal",
        "pos": [
          5.4,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.2,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.4,
          4.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          4.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          6.15,
          0
        ],
        "size": [
          3.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6,
          7.2,
          0
        ],
        "size": [
          0.4,
          1.8,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.6,
          7.2,
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
          6.8,
          8.23,
          0
        ],
        "size": [
          2.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          8.76,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          20.2,
          3.4,
          0
        ],
        "size": [
          0.8,
          0.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.4,
          4.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20.2,
          4.9,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          6.15,
          0
        ],
        "size": [
          3.6,
          0.3,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          18.8,
          6.6,
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
          17.8,
          7.2,
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
          19.8,
          7.2,
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
          18.8,
          8.23,
          0
        ],
        "size": [
          2.8,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          8.76,
          0
        ],
        "size": [
          1.2,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          6.3,
          0
        ],
        "size": [
          0.52,
          2.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          6.3,
          0
        ],
        "size": [
          0.48,
          2.6,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.2,
          6.3,
          0
        ],
        "size": [
          0.52,
          2.6,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.6,
          5.3,
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
          14,
          5.3,
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
          12.8,
          7.8,
          0
        ],
        "size": [
          6,
          0.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11,
          9.1,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.6,
          9.1,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          8.7,
          0
        ],
        "size": [
          1.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          10.37,
          0
        ],
        "size": [
          4.8,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.6,
          11.64,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14,
          11.64,
          0
        ],
        "size": [
          0.46,
          2.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          12.9,
          0
        ],
        "size": [
          3.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          13.56,
          0
        ],
        "size": [
          1.2,
          1,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.8,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.74,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          9.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.8,
          4.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.8,
          7.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.8,
          9.6,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.6,
          6.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14,
          6.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.8,
          9.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          11.28,
          0
        ],
        "radius": 0.74,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.8,
          14.5,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  }
];
