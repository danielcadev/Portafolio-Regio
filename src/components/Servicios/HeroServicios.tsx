"use client";

import { motion } from "framer-motion";

const HeroServicios = () => {
  return (
    <div className="w-full bg-[#E5E5E5] relative overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white to-transparent opacity-60 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-white to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="max-w-[1120px] mx-auto pt-32 pb-20 px-4 relative">
        {/* Small label animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="text-[#181717]/60 text-sm tracking-wider uppercase px-4 py-2 border border-[#181717]/10 rounded-full">
            Nuestros Servicios
          </span>
        </motion.div>

        {/* Main title with stagger animation */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-[80px] text-[#181717] font-medium leading-[1.1] tracking-tight">
              Soluciones
              <br />
              <span className="text-[#181717]/50">Digitales</span>
            </h1>
          </motion.div>
        </div>

        {/* Description with fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[28px] text-[#181717]/70 leading-relaxed">
            Transformamos ideas en experiencias digitales excepcionales, 
            impulsando el crecimiento de su negocio con tecnología innovadora.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute left-0 top-1/3 w-24 h-24 bg-gradient-to-r from-white to-transparent opacity-40 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-1/3 w-32 h-32 bg-gradient-to-l from-white to-transparent opacity-40 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default HeroServicios;