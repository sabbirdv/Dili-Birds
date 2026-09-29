import * as THREE from 'three';

/**
 * 3D Slingshot with dynamic elastic bands, leather pouch, exact physics-matched parabolic
 * trajectory preview, and unified Drag-and-Release input handling for PC Mouse and Mobile Touch.
 * Locked strictly to the z = 0 gameplay plane so shots hit targets with 100% accuracy.
 */
export class SlingshotController {
  constructor({
    scene,
    camera,
    domElement,
    audio,
    onAimUpdate,
    onAimEnd,
    onLaunch,
    onFlightTap
  }) {
    this.scene = scene;
    this.camera = camera;
    this.domElement = domElement;
    this.audio = audio;
    this.onAimUpdate = onAimUpdate;
    this.onAimEnd = onAimEnd;
    this.onLaunch = onLaunch;
    this.onFlightTap = onFlightTap;

    // Slingshot rest anchor in world coordinates (strictly on z = 0 plane)
    this.anchor = new THREE.Vector3(-12.5, 3.2, 0.0);
    this.leftForkTip = new THREE.Vector3(-12.5, 3.55, 0.72);
    this.rightForkTip = new THREE.Vector3(-12.5, 3.55, -0.72);

    this.maxPullDistance = 4.2;
    this.minPullDistance = 0.4;
    this.launchPowerMultiplier = 7.8;

    // Physics constants matching cannon-es world in GameScene
    this.gravityY = -18.0;
    this.birdLinearDamping = 0.01;

    // Current state
    this.currentBirdMesh = null;
    this.isDragging = false;
    this.canInteract = false;
    this.birdInFlight = false;
    this.currentPullPos = this.anchor.clone();
    this.lastStretchSoundTime = 0;

    // Raycasting helpers for Mouse & Touch on the z = 0 gameplay plane
    this.raycaster = new THREE.Raycaster();
    this.ndcPointer = new THREE.Vector2();
    this.aimPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    this.planeIntersect = new THREE.Vector3();

    this.buildSlingshotGeometry();
    this.buildTrajectoryDots();
    this.bindInputEvents();
  }

