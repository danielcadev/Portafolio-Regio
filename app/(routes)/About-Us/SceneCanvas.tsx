"use client";

import React, { useEffect, useMemo, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import { useModel3DResponsive } from '@/hooks/useModel3DResponsive';
import { isWebGLAvailable } from '@/utils/webglDetector';

const Model = dynamic(() => import('../../components/3DModels/ModelAboutUs'), { ssr: false });

interface ModelPosition {
  [key: string]: [number, number, number];
}

interface ModelScale {
  [key: string]: [number, number, number];
}

export default function SceneCanvas() {
  const isMobile = useModel3DResponsive();
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  const modelPositions: ModelPosition = useMemo(() => ({
    astro: isMobile ? [-1, 2, -1] : [-5, 0, 0],
    earth: isMobile ? [1, 2, 0] : [4.1, 1.5, 0],
  }), [isMobile]);

  const modelScales: ModelScale = useMemo(() => ({
    astro: isMobile ? [1.2, 1.2, 1.2] : [1, 1, 1],
    earth: isMobile ? [0.09, 0.09, 0.09] : [0.1, 0.1, 0.1],
  }), [isMobile]);

  if (webGLSupported === null) {
    return <div>Verificando soporte de WebGL...</div>;
  }

  if (!webGLSupported) {
    return (
      <div className="webgl-not-supported">
        Lo sentimos, tu navegador no soporta WebGL. No se pueden mostrar los modelos 3D.
      </div>
    );
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
        <Model path="/astro2.glb" position={modelPositions.astro} scale={modelScales.astro} />
        <Model path="/earth2.glb" position={modelPositions.earth} scale={modelScales.earth} />
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