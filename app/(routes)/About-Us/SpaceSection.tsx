// components/SpaceTeamSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TeamCard from './TeamCard';
import { motion } from 'framer-motion';

const Stars = dynamic(() => import('./Stars'), {
  ssr: false,
  loading: () => <div>Cargando estrellas...</div>
});

const SpaceTeamSection: React.FC = () => {
  const [showStars, setShowStars] = useState(true);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('WebGL') || event.message.includes('THREE.WebGLRenderer')) {
        setShowStars(false);
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  const teamMembers = [
    { 
      name: "Daniel Castrillon", 
      title: "Programador Principal", 
      description: "Responsable del desarrollo de aplicaciones web y móviles. Experto en programación y tecnologías web modernas.",
      linkedin: "https://www.linkedin.com/in/danielcastrillon"
    },
    { 
      name: "David Castrillon", 
      title: "Especialista en Casas Inteligentes", 
      description: "Encargado de los sistemas de casas inteligentes. Experto en IoT y automatización del hogar.",
      linkedin: "https://www.linkedin.com/in/davidcastrillon"
    },
    { 
      name: "Joseph Diaz", 
      title: "Asistente Creativo", 
      description: "Apoya en la creación de contenido visual y colabora en diversos aspectos del proyecto.",
      linkedin: "https://www.linkedin.com/in/josephdiaz"
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Parallax/skydown.jpg')" }}>
        {showStars && <Stars />}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
        >
          Nuestro Equipo
        </motion.h1>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl"
        >
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index} 
              name={member.name} 
              title={member.title} 
              description={member.description}
              linkedin={member.linkedin}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SpaceTeamSection;