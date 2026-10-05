import { makePlat, makeCol, makeBeam, makeBlock, makeTnt, makeCoin, makeTarget } from './level_builder_helpers.js';

/**
 * Creates Challenge Level 10: "Canyon Citadel of Titans"
 * Significantly harder than Level 9, twin tiered cliffs, reinforced stone & metal, 33 blocks, 7 targets.
 */
export function buildLevel10() {
  const plats = [
    makePlat(8.5, 1.4, 5.2, 2.8, 'mesa'), // top = 2.8
    makePlat(15.5, 1.8, 5.8, 3.6, 'mesa')  // top = 3.6
  ];

  const blocks = [];
  const targets = [];

  // Left Bastion (Plat 1, top = 2.8)
  blocks.push(makeBlock(6.6, 2.8, 0.7, 0.6, 'stone'));
  blocks.push(makeBlock(10.4, 2.8, 0.7, 0.6, 'stone'));
  blocks.push(makeCol(6.6, 3.4, 0.44, 2.0, 'stone'));
  blocks.push(makeCol(8.5, 2.8, 0.42, 2.6, 'wood'));
  blocks.push(makeCol(10.4, 3.4, 0.44, 2.0, 'stone'));
  blocks.push(makeTnt(7.5, 2.8, 0.6));
  targets.push(makeTarget(7.5, 3.4, 'gold'));
  targets.push(makeTarget(9.5, 2.8, 'blue'));
  blocks.push(makeBeam(8.5, 5.4, 4.4, 0.28, 'stone'));

  // Left Second Tier
  blocks.push(makeCol(7.3, 5.68, 0.38, 1.6, 'wood'));
  blocks.push(makeCol(9.7, 5.68, 0.38, 1.6, 'wood'));
  targets.push(makeTarget(8.5, 5.68, 'pink'));
  blocks.push(makeBeam(8.5, 7.28, 3.0, 0.24, 'stone'));

  // Bridge connecting left and right over the canyon gap!
  blocks.push(makeBeam(12.0, 5.4, 3.2, 0.24, 'metal'));

  // Right Fortress (Plat 2, top = 3.6)
  // Tier 1: Armored bunker
  blocks.push(makeBlock(13.2, 3.6, 0.8, 0.6, 'metal'));
  blocks.push(makeBlock(15.5, 3.6, 0.8, 0.6, 'metal'));
  blocks.push(makeBlock(17.8, 3.6, 0.8, 0.6, 'metal'));
  blocks.push(makeCol(13.2, 4.2, 0.46, 2.2, 'stone'));
  blocks.push(makeCol(15.5, 4.2, 0.44, 2.2, 'metal'));
  blocks.push(makeCol(17.8, 4.2, 0.46, 2.2, 'stone'));
  blocks.push(makeTnt(14.3, 3.6, 0.65));
  targets.push(makeTarget(14.3, 4.25, 'gold'));
  targets.push(makeTarget(16.7, 3.6, 'pink'));
  blocks.push(makeBeam(15.5, 6.4, 5.4, 0.34, 'metal'));

  // Tier 2: Boss Sanctum
  blocks.push(makeCol(14.0, 6.74, 0.44, 2.0, 'stone'));
  blocks.push(makeCol(17.0, 6.74, 0.44, 2.0, 'stone'));
  blocks.push(makeBlock(15.5, 6.74, 1.2, 0.8, 'wood'));
  // Boss target: Canyon Titan Overlord!
  targets.push(makeTarget(15.5, 7.54, 'boss', true, 0.62));
  blocks.push(makeBeam(15.5, 8.74, 3.8, 0.28, 'stone'));

  // Tier 3: Lookout tower
  blocks.push(makeCol(14.8, 9.02, 0.36, 1.4, 'glass'));
  blocks.push(makeCol(16.2, 9.02, 0.36, 1.4, 'glass'));
  targets.push(makeTarget(15.5, 9.02, 'blue'));
  blocks.push(makeBeam(15.5, 10.42, 2.2, 0.22, 'stone'));

  return {
    id: 10,
    name: "Canyon Citadel of Titans",
    zone: "Amber Canyon",
    icon: "🏰",
    difficulty: "Titan Challenge Boss",
    description: "CHALLENGE LEVEL 10: A formidable dual-mesa canyon citadel reinforced with stone pillboxes, high-tension bridges, and an armored command sanctum.",
    coinReward: 250,
    birds: ["split", "heavy", "speed", "heavy", "fire"],
    platforms: plats,
    blocks,
    targets
  };
}

/**
 * Creates Challenge Level 20: "Emperor's Iron Fortress"
 * Harder than Level 10. 3 platforms at varied heights, 42 blocks, 8 targets.
 */
