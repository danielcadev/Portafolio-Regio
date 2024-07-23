// app/about/page.tsx
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';

const AboutMain = dynamic(() => import('./SceneCanvas'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const fadeInUp: Variants  = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
 
};

const staggerChildren:Variants  = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutUs: React.FC = () => {
  const sections = [
    {
      title: "Desarrollo Web y Móvil",
      items: ["HTML, CSS, JavaScript", "React, Next.js, Vue.js", "iOS y Android nativo", "Flutter y React Native"]
    },
    {
      title: "Automatización Inteligente",
      items: ["Integración con Alexa", "Sistemas de control domótico", "IoT y dispositivos conectados", "Optimización energética"]
    },
    {
      title: "Innovación Constante",
      items: ["Investigación de nuevas tecnologías", "Soluciones personalizadas", "Mejora continua de procesos", "Enfoque en experiencia del usuario"]
    }
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AboutMain />
      </div>
      
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
            transition={{ duration: 0.6 }}
          >
            Sobre Nosotros
          </motion.h1>
          <motion.div 
            className="text-xl md:text-2xl text-gray-300 mb-8" 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Innovación y Tecnología Unidas
          </motion.div>
          <motion.p 
            className="text-base md:text-lg text-gray-200 mb-8" 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Somos un equipo dinámico de jóvenes profesionales apasionados por la tecnología. Combinamos experiencia en desarrollo web, aplicaciones móviles y automatización de hogares inteligentes para ofrecer soluciones tecnológicas integrales y de vanguardia.
          </motion.p>
        </motion.div>

        <motion.div className="w-full max-w-5xl z-20 mb-12" variants={fadeInUp}>
          <motion.div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg mb-12" variants={staggerChildren}>
            {["Nuestra Misión", "Visión", "Logros", "Proceso de Trabajo", "Clientes Satisfechos"].map((link) => (
              <motion.a key={link} href="#" className="hover:text-gray-300 transition-colors duration-300" variants={fadeInUp}>{link}</motion.a>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-sm text-gray-200" variants={staggerChildren}>
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
    </div>
  );
};

export default AboutUs;