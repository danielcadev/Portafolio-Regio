// components/ProjectShowcase/ProjectShowcase.tsx
'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Hero/ProjectShowcase.module.css';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mitiquete",
    image: "/IMG_Proyectos/64a66afbd65c2f2ec1f1019b_arkitect-p-800.webp",
    className: styles.imageLeftCenter,
    url: "https://mitiquete.net"
  },
  {
    title: "Proyecto Principal",
    image: "/IMG_Proyectos/64a668db08bc7f2ce51b4c02_bent-p-800.webp",
    className: styles.imageCenter,
    url: "#"
  },
  {
    title: "Otro Proyecto",
    image: "/IMG_Proyectos/64a668d99d7dd2e330fd9d1d_fylla-p-800.webp",
    className: styles.imageRightCenter,
    url: "#"
  }
];

// components/ProjectShowcase/ProjectShowcase.tsx
export default function ProjectShowcase() {
  return (
    <section className="w-full overflow-hidden py-32"> {/* Más padding vertical */}
      {/* Header con más impacto */}
      <div className="max-w-[1120px] mx-auto text-center mb-32"> {/* Más espacio abajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-[120px] leading-none font-medium text-[#181717] mb-8"> {/* Título más grande */}
            Nuestros
            <br />
            <span className="text-[#181717]/40">Proyectos</span> {/* Efecto de fade en la segunda línea */}
          </h2>
          <p className="text-2xl text-[#181717]/60 max-w-2xl mx-auto mb-12"> {/* Descripción más grande */}
            Explora nuestra colección de soluciones digitales que transforman ideas en experiencias
          </p>
          <div className="flex gap-6 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 bg-[#181717] text-white text-lg hover:bg-[#181717]/90"
            >
              Ver Todos los Proyectos →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-[#181717]/10 text-lg text-[#181717] hover:bg-[#181717]/5"
            >
              Contactar
            </Button>
          </div>
        </motion.div>
      </div>


      {/* Galería de Proyectos */}
      <div className={styles.imageContainer}>
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={project.className}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-medium text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}