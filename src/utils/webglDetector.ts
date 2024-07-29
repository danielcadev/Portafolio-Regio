// utils/webglDetector.ts

export function detectWebGLContext(): 'webgl2' | 'webgl' | null {
    const canvas = document.createElement('canvas');
    let gl;
  
    try {
      gl = canvas.getContext('webgl2');
      if (gl) return 'webgl2';
    } catch (e) {}
  
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) return 'webgl';
    } catch (e) {}
  
    return null;
  }