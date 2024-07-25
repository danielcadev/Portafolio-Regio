// components/SpaceTeamSection.tsx
"use client";

import { useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

// Importación dinámica de Stars para mejorar el rendimiento inicial
const Stars = dynamic(() => import("../Scene/SceneStars"), { ssr: false });

const teamMembers = [
  {
    name: "Daniel Castrillon",
    title: "Programador / Desarrollador Web",
    description:
      "Responsable del desarrollo de aplicaciones web y móviles. Experto en programación y tecnologías web modernas.",
    linkedin: "https://www.linkedin.com/in/danielcastrillon",
    avatarUrl: "/avatars/daniel.jpg",
  },
  {
    name: "David Castrillon",
    title: "Ingeniero Mecatronico / IoT",
    description:
      "Encargado de la integración de sistemas IoT y automatización de procesos.",
    linkedin: "https://www.linkedin.com/in/davidcastrillon",
    avatarUrl: "/avatars/david.jpg",
  },
  {
    name: "Darnelis Pertuz",
    title: "CEO y Fundadora",
    description: "Encargada de la dirección y gestión del proyecto",
    linkedin: "https://www.linkedin.com/in/laurapertuz",
    avatarUrl: "/avatars/laura.jpg",
  },
  {
    name: "Joseph Diaz",
    title: "Programador / Finanzas",
    description:
      "Encargado de la programación backend y las finanzas del proyecto.",
    linkedin: "https://www.linkedin.com/in/josephdiaz",
    avatarUrl: "/avatars/joseph.jpg",
  },
  {
    name: "Laura Pertuz",
    title: "Diseñadora Grafica / Marketing digital",
    description:
      "Realiza el diseño de las piezas graficas y se encarga del marketing digital del proyecto.",
    linkedin: "https://www.linkedin.com/in/darnelispertuz",
    avatarUrl: "/avatars/darnelis.jpg",
  },
];

const SpaceTeamSection: React.FC = () => {
  const memoizedTeamMembers = useMemo(() => teamMembers, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-cover bg-center opacity-100">
        <Image
          src="/Parallax/skydown.jpg"
          alt="Sky background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Stars />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Nuestro Equipo
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl"
        >
          {memoizedTeamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              title={member.title}
              description={member.description}
              linkedin={member.linkedin}
              avatarUrl={member.avatarUrl}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SpaceTeamSection;
