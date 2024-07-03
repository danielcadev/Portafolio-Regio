// Model.tsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useDracoGLTF from '../Loaders/useDracoGLTF';

interface ModelProps {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ path, scale, position, rotation }) => {
  const { gltf, error } = useDracoGLTF(path);
  const ref = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (gltf && ref.current) {
      ref.current.scale.set(...scale);
      ref.current.position.set(...position);
      if (rotation) {
        ref.current.rotation.set(...rotation);
      }
      const animations = gltf.animations || [];
      if (animations.length > 0) {
        const mixer = new THREE.AnimationMixer(gltf);
        mixer.clipAction(animations[0]).play();
        mixerRef.current = mixer;
      }
    }
  }, [gltf, scale, position, rotation]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
    if (ref.current) {
      if (path === "/earth3.glb") {
        ref.current.rotation.y += delta * 0.1;
      } else if (path === "/moon.glb") {
        const earthPosition = new THREE.Vector3(4, 0, 0);
        const moonOrbitRadius = 2;
        const moonOrbitSpeed = 0.5;
        ref.current.position.x = earthPosition.x + moonOrbitRadius * Math.cos(state.clock.elapsedTime * moonOrbitSpeed);
        ref.current.position.z = earthPosition.z + moonOrbitRadius * Math.sin(state.clock.elapsedTime * moonOrbitSpeed);
        ref.current.rotation.y += delta * 0.5;
        ref.current.rotation.z = THREE.MathUtils.degToRad(80);
      } else {
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
      }
    }
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  return gltf ? <primitive ref={ref} object={gltf} /> : null;
};

export default Model;