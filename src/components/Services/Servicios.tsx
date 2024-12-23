"use client";

import { Button } from "@/components/ui/button";
import { relativeBold, relativeMedium, relativeBook } from "@/fonts";
import ServiciosCarousel from "./ServiciosCarousel";
import SkillsBadges from "./SkillsBadges";
import ExperienciaAcordeon from "./ExperienciaAcordeon";

export default function Servicios() {
  // Datos de ejemplo para las insignias
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Flutter",
    "Swift",
    "Kotlin",
    "AWS",
    "Firebase",
    "SQL",
  ];

  return (
    <div className={`bg-black text-white min-h-screen p-4 md:p-8 ${relativeBook.className}`}>
      <div className="max-w-5xl mx-auto w-full mt-16 md:mt-24"> {/* Margen superior añadido */}
        <h1 className={`text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 ${relativeBold.className}`}>
          Mis Servicios
        </h1>

        {/* Carrusel de Servicios */}
        <ServiciosCarousel />

        {/* Insignias de Habilidades */}
        <SkillsBadges skills={skills} />

        {/* Acordeón de Experiencia */}
        <ExperienciaAcordeon />

        {/* Llamada a la Acción */}
        <div className="mt-12 md:mt-16 text-center">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full"
          >
            <span className={`${relativeMedium.className}`}>Contáctame</span>
          </Button>
        </div>
      </div>
    </div>
  );
}