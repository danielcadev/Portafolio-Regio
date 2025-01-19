// components/About-Us/TitleHero.tsx
"use client";

import { motion } from "framer-motion";

export default function TitleHero() {
  return (
    <div className="w-full px-4 mx-auto max-w-[1120px] pt-24 md:pt-32 relative">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/50 to-transparent opacity-70 blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Small decorative label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 text-center md:text-left"
        >
          <span className="inline-block text-[#181717]/60 text-sm tracking-wider uppercase px-4 py-2 border border-[#181717]/10 rounded-full">
            Sobre Nosotros
          </span>
        </motion.div>

        {/* Main Title Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-[#181717] font-medium leading-[1.1] tracking-tight">
              Innovación 
              <br />
              <span className="text-[#181717]/50">
                Digital
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-0 md:pt-8 text-center md:text-left"
          >
            <p className="text-xl sm:text-2xl md:text-[28px] text-[#181717]/70 leading-relaxed">
              Descubre la evolución y los logros de{" "}
              <span className="text-[#181717]">RegioSoft</span>{" "}
              a lo largo de los años, creando soluciones digitales innovadoras.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements - Ajustados para responsive */}
        <motion.div 
          className="absolute -left-4 top-1/2 w-24 h-24 bg-gradient-to-r from-white to-transparent opacity-40 blur-2xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute -right-4 bottom-0 w-32 h-32 bg-gradient-to-l from-white to-transparent opacity-40 blur-2xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>
    </div>
  );
}