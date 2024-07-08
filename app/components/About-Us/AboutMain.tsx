// AboutMain.tsx
"use client";
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const Model = lazy(() => import('../3DModels/ModelAboutUs'));

const SceneCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(`isMobile: ${isMobile}`);
  }, [isMobile]);

  // Definición de las posiciones de los modelos
  const modelPositions: { [key: string]: [number, number, number] } = {
    astro: isMobile ? [-1, 2, -1] : [-5, 0, 0],
    earth: isMobile ? [1, 2, 0] : [4.1, 1.5, 0],
    moon: isMobile ? [1.22, 2, 0] : [3.2, 1.5, 0], // Ajustar la posición de la luna
  };

  useEffect(() => {
    console.log(`Astro position: ${modelPositions.astro}`);
    console.log(`Earth position: ${modelPositions.earth}`);
    console.log(`Moon position: ${modelPositions.moon}`);
  }, [isMobile]);

  return (
    <Canvas camera={{ position: isMobile ? [0, 3, 10] : [0, 3, 7], fov: isMobile ? 75 : 60 }} className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Suspense fallback={null}>
        <Model path="/astro1.glb" position={modelPositions.astro} scale={isMobile ? [1.2, 1.2, 1.2] :[1, 1, 1]} />
        <Model path="/earth3.glb" position={modelPositions.earth} scale={isMobile ? [0.09, 0.09, 0.09] : [0.1, 0.1, 0.1]} />
        <Model path="/moon.glb" position={modelPositions.moon} scale={isMobile ? [0.04, 0.04, 0.04] : [0.04, 0.04, 0.04]} rotation={[2, THREE.MathUtils.degToRad(2), THREE.MathUtils.degToRad(20)]} />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <Preload all />
    </Canvas>
  );
};

const AboutMain: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <SceneCanvas />
  </div>
);

export default AboutMain;