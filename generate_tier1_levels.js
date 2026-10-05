import { makePlat, makeCol, makeBeam, makeBlock, makeTnt, makeCoin, makeTarget } from './level_builder_helpers.js';

export function getTier1Levels() {
  const levels = [];

  // =========================================================================
  // LEVEL 30: Colossus of Sparks (Challenge Level 30)
  // Concept: Titanic Dual-Straddling Automaton with Armored Knee Braces,
  // Reactive Core Blast Vault, Shoulder Missile Pods, and Armored Crown Citadel.
  // =========================================================================
  {
    const plats = [
      makePlat(8.5, 1.2, 4.8, 2.4, 'volcanic'), // top = 2.4
      makePlat(16.5, 1.2, 4.8, 2.4, 'volcanic') // top = 2.4
    ];
    const blocks = [];
    const targets = [];

    // Left Foot & Shin Fortress (Plat 1, top = 2.4)
    blocks.push(makeBlock(6.8, 2.4, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(7.8, 2.4, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(9.2, 2.4, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(10.2, 2.4, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(7.2, 3.0, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(9.8, 3.0, 0.44, 2.0, 'metal'));
    blocks.push(makeBlock(8.5, 3.0, 1.0, 0.8, 'stone'));
    blocks.push(makeTnt(8.5, 3.8, 0.6));
    targets.push(makeTarget(8.5, 4.4, 'blue'));
    blocks.push(makeBeam(8.5, 5.0, 3.8, 0.32, 'metal')); // knee joint

    // Right Foot & Shin Fortress (Plat 2, top = 2.4)
    blocks.push(makeBlock(14.8, 2.4, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(15.8, 2.4, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(17.2, 2.4, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(18.2, 2.4, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(15.2, 3.0, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(17.8, 3.0, 0.44, 2.0, 'metal'));
    blocks.push(makeBlock(16.5, 3.0, 1.0, 0.8, 'stone'));
    blocks.push(makeTnt(16.5, 3.8, 0.6));
    targets.push(makeTarget(16.5, 4.4, 'pink'));
    blocks.push(makeBeam(16.5, 5.0, 3.8, 0.32, 'metal')); // knee joint

    // Thigh Struts & Kinetic Braces
    blocks.push(makeCol(8.5, 5.32, 0.48, 1.8, 'stone'));
    blocks.push(makeCol(7.2, 5.32, 0.4, 1.8, 'metal'));
    blocks.push(makeCol(16.5, 5.32, 0.48, 1.8, 'stone'));
    blocks.push(makeCol(17.8, 5.32, 0.4, 1.8, 'metal'));

    // Giant Pelvic Girder bridging across both legs over the abyss
    const pelvicY = 7.12;
    blocks.push(makeBeam(12.5, pelvicY, 11.6, 0.4, 'metal'));

    // Core Reactor Torso & Ribcage Chamber
    const torsoY = pelvicY + 0.4; // 7.52
    blocks.push(makeCol(10.0, torsoY, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(12.5, torsoY, 0.44, 2.2, 'metal')); // central spinal strut
    blocks.push(makeCol(15.0, torsoY, 0.48, 2.2, 'metal'));
    blocks.push(makeTnt(11.25, torsoY, 0.65)); // Heart reactor TNT
    blocks.push(makeTnt(13.75, torsoY, 0.65));
    blocks.push(makeCoin(12.5, torsoY + 1.0, 0.5));
    targets.push(makeTarget(11.25, torsoY + 0.65, 'gold'));
    targets.push(makeTarget(13.75, torsoY + 0.65, 'gold'));

    // Heavy Outer Shoulder Armor & Missile Pods
    blocks.push(makeCol(7.4, torsoY, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(17.6, torsoY, 0.42, 2.0, 'stone'));
    blocks.push(makeBlock(6.4, torsoY, 0.8, 1.4, 'metal'));
    blocks.push(makeBlock(18.6, torsoY, 0.8, 1.4, 'metal'));
    targets.push(makeTarget(7.4, torsoY + 2.0, 'pink'));
    targets.push(makeTarget(17.6, torsoY + 2.0, 'blue'));
    blocks.push(makeBeam(7.4, torsoY + 2.0, 2.4, 0.26, 'stone'));
    blocks.push(makeBeam(17.6, torsoY + 2.0, 2.4, 0.26, 'stone'));

    // Chest & Shoulder Deck Girders
    const chestY = torsoY + 2.2; // 9.72
    blocks.push(makeBeam(12.5, chestY, 6.6, 0.36, 'metal'));

    // Armored Head & Commander Sanctuary (Boss Chamber)
    const headY = chestY + 0.36; // 10.08
    blocks.push(makeCol(11.0, headY, 0.46, 2.0, 'metal'));
    blocks.push(makeCol(14.0, headY, 0.46, 2.0, 'metal'));
    blocks.push(makeBlock(12.5, headY, 1.2, 0.8, 'metal'));
    // Colossus Spark Grand Master Boss!
    targets.push(makeTarget(12.5, headY + 0.8, 'boss', true, 0.7));

    // Zenith Spire & Corona Finial
    blocks.push(makeBeam(12.5, headY + 2.0, 4.2, 0.3, 'stone'));
    blocks.push(makeCol(12.5, headY + 2.3, 0.36, 1.2, 'metal'));
    blocks.push(makeBlock(11.5, headY + 2.3, 0.6, 0.6, 'wood'));
    blocks.push(makeBlock(13.5, headY + 2.3, 0.6, 0.6, 'wood'));
    targets.push(makeTarget(12.5, headY + 3.5, 'gold'));

    levels.push({
      id: 30,
      name: "Colossus of Sparks",
      zone: "Storm Bastion",
      icon: "⚡",
      difficulty: "Grand Master Challenge Boss",
      description: "CHALLENGE LEVEL 30: A titanic spark-forged automaton straddling dual cliffs with dual reinforced legs, explosive core vaults, and heavy metal armor plating.",
      coinReward: 400,
      birds: ["lightning", "vortex", "heavy", "fire", "speed", "heavy"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 31: Quantum Overlook
  // Concept: Cantilevered observatory hanging over an abyss above a lower rampart
  // =========================================================================
  {
    const plats = [
      makePlat(7.2, 1.0, 4.4, 2.0, 'celestial'), // top = 2.0
      makePlat(14.8, 2.6, 6.8, 5.2, 'celestial') // top = 5.2
    ];
    const blocks = [];
    const targets = [];

    // Lower rampart (Plat 1, top = 2.0)
    blocks.push(makeBlock(5.6, 2.0, 0.8, 1.6, 'stone'));
    blocks.push(makeCol(6.6, 2.0, 0.4, 1.6, 'stone'));
    blocks.push(makeCol(8.8, 2.0, 0.4, 1.6, 'stone'));
    blocks.push(makeTnt(7.7, 2.0, 0.6));
    targets.push(makeTarget(7.7, 2.6, 'blue'));
    blocks.push(makeBeam(7.2, 3.6, 3.8, 0.28, 'stone'));
    blocks.push(makeCol(6.4, 3.88, 0.36, 1.2, 'wood'));
    blocks.push(makeCol(8.0, 3.88, 0.36, 1.2, 'wood'));
    targets.push(makeTarget(7.2, 3.88, 'pink'));
    blocks.push(makeBeam(7.2, 5.08, 2.6, 0.22, 'stone'));

    // High Observatory Cliff (Plat 2, top = 5.2)
    // Foundation pilings
    blocks.push(makeBeam(14.8, 5.2, 6.6, 0.34, 'metal'));
    blocks.push(makeCol(12.2, 5.54, 0.44, 1.8, 'metal'));
    blocks.push(makeCol(14.8, 5.54, 0.44, 1.8, 'stone'));
    blocks.push(makeCol(17.4, 5.54, 0.44, 1.8, 'stone'));
    blocks.push(makeBlock(13.5, 5.54, 0.8, 0.8, 'wood'));
    blocks.push(makeBlock(16.1, 5.54, 0.8, 0.8, 'wood'));
    targets.push(makeTarget(13.5, 6.34, 'blue'));
    targets.push(makeTarget(16.1, 6.34, 'gold'));

    // Mid deck beam with cantilever overhang extending left to x=10.2!
    blocks.push(makeBeam(14.2, 7.34, 7.8, 0.34, 'stone'));

    // Cantilever Balcony hanging over empty air
    blocks.push(makeCol(10.8, 7.68, 0.36, 1.6, 'glass'));
    blocks.push(makeCol(12.4, 7.68, 0.36, 1.6, 'glass'));
    targets.push(makeTarget(10.8, 9.28, 'pink'));
    blocks.push(makeBeam(11.6, 9.28, 2.4, 0.22, 'wood'));

    // Main Observatory Dome (x=13.5 to x=17.5)
    blocks.push(makeCol(14.0, 7.68, 0.42, 1.8, 'stone'));
    blocks.push(makeCol(16.8, 7.68, 0.42, 1.8, 'stone'));
    blocks.push(makeTnt(15.4, 7.68, 0.6));
    targets.push(makeTarget(15.4, 8.28, 'green'));
    blocks.push(makeBeam(15.4, 9.48, 4.2, 0.3, 'metal'));

    // Dome Glass Telescope Roof
    blocks.push(makeBlock(14.6, 9.78, 1.0, 0.8, 'glass'));
    blocks.push(makeBlock(16.2, 9.78, 1.0, 0.8, 'glass'));
    targets.push(makeTarget(15.4, 9.78, 'blue'));
    blocks.push(makeBeam(15.4, 10.58, 2.8, 0.24, 'stone'));
    targets.push(makeTarget(15.4, 10.82, 'gold'));

    levels.push({
      id: 31,
      name: "Quantum Overlook",
      zone: "Cyber Apex",
      icon: "🔭",
      difficulty: "Apex Master",
      description: "A cantilevered glass observatory suspended over an abyss with a lower bunker guard outpost.",
      coinReward: 260,
      birds: ["speed", "heavy", "lightning", "split", "fire", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 32: Nebula Core Redoubt
  // Concept: Triple stepped island pylons with central concentric redoubt
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.8, 2.8, 3.6, 'celestial'), // top = 3.6
      makePlat(12.6, 1.2, 5.0, 2.4, 'celestial'), // top = 2.4
      makePlat(18.2, 2.2, 2.8, 4.4, 'celestial')  // top = 4.4
    ];
    const blocks = [];
    const targets = [];

    // Left pylon (top = 3.6): sniper outpost
    blocks.push(makeCol(6.0, 3.6, 0.38, 1.8, 'stone'));
    blocks.push(makeCol(7.6, 3.6, 0.38, 1.8, 'stone'));
    targets.push(makeTarget(6.8, 3.6, 'pink'));
    blocks.push(makeBeam(6.8, 5.4, 2.4, 0.24, 'wood'));
    blocks.push(makeCol(6.8, 5.64, 0.34, 1.4, 'glass'));
    targets.push(makeTarget(6.8, 7.04, 'blue'));
    blocks.push(makeBeam(6.8, 7.04, 1.6, 0.2, 'stone'));

    // Right pylon (top = 4.4): high radar station
    blocks.push(makeCol(17.4, 4.4, 0.4, 2.0, 'metal'));
    blocks.push(makeCol(19.0, 4.4, 0.4, 2.0, 'metal'));
    targets.push(makeTarget(18.2, 4.4, 'gold'));
    blocks.push(makeBeam(18.2, 6.4, 2.4, 0.24, 'metal'));
    blocks.push(makeCol(18.2, 6.64, 0.34, 1.4, 'stone'));
    targets.push(makeTarget(18.2, 8.04, 'blue'));
    blocks.push(makeBeam(18.2, 8.04, 1.8, 0.2, 'metal'));

    // Central fortress (Plat 2, top = 2.4): 4-tier fortified keep
    // Ground floor: heavy metal blast pillars & containment
    blocks.push(makeCol(10.8, 2.4, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(14.4, 2.4, 0.46, 2.2, 'metal'));
    blocks.push(makeBlock(12.6, 2.4, 1.2, 0.8, 'stone'));
    blocks.push(makeTnt(11.7, 2.4, 0.6));
    blocks.push(makeTnt(13.5, 2.4, 0.6));
    targets.push(makeTarget(11.7, 3.0, 'green'));
    targets.push(makeTarget(13.5, 3.0, 'pink'));
    blocks.push(makeBeam(12.6, 4.6, 4.6, 0.34, 'metal')); // Tier 1 deck

    // Tier 2: Glass battery cell with TNT core
    blocks.push(makeCol(11.2, 4.94, 0.4, 1.8, 'glass'));
    blocks.push(makeCol(14.0, 4.94, 0.4, 1.8, 'glass'));
    blocks.push(makeBlock(12.6, 4.94, 1.0, 1.0, 'wood'));
    targets.push(makeTarget(12.6, 5.94, 'gold'));
    blocks.push(makeBeam(12.6, 6.74, 3.8, 0.3, 'stone')); // Tier 2 deck

    // Tier 3: Stone watch-chamber
    blocks.push(makeCol(11.8, 7.04, 0.38, 1.6, 'stone'));
    blocks.push(makeCol(13.4, 7.04, 0.38, 1.6, 'stone'));
    targets.push(makeTarget(12.6, 7.04, 'pink'));
    blocks.push(makeBeam(12.6, 8.64, 2.8, 0.24, 'stone'));

    // Tier 4: Apex spire
    blocks.push(makeBlock(12.6, 8.88, 1.0, 0.8, 'metal'));
    targets.push(makeTarget(12.6, 9.68, 'blue'));

    levels.push({
      id: 32,
      name: "Nebula Core Redoubt",
      zone: "Cyber Apex",
      icon: "🌌",
      difficulty: "Apex Master",
      description: "Three stepped island pylons protecting a multi-tier central energy redoubt with explosive glass batteries.",
      coinReward: 270,
      birds: ["split", "fire", "vortex", "heavy", "speed", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 33: Astral Vault
  // Concept: Heavy brutalist treasury bank with 3 vault cells and rooftop towers
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.5, 13.0, 3.0, 'stone') // top = 3.0
    ];
    const blocks = [];
    const targets = [];

    // Ground floor: 4 massive columns forming 3 secure vault chambers
    blocks.push(makeCol(7.2, 3.0, 0.52, 2.4, 'metal'));
    blocks.push(makeCol(10.7, 3.0, 0.48, 2.4, 'stone'));
    blocks.push(makeCol(14.3, 3.0, 0.48, 2.4, 'stone'));
    blocks.push(makeCol(17.8, 3.0, 0.52, 2.4, 'metal'));

    // Vault contents & partition walls
    blocks.push(makeBlock(8.95, 3.0, 0.8, 0.8, 'stone'));
    targets.push(makeTarget(8.95, 3.8, 'blue'));
    blocks.push(makeTnt(12.5, 3.0, 0.6));
    blocks.push(makeCoin(11.6, 3.0, 0.5));
    blocks.push(makeCoin(13.4, 3.0, 0.5));
    targets.push(makeTarget(12.5, 3.6, 'gold'));
    blocks.push(makeBlock(16.05, 3.0, 0.8, 0.8, 'stone'));
    targets.push(makeTarget(16.05, 3.8, 'pink'));

    // Massive continuous stone floor slab spanning all 3 vaults
    blocks.push(makeBeam(12.5, 5.4, 11.8, 0.38, 'metal'));

    // Second floor: Upper bank gallery
    blocks.push(makeCol(8.2, 5.78, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(11.2, 5.78, 0.4, 2.0, 'glass'));
    blocks.push(makeCol(13.8, 5.78, 0.4, 2.0, 'glass'));
    blocks.push(makeCol(16.8, 5.78, 0.44, 2.0, 'stone'));
    blocks.push(makeBlock(9.7, 5.78, 0.8, 0.8, 'wood'));
    blocks.push(makeBlock(15.3, 5.78, 0.8, 0.8, 'wood'));

    targets.push(makeTarget(9.7, 6.58, 'green'));
    targets.push(makeTarget(12.5, 5.78, 'blue'));
    targets.push(makeTarget(15.3, 6.58, 'pink'));

    // Upper ceiling beam
    blocks.push(makeBeam(12.5, 7.78, 10.0, 0.34, 'stone'));

    // Third floor: Twin parapet watchtowers
    blocks.push(makeCol(8.2, 8.12, 0.4, 1.6, 'stone'));
    blocks.push(makeCol(10.0, 8.12, 0.4, 1.6, 'stone'));
    targets.push(makeTarget(9.1, 8.12, 'blue'));
    blocks.push(makeBeam(9.1, 9.72, 2.6, 0.24, 'stone'));

    blocks.push(makeCol(15.0, 8.12, 0.4, 1.6, 'stone'));
    blocks.push(makeCol(16.8, 8.12, 0.4, 1.6, 'stone'));
    targets.push(makeTarget(15.9, 8.12, 'gold'));
    blocks.push(makeBeam(15.9, 9.72, 2.6, 0.24, 'stone'));

    levels.push({
      id: 33,
      name: "Astral Vault",
      zone: "Cyber Apex",
      icon: "💎",
      difficulty: "Apex Master",
      description: "A heavily fortified brutalist treasury bank with three reinforced subterranean vaults and twin battle towers.",
      coinReward: 280,
      birds: ["heavy", "speed", "lightning", "fire", "split", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 34: Sky Empress Bastion
  // Concept: 3-tiered imperial Asian pagoda palace with cantilevered curved eaves
  // =========================================================================
  {
    const plats = [
      makePlat(8.2, 1.4, 5.0, 2.8, 'celestial'),  // top = 2.8
      makePlat(15.5, 2.2, 6.2, 4.4, 'celestial')  // top = 4.4
    ];
    const blocks = [];
    const targets = [];

    // Gatehouse on Plat 1 (top = 2.8)
    blocks.push(makeCol(6.4, 2.8, 0.4, 2.0, 'wood'));
    blocks.push(makeCol(10.0, 2.8, 0.4, 2.0, 'wood'));
    blocks.push(makeCol(8.2, 2.8, 0.36, 2.0, 'glass'));
    blocks.push(makeBlock(7.3, 2.8, 0.6, 0.8, 'wood'));
    blocks.push(makeBlock(9.1, 2.8, 0.6, 0.8, 'wood'));
    targets.push(makeTarget(7.3, 3.6, 'blue'));
    targets.push(makeTarget(9.1, 3.6, 'pink'));
    blocks.push(makeBeam(8.2, 4.8, 4.6, 0.28, 'wood')); // Flared eave
    blocks.push(makeBlock(8.2, 5.08, 1.6, 0.6, 'stone'));
    targets.push(makeTarget(8.2, 5.68, 'gold'));

    // High Pagoda Palace on Plat 2 (top = 4.4)
    // Tier 1 (Base temple)
    blocks.push(makeCol(13.0, 4.4, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(15.5, 4.4, 0.42, 2.2, 'wood'));
    blocks.push(makeCol(18.0, 4.4, 0.46, 2.2, 'stone'));
    blocks.push(makeTnt(14.25, 4.4, 0.6));
    targets.push(makeTarget(14.25, 5.0, 'blue'));
    targets.push(makeTarget(16.75, 4.4, 'green'));
    blocks.push(makeCoin(15.5, 4.4, 0.5));
    // Tier 1 Flared Eave Roof (wide overhang: w=6.8)
    blocks.push(makeBeam(15.5, 6.6, 6.8, 0.32, 'wood'));

    // Tier 2 (Middle gallery)
    blocks.push(makeCol(13.8, 6.92, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(17.2, 6.92, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(15.5, 6.92, 0.36, 2.0, 'glass'));
    targets.push(makeTarget(14.65, 6.92, 'pink'));
    targets.push(makeTarget(16.35, 6.92, 'gold'));
    // Tier 2 Flared Eave Roof (w=5.2)
    blocks.push(makeBeam(15.5, 8.92, 5.2, 0.3, 'wood'));

    // Tier 3 (Empress Sanctum Apex)
    blocks.push(makeCol(14.5, 9.22, 0.38, 1.6, 'metal'));
    blocks.push(makeCol(16.5, 9.22, 0.38, 1.6, 'metal'));
    targets.push(makeTarget(15.5, 9.22, 'blue'));
    blocks.push(makeBeam(15.5, 10.82, 3.2, 0.26, 'metal'));
    blocks.push(makeBlock(15.5, 11.08, 0.8, 0.8, 'stone'));
    targets.push(makeTarget(15.5, 11.88, 'pink'));

    levels.push({
      id: 34,
      name: "Sky Empress Bastion",
      zone: "Cyber Apex",
      icon: "⛩️",
      difficulty: "Imperial Apex",
      description: "An elegant three-tiered imperial pagoda palace featuring cantilevered eaves, delicate paper walls, and flying buttresses.",
      coinReward: 290,
      birds: ["speed", "split", "vortex", "heavy", "fire", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 35: Supreme Grand Apex (Apex Emperor Boss)
  // Concept: Grand triple-citadel with dual suspension bridges and crowned keep
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.5, 3.8, 3.0, 'volcanic'), // top = 3.0
      makePlat(12.8, 2.4, 5.4, 4.8, 'volcanic'), // top = 4.8
      makePlat(18.5, 1.5, 3.8, 3.0, 'volcanic')  // top = 3.0
    ];
    const blocks = [];
    const targets = [];

    // West Tower on Plat 1 (top = 3.0)
    blocks.push(makeBlock(5.6, 3.0, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(8.0, 3.0, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(5.6, 3.6, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(8.0, 3.6, 0.42, 2.0, 'stone'));
    targets.push(makeTarget(6.8, 3.6, 'blue'));
    blocks.push(makeBeam(6.8, 5.6, 3.4, 0.26, 'stone'));
    blocks.push(makeCol(6.0, 5.86, 0.38, 1.6, 'wood'));
    blocks.push(makeCol(7.6, 5.86, 0.38, 1.6, 'wood'));
    targets.push(makeTarget(6.8, 5.86, 'pink'));
    blocks.push(makeBeam(6.8, 7.46, 2.6, 0.22, 'stone'));
    blocks.push(makeCol(6.8, 7.68, 0.34, 1.2, 'glass'));
    targets.push(makeTarget(6.8, 8.88, 'gold'));

    // East Tower on Plat 3 (top = 3.0)
    blocks.push(makeBlock(17.3, 3.0, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(19.7, 3.0, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(17.3, 3.6, 0.42, 2.0, 'metal'));
    blocks.push(makeCol(19.7, 3.6, 0.42, 2.0, 'metal'));
    targets.push(makeTarget(18.5, 3.6, 'green'));
    blocks.push(makeBeam(18.5, 5.6, 3.4, 0.26, 'metal'));
    blocks.push(makeCol(17.7, 5.86, 0.38, 1.6, 'stone'));
    blocks.push(makeCol(19.3, 5.86, 0.38, 1.6, 'stone'));
    targets.push(makeTarget(18.5, 5.86, 'pink'));
    blocks.push(makeBeam(18.5, 7.46, 2.6, 0.22, 'stone'));
    blocks.push(makeCol(18.5, 7.68, 0.34, 1.2, 'glass'));
    targets.push(makeTarget(18.5, 8.88, 'blue'));

    // Central Grand Keep on Plat 2 (top = 4.8)
    blocks.push(makeCol(10.6, 4.8, 0.48, 2.4, 'metal'));
    blocks.push(makeCol(15.0, 4.8, 0.48, 2.4, 'metal'));
    blocks.push(makeTnt(12.8, 4.8, 0.6));
    blocks.push(makeCoin(11.7, 4.8, 0.5));
    blocks.push(makeCoin(13.9, 4.8, 0.5));
    targets.push(makeTarget(12.8, 5.4, 'gold'));

    // Dual Suspension Bridges connecting Center Keep to West & East Towers!
    blocks.push(makeBeam(9.3, 5.6, 3.6, 0.24, 'wood'));
    blocks.push(makeBeam(16.3, 5.6, 3.6, 0.24, 'wood'));

    // Center Tier 2 Deck
    blocks.push(makeBeam(12.8, 7.2, 5.2, 0.36, 'metal'));

    // Center Throne Room (Boss Chamber)
    blocks.push(makeCol(11.0, 7.56, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(14.6, 7.56, 0.46, 2.2, 'stone'));
    blocks.push(makeBlock(12.8, 7.56, 1.2, 1.0, 'wood'));
    // Supreme Apex Boss!
    targets.push(makeTarget(12.8, 8.56, 'boss', true, 0.68));

    // Royal Canopy & Spire
    blocks.push(makeBeam(12.8, 9.76, 4.4, 0.32, 'stone'));
    blocks.push(makeBlock(12.8, 10.08, 1.2, 0.8, 'metal'));
    targets.push(makeTarget(12.8, 10.88, 'gold'));

    levels.push({
      id: 35,
      name: "Supreme Grand Apex",
      zone: "Cyber Apex",
      icon: "👑",
      difficulty: "Apex Emperor Boss",
      description: "The imperial citadel connecting twin defensive watchtowers across suspension bridges to the Emperor's sky throne.",
      coinReward: 320,
      birds: ["heavy", "fire", "lightning", "vortex", "speed", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // Call 36-50 builder
  addLevels36to50(levels);

  return levels;
}

function addLevels36to50(levels) {
  // =========================================================================
  // LEVEL 36: Chrono Horizon
  // Concept: Giant Hourglass Clocktower with narrow bottleneck waist
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.4, 11.0, 2.8, 'volcanic') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Base buttresses
    blocks.push(makeBlock(7.6, 2.8, 0.8, 0.8, 'stone'));
    blocks.push(makeBlock(17.4, 2.8, 0.8, 0.8, 'stone'));
    blocks.push(makeCol(8.8, 2.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(11.2, 2.8, 0.42, 2.2, 'stone'));
    blocks.push(makeCol(13.8, 2.8, 0.42, 2.2, 'stone'));
    blocks.push(makeCol(16.2, 2.8, 0.44, 2.2, 'stone'));
    blocks.push(makeTnt(12.5, 2.8, 0.6));
    targets.push(makeTarget(10.0, 2.8, 'blue'));
    targets.push(makeTarget(12.5, 3.4, 'pink'));
    targets.push(makeTarget(15.0, 2.8, 'green'));
    blocks.push(makeBeam(12.5, 5.0, 9.4, 0.34, 'metal')); // Lower deck

    // Inward stepped waist columns
    blocks.push(makeCol(10.2, 5.34, 0.42, 1.8, 'wood'));
    blocks.push(makeCol(14.8, 5.34, 0.42, 1.8, 'wood'));
    targets.push(makeTarget(12.5, 5.34, 'gold'));
    blocks.push(makeBeam(12.5, 7.14, 5.6, 0.3, 'stone'));

    // Critical Bottleneck Waist: 2 narrow glass pillars
    blocks.push(makeCol(11.6, 7.44, 0.38, 1.6, 'glass'));
    blocks.push(makeCol(13.4, 7.44, 0.38, 1.6, 'glass'));
    targets.push(makeTarget(12.5, 7.44, 'blue'));

    // Waist Collar Beam
    blocks.push(makeBeam(12.5, 9.04, 4.8, 0.3, 'metal'));

    // Upper Flared Reservoir
    blocks.push(makeCol(8.8, 9.34, 0.44, 1.8, 'stone'));
    blocks.push(makeCol(11.0, 9.34, 0.4, 1.8, 'wood'));
    blocks.push(makeCol(14.0, 9.34, 0.4, 1.8, 'wood'));
    blocks.push(makeCol(16.2, 9.34, 0.44, 1.8, 'stone'));
    blocks.push(makeBlock(12.5, 9.34, 1.4, 1.0, 'metal')); // Heavy weight!
    targets.push(makeTarget(9.9, 9.34, 'pink'));
    targets.push(makeTarget(15.1, 9.34, 'gold'));
    blocks.push(makeBeam(12.5, 11.14, 8.8, 0.34, 'stone'));
    targets.push(makeTarget(12.5, 11.48, 'blue'));

    levels.push({
      id: 36,
      name: "Chrono Horizon",
      zone: "Chrono Void",
      icon: "⏳",
      difficulty: "Singularity Master",
      description: "An immense hourglass clocktower balanced upon a fragile glass bottleneck holding a massive stone reservoir.",
      coinReward: 330,
      birds: ["speed", "heavy", "vortex", "fire", "split", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 37: Temporal Rift Keep
  // Concept: Dual cliff fortresses connected by a long suspension bridge
  // =========================================================================
  {
    const plats = [
      makePlat(7.5, 2.0, 4.6, 4.0, 'cliff'),  // top = 4.0
      makePlat(17.5, 2.0, 4.6, 4.0, 'cliff') // top = 4.0
    ];
    const blocks = [];
    const targets = [];

    // West Cliff Keep (Plat 1, top = 4.0)
    blocks.push(makeBlock(5.6, 4.0, 0.8, 0.8, 'stone'));
    blocks.push(makeCol(6.6, 4.0, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(9.0, 4.0, 0.44, 2.2, 'stone'));
    blocks.push(makeTnt(7.8, 4.0, 0.6));
    targets.push(makeTarget(7.8, 4.6, 'blue'));
    blocks.push(makeBeam(7.8, 6.2, 4.0, 0.3, 'stone'));
    blocks.push(makeCol(6.8, 6.5, 0.38, 1.6, 'wood'));
    blocks.push(makeCol(8.8, 6.5, 0.38, 1.6, 'wood'));
    targets.push(makeTarget(7.8, 6.5, 'pink'));
    blocks.push(makeBeam(7.8, 8.1, 3.0, 0.24, 'stone'));
    targets.push(makeTarget(7.8, 8.34, 'gold'));

    // East Cliff Keep (Plat 2, top = 4.0)
    blocks.push(makeBlock(19.4, 4.0, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(16.0, 4.0, 0.44, 2.2, 'metal'));
    blocks.push(makeCol(18.4, 4.0, 0.44, 2.2, 'metal'));
    blocks.push(makeCoin(17.2, 4.0, 0.5));
    targets.push(makeTarget(17.2, 4.5, 'green'));
    blocks.push(makeBeam(17.2, 6.2, 4.0, 0.3, 'metal'));
    blocks.push(makeCol(16.2, 6.5, 0.38, 1.6, 'stone'));
    blocks.push(makeCol(18.2, 6.5, 0.38, 1.6, 'stone'));
    targets.push(makeTarget(17.2, 6.5, 'blue'));
    blocks.push(makeBeam(17.2, 8.1, 3.0, 0.24, 'stone'));
    targets.push(makeTarget(17.2, 8.34, 'gold'));

    // Suspension Bridge spanning the abyss chasm
    blocks.push(makeBeam(12.5, 4.0, 6.6, 0.26, 'wood'));
    targets.push(makeTarget(11.2, 4.26, 'blue'));
    targets.push(makeTarget(13.8, 4.26, 'pink'));
    // Suspension posts & cables
    blocks.push(makeCol(9.8, 4.26, 0.3, 1.8, 'wood'));
    blocks.push(makeCol(15.2, 4.26, 0.3, 1.8, 'wood'));
    blocks.push(makeBeam(12.5, 6.06, 6.2, 0.2, 'glass'));

    levels.push({
      id: 37,
      name: "Temporal Rift Keep",
      zone: "Chrono Void",
      icon: "🌉",
      difficulty: "Singularity Master",
      description: "Dual sheer cliff castles linked by a vulnerable wooden suspension bridge hung over a bottomless chasm.",
      coinReward: 340,
      birds: ["split", "fire", "lightning", "heavy", "vortex", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 38: Quantum Core Redoubt
  // Concept: Concentric tiered bunker with alternating glass viewports & blast doors
  // =========================================================================
  {
    const plats = [
      makePlat(8.5, 1.4, 5.5, 2.8, 'volcanic'), // top = 2.8
      makePlat(16.2, 1.4, 6.5, 2.8, 'volcanic') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Forward outpost on Plat 1: blast buffer with TNT
    blocks.push(makeBlock(6.5, 2.8, 0.8, 2.2, 'metal'));
    blocks.push(makeCol(8.0, 2.8, 0.4, 2.2, 'glass'));
    blocks.push(makeCol(10.5, 2.8, 0.44, 2.2, 'stone'));
    blocks.push(makeTnt(9.2, 2.8, 0.6));
    targets.push(makeTarget(9.2, 3.4, 'blue'));
    blocks.push(makeBeam(8.5, 5.0, 5.2, 0.32, 'stone'));
    blocks.push(makeBlock(8.5, 5.32, 1.4, 0.8, 'wood'));
    targets.push(makeTarget(8.5, 6.12, 'pink'));

    // Quantum Core Bunker on Plat 2: 3-tier reinforced citadel
    blocks.push(makeCol(13.6, 2.8, 0.48, 2.4, 'metal'));
    blocks.push(makeCol(16.2, 2.8, 0.44, 2.4, 'stone'));
    blocks.push(makeCol(18.8, 2.8, 0.48, 2.4, 'metal'));
    blocks.push(makeTnt(14.9, 2.8, 0.6));
    targets.push(makeTarget(14.9, 3.4, 'gold'));
    targets.push(makeTarget(17.5, 2.8, 'green'));
    blocks.push(makeBeam(16.2, 5.2, 6.0, 0.36, 'metal'));

    // Tier 2: Shielded reactor chamber
    blocks.push(makeCol(14.4, 5.56, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(18.0, 5.56, 0.42, 2.0, 'stone'));
    blocks.push(makeBlock(16.2, 5.56, 1.2, 1.2, 'glass'));
    targets.push(makeTarget(16.2, 6.76, 'pink'));
    blocks.push(makeBeam(16.2, 7.56, 4.6, 0.3, 'stone'));

    // Tier 3: Sniper cupola
    blocks.push(makeCol(15.2, 7.86, 0.38, 1.4, 'wood'));
    blocks.push(makeCol(17.2, 7.86, 0.38, 1.4, 'wood'));
    targets.push(makeTarget(16.2, 7.86, 'blue'));
    blocks.push(makeBeam(16.2, 9.26, 2.8, 0.24, 'stone'));

    levels.push({
      id: 38,
      name: "Quantum Core Redoubt",
      zone: "Chrono Void",
      icon: "🛡️",
      difficulty: "Singularity Master",
      description: "A concentric subterranean bunker complex shielded by forward blast baffles and sliding blast doors.",
      coinReward: 350,
      birds: ["heavy", "speed", "vortex", "fire", "lightning", "split"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 39: Dimensional Vault
  // Concept: 5-tiered ancient stepped Ziggurat with ascending terraces
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.2, 12.5, 2.4, 'stone') // top = 2.4
    ];
    const blocks = [];
    const targets = [];

    // Tier 1 (Base, width 11.5)
    blocks.push(makeCol(7.2, 2.4, 0.48, 2.0, 'stone'));
    blocks.push(makeCol(9.8, 2.4, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(12.5, 2.4, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(15.2, 2.4, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(17.8, 2.4, 0.48, 2.0, 'stone'));
    targets.push(makeTarget(8.5, 2.4, 'blue'));
    targets.push(makeTarget(11.15, 2.4, 'pink'));
    targets.push(makeTarget(13.85, 2.4, 'green'));
    targets.push(makeTarget(16.5, 2.4, 'blue'));
    blocks.push(makeBeam(12.5, 4.4, 11.6, 0.34, 'stone'));

    // Tier 2 (width 9.4)
    blocks.push(makeCol(8.4, 4.74, 0.42, 1.8, 'stone'));
    blocks.push(makeCol(11.1, 4.74, 0.4, 1.8, 'wood'));
    blocks.push(makeCol(13.9, 4.74, 0.4, 1.8, 'wood'));
    blocks.push(makeCol(16.6, 4.74, 0.42, 1.8, 'stone'));
    blocks.push(makeTnt(12.5, 4.74, 0.6));
    targets.push(makeTarget(9.75, 4.74, 'gold'));
    targets.push(makeTarget(15.25, 4.74, 'pink'));
    blocks.push(makeBeam(12.5, 6.54, 9.6, 0.32, 'stone'));

    // Tier 3 (width 7.2)
    blocks.push(makeCol(9.6, 6.86, 0.4, 1.6, 'metal'));
    blocks.push(makeCol(12.5, 6.86, 0.38, 1.6, 'glass'));
    blocks.push(makeCol(15.4, 6.86, 0.4, 1.6, 'metal'));
    targets.push(makeTarget(11.05, 6.86, 'blue'));
    targets.push(makeTarget(13.95, 6.86, 'gold'));
    blocks.push(makeBeam(12.5, 8.46, 7.2, 0.3, 'stone'));

    // Tier 4 (width 4.8)
    blocks.push(makeCol(11.0, 8.76, 0.38, 1.4, 'stone'));
    blocks.push(makeCol(14.0, 8.76, 0.38, 1.4, 'stone'));
    targets.push(makeTarget(12.5, 8.76, 'pink'));
    blocks.push(makeBeam(12.5, 10.16, 4.6, 0.26, 'metal'));

    // Tier 5: Summit Shrine
    blocks.push(makeBlock(12.5, 10.42, 1.2, 0.8, 'glass'));
    targets.push(makeTarget(12.5, 11.22, 'gold'));

    levels.push({
      id: 39,
      name: "Dimensional Vault",
      zone: "Chrono Void",
      icon: "🏛️",
      difficulty: "Singularity Master",
      description: "A monumental five-tiered Mesopotamian Ziggurat featuring stepped ascending terraces and a summit high altar.",
      coinReward: 360,
      birds: ["speed", "split", "fire", "lightning", "heavy", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 40: Void Airship Bastion (Singularity Boss)
  // Concept: Giant war zeppelin airship docked on 3 drydock mooring pylons
  // =========================================================================
  {
    const plats = [
      makePlat(7.0, 1.4, 3.4, 2.8, 'volcanic'),  // top = 2.8
      makePlat(12.5, 1.0, 4.2, 2.0, 'volcanic'), // top = 2.0
      makePlat(18.0, 1.4, 3.4, 2.8, 'volcanic')  // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Mooring Pylon 1 (left: x=7.0, top=2.8) - 2-tier reinforced watchtower
    blocks.push(makeBlock(5.8, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(8.2, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(5.8, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(8.2, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeBlock(7.0, 3.4, 0.8, 0.6, 'stone'));
    targets.push(makeTarget(7.0, 4.0, 'blue'));
    blocks.push(makeBeam(7.0, 5.4, 3.2, 0.28, 'stone'));
    blocks.push(makeCol(7.0, 5.68, 0.38, 1.4, 'metal'));
    targets.push(makeTarget(7.0, 7.08, 'pink'));
    blocks.push(makeBeam(7.0, 7.08, 2.0, 0.22, 'stone'));

    // Central Heavy Dock Support (center: x=12.5, top=2.0)
    blocks.push(makeBlock(10.8, 2.0, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(14.2, 2.0, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(10.8, 2.6, 0.48, 2.8, 'metal'));
    blocks.push(makeCol(14.2, 2.6, 0.48, 2.8, 'metal'));
    blocks.push(makeCol(12.5, 2.0, 0.44, 3.4, 'stone'));
    blocks.push(makeTnt(11.6, 2.0, 0.65));
    blocks.push(makeTnt(13.4, 2.0, 0.65));
    targets.push(makeTarget(11.6, 2.65, 'gold'));
    targets.push(makeTarget(13.4, 2.65, 'gold'));
    blocks.push(makeBeam(12.5, 5.4, 4.4, 0.32, 'metal'));

    // Mooring Pylon 3 (right: x=18.0, top=2.8) - 2-tier reinforced watchtower
    blocks.push(makeBlock(16.8, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(19.2, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(16.8, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(19.2, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeBlock(18.0, 3.4, 0.8, 0.6, 'stone'));
    targets.push(makeTarget(18.0, 4.0, 'green'));
    blocks.push(makeBeam(18.0, 5.4, 3.2, 0.28, 'stone'));
    blocks.push(makeCol(18.0, 5.68, 0.38, 1.4, 'metal'));
    targets.push(makeTarget(18.0, 7.08, 'blue'));
    blocks.push(makeBeam(18.0, 7.08, 2.0, 0.22, 'stone'));

    // Airship Armored Keel Girder (spans 13.6 units at y=7.3!)
    const keelY = 7.3;
    blocks.push(makeBeam(12.5, keelY, 13.6, 0.4, 'metal'));

    // Cargo Bay, Bomb Bays & Armored Ribs (on keel)
    blocks.push(makeBlock(6.2, keelY + 0.4, 1.2, 1.4, 'metal')); // Front Armored Ram Prow
    blocks.push(makeBlock(18.8, keelY + 0.4, 1.2, 1.4, 'metal')); // Rear Thruster Cowling
    blocks.push(makeCol(8.0, keelY + 0.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(10.2, keelY + 0.4, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(12.5, keelY + 0.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(14.8, keelY + 0.4, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(17.0, keelY + 0.4, 0.44, 2.0, 'metal'));

    blocks.push(makeTnt(9.1, keelY + 0.4, 0.65));
    blocks.push(makeTnt(15.9, keelY + 0.4, 0.65));
    targets.push(makeTarget(9.1, keelY + 1.05, 'gold'));
    targets.push(makeTarget(15.9, keelY + 1.05, 'gold'));

    // Mid-Deck Ceiling Beam
    const midDeckY = keelY + 0.4 + 2.0; // 9.7
    blocks.push(makeBeam(12.5, midDeckY, 12.0, 0.36, 'metal'));

    // Flank Mid-Deck Balconies
    blocks.push(makeBlock(7.2, midDeckY + 0.36, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(17.8, midDeckY + 0.36, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(7.2, midDeckY + 0.96, 0.36, 1.4, 'metal'));
    blocks.push(makeCol(17.8, midDeckY + 0.96, 0.36, 1.4, 'metal'));

    // Upper Bridge Citadel / Commander Sanctuary (Boss Chamber)
    blocks.push(makeCol(10.8, midDeckY + 0.36, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(14.2, midDeckY + 0.36, 0.46, 2.2, 'metal'));
    blocks.push(makeBlock(12.5, midDeckY + 0.36, 1.2, 0.8, 'metal'));
    // Void Commander Grand Challenge Boss!
    targets.push(makeTarget(12.5, midDeckY + 1.16, 'boss', true, 0.72));

    // Bridge Roof Armor, Radar Arrays & Spire
    blocks.push(makeBeam(12.5, midDeckY + 2.56, 4.8, 0.3, 'stone'));
    blocks.push(makeCol(11.8, midDeckY + 2.86, 0.36, 1.4, 'metal'));
    blocks.push(makeCol(13.2, midDeckY + 2.86, 0.36, 1.4, 'metal'));
    blocks.push(makeBlock(12.5, midDeckY + 2.86, 0.8, 0.8, 'metal'));
    blocks.push(makeBeam(12.5, midDeckY + 4.26, 2.8, 0.24, 'metal'));
    blocks.push(makeCol(12.5, midDeckY + 4.5, 0.32, 1.0, 'metal'));
    targets.push(makeTarget(12.5, midDeckY + 5.5, 'pink'));

    levels.push({
      id: 40,
      name: "Void Airship Bastion",
      zone: "Chrono Void",
      icon: "🛸",
      difficulty: "Void Emperor Challenge Boss",
      description: "CHALLENGE LEVEL 40: A colossal armored sky dreadnought moored across three fortified watchtower pylons with multiple bomb bays, reinforced bulkhead armor, and the Void Commander bridge.",
      coinReward: 500,
      birds: ["fire", "heavy", "vortex", "lightning", "speed", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // Next batch 41-50
  addLevels41to50_v2(levels);
}

function addLevels41to50_v2(levels) {
  // =========================================================================
  // LEVEL 41: Phase Shift Colonnade
  // Concept: Classical Greek Parthenon temple with 6 columns & pediment
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.5, 12.0, 3.0, 'celestial') // top = 3.0
    ];
    const blocks = [];
    const targets = [];

    // Stepped plinth base
    blocks.push(makeBeam(12.5, 3.0, 11.6, 0.26, 'stone'));

    // 6 Tall Fluted Stone Columns (spaced from x=7.5 to x=17.5)
    const colXs = [7.5, 9.5, 11.5, 13.5, 15.5, 17.5];
    colXs.forEach(x => {
      blocks.push(makeCol(x, 3.26, 0.44, 2.4, 'stone'));
    });

    targets.push(makeTarget(8.5, 3.26, 'blue'));
    targets.push(makeTarget(10.5, 3.26, 'pink'));
    blocks.push(makeTnt(12.5, 3.26, 0.6));
    targets.push(makeTarget(12.5, 3.86, 'gold'));
    targets.push(makeTarget(14.5, 3.26, 'green'));
    targets.push(makeTarget(16.5, 3.26, 'blue'));

    // Continuous architrave beam (y = 5.66)
    blocks.push(makeBeam(12.5, 5.66, 11.6, 0.36, 'stone'));

    // Metope Frieze & Triglyphs (second tier)
    blocks.push(makeCol(8.5, 6.02, 0.4, 1.6, 'stone'));
    blocks.push(makeCol(11.0, 6.02, 0.38, 1.6, 'wood'));
    blocks.push(makeCol(14.0, 6.02, 0.38, 1.6, 'wood'));
    blocks.push(makeCol(16.5, 6.02, 0.4, 1.6, 'stone'));
    targets.push(makeTarget(9.75, 6.02, 'pink'));
    targets.push(makeTarget(15.25, 6.02, 'gold'));
    blocks.push(makeBeam(12.5, 7.62, 9.8, 0.32, 'stone'));

    // Triangular Pediment Roof
    blocks.push(makeBlock(10.2, 7.94, 2.2, 0.8, 'stone'));
    blocks.push(makeBlock(14.8, 7.94, 2.2, 0.8, 'stone'));
    blocks.push(makeBlock(12.5, 7.94, 1.8, 1.4, 'glass'));
    targets.push(makeTarget(12.5, 9.34, 'blue'));
    blocks.push(makeBeam(12.5, 9.34, 4.6, 0.28, 'stone'));
    targets.push(makeTarget(12.5, 9.62, 'gold'));

    levels.push({
      id: 41,
      name: "Phase Shift Colonnade",
      zone: "Chrono Void",
      icon: "🏛️",
      difficulty: "Chrono Legend",
      description: "A monumental classical Parthenon colonnade with six load-bearing stone pillars, architrave, and pediment.",
      coinReward: 410,
      birds: ["speed", "heavy", "lightning", "split", "vortex", "fire"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 42: Event Horizon Fortress
  // Concept: Asymmetrical cantilever gravity-balance fortress over a chasm
  // =========================================================================
  {
    const plats = [
      makePlat(8.0, 1.2, 4.4, 2.4, 'volcanic'), // top = 2.4
      makePlat(15.5, 2.4, 5.5, 4.8, 'volcanic') // top = 4.8
    ];
    const blocks = [];
    const targets = [];

    // Low bunker on Plat 1 (top = 2.4)
    blocks.push(makeBlock(6.4, 2.4, 0.8, 1.8, 'stone'));
    blocks.push(makeCol(7.8, 2.4, 0.42, 1.8, 'stone'));
    blocks.push(makeCol(9.6, 2.4, 0.42, 1.8, 'stone'));
    blocks.push(makeTnt(8.7, 2.4, 0.6));
    targets.push(makeTarget(8.7, 3.0, 'blue'));
    blocks.push(makeBeam(8.0, 4.2, 4.0, 0.28, 'stone'));
    targets.push(makeTarget(8.0, 4.48, 'pink'));

    // High Cantilevered Pivot Fortress on Plat 2 (top = 4.8)
    blocks.push(makeCol(13.8, 4.8, 0.52, 2.2, 'metal'));
    blocks.push(makeCol(17.2, 4.8, 0.52, 2.2, 'stone'));
    blocks.push(makeBlock(15.5, 4.8, 1.2, 1.0, 'wood'));
    targets.push(makeTarget(15.5, 5.8, 'gold'));

    // Huge 8.8-unit Cantilever Balance Beam pivoting at x=13.8!
    // Extends left to x=9.8 (hanging out into empty air over the gap!)
    blocks.push(makeBeam(14.2, 7.0, 8.8, 0.38, 'metal'));

    // Counterweight on the right (heavy metal & stone blocks)
    blocks.push(makeBlock(17.5, 7.38, 1.8, 1.2, 'metal'));
    blocks.push(makeBlock(17.5, 8.58, 1.6, 1.0, 'stone'));
    targets.push(makeTarget(17.5, 9.58, 'blue'));

    // Precarious perch on the overhanging left side
    blocks.push(makeCol(10.5, 7.38, 0.38, 1.6, 'glass'));
    blocks.push(makeCol(12.2, 7.38, 0.38, 1.6, 'glass'));
    targets.push(makeTarget(10.5, 8.98, 'pink'));
    blocks.push(makeBeam(11.35, 8.98, 2.6, 0.24, 'wood'));
    targets.push(makeTarget(11.35, 9.22, 'green'));

    levels.push({
      id: 42,
      name: "Event Horizon Fortress",
      zone: "Chrono Void",
      icon: "⚖️",
      difficulty: "Chrono Legend",
      description: "An asymmetric kinetic balance fortress extending a counterweighted cantilever beam far out over empty air.",
      coinReward: 420,
      birds: ["split", "fire", "heavy", "vortex", "lightning", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 43: Warp Lattice Citadel
  // Concept: Diamond / hexagonal crisscross lattice grid fortress
  // =========================================================================
  {
    const plats = [
      makePlat(8.8, 1.4, 5.2, 2.8, 'celestial'), // top = 2.8
      makePlat(16.2, 1.4, 5.2, 2.8, 'celestial') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Left Lattice Tower (on Plat 1)
    blocks.push(makeCol(7.0, 2.8, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(10.6, 2.8, 0.44, 2.0, 'metal'));
    blocks.push(makeTnt(8.8, 2.8, 0.6));
    targets.push(makeTarget(8.8, 3.4, 'blue'));
    blocks.push(makeBeam(8.8, 4.8, 4.4, 0.28, 'stone'));
    // Diamond crisscross tier
    blocks.push(makeCol(7.6, 5.08, 0.38, 1.8, 'glass'));
    blocks.push(makeCol(10.0, 5.08, 0.38, 1.8, 'glass'));
    targets.push(makeTarget(8.8, 5.08, 'pink'));
    blocks.push(makeBeam(8.8, 6.88, 3.6, 0.26, 'stone'));
    blocks.push(makeBlock(8.8, 7.14, 1.2, 0.8, 'wood'));
    targets.push(makeTarget(8.8, 7.94, 'gold'));

    // Right Lattice Tower (on Plat 2)
    blocks.push(makeCol(14.4, 2.8, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(18.0, 2.8, 0.44, 2.0, 'metal'));
    blocks.push(makeCoin(16.2, 2.8, 0.5));
    targets.push(makeTarget(16.2, 3.3, 'green'));
    blocks.push(makeBeam(16.2, 4.8, 4.4, 0.28, 'stone'));
    // Diamond crisscross tier
    blocks.push(makeCol(15.0, 5.08, 0.38, 1.8, 'glass'));
    blocks.push(makeCol(17.4, 5.08, 0.38, 1.8, 'glass'));
    targets.push(makeTarget(16.2, 5.08, 'pink'));
    blocks.push(makeBeam(16.2, 6.88, 3.6, 0.26, 'stone'));
    blocks.push(makeBlock(16.2, 7.14, 1.2, 0.8, 'metal'));
    targets.push(makeTarget(16.2, 7.94, 'blue'));

    // High Lattice Sky-Bridge connecting both towers (at y=6.88)
    blocks.push(makeBeam(12.5, 6.88, 5.4, 0.28, 'wood'));
    targets.push(makeTarget(12.5, 7.16, 'gold'));
    blocks.push(makeBlock(12.5, 8.0, 1.0, 0.8, 'glass'));

    levels.push({
      id: 43,
      name: "Warp Lattice Citadel",
      zone: "Chrono Void",
      icon: "🌐",
      difficulty: "Chrono Legend",
      description: "Interlocking geodesic lattice framework towers linked by a fragile skybridge over open airspace.",
      coinReward: 430,
      birds: ["heavy", "speed", "fire", "lightning", "split", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 44: Singularity Array
  // Concept: 3 parabolic deep-space radar antenna dishes on staggered pylons
  // =========================================================================
  {
    const plats = [
      makePlat(7.2, 1.2, 3.4, 2.4, 'volcanic'), // top = 2.4
      makePlat(12.5, 2.2, 4.0, 4.4, 'volcanic'), // top = 4.4
      makePlat(17.8, 1.4, 3.4, 2.8, 'volcanic')  // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Array Dish 1 (left pylon, top = 2.4)
    blocks.push(makeBlock(7.2, 2.4, 1.0, 0.6, 'stone'));
    blocks.push(makeCol(7.2, 3.0, 0.46, 2.0, 'metal'));
    blocks.push(makeBeam(7.2, 5.0, 3.2, 0.26, 'metal'));
    blocks.push(makeCol(5.8, 5.26, 0.34, 1.4, 'glass'));
    blocks.push(makeCol(8.6, 5.26, 0.34, 1.4, 'glass'));
    targets.push(makeTarget(7.2, 5.26, 'blue'));
    blocks.push(makeBeam(7.2, 6.66, 3.6, 0.22, 'wood'));
    targets.push(makeTarget(7.2, 6.88, 'pink'));

    // Array Dish 2 (high center pylon, top = 4.4)
    blocks.push(makeCol(11.0, 4.4, 0.46, 2.4, 'stone'));
    blocks.push(makeCol(14.0, 4.4, 0.46, 2.4, 'stone'));
    blocks.push(makeTnt(12.5, 4.4, 0.6));
    targets.push(makeTarget(12.5, 5.0, 'gold'));
    blocks.push(makeBeam(12.5, 6.8, 4.0, 0.3, 'metal'));
    blocks.push(makeCol(12.5, 7.1, 0.38, 2.0, 'metal'));
    targets.push(makeTarget(11.3, 7.1, 'pink'));
    targets.push(makeTarget(13.7, 7.1, 'green'));
    blocks.push(makeBeam(12.5, 9.1, 3.0, 0.24, 'stone'));
    targets.push(makeTarget(12.5, 9.34, 'gold'));

    // Array Dish 3 (right pylon, top = 2.8)
    blocks.push(makeBlock(17.8, 2.8, 1.0, 0.6, 'stone'));
    blocks.push(makeCol(17.8, 3.4, 0.46, 2.0, 'metal'));
    blocks.push(makeBeam(17.8, 5.4, 3.2, 0.26, 'metal'));
    blocks.push(makeCol(16.4, 5.66, 0.34, 1.4, 'glass'));
    blocks.push(makeCol(19.2, 5.66, 0.34, 1.4, 'glass'));
    targets.push(makeTarget(17.8, 5.66, 'blue'));
    blocks.push(makeBeam(17.8, 7.06, 3.6, 0.22, 'wood'));
    targets.push(makeTarget(17.8, 7.28, 'pink'));

    levels.push({
      id: 44,
      name: "Singularity Array",
      zone: "Chrono Void",
      icon: "📡",
      difficulty: "Chrono Legend",
      description: "Three parabolic communications arrays mounted on staggered pylons, focusing deep energy signals.",
      coinReward: 440,
      birds: ["speed", "split", "vortex", "heavy", "fire", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 45: Chrono Sovereign Palace (Chrono Emperor Boss)
  // Concept: Gothic Royal Cathedral with twin bell towers & vaulted nave
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.4, 3.8, 2.8, 'volcanic'), // top = 2.8
      makePlat(12.6, 1.8, 6.0, 3.6, 'volcanic'), // top = 3.6
      makePlat(18.2, 1.4, 3.8, 2.8, 'volcanic')  // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // West Belltower on Plat 1 (top = 2.8): 4 stories
    blocks.push(makeCol(5.4, 2.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(8.2, 2.8, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(6.8, 2.8, 'blue'));
    blocks.push(makeBeam(6.8, 5.0, 3.4, 0.26, 'stone'));
    blocks.push(makeTnt(6.8, 5.26, 0.6));
    blocks.push(makeCol(5.6, 5.26, 0.38, 1.8, 'wood'));
    blocks.push(makeCol(8.0, 5.26, 0.38, 1.8, 'wood'));
    blocks.push(makeBeam(6.8, 7.06, 2.8, 0.24, 'stone'));
    targets.push(makeTarget(6.8, 7.3, 'gold'));

    // East Belltower on Plat 3 (top = 2.8): 4 stories
    blocks.push(makeCol(16.8, 2.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(19.6, 2.8, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(18.2, 2.8, 'green'));
    blocks.push(makeBeam(18.2, 5.0, 3.4, 0.26, 'stone'));
    blocks.push(makeCol(17.0, 5.26, 0.38, 1.8, 'metal'));
    blocks.push(makeCol(19.4, 5.26, 0.38, 1.8, 'metal'));
    targets.push(makeTarget(18.2, 5.26, 'pink'));
    blocks.push(makeBeam(18.2, 7.06, 2.8, 0.24, 'stone'));
    targets.push(makeTarget(18.2, 7.3, 'blue'));

    // Central Grand Nave on Plat 2 (top = 3.6)
    blocks.push(makeCol(10.2, 3.6, 0.48, 2.4, 'metal'));
    blocks.push(makeCol(15.0, 3.6, 0.48, 2.4, 'metal'));
    blocks.push(makeCoin(11.6, 3.6, 0.5));
    blocks.push(makeCoin(13.6, 3.6, 0.5));
    targets.push(makeTarget(12.6, 3.6, 'gold'));
    blocks.push(makeBeam(12.6, 6.0, 5.6, 0.36, 'metal'));

    // Tier 2: Royal Throne Hall
    blocks.push(makeCol(10.8, 6.36, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(14.4, 6.36, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(12.6, 6.36, 0.38, 2.2, 'glass')); // Rose window
    // Chrono Emperor Boss!
    targets.push(makeTarget(12.6, 8.56, 'boss', true, 0.68));

    // Vaulted Ceiling & Royal Spire
    blocks.push(makeBeam(12.6, 9.24, 4.6, 0.3, 'stone'));
    blocks.push(makeBlock(12.6, 9.54, 1.4, 0.8, 'metal'));
    targets.push(makeTarget(12.6, 10.34, 'gold'));

    levels.push({
      id: 45,
      name: "Chrono Sovereign Palace",
      zone: "Chrono Void",
      icon: "🏰",
      difficulty: "Chrono Emperor Boss",
      description: "A grand gothic sovereign cathedral flanked by twin belltowers with the Chrono Emperor seated in the rose-window throne.",
      coinReward: 480,
      birds: ["heavy", "fire", "lightning", "vortex", "speed", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 46: Tesseract Bulwark
  // Concept: 2x2 grid 4-chamber hypercube bunker with reinforced perimeter
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.4, 11.5, 2.8, 'volcanic') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Lower Level: 2 chambers
    blocks.push(makeCol(7.6, 2.8, 0.48, 2.4, 'metal'));
    blocks.push(makeCol(12.5, 2.8, 0.52, 2.4, 'stone'));
    blocks.push(makeCol(17.4, 2.8, 0.48, 2.4, 'metal'));

    blocks.push(makeTnt(10.05, 2.8, 0.6));
    targets.push(makeTarget(10.05, 3.4, 'gold'));
    blocks.push(makeCoin(14.95, 2.8, 0.5));
    targets.push(makeTarget(14.95, 3.3, 'blue'));

    // Mid Divider Slab
    blocks.push(makeBeam(12.5, 5.2, 10.8, 0.38, 'metal'));

    // Upper Level: 2 chambers
    blocks.push(makeCol(8.0, 5.58, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(12.5, 5.58, 0.48, 2.2, 'stone'));
    blocks.push(makeCol(17.0, 5.58, 0.44, 2.2, 'stone'));

    targets.push(makeTarget(10.25, 5.58, 'pink'));
    targets.push(makeTarget(14.75, 5.58, 'green'));
    blocks.push(makeBlock(14.75, 5.58, 0.8, 0.8, 'glass'));

    // Upper Roof Slab
    blocks.push(makeBeam(12.5, 7.78, 10.0, 0.34, 'stone'));

    // Rooftop defense battlements
    blocks.push(makeBlock(8.8, 8.12, 1.4, 0.8, 'stone'));
    blocks.push(makeBlock(16.2, 8.12, 1.4, 0.8, 'stone'));
    targets.push(makeTarget(8.8, 8.92, 'blue'));
    targets.push(makeTarget(16.2, 8.92, 'gold'));
    blocks.push(makeCol(12.5, 8.12, 0.36, 1.6, 'metal'));
    targets.push(makeTarget(12.5, 9.72, 'pink'));

    levels.push({
      id: 46,
      name: "Tesseract Bulwark",
      zone: "Chrono Void",
      icon: "🧊",
      difficulty: "Tesseract Overlord",
      description: "A four-chamber hypercube bunker matrix built with interlocking blast bulkheads and reinforced corner pillars.",
      coinReward: 490,
      birds: ["split", "speed", "vortex", "fire", "heavy", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 47: Void Titan Foundry
  // Concept: Heavy industrial smelting mill with blast furnace stack and crane
  // =========================================================================
  {
    const plats = [
      makePlat(8.5, 1.6, 5.4, 3.2, 'volcanic'), // top = 3.2
      makePlat(16.0, 1.2, 6.2, 2.4, 'volcanic') // top = 2.4
    ];
    const blocks = [];
    const targets = [];

    // Blast Furnace on Plat 1 (top = 3.2)
    blocks.push(makeCol(6.4, 3.2, 0.48, 2.4, 'metal'));
    blocks.push(makeCol(10.6, 3.2, 0.48, 2.4, 'metal'));
    blocks.push(makeTnt(8.5, 3.2, 0.6));
    targets.push(makeTarget(8.5, 3.8, 'gold'));
    blocks.push(makeBeam(8.5, 5.6, 4.8, 0.34, 'stone'));

    blocks.push(makeCol(7.2, 5.94, 0.42, 2.2, 'stone'));
    blocks.push(makeCol(9.8, 5.94, 0.42, 2.2, 'stone'));
    targets.push(makeTarget(8.5, 5.94, 'blue'));
    blocks.push(makeBeam(8.5, 8.14, 3.6, 0.28, 'metal'));
    blocks.push(makeCol(8.5, 8.42, 0.38, 1.4, 'metal'));
    targets.push(makeTarget(8.5, 9.82, 'pink'));

    // Slag Foundry & Gantry Crane on Plat 2 (top = 2.4)
    blocks.push(makeCol(13.6, 2.4, 0.44, 2.4, 'stone'));
    blocks.push(makeCol(18.4, 2.4, 0.44, 2.4, 'stone'));
    blocks.push(makeTnt(16.0, 2.4, 0.6));
    targets.push(makeTarget(14.6, 2.4, 'blue'));
    targets.push(makeTarget(17.4, 2.4, 'green'));
    blocks.push(makeBeam(16.0, 4.8, 5.8, 0.32, 'metal')); // Crane deck

    // Suspended slag crucible cage
    blocks.push(makeCol(14.6, 5.12, 0.38, 1.8, 'wood'));
    blocks.push(makeCol(17.4, 5.12, 0.38, 1.8, 'wood'));
    targets.push(makeTarget(16.0, 5.12, 'pink'));
    blocks.push(makeBeam(16.0, 6.92, 3.6, 0.24, 'stone'));
    targets.push(makeTarget(16.0, 7.16, 'gold'));

    levels.push({
      id: 47,
      name: "Void Titan Foundry",
      zone: "Chrono Void",
      icon: "🏭",
      difficulty: "Tesseract Overlord",
      description: "An industrial ore-smelting complex featuring a towering blast furnace chimney and a gantry crane over molten vats.",
      coinReward: 500,
      birds: ["speed", "heavy", "lightning", "split", "fire", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 48: Hypercube Rampart
  // Concept: Medieval curtain wall with 3 crenellated bastion towers & barbican
  // =========================================================================
  {
    const plats = [
      makePlat(8.0, 1.2, 5.0, 2.4, 'stone'), // top = 2.4
      makePlat(15.5, 2.0, 7.2, 4.0, 'stone') // top = 4.0
    ];
    const blocks = [];
    const targets = [];

    // Barbican Gatehouse on Plat 1 (top = 2.4)
    blocks.push(makeBlock(6.2, 2.4, 0.8, 0.8, 'stone'));
    blocks.push(makeCol(7.0, 2.4, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(9.8, 2.4, 0.44, 2.2, 'stone'));
    blocks.push(makeTnt(8.4, 2.4, 0.6));
    targets.push(makeTarget(8.4, 3.0, 'blue'));
    blocks.push(makeBeam(8.4, 4.6, 4.2, 0.3, 'stone'));
    blocks.push(makeCol(8.4, 4.9, 0.38, 1.4, 'wood'));
    targets.push(makeTarget(8.4, 6.3, 'pink'));

    // High Curtain Wall & Dual Bastions on Plat 2 (top = 4.0)
    blocks.push(makeCol(12.0, 4.0, 0.46, 2.4, 'stone'));
    blocks.push(makeCol(14.4, 4.0, 0.46, 2.4, 'stone'));
    blocks.push(makeCol(16.6, 4.0, 0.46, 2.4, 'metal'));
    blocks.push(makeCol(19.0, 4.0, 0.46, 2.4, 'metal'));

    targets.push(makeTarget(13.2, 4.0, 'blue'));
    targets.push(makeTarget(17.8, 4.0, 'green'));
    blocks.push(makeCoin(15.5, 4.0, 0.5));

    // Rampart Battlement Walkway
    blocks.push(makeBeam(15.5, 6.4, 7.8, 0.36, 'stone'));

    // Upper Bastion Towers
    blocks.push(makeCol(13.2, 6.76, 0.4, 1.8, 'stone'));
    blocks.push(makeCol(17.8, 6.76, 0.4, 1.8, 'metal'));
    targets.push(makeTarget(13.2, 8.56, 'gold'));
    targets.push(makeTarget(17.8, 8.56, 'pink'));
    blocks.push(makeBlock(15.5, 6.76, 1.4, 0.8, 'wood'));
    targets.push(makeTarget(15.5, 7.56, 'blue'));

    levels.push({
      id: 48,
      name: "Hypercube Rampart",
      zone: "Chrono Void",
      icon: "🧱",
      difficulty: "Tesseract Overlord",
      description: "A formidable curtain-wall fortress with an outer barbican gatehouse, murder holes, and high parapet battlements.",
      coinReward: 510,
      birds: ["heavy", "fire", "vortex", "lightning", "speed", "split"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 49: Chrono Zenith Bastion
  // Concept: Needle sky-citadel with alternating cantilevered decks
  // =========================================================================
  {
    const plats = [
      makePlat(7.2, 1.4, 3.2, 2.8, 'volcanic'), // top = 2.8
      makePlat(12.8, 1.2, 4.4, 2.4, 'volcanic'), // top = 2.4
      makePlat(18.2, 2.4, 3.6, 4.8, 'volcanic')  // top = 4.8
    ];
    const blocks = [];
    const targets = [];

    // Left cliff outpost
    blocks.push(makeCol(7.2, 2.8, 0.42, 2.0, 'wood'));
    targets.push(makeTarget(7.2, 4.8, 'blue'));
    blocks.push(makeBeam(7.2, 4.8, 2.6, 0.24, 'stone'));

    // Right high cliff tower
    blocks.push(makeCol(18.2, 4.8, 0.46, 2.2, 'metal'));
    targets.push(makeTarget(18.2, 7.0, 'gold'));
    blocks.push(makeBeam(18.2, 7.0, 2.8, 0.26, 'stone'));

    // Central Needle Spire (on Plat 2, top = 2.4)
    blocks.push(makeCol(11.4, 2.4, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(14.2, 2.4, 0.46, 2.2, 'stone'));
    blocks.push(makeTnt(12.8, 2.4, 0.6));
    targets.push(makeTarget(12.8, 3.0, 'pink'));
    blocks.push(makeBeam(12.8, 4.6, 4.0, 0.3, 'stone'));

    // Cantilever deck projecting LEFT towards Plat 1
    blocks.push(makeBeam(10.2, 4.9, 3.6, 0.26, 'wood'));
    targets.push(makeTarget(9.2, 5.16, 'green'));

    // Spire Story 2
    blocks.push(makeCol(12.0, 4.9, 0.42, 2.0, 'metal'));
    blocks.push(makeCol(13.6, 4.9, 0.42, 2.0, 'metal'));
    targets.push(makeTarget(12.8, 4.9, 'blue'));
    blocks.push(makeBeam(12.8, 6.9, 3.6, 0.28, 'stone'));

    // Cantilever deck projecting RIGHT towards Plat 3
    blocks.push(makeBeam(15.4, 7.18, 3.6, 0.26, 'wood'));
    targets.push(makeTarget(16.4, 7.44, 'pink'));

    // Spire Story 3 (Peak)
    blocks.push(makeCol(12.8, 7.18, 0.4, 1.8, 'glass'));
    targets.push(makeTarget(12.8, 8.98, 'gold'));
    blocks.push(makeBeam(12.8, 8.98, 2.4, 0.24, 'stone'));
    targets.push(makeTarget(12.8, 9.22, 'blue'));

    levels.push({
      id: 49,
      name: "Chrono Zenith Bastion",
      zone: "Chrono Void",
      icon: "⚡",
      difficulty: "Tesseract Overlord",
      description: "A needle sky-citadel flanked by sheer crags with alternating cantilevered decks extending out into open airspace.",
      coinReward: 520,
      birds: ["speed", "split", "lightning", "heavy", "fire", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 50: Temporal Singularity Apex (Chrono Overlord Boss)
  // Concept: Colossal 4-tier stepped apex pyramid crowned with Chrono Overlord Boss
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.4, 4.0, 2.8, 'volcanic'), // top = 2.8
      makePlat(12.8, 2.2, 6.2, 4.4, 'volcanic'), // top = 4.4
      makePlat(18.5, 1.4, 4.0, 2.8, 'volcanic')  // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Left Chrono Pylon on Plat 1 (x=6.8, top = 2.8): 3 stories
    blocks.push(makeBlock(5.6, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(8.0, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(5.6, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(8.0, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeTnt(6.8, 3.4, 0.65));
    targets.push(makeTarget(6.8, 4.05, 'blue'));
    blocks.push(makeBeam(6.8, 5.4, 3.2, 0.28, 'stone'));
    blocks.push(makeCol(6.0, 5.68, 0.38, 1.4, 'stone'));
    blocks.push(makeCol(7.6, 5.68, 0.38, 1.4, 'stone'));
    targets.push(makeTarget(6.8, 5.68, 'pink'));
    blocks.push(makeBeam(6.8, 7.08, 2.4, 0.24, 'metal'));
    blocks.push(makeBlock(6.8, 7.32, 1.0, 0.8, 'metal'));
    targets.push(makeTarget(6.8, 8.12, 'gold'));

    // Right Chrono Pylon on Plat 3 (x=18.5, top = 2.8): 3 stories
    blocks.push(makeBlock(17.3, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(19.7, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(17.3, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(19.7, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeTnt(18.5, 3.4, 0.65));
    targets.push(makeTarget(18.5, 4.05, 'green'));
    blocks.push(makeBeam(18.5, 5.4, 3.2, 0.28, 'stone'));
    blocks.push(makeCol(17.7, 5.68, 0.38, 1.4, 'stone'));
    blocks.push(makeCol(19.3, 5.68, 0.38, 1.4, 'stone'));
    targets.push(makeTarget(18.5, 5.68, 'blue'));
    blocks.push(makeBeam(18.5, 7.08, 2.4, 0.24, 'metal'));
    blocks.push(makeBlock(18.5, 7.32, 1.0, 0.8, 'metal'));
    targets.push(makeTarget(18.5, 8.12, 'pink'));

    // Central Chrono Overlord Apex Pyramid on Plat 2 (top = 4.4)
    // Tier 1: Armored Sub-Vault Foundation (4 columns + 2 TNTs + 4 foundation footing blocks)
    blocks.push(makeBlock(10.2, 4.4, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(11.9, 4.4, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(13.7, 4.4, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(15.4, 4.4, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(10.2, 5.0, 0.48, 1.8, 'metal'));
    blocks.push(makeCol(11.9, 5.0, 0.44, 1.8, 'stone'));
    blocks.push(makeCol(13.7, 5.0, 0.44, 1.8, 'stone'));
    blocks.push(makeCol(15.4, 5.0, 0.48, 1.8, 'metal'));
    blocks.push(makeTnt(11.05, 4.4, 0.65));
    blocks.push(makeTnt(14.55, 4.4, 0.65));
    targets.push(makeTarget(11.05, 5.05, 'gold'));
    targets.push(makeTarget(14.55, 5.05, 'gold'));
    blocks.push(makeBeam(12.8, 6.8, 6.2, 0.4, 'metal'));

    // Connecting Energy Bridges from Side Pylons to Central Apex
    blocks.push(makeBeam(9.1, 5.4, 2.2, 0.24, 'stone'));
    blocks.push(makeBeam(16.2, 5.4, 2.2, 0.24, 'stone'));

    // Tier 2: Chrono Vault Hall (4 columns + central vault + terrace battlements)
    blocks.push(makeCol(10.8, 7.2, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(12.8, 7.2, 0.42, 2.2, 'stone'));
    blocks.push(makeCol(14.8, 7.2, 0.46, 2.2, 'metal'));
    blocks.push(makeBlock(11.8, 7.2, 0.8, 0.8, 'stone'));
    blocks.push(makeBlock(13.8, 7.2, 0.8, 0.8, 'stone'));
    targets.push(makeTarget(11.8, 8.0, 'pink'));
    targets.push(makeTarget(13.8, 8.0, 'blue'));
    blocks.push(makeBeam(12.8, 9.4, 5.2, 0.36, 'metal'));

    // Flank Mid-Terrace Battlements
    blocks.push(makeBlock(9.4, 9.4, 0.6, 0.6, 'metal'));
    blocks.push(makeBlock(16.2, 9.4, 0.6, 0.6, 'metal'));
    blocks.push(makeCol(9.4, 10.0, 0.36, 1.2, 'stone'));
    blocks.push(makeCol(16.2, 10.0, 0.36, 1.2, 'stone'));
    targets.push(makeTarget(9.4, 11.2, 'blue'));
    targets.push(makeTarget(16.2, 11.2, 'pink'));

    // Tier 3: Supreme Chrono Overlord Throne Keep (Boss Chamber)
    blocks.push(makeCol(11.4, 9.76, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(14.2, 9.76, 0.48, 2.2, 'metal'));
    blocks.push(makeBlock(12.8, 9.76, 1.4, 1.0, 'metal'));
    // Grand Chrono Overlord Challenge Boss!
    targets.push(makeTarget(12.8, 10.76, 'boss', true, 0.74));
    blocks.push(makeBeam(12.8, 11.96, 4.2, 0.32, 'stone'));

    // Tier 4: Crown Finial & Singularity Anchor
    blocks.push(makeCol(12.1, 12.28, 0.38, 1.4, 'metal'));
    blocks.push(makeCol(13.5, 12.28, 0.38, 1.4, 'metal'));
    blocks.push(makeBeam(12.8, 13.68, 2.6, 0.26, 'metal'));
    blocks.push(makeBlock(12.8, 13.94, 0.8, 0.8, 'glass'));
    targets.push(makeTarget(12.8, 14.74, 'gold'));

    levels.push({
      id: 50,
      name: "Temporal Singularity Apex",
      zone: "Chrono Void",
      icon: "⏳",
      difficulty: "Chrono Overlord Challenge Boss",
      description: "CHALLENGE LEVEL 50: The colossal singularity apex megastructure where the Chrono Overlord reigns, shielded by dual multi-story quantum pylons, heavy kinetic girders, and armored vaults.",
      coinReward: 700,
      birds: ["heavy", "chrono", "vortex", "lightning", "fire", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }
}
