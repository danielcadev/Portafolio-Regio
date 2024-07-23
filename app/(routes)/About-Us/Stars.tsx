// components/Stars.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const generateSpherePoints = (numPoints: number, radius: number) => {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

const StarsCanvas: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => generateSpherePoints(5000, 5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 60;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#fff" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const Stars: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarsCanvas />
      </Canvas>
    </div>
  );
};

export default Stars;