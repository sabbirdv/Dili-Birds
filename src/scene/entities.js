import * as THREE from 'three';

const textureCache = new Map();

/**
 * Builds the 2D profile of the signature Dili-Birds rounded pill / speech-bubble
 * character body (including the bottom-right speech-bubble tail notch) for 3D extrusion.
 */
function createSpeechBubblePillShape(width = 1.15, height = 0.62) {
  const shape = new THREE.Shape();
  const hw = width / 2;
  const hh = height / 2;
  const r = hh; // Semicircular left and right ends

  // Start at top-left straight edge
  shape.moveTo(-hw + r, hh);
  // Top edge to top-right
  shape.lineTo(hw - r, hh);
  // Right semicircular cap (from +90 deg to -90 deg)
  shape.absarc(hw - r, 0, r, Math.PI / 2, -Math.PI / 2, true);

  // Bottom-right speech-bubble tail notch (matches character.png & sub-character-*.png)
  shape.lineTo(0.02, -hh - 0.14);
  shape.lineTo(0.02, -hh);

  // Bottom edge to bottom-left
  shape.lineTo(-hw + r, -hh);
  // Left semicircular cap (from -90 deg to +90 deg)
  shape.absarc(-hw + r, 0, r, -Math.PI / 2, Math.PI / 2, true);

  return shape;
}

/**
 * Builds a 3D Heart shape for the heart-eyed target characters (sub-character.png & sub-character-2.png).
 */
function createHeartShape(scale = 0.085) {
  const shape = new THREE.Shape();
  const s = scale;
  shape.moveTo(0, -1.1 * s);
  shape.bezierCurveTo(1.2 * s, -0.3 * s, 1.4 * s, 0.9 * s, 0.65 * s, 1.15 * s);
  shape.bezierCurveTo(0.2 * s, 1.3 * s, 0, 0.85 * s, 0, 0.65 * s);
  shape.bezierCurveTo(0, 0.85 * s, -0.2 * s, 1.3 * s, -0.65 * s, 1.15 * s);
  shape.bezierCurveTo(-1.4 * s, 0.9 * s, -1.2 * s, -0.3 * s, 0, -1.1 * s);
  return shape;
}

/**
 * Creates one 3D sculpted Dili-Bird eye:
 * A 45-degree rotated diamond consisting of a 3D white left-chevron ('<')
 * and a nested 3D black diamond pupil on the right.
 */
function createSculptedChevronEye(scale = 1.0) {
  const eyeGroup = new THREE.Group();

  const whiteMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.05
  });
  const blackMat = new THREE.MeshStandardMaterial({
    color: 0x090d16,
    roughness: 0.15,
    metalness: 0.1
  });

  // Rotated 45 degrees so box primitives align with the diamond axes
  const diamondHolder = new THREE.Group();
  diamondHolder.rotation.z = Math.PI / 4;

  const fullSize = 0.21 * scale;
  const depth = 0.055 * scale;

  // White diamond base (shifted slightly toward bottom-left in rotated coords = left chevron in world coords)
  const whiteBase = new THREE.Mesh(
    new THREE.BoxGeometry(fullSize, fullSize, depth),
    whiteMat
  );
  diamondHolder.add(whiteBase);

  // Black diamond pupil inset on the right side of the diamond (top-right in rotated 45° space)
  const pupilSize = fullSize * 0.58;
  const offset = (fullSize - pupilSize) * 0.52;
  const blackPupil = new THREE.Mesh(
    new THREE.BoxGeometry(pupilSize, pupilSize, depth * 1.28),
    blackMat
  );
  blackPupil.position.set(offset, -offset, depth * 0.12);
  diamondHolder.add(blackPupil);

  eyeGroup.add(diamondHolder);
  return eyeGroup;
}

/**
 * Creates one 3D sculpted Heart-Diamond eye for the target characters
 * (matching sub-character.png and sub-character-2.png):
 * A 3D white rotated diamond base topped with a 3D extruded pink heart.
 */
function createSculptedHeartEye(scale = 1.0) {
  const eyeGroup = new THREE.Group();

  const whiteMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.35
  });
  const pinkHeartMat = new THREE.MeshStandardMaterial({
    color: 0xf472b6,
    roughness: 0.3,
    metalness: 0.05
  });

  const diamondSize = 0.21 * scale;
  const whiteDiamond = new THREE.Mesh(
    new THREE.BoxGeometry(diamondSize, diamondSize, 0.05 * scale),
    whiteMat
  );
  whiteDiamond.rotation.z = Math.PI / 4;
  eyeGroup.add(whiteDiamond);

  const heartShape = createHeartShape(0.082 * scale);
  const heartGeo = new THREE.ExtrudeGeometry(heartShape, {
    depth: 0.04 * scale,
    bevelEnabled: true,
    bevelThickness: 0.012 * scale,
    bevelSize: 0.01 * scale,
    bevelSegments: 4
  });
  heartGeo.center();

  const heartMesh = new THREE.Mesh(heartGeo, pinkHeartMat);
  heartMesh.position.set(0.025 * scale, -0.015 * scale, 0.032 * scale);
  heartMesh.rotation.z = -0.12;
  eyeGroup.add(heartMesh);

  return eyeGroup;
}

/**
 * Creates the 3D sculpted curved U-smile mouth for the Dili-Bird characters.
 */
function createSculptedSmileMouth(scale = 1.0) {
  const mouthGroup = new THREE.Group();
  const blackMat = new THREE.MeshStandardMaterial({
    color: 0x090d16,
    roughness: 0.2
  });

  const arcRadius = 0.068 * scale;
  const tubeRadius = 0.018 * scale;
  const torusArc = new THREE.Mesh(
    new THREE.TorusGeometry(arcRadius, tubeRadius, 12, 24, Math.PI),
    blackMat
  );
  torusArc.rotation.z = Math.PI;
  mouthGroup.add(torusArc);

  // Rounded end-caps on the smile arc
  [-1, 1].forEach((side) => {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(tubeRadius, 8, 8), blackMat);
    cap.position.set(side * arcRadius, 0, 0);
    mouthGroup.add(cap);
  });

  return mouthGroup;
}

/**
 * Creates the 3D sculpted core speech-bubble character with 3D facial geometry on front & back.
 */
function createSculptedSpeechBubbleCore({
  scale = 1.0,
  bodyColor = 0x2546f0,
  metalness = 0.15,
  roughness = 0.25,
  eyeStyle = 'chevron', // 'chevron' | 'heart'
  isFluffy = false
}) {
  const coreGroup = new THREE.Group();

  const pillShape = createSpeechBubblePillShape(1.12 * scale, 0.58 * scale);
  const extrudeDepth = 0.34 * scale;
  const pillGeo = new THREE.ExtrudeGeometry(pillShape, {
    depth: extrudeDepth,
    bevelEnabled: true,
    bevelThickness: 0.09 * scale,
    bevelSize: 0.07 * scale,
    bevelSegments: 8,
    curveSegments: 24
  });
  pillGeo.center();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: bodyColor,
    roughness,
    metalness
  });

  const bodyMesh = new THREE.Mesh(pillGeo, bodyMat);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  coreGroup.add(bodyMesh);

  // For sub-character.png (fluffy plush target), sculpt 3D fur/plush tufts around the perimeter
  if (isFluffy) {
    const tuftGeo = new THREE.DodecahedronGeometry(0.11 * scale, 1);
    const tuftMat = new THREE.MeshStandardMaterial({
      color: 0x3b66f5,
      roughness: 0.85,
      flatShading: true
    });
    const tuftCount = 26;
    for (let i = 0; i < tuftCount; i++) {
      const angle = (i / tuftCount) * Math.PI * 2;
      const rx = Math.cos(angle) * 0.56 * scale;
      const ry = Math.sin(angle) * 0.31 * scale;
      const tuft = new THREE.Mesh(tuftGeo, tuftMat);
      tuft.position.set(rx, ry, (i % 2 === 0 ? 1 : -1) * 0.08 * scale);
      tuft.rotation.set(i * 0.7, i * 1.1, angle);
      coreGroup.add(tuft);
    }
  }

  // Attach 3D sculpted eyes and mouth on both front (+Z) and back (-Z) faces
  const zFaceOffset = (extrudeDepth / 2 + 0.095 * scale);
  [1, -1].forEach((zDir) => {
    const faceGroup = new THREE.Group();
    faceGroup.position.z = zDir * zFaceOffset;
    if (zDir === -1) {
      faceGroup.rotation.y = Math.PI;
    }

    const leftEye =
      eyeStyle === 'heart' ? createSculptedHeartEye(scale) : createSculptedChevronEye(scale);
    leftEye.position.set(-0.27 * scale, 0.02 * scale, 0);
    faceGroup.add(leftEye);

    const rightEye =
      eyeStyle === 'heart' ? createSculptedHeartEye(scale) : createSculptedChevronEye(scale);
    rightEye.position.set(0.27 * scale, 0.02 * scale, 0);
    faceGroup.add(rightEye);

    if (eyeStyle === 'heart') {
      // 3D Black O-mouth for sub-character.png & sub-character-2.png
      const oMouth = new THREE.Mesh(
        new THREE.CylinderGeometry(0.058 * scale, 0.058 * scale, 0.05 * scale, 18),
        new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.25 })
      );
      oMouth.rotation.x = Math.PI / 2;
      oMouth.position.set(0, -0.07 * scale, 0);
      faceGroup.add(oMouth);
    } else {
      // 3D Curved U-smile for character.png, character-2.png, character-3.png
      const smile = createSculptedSmileMouth(scale);
      smile.position.set(0, -0.055 * scale, 0.015 * scale);
      faceGroup.add(smile);
    }

    coreGroup.add(faceGroup);
  });

  return coreGroup;
}

/**
 * Creates 3D sculpted swept wings matching character.png.
 */
function createSculptedWings(scale = 1.0, color = 0x2952ff) {
  const wingsGroup = new THREE.Group();
  const wingMat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.25,
    metalness: 0.12
  });

  [-1, 1].forEach((side) => {
    const wShape = new THREE.Shape();
    wShape.moveTo(0, -0.11 * scale);
    wShape.lineTo(side * 0.52 * scale, 0.16 * scale);
    wShape.quadraticCurveTo(
      side * 0.58 * scale,
      0.28 * scale,
      side * 0.46 * scale,
      0.34 * scale
    );
    wShape.lineTo(0, 0.08 * scale);
    wShape.closePath();

    const wGeo = new THREE.ExtrudeGeometry(wShape, {
      depth: 0.12 * scale,
      bevelEnabled: true,
      bevelThickness: 0.03 * scale,
      bevelSize: 0.025 * scale,
      bevelSegments: 5
    });
    wGeo.center();

    const wingMesh = new THREE.Mesh(wGeo, wingMat);
    wingMesh.position.set(side * 0.82 * scale, 0.02 * scale, 0);
    wingMesh.castShadow = true;
    wingsGroup.add(wingMesh);
  });

  return wingsGroup;
}

/**
 * Creates aerodynamic speed fins for 'speed' (Speedster Swift).
 */
function createSpeedFins(scale = 1.0, color = 0x0ea5e9) {
  const group = new THREE.Group();
  const finMat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.22,
    metalness: 0.25
  });

  [-1, 1].forEach((side) => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.06 * scale);
    shape.lineTo(side * 0.38 * scale, -0.02 * scale);
    shape.lineTo(side * 0.46 * scale, 0.16 * scale);
    shape.lineTo(0, 0.08 * scale);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.08 * scale,
      bevelEnabled: true,
      bevelThickness: 0.02 * scale,
      bevelSize: 0.015 * scale,
      bevelSegments: 4
    });
    geo.center();

    const mesh = new THREE.Mesh(geo, finMat);
    mesh.position.set(side * 0.65 * scale, 0.05 * scale, 0);
    mesh.rotation.z = side * -0.25;
    mesh.castShadow = true;
    group.add(mesh);
  });

  return group;
}

/**
 * Creates 3 orbiting satellite energy clusters for 'split' (Splitter Trio).
 */
function createSplitSatellites(radius, scale) {
  const group = new THREE.Group();
  const satMat = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    emissive: 0xd97706,
    emissiveIntensity: 0.35,
    roughness: 0.2,
    metalness: 0.1
  });
  const satGeo = new THREE.SphereGeometry(0.09 * scale, 12, 12);

  // 3 satellite orbs positioned symmetrically at 120-degree intervals around outer rim
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3 + 0.5;
    const orb = new THREE.Mesh(satGeo, satMat);
    orb.position.set(
      Math.cos(angle) * radius * 0.95,
      Math.sin(angle) * radius * 0.95,
      (i % 2 === 0 ? 0.06 : -0.06) * scale
    );
    group.add(orb);
  }

  // Small golden crown crest feather
  const crestMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    roughness: 0.25,
    metalness: 0.15
  });
  const crestShape = new THREE.Shape();
  crestShape.moveTo(-0.06 * scale, 0);
  crestShape.lineTo(0, 0.22 * scale);
  crestShape.lineTo(0.06 * scale, 0);
  crestShape.closePath();
  const crestGeo = new THREE.ExtrudeGeometry(crestShape, {
    depth: 0.06 * scale,
    bevelEnabled: true,
    bevelThickness: 0.015 * scale,
    bevelSize: 0.01 * scale,
    bevelSegments: 3
  });
  crestGeo.center();
  const crestMesh = new THREE.Mesh(crestGeo, crestMat);
  crestMesh.position.set(0, radius * 0.88, 0);
  group.add(crestMesh);

  return group;
}

/**
 * Creates stylized flame crest plume and solar corona ring for 'fire' (Inferno Flare).
 */
function createFlameAccents(radius, scale) {
  const group = new THREE.Group();
  const flameMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    emissive: 0xe11d48,
    emissiveIntensity: 0.4,
    roughness: 0.25,
    metalness: 0.1
  });

  // Sculpted flame crest plume on top of the head
  const fShape = new THREE.Shape();
  fShape.moveTo(-0.08 * scale, 0);
  fShape.quadraticCurveTo(-0.12 * scale, 0.18 * scale, 0, 0.32 * scale);
  fShape.quadraticCurveTo(0.12 * scale, 0.18 * scale, 0.08 * scale, 0);
  fShape.closePath();

  const fGeo = new THREE.ExtrudeGeometry(fShape, {
    depth: 0.08 * scale,
    bevelEnabled: true,
    bevelThickness: 0.02 * scale,
    bevelSize: 0.015 * scale,
    bevelSegments: 4
  });
  fGeo.center();

  const fMesh = new THREE.Mesh(fGeo, flameMat);
  fMesh.position.set(0, radius * 0.92, 0);
  group.add(fMesh);

  // Solar Corona Plasma Torus
  const coronaMat = new THREE.MeshBasicMaterial({
    color: 0xfde047,
    transparent: true,
    opacity: 0.55
  });
  const coronaTorus = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.9, 0.022 * scale, 8, 32),
    coronaMat
  );
  coronaTorus.rotation.set(0.4, 0.2, 0);
  group.add(coronaTorus);

  return group;
}

/**
 * Creates dual-axis anti-gravity gyroscopic rings for 'vortex' (Vortex Titan).
 */
function createVortexAccents(radius, scale) {
  const group = new THREE.Group();
  const vortexMat = new THREE.MeshStandardMaterial({
    color: 0x818cf8,
    emissive: 0x4338ca,
    emissiveIntensity: 0.45,
    roughness: 0.18,
    metalness: 0.5
  });

  // Concentric dual-axis gyroscopic anti-gravity rings
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.92, 0.022 * scale, 8, 36),
    vortexMat
  );
  ring1.rotation.set(0.85, 0.3, 0.2);
  group.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.88, 0.018 * scale, 8, 36),
    vortexMat
  );
  ring2.rotation.set(-0.7, 0.4, -0.6);
  group.add(ring2);

  // Subtle geometric energy node pips along the equator
  const pipGeo = new THREE.SphereGeometry(0.06 * scale, 8, 8);
  [-1, 1].forEach((dir) => {
    const pip = new THREE.Mesh(pipGeo, vortexMat);
    pip.position.set(dir * radius * 0.96, 0, 0);
    group.add(pip);
  });

  return group;
}

/**
 * Creates a full 3D Bird model accurately sculpted to match the custom character system:
 * - 'red' (Commander Falcon): Winged Blue Dili-Bird with 3D swept wings & aero stability orb
 * - 'speed' (Speedster Swift): Electric Blue 3D Glass Energy Orb with aerodynamic twin fins & sonic filaments
 * - 'heavy' (Bomber Titan): Metallic Magenta 3D Glass Energy Orb with dense plasma rings & seismic core
 * - 'split' (Splitter Trio): Radiant Golden Amber Orb with orbiting tri-satellite cluster orbs & crest
 * - 'fire' (Inferno Flare): Blazing Crimson Solar Pyre Orb with sculpted flame plume & solar corona
 * - 'vortex' (Vortex Titan): Deep Cosmic Indigo Orb with dual-axis gyroscopic anti-gravity rings
 *
 * NOTE: The fundamental character identity (speech-bubble pill shape, chevron-diamond eyes, and U-smile)
 * is 100% FIXED and preserved across all bird variants.
 */
export function createBirdMesh(type = 'red') {
  const group = new THREE.Group();

  const BIRD_CONFIGS = {
    red: {
      radius: 0.46,
      bodyColor: 0x2546f0,
      metalness: 0.18,
      roughness: 0.24,
      orbColor: 0x38bdf8,
      orbEmissive: 0x0284c7,
      orbOpacity: 0.36,
      ringColor: 0xbae6fd
    },
    speed: {
      radius: 0.44,
      bodyColor: 0x0284c7,
      metalness: 0.22,
      roughness: 0.18,
      orbColor: 0x38bdf8,
      orbEmissive: 0x0ea5e9,
      orbOpacity: 0.42,
      ringColor: 0xe0f2fe
    },
    heavy: {
      radius: 0.54,
      bodyColor: 0x9d176d,
      metalness: 0.55,
      roughness: 0.18,
      orbColor: 0xd946ef,
      orbEmissive: 0x86198f,
      orbOpacity: 0.44,
      ringColor: 0xf5d0fe
    },
    split: {
      radius: 0.44,
      bodyColor: 0xd97706,
      metalness: 0.22,
      roughness: 0.20,
      orbColor: 0xfbbf24,
      orbEmissive: 0xb45309,
      orbOpacity: 0.40,
      ringColor: 0xfef08a
    },
    fire: {
      radius: 0.48,
      bodyColor: 0xdc2626,
      metalness: 0.24,
      roughness: 0.20,
      orbColor: 0xf97316,
      orbEmissive: 0xc2410c,
      orbOpacity: 0.46,
      ringColor: 0xfed7aa
    },
    vortex: {
      radius: 0.50,
      bodyColor: 0x4f46e5,
      metalness: 0.45,
      roughness: 0.18,
      orbColor: 0x818cf8,
      orbEmissive: 0x3730a3,
      orbOpacity: 0.44,
      ringColor: 0xc7d2fe
    }
  };

  const cfg = BIRD_CONFIGS[type] || BIRD_CONFIGS.red;
  const radius = cfg.radius;
  const scale = radius / 0.74;

  // 1. Inner 3D Sculpted Speech-Bubble Pill Character (Fixed: chevron-diamond eyes & U-smile)
  const coreBody = createSculptedSpeechBubbleCore({
    scale: scale * 0.88,
    bodyColor: cfg.bodyColor,
    metalness: cfg.metalness,
    roughness: cfg.roughness,
    eyeStyle: 'chevron',
    isFluffy: false
  });
  group.add(coreBody);

  // 2. Outer 3D Translucent Glassy Energy Sphere
  const glassOrbMat = new THREE.MeshPhysicalMaterial({
    color: cfg.orbColor,
    emissive: cfg.orbEmissive,
    emissiveIntensity: 0.20,
    transparent: true,
    opacity: cfg.orbOpacity,
    roughness: 0.08,
    metalness: 0.05,
    transmission: 0.45,
    clearcoat: 1.0,
    clearcoatRoughness: 0.06
  });

  const outerOrb = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 24), glassOrbMat);
  group.add(outerOrb);

  // 3. Internal 3D Energy Filaments / Swirl Rings inside the orb
  const ringMat = new THREE.MeshBasicMaterial({
    color: cfg.ringColor,
    transparent: true,
    opacity: 0.42
  });
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.86, 0.018 * scale, 10, 36),
    ringMat
  );
  ring1.rotation.set(0.5, 0.4, 0.2);
  group.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.82, 0.014 * scale, 10, 36),
    ringMat
  );
  ring2.rotation.set(-0.6, 0.3, -0.4);
  group.add(ring2);

  // 4. Character-Specific Accents & Distinct Ability Visual Language
  if (type === 'red') {
    // 3D sculpted swept aerodynamic side wings
    const wings = createSculptedWings(scale, 0x2546f0);
    group.add(wings);
  } else if (type === 'speed') {
    // Aerodynamic twin winglets / fins
    const speedFins = createSpeedFins(scale, 0x0ea5e9);
    group.add(speedFins);
  } else if (type === 'split') {
    // 3 orbiting satellite cluster orbs + golden feather crest
    const splitAccents = createSplitSatellites(radius, scale);
    group.add(splitAccents);
  } else if (type === 'fire') {
    // Flame crest plume + solar corona torus
    const flameAccents = createFlameAccents(radius, scale);
    group.add(flameAccents);
  } else if (type === 'vortex') {
    // Dual-axis gyroscopic anti-gravity rings
    const vortexAccents = createVortexAccents(radius, scale);
    group.add(vortexAccents);
  }

  group.userData = { radius, type };
  return group;
}

/**
 * Creates a full 3D Target model accurately sculpted to match sub-character.png (Fluffy Heart-Eyed)
 * and sub-character-2.png (Velvet Heart-Eyed):
 * - 3D extruded speech-bubble pill body
 * - 3D white diamond eye bases with 3D extruded pink heart pupils
 * - 3D black round O-mouth
 */
export function createTargetMesh(radius = 0.44, isBoss = false, targetType = 'blue') {
  const group = new THREE.Group();
  const effectiveRadius = radius || (isBoss ? 0.58 : 0.44);
  const scale = (effectiveRadius / 0.72) * (isBoss ? 1.08 : 1.0);

  let bodyColor = 0x2563eb;
  let isFluffy = Boolean(isBoss);

  if (targetType === 'pink') {
    bodyColor = 0xec4899;
  } else if (targetType === 'gold' || targetType === 'yellow') {
    bodyColor = 0xf59e0b;
  } else if (targetType === 'boss' || isBoss) {
    bodyColor = 0x4f46e5;
    isFluffy = true;
  } else {
    bodyColor = 0x2563eb;
  }

  const core = createSculptedSpeechBubbleCore({
    scale,
    bodyColor,
    metalness: 0.08,
    roughness: isBoss ? 0.82 : 0.58, // Velvet / plush finish matching sub-character.png & sub-character-2.png
    eyeStyle: 'heart',
    isFluffy
  });

  group.add(core);
  group.userData = { radius: effectiveRadius, isBoss, targetType };
  return group;
}

function getProceduralBlockTexture(type) {
  if (textureCache.has(type)) {
    return textureCache.get(type);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (type === 'wood') {
    // Rich, warm varnished timber with distinct planks, wood grain, knots, and bevels
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, '#c67838');
    grad.addColorStop(0.5, '#ad6227');
    grad.addColorStop(1, '#8f4f1a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Plank seam lines (3 vertical planks)
    ctx.fillStyle = 'rgba(60, 25, 6, 0.45)';
    ctx.fillRect(168, 0, 6, 512);
    ctx.fillRect(338, 0, 6, 512);

    // Fine organic wood grain curves
    ctx.strokeStyle = 'rgba(92, 45, 12, 0.28)';
    ctx.lineWidth = 3;
    for (let y = 16; y < 500; y += 22) {
      ctx.beginPath();
      ctx.moveTo(12, y);
      ctx.bezierCurveTo(140, y + (Math.sin(y * 0.08) * 16), 340, y - (Math.cos(y * 0.06) * 18), 500, y);
      ctx.stroke();
    }

    // Wood knots
    [ [100, 140, 22, 14], [250, 360, 28, 16], [420, 210, 20, 12] ].forEach(([kx, ky, krx, kry]) => {
      ctx.strokeStyle = 'rgba(70, 28, 6, 0.4)';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.ellipse(kx, ky, krx, kry, 0.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(kx, ky, krx * 0.5, kry * 0.5, 0.2, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Outer beveled frame & iron corner bolts
    ctx.strokeStyle = '#5c2d0c';
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, 498, 498);

    ctx.strokeStyle = 'rgba(255, 215, 165, 0.35)';
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, 480, 480);

    // Corner fixing bolts
    ctx.fillStyle = '#29170a';
    [ [30, 30], [482, 30], [30, 482], [482, 482], [171, 30], [341, 30], [171, 482], [341, 482] ].forEach(([bx, by]) => {
      ctx.beginPath();
      ctx.arc(bx, by, 7, 0, Math.PI * 2);
      ctx.fill();
    });

  } else if (type === 'stone') {
    // Chiseled granite masonry blocks with mortar grooves and rich stone stippling
    ctx.fillStyle = '#64748b';
    ctx.fillRect(0, 0, 512, 512);

    // Masonry courses (3 rows of staggered ashlar stone)
    const stoneGrad = ctx.createLinearGradient(0, 0, 0, 512);
    stoneGrad.addColorStop(0, '#78889e');
    stoneGrad.addColorStop(0.5, '#64748b');
    stoneGrad.addColorStop(1, '#475569');
    ctx.fillStyle = stoneGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Mortar lines
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 168, 512, 10);
    ctx.fillRect(0, 338, 512, 10);
    // Vertical joints
    ctx.fillRect(256, 0, 10, 168);
    ctx.fillRect(128, 178, 10, 160);
    ctx.fillRect(384, 178, 10, 160);
    ctx.fillRect(256, 348, 10, 164);

    // Granular mineral flecks & chisel texture
    for (let i = 0; i < 380; i++) {
      const rx = (i * 73) % 500 + 6;
      const ry = (i * 127) % 500 + 6;
      const size = (i % 3) + 2;
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.22)';
      ctx.fillRect(rx, ry, size, size);
    }

    // Outer stone edge bevel
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, 498, 498);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 3;
    ctx.strokeRect(16, 16, 480, 480);

  } else if (type === 'metal') {
    // Industrial reinforced steel girder / riveted iron plate
    const metalGrad = ctx.createLinearGradient(0, 0, 512, 512);
    metalGrad.addColorStop(0, '#475569');
    metalGrad.addColorStop(0.3, '#334155');
    metalGrad.addColorStop(0.7, '#1e293b');
    metalGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = metalGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Diagonal hazard/industrial cross-brace embossing
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.lineWidth = 28;
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(482, 482);
    ctx.moveTo(482, 30);
    ctx.lineTo(30, 482);
    ctx.stroke();

    // Inner plate bevel
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, 432, 432);

    // Outer reinforced steel flange
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 20;
    ctx.strokeRect(10, 10, 492, 492);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 4;
    ctx.strokeRect(22, 22, 468, 468);

    // Riveted industrial perimeter studs
    ctx.fillStyle = '#94a3b8';
    for (let x = 32; x <= 480; x += 64) {
      [32, 480].forEach((y) => {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    for (let y = 96; y <= 416; y += 64) {
      [32, 480].forEach((x) => {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
    }

  } else if (type === 'coin') {
    // Gilded royal treasure chest with sapphire glow and Dilicom emblem
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, '#f59e0b');
    grad.addColorStop(0.3, '#d97706');
    grad.addColorStop(0.7, '#2563eb');
    grad.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Gold metallic border with corner ornaments
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 18;
    ctx.strokeRect(14, 14, 484, 484);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.strokeRect(32, 32, 448, 448);

    // Center Dilicom diamond crest
    ctx.save();
    ctx.translate(256, 256);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-85, -85, 170, 170);
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(-62, -62, 124, 124);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(-35, -35, 70, 70);
    ctx.restore();

  } else if (type === 'tnt') {
    // Upgraded high-visibility military/industrial TNT crate with hazard chevrons & brass clasps
    const tntGrad = ctx.createLinearGradient(0, 0, 0, 512);
    tntGrad.addColorStop(0, '#ef4444');
    tntGrad.addColorStop(0.5, '#dc2626');
    tntGrad.addColorStop(1, '#991b1b');
    ctx.fillStyle = tntGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Warning hazard stripes (top and bottom)
    const drawHazardStripe = (startY, h) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, startY, 512, h);
      ctx.clip();
      ctx.fillStyle = '#facc15';
      ctx.fillRect(0, startY, 512, h);
      ctx.fillStyle = '#18181b';
      for (let x = -80; x < 600; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, startY);
        ctx.lineTo(x + 25, startY);
        ctx.lineTo(x - 10, startY + h);
        ctx.lineTo(x - 35, startY + h);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    };
    drawHazardStripe(16, 44);
    drawHazardStripe(452, 44);

    // High-contrast central explosive label plate
    ctx.fillStyle = '#fffbeb';
    ctx.fillRect(36, 160, 440, 192);

    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 10;
    ctx.strokeRect(36, 160, 440, 192);

    // "DANGER" sub-banner
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(36, 160, 440, 36);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px "Inter", "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★ DANGER : HIGH EXPLOSIVE ★', 256, 178);

    // Bold stencil "TNT" text
    ctx.fillStyle = '#7f1d1d';
    ctx.font = '900 130px "Inter", "Arial Black", sans-serif';
    ctx.fillText('TNT', 256, 268);

    // Heavy reinforced metal corner brackets
    ctx.fillStyle = '#1f2937';
    const bracketSize = 64;
    // Top-left
    ctx.fillRect(0, 0, bracketSize, 18);
    ctx.fillRect(0, 0, 18, bracketSize);
    // Top-right
    ctx.fillRect(512 - bracketSize, 0, bracketSize, 18);
    ctx.fillRect(512 - 18, 0, 18, bracketSize);
    // Bottom-left
    ctx.fillRect(0, 512 - 18, bracketSize, 18);
    ctx.fillRect(0, 512 - bracketSize, 18, bracketSize);
    // Bottom-right
    ctx.fillRect(512 - bracketSize, 512 - 18, bracketSize, 18);
    ctx.fillRect(512 - 18, 512 - bracketSize, 18, bracketSize);

    // Brass corner studs
    ctx.fillStyle = '#f59e0b';
    [ [14, 14], [498, 14], [14, 498], [498, 498] ].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(type, tex);
  return tex;
}

/**
 * Creates a 3D Destructible Block mesh ('wood' | 'stone' | 'metal' | 'glass' | 'coin' | 'tnt').
 */
export function createBlockMesh(type, size) {
  const [w, h, d] = size;
  const geo = new THREE.BoxGeometry(w, h, d);

  let mat;
  if (type === 'glass') {
    mat = new THREE.MeshPhysicalMaterial({
      color: 0xa5f3fc,
      transparent: true,
      opacity: 0.65,
      roughness: 0.06,
      metalness: 0.08,
      transmission: 0.65,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });
  } else if (type === 'metal') {
    const tex = getProceduralBlockTexture(type);
    mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.28,
      metalness: 0.82
    });
  } else {
    const tex = getProceduralBlockTexture(type);
    mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: type === 'coin' ? 0.22 : type === 'stone' ? 0.82 : type === 'tnt' ? 0.45 : 0.65,
      metalness: type === 'coin' ? 0.65 : type === 'stone' ? 0.08 : type === 'tnt' ? 0.15 : 0.06
    });
  }

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // For TNT blocks, add upgraded 3D metallic fuse collar & glowing pulse indicator on top
  if (type === 'tnt') {
    const fuseGroup = new THREE.Group();
    const tntScale = Math.min(1.0, Math.min(w, h) / 0.8);
    // Brass fuse collar
    const collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12 * tntScale, 0.15 * tntScale, 0.08 * tntScale, 16),
      new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.85, roughness: 0.25 })
    );
    collar.position.set(0, h / 2 + 0.04 * tntScale, 0);
    fuseGroup.add(collar);

    // Glowing warning beacon LED
    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.08 * tntScale, 12, 12),
      new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        emissive: 0xef4444,
        emissiveIntensity: 0.85,
        roughness: 0.1
      })
    );
    beacon.position.set(0, h / 2 + 0.11 * tntScale, 0);
    fuseGroup.add(beacon);

    mesh.add(fuseGroup);
  }

  return mesh;
}
