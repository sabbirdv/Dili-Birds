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
    "name": "Canyon Citadel of Titans",
    "zone": "Amber Canyon",
    "icon": "🏰",
    "difficulty": "Titan Challenge Boss",
    "description": "CHALLENGE LEVEL 10: A formidable dual-mesa canyon citadel reinforced with stone pillboxes, high-tension bridges, and an armored command sanctum.",
    "coinReward": 250,
    "birds": [
      "split",
      "heavy",
      "speed",
      "heavy",
      "fire"
    ],
    "platforms": [
      {
        "pos": [
          8.5,
          1.4,
          0
        ],
        "size": [
          5.2,
          2.8,
          5
        ],
        "type": "mesa"
      },
      {
        "pos": [
          15.5,
          1.8,
          0
        ],
        "size": [
          5.8,
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
          6.6,
          3.1,
          0
        ],
        "size": [
          0.7,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.4,
          3.1,
          0
        ],
        "size": [
          0.7,
          0.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.6,
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
        "type": "wood",
        "pos": [
          8.5,
          4.1,
          0
        ],
        "size": [
          0.42,
          2.6,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.4,
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
        "type": "tnt",
        "pos": [
          7.5,
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
        "type": "wood",
        "pos": [
          7.3,
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
        "type": "wood",
        "pos": [
          9.7,
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
          8.5,
          7.4,
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
          12,
          5.52,
          0
        ],
        "size": [
          3.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.2,
          3.9,
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
          15.5,
          3.9,
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
          3.9,
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
          13.2,
          5.3,
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
          15.5,
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
        "type": "stone",
        "pos": [
          17.8,
          5.3,
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
          14.3,
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
          15.5,
          6.57,
          0
        ],
        "size": [
          5.4,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14,
          7.74,
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
          17,
          7.74,
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
          7.14,
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
          15.5,
          8.88,
          0
        ],
        "size": [
          3.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          9.72,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          9.72,
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
          15.5,
          10.53,
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
          7.5,
          3.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          9.5,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.5,
          6.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.3,
          4.69,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.7,
          4.04,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.5,
          8.16,
          0
        ],
        "radius": 0.62,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          15.5,
          9.46,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
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
    "name": "Emperor's Iron Fortress",
    "zone": "Crown Summit",
    "icon": "👑",
    "difficulty": "Imperial Challenge Boss",
    "description": "CHALLENGE LEVEL 20: A grand volcanic fortress featuring a tri-pylon defense network, multi-tiered stone bastions, and the armored Emperor Throne Keep.",
    "coinReward": 320,
    "birds": [
      "vortex",
      "heavy",
      "fire",
      "split",
      "speed",
      "heavy"
    ],
    "platforms": [
      {
        "pos": [
          7.2,
          1.5,
          0
        ],
        "size": [
          4.4,
          3,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          12.8,
          2,
          0
        ],
        "size": [
          5.6,
          4,
          5
        ],
        "type": "volcanic"
      },
      {
        "pos": [
          18.2,
          1.5,
          0
        ],
        "size": [
          4.4,
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
          5.8,
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
          8.6,
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
          5.8,
          4.6,
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
          8.6,
          4.6,
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
          7.2,
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
          7.2,
          5.74,
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
          7.2,
          6.58,
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
          7.2,
          7.39,
          0
        ],
        "size": [
          2.2,
          0.22,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
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
          19.6,
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
          16.8,
          4.6,
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
          19.6,
          4.6,
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
          18.2,
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
          18.2,
          5.74,
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
          18.2,
          6.58,
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
          18.2,
          7.39,
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
          10.8,
          4.3,
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
          12.8,
          4.3,
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
          14.8,
          4.3,
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
          10.8,
          5.6,
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
          12.8,
          5.6,
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
          14.8,
          5.6,
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
          11.8,
          4.35,
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
          13.8,
          4.35,
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
          12.8,
          6.78,
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
          9.5,
          5.72,
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
          16.1,
          5.72,
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
          11.4,
          8.06,
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
          8.06,
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
          7.36,
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
          12.8,
          9.31,
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
          12.1,
          9.76,
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
          13.5,
          9.76,
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
          12.1,
          10.76,
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
          13.5,
          10.76,
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
          12.8,
          11.58,
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
          12.8,
          12.1,
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
          7.2,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          7.2,
          7.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.2,
          4.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.2,
          7.72,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          11.8,
          5.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.8,
          5.14,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.8,
          8.41,
          0
        ],
        "radius": 0.65,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.8,
          9.9,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          12.94,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
    "difficulty": "Grand Master Challenge Boss",
    "description": "CHALLENGE LEVEL 30: A titanic spark-forged automaton straddling dual cliffs with dual reinforced legs, explosive core vaults, and heavy metal armor plating.",
    "coinReward": 400,
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
        "type": "stone",
        "pos": [
          6.8,
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
          7.8,
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
          9.2,
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
        "type": "stone",
        "pos": [
          10.2,
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
        "type": "metal",
        "pos": [
          9.8,
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
          8.5,
          3.4,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          8.5,
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
        "type": "metal",
        "pos": [
          8.5,
          5.16,
          0
        ],
        "size": [
          3.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
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
          15.8,
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
          17.2,
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
        "type": "stone",
        "pos": [
          18.2,
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
        "type": "metal",
        "pos": [
          17.8,
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
          16.5,
          3.4,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          16.5,
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
        "type": "metal",
        "pos": [
          16.5,
          5.16,
          0
        ],
        "size": [
          3.8,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          6.22,
          0
        ],
        "size": [
          0.48,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          6.22,
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
          16.5,
          6.22,
          0
        ],
        "size": [
          0.48,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          6.22,
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
          7.32,
          0
        ],
        "size": [
          11.6,
          0.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10,
          8.62,
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
          12.5,
          8.62,
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
          8.62,
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
          11.25,
          7.845,
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
          13.75,
          7.845,
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
          12.5,
          8.77,
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
          7.4,
          8.52,
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
          17.6,
          8.52,
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
          6.4,
          8.22,
          0
        ],
        "size": [
          0.8,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.6,
          8.22,
          0
        ],
        "size": [
          0.8,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.4,
          9.65,
          0
        ],
        "size": [
          2.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.6,
          9.65,
          0
        ],
        "size": [
          2.4,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          9.9,
          0
        ],
        "size": [
          6.6,
          0.36,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11,
          11.08,
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
          14,
          11.08,
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
          10.48,
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
          12.5,
          12.23,
          0
        ],
        "size": [
          4.2,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          12.98,
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
          11.5,
          12.68,
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
          13.5,
          12.68,
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
          4.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.5,
          4.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.25,
          8.61,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.75,
          8.61,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          7.4,
          9.96,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.6,
          9.96,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.5,
          11.58,
          0
        ],
        "radius": 0.7,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.5,
          14.02,
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
        "type": "metal",
        "pos": [
          5.639,
          2.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.761,
          2.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          2.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.484,
          3.55,
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
          8.916,
          3.55,
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
          7.2,
          3.55,
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
          4.984,
          3.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.416,
          3.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          4.72,
          0
        ],
        "size": [
          4.472,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.806,
          5.79,
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
          8.594,
          5.79,
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
          7.2,
          5.69,
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
          6.83,
          0
        ],
        "size": [
          3.288,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.5,
          7.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.9,
          7.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          8.39,
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
          6.25,
          8.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.15,
          8.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.875,
          5.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.725,
          5.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          5.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.72,
          6.75,
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
          16.88,
          6.75,
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
          14.8,
          6.75,
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
          12.22,
          6.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.38,
          6.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          7.92,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.144,
          8.99,
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
          16.456,
          8.99,
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
          14.8,
          9.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.8,
          10.03,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.1,
          10.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          10.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.8,
          11.59,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.85,
          11.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.75,
          11.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.271,
          2.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.129,
          2.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.2,
          6.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          7.2,
          7.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          13.696,
          6.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.904,
          6.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.8,
          8.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.8,
          10.61,
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
        "type": "metal",
        "pos": [
          5.943,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.657,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.788,
          5.15,
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
          7.812,
          5.15,
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
          6.8,
          5.15,
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
          5.288,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.312,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          6.32,
          0
        ],
        "size": [
          3.064,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.913,
          7.39,
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
          7.687,
          7.39,
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
          8.43,
          0
        ],
        "size": [
          2.274,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.775,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.425,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.62,
          3.95,
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
          14.58,
          3.95,
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
          12.6,
          3.95,
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
          10.12,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.08,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          5.12,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.016,
          6.19,
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
          14.184,
          6.19,
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
          6.09,
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
          7.23,
          0
        ],
        "size": [
          3.668,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.9,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.3,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.65,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.55,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.343,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.057,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          4.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.188,
          5.95,
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
          19.212,
          5.95,
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
          18.2,
          5.95,
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
          16.688,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.712,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.2,
          7.12,
          0
        ],
        "size": [
          3.064,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.313,
          8.19,
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
          19.087,
          8.19,
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
          9.23,
          0
        ],
        "size": [
          2.274,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.209,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.391,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.544,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.656,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.609,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.791,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
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
          7.261,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.679,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.47,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.106,
          4.55,
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
          9.834,
          4.55,
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
          8.47,
          4.55,
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
          6.606,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.334,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.47,
          5.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.33,
          6.79,
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
          9.61,
          6.79,
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
          8.47,
          7.165,
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
          8.47,
          7.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.77,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.17,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.47,
          9.39,
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
          7.52,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.42,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.321,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.739,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.53,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.166,
          4.55,
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
          17.894,
          4.55,
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
          16.53,
          4.55,
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
          14.666,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.394,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.53,
          5.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.39,
          6.79,
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
          17.67,
          6.79,
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
          16.53,
          7.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.53,
          7.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.83,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.23,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.53,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.58,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.48,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.35,
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
          13.65,
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
          5.17,
          0
        ],
        "size": [
          7.06,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.71,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.23,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.47,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.47,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.77,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.29,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.53,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.53,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          3.44,
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
        "birdType": "blue"
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
        "type": "metal",
        "pos": [
          6.375,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.025,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.2,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.22,
          4.35,
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
          10.18,
          4.35,
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
          8.2,
          4.35,
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
          5.72,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.68,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.2,
          5.52,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.616,
          6.59,
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
          9.784,
          6.59,
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
          8.2,
          6.49,
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
          8.2,
          7.63,
          0
        ],
        "size": [
          3.668,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.5,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.9,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.2,
          9.19,
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
          7.25,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.15,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.575,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.425,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          4.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.42,
          5.95,
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
          17.58,
          5.95,
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
          15.5,
          5.95,
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
          12.92,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.08,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          7.12,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.844,
          8.19,
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
          17.156,
          8.19,
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
          15.5,
          8.565,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          9.23,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          10.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          10.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          10.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.55,
          11.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.45,
          11.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.144,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.256,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.2,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.2,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.396,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.604,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          7.73,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          9.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
        "type": "metal",
        "pos": [
          5.503,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.097,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.348,
          4.55,
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
          8.252,
          4.55,
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
          6.8,
          4.55,
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
          4.848,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.752,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          5.72,
          0
        ],
        "size": [
          3.944,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.596,
          6.79,
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
          8.004,
          6.79,
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
          7.83,
          0
        ],
        "size": [
          2.908,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.875,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.725,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          5.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.72,
          6.35,
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
          14.88,
          6.35,
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
          12.8,
          6.35,
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
          10.22,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.38,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          7.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.144,
          8.59,
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
          14.456,
          8.59,
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
          12.8,
          8.49,
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
          9.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.1,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          11.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.85,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.75,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.203,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.797,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.5,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.048,
          4.55,
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
          19.952,
          4.55,
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
          18.5,
          4.55,
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
          16.548,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20.452,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.5,
          5.72,
          0
        ],
        "size": [
          3.944,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.296,
          6.79,
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
          19.704,
          6.79,
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
          18.5,
          7.83,
          0
        ],
        "size": [
          2.908,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          5.997,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.603,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.696,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.904,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          9.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.8,
          10.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.697,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          19.303,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
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
        "type": "metal",
        "pos": [
          7.881,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.299,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.09,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.726,
          4.35,
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
          10.454,
          4.35,
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
          9.09,
          4.35,
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
          7.226,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.954,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.09,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.95,
          6.59,
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
          10.23,
          6.59,
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
          9.09,
          6.965,
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
          9.09,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.39,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.79,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.09,
          9.19,
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
          8.14,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.04,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.701,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.119,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.91,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.546,
          4.35,
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
          17.274,
          4.35,
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
          15.91,
          4.35,
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
          14.046,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.774,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.91,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.77,
          6.59,
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
          17.05,
          6.59,
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
          15.91,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.91,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.21,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.61,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.91,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.96,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.86,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.35,
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
        "type": "stone",
        "pos": [
          13.65,
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
          12.5,
          4.5,
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
          4.97,
          0
        ],
        "size": [
          5.82,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.33,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.85,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.09,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          9.09,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.15,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.67,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.91,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.91,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
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
          5.58,
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
        "type": "metal",
        "pos": [
          5.851,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.149,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.5,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.696,
          5.55,
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
          9.304,
          5.55,
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
          7.5,
          5.55,
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
          5.196,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.804,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.5,
          6.72,
          0
        ],
        "size": [
          4.648,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.043,
          7.79,
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
          8.957,
          7.79,
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
          7.5,
          7.69,
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
          7.5,
          8.83,
          0
        ],
        "size": [
          3.415,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.8,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.2,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.5,
          10.39,
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
          6.55,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.45,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.851,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.149,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.5,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.696,
          5.55,
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
          19.304,
          5.55,
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
          17.5,
          5.55,
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
          15.196,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.804,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.5,
          6.72,
          0
        ],
        "size": [
          4.648,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.043,
          7.79,
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
          18.957,
          7.79,
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
          17.5,
          8.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.5,
          8.83,
          0
        ],
        "size": [
          3.415,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.8,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          18.2,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.5,
          10.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.55,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.45,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.528,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.472,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.5,
          8.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          7.5,
          9.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.528,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.472,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.5,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          17.5,
          9.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
          6.575,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.425,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.42,
          4.35,
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
          10.58,
          4.35,
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
          8.5,
          4.35,
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
          5.92,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.08,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          5.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.844,
          6.59,
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
          10.156,
          6.59,
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
          8.5,
          6.49,
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
          7.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          9.19,
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
          7.55,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.45,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.275,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.125,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.12,
          4.35,
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
          18.28,
          4.35,
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
          16.2,
          4.35,
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
          13.62,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.78,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          5.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.544,
          6.59,
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
          17.856,
          6.59,
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
          16.2,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          7.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.9,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.25,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.15,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.396,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.604,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.5,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.5,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.096,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.304,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.2,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.2,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
        "type": "metal",
        "pos": [
          7.416,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.834,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.625,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.261,
          3.95,
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
          9.989,
          3.95,
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
          8.625,
          3.95,
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
          6.761,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.489,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.625,
          5.12,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.485,
          6.19,
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
          9.765,
          6.19,
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
          8.625,
          6.565,
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
          8.625,
          7.23,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.925,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.325,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.625,
          8.79,
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
          7.675,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.575,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.166,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.584,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.375,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.011,
          3.95,
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
          17.739,
          3.95,
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
          16.375,
          3.95,
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
          14.511,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.239,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.375,
          5.12,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.235,
          6.19,
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
          17.515,
          6.19,
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
          16.375,
          6.565,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.375,
          7.23,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.675,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          17.075,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.375,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.425,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.325,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.35,
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
          13.65,
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
        "type": "tnt",
        "pos": [
          12.5,
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
        "type": "metal",
        "pos": [
          12.5,
          4.57,
          0
        ],
        "size": [
          6.75,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.865,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.385,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.625,
          5.73,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.625,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.615,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          17.135,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.375,
          5.73,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.375,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          2.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          5.18,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 40,
    "name": "Void Airship Bastion",
    "zone": "Chrono Void",
    "icon": "🛸",
    "difficulty": "Void Emperor Challenge Boss",
    "description": "CHALLENGE LEVEL 40: A colossal armored sky dreadnought moored across three fortified watchtower pylons with multiple bomb bays, reinforced bulkhead armor, and the Void Commander bridge.",
    "coinReward": 500,
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
          5.8,
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
          8.2,
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
          5.8,
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
          8.2,
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
          7,
          3.7,
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
          7,
          5.54,
          0
        ],
        "size": [
          3.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7,
          6.38,
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
          7,
          7.19,
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
          10.8,
          2.3,
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
          14.2,
          2.3,
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
          10.8,
          4,
          0
        ],
        "size": [
          0.48,
          2.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.2,
          4,
          0
        ],
        "size": [
          0.48,
          2.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          3.7,
          0
        ],
        "size": [
          0.44,
          3.4,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.6,
          2.325,
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
          13.4,
          2.325,
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
          12.5,
          5.56,
          0
        ],
        "size": [
          4.4,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
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
          19.2,
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
          16.8,
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
          19.2,
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
          18,
          3.7,
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
          18,
          5.54,
          0
        ],
        "size": [
          3.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          6.38,
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
          18,
          7.19,
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
          7.5,
          0
        ],
        "size": [
          13.6,
          0.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.2,
          8.4,
          0
        ],
        "size": [
          1.2,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          8.4,
          0
        ],
        "size": [
          1.2,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          8.7,
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
          10.2,
          8.7,
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
          12.5,
          8.7,
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
          14.8,
          8.7,
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
          17,
          8.7,
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
          9.1,
          8.025,
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
          15.9,
          8.025,
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
          12.5,
          9.88,
          0
        ],
        "size": [
          12,
          0.36,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          10.36,
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
          17.8,
          10.36,
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
          11.36,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          11.36,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          11.16,
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
          14.2,
          11.16,
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
          12.5,
          10.46,
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
          12.5,
          12.41,
          0
        ],
        "size": [
          4.8,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.8,
          13.26,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.2,
          13.26,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          12.96,
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
          14.08,
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
          12.5,
          14.7,
          0
        ],
        "size": [
          0.32,
          1,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7,
          7.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.6,
          3.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.4,
          3.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18,
          4.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18,
          7.52,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.1,
          8.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.9,
          8.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          11.58,
          0
        ],
        "radius": 0.72,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.5,
          15.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
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
        "type": "metal",
        "pos": [
          7.571,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.989,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.78,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.416,
          4.55,
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
          10.144,
          4.55,
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
          8.78,
          4.55,
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
          6.916,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.644,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.78,
          5.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.64,
          6.79,
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
          9.92,
          6.79,
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
          8.78,
          7.165,
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
          8.78,
          7.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.08,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.48,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.78,
          9.39,
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
          7.83,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.73,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.011,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.429,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.22,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.856,
          4.55,
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
          17.584,
          4.55,
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
          16.22,
          4.55,
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
          14.356,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.084,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.22,
          5.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.08,
          6.79,
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
          17.36,
          6.79,
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
          16.22,
          7.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.22,
          7.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.52,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.92,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.22,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.27,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.17,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.35,
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
          13.65,
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
          5.17,
          0
        ],
        "size": [
          6.44,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.02,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.54,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.78,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.78,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.46,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.98,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.22,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.22,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          3.44,
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
        "birdType": "blue"
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
        "type": "metal",
        "pos": [
          6.439,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.561,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.284,
          3.95,
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
          9.716,
          3.95,
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
          8,
          3.95,
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
          5.784,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.216,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          5.12,
          0
        ],
        "size": [
          4.472,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.606,
          6.19,
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
          9.394,
          6.19,
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
          6.09,
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
          7.23,
          0
        ],
        "size": [
          3.288,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          8.79,
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
          7.05,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.95,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.575,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.425,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          5.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.42,
          6.35,
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
          17.58,
          6.35,
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
          15.5,
          6.35,
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
          12.92,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.08,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          7.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.844,
          8.59,
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
          17.156,
          8.59,
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
          15.5,
          8.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          9.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          11.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.55,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.45,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.071,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.929,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.396,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.604,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          8.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          10.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
          6.887,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.713,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.8,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.732,
          4.35,
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
          10.868,
          4.35,
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
          8.8,
          4.35,
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
          6.232,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.368,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.8,
          5.52,
          0
        ],
        "size": [
          5.176,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.153,
          6.59,
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
          10.447,
          6.59,
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
          8.8,
          6.49,
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
          7.63,
          0
        ],
        "size": [
          3.795,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.1,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.5,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.8,
          9.19,
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
          7.85,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.75,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.287,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.113,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.132,
          4.35,
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
          18.268,
          4.35,
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
          16.2,
          4.35,
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
          13.632,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.768,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          5.52,
          0
        ],
        "size": [
          5.176,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.553,
          6.59,
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
          17.847,
          6.59,
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
          16.2,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          7.63,
          0
        ],
        "size": [
          3.795,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.9,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.25,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.15,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.702,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.898,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.8,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.8,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.102,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.298,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.2,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.2,
          8.21,
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
        "type": "metal",
        "pos": [
          6.079,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.321,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.924,
          3.95,
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
          8.476,
          3.95,
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
          7.2,
          3.95,
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
          5.424,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.976,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          5.12,
          0
        ],
        "size": [
          3.592,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.123,
          6.19,
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
          8.277,
          6.19,
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
          7.2,
          7.23,
          0
        ],
        "size": [
          2.654,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.115,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.885,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          4.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.96,
          5.95,
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
          14.04,
          5.95,
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
          5.95,
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
          10.46,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.54,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          7.12,
          0
        ],
        "size": [
          4.12,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.233,
          8.19,
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
          13.767,
          8.19,
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
          8.09,
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
          9.23,
          0
        ],
        "size": [
          3.034,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.8,
          10.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.2,
          10.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.5,
          10.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.55,
          11.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.45,
          11.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.679,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.921,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.524,
          4.35,
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
          19.076,
          4.35,
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
          17.8,
          4.35,
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
          16.024,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.576,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          5.52,
          0
        ],
        "size": [
          3.592,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.723,
          6.59,
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
          18.877,
          6.59,
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
          17.8,
          7.63,
          0
        ],
        "size": [
          2.654,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.482,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.918,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.655,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.345,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          8.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          9.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.082,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.518,
          3.79,
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
        "type": "metal",
        "pos": [
          5.503,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.097,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.348,
          4.35,
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
          8.252,
          4.35,
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
          6.8,
          4.35,
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
          4.848,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.752,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          5.52,
          0
        ],
        "size": [
          3.944,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.596,
          6.59,
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
          8.004,
          6.59,
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
          7.63,
          0
        ],
        "size": [
          2.908,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.675,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.525,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.52,
          5.15,
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
          14.68,
          5.15,
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
          12.6,
          5.15,
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
          10.02,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.18,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          6.32,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.944,
          7.39,
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
          14.256,
          7.39,
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
          7.29,
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
          8.43,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          11.9,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.3,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          9.99,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.65,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.55,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.903,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.497,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.748,
          4.35,
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
          19.652,
          4.35,
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
          18.2,
          4.35,
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
          16.248,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20.152,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.2,
          5.52,
          0
        ],
        "size": [
          3.944,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.996,
          6.59,
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
          19.404,
          6.59,
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
          7.63,
          0
        ],
        "size": [
          2.908,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          5.997,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.603,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.496,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.704,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          8.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          9.01,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.397,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          19.003,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
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
          7.726,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.144,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.935,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.571,
          4.35,
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
          10.299,
          4.35,
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
          8.935,
          4.35,
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
          7.071,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.799,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.935,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.795,
          6.59,
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
          10.075,
          6.59,
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
          8.935,
          6.965,
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
          8.935,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.235,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.635,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.935,
          9.19,
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
          7.985,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.885,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.856,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.274,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.065,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.701,
          4.35,
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
          17.429,
          4.35,
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
          16.065,
          4.35,
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
          14.201,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.929,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.065,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.925,
          6.59,
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
          17.205,
          6.59,
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
          16.065,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.065,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          15.365,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          16.765,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.065,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.115,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.015,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.35,
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
        "type": "stone",
        "pos": [
          13.65,
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
          12.5,
          4.5,
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
          4.97,
          0
        ],
        "size": [
          6.13,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.175,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.695,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.935,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.935,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.305,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.825,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.065,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.065,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
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
          5.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
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
          6.575,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.425,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.42,
          4.75,
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
          10.58,
          4.75,
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
          8.5,
          4.75,
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
          5.92,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.08,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          5.92,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.844,
          6.99,
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
          10.156,
          6.99,
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
          8.5,
          6.89,
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
          8.03,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          8.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          8.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          9.59,
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
          7.55,
          9.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.45,
          9.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.075,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.925,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.92,
          3.95,
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
          18.08,
          3.95,
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
          16,
          3.95,
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
          13.42,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.58,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          5.12,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.344,
          6.19,
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
          17.656,
          6.19,
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
          16,
          6.565,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          7.23,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.3,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.7,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.05,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.95,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.396,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.604,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.5,
          7.73,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.5,
          8.61,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.896,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.104,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16,
          5.73,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16,
          7.81,
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
        "type": "metal",
        "pos": [
          6.175,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.825,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.02,
          3.95,
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
          9.98,
          3.95,
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
          8,
          3.95,
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
          5.52,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.48,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          5.12,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.416,
          6.19,
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
          9.584,
          6.19,
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
          6.09,
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
          7.23,
          0
        ],
        "size": [
          3.668,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          8.79,
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
          7.05,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.95,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.575,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.425,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.42,
          5.55,
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
          17.58,
          5.55,
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
          15.5,
          5.55,
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
          12.92,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.08,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          6.72,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.844,
          7.79,
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
          17.156,
          7.79,
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
          15.5,
          8.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          8.83,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          10.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.55,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.45,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.944,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.056,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.396,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.604,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.5,
          9.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
        "type": "metal",
        "pos": [
          6.167,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.233,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.012,
          4.35,
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
          8.388,
          4.35,
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
          7.2,
          4.35,
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
          5.512,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.888,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          5.52,
          0
        ],
        "size": [
          3.416,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.186,
          6.59,
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
          8.214,
          6.59,
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
          7.2,
          7.63,
          0
        ],
        "size": [
          2.528,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.239,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.361,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.084,
          3.95,
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
          14.516,
          3.95,
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
          12.8,
          3.95,
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
          10.584,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.016,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          5.12,
          0
        ],
        "size": [
          4.472,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.406,
          6.19,
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
          14.194,
          6.19,
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
          12.8,
          6.09,
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
          7.23,
          0
        ],
        "size": [
          3.288,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          12.1,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          13.5,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.85,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.75,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.991,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.409,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.2,
          5.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.836,
          6.35,
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
          19.564,
          6.35,
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
          18.2,
          6.35,
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
          16.336,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20.064,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.2,
          7.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.06,
          8.59,
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
          19.34,
          8.59,
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
          9.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.524,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.876,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.871,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.729,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.8,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.44,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.96,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      }
    ]
  },
  {
    "id": 50,
    "name": "Temporal Singularity Apex",
    "zone": "Chrono Void",
    "icon": "⏳",
    "difficulty": "Chrono Overlord Challenge Boss",
    "description": "CHALLENGE LEVEL 50: The colossal singularity apex megastructure where the Chrono Overlord reigns, shielded by dual multi-story quantum pylons, heavy kinetic girders, and armored vaults.",
    "coinReward": 700,
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
          5.6,
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
        "type": "tnt",
        "pos": [
          6.8,
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
        "type": "stone",
        "pos": [
          6.8,
          5.54,
          0
        ],
        "size": [
          3.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6,
          6.38,
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
          7.6,
          6.38,
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
          6.8,
          7.2,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          7.72,
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
          17.3,
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
          19.7,
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
          17.3,
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
          19.7,
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
        "type": "tnt",
        "pos": [
          18.5,
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
        "type": "stone",
        "pos": [
          18.5,
          5.54,
          0
        ],
        "size": [
          3.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.7,
          6.38,
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
          19.3,
          6.38,
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
          18.5,
          7.2,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.5,
          7.72,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          4.7,
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
          11.9,
          4.7,
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
          13.7,
          4.7,
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
          15.4,
          4.7,
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
          10.2,
          5.9,
          0
        ],
        "size": [
          0.48,
          1.8,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.9,
          5.9,
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
          13.7,
          5.9,
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
          15.4,
          5.9,
          0
        ],
        "size": [
          0.48,
          1.8,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.05,
          4.725,
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
          14.55,
          4.725,
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
          12.8,
          7,
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
          9.1,
          5.52,
          0
        ],
        "size": [
          2.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          5.52,
          0
        ],
        "size": [
          2.2,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          8.3,
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
          12.8,
          8.3,
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
          14.8,
          8.3,
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
          11.8,
          7.6,
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
          13.8,
          7.6,
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
          12.8,
          9.58,
          0
        ],
        "size": [
          5.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.4,
          9.7,
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
          9.7,
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
          9.4,
          10.6,
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
          16.2,
          10.6,
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
          11.4,
          10.86,
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
          14.2,
          10.86,
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
          12.8,
          10.26,
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
          12.8,
          12.12,
          0
        ],
        "size": [
          4.2,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.1,
          12.98,
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
          13.5,
          12.98,
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
          12.8,
          13.81,
          0
        ],
        "size": [
          2.6,
          0.26,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.8,
          14.34,
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
          6.8,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          8.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.5,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.5,
          6.12,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.5,
          8.56,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.05,
          5.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.55,
          5.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.8,
          8.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.8,
          8.44,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.4,
          11.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.2,
          11.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.8,
          11.5,
          0
        ],
        "radius": 0.74,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.8,
          15.18,
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
        "type": "stone",
        "pos": [
          6.075,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.925,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.92,
          4.35,
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
          10.08,
          4.35,
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
          4.35,
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
          5.42,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.58,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          5.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.344,
          6.59,
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
          9.656,
          6.59,
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
          6.49,
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
          7.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.05,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.95,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.075,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.925,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.92,
          5.15,
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
          18.08,
          5.15,
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
          16,
          5.15,
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
          13.42,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.58,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          6.32,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.344,
          7.39,
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
          17.656,
          7.39,
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
          16,
          7.765,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          8.43,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.3,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.7,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          9.99,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.05,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.95,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.896,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.104,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.896,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.104,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16,
          9.01,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
          5.991,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.409,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.836,
          5.15,
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
          8.564,
          5.15,
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
          7.2,
          5.15,
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
          5.336,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.064,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          6.32,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.06,
          7.39,
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
          8.34,
          7.39,
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
          7.2,
          7.765,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          8.43,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.675,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.325,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.52,
          3.95,
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
          14.48,
          3.95,
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
          12.5,
          3.95,
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
          10.02,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.98,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          5.12,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.916,
          6.19,
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
          14.084,
          6.19,
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
          6.09,
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
          7.23,
          0
        ],
        "size": [
          3.668,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.8,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.2,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.5,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.55,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.45,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.591,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.009,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.436,
          5.55,
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
          19.164,
          5.55,
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
          5.55,
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
          15.936,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.664,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.8,
          6.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.66,
          7.79,
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
          18.94,
          7.79,
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
          17.8,
          8.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          8.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.44,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.96,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.2,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.444,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.556,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.5,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.5,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.04,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.56,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.8,
          7.33,
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
        "type": "metal",
        "pos": [
          7.416,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.834,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.625,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.261,
          4.55,
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
          9.989,
          4.55,
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
          8.625,
          4.55,
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
          6.761,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.489,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.625,
          5.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.485,
          6.79,
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
          9.765,
          6.79,
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
          8.625,
          7.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.625,
          7.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.925,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.325,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.625,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.675,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.575,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.166,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.584,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.375,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.011,
          4.55,
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
          17.739,
          4.55,
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
          16.375,
          4.55,
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
          14.511,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.239,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.375,
          5.72,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.235,
          6.79,
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
          17.515,
          6.79,
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
          16.375,
          7.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.375,
          7.83,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.675,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.075,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.375,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.425,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.325,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.35,
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
        "type": "metal",
        "pos": [
          13.65,
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
          5.17,
          0
        ],
        "size": [
          6.75,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.865,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.385,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.625,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.625,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.615,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          17.135,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.375,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.375,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
          12.5,
          5.78,
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
          6.575,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.425,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.42,
          3.95,
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
          10.58,
          3.95,
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
          8.5,
          3.95,
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
          5.92,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.08,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          5.12,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.844,
          6.19,
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
          10.156,
          6.19,
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
          8.5,
          6.09,
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
          8.5,
          7.23,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.55,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.45,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.575,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.425,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          5.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.42,
          6.35,
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
          17.58,
          6.35,
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
          15.5,
          6.35,
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
          12.92,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.08,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          7.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.844,
          8.59,
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
          17.156,
          8.59,
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
          15.5,
          8.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          9.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          11.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.55,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.45,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.396,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.604,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.5,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.5,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.396,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.604,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          8.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          10.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
          5.327,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.273,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.172,
          4.75,
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
          8.428,
          4.75,
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
          6.8,
          4.75,
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
          4.672,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.928,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          5.92,
          0
        ],
        "size": [
          4.296,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.469,
          6.99,
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
          8.131,
          6.99,
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
          6.8,
          7.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          8.03,
          0
        ],
        "size": [
          3.161,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.675,
          2.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.525,
          2.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          2.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.52,
          3.55,
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
          14.68,
          3.55,
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
          12.6,
          3.55,
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
          10.02,
          3.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.18,
          3.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          4.72,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.944,
          5.79,
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
          14.256,
          5.79,
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
          5.69,
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
          6.83,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.9,
          7.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.3,
          7.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          8.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.65,
          8.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.55,
          8.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.927,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.873,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.4,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.772,
          4.75,
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
          20.028,
          4.75,
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
          18.4,
          4.75,
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
          16.272,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          20.528,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          5.92,
          0
        ],
        "size": [
          4.296,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.069,
          6.99,
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
          19.731,
          6.99,
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
          18.4,
          7.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.4,
          8.03,
          0
        ],
        "size": [
          3.161,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          5.913,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.687,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          6.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.496,
          2.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.704,
          2.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          6.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          7.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.513,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          19.287,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.4,
          6.53,
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
        "type": "stone",
        "pos": [
          6.587,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.413,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.432,
          4.55,
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
          10.568,
          4.55,
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
          8.5,
          4.55,
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
          5.932,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.068,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          5.72,
          0
        ],
        "size": [
          5.176,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.853,
          6.79,
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
          10.147,
          6.79,
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
          8.5,
          6.69,
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
          8.5,
          7.83,
          0
        ],
        "size": [
          3.795,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.55,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.45,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.287,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.113,
          3.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          3.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.132,
          4.55,
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
          18.268,
          4.55,
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
          16.2,
          4.55,
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
          13.632,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.768,
          4.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          5.72,
          0
        ],
        "size": [
          5.176,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.553,
          6.79,
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
          17.847,
          6.79,
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
          16.2,
          7.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.2,
          7.83,
          0
        ],
        "size": [
          3.795,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.5,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.9,
          8.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.2,
          9.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.25,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.15,
          9.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.402,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.598,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.5,
          7.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.5,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.102,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.298,
          3.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.2,
          6.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.2,
          8.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
          7.633,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.051,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.842,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.478,
          4.35,
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
          10.206,
          4.35,
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
          8.842,
          4.35,
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
          6.978,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.706,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.842,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.702,
          6.59,
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
          9.982,
          6.59,
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
          8.842,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.842,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.142,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.542,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.842,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.892,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.792,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.949,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.367,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.158,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.794,
          4.35,
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
          17.522,
          4.35,
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
          16.158,
          4.35,
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
          14.294,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.022,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.158,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.018,
          6.59,
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
          17.298,
          6.59,
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
          16.158,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.158,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.458,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.858,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.158,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.208,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.108,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.35,
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
          13.65,
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
          12.5,
          4.5,
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
          4.97,
          0
        ],
        "size": [
          6.316,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.082,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.602,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          8.842,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.842,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.398,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.918,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.158,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.158,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          5.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
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
          5.543,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.257,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.4,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.388,
          3.95,
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
          7.412,
          3.95,
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
          6.4,
          3.95,
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
          4.888,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.912,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.4,
          5.12,
          0
        ],
        "size": [
          3.064,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.513,
          6.19,
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
          7.287,
          6.19,
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
          6.4,
          7.23,
          0
        ],
        "size": [
          2.274,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.455,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.345,
          4.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.4,
          4.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.3,
          5.95,
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
          11.5,
          5.95,
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
          10.4,
          5.95,
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
          8.8,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12,
          5.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.4,
          7.12,
          0
        ],
        "size": [
          3.24,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.45,
          8.19,
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
          11.35,
          8.19,
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
          10.4,
          9.23,
          0
        ],
        "size": [
          2.401,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.567,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.633,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.6,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.412,
          4.75,
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
          15.788,
          4.75,
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
          14.6,
          4.75,
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
          12.912,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.288,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.6,
          5.92,
          0
        ],
        "size": [
          3.416,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.586,
          6.99,
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
          15.614,
          6.99,
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
          14.6,
          8.03,
          0
        ],
        "size": [
          2.528,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.855,
          5.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          19.745,
          5.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.8,
          5.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.7,
          6.75,
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
          19.9,
          6.75,
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
          18.8,
          6.75,
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
          17.2,
          6.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          20.4,
          6.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          7.92,
          0
        ],
        "size": [
          3.24,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.85,
          8.99,
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
          19.75,
          8.99,
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
          18.8,
          10.03,
          0
        ],
        "size": [
          2.401,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          5.809,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.991,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          9.766,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          11.034,
          5.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.924,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.276,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.166,
          6.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          19.434,
          6.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
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
        "type": "stone",
        "pos": [
          6.175,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.825,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.02,
          4.35,
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
          9.98,
          4.35,
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
          4.35,
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
          5.52,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.48,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          5.52,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.416,
          6.59,
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
          9.584,
          6.59,
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
          6.49,
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
          7.63,
          0
        ],
        "size": [
          3.668,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.05,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.95,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.575,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.425,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.42,
          5.15,
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
          17.58,
          5.15,
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
          15.5,
          5.15,
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
          12.92,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.08,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          6.32,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.844,
          7.39,
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
          17.156,
          7.39,
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
          15.5,
          7.765,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.5,
          8.43,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          14.8,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.2,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.5,
          9.99,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.55,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.45,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.944,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.056,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.396,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.604,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.5,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.5,
          9.01,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      }
    ]
  },
  {
    "id": 60,
    "name": "Solar Emperor Fortress",
    "zone": "Solar Foundry",
    "icon": "☀️",
    "difficulty": "Solar Emperor Challenge Boss",
    "description": "CHALLENGE LEVEL 60: The imperial stronghold of the Solar Emperor featuring reinforced outer gate towers, multi-tier ballistic armor, and high-altitude throne bastions.",
    "coinReward": 900,
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
          5,
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
          8.2,
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
          5,
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
        "type": "stone",
        "pos": [
          8.2,
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
          6.6,
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
        "type": "stone",
        "pos": [
          6.6,
          5.75,
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
          5.8,
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
        "type": "metal",
        "pos": [
          7.4,
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
          6.6,
          7.62,
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
          6.6,
          8.14,
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
          17,
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
          20.2,
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
          17,
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
          20.2,
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
          18.6,
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
        "type": "stone",
        "pos": [
          18.6,
          5.75,
          0
        ],
        "size": [
          3.8,
          0.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
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
          19.4,
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
          18.6,
          7.62,
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
          18.6,
          8.14,
          0
        ],
        "size": [
          1,
          0.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10,
          4.7,
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
          12.6,
          4.7,
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
          4.7,
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
          10,
          6,
          0
        ],
        "size": [
          0.52,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.8,
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
        "type": "stone",
        "pos": [
          13.4,
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
          15.2,
          6,
          0
        ],
        "size": [
          0.52,
          2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          10.9,
          4.725,
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
          14.3,
          4.725,
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
        "type": "metal",
        "pos": [
          8.9,
          5.72,
          0
        ],
        "size": [
          2,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.3,
          5.72,
          0
        ],
        "size": [
          2,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.6,
          8.6,
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
          12.6,
          8.6,
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
          14.6,
          8.6,
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
          11.6,
          7.8,
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
          13.6,
          7.8,
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
          12.6,
          9.98,
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
          9.2,
          10.1,
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
          16,
          10.1,
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
          9.2,
          11,
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
          16,
          11,
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
          11.4,
          10.46,
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
          13.8,
          10.46,
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
          11.4,
          11.66,
          0
        ],
        "size": [
          0.46,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.8,
          11.66,
          0
        ],
        "size": [
          0.46,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          10.66,
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
          12.72,
          0
        ],
        "size": [
          4.4,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.6,
          13.18,
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
          12.6,
          14.18,
          0
        ],
        "size": [
          0.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.6,
          13.18,
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
          13.18,
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
          15,
          0
        ],
        "size": [
          2.6,
          0.24,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          12.6,
          15.52,
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
          6.6,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.6,
          6.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.6,
          8.98,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.6,
          4.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.6,
          6.34,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.6,
          8.98,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          10.9,
          5.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.3,
          5.49,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.6,
          8.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.6,
          8.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.6,
          11.9,
          0
        ],
        "radius": 0.74,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.6,
          16.36,
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
          8.187,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.109,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.148,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.032,
          4.75,
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
          10.264,
          4.75,
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
          9.148,
          4.75,
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
          7.532,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.764,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.148,
          5.92,
          0
        ],
        "size": [
          3.272,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.186,
          6.99,
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
          10.11,
          6.99,
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
          9.148,
          7.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.148,
          8.03,
          0
        ],
        "size": [
          2.424,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.448,
          8.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.848,
          8.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.148,
          9.59,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.198,
          9.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.098,
          9.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.891,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.813,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.852,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.736,
          4.75,
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
          15.968,
          4.75,
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
          14.852,
          4.75,
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
          13.236,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.468,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.852,
          5.92,
          0
        ],
        "size": [
          3.272,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.89,
          6.99,
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
          15.814,
          6.99,
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
          14.852,
          7.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.852,
          8.03,
          0
        ],
        "size": [
          2.424,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.152,
          8.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.552,
          8.82,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.852,
          9.59,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.902,
          9.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.802,
          9.935,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.85,
          4.2,
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
          13.15,
          4.2,
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
          12,
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
        "type": "metal",
        "pos": [
          12,
          5.37,
          0
        ],
        "size": [
          4.704,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.507,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.789,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          9.148,
          6.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.148,
          8.61,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.211,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          15.493,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          14.852,
          6.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          14.852,
          8.61,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12,
          3.64,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12,
          5.98,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
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
        "type": "stone",
        "pos": [
          6.239,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.361,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.8,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.084,
          5.15,
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
          9.516,
          5.15,
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
          7.8,
          5.15,
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
          5.584,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.016,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.8,
          6.32,
          0
        ],
        "size": [
          4.472,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.406,
          7.39,
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
          9.194,
          7.39,
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
          7.8,
          7.29,
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
          7.8,
          8.43,
          0
        ],
        "size": [
          3.288,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.1,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.5,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.8,
          9.99,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.85,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.75,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.239,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.361,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.8,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.084,
          5.15,
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
          18.516,
          5.15,
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
          16.8,
          5.15,
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
          14.584,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.016,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
          6.32,
          0
        ],
        "size": [
          4.472,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.406,
          7.39,
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
          18.194,
          7.39,
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
          16.8,
          7.765,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.8,
          8.43,
          0
        ],
        "size": [
          3.288,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.1,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.5,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.8,
          9.99,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.85,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.75,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.871,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          8.729,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.8,
          8.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          7.8,
          9.01,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.871,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.729,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.8,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.8,
          9.01,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
        "type": "stone",
        "pos": [
          6.575,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.425,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.5,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.42,
          3.95,
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
          10.58,
          3.95,
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
          8.5,
          3.95,
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
          5.92,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.08,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          5.12,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.844,
          6.19,
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
          10.156,
          6.19,
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
          8.5,
          6.09,
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
          8.5,
          7.23,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.8,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.2,
          8.02,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.5,
          8.79,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.55,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.45,
          9.135,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.075,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.925,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.92,
          5.55,
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
          18.08,
          5.55,
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
          16,
          5.55,
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
          13.42,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.58,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          6.72,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.344,
          7.79,
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
          17.656,
          7.79,
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
          16,
          8.165,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          8.83,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.3,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.7,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16,
          10.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.05,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.95,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.396,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.604,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8.5,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8.5,
          7.81,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.896,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.104,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16,
          9.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
          5.991,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.409,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.836,
          4.35,
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
          8.564,
          4.35,
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
          7.2,
          4.35,
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
          5.336,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.064,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7.2,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.06,
          6.59,
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
          8.34,
          6.59,
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
          7.2,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.2,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.775,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.425,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.62,
          5.55,
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
          14.58,
          5.55,
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
          12.6,
          5.55,
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
          10.12,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.08,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          6.72,
          0
        ],
        "size": [
          5,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.016,
          7.79,
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
          14.184,
          7.79,
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
          7.69,
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
          8.83,
          0
        ],
        "size": [
          3.668,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.9,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.3,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          10.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.65,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.55,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.791,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.209,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.636,
          4.35,
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
          19.364,
          4.35,
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
          18,
          4.35,
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
          16.136,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.864,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18,
          5.52,
          0
        ],
        "size": [
          3.768,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.86,
          6.59,
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
          19.14,
          6.59,
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
          18,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18,
          7.63,
          0
        ],
        "size": [
          2.781,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.44,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.96,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7.2,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.544,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.656,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          8.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          9.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.24,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.76,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18,
          6.13,
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
          5.415,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.185,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.26,
          4.75,
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
          8.34,
          4.75,
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
          6.8,
          4.75,
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
          4.76,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.84,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          6.8,
          5.92,
          0
        ],
        "size": [
          4.12,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.533,
          6.99,
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
          8.067,
          6.99,
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
          6.8,
          7.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          8.03,
          0
        ],
        "size": [
          3.034,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.675,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.525,
          5.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          5.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.52,
          6.35,
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
          14.68,
          6.35,
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
          12.6,
          6.35,
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
          10.02,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.18,
          6.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          7.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.944,
          8.59,
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
          14.256,
          8.59,
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
          8.49,
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
          9.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.9,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.3,
          10.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.6,
          11.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.65,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.55,
          11.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.015,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.785,
          3.475,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.4,
          3.475,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.86,
          4.75,
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
          19.94,
          4.75,
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
          18.4,
          4.75,
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
          16.36,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          20.44,
          4.65,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.4,
          5.92,
          0
        ],
        "size": [
          4.12,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.133,
          6.99,
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
          19.667,
          6.99,
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
          18.4,
          7.365,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.4,
          8.03,
          0
        ],
        "size": [
          3.034,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          5.955,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.645,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          6.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.496,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.704,
          5.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.6,
          9.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.6,
          10.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.555,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          19.245,
          4.19,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.4,
          6.53,
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
          7.075,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.925,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.92,
          4.35,
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
          11.08,
          4.35,
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
          9,
          4.35,
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
          6.42,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.58,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9,
          5.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.344,
          6.59,
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
          10.656,
          6.59,
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
          9,
          6.49,
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
          9,
          7.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.3,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          9.7,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.05,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.95,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.575,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.425,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.5,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.42,
          4.35,
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
          18.58,
          4.35,
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
          16.5,
          4.35,
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
          13.92,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.08,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          5.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.844,
          6.59,
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
          18.156,
          6.59,
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
          16.5,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.5,
          7.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.8,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          17.2,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.5,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.55,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.45,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          7.896,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.104,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          9,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.396,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          17.604,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          16.5,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.5,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
          5.703,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.297,
          2.675,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7,
          2.675,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.548,
          3.95,
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
          8.452,
          3.95,
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
          3.95,
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
          5.048,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.952,
          3.85,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          7,
          5.12,
          0
        ],
        "size": [
          3.944,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.796,
          6.19,
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
          8.204,
          6.19,
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
          7,
          6.565,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7,
          7.23,
          0
        ],
        "size": [
          2.908,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.639,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.761,
          4.275,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.2,
          4.275,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.484,
          5.55,
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
          13.916,
          5.55,
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
          12.2,
          5.55,
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
          9.984,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.416,
          5.45,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.2,
          6.72,
          0
        ],
        "size": [
          4.472,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.806,
          7.79,
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
          13.594,
          7.79,
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
          12.2,
          7.69,
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
          12.2,
          8.83,
          0
        ],
        "size": [
          3.288,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.5,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.9,
          9.62,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.2,
          10.39,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.25,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.15,
          10.735,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.027,
          5.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.973,
          5.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.5,
          5.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.872,
          7.15,
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
          19.128,
          7.15,
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
          17.5,
          7.15,
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
          15.372,
          7.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          19.628,
          7.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.5,
          8.32,
          0
        ],
        "size": [
          4.296,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.169,
          9.39,
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
          18.831,
          9.39,
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
          17.5,
          9.765,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.5,
          10.43,
          0
        ],
        "size": [
          3.161,
          0.28,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.197,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          7.803,
          3.39,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          7,
          5.73,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.271,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          13.129,
          4.99,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          12.2,
          8.53,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          12.2,
          9.41,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          16.613,
          6.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.387,
          6.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          17.5,
          8.93,
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
        "type": "stone",
        "pos": [
          6.075,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          9.925,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          5.92,
          4.35,
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
          10.08,
          4.35,
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
          4.35,
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
          5.42,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.58,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          5.52,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.344,
          6.59,
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
          9.656,
          6.59,
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
          6.49,
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
          7.63,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          7.3,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          8.7,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          7.05,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.95,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          13.875,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          17.725,
          3.875,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.8,
          3.875,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.72,
          5.15,
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
          17.88,
          5.15,
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
          15.8,
          5.15,
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
          13.22,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          18.38,
          5.05,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.8,
          6.32,
          0
        ],
        "size": [
          5.2,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.144,
          7.39,
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
          17.456,
          7.39,
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
          15.8,
          7.765,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.8,
          8.43,
          0
        ],
        "size": [
          3.812,
          0.28,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          15.1,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "glass",
        "pos": [
          16.5,
          9.22,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          15.8,
          9.99,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.85,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.75,
          10.335,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          6.896,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          9.104,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          8,
          7.33,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          8,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.696,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          16.904,
          4.59,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          15.8,
          6.93,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.8,
          9.01,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
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
        "type": "metal",
        "pos": [
          8.232,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.444,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.338,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.077,
          4.35,
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
          10.599,
          4.35,
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
          9.338,
          4.35,
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
          7.577,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.099,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.338,
          5.52,
          0
        ],
        "size": [
          3.562,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.272,
          6.59,
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
          10.404,
          6.59,
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
          9.338,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.338,
          7.63,
          0
        ],
        "size": [
          2.633,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          8.638,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          10.038,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.338,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          8.388,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.288,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.556,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.768,
          3.075,
          0
        ],
        "size": [
          0.75,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.662,
          3.075,
          0
        ],
        "size": [
          0.8,
          0.55,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.401,
          4.35,
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
          16.923,
          4.35,
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
          15.662,
          4.35,
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
          13.901,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.423,
          4.25,
          0
        ],
        "size": [
          0.42,
          1.2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.662,
          5.52,
          0
        ],
        "size": [
          3.562,
          0.34,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.596,
          6.59,
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
          16.728,
          6.59,
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
          15.662,
          6.965,
          0
        ],
        "size": [
          0.75,
          0.75,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.662,
          7.63,
          0
        ],
        "size": [
          2.633,
          0.28,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          14.962,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          16.362,
          8.42,
          0
        ],
        "size": [
          0.38,
          1.3,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.662,
          9.19,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.712,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.612,
          9.535,
          0
        ],
        "size": [
          0.42,
          0.45,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.35,
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
          13.65,
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
          12.5,
          4.5,
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
          4.97,
          0
        ],
        "size": [
          5.324,
          0.34,
          0.8
        ]
      }
    ],
    "targets": [
      {
        "pos": [
          8.627,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          10.049,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          9.338,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          9.338,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          14.951,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          16.373,
          3.79,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          15.662,
          6.13,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          15.662,
          8.21,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          3.24,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          12.5,
          5.58,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      }
    ]
  },
  {
    "id": 70,
    "name": "Omnipotent God Sovereign Citadel",
    "zone": "Cosmic Singularity",
    "icon": "👑",
    "difficulty": "Supreme God Grand Finale Boss",
    "description": "CHALLENGE LEVEL 70: The ultimate cosmic deity megastructure crowned by the throne of the Omnipotent God Sovereign King, defended by triple quad-story bastions and impenetrable metal armor plating.",
    "coinReward": 2000,
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
          5,
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
          8.6,
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
          5,
          4.9,
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
          8.6,
          4.9,
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
          6.8,
          4.125,
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
          6.8,
          6.16,
          0
        ],
        "size": [
          4.2,
          0.32,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          5.8,
          7.22,
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
          7.8,
          7.22,
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
          8.26,
          0
        ],
        "size": [
          3.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          6.2,
          9.2,
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
          7.4,
          9.2,
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
          6.8,
          10.12,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          6.8,
          10.64,
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
          17,
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
          20.6,
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
          17,
          4.9,
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
          20.6,
          4.9,
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
          18.8,
          4.125,
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
          18.8,
          6.16,
          0
        ],
        "size": [
          4.2,
          0.32,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          17.8,
          7.22,
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
          19.8,
          7.22,
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
          8.26,
          0
        ],
        "size": [
          3.2,
          0.28,
          0.8
        ]
      },
      {
        "type": "wood",
        "pos": [
          18.2,
          9.2,
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
          19.4,
          9.2,
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
          18.8,
          10.12,
          0
        ],
        "size": [
          2.4,
          0.24,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          18.8,
          10.64,
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
          9.3,
          6.13,
          0
        ],
        "size": [
          2.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16.3,
          6.13,
          0
        ],
        "size": [
          2.2,
          0.26,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.2,
          5.3,
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
          11.9,
          5.3,
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
          13.7,
          5.3,
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
          15.4,
          5.3,
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
          10.2,
          6.6,
          0
        ],
        "size": [
          0.54,
          2,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          11.9,
          6.6,
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
          13.7,
          6.6,
          0
        ],
        "size": [
          0.48,
          2,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          15.4,
          6.6,
          0
        ],
        "size": [
          0.54,
          2,
          0.8
        ]
      },
      {
        "type": "tnt",
        "pos": [
          11.05,
          5.325,
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
          14.55,
          5.325,
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
          12.8,
          7.81,
          0
        ],
        "size": [
          6.4,
          0.42,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          10.8,
          9.12,
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
          12.8,
          9.12,
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
          14.8,
          9.12,
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
          11.8,
          8.42,
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
          13.8,
          8.42,
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
          12.8,
          10.4,
          0
        ],
        "size": [
          5.2,
          0.36,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          9.6,
          10.52,
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
          10.52,
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
          9.6,
          11.52,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          16,
          11.52,
          0
        ],
        "size": [
          0.36,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          11.4,
          10.88,
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
          14.2,
          10.88,
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
          11.4,
          12.08,
          0
        ],
        "size": [
          0.48,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          14.2,
          12.08,
          0
        ],
        "size": [
          0.48,
          1.8,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          11.08,
          0
        ],
        "size": [
          1.4,
          1,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          13.15,
          0
        ],
        "size": [
          4.4,
          0.34,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          13.62,
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
          12.1,
          14.62,
          0
        ],
        "size": [
          0.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          13.5,
          14.62,
          0
        ],
        "size": [
          0.4,
          1.4,
          0.8
        ]
      },
      {
        "type": "stone",
        "pos": [
          12.8,
          15.46,
          0
        ],
        "size": [
          2.8,
          0.28,
          0.8
        ]
      },
      {
        "type": "metal",
        "pos": [
          12.8,
          16,
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
          4.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          6.8,
          6.76,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          6.8,
          8.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          6.8,
          11.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          18.8,
          4.89,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "green"
      },
      {
        "pos": [
          18.8,
          6.76,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          18.8,
          8.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          18.8,
          11.48,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.05,
          6.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          14.55,
          6.09,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      },
      {
        "pos": [
          11.8,
          9.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "pink"
      },
      {
        "pos": [
          13.8,
          9.26,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "blue"
      },
      {
        "pos": [
          12.8,
          12.34,
          0
        ],
        "radius": 0.76,
        "isBoss": true,
        "birdType": "boss"
      },
      {
        "pos": [
          12.8,
          16.84,
          0
        ],
        "radius": 0.44,
        "isBoss": false,
        "birdType": "gold"
      }
    ]
  }
];
