"use client";

import { motion } from "framer-motion";
import { relativeBold, relativeBook } from "@/fonts";

const HeroServicios = () => {
  return (
    <div className="w-full relative text-center flex flex-col items-center justify-center pt-16 md:pt-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 ${relativeBold.className}`}
      >
        Mis Servicios
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl ${relativeBook.className}`}
      >
        Transformo ideas en soluciones digitales impactantes. Descubre cómo
        puedo potenciar tu proyecto con innovación y tecnología de vanguardia.
      </motion.p>
    </div>
  );
};

export default HeroServicios;