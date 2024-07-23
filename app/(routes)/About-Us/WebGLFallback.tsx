import React from 'react';

const WebGLFallback: React.FC = () => (
  <div className="webgl-fallback">
    <h2>Lo sentimos, su navegador no soporta WebGL</h2>
    <p>Esta página requiere WebGL para mostrar contenido 3D interactivo.</p>
    <p>Por favor, intente con un navegador más reciente o active WebGL en su navegador actual.</p>
  </div>
);

export default WebGLFallback;