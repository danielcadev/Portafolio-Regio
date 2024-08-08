// components/Parallax.tsx
'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxProps {
  children: ReactNode;
}

export default function Parallax({ children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const earthY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: skyY }} className="absolute inset-0 z-0">
        <Image
          src="/Parallax/skyup.webp"
          alt="Sky background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>
      <motion.div style={{ y: earthY }} className="absolute top-0 w-full h-1/2 z-20">
        <Image
          src="/Parallax/earth2.webp"
          alt="Earth background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
