import { makePlat, makeCol, makeBeam, makeBlock, makeTnt, makeCoin, makeTarget } from './level_builder_helpers.js';

export function getTier1Levels() {
  return [
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
  }
];
}
