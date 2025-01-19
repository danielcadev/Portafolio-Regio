'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Mitiquete",
    image: "/IMG_Proyectos/64a66afbd65c2f2ec1f1019b_arkitect-p-800.webp",
    position: "left",
    url: "https://mitiquete.net"
  },
  {
    title: "Proyecto Principal",
    image: "/IMG_Proyectos/64a668db08bc7f2ce51b4c02_bent-p-800.webp",
    position: "center",
    url: "#"
  },
  {
    title: "Otro Proyecto",
    image: "/IMG_Proyectos/64a668d99d7dd2e330fd9d1d_fylla-p-800.webp",
    position: "right",
    url: "#"
  }
];

export default function ProjectShowcase() {
  return (
    <section className="w-full overflow-hidden py-16 md:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1120px] mx-auto text-center mb-16 md:mb-32 px-4"
      >
        <h2 className="text-5xl md:text-[120px] leading-none font-medium text-[#181717] mb-4 md:mb-8">
          Nuestros
          <br />
          <span className="text-[#181717]/40">Proyectos</span>
        </h2>
        <p className="text-lg md:text-2xl text-[#181717]/60 max-w-2xl mx-auto">
          Explora nuestra colección de soluciones digitales
        </p>
      </motion.div>

      {/* Versión Móvil */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-center flex-shrink-0 w-[85vw] h-[50vh] relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>


      {/* Versión Desktop */}
      <div className="hidden md:flex relative items-center justify-center w-full h-[466px] overflow-x-hidden">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "absolute transition-transform duration-700", // Cambiado a solo transform
              project.position === "center"
                ? "w-[700px] h-[466px] z-[5]"
                : cn(
                  "w-[600px] h-[400px] mt-[66px] z-[3]",
                  project.position === "left"
                    ? "-translate-x-[100%]"
                    : "translate-x-[100%]"
                )
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Cambiado a animate en lugar de whileInView
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 rounded-2xl group-hover:opacity-100"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                >
                  <h3 className="text-xl md:text-2xl font-medium text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}