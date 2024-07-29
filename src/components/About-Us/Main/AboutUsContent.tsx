'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const sections = [
  {
    title: "Desarrollo Web y Móvil",
    items: ["Aplicaciones web y móviles", "React, Next.js, Vue.js", "iOS y Android nativo", "Tecnologías web modernas"]
  },
  {
    title: "Automatización Inteligente",
    items: ["Integración de sistemas IoT", "Automatización de procesos", "Ingeniería Mecatrónica", "Optimización de sistemas"]
  },
  {
    title: "Diseño y Marketing",
    items: ["Diseño gráfico", "Marketing digital", "Experiencia de usuario", "Estrategias de comunicación"]
  },
  {
    title: "Gestión y Finanzas",
    items: ["Dirección de proyectos", "Gestión financiera", "Desarrollo backend", "Estrategia empresarial"]
  }
];


const links = ["Nuestra Misión", "Visión", "Logros", "Proceso de Trabajo", "Clientes Satisfechos"];

export default function AboutUsContent() {
  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center justify-center px-4 min-h-screen"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.div 
        className="text-center z-20 max-w-3xl mt-16 md:mt-0 p-6 rounded-lg" 
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-2" 
          variants={fadeInUp}
        >
          Sobre Nosotros
        </motion.h1>
        <motion.div 
          className="text-xl md:text-2xl text-gray-300 mb-8" 
          variants={fadeInUp}
        >
          Innovación y Tecnología Unidas
        </motion.div>
        <motion.p 
          className="text-base md:text-lg text-gray-200 mb-8" 
          variants={fadeInUp}
        >
          Somos un equipo dinámico de jóvenes profesionales apasionados por la tecnología. Combinamos experiencia en desarrollo web, aplicaciones móviles y automatización de hogares inteligentes para ofrecer soluciones tecnológicas integrales y de vanguardia.
        </motion.p>
      </motion.div>

      <motion.div className="w-full max-w-5xl z-20 mb-12" variants={fadeInUp}>
        <motion.div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg mb-12" variants={staggerChildren}>
          {links.map((link) => (
            <motion.a key={link} href="#" className="hover:text-gray-300 transition-colors duration-300" variants={fadeInUp}>{link}</motion.a>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-sm text-gray-200" variants={staggerChildren}>
          {sections.map((section, index) => (
            <motion.div key={index} className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20" variants={fadeInUp}>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <motion.li key={itemIndex} className="flex items-center" variants={fadeInUp}>
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}