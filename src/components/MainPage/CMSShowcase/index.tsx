// components/CMSShowcase/index.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from './Header';
import { FeaturesGrid } from './FeaturesGrid';
import { BottomCTA } from './BottomCTA';

export default function CMSShowcase() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#E5E5E5] to-[#E5E5E5]/80">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
            filter: 'blur(80px)',
            y
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(200,200,200,0.6) 0%, transparent 70%)',
            filter: 'blur(60px)',
            y: useTransform(scrollYProgress, [0, 1], [50, -50])
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-32 md:py-40">
        <Header />
        <FeaturesGrid />
        <BottomCTA />
      </div>
    </section>
  );
}