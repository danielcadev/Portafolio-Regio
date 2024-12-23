"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types/Project';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectShowcaseProps {
  projects: Project[];
  titlePositions: number[]; // Array de posiciones personalizadas para el título
}

export default function ProjectShowcase({ projects, titlePositions }: ProjectShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleProjectClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-black text-white p-8 rounded-3xl overflow-hidden">
      <div className="relative mb-8" style={{ height: '200px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: titlePositions[selectedIndex] }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-2"
          >
            <h1 className="text-8xl font-bold mb-1">{projects[selectedIndex].title}</h1>
            <p className="text-3xl">{projects[selectedIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex gap-3 h-[480px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            onClick={() => handleProjectClick(index)}
            className={`cursor-pointer overflow-hidden relative rounded-3xl ${
              index === selectedIndex ? 'w-[66%]' : 'w-[17%]'
            }`}
            animate={{
              width: index === selectedIndex ? '66%' : '17%',
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-cover"
              />
              {index === selectedIndex && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                >
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-white text-black text-xl font-semibold py-4 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 self-end">
                    Ver →
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}