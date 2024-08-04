"use client";

import React, { useRef, useCallback } from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from 'three';

interface ModelProps {
  path: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function ModelAbout({ 
  path, 
  scale = [1, 1, 1], 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}: ModelProps) {
  const ref = useRef<THREE.Group>(null);
  const { gl } = useThree();

  const loadModel = useCallback(() => {
    const loader = new GLTFLoader();
    const ktx2Loader = new KTX2Loader().setTranscoderPath('/basis/').detectSupport(gl);
    const dracoLoader = new DRACOLoader().setDecoderPath('/draco/');

    loader.setKTX2Loader(ktx2Loader);
    loader.setDRACOLoader(dracoLoader);

    return loader;
  }, [gl]);

  const gltf = useLoader(GLTFLoader, path, loadModel);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive 
      ref={ref} 
      object={gltf.scene} 
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}