"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Code, Smartphone, ChevronDown } from "lucide-react";
import { relativeBold, relativeBook } from "@/fonts";

interface Servicio {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const servicios: Servicio[] = [
  {
    title: "Desarrollo de Aplicaciones Móviles",
    icon: <Smartphone className="text-blue-400" size={48} />,
    description:
      "Creación de apps móviles nativas e híbridas para iOS y Android.",
    details: [
      "Diseño de UI/UX",
      "Desarrollo nativo (Swift, Kotlin)",
      "Desarrollo híbrido (React Native, Flutter)",
      "Integración con APIs",
      "Pruebas y QA",
    ],
  },
  {
    title: "Desarrollo Web",
    icon: <Code className="text-blue-400" size={48} />,
    description:
      "Desarrollo de sitios web modernos, responsivos y de alto rendimiento.",
    details: [
      "Desarrollo Frontend (React, Next.js, Vue.js)",
      "Desarrollo Backend (Node.js, Python, Java)",
      "Bases de datos (SQL, NoSQL)",
      "Despliegue en la nube (AWS, GCP, Azure)",
      "SEO y optimización de rendimiento",
    ],
  },
  {
    title: "Consultoría Tecnológica",
    icon: <BadgeCheck className="text-blue-400" size={48} />,
    description:
      "Asesoramiento en la toma de decisiones sobre tecnología y arquitectura de software.",
    details: [
      "Análisis de requerimientos",
      "Diseño de arquitectura de software",
      "Selección de tecnologías",
      "Evaluación de código y seguridad",
      "Estrategias de transformación digital",
    ],
  },
];

const ServiciosGrid = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null); // Definimos setHoveredService

  const toggleAccordion = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicios.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 md:p-8 rounded-lg bg-black border border-slate-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredService(index)} // Usamos setHoveredService
            onMouseLeave={() => setHoveredService(null)} // Usamos setHoveredService
            onClick={() => toggleAccordion(index)}
          >
            {/* Superposición con detalles al hacer hover o clic */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: expanded === index ? 0.25 : 0 }} // Corregido para usar expanded
            >
              <ul className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white list-disc list-inside space-y-2 ${relativeBook.className} w-full p-4`}>
                {service.details.map((detail) => (
                  <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-white"
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contenido visible */}
            <div className="relative z-10">
              <div className="flex flex-col items-center mb-4">
                <span className="mb-2">{service.icon}</span>
                <h3 className={`text-xl md:text-2xl font-bold text-white ${relativeBold.className} text-center`}>
                  {service.title}
                </h3>
              </div>
              <p className={`text-neutral-300 text-center ${relativeBook.className} mb-4`}>
                {service.description}
              </p>
              {/* Indicador de expansión */}
              <div className="mt-4 flex justify-center">
                <ChevronDown
                  className={`text-blue-500 transition-transform ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosGrid;