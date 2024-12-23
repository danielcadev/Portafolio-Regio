"use client";

import { Button } from "@/components/ui/button";
import { relativeBold, relativeMedium, relativeBook } from "@/fonts";
import SkillsSection from "./SkillsSection";
import ExperienciaAcordeon from "./ExperienciaAcordeon";
import HeroServicios from "./HeroServicios";
import ServiciosGrid from "./ServiciosGrid";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

export default function Servicios() {
  const skills = [
    { name: "React", icon: <SiReact size={20} /> },
    { name: "Next.js", icon: <SiNextdotjs size={20} /> },
    { name: "TypeScript", icon: <SiTypescript size={20} /> },
    { name: "Node.js", icon: <SiNodedotjs size={20} /> },
    { name: "Flutter", icon: <SiFlutter size={20} /> },
    { name: "Swift", icon: <SiSwift size={20} /> },
    { name: "Kotlin", icon: <SiKotlin size={20} /> },
  
    { name: "Firebase", icon: <SiFirebase size={20} /> },
    { name: "SQL", icon: <SiMysql size={20} /> },
  ];

  return (
    <div
      className={`bg-black text-white min-h-screen p-4 md:p-8 ${relativeBook.className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <HeroServicios />

        {/* Servicios en formato de Grid */}
        <ServiciosGrid />

        {/* Insignias de Habilidades */}
        <SkillsSection skills={skills} />

        {/* Acordeón de Experiencia */}
        <ExperienciaAcordeon />

        {/* Llamada a la Acción */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full"
          >
            <span className={`${relativeMedium.className}`}>Contáctame</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}