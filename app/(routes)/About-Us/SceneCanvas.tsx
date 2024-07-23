"use client";

import React, { useEffect, useMemo, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import { useModel3DResponsive  } from '@/hooks/useModel3DResponsive'; // Custom hook


const Model = dynamic(() => import('../../components/3DModels/ModelAboutUs'), { ssr: false });



interface ModelPosition {
  [key: string]: [number, number, number];
}

interface ModelScale {
  [key: string]: [number, number, number];
}

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false; // Server-side check
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

export default function SceneCanvas() {
  const isMobile = useModel3DResponsive();
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(checkWebGLSupport());
  }, []);

  
  const modelPositions: ModelPosition = useMemo(() => ({
    astro: isMobile ? [-1, 2, -1] : [-5, 0, 0],
    earth: isMobile ? [1, 2, 0] : [4.1, 1.5, 0],
    moon: isMobile ? [1.22, 2, 0] : [3.2, 1.5, 0],
  }), [isMobile]);

  const modelScales: ModelScale = useMemo(() => ({
    astro: isMobile ? [1.2, 1.2, 1.2] : [1, 1, 1],
    earth: isMobile ? [0.09, 0.09, 0.09] : [0.1, 0.1, 0.1],
    moon: isMobile ? [0.04, 0.04, 0.04] : [0.04, 0.04, 0.04],
  }), [isMobile]);

  if (!webGLSupported) {
    return null; // No renderiza nada si WebGL no está soportado
  }

  return (
      <Canvas 
        camera={{ position: isMobile ? [0, 3, 10] : [0, 3, 7], fov: isMobile ? 75 : 60 }}
        className="absolute inset-0 z-0"
        aria-label="3D scene with astronaut, Earth, and Moon"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={<LoadingFallback />}>
          <Model path="/astro1.glb" position={modelPositions.astro} scale={modelScales.astro} />
          <Model path="/earth3.glb" position={modelPositions.earth} scale={modelScales.earth} />
          <Model 
            path="/moon.glb" 
            position={modelPositions.moon} 
            scale={modelScales.moon} 
            rotation={[2, THREE.MathUtils.degToRad(2), THREE.MathUtils.degToRad(20)]} 
          />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <Preload all />
      </Canvas>
  );
}

function LoadingFallback() {
  return <span className="text-white">Loading 3D models...</span>;
}