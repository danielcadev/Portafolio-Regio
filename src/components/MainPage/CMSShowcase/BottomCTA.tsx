// components/CMSShowcase/BottomCTA.tsx
'use client'

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative rounded-3xl overflow-hidden bg-[#181717]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <div className="relative h-[500px] flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-5xl md:text-7xl font-bold text-white">
              El futuro del contenido
              <span className="block text-white/60">está aquí</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/60">
              Únete a la próxima generación de gestión de contenido
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#181717] hover:bg-white/90 px-12 py-8 text-xl 
                  rounded-full shadow-2xl hover:shadow-white/20"
              >
                Comenzar ahora →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}