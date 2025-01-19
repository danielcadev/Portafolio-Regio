// components/CMSShowcase/Header.tsx
'use client'

import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center mb-32"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="inline-block text-sm tracking-wider uppercase mb-6 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full"
      >
        Gestión de Contenido Revolucionaria
      </motion.span>

      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-[80px] md:text-[160px] font-bold leading-none tracking-tight text-[#181717] mb-6"
        >
          Sistema
          <br />
          <span className="text-[#181717]/40">CMS</span>
        </motion.h2>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-3xl text-[#181717]/60 max-w-3xl mx-auto"
      >
        Una nueva forma de gestionar tu contenido digital
      </motion.p>
    </motion.div>
  );
}