// components/Stars.tsx
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';


const random = require('maath/random/dist/maath-random.esm')

const StarsCanvas: React.FC = () => {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 60;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as any} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#fff" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const Stars: React.FC = () => (
  <div className="absolute inset-0">
    <Canvas>
      <StarsCanvas />
    </Canvas>
  </div>
);

export default Stars;