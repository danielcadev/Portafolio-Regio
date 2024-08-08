// components/Parallax.tsx
import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxProps {
  children: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const earthY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: skyY }} className="absolute inset-0 z-0">
        <Image src="/Parallax/skyup.png" alt="Sky background" layout="fill" objectFit="cover" priority />
      </motion.div>
      <motion.div style={{ y: earthY }} className="absolute top-0 w-full h-1/2 z-20">
        <Image src="/Parallax/earth2.png" alt="Earth background" layout="fill" objectFit="cover" priority />
      </motion.div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
