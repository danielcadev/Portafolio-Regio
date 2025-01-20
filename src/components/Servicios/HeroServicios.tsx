// components/HeroServicios.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimationStore } from '@/store/animations';

export default function HeroServicios() {
  const [isClient, setIsClient] = useState(false);
  const { hasAnimated, setHasAnimated } = useAnimationStore();

  useEffect(() => {
    setIsClient(true);
    return () => setHasAnimated(true);
  }, []);

  return (
    <div className="min-h-[90vh] w-full bg-[#E5E5E5] relative flex flex-col justify-center">
      {!hasAnimated && (
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: "0vh" }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 bg-black z-50"
        />
      )}

      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            className="border-[0.5px] border-black/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
          />
        ))}
      </div>

      <div className="max-w-[1120px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start gap-12">
          {/* Título principal */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
            className="w-full relative"
          >
            {/* Círculo decorativo */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-black/5"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Texto "Servicios" */}
            <h1 className="text-8xl md:text-[180px] font-bold tracking-tight whitespace-nowrap overflow-hidden">
              {Array.from("Servicios").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 400 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8 + i * 0.1,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            {/* Línea decorativa */}
            <motion.div
              className="h-[2px] bg-black/20 mt-8"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 2 }}
            />
          </motion.div>

          {/* Contenido descriptivo */}
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-black/20" />
              <p className="text-lg text-black/60">Diseño & Desarrollo</p>
            </div>
            <h2 className="text-4xl font-medium leading-tight">
              Creamos soluciones digitales que transforman negocios
            </h2>
            <p className="text-lg text-black/60">
              Combinamos estrategia, diseño y tecnología para crear experiencias digitales excepcionales.
            </p>

            {/* Tags animados */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Web", "Mobile", "UI/UX", "Branding", "Marketing"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-black/5 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5 + i * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0,0,0,0.1)" 
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div 
              className="w-[1px] h-10 bg-black/20"
              animate={{
                scaleY: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm text-black/40">Scroll</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}