  buildSlingshotGeometry() {
    this.slingshotGroup = new THREE.Group();

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.68,
      metalness: 0.05
    });
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.4,
      metalness: 0.6
    });

    // Pedestal mound under slingshot
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.3, 1.7, 0.36, 16),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 })
    );
    pedestal.position.set(this.anchor.x, 0.18, 0);
    pedestal.receiveShadow = true;
    this.slingshotGroup.add(pedestal);

    // Main vertical stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.34, 2.2, 12), woodMat);
    stem.position.set(this.anchor.x, 1.25, 0);
    stem.castShadow = true;
    this.slingshotGroup.add(stem);

    // Metal collar band
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.26, 12), darkMetalMat);
    collar.position.set(this.anchor.x, 2.18, 0);
    this.slingshotGroup.add(collar);

    // Left & Right Y-Fork branches
    [-1, 1].forEach((dir) => {
      const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 1.55, 10), woodMat);
      fork.position.set(this.anchor.x, 2.85, dir * 0.42);
      fork.rotation.x = dir * 0.46;
      fork.castShadow = true;
      this.slingshotGroup.add(fork);
    });

    // Dynamic Elastic Bands (Left & Right cylinders scaled/oriented each frame)
    const bandMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5
    });
    const unitCyl = new THREE.CylinderGeometry(0.055, 0.055, 1, 8);
    unitCyl.translate(0, 0.5, 0);
    unitCyl.rotateX(Math.PI / 2);

    this.leftBand = new THREE.Mesh(unitCyl, bandMat);
    this.rightBand = new THREE.Mesh(unitCyl, bandMat);
    this.slingshotGroup.add(this.leftBand, this.rightBand);

    // Leather Pouch holding the bird
    this.pouchMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 0.44, 0.62),
      new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.8 })
    );
    this.slingshotGroup.add(this.pouchMesh);

    this.scene.add(this.slingshotGroup);
    this.updateBands(this.anchor);
  }

  buildTrajectoryDots() {
    this.trajectoryGroup = new THREE.Group();
    this.trajectoryDots = [];
    const dotCount = 30;

    for (let i = 0; i < dotCount; i++) {
      const t = i / dotCount;
      const radius = 0.14 * (1 - t * 0.5);
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 12, 12),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xfbbf24 : 0xffffff,
          transparent: true,
          opacity: 0.94 - t * 0.65
        })
      );
      dot.visible = false;
      this.trajectoryGroup.add(dot);
      this.trajectoryDots.push(dot);
    }

    this.scene.add(this.trajectoryGroup);
  }

  /**
   * Positions the two 3D elastic rubber bands and leather pouch to wrap behind the bird.
   */
  updateBands(birdPos) {
    const pouchPos = birdPos.clone().add(new THREE.Vector3(-0.34, 0, 0));
    this.pouchMesh.position.copy(pouchPos);

    this.leftBand.position.copy(this.leftForkTip);
    this.leftBand.lookAt(pouchPos);
    const distLeft = this.leftForkTip.distanceTo(pouchPos);
    this.leftBand.scale.set(1, 1, Math.max(0.01, distLeft));

    this.rightBand.position.copy(this.rightForkTip);
    this.rightBand.lookAt(pouchPos);
    const distRight = this.rightForkTip.distanceTo(pouchPos);
    this.rightBand.scale.set(1, 1, Math.max(0.01, distRight));
  }

  /**
   * Attaches a bird mesh into the slingshot pouch ready for the player to drag.
   */
  mountBird(birdMesh) {
    this.currentBirdMesh = birdMesh;
    this.currentPullPos.copy(this.anchor);
    this.currentBirdMesh.position.copy(this.anchor);
    // Angle slightly toward the right (+X) while keeping the 3D sculpted front face visible
    this.currentBirdMesh.rotation.set(0, 0.28, 0);
    this.isDragging = false;
    this.canInteract = true;
    this.birdInFlight = false;
    this.updateBands(this.anchor);
    this.hideTrajectory();
  }

  /**
   * Unified Mouse & Mobile Touch event bindings for drag-and-release controls.
   */
  bindInputEvents() {
    const extractClientCoords = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
      }
      if (e.changedTouches && e.changedTouches.length > 0) {
        return { clientX: e.changedTouches[0].clientX, clientY: e.changedTouches[0].clientY };
      }
      return { clientX: e.clientX, clientY: e.clientY };
    };

    const handleStart = (e) => {
      if (e.target !== this.domElement) return;

      const { clientX, clientY } = extractClientCoords(e);

      // If a bird is already in mid-flight, tapping/clicking triggers its special boost ability
      if (this.birdInFlight) {
        this.onFlightTap?.();
        return;
      }

      if (!this.canInteract || !this.currentBirdMesh) return;

      const rect = this.domElement.getBoundingClientRect();
      const projected = this.anchor.clone().project(this.camera);
      const anchorScreenX = ((projected.x + 1) * 0.5) * rect.width + rect.left;
      const anchorScreenY = ((-projected.y + 1) * 0.5) * rect.height + rect.top;

      const pixelDist = Math.hypot(clientX - anchorScreenX, clientY - anchorScreenY);

      this.updateRaycaster(clientX, clientY, rect);
      const rayDistToBird = this.raycaster.ray.distanceToPoint(this.currentBirdMesh.position);

      if (pixelDist < 150 || rayDistToBird < 3.0) {
        if (e.cancelable) e.preventDefault();
        this.isDragging = true;
        this.updatePullFromInput(clientX, clientY, rect);
      }
    };

    const handleMove = (e) => {
      if (!this.isDragging || !this.currentBirdMesh) return;
      if (e.cancelable) e.preventDefault();
      const { clientX, clientY } = extractClientCoords(e);
      const rect = this.domElement.getBoundingClientRect();
      this.updatePullFromInput(clientX, clientY, rect);
    };

    const handleEnd = (e) => {
      if (!this.isDragging) return;
      if (e.cancelable) e.preventDefault();
      this.isDragging = false;
      this.releaseSlingshot();
    };

    this.domElement.addEventListener('pointerdown', handleStart);
    window.addEventListener('pointermove', handleMove, { passive: false });
    window.addEventListener('pointerup', handleEnd);
    window.addEventListener('pointercancel', handleEnd);

    this.domElement.addEventListener('touchstart', handleStart, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);
  }

  updateRaycaster(clientX, clientY, rect) {
    this.ndcPointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.ndcPointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.ndcPointer, this.camera);
  }

  updatePullFromInput(clientX, clientY, rect) {
    this.updateRaycaster(clientX, clientY, rect);

    if (this.raycaster.ray.intersectPlane(this.aimPlane, this.planeIntersect)) {
      const pullVec = this.planeIntersect.clone().sub(this.anchor);

      // Strictly lock pullback to the z = 0 plane so the bird never deflects in Z
      pullVec.z = 0;

      // Ensure the user pulls backward (-X direction) to launch forward (+X)
      if (pullVec.x > -0.15) {
        pullVec.x = -0.15;
      }

      // Clamp total pullback radius
      if (pullVec.length() > this.maxPullDistance) {
        pullVec.normalize().multiplyScalar(this.maxPullDistance);
      }

      // Prevent pulling below the ground surface
      const candidatePos = this.anchor.clone().add(pullVec);
      if (candidatePos.y < 0.75) {
        candidatePos.y = 0.75;
        pullVec.copy(candidatePos).sub(this.anchor);
        pullVec.z = 0;
      }

      this.currentPullPos.copy(candidatePos);
      this.currentBirdMesh.position.copy(this.currentPullPos);

      // Compute exact launch velocity in the XY plane
      const launchVel = this.computeLaunchVelocity();
      const angleRad = Math.atan2(launchVel.y, Math.max(0.001, launchVel.x));

      // Tilt the 3D sculpted bird along the launch elevation while keeping its 3D face visible
      this.currentBirdMesh.rotation.set(0, 0.28, angleRad * 0.55);

      this.updateBands(this.currentPullPos);
      this.updateTrajectoryPreview(this.currentPullPos, launchVel);

      // Play subtle elastic stretch sound periodically
      const now = performance.now();
      const pullRatio = pullVec.length() / this.maxPullDistance;
      if (now - this.lastStretchSoundTime > 120 && pullRatio > 0.15) {
        this.audio?.playStretch(pullRatio);
        this.lastStretchSoundTime = now;
      }

      // Notify HUD of power % and elevation angle
      const powerPercent = Math.min(100, Math.round(pullRatio * 100));
      const angleDeg = THREE.MathUtils.radToDeg(angleRad);
      this.onAimUpdate?.(powerPercent, angleDeg);
    }
  }

  computeLaunchVelocity() {
    const displacement = this.anchor.clone().sub(this.currentPullPos);
    displacement.z = 0;
    return displacement.multiplyScalar(this.launchPowerMultiplier);
  }

  /**
   * Simulates the exact discrete Euler integration steps used by cannon-es
   * (dt = 1/60, gravity = -18.0, linearDamping = 0.01) so the trajectory preview dots
   * match the bird's actual flight path with 100% precision.
   */
  updateTrajectoryPreview(startPos, velocity) {
    const pullDist = this.anchor.distanceTo(startPos);
    if (pullDist < this.minPullDistance) {
      this.hideTrajectory();
      return;
    }

    const dt = 1 / 60;
    const dampingStep = Math.pow(1 - this.birdLinearDamping, dt);

    let simX = startPos.x;
    let simY = startPos.y;
    let vx = velocity.x;
    let vy = velocity.y;

    const stepsPerDot = 3; // Place a dot every 3 physics ticks (0.05s intervals)

    for (let i = 0; i < this.trajectoryDots.length; i++) {
      for (let s = 0; s < stepsPerDot; s++) {
        vy += this.gravityY * dt;
        vx *= dampingStep;
        vy *= dampingStep;
        simX += vx * dt;
        simY += vy * dt;
      }

      const dot = this.trajectoryDots[i];
      if (simY < 0.15) {
        dot.visible = false;
      } else {
        dot.position.set(simX, simY, 0);
        dot.visible = true;
      }
    }
  }

  hideTrajectory() {
    this.trajectoryDots.forEach((dot) => {
      dot.visible = false;
    });
  }

  releaseSlingshot() {
    this.hideTrajectory();
    this.onAimEnd?.();

    const pullDist = this.anchor.distanceTo(this.currentPullPos);
    if (pullDist < this.minPullDistance) {
      this.currentPullPos.copy(this.anchor);
      if (this.currentBirdMesh) {
        this.currentBirdMesh.position.copy(this.anchor);
        this.currentBirdMesh.rotation.set(0, 0.28, 0);
      }
      this.updateBands(this.anchor);
      return;
    }

    const velocity = this.computeLaunchVelocity();
    const launchPos = this.currentPullPos.clone();
    launchPos.z = 0;

    // Snap bands back to rest
    this.updateBands(this.anchor);
    this.canInteract = false;
    this.birdInFlight = true;

    this.audio?.playLaunch();
    this.onLaunch?.(launchPos, velocity);
  }
}