export function buildLevel20() {
  const plats = [
    makePlat(7.2, 1.5, 4.4, 3.0, 'volcanic'),  // top = 3.0
    makePlat(12.8, 2.0, 5.6, 4.0, 'volcanic'), // top = 4.0
    makePlat(18.2, 1.5, 4.4, 3.0, 'volcanic')  // top = 3.0
  ];

  const blocks = [];
  const targets = [];

  // Left Flank Tower (Plat 1, top = 3.0)
  blocks.push(makeBlock(5.8, 3.0, 0.8, 0.6, 'stone'));
  blocks.push(makeBlock(8.6, 3.0, 0.8, 0.6, 'stone'));
  blocks.push(makeCol(5.8, 3.6, 0.44, 2.0, 'stone'));
  blocks.push(makeCol(8.6, 3.6, 0.44, 2.0, 'stone'));
  blocks.push(makeTnt(7.2, 3.0, 0.65));
  targets.push(makeTarget(7.2, 3.65, 'gold'));
  blocks.push(makeBeam(7.2, 5.6, 3.6, 0.28, 'stone'));
  blocks.push(makeCol(7.2, 5.88, 0.38, 1.4, 'wood'));
  targets.push(makeTarget(7.2, 7.28, 'pink'));
  blocks.push(makeBeam(7.2, 7.28, 2.2, 0.22, 'wood'));

  // Right Flank Tower (Plat 3, top = 3.0)
  blocks.push(makeBlock(16.8, 3.0, 0.8, 0.6, 'stone'));
  blocks.push(makeBlock(19.6, 3.0, 0.8, 0.6, 'stone'));
  blocks.push(makeCol(16.8, 3.6, 0.44, 2.0, 'stone'));
  blocks.push(makeCol(19.6, 3.6, 0.44, 2.0, 'stone'));
  blocks.push(makeTnt(18.2, 3.0, 0.65));
  targets.push(makeTarget(18.2, 3.65, 'blue'));
  blocks.push(makeBeam(18.2, 5.6, 3.6, 0.28, 'stone'));
  blocks.push(makeCol(18.2, 5.88, 0.38, 1.4, 'wood'));
  targets.push(makeTarget(18.2, 7.28, 'green'));
  blocks.push(makeBeam(18.2, 7.28, 2.2, 0.22, 'wood'));

  // Central Fortress (Plat 2, top = 4.0)
  // Tier 1: Armored Sub-Bunker
  blocks.push(makeBlock(10.8, 4.0, 0.8, 0.6, 'metal'));
  blocks.push(makeBlock(12.8, 4.0, 0.8, 0.6, 'stone'));
  blocks.push(makeBlock(14.8, 4.0, 0.8, 0.6, 'metal'));
  blocks.push(makeCol(10.8, 4.6, 0.48, 2.0, 'metal'));
  blocks.push(makeCol(12.8, 4.6, 0.44, 2.0, 'stone'));
  blocks.push(makeCol(14.8, 4.6, 0.48, 2.0, 'metal'));
  blocks.push(makeBlock(11.8, 4.0, 0.7, 0.7, 'stone'));
  blocks.push(makeBlock(13.8, 4.0, 0.7, 0.7, 'stone'));
  targets.push(makeTarget(11.8, 4.7, 'gold'));
  targets.push(makeTarget(13.8, 4.7, 'blue'));
  blocks.push(makeBeam(12.8, 6.6, 5.2, 0.36, 'metal'));

  // Cross-Bridges connecting Flanks to Central Fortress
  blocks.push(makeBeam(9.5, 5.6, 2.4, 0.24, 'stone'));
  blocks.push(makeBeam(16.1, 5.6, 2.4, 0.24, 'stone'));

  // Tier 2: Emperor's Throne Keep
  blocks.push(makeCol(11.4, 6.96, 0.46, 2.2, 'stone'));
  blocks.push(makeCol(14.2, 6.96, 0.46, 2.2, 'stone'));
  blocks.push(makeBlock(12.8, 6.96, 1.2, 0.8, 'metal'));
  // Emperor Boss Target!
  targets.push(makeTarget(12.8, 7.76, 'boss', true, 0.65));
  blocks.push(makeBeam(12.8, 9.16, 4.0, 0.3, 'stone'));

  // Tier 3: High Spire Crown
  blocks.push(makeBlock(12.1, 9.46, 0.6, 0.6, 'wood'));
  blocks.push(makeBlock(13.5, 9.46, 0.6, 0.6, 'wood'));
  blocks.push(makeCol(12.1, 10.06, 0.38, 1.4, 'wood'));
  blocks.push(makeCol(13.5, 10.06, 0.38, 1.4, 'wood'));
  targets.push(makeTarget(12.8, 9.46, 'pink'));
  blocks.push(makeBeam(12.8, 11.46, 2.6, 0.24, 'metal'));
  blocks.push(makeBlock(12.8, 11.7, 0.8, 0.8, 'stone'));
  targets.push(makeTarget(12.8, 12.5, 'gold'));

  return {
    id: 20,
    name: "Emperor's Iron Fortress",
    zone: "Crown Summit",
    icon: "👑",
    difficulty: "Imperial Challenge Boss",
    description: "CHALLENGE LEVEL 20: A grand volcanic fortress featuring a tri-pylon defense network, multi-tiered stone bastions, and the armored Emperor Throne Keep.",
    coinReward: 320,
    birds: ["vortex", "heavy", "fire", "split", "speed", "heavy"],
    platforms: plats,
    blocks,
    targets
  };
}
