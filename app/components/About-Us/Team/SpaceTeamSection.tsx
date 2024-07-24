// components/SpaceTeamSection.tsx
'use client';

import Image from 'next/image';
import Stars from '../Scene/SceneStars';
import TeamCard from './TeamCard';
import { motion } from 'framer-motion';

const SpaceTeamSection: React.FC = () => {
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
      name: "Laura Pertuz", 
      title: "Diseñadora Grafica y marketing digital", 
      description: "Realiza el diseño de las piezas graficas y se encarga del marketing digital del proyecto.",
      linkedin: "https://www.linkedin.com/in/josephdiaz"
    },
    { 
      name: "Joseph Diaz", 
      title: "Programador Junior", 
      description: "Responsable del desarrollo backend. Experto en programación y tecnologías web modernas.",
      linkedin: "https://www.linkedin.com/in/josephdiaz"
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Parallax/skydown.jpg')" }}>
        <Stars />
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