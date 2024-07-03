// AboutMain.tsx
"use client";
import React, { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, Glitch } from '@react-three/postprocessing';
import * as THREE from 'three';  // Import THREE

const Model = lazy(() => import('../3DModels/ModelAboutUs'));

const SceneCanvas: React.FC = () => (
  <Canvas camera={{ position: [0, 3, 7], fov: 60 }} className="absolute top-0 left-0 w-full h-full">
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    <Suspense fallback={null}>
      <Model path="/astro1.glb" position={[-5, 0, 0]} scale={[1, 1, 1]} />
      <Model path="/earth3.glb" position={[4.3, 1.5, 0]} scale={[0.1, 0.1, 0.1]} />
      <Model path="/moon.glb" position={[-1.5, 1, 0]} scale={[0.04, 0.04, 0.04]} rotation={[THREE.MathUtils.degToRad(3), THREE.MathUtils.degToRad(2), THREE.MathUtils.degToRad(20)]} />
    </Suspense>
    <EffectComposer>
      <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
      <Noise opacity={0.02} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
     
    </EffectComposer>
    <Preload all />
  </Canvas>
);

const AboutMain: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <SceneCanvas />
  </div>
);

export default AboutMain;