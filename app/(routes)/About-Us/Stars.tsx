"use client"

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const generateStarField = (numStars: number, spread: number) => {
  const positions = new Float32Array(numStars * 3);
  const colors = new Float32Array(numStars * 3);
  const sizes = new Float32Array(numStars);

  for (let i = 0; i < numStars; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread;

    const color = new THREE.Color();
    color.setHSL(Math.random(), 0.7, 0.9);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    sizes[i] = Math.random() * 2 + 0.5;
  }

  return { positions, colors, sizes };
};

const StarsCanvas: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, sizes } = useMemo(() => generateStarField(5000, 100), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferAttribute attach="geometry-attributes-color" array={colors} itemSize={3} />
      <bufferAttribute attach="geometry-attributes-size" array={sizes} itemSize={1} />
    </Points>
  );
};

const Stars: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <StarsCanvas />
      </Canvas>
    </div>
  );
};

export default Stars;