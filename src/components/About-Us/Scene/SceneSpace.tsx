"use client";

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';

const ModelAbout = dynamic(() => import('@/src/3DModels/ModelAboutUs'), { ssr: false });

export default function SceneSpace({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, isMobile ? 6 : 5], fov: 50 }}
      className="absolute inset-0 z-0"
    >
      <Suspense fallback={null}>
        <ModelAbout 
          path="https://res.cloudinary.com/df1xirxtx/image/upload/v1722806798/astro1_wo9ms7.glb"
          position={[isMobile ? -1 : -2, isMobile ? 1 : 0, isMobile ? -1 : 0]}
          scale={[isMobile ? 0.6 : 0.5, isMobile ? 0.6 : 0.5, isMobile ? 0.6 : 0.5]}
        />
        <ModelAbout 
          path="https://res.cloudinary.com/df1xirxtx/image/upload/v1722806815/earth3_kiorin.glb"
          position={[isMobile ? 1 : 2, isMobile ? 1 : 0, 0]}
          scale={[isMobile ? 0.045 : 0.05, isMobile ? 0.045 : 0.05, isMobile ? 0.045 : 0.05]}
        />
      </Suspense>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </Canvas>
  );
}