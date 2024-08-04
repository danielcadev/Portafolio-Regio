"use client";

import { useRef, useEffect } from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

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

  const gltf = useLoader(GLTFLoader, path, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath('/basis/');
    ktx2Loader.detectSupport(gl);
    loader.setKTX2Loader(ktx2Loader);
  });

  useEffect(() => {
    if (gltf) {
      // Aquí puedes realizar operaciones adicionales con el modelo cargado si es necesario
    }
  }, [gltf]);

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