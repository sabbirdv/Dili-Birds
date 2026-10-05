import { makePlat, makeCol, makeBeam, makeBlock, makeTnt, makeCoin, makeTarget } from './level_builder_helpers.js';

export function getTier2Levels() {
  return [
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
}
