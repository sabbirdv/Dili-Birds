import { makePlat, makeCol, makeBeam, makeBlock, makeTnt, makeCoin, makeTarget } from './level_builder_helpers.js';

export function getTier2Levels() {
  const levels = [];

  // =========================================================================
  // LEVEL 51: Solar Core Genesis
  // Concept: Tokamak fusion reactor facility with toroidal magnetic coils
  // =========================================================================
  {
    const plats = [
      makePlat(8.0, 1.4, 5.4, 2.8, 'volcanic'), // top = 2.8
      makePlat(16.0, 1.8, 6.4, 3.6, 'volcanic') // top = 3.6
    ];
    const blocks = [];
    const targets = [];

    // Left magnetic transformer bank (Plat 1)
    blocks.push(makeBlock(6.2, 2.8, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(9.8, 2.8, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(6.2, 3.4, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(9.8, 3.4, 0.46, 2.2, 'metal'));
    blocks.push(makeTnt(8.0, 2.8, 0.6));
    targets.push(makeTarget(8.0, 3.4, 'gold'));
    blocks.push(makeBeam(8.0, 5.6, 4.4, 0.3, 'metal'));
    blocks.push(makeCol(8.0, 5.9, 0.38, 1.6, 'glass'));
    targets.push(makeTarget(8.0, 7.5, 'pink'));
    blocks.push(makeBeam(8.0, 7.5, 2.4, 0.22, 'stone'));

    // Main Tokamak Reactor on Plat 2 (top = 3.6)
    // Tier 1: Outer containment wall (metal & stone)
    blocks.push(makeBlock(13.4, 3.6, 0.8, 0.8, 'metal'));
    blocks.push(makeBlock(18.6, 3.6, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(13.4, 4.4, 0.5, 2.4, 'metal'));
    blocks.push(makeCol(18.6, 4.4, 0.5, 2.4, 'metal'));
    blocks.push(makeCol(16.0, 3.6, 0.44, 2.4, 'stone'));
    // Inner plasma cell with TNT
    blocks.push(makeTnt(14.7, 3.6, 0.6));
    blocks.push(makeTnt(17.3, 3.6, 0.6));
    targets.push(makeTarget(14.7, 4.2, 'blue'));
    targets.push(makeTarget(17.3, 4.2, 'pink'));
    blocks.push(makeBeam(16.0, 6.8, 6.2, 0.36, 'metal')); // Lower reactor deck

    // Tier 2: Toroidal Magnetic Ring
    blocks.push(makeCol(14.0, 7.16, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(18.0, 7.16, 0.44, 2.0, 'metal'));
    blocks.push(makeBlock(16.0, 7.16, 1.4, 1.4, 'glass')); // Glowing core
    targets.push(makeTarget(16.0, 8.56, 'gold'));
    blocks.push(makeBeam(16.0, 9.16, 4.8, 0.32, 'metal'));

    // Tier 3: Reactor vent stack
    blocks.push(makeCol(15.2, 9.48, 0.38, 1.6, 'stone'));
    blocks.push(makeCol(16.8, 9.48, 0.38, 1.6, 'stone'));
    targets.push(makeTarget(16.0, 9.48, 'green'));
    blocks.push(makeBeam(16.0, 11.08, 2.8, 0.24, 'stone'));
    targets.push(makeTarget(16.0, 11.32, 'blue'));

    levels.push({
      id: 51,
      name: "Solar Core Genesis",
      zone: "Solar Foundry",
      icon: "☀️",
      difficulty: "Galactic Master",
      description: "A tokamak magnetic fusion reactor shielded by heavy metal containment walls with dual explosive plasma cores.",
      coinReward: 620,
      birds: ["speed", "chrono", "heavy", "split", "fire", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 52: Prometheus Forge
  // Concept: Blacksmith Anvil & Suspended Kinetic Drop-Hammer monument
  // =========================================================================
  {
    const plats = [
      makePlat(7.2, 1.8, 3.6, 3.6, 'volcanic'), // top = 3.6
      makePlat(12.5, 1.2, 5.0, 2.4, 'volcanic'), // top = 2.4
      makePlat(17.8, 2.0, 3.6, 4.0, 'volcanic')  // top = 4.0
    ];
    const blocks = [];
    const targets = [];

    // Left bellows outpost (Plat 1, top = 3.6)
    blocks.push(makeBlock(7.2, 3.6, 1.0, 0.6, 'stone'));
    blocks.push(makeCol(7.2, 4.2, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(7.2, 6.4, 'blue'));
    blocks.push(makeBeam(7.2, 6.4, 2.6, 0.24, 'metal'));

    // Right quenched steel rack (Plat 3, top = 4.0)
    blocks.push(makeBlock(17.8, 4.0, 1.0, 0.6, 'metal'));
    blocks.push(makeCol(17.8, 4.6, 0.46, 2.2, 'metal'));
    targets.push(makeTarget(17.8, 6.8, 'pink'));
    blocks.push(makeBeam(17.8, 6.8, 2.6, 0.24, 'stone'));

    // Central Forge & Anvil on Plat 2 (top = 2.4)
    // Massive anvil base
    blocks.push(makeBlock(10.8, 2.4, 1.4, 1.8, 'metal'));
    blocks.push(makeBlock(14.2, 2.4, 1.4, 1.8, 'metal'));
    blocks.push(makeTnt(12.5, 2.4, 0.6));
    targets.push(makeTarget(12.5, 3.0, 'gold'));
    blocks.push(makeBeam(12.5, 4.2, 5.0, 0.38, 'metal')); // Anvil top plate

    // Targets on the anvil work-surface
    targets.push(makeTarget(11.2, 4.58, 'blue'));
    targets.push(makeTarget(13.8, 4.58, 'green'));

    // Fragile glass trigger pillars holding the suspended overhead drop hammer!
    blocks.push(makeCol(11.2, 5.46, 0.38, 1.8, 'glass'));
    blocks.push(makeCol(13.8, 5.46, 0.38, 1.8, 'glass'));

    // Overhead Suspended Drop-Hammer
    const hammerY = 7.26;
    blocks.push(makeBeam(12.5, hammerY, 4.4, 0.36, 'metal'));
    blocks.push(makeBlock(12.5, hammerY + 0.36, 1.8, 1.6, 'metal')); // Giant hammerhead!
    targets.push(makeTarget(12.5, hammerY + 1.96, 'gold'));
    blocks.push(makeBeam(12.5, hammerY + 2.84, 3.2, 0.26, 'stone'));

    levels.push({
      id: 52,
      name: "Prometheus Forge",
      zone: "Solar Foundry",
      icon: "🔨",
      difficulty: "Galactic Master",
      description: "A colossal blacksmith anvil with a massive suspended drop-hammer held by fragile glass trigger pins.",
      coinReward: 630,
      birds: ["split", "fire", "chrono", "heavy", "speed", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 53: Helios Radiant Keep
  // Concept: Sunburst citadel with 4 radiating diagonal-stepped buttress wings
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.5, 12.5, 3.0, 'volcanic') // top = 3.0
    ];
    const blocks = [];
    const targets = [];

    // Base Tier (width 11.5): 4 columns forming central hall and flanking chambers
    blocks.push(makeBlock(7.2, 3.0, 0.8, 0.8, 'stone'));
    blocks.push(makeBlock(17.8, 3.0, 0.8, 0.8, 'stone'));
    blocks.push(makeCol(7.2, 3.8, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(10.5, 3.0, 0.46, 2.4, 'metal'));
    blocks.push(makeCol(14.5, 3.0, 0.46, 2.4, 'metal'));
    blocks.push(makeCol(17.8, 3.8, 0.46, 2.2, 'stone'));

    // Left wing contents
    blocks.push(makeTnt(8.85, 3.0, 0.6));
    targets.push(makeTarget(8.85, 3.6, 'blue'));
    // Center sanctuary contents
    blocks.push(makeCoin(12.5, 3.0, 0.5));
    targets.push(makeTarget(12.5, 3.5, 'gold'));
    // Right wing contents
    blocks.push(makeTnt(16.15, 3.0, 0.6));
    targets.push(makeTarget(16.15, 3.6, 'pink'));

    // Tier 1 Deck Beam
    blocks.push(makeBeam(12.5, 5.4, 11.6, 0.38, 'metal'));

    // Radiating Sunburst Wings
    blocks.push(makeBeam(7.8, 5.78, 3.4, 0.26, 'wood'));
    targets.push(makeTarget(6.8, 6.04, 'green'));

    blocks.push(makeBeam(17.2, 5.78, 3.4, 0.26, 'wood'));
    targets.push(makeTarget(18.2, 6.04, 'blue'));

    // Center Core Chamber (Tier 2)
    blocks.push(makeCol(10.8, 5.78, 0.44, 2.2, 'metal'));
    blocks.push(makeCol(14.2, 5.78, 0.44, 2.2, 'metal'));
    blocks.push(makeBlock(12.5, 5.78, 1.4, 1.4, 'glass')); // Solar crystal
    targets.push(makeTarget(12.5, 7.18, 'gold'));
    blocks.push(makeBeam(12.5, 7.98, 5.2, 0.32, 'stone'));

    // Tier 3: High Sun Altar
    blocks.push(makeCol(11.6, 8.3, 0.4, 1.8, 'stone'));
    blocks.push(makeCol(13.4, 8.3, 0.4, 1.8, 'stone'));
    targets.push(makeTarget(12.5, 8.3, 'pink'));
    blocks.push(makeBeam(12.5, 10.1, 3.2, 0.26, 'stone'));
    targets.push(makeTarget(12.5, 10.36, 'blue'));

    levels.push({
      id: 53,
      name: "Helios Radiant Keep",
      zone: "Solar Foundry",
      icon: "🌅",
      difficulty: "Galactic Master",
      description: "A radiating sunburst fortress with four cantilevered ray buttresses flanking a sacred solar crystal altar.",
      coinReward: 640,
      birds: ["heavy", "speed", "chrono", "lightning", "fire", "split"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 54: Supernova Rampart
  // Concept: Heavily armored coastal seawall breakwater with angled tetrapods
  // =========================================================================
  {
    const plats = [
      makePlat(8.5, 1.2, 5.5, 2.4, 'volcanic'), // top = 2.4
      makePlat(15.5, 2.4, 6.5, 4.8, 'volcanic') // top = 4.8
    ];
    const blocks = [];
    const targets = [];

    // Forward Breakwater on Plat 1 (top = 2.4)
    blocks.push(makeBlock(6.4, 2.4, 1.2, 1.8, 'stone'));
    blocks.push(makeBlock(8.0, 2.4, 1.2, 1.8, 'stone'));
    blocks.push(makeCol(10.2, 2.4, 0.46, 2.2, 'metal'));
    blocks.push(makeTnt(9.2, 2.4, 0.6));
    targets.push(makeTarget(9.2, 3.0, 'blue'));
    blocks.push(makeBeam(8.5, 4.6, 5.0, 0.32, 'stone'));
    targets.push(makeTarget(8.5, 4.92, 'pink'));

    // High Bastion Seawall on Plat 2 (top = 4.8)
    blocks.push(makeBlock(13.0, 4.8, 0.8, 0.8, 'metal'));
    blocks.push(makeBlock(18.0, 4.8, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(13.0, 5.6, 0.5, 2.2, 'metal'));
    blocks.push(makeCol(15.5, 4.8, 0.46, 2.4, 'stone'));
    blocks.push(makeCol(18.0, 5.6, 0.5, 2.2, 'metal'));

    blocks.push(makeTnt(14.25, 4.8, 0.6));
    targets.push(makeTarget(14.25, 5.4, 'gold'));
    targets.push(makeTarget(16.75, 4.8, 'green'));
    blocks.push(makeCoin(15.5, 4.8, 0.5));

    // Heavy Citadel Deck
    blocks.push(makeBeam(15.5, 7.8, 6.2, 0.38, 'metal'));

    // Upper Artillery Battery
    blocks.push(makeCol(13.8, 8.18, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(17.2, 8.18, 0.42, 2.0, 'stone'));
    targets.push(makeTarget(15.5, 8.18, 'blue'));
    blocks.push(makeBeam(15.5, 10.18, 4.6, 0.3, 'stone'));

    // Rooftop gun commander
    blocks.push(makeBlock(15.5, 10.48, 1.2, 0.8, 'metal'));
    targets.push(makeTarget(15.5, 11.28, 'gold'));

    levels.push({
      id: 54,
      name: "Supernova Rampart",
      zone: "Solar Foundry",
      icon: "🛡️",
      difficulty: "Galactic Master",
      description: "A tiered coastal breakwater fortress featuring heavy kinetic energy-absorbing baffles and upper artillery nests.",
      coinReward: 660,
      birds: ["speed", "split", "chrono", "vortex", "heavy", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 55: Solaris Grand Colosseum (Solar Sovereign Boss)
  // Concept: Roman Colosseum with tiered spectator stands & sunken arena pit
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.6, 4.2, 3.2, 'volcanic'), // top = 3.2 (West stands)
      makePlat(12.6, 1.0, 5.4, 2.0, 'volcanic'), // top = 2.0 (Sunken arena pit!)
      makePlat(18.4, 1.6, 4.2, 3.2, 'volcanic')  // top = 3.2 (East stands)
    ];
    const blocks = [];
    const targets = [];

    // West Spectator Stands on Plat 1 (top = 3.2)
    blocks.push(makeBlock(5.6, 3.2, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(8.0, 3.2, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(5.6, 3.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(8.0, 3.8, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(6.8, 3.8, 'blue'));
    blocks.push(makeBeam(6.8, 6.0, 3.6, 0.28, 'stone'));
    blocks.push(makeCol(6.8, 6.28, 0.38, 1.6, 'wood'));
    targets.push(makeTarget(6.8, 7.88, 'pink'));
    blocks.push(makeBeam(6.8, 7.88, 2.6, 0.24, 'stone'));

    // East Spectator Stands on Plat 3 (top = 3.2)
    blocks.push(makeBlock(17.2, 3.2, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(19.6, 3.2, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(17.2, 3.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(19.6, 3.8, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(18.4, 3.8, 'green'));
    blocks.push(makeBeam(18.4, 6.0, 3.6, 0.28, 'stone'));
    blocks.push(makeCol(18.4, 6.28, 0.38, 1.6, 'wood'));
    targets.push(makeTarget(18.4, 7.88, 'blue'));
    blocks.push(makeBeam(18.4, 7.88, 2.6, 0.24, 'stone'));

    // Sunken Arena Pit on Plat 2 (top = 2.0)
    blocks.push(makeCol(10.4, 2.0, 0.5, 2.6, 'metal'));
    blocks.push(makeCol(14.8, 2.0, 0.5, 2.6, 'metal'));
    blocks.push(makeTnt(12.6, 2.0, 0.6));
    targets.push(makeTarget(11.5, 2.0, 'gold'));
    targets.push(makeTarget(13.7, 2.0, 'pink'));
    blocks.push(makeBeam(12.6, 4.6, 5.2, 0.36, 'metal')); // Triumphal arch beam

    // Imperial Royal Box (Boss Chamber)
    blocks.push(makeCol(11.0, 4.96, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(14.2, 4.96, 0.46, 2.2, 'stone'));
    // Solaris Sovereign Boss!
    targets.push(makeTarget(12.6, 4.96, 'boss', true, 0.7));

    // Royal Imperial Canopy
    blocks.push(makeBeam(12.6, 7.16, 4.4, 0.3, 'stone'));
    blocks.push(makeBlock(12.6, 7.46, 1.4, 0.8, 'metal'));
    targets.push(makeTarget(12.6, 8.26, 'gold'));

    levels.push({
      id: 55,
      name: "Solaris Grand Colosseum",
      zone: "Solar Foundry",
      icon: "🏟️",
      difficulty: "Solar Sovereign Boss",
      description: "A monumental gladiatorial arena with tiered spectator galleries and the Solaris Sovereign presiding from the royal box.",
      coinReward: 720,
      birds: ["heavy", "fire", "chrono", "vortex", "lightning", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // Call 56-70
  addLevels56to70_v2(levels);

  return levels;
}

function addLevels56to70_v2(levels) {
  // =========================================================================
  // LEVEL 56: Plasma Reactor Spire
  // Concept: Twin cooling towers flanking an elevated plasma pipeline bridge
  // =========================================================================
  {
    const plats = [
      makePlat(8.5, 1.5, 5.2, 3.0, 'volcanic'), // top = 3.0
      makePlat(16.2, 1.5, 5.2, 3.0, 'volcanic') // top = 3.0
    ];
    const blocks = [];
    const targets = [];

    // Left Cooling Tower (on Plat 1)
    blocks.push(makeBlock(6.6, 3.0, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(10.4, 3.0, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(6.6, 3.6, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(10.4, 3.6, 0.46, 2.2, 'metal'));
    blocks.push(makeTnt(8.5, 3.0, 0.6));
    targets.push(makeTarget(8.5, 3.6, 'blue'));
    blocks.push(makeBeam(8.5, 5.8, 4.4, 0.3, 'stone'));
    blocks.push(makeCol(7.2, 6.1, 0.4, 1.8, 'stone'));
    blocks.push(makeCol(9.8, 6.1, 0.4, 1.8, 'stone'));
    targets.push(makeTarget(8.5, 6.1, 'pink'));
    blocks.push(makeBeam(8.5, 7.9, 3.4, 0.24, 'metal'));

    // Right Cooling Tower (on Plat 2)
    blocks.push(makeBlock(14.3, 3.0, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(18.1, 3.0, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(14.3, 3.6, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(18.1, 3.6, 0.46, 2.2, 'metal'));
    blocks.push(makeCoin(16.2, 3.0, 0.5));
    targets.push(makeTarget(16.2, 3.5, 'green'));
    blocks.push(makeBeam(16.2, 5.8, 4.4, 0.3, 'stone'));
    blocks.push(makeCol(14.9, 6.1, 0.4, 1.8, 'stone'));
    blocks.push(makeCol(17.5, 6.1, 0.4, 1.8, 'stone'));
    targets.push(makeTarget(16.2, 6.1, 'blue'));
    blocks.push(makeBeam(16.2, 7.9, 3.4, 0.24, 'metal'));

    // High Voltage Plasma Pipeline spanning between the towers (at y=5.8)
    blocks.push(makeBeam(12.35, 5.8, 5.0, 0.28, 'glass'));
    blocks.push(makeTnt(12.35, 6.08, 0.6));
    targets.push(makeTarget(12.35, 6.68, 'gold'));

    levels.push({
      id: 56,
      name: "Plasma Reactor Spire",
      zone: "Solar Foundry",
      icon: "⚡",
      difficulty: "Galactic Overlord",
      description: "Hyperbolic cooling towers linked by a volatile glass plasma pipeline spanning across open airspace.",
      coinReward: 740,
      birds: ["split", "chrono", "heavy", "speed", "fire", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 57: Fusion Blast Furnace
  // Concept: Subterranean 3-chamber bunker beneath a 3-tier pyramid cap
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.4, 11.8, 2.8, 'volcanic') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Subterranean Ground Bunker: 4 columns forming 3 rooms
    blocks.push(makeBlock(7.4, 2.8, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(7.4, 3.4, 0.5, 2.0, 'metal'));
    blocks.push(makeCol(10.8, 2.8, 0.46, 2.6, 'stone'));
    blocks.push(makeCol(14.2, 2.8, 0.46, 2.6, 'stone'));
    blocks.push(makeBlock(17.6, 2.8, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(17.6, 3.4, 0.5, 2.0, 'metal'));

    targets.push(makeTarget(9.1, 2.8, 'blue'));
    blocks.push(makeTnt(12.5, 2.8, 0.6));
    targets.push(makeTarget(12.5, 3.4, 'gold'));
    targets.push(makeTarget(15.9, 2.8, 'pink'));
    blocks.push(makeCoin(15.9, 3.8, 0.5));

    // Massive continuous blast deck slab
    blocks.push(makeBeam(12.5, 5.4, 11.2, 0.4, 'metal'));

    // Side Exhaust Stacks (flanking the pyramid)
    blocks.push(makeCol(7.6, 5.8, 0.4, 2.2, 'metal'));
    blocks.push(makeBeam(7.6, 8.0, 1.8, 0.22, 'stone'));
    targets.push(makeTarget(7.6, 8.22, 'blue'));

    blocks.push(makeCol(17.4, 5.8, 0.4, 2.2, 'metal'));
    blocks.push(makeBeam(17.4, 8.0, 1.8, 0.22, 'stone'));
    targets.push(makeTarget(17.4, 8.22, 'pink'));

    // Pyramid Cap Tier 1 (width 8.0)
    blocks.push(makeCol(9.6, 5.8, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(12.5, 5.8, 0.42, 2.0, 'stone'));
    blocks.push(makeCol(15.4, 5.8, 0.44, 2.0, 'stone'));
    targets.push(makeTarget(11.05, 5.8, 'green'));
    targets.push(makeTarget(13.95, 5.8, 'blue'));
    blocks.push(makeBeam(12.5, 7.8, 8.0, 0.34, 'stone'));

    // Pyramid Cap Tier 2 (width 5.6)
    blocks.push(makeCol(10.8, 8.14, 0.42, 1.6, 'stone'));
    blocks.push(makeCol(14.2, 8.14, 0.42, 1.6, 'stone'));
    targets.push(makeTarget(12.5, 8.14, 'gold'));
    blocks.push(makeBeam(12.5, 9.74, 5.6, 0.3, 'stone'));

    // Pyramid Peak Cap
    blocks.push(makeBlock(12.5, 10.04, 1.6, 1.2, 'metal'));
    targets.push(makeTarget(12.5, 11.24, 'pink'));

    levels.push({
      id: 57,
      name: "Fusion Blast Furnace",
      zone: "Solar Foundry",
      icon: "🔥",
      difficulty: "Galactic Overlord",
      description: "A triple-chamber underground blast vault flanked by exhaust stacks and buried beneath a massive stepped pyramid blast-shield.",
      coinReward: 760,
      birds: ["speed", "heavy", "chrono", "lightning", "split", "fire"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 58: Starlight Bastion Matrix
  // Concept: 4-island archipelago at staggered heights connected by planks
  // =========================================================================
  {
    const plats = [
      makePlat(6.4, 1.2, 2.8, 2.4, 'volcanic'), // top = 2.4
      makePlat(10.4, 2.2, 3.0, 4.4, 'volcanic'), // top = 4.4
      makePlat(14.6, 1.6, 3.2, 3.2, 'volcanic'), // top = 3.2
      makePlat(18.8, 2.6, 3.0, 5.2, 'volcanic')  // top = 5.2
    ];
    const blocks = [];
    const targets = [];

    // Island 1 (top = 2.4): Outpost 1
    blocks.push(makeBlock(6.4, 2.4, 1.2, 0.6, 'stone'));
    blocks.push(makeCol(5.8, 3.0, 0.38, 1.6, 'wood'));
    blocks.push(makeCol(7.0, 3.0, 0.38, 1.6, 'wood'));
    targets.push(makeTarget(6.4, 3.0, 'blue'));
    blocks.push(makeBeam(6.4, 4.6, 2.4, 0.22, 'stone'));
    blocks.push(makeBlock(6.4, 4.82, 0.6, 0.6, 'glass'));

    // Island 2 (top = 4.4): Outpost 2
    blocks.push(makeBlock(10.4, 4.4, 1.4, 0.6, 'metal'));
    blocks.push(makeCol(9.6, 5.0, 0.42, 1.8, 'metal'));
    blocks.push(makeCol(11.2, 5.0, 0.42, 1.8, 'metal'));
    targets.push(makeTarget(10.4, 5.0, 'pink'));
    blocks.push(makeBeam(10.4, 6.8, 2.8, 0.24, 'metal'));
    blocks.push(makeCol(10.4, 7.04, 0.32, 1.2, 'wood'));
    targets.push(makeTarget(10.4, 8.24, 'gold'));

    // Island 3 (top = 3.2): Ammunition Depot with TNT
    blocks.push(makeBlock(14.6, 3.2, 1.4, 0.6, 'stone'));
    blocks.push(makeCol(13.4, 3.8, 0.42, 1.8, 'stone'));
    blocks.push(makeCol(15.8, 3.8, 0.42, 1.8, 'stone'));
    blocks.push(makeTnt(14.6, 3.8, 0.6));
    targets.push(makeTarget(14.6, 4.4, 'gold'));
    blocks.push(makeBeam(14.6, 5.6, 3.2, 0.26, 'stone'));

    // Island 4 (top = 5.2): High Apex Fortress
    blocks.push(makeBlock(18.8, 5.2, 1.6, 0.6, 'metal'));
    blocks.push(makeCol(17.6, 5.8, 0.46, 2.0, 'metal'));
    blocks.push(makeCol(20.0, 5.8, 0.46, 2.0, 'metal'));
    targets.push(makeTarget(18.8, 5.8, 'green'));
    blocks.push(makeBeam(18.8, 7.8, 3.4, 0.28, 'metal'));
    blocks.push(makeCol(18.8, 8.08, 0.38, 1.6, 'glass'));
    targets.push(makeTarget(18.8, 9.68, 'blue'));
    blocks.push(makeBeam(18.8, 9.68, 2.0, 0.22, 'stone'));

    // Fragile walkways bridging between islands
    blocks.push(makeBeam(8.4, 4.4, 2.2, 0.2, 'wood'));
    blocks.push(makeBeam(12.5, 4.4, 2.2, 0.2, 'wood'));
    blocks.push(makeBeam(16.7, 5.2, 2.2, 0.2, 'wood'));

    levels.push({
      id: 58,
      name: "Starlight Bastion Matrix",
      zone: "Solar Foundry",
      icon: "✨",
      difficulty: "Galactic Overlord",
      description: "Four archipelago islands perched at staggered heights connected by perilous wooden stepping bridges.",
      coinReward: 780,
      birds: ["heavy", "fire", "chrono", "vortex", "speed", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 59: Corona Shield Citadel
  // Concept: Double-layered curved shield barrier with kinetic dampener pillars
  // =========================================================================
  {
    const plats = [
      makePlat(8.0, 1.4, 5.0, 2.8, 'volcanic'), // top = 2.8
      makePlat(15.5, 1.8, 6.5, 3.6, 'volcanic') // top = 3.6
    ];
    const blocks = [];
    const targets = [];

    // Outer Front Deflection Armor (Plat 1, top = 2.8)
    blocks.push(makeBlock(6.4, 2.8, 0.9, 2.6, 'metal'));
    blocks.push(makeBlock(7.5, 2.8, 0.9, 2.6, 'stone'));
    blocks.push(makeBlock(8.6, 2.8, 0.9, 2.6, 'metal'));
    blocks.push(makeCol(9.8, 2.8, 0.42, 2.2, 'glass'));
    blocks.push(makeTnt(9.8, 5.0, 0.6));
    targets.push(makeTarget(8.5, 5.6, 'blue'));
    blocks.push(makeBeam(8.0, 5.6, 4.8, 0.32, 'metal'));
    blocks.push(makeCol(8.0, 5.92, 0.36, 1.2, 'wood'));
    targets.push(makeTarget(8.0, 7.12, 'pink'));

    // Inner Sanctuary on Plat 2 (top = 3.6)
    // Tier 1: Ground Keep
    blocks.push(makeCol(13.0, 3.6, 0.48, 2.4, 'stone'));
    blocks.push(makeCol(15.5, 3.6, 0.46, 2.4, 'stone'));
    blocks.push(makeCol(18.0, 3.6, 0.48, 2.4, 'metal'));
    targets.push(makeTarget(14.25, 3.6, 'pink'));
    targets.push(makeTarget(16.75, 3.6, 'green'));
    blocks.push(makeBeam(15.5, 6.0, 6.2, 0.36, 'metal'));

    // Tier 2: Observation & Vault
    blocks.push(makeCol(13.6, 6.36, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(17.4, 6.36, 0.44, 2.0, 'stone'));
    blocks.push(makeBlock(15.5, 6.36, 1.2, 0.8, 'wood'));
    blocks.push(makeCoin(15.5, 7.16, 0.5));
    targets.push(makeTarget(15.5, 7.66, 'gold'));
    blocks.push(makeBeam(15.5, 8.36, 4.8, 0.3, 'stone'));

    // Tier 3: Roof Spire
    blocks.push(makeCol(14.6, 8.66, 0.36, 1.6, 'glass'));
    blocks.push(makeCol(16.4, 8.66, 0.36, 1.6, 'glass'));
    targets.push(makeTarget(15.5, 8.66, 'blue'));
    blocks.push(makeBeam(15.5, 10.26, 2.8, 0.24, 'stone'));
    targets.push(makeTarget(15.5, 10.5, 'gold'));

    levels.push({
      id: 59,
      name: "Corona Shield Citadel",
      zone: "Solar Foundry",
      icon: "🛡️",
      difficulty: "Galactic Overlord",
      description: "A fortified energy redoubt sheltered behind a massive forward deflection shield that absorbs frontal impacts.",
      coinReward: 800,
      birds: ["split", "speed", "chrono", "heavy", "vortex", "fire"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 60: Solar Emperor Fortress (Solar Emperor Boss)
  // Concept: Imperial palace with outer gatehouse, courtyard & crowned keep
  // =========================================================================
  {
    const plats = [
      makePlat(6.6, 1.4, 3.8, 2.8, 'volcanic'), // top = 2.8
      makePlat(12.6, 2.2, 6.2, 4.4, 'volcanic'), // top = 4.4
      makePlat(18.6, 1.4, 3.8, 2.8, 'volcanic')  // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Left gatehouse tower (Plat 1, top = 2.8)
    blocks.push(makeBlock(5.2, 2.8, 0.8, 0.6, 'metal'));
    blocks.push(makeBlock(8.0, 2.8, 0.8, 0.6, 'metal'));
    blocks.push(makeCol(5.2, 3.4, 0.44, 2.0, 'metal'));
    blocks.push(makeCol(8.0, 3.4, 0.44, 2.0, 'stone'));
    targets.push(makeTarget(6.6, 3.4, 'blue'));
    blocks.push(makeBeam(6.6, 5.4, 3.6, 0.28, 'stone'));
    blocks.push(makeCol(6.6, 5.68, 0.38, 1.6, 'wood'));
    targets.push(makeTarget(6.6, 7.28, 'pink'));
    blocks.push(makeBeam(6.6, 7.28, 2.4, 0.22, 'stone'));

    // Right armory tower (Plat 3, top = 2.8)
    blocks.push(makeBlock(17.2, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeBlock(20.0, 2.8, 0.8, 0.6, 'stone'));
    blocks.push(makeCol(17.2, 3.4, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(20.0, 3.4, 0.44, 2.0, 'metal'));
    targets.push(makeTarget(18.6, 3.4, 'green'));
    blocks.push(makeBeam(18.6, 5.4, 3.6, 0.28, 'stone'));
    blocks.push(makeCol(18.6, 5.68, 0.38, 1.6, 'glass'));
    targets.push(makeTarget(18.6, 7.28, 'gold'));
    blocks.push(makeBeam(18.6, 7.28, 2.4, 0.22, 'stone'));

    // Central Imperial Palace on Plat 2 (top = 4.4)
    blocks.push(makeCol(10.2, 4.4, 0.52, 2.6, 'metal'));
    blocks.push(makeCol(12.6, 4.4, 0.46, 2.6, 'stone'));
    blocks.push(makeCol(15.0, 4.4, 0.52, 2.6, 'metal'));
    blocks.push(makeTnt(11.4, 4.4, 0.6));
    blocks.push(makeTnt(13.8, 4.4, 0.6));
    targets.push(makeTarget(11.4, 5.0, 'gold'));
    targets.push(makeTarget(13.8, 5.0, 'gold'));
    blocks.push(makeBeam(12.6, 7.0, 6.2, 0.4, 'metal'));

    // Tier 2: Emperor Throne Room
    blocks.push(makeCol(11.0, 7.4, 0.48, 2.2, 'stone'));
    blocks.push(makeCol(14.2, 7.4, 0.48, 2.2, 'stone'));
    blocks.push(makeBlock(12.6, 7.4, 1.4, 1.0, 'wood'));
    // Solar Emperor Boss!
    targets.push(makeTarget(12.6, 8.4, 'boss', true, 0.72));

    // Tier 3: Solar Crown & Spire
    blocks.push(makeBeam(12.6, 9.6, 4.8, 0.34, 'stone'));
    blocks.push(makeBlock(12.6, 9.94, 1.4, 1.0, 'metal'));
    targets.push(makeTarget(12.6, 10.94, 'gold'));

    levels.push({
      id: 60,
      name: "Solar Emperor Fortress",
      zone: "Solar Foundry",
      icon: "👑",
      difficulty: "Solar Emperor Boss",
      description: "The grand imperial citadel of the Sun, with fortified gatehouses and the Solar Emperor presiding within the core.",
      coinReward: 850,
      birds: ["heavy", "chrono", "lightning", "vortex", "fire", "split"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 61: Cosmic Genesis Spire
  // Concept: Space elevator terminal with tall needle spire & tension outriggers
  // =========================================================================
  {
    const plats = [
      makePlat(12.0, 1.6, 9.2, 3.2, 'celestial') // top = 3.2
    ];
    const blocks = [];
    const targets = [];

    // Foundation Base (width 8.8)
    blocks.push(makeBlock(7.6, 3.2, 0.8, 0.8, 'metal'));
    blocks.push(makeBlock(16.4, 3.2, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(7.6, 4.0, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(10.8, 3.2, 0.48, 2.6, 'metal'));
    blocks.push(makeCol(13.2, 3.2, 0.48, 2.6, 'metal'));
    blocks.push(makeCol(16.4, 4.0, 0.46, 2.2, 'metal'));

    blocks.push(makeTnt(9.3, 3.2, 0.6));
    targets.push(makeTarget(9.3, 3.8, 'blue'));
    targets.push(makeTarget(14.7, 3.2, 'pink'));
    blocks.push(makeBeam(12.0, 5.8, 9.6, 0.38, 'metal'));

    // Story 2: Guy-wire outriggers & center elevator shaft
    blocks.push(makeCol(8.6, 6.18, 0.4, 2.0, 'wood'));
    blocks.push(makeCol(11.0, 6.18, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(13.0, 6.18, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(15.4, 6.18, 0.4, 2.0, 'wood'));
    targets.push(makeTarget(12.0, 6.18, 'gold'));
    blocks.push(makeBeam(12.0, 8.18, 8.0, 0.34, 'metal'));

    // Story 3: Central Tether Needle
    blocks.push(makeCol(11.2, 8.52, 0.42, 2.2, 'metal'));
    blocks.push(makeCol(12.8, 8.52, 0.42, 2.2, 'metal'));
    targets.push(makeTarget(12.0, 8.52, 'blue'));
    blocks.push(makeBeam(12.0, 10.72, 5.0, 0.3, 'stone'));

    // Story 4: High Orbit Cabin
    blocks.push(makeBlock(12.0, 11.02, 1.4, 1.2, 'glass'));
    targets.push(makeTarget(12.0, 12.22, 'gold'));

    levels.push({
      id: 61,
      name: "Cosmic Genesis Spire",
      zone: "Cosmic Singularity",
      icon: "🚀",
      difficulty: "Cosmic Deity",
      description: "An orbital space-elevator base station anchored by heavy guy-wire towers and soaring tension rails.",
      coinReward: 880,
      birds: ["speed", "chrono", "heavy", "fire", "lightning", "split"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 62: Nebula Titan Colossus
  // Concept: Giant Titan Mech standing astride a deep gorge with waist bridge
  // =========================================================================
  {
    const plats = [
      makePlat(7.8, 1.8, 4.4, 3.6, 'celestial'), // top = 3.6
      makePlat(16.8, 1.8, 4.4, 3.6, 'celestial') // top = 3.6
    ];
    const blocks = [];
    const targets = [];

    // Left Mech Leg (on Plat 1)
    blocks.push(makeBlock(6.4, 3.6, 0.8, 0.8, 'metal'));
    blocks.push(makeBlock(9.2, 3.6, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(6.4, 4.4, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(9.2, 4.4, 0.48, 2.2, 'metal'));
    targets.push(makeTarget(7.8, 3.6, 'blue'));
    blocks.push(makeBeam(7.8, 6.6, 3.6, 0.3, 'metal'));

    // Right Mech Leg (on Plat 2)
    blocks.push(makeBlock(15.4, 3.6, 0.8, 0.8, 'metal'));
    blocks.push(makeBlock(18.2, 3.6, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(15.4, 4.4, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(18.2, 4.4, 0.48, 2.2, 'metal'));
    targets.push(makeTarget(16.8, 3.6, 'pink'));
    blocks.push(makeBeam(16.8, 6.6, 3.6, 0.3, 'metal'));

    // Colossal Pelvic Beam spanning across the chasm!
    blocks.push(makeBeam(12.3, 6.9, 11.8, 0.4, 'metal'));

    // Torso Cockpit & Shoulder Cannons
    blocks.push(makeCol(10.0, 7.3, 0.48, 2.2, 'stone'));
    blocks.push(makeCol(14.6, 7.3, 0.48, 2.2, 'stone'));
    blocks.push(makeBlock(12.3, 7.3, 1.2, 1.0, 'wood'));
    blocks.push(makeTnt(12.3, 8.3, 0.6));
    targets.push(makeTarget(12.3, 8.9, 'gold'));
    targets.push(makeTarget(8.2, 7.3, 'green'));
    targets.push(makeTarget(16.4, 7.3, 'blue'));

    // Shoulder Deck Beam
    blocks.push(makeBeam(12.3, 9.5, 8.6, 0.38, 'metal'));

    // Titan Head & Helm
    blocks.push(makeCol(11.2, 9.88, 0.44, 1.8, 'metal'));
    blocks.push(makeCol(13.4, 9.88, 0.44, 1.8, 'metal'));
    targets.push(makeTarget(12.3, 9.88, 'boss', false, 0.58));
    blocks.push(makeBeam(12.3, 11.68, 3.6, 0.28, 'stone'));
    targets.push(makeTarget(12.3, 11.96, 'gold'));

    levels.push({
      id: 62,
      name: "Nebula Titan Colossus",
      zone: "Cosmic Singularity",
      icon: "🤖",
      difficulty: "Cosmic Deity",
      description: "A mythical cosmic war colossus standing astride two mountain ridges with its command cockpit suspended over the abyss.",
      coinReward: 900,
      birds: ["split", "fire", "chrono", "heavy", "vortex", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 63: Dark Matter Bastion
  // Concept: Brutalist monolithic bunker with recessed target cells & narrow slits
  // =========================================================================
  {
    const plats = [
      makePlat(8.5, 1.2, 5.5, 2.4, 'celestial'), // top = 2.4
      makePlat(16.0, 2.0, 6.2, 4.0, 'celestial') // top = 4.0
    ];
    const blocks = [];
    const targets = [];

    // Outer bunker (Plat 1)
    blocks.push(makeBlock(6.2, 2.4, 1.4, 2.0, 'metal'));
    blocks.push(makeBlock(8.0, 2.4, 1.4, 2.0, 'stone'));
    blocks.push(makeCol(10.2, 2.4, 0.48, 2.4, 'metal'));
    blocks.push(makeTnt(9.2, 2.4, 0.6));
    targets.push(makeTarget(9.2, 3.0, 'blue'));
    blocks.push(makeBeam(8.5, 4.8, 5.2, 0.36, 'stone'));
    blocks.push(makeBlock(8.5, 5.16, 1.4, 0.8, 'wood'));
    targets.push(makeTarget(8.5, 5.96, 'pink'));

    // Dark Matter Fortress on Plat 2 (top = 4.0)
    blocks.push(makeBlock(13.2, 4.0, 1.6, 2.4, 'metal'));
    blocks.push(makeBlock(18.8, 4.0, 1.6, 2.4, 'metal'));
    blocks.push(makeCol(16.0, 4.0, 0.5, 2.4, 'stone'));
    targets.push(makeTarget(14.6, 4.0, 'gold'));
    targets.push(makeTarget(17.4, 4.0, 'pink'));
    blocks.push(makeBeam(16.0, 6.4, 6.6, 0.42, 'metal'));

    // Upper bunker
    blocks.push(makeCol(13.8, 6.82, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(18.2, 6.82, 0.46, 2.2, 'stone'));
    blocks.push(makeBlock(16.0, 6.82, 1.2, 1.0, 'metal'));
    targets.push(makeTarget(16.0, 7.82, 'green'));
    blocks.push(makeBeam(16.0, 9.02, 5.2, 0.34, 'stone'));
    targets.push(makeTarget(16.0, 9.36, 'blue'));

    levels.push({
      id: 63,
      name: "Dark Matter Bastion",
      zone: "Cosmic Singularity",
      icon: "🌑",
      difficulty: "Cosmic Deity",
      description: "A monolithic brutalist bunker complex designed with deep recessed cells that protect enemies from direct impacts.",
      coinReward: 920,
      birds: ["heavy", "speed", "chrono", "lightning", "vortex", "fire"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 64: Astral Aegis Citadel
  // Concept: Triple celestial dome with concentric arch frameworks over 3 pillars
  // =========================================================================
  {
    const plats = [
      makePlat(7.2, 1.4, 3.6, 2.8, 'celestial'), // top = 2.8
      makePlat(12.6, 2.0, 5.0, 4.0, 'celestial'), // top = 4.0
      makePlat(18.0, 1.4, 3.6, 2.8, 'celestial')  // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Dome 1 (left, top = 2.8)
    blocks.push(makeBlock(7.2, 2.8, 1.2, 0.6, 'stone'));
    blocks.push(makeCol(5.8, 3.4, 0.42, 2.0, 'glass'));
    blocks.push(makeCol(8.6, 3.4, 0.42, 2.0, 'glass'));
    targets.push(makeTarget(7.2, 3.4, 'blue'));
    blocks.push(makeBeam(7.2, 5.4, 3.6, 0.28, 'stone'));
    targets.push(makeTarget(7.2, 5.68, 'pink'));

    // Dome 3 (right, top = 2.8)
    blocks.push(makeBlock(18.0, 2.8, 1.2, 0.6, 'stone'));
    blocks.push(makeCol(16.6, 3.4, 0.42, 2.0, 'glass'));
    blocks.push(makeCol(19.4, 3.4, 0.42, 2.0, 'glass'));
    targets.push(makeTarget(18.0, 3.4, 'green'));
    blocks.push(makeBeam(18.0, 5.4, 3.6, 0.28, 'stone'));
    targets.push(makeTarget(18.0, 5.68, 'blue'));

    // Center Grand Aegis Dome on Plat 2 (top = 4.0)
    blocks.push(makeCol(10.6, 4.0, 0.5, 2.4, 'metal'));
    blocks.push(makeCol(14.6, 4.0, 0.5, 2.4, 'metal'));
    blocks.push(makeTnt(12.6, 4.0, 0.6));
    targets.push(makeTarget(12.6, 4.6, 'gold'));
    blocks.push(makeBeam(12.6, 6.4, 5.2, 0.38, 'metal'));

    // Crystal Dome Observatory
    blocks.push(makeCol(11.2, 6.78, 0.42, 1.8, 'glass'));
    blocks.push(makeCol(14.0, 6.78, 0.42, 1.8, 'glass'));
    blocks.push(makeBlock(12.6, 6.78, 1.2, 1.0, 'stone'));
    targets.push(makeTarget(12.6, 7.78, 'pink'));
    blocks.push(makeBeam(12.6, 8.58, 4.0, 0.3, 'stone'));
    targets.push(makeTarget(12.6, 8.88, 'gold'));

    levels.push({
      id: 64,
      name: "Astral Aegis Citadel",
      zone: "Cosmic Singularity",
      icon: "🔮",
      difficulty: "Cosmic Deity",
      description: "Three concentric crystal dome observatories linked by energy arches across cosmic pillar foundations.",
      coinReward: 940,
      birds: ["speed", "split", "chrono", "heavy", "fire", "lightning"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 65: Galactic Titan Pantheon (Cosmic Emperor Boss)
  // Concept: Cosmic Council Hall with colonnade & Galactic Titan Emperor Boss
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.6, 4.0, 3.2, 'celestial'), // top = 3.2
      makePlat(12.6, 2.4, 5.6, 4.8, 'celestial'), // top = 4.8
      makePlat(18.4, 1.6, 4.0, 3.2, 'celestial')  // top = 3.2
    ];
    const blocks = [];
    const targets = [];

    // Left Shrine (Plat 1)
    blocks.push(makeBlock(6.8, 3.2, 1.2, 0.6, 'stone'));
    blocks.push(makeCol(5.4, 3.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(8.2, 3.8, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(6.8, 3.8, 'blue'));
    blocks.push(makeBeam(6.8, 6.0, 3.6, 0.28, 'stone'));
    targets.push(makeTarget(6.8, 6.28, 'pink'));

    // Right Shrine (Plat 3)
    blocks.push(makeBlock(18.4, 3.2, 1.2, 0.6, 'stone'));
    blocks.push(makeCol(17.0, 3.8, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(19.8, 3.8, 0.44, 2.2, 'stone'));
    targets.push(makeTarget(18.4, 3.8, 'green'));
    blocks.push(makeBeam(18.4, 6.0, 3.6, 0.28, 'stone'));
    targets.push(makeTarget(18.4, 6.28, 'gold'));

    // Grand Pantheon on Plat 2 (top = 4.8)
    blocks.push(makeCol(10.2, 4.8, 0.52, 2.6, 'metal'));
    blocks.push(makeCol(12.6, 4.8, 0.48, 2.6, 'stone'));
    blocks.push(makeCol(15.0, 4.8, 0.52, 2.6, 'metal'));
    blocks.push(makeTnt(11.4, 4.8, 0.6));
    blocks.push(makeTnt(13.8, 4.8, 0.6));
    targets.push(makeTarget(11.4, 5.4, 'gold'));
    targets.push(makeTarget(13.8, 5.4, 'blue'));
    blocks.push(makeBeam(12.6, 7.4, 5.8, 0.4, 'metal'));

    // High Throne Council (Boss Chamber)
    blocks.push(makeCol(11.0, 7.8, 0.48, 2.2, 'stone'));
    blocks.push(makeCol(14.2, 7.8, 0.48, 2.2, 'stone'));
    // Galactic Titan Emperor Boss!
    targets.push(makeTarget(12.6, 7.8, 'boss', true, 0.74));

    // Pediment Roof & Cosmic Crown
    blocks.push(makeBeam(12.6, 10.0, 4.8, 0.34, 'stone'));
    blocks.push(makeBlock(12.6, 10.34, 1.6, 1.0, 'metal'));
    targets.push(makeTarget(12.6, 11.34, 'gold'));

    levels.push({
      id: 65,
      name: "Galactic Titan Pantheon",
      zone: "Cosmic Singularity",
      icon: "🏛️",
      difficulty: "Cosmic Emperor Boss",
      description: "The celestial council hall of cosmic deities, crowned by the throne of the Galactic Titan Emperor.",
      coinReward: 1050,
      birds: ["heavy", "chrono", "vortex", "fire", "lightning", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 66: Infinity Core Stronghold
  // Concept: Figure-eight interlocking towers with suspended center cage
  // =========================================================================
  {
    const plats = [
      makePlat(9.0, 1.4, 5.8, 2.8, 'celestial'), // top = 2.8
      makePlat(16.5, 1.4, 5.8, 2.8, 'celestial') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Left Ring Tower (on Plat 1)
    blocks.push(makeBlock(9.0, 2.8, 1.4, 0.6, 'stone'));
    blocks.push(makeCol(7.0, 3.4, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(11.0, 3.4, 0.48, 2.2, 'metal'));
    blocks.push(makeTnt(9.0, 3.4, 0.6));
    targets.push(makeTarget(9.0, 4.0, 'blue'));
    blocks.push(makeBeam(9.0, 5.6, 5.0, 0.34, 'stone'));
    blocks.push(makeCol(7.8, 5.94, 0.42, 1.8, 'wood'));
    blocks.push(makeCol(10.2, 5.94, 0.42, 1.8, 'wood'));
    targets.push(makeTarget(9.0, 5.94, 'pink'));
    blocks.push(makeBeam(9.0, 7.74, 3.8, 0.28, 'stone'));

    // Right Ring Tower (on Plat 2)
    blocks.push(makeBlock(16.5, 2.8, 1.4, 0.6, 'stone'));
    blocks.push(makeCol(14.5, 3.4, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(18.5, 3.4, 0.48, 2.2, 'metal'));
    blocks.push(makeCoin(16.5, 3.4, 0.5));
    targets.push(makeTarget(16.5, 3.9, 'green'));
    blocks.push(makeBeam(16.5, 5.6, 5.0, 0.34, 'stone'));
    blocks.push(makeCol(15.3, 5.94, 0.42, 1.8, 'wood'));
    blocks.push(makeCol(17.7, 5.94, 0.42, 1.8, 'wood'));
    targets.push(makeTarget(16.5, 5.94, 'blue'));
    blocks.push(makeBeam(16.5, 7.74, 3.8, 0.28, 'stone'));

    // High Tension Suspension Bridge holding the central suspended cage in midair!
    blocks.push(makeBeam(12.75, 5.6, 5.6, 0.3, 'metal'));
    // Suspended cage over the abyss gap!
    blocks.push(makeCol(12.0, 5.9, 0.36, 1.6, 'glass'));
    blocks.push(makeCol(13.5, 5.9, 0.36, 1.6, 'glass'));
    targets.push(makeTarget(12.75, 5.9, 'gold'));
    blocks.push(makeBeam(12.75, 7.5, 2.6, 0.24, 'wood'));

    levels.push({
      id: 66,
      name: "Infinity Core Stronghold",
      zone: "Cosmic Singularity",
      icon: "♾️",
      difficulty: "Deity Sovereign",
      description: "Dual figure-eight cylindrical towers supporting a fragile suspended prisoner cage hanging over open airspace.",
      coinReward: 1100,
      birds: ["split", "chrono", "heavy", "speed", "fire", "vortex"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 67: Celestial Vault of Gods
  // Concept: Stairway to Heaven / 3 ascending sky terraces rising higher
  // =========================================================================
  {
    const plats = [
      makePlat(7.0, 1.2, 3.8, 2.4, 'celestial'), // top = 2.4 (Low terrace)
      makePlat(12.2, 2.0, 4.4, 4.0, 'celestial'), // top = 4.0 (Mid terrace)
      makePlat(17.5, 2.8, 4.2, 5.6, 'celestial')  // top = 5.6 (High sky terrace!)
    ];
    const blocks = [];
    const targets = [];

    // Terrace 1: Entry Sanctuary (top = 2.4)
    blocks.push(makeBlock(7.0, 2.4, 1.2, 0.6, 'stone'));
    blocks.push(makeCol(5.8, 3.0, 0.44, 2.0, 'stone'));
    blocks.push(makeCol(8.2, 3.0, 0.44, 2.0, 'stone'));
    targets.push(makeTarget(7.0, 3.0, 'blue'));
    blocks.push(makeBeam(7.0, 5.0, 3.4, 0.28, 'stone'));
    targets.push(makeTarget(7.0, 5.28, 'pink'));

    // Connecting Stair-Bridge 1 to 2
    blocks.push(makeBeam(9.6, 4.4, 2.8, 0.24, 'wood'));

    // Terrace 2: Hall of Oracles (top = 4.0)
    blocks.push(makeBlock(12.2, 4.0, 1.4, 0.6, 'metal'));
    blocks.push(makeCol(10.8, 4.6, 0.48, 2.2, 'metal'));
    blocks.push(makeCol(13.6, 4.6, 0.48, 2.2, 'metal'));
    blocks.push(makeTnt(12.2, 4.6, 0.6));
    targets.push(makeTarget(12.2, 5.2, 'gold'));
    blocks.push(makeBeam(12.2, 6.8, 4.0, 0.32, 'stone'));
    targets.push(makeTarget(12.2, 7.12, 'green'));

    // Connecting Stair-Bridge 2 to 3
    blocks.push(makeBeam(14.8, 6.0, 2.8, 0.24, 'wood'));

    // Terrace 3: High Throne of the Gods (top = 5.6)
    blocks.push(makeBlock(17.5, 5.6, 1.6, 0.6, 'metal'));
    blocks.push(makeCol(16.0, 6.2, 0.5, 2.4, 'stone'));
    blocks.push(makeCol(19.0, 6.2, 0.5, 2.4, 'metal'));
    targets.push(makeTarget(17.5, 6.2, 'blue'));
    blocks.push(makeBeam(17.5, 8.6, 4.2, 0.34, 'stone'));
    // Apex shrine
    blocks.push(makeCol(17.5, 8.94, 0.4, 1.8, 'glass'));
    targets.push(makeTarget(17.5, 10.74, 'gold'));

    levels.push({
      id: 67,
      name: "Celestial Vault of Gods",
      zone: "Cosmic Singularity",
      icon: "⛩️",
      difficulty: "Deity Sovereign",
      description: "An ascending celestial acropolis spanning three stepped terraces that rise progressively into the heavens.",
      coinReward: 1150,
      birds: ["speed", "heavy", "chrono", "lightning", "vortex", "split"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 68: Imperial Sky Pantheon
  // Concept: Massive flying Sky Dreadnought battleship on mountain drydock
  // =========================================================================
  {
    const plats = [
      makePlat(8.0, 1.4, 5.4, 2.8, 'celestial'), // top = 2.8
      makePlat(15.8, 1.8, 6.6, 3.6, 'celestial') // top = 3.6
    ];
    const blocks = [];
    const targets = [];

    // Gantry moorings
    blocks.push(makeCol(6.4, 2.8, 0.5, 2.6, 'metal'));
    blocks.push(makeCol(9.6, 2.8, 0.5, 2.6, 'metal'));
    blocks.push(makeTnt(8.0, 2.8, 0.6));
    targets.push(makeTarget(8.0, 3.4, 'blue'));

    blocks.push(makeCol(13.6, 3.6, 0.5, 2.4, 'metal'));
    blocks.push(makeCol(18.0, 3.6, 0.5, 2.4, 'metal'));
    targets.push(makeTarget(15.8, 3.6, 'green'));

    // Dreadnought Armored Hull Keel (spans from x=5.5 to x=19.5 at y=6.0!)
    const keelY = 6.0;
    blocks.push(makeBeam(12.5, keelY, 14.8, 0.44, 'metal'));

    // Prow Ram (left, tapered)
    blocks.push(makeBlock(6.2, keelY + 0.44, 1.8, 1.4, 'metal'));
    targets.push(makeTarget(6.2, keelY + 1.84, 'pink'));

    // Main Gun Turrets & Crew Quarters
    blocks.push(makeCol(9.4, keelY + 0.44, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(12.5, keelY + 0.44, 0.44, 2.2, 'stone'));
    blocks.push(makeCol(15.6, keelY + 0.44, 0.44, 2.2, 'metal'));
    blocks.push(makeTnt(14.0, keelY + 0.44, 0.6));
    targets.push(makeTarget(11.0, keelY + 0.44, 'gold'));
    targets.push(makeTarget(14.0, keelY + 1.04, 'blue'));

    // Flight Deck Beam
    const deckY = keelY + 0.44 + 2.2; // 8.64
    blocks.push(makeBeam(13.0, deckY, 10.8, 0.36, 'metal'));

    // Command Conning Tower
    blocks.push(makeCol(12.0, deckY + 0.36, 0.42, 1.8, 'metal'));
    blocks.push(makeCol(14.4, deckY + 0.36, 0.42, 1.8, 'metal'));
    targets.push(makeTarget(13.2, deckY + 0.36, 'boss', false, 0.6));
    blocks.push(makeBeam(13.2, deckY + 2.16, 3.4, 0.28, 'stone'));

    levels.push({
      id: 68,
      name: "Imperial Sky Pantheon",
      zone: "Cosmic Singularity",
      icon: "🚢",
      difficulty: "Deity Sovereign",
      description: "An imperial dreadnought battleship docked atop mountain pylons, bristling with heavy deck armor and munition bays.",
      coinReward: 1200,
      birds: ["heavy", "fire", "chrono", "vortex", "lightning", "speed"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 69: Singularity Apex Sanctum
  // Concept: 5-story kinetic house-of-cards domino balance puzzle
  // =========================================================================
  {
    const plats = [
      makePlat(12.5, 1.4, 10.2, 2.8, 'celestial') // top = 2.8
    ];
    const blocks = [];
    const targets = [];

    // Base Tier (width 9.4): 4 delicate balance fulcrums
    blocks.push(makeCol(8.4, 2.8, 0.4, 2.2, 'glass')); // Critical glass trigger!
    blocks.push(makeCol(10.8, 2.8, 0.44, 2.2, 'wood'));
    blocks.push(makeCol(14.2, 2.8, 0.44, 2.2, 'wood'));
    blocks.push(makeCol(16.6, 2.8, 0.4, 2.2, 'glass'));
    blocks.push(makeTnt(12.5, 2.8, 0.6));
    targets.push(makeTarget(9.6, 2.8, 'blue'));
    targets.push(makeTarget(15.4, 2.8, 'pink'));
    // Heavy stone beam resting on delicate glass & wood fulcrums
    blocks.push(makeBeam(12.5, 5.0, 9.6, 0.38, 'stone'));

    // Tier 2: Stepped inward balance beam
    blocks.push(makeCol(9.8, 5.38, 0.4, 1.8, 'wood'));
    blocks.push(makeCol(15.2, 5.38, 0.4, 1.8, 'wood'));
    targets.push(makeTarget(12.5, 5.38, 'gold'));
    blocks.push(makeBeam(12.5, 7.18, 7.2, 0.34, 'metal'));

    // Tier 3: Triangular pivot
    blocks.push(makeCol(11.0, 7.52, 0.38, 1.6, 'glass'));
    blocks.push(makeCol(14.0, 7.52, 0.38, 1.6, 'glass'));
    targets.push(makeTarget(12.5, 7.52, 'green'));
    blocks.push(makeBeam(12.5, 9.12, 4.8, 0.32, 'stone'));

    // Tier 4: Pinnacle needle
    blocks.push(makeCol(12.5, 9.44, 0.4, 1.6, 'metal'));
    targets.push(makeTarget(12.5, 11.04, 'pink'));
    blocks.push(makeBlock(12.5, 11.92, 1.2, 0.8, 'stone'));
    targets.push(makeTarget(12.5, 12.72, 'gold'));

    levels.push({
      id: 69,
      name: "Singularity Apex Sanctum",
      zone: "Cosmic Singularity",
      icon: "🎯",
      difficulty: "Deity Sovereign",
      description: "An intricate multi-tier house-of-cards kinetic puzzle where shattering key balance fulcrums triggers a catastrophic domino collapse.",
      coinReward: 1250,
      birds: ["speed", "chrono", "heavy", "split", "fire", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }

  // =========================================================================
  // LEVEL 70: Omnipotent God Sovereign Citadel (Supreme God Finale Boss)
  // Concept: The Ultimate Cosmic Deity Megastructure: triple citadels,
  // 5-tier royal throne keep, reinforced titan vault & Supreme God Finale Boss!
  // =========================================================================
  {
    const plats = [
      makePlat(6.8, 1.5, 4.2, 3.0, 'celestial'), // top = 3.0
      makePlat(12.8, 2.5, 6.4, 5.0, 'celestial'), // top = 5.0 (Grand Throne Rock!)
      makePlat(18.8, 1.5, 4.2, 3.0, 'celestial')  // top = 3.0
    ];
    const blocks = [];
    const targets = [];

    // Left God Bastion (Plat 1, top = 3.0): 4 stories
    blocks.push(makeBlock(5.4, 3.0, 0.8, 0.8, 'metal'));
    blocks.push(makeBlock(8.2, 3.0, 0.8, 0.8, 'metal'));
    blocks.push(makeCol(5.4, 3.8, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(8.2, 3.8, 0.46, 2.2, 'stone'));
    targets.push(makeTarget(6.8, 3.8, 'blue'));
    blocks.push(makeBeam(6.8, 6.0, 3.6, 0.3, 'stone'));
    blocks.push(makeCol(6.0, 6.3, 0.4, 1.8, 'wood'));
    blocks.push(makeCol(7.6, 6.3, 0.4, 1.8, 'wood'));
    targets.push(makeTarget(6.8, 6.3, 'pink'));
    blocks.push(makeBeam(6.8, 8.1, 2.8, 0.26, 'stone'));
    blocks.push(makeBlock(6.8, 8.36, 1.2, 0.8, 'metal'));
    targets.push(makeTarget(6.8, 9.16, 'gold'));

    // Right God Bastion (Plat 3, top = 3.0): 4 stories
    blocks.push(makeBlock(17.4, 3.0, 0.8, 0.8, 'stone'));
    blocks.push(makeBlock(20.2, 3.0, 0.8, 0.8, 'stone'));
    blocks.push(makeCol(17.4, 3.8, 0.46, 2.2, 'stone'));
    blocks.push(makeCol(20.2, 3.8, 0.46, 2.2, 'metal'));
    targets.push(makeTarget(18.8, 3.8, 'green'));
    blocks.push(makeBeam(18.8, 6.0, 3.6, 0.3, 'metal'));
    blocks.push(makeTnt(18.8, 6.3, 0.6));
    blocks.push(makeCol(17.8, 6.3, 0.4, 1.8, 'glass'));
    blocks.push(makeCol(19.8, 6.3, 0.4, 1.8, 'glass'));
    targets.push(makeTarget(18.8, 6.9, 'blue'));
    blocks.push(makeBeam(18.8, 8.1, 2.8, 0.26, 'stone'));
    blocks.push(makeBlock(18.8, 8.36, 1.2, 0.8, 'metal'));
    targets.push(makeTarget(18.8, 9.16, 'pink'));

    // Central Sovereign Throne Keep on Plat 2 (top = 5.0)
    // Tier 1: Armored Titan Vault
    blocks.push(makeCol(10.4, 5.0, 0.52, 2.6, 'metal'));
    blocks.push(makeCol(12.8, 5.0, 0.48, 2.6, 'stone'));
    blocks.push(makeCol(15.2, 5.0, 0.52, 2.6, 'metal'));
    blocks.push(makeTnt(11.6, 5.0, 0.6));
    blocks.push(makeTnt(14.0, 5.0, 0.6));
    targets.push(makeTarget(11.6, 5.6, 'gold'));
    targets.push(makeTarget(14.0, 5.6, 'gold'));
    blocks.push(makeBeam(12.8, 7.6, 6.0, 0.4, 'metal')); // Sovereign floor slab

    // Tier 2: Lightning Grid Chamber
    blocks.push(makeCol(11.0, 8.0, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(14.6, 8.0, 0.46, 2.2, 'metal'));
    blocks.push(makeBlock(12.8, 8.0, 1.4, 1.4, 'glass'));
    targets.push(makeTarget(12.8, 9.4, 'pink'));
    blocks.push(makeBeam(12.8, 10.2, 4.8, 0.34, 'stone'));

    // Tier 3: Supreme God King Throne (Ultimate Boss Chamber)
    blocks.push(makeCol(11.6, 10.54, 0.46, 2.2, 'metal'));
    blocks.push(makeCol(14.0, 10.54, 0.46, 2.2, 'metal'));
    // SUPREME GOD FINALE BOSS!
    targets.push(makeTarget(12.8, 10.54, 'boss', true, 0.74));

    // Tier 4: Cosmic Crown & Zenith Spire
    blocks.push(makeBeam(12.8, 12.74, 3.8, 0.32, 'metal'));
    blocks.push(makeBlock(12.8, 13.06, 1.2, 1.0, 'glass'));
    targets.push(makeTarget(12.8, 14.06, 'gold'));

    levels.push({
      id: 70,
      name: "Omnipotent God Sovereign Citadel",
      zone: "Cosmic Singularity",
      icon: "👑",
      difficulty: "Supreme God Finale Boss",
      description: "The ultimate cosmic deity megastructure crowned by the throne of the Omnipotent God Sovereign King.",
      coinReward: 1500,
      birds: ["heavy", "fire", "chrono", "lightning", "vortex", "chrono"],
      platforms: plats,
      blocks,
      targets
    });
  }
}
