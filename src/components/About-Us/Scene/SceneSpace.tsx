"use client";

import React, { useMemo, Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber';
import { Stars, SoftShadows } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

interface ModelProps {
  path: string;
  position: THREE.Vector3;
  scale: THREE.Vector3;
}

function Model({ path, position, scale }: ModelProps) {
  const gltf = useLoader(GLTFLoader, path, (loader) => {
    const dracoLoader = new DRACOLoader().setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
  });

  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      // Rotación suave
      modelRef.current.rotation.y += 0.005;
      
      // Movimiento suave arriba y abajo para el astronauta
      if (path.includes('astro')) {
        modelRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime) * 0.1;
      }
      
      // Rotación más rápida para la Tierra
      if (path.includes('earth')) {
        modelRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      position={position} 
      scale={scale}
      castShadow
      receiveShadow
    />
  );
}

function Lights() {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      // Mover la luz en un círculo
      lightRef.current.position.x = Math.sin(clock.elapsedTime * 0.2) * 5;
      lightRef.current.position.z = Math.cos(clock.elapsedTime * 0.2) * 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
}

function SceneContent({ isMobile }: { isMobile: boolean }) {
  const modelPositions = useMemo(() => ({
    astro: new THREE.Vector3(isMobile ? -1 : -5, isMobile ? 2 : 0, isMobile ? -1 : 0),
    earth: new THREE.Vector3(isMobile ? 1 : 4.1, isMobile ? 2 : 1.5, 0),
  }), [isMobile]);

  const modelScales = useMemo(() => ({
    astro: new THREE.Vector3(...(isMobile ? [1.2, 1.2, 1.2] : [1, 1, 1])),
    earth: new THREE.Vector3(...(isMobile ? [0.09, 0.09, 0.09] : [0.1, 0.1, 0.1])),
  }), [isMobile]);

  return (
    <>
      <Lights />
      <Stars 
        radius={100} 
        depth={50} 
        count={isMobile ? 1500 : 3000} 
        factor={4} 
        saturation={0} 
        fade 
      />
      <Suspense fallback={null}>
        <Model path="/astro1.glb" position={modelPositions.astro} scale={modelScales.astro} />
        <Model path="/earth3.glb" position={modelPositions.earth} scale={modelScales.earth} />
      </Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
    </>
  );
}

export default function SceneSpace({ isMobile }: { isMobile: boolean }) {
  const cameraPosition = useMemo(() => 
    new THREE.Vector3(0, 3, isMobile ? 10 : 7),
  [isMobile]);

  const cameraFov = useMemo(() => isMobile ? 75 : 60, [isMobile]);

  useEffect(() => {
    // Preload models (código de precarga aquí)
  }, []);

  return (
    <Canvas 
      shadows
      camera={{ position: cameraPosition, fov: cameraFov }}
      className="absolute inset-0 z-0"
    >
      <SoftShadows />
      <SceneContent isMobile={isMobile} />
    </Canvas>
  );
}