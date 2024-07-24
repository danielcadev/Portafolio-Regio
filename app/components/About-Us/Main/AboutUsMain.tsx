'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '../../common/ErrorBoundary';
import { useModel3DResponsive } from '@/hooks/useModel3DResponsive';
import AboutUsContent from './AboutUsContent';
import SpaceTeamSection from '../Team/SpaceTeamSection';

const SceneSpace = dynamic(() => import('../Scene/SceneSpace'), {
  ssr: false,
  loading: () => <p>Loading 3D scene...</p>,
});

function WebGLNotSupported() {
  return (
    <div className="webgl-not-supported">
      Lo sentimos, tu navegador o hardware no soporta WebGL. 
      No se pueden mostrar los modelos 3D.
    </div>
  );
}

export default function AboutUsMain() {
  const isMobile = useModel3DResponsive();

  return (
    <div className="relative w-full text-white">
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ErrorBoundary fallback={<WebGLNotSupported />}>
          <SceneSpace isMobile={isMobile} />
        </ErrorBoundary>
      </div>
      <div className="relative z-10">
        <AboutUsContent />
      </div>
    </div>
    <SpaceTeamSection />
  </div>
  );
}