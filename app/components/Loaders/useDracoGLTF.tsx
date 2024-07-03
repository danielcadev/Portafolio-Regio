// useDracoGLTF.tsx
import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

const dracoLoader = new DRACOLoader().setDecoderPath('/draco/');
const ktx2Loader = new KTX2Loader().setTranscoderPath('/basic/');
const gltfLoader = new GLTFLoader().setDRACOLoader(dracoLoader).setKTX2Loader(ktx2Loader.detectSupport(new THREE.WebGLRenderer()));

const useDracoGLTF = (path: string) => {
  const [gltf, setGltf] = useState<THREE.Group | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    gltfLoader.load(
      path,
      (gltf) => {
        console.log(`Loaded model: ${path}`, gltf.scene);
        setGltf(gltf.scene);
      },
      undefined,
      (err) => {
        console.error(`Failed to load model: ${path}`, err);
        setError(`Failed to load model: ${path}`);
      }
    );
  }, [path]);

  return { gltf, error };
};

export default useDracoGLTF;