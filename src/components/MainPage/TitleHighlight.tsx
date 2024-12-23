// app/_components/TypewriterText.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TypewriterText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  const words = ["Innovación", "Digital"];
  const subtitle = "Transformamos ideas en experiencias extraordinarias";

  // Posiciones predefinidas para las partículas
  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    left: `${(i * 5) % 100}%`,
    top: `${(i * 7) % 100}%`,
  }));

  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Capa de gradiente superior */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 px-4"
      >
        {/* Efecto de luz ambiental mejorado */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
        </div>
        
        {/* Contenedor principal */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-7xl md:text-8xl lg:text-[10rem] font-light text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mx-2 text-white/90 font-extralight tracking-tighter relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.3,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }}
              >
                {word}
                {/* Línea decorativa bajo cada palabra */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.3 }}
                />
              </motion.span>
            ))}
          </motion.div>

          {/* Subtítulo mejorado */}
          <motion.p
            className="text-2xl md:text-3xl text-white/70 text-center font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {subtitle}
          </motion.p>

          {/* Líneas decorativas múltiples */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1 + i * 0.2 }}
              style={{ width: `${100 - i * 20}%`, margin: '0 auto' }}
            />
          ))}
        </div>

        {/* Círculos decorativos flotantes */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute -z-10 w-[600px] h-[600px] rounded-full blur-3xl ${
              i === 0 ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-l from-purple-500/10 to-blue-500/10'
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              delay: i * 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </motion.div>

      {/* Partículas flotantes mejoradas */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          animate={{
            y: [-20, 20],
            x: [-20, 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 2) * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
          style={pos}
        />
      ))}
    </section>
  );
}