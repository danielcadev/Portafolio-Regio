// app/projects/page.tsx
'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Mitiquete",
    description: "Web hecha para dar servicio de turismo a cualquier parte del mundo.",
    imageUrl: "/IMG_Proyectos/Mitiquete.jpeg",
    link: "https://mitiquete.net",
  },
  {
    title: "Conociendo Colombia",
    description: "Web de turismo enfocada en el público extranjero para conocer Colombia.",
    imageUrl: "/IMG_Proyectos/ConociendoColombia.jpeg",
    link: "https://conociendocolombia.com",
  },
  {
    title: "Multitienda Emprende",
    description: "Web creada para ofrecer productos de alta calidad.",
    imageUrl: "/IMG_Proyectos/MultitiendaEmprende.jpg",
    link: "https://multitiendaemprende.com",
  },
  {
    title: "RegionColombia",
    description: "Web enfocada para zonas o regiones de Colombia.",
    imageUrl: "/IMG_Proyectos/regioncolombia.jpeg",
    link: "https://regioncolombia.com",
  },
];

export default function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/IMG_Proyectos/spaceproyects.jpg')" }}>
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.7)',
            animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
          }}
        />
      ))}
      <div className="relative z-10 bg-black bg-opacity-70 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl font-extrabold text-center text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Proyectos Hechos por Regiossoft
        </motion.h1>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({ project, index, isHovered, onHover, onLeave }: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-2xl group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-72 object-cover transition-transform duration-500 transform group-hover:scale-110"
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isHovered ? 0.8 : 0.5 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explorar Proyecto
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

function ParticleEffect() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%"
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          style={{
            boxShadow: '0 0 8px 2px rgba(59, 130, 246, 0.8)',
          }}
        />
      ))}
    </motion.div>
  );
}