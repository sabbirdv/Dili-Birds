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
 * Creates a full 3D Bird model accurately sculpted to match the custom character images:
 * - 'red' (matches character.png & sub-character-4.png): Winged Blue Dili-Bird with 3D swept wings & aura orb
 * - 'speed' (matches character-2.png): Electric Blue 3D Glass Energy Orb with internal energy filaments & 3D pill character
 * - 'heavy' (matches character-3.png & sub-character-3.png): Metallic Magenta 3D Glass Energy Orb with plasma rings & 3D pill character
 */
export function createBirdMesh(type = 'red') {
  const group = new THREE.Group();
  const radius = type === 'heavy' ? 0.84 : 0.74;
  const scale = radius / 0.74;

  const isMagenta = type === 'heavy';
  const isWinged = type === 'red';

  // 1. Inner 3D Sculpted Speech-Bubble Pill Character (with 3D chevron-diamond eyes & U-smile)
  const coreBody = createSculptedSpeechBubbleCore({
    scale: scale * 0.88,
    bodyColor: isMagenta ? 0x9d176d : 0x2546f0,
    metalness: isMagenta ? 0.55 : 0.18,
    roughness: isMagenta ? 0.18 : 0.24,
    eyeStyle: 'chevron',
    isFluffy: false
  });
  group.add(coreBody);

  // 2. Outer 3D Translucent Glassy Energy Sphere (matches character-2.png, character-3.png, character.png)
  const orbColor = isMagenta ? 0xd946ef : 0x38bdf8;
  const orbEmissive = isMagenta ? 0x86198f : 0x0284c7;

  const glassOrbMat = new THREE.MeshPhysicalMaterial({
    color: orbColor,
    emissive: orbEmissive,
    emissiveIntensity: 0.18,
    transparent: true,
    opacity: isWinged ? 0.36 : 0.42,
    roughness: 0.08,
    metalness: 0.05,
    transmission: 0.45,
    clearcoat: 1.0,
    clearcoatRoughness: 0.06
  });

  const outerOrb = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 24), glassOrbMat);
  group.add(outerOrb);

  // 3. Internal 3D Energy Filaments / Swirl Rings inside the orb (matching character-2.png & character-3.png)
  const ringMat = new THREE.MeshBasicMaterial({
    color: isMagenta ? 0xf5d0fe : 0xbae6fd,
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

  // 4. For 'red' (character.png), add the 3D sculpted swept side wings
  if (isWinged) {
    const wings = createSculptedWings(scale, 0x2546f0);
    group.add(wings);
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
export function createTargetMesh(radius = 0.76, isBoss = false) {
  const group = new THREE.Group();
  const scale = (radius / 0.72) * (isBoss ? 1.08 : 1.0);

  const core = createSculptedSpeechBubbleCore({
    scale,
    bodyColor: isBoss ? 0x3b66f5 : 0x2546f0,
    metalness: 0.08,
    roughness: isBoss ? 0.82 : 0.58, // Velvet / plush finish matching sub-character.png & sub-character-2.png
    eyeStyle: 'heart',
    isFluffy: isBoss // Boss targets get the 3D fluffy plush tuft silhouette from sub-character.png
  });

  group.add(core);
  group.userData = { radius, isBoss };
  return group;
}

function getProceduralBlockTexture(type) {
  if (textureCache.has(type)) {
    return textureCache.get(type);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (type === 'wood') {
    ctx.fillStyle = '#c27838';
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = '#8f4f1a';
    ctx.lineWidth = 6;
    ctx.strokeRect(6, 6, 244, 244);

    ctx.strokeStyle = 'rgba(92, 45, 12, 0.35)';
    ctx.lineWidth = 3;
    for (let y = 28; y < 240; y += 32) {
      ctx.beginPath();
      ctx.moveTo(10, y);
      ctx.bezierCurveTo(90, y - 8, 160, y + 8, 246, y);
      ctx.stroke();
    }
  } else if (type === 'stone') {
    ctx.fillStyle = '#64748b';
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 8;
    ctx.strokeRect(6, 6, 244, 244);

    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.18)';
      const rx = ((i * 53) % 220) + 16;
      const ry = ((i * 97) % 220) + 16;
      ctx.fillRect(rx, ry, 14, 10);
    }
  } else if (type === 'coin') {
    const grad = ctx.createLinearGradient(0, 0, 256, 256);
    grad.addColorStop(0, '#38bdf8');
    grad.addColorStop(0.5, '#2563eb');
    grad.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#bae6fd';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, 236, 236);

    // Draw the Dili-Birds diamond emblem in the center of the coin crate
    ctx.save();
    ctx.translate(128, 128);
    ctx.rotate(Math.PI / 4);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 14;
    ctx.strokeRect(-38, -38, 76, 76);
    ctx.restore();
  } else if (type === 'tnt') {
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#7f1d1d';
    ctx.lineWidth = 12;
    ctx.strokeRect(8, 8, 240, 240);

    ctx.fillStyle = '#fef2f2';
    ctx.fillRect(16, 86, 224, 84);

    ctx.fillStyle = '#991b1b';
    ctx.font = 'bold 64px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('TNT', 128, 130);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(type, tex);
  return tex;
}

/**
 * Creates a 3D Destructible Block mesh ('wood' | 'stone' | 'glass' | 'coin' | 'tnt').
 */
export function createBlockMesh(type, size) {
  const [w, h, d] = size;
  const geo = new THREE.BoxGeometry(w, h, d);

  let mat;
  if (type === 'glass') {
    mat = new THREE.MeshPhysicalMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.68,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.25
    });
  } else {
    const tex = getProceduralBlockTexture(type);
    mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: type === 'coin' ? 0.25 : type === 'stone' ? 0.8 : 0.65,
      metalness: type === 'coin' ? 0.45 : 0.08
    });
  }

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}
