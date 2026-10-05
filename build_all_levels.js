import fs from 'fs';
import { LEVELS } from './src/levels/levelData.js';
import { buildLevel10, buildLevel20 } from './generate_challenge_levels_10_20.js';
import { getTier1Levels } from './generate_tier1_levels.js';
import { getTier2Levels } from './generate_tier2_levels.js';

console.log('Original levels count:', LEVELS.length);

// Extract base levels 1 to 29 (except 10 and 20 which we will replace with the new challenge levels)
const lvl10 = buildLevel10();
const lvl20 = buildLevel20();

const levels1to29 = LEVELS.slice(0, 29).map(l => {
  if (l.id === 10) return lvl10;
  if (l.id === 20) return lvl20;
  return l;
});
console.log('Levels 1-29 count (with L10 and L20 challenge versions):', levels1to29.length);

const tier1 = getTier1Levels();
console.log('Tier 1 levels (30-50) count:', tier1.length);

const tier2 = getTier2Levels();
console.log('Tier 2 levels (51-70) count:', tier2.length);

const allNewLevels = [...levels1to29, ...tier1, ...tier2];
console.log('Total combined levels:', allNewLevels.length);

// Validation 1: Check IDs from 1 to 70
for (let id = 1; id <= 70; id++) {
  const lvl = allNewLevels.find(l => l.id === id);
  if (!lvl) {
    throw new Error(`Missing level id ${id}!`);
  }
}

// Validation 2: Check challenge levels (10, 20, 30, 40, 50, 60, 70) progression
console.log('\n=== CHALLENGE LEVELS PROGRESSION CHECK (10, 20, 30, 40, 50, 60, 70) ===');
const challengeIds = [10, 20, 30, 40, 50, 60, 70];
let lastBlockCount = 0;
let lastTargetCount = 0;

challengeIds.forEach(id => {
  const lvl = allNewLevels.find(l => l.id === id);
  const bossCount = lvl.targets.filter(t => t.isBoss).length;
  console.log(
    `Challenge L${id.toString().padStart(2)}: ${lvl.name.padEnd(35)} | Blocks: ${lvl.blocks.length.toString().padStart(2)} | Targets: ${lvl.targets.length.toString().padStart(2)} (Boss: ${bossCount}) | Birds: ${lvl.birds.length} (${lvl.birds.join(',')})`
  );
  if (lvl.blocks.length < lastBlockCount) {
    console.warn(`WARNING: Block count did not strictly increase: L${id} (${lvl.blocks.length}) vs previous (${lastBlockCount})`);
  }
  lastBlockCount = lvl.blocks.length;
  lastTargetCount = lvl.targets.length;
});

// Validation 3: Check uniqueness of platforms across L30-L70
const platSignatures = new Map();
for (let id = 30; id <= 70; id++) {
  const lvl = allNewLevels.find(l => l.id === id);
  const sig = lvl.platforms.map(p => `${p.pos[0].toFixed(1)},${p.pos[1].toFixed(1)},${p.size[0].toFixed(1)}`).join('|');
  if (platSignatures.has(sig)) {
    console.warn(`WARNING: Duplicate platform signature between L${platSignatures.get(sig)} and L${id}: ${sig}`);
  } else {
    platSignatures.set(sig, id);
  }
}
console.log(`\nUnique platform configurations among 30-70: ${platSignatures.size} / 41`);

// Output code generation
const fileHeader = `// Level Configurations for Dili Birds
// Each level defines platforms, blocks, targets, birds available, and environment properties.
// Materials: 'wood', 'stone', 'glass', 'metal', 'tnt', 'coin'
// Targets: 'blue' (Red Bird), 'pink' (Speed Bird), 'gold' (Bomb Bird), 'green' (Split Bird)
// Birds queue: 'red', 'speed', 'heavy', 'split', 'fire', 'vortex', 'lightning', 'chrono'

export const LEVELS = ${JSON.stringify(allNewLevels, null, 2)};
`;

fs.writeFileSync('./src/levels/levelData.js', fileHeader, 'utf8');
console.log('Successfully wrote src/levels/levelData.js!');
