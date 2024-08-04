'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

let dracoLoader: DRACOLoader;
let ktx2Loader: KTX2Loader;

if (typeof window !== 'undefined') {
  dracoLoader = new DRACOLoader().setDecoderPath('/draco/');
  ktx2Loader = new KTX2Loader().setTranscoderPath('/basis/');
}

const Loader = () => (
  <Html center>
    <div className="text-white text-xl">Cargando...</div>
  </Html>
);

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.Material };
};

const Model = ({ path, position, scale }: { path: string; position: THREE.Vector3; scale: THREE.Vector3 }) => {
  const { gl } = useThree();
  const gltf = useLoader(GLTFLoader, path, (loader) => {
    if (dracoLoader && ktx2Loader) {
      loader.setDRACOLoader(dracoLoader);
      loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    }
  }) as GLTFResult;

  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += path.includes('earth') ? 0.001 : 0.0005;
      if (path.includes('astro')) {
        ref.current.position.y = position.y + Math.sin(state.clock.elapsedTime) * 0.05;
      }
    }
  });

  return <primitive ref={ref} object={gltf.scene} position={position} scale={scale} />;
};

const SceneContent = ({ isMobile }: { isMobile: boolean }) => {
  const positions = {
    astro: new THREE.Vector3(isMobile ? -1 : -2, isMobile ? 1 : 0, isMobile ? -1 : 0),
    earth: new THREE.Vector3(isMobile ? 1 : 2, isMobile ? 1 : 0, 0),
  };
  const scales = {
    astro: new THREE.Vector3(...(isMobile ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5])),
    earth: new THREE.Vector3(...(isMobile ? [0.045, 0.045, 0.045] : [0.05, 0.05, 0.05])),
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model path="/astro1.glb" position={positions.astro} scale={scales.astro} />
        <Model path="/earth3.glb" position={positions.earth} scale={scales.earth} />
      </Suspense>
      <Environment preset="city" />
    </>
  );
};

export default function SceneSpace({ isMobile }: { isMobile: boolean }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      const loader = new GLTFLoader();
      if (dracoLoader && ktx2Loader) {
        loader.setDRACOLoader(dracoLoader);
        loader.setKTX2Loader(ktx2Loader);
      }
      
      await Promise.all([
        new Promise(resolve => loader.load('/astro1.glb', resolve)),
        new Promise(resolve => loader.load('/earth3.glb', resolve))
      ]);
      
      setIsLoading(false);
    };
    loadModels();
  }, []);

  if (isLoading) {
    return <div className="w-full h-screen flex items-center justify-center bg-black text-white">Cargando escena...</div>;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, isMobile ? 6 : 5], fov: 50 }}
      className="absolute inset-0 z-0"
    >
      <SceneContent isMobile={isMobile} />
    </Canvas>
  );
}