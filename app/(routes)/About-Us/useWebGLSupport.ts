// hooks/useWebGLSupport.ts
import { useState, useEffect } from 'react';

export function useWebGLSupport() {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    function checkWebGLSupport() {
      if (typeof window === 'undefined') return false;

      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    }

    setIsSupported(checkWebGLSupport());
  }, []);

  return isSupported;
}