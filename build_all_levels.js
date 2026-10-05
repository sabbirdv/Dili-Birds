import fs from 'fs';
import { LEVELS } from './src/levels/levelData.js';
import { getTier1Levels } from './generate_tier1_levels.js';
import { getTier2Levels } from './generate_tier2_levels.js';

console.log('Original levels count:', LEVELS.length);
const levels1to29 = LEVELS.slice(0, 29);
console.log('Levels 1-29 count:', levels1to29.length);

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

// Validation 2: Check uniqueness of platforms across L30-L70
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
console.log(`Unique platform configurations among 30-70: ${platSignatures.size} / 41`);

// Validation 3: Check bounds and physics properties
allNewLevels.forEach(l => {
  if (l.id >= 30) {
    const minX = Math.min(...l.blocks.map(b => b.pos[0]));
    const maxX = Math.max(...l.blocks.map(b => b.pos[0]));
    const minY = Math.min(...l.blocks.map(b => b.pos[1]));
    const maxY = Math.max(...l.blocks.map(b => b.pos[1]));
    if (minX < 4.0 || maxX > 22.0) {
      console.warn(`Level ${l.id} (${l.name}) X bounds out of standard range: [${minX.toFixed(1)}, ${maxX.toFixed(1)}]`);
    }
    if (minY < 1.0 || maxY > 15.0) {
      console.warn(`Level ${l.id} (${l.name}) Y bounds out of standard range: [${minY.toFixed(1)}, ${maxY.toFixed(1)}]`);
    }
    const bosses = l.targets.filter(t => t.isBoss).length;
    console.log(
      `L${l.id.toString().padStart(2)}: ${l.name.padEnd(30)} | Plats: ${l.platforms.length} | Blocks: ${l.blocks.length.toString().padStart(2)} | Targets: ${l.targets.length.toString().padStart(2)}${bosses > 0 ? ` (Boss: ${bosses})` : ''} | Birds: ${l.birds.length} | X: [${minX.toFixed(1)}, ${maxX.toFixed(1)}] Y: [${minY.toFixed(1)}, ${maxY.toFixed(1)}]`
    );
  }
});

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
