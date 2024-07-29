"use client";

import React, { useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import ErrorBoundary from '../../common/ErrorBoundary';

const Model = dynamic(() => import('../../../../app/3DModels/ModelAboutUs'), { ssr: false });

interface ModelPosition {
  [key: string]: [number, number, number];
}

interface ModelScale {
  [key: string]: [number, number, number];
}

interface SceneCanvasProps {
  isMobile: boolean;
}

function WebGLNotSupported() {
  return (
    <div className="webgl-not-supported">
      Lo sentimos, tu navegador o hardware no soporta WebGL. 
      No se pueden mostrar los modelos 3D.
    </div>
  );
}

function LoadingFallback() {
  return null; // O puedes retornar un objeto 3D simple como placeholder
}

function SceneContent({ modelPositions, modelScales }: { 
  isMobile: boolean, 
  modelPositions: ModelPosition, 
  modelScales: ModelScale,
  cameraPosition: [number, number, number]
}) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Suspense fallback={<LoadingFallback />}>
        <Model path="/astro1.glb" position={modelPositions.astro} scale={modelScales.astro} />
        <Model path="/earth3.glb" position={modelPositions.earth} scale={modelScales.earth} />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <Preload all />
    </>
  );
}

export default function SceneSpace({ isMobile }: SceneCanvasProps) {
  const modelPositions: ModelPosition = useMemo(() => ({
    astro: isMobile ? [-1, 2, -1] : [-5, 0, 0],
    earth: isMobile ? [1, 2, 0] : [4.1, 1.5, 0],
  }), [isMobile]);

  const modelScales: ModelScale = useMemo(() => ({
    astro: isMobile ? [1.2, 1.2, 1.2] : [1, 1, 1],
    earth: isMobile ? [0.09, 0.09, 0.09] : [0.1, 0.1, 0.1],
  }), [isMobile]);

  const cameraPosition: [number, number, number] = useMemo(() => 
    isMobile ? [0, 3, 10] : [0, 3, 7],
  [isMobile]);

  const cameraFov = useMemo(() => 
    isMobile ? 75 : 60,
  [isMobile]);

  return (
    <ErrorBoundary fallback={<WebGLNotSupported />}>
      <Canvas 
        camera={{ position: cameraPosition, fov: cameraFov }}
        className="absolute inset-0 z-0"
        aria-label="3D scene with astronaut, Earth, and Moon"
      >
        <SceneContent
          isMobile={isMobile}
          modelPositions={modelPositions}
          modelScales={modelScales}
          cameraPosition={cameraPosition}
        />
      </Canvas>
    </ErrorBoundary>
  );
}