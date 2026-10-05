// Generator for Levels 30 to 70 with 100% unique, hard, and complex designs
import fs from 'fs';

function p(val) {
  return Number(val.toFixed(3));
}

// Helpers
function makePlat(x, y, w, h, type = 'volcanic') {
  return {
    pos: [p(x), p(y), 0],
    size: [p(w), p(h), 5],
    type
  };
}

function makeCol(x, yBot, w, h, type = 'stone', isStatic = false) {
  const yMid = yBot + h / 2;
  return {
    type,
    pos: [p(x), p(yMid), 0],
    size: [p(w), p(h), 0.8],
    ...(isStatic ? { isStatic: true } : {})
  };
}

function makeBeam(x, yBot, w, h, type = 'stone', isStatic = false) {
  const yMid = yBot + h / 2;
  return {
    type,
    pos: [p(x), p(yMid), 0],
    size: [p(w), p(h), 0.8],
    ...(isStatic ? { isStatic: true } : {})
  };
}

function makeBlock(x, yBot, w, h, type = 'stone', isStatic = false) {
  const yMid = yBot + h / 2;
  return {
    type,
    pos: [p(x), p(yMid), 0],
    size: [p(w), p(h), 0.8],
    ...(isStatic ? { isStatic: true } : {})
  };
}

function makeTnt(x, yBot, size = 0.6) {
  const yMid = yBot + size / 2;
  return {
    type: 'tnt',
    pos: [p(x), p(yMid), 0],
    size: [p(size), p(size), 0.8]
  };
}

function makeCoin(x, yBot, size = 0.5) {
  const yMid = yBot + size / 2;
  return {
    type: 'coin',
    pos: [p(x), p(yMid), 0],
    size: [p(size), p(size), 0.8]
  };
}

function makeTarget(x, yBot, birdType = 'blue', isBoss = false, radius = null) {
  const r = radius || (isBoss ? 0.62 : 0.44);
  const yMid = yBot + r;
  return {
    pos: [p(x), p(yMid), 0],
    radius: p(r),
    isBoss,
    birdType
  };
}

export { makePlat, makeCol, makeBeam, makeBlock, makeTnt, makeCoin, makeTarget };
