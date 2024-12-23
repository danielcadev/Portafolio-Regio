//src\data\projects.ts
import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: '1',
    title: "Mitiquete",
    description: "Web hecha para dar servicio de turismo a cualquier parte del mundo.",
    mainImage: "/IMG_Proyectos/mitiquete2.png",
    tags: ["Turismo", "Web", "Servicios"]
  },
  {
    id: '2',
    title: "Conociendo Colombia",
    description: "Web de turismo enfocada en el público extranjero para conocer Colombia.",
    mainImage: "/IMG_Proyectos/ConociendoColombia.jpeg",
    tags: ["Turismo", "Colombia", "Extranjeros"]
  },
  {
    id: '3',
    title: "Multitienda Emprende",
    description: "Web creada para ofrecer productos de alta calidad.",
    mainImage: "/IMG_Proyectos/MultitiendaEmprende.png",
    tags: ["E-commerce", "Emprendimiento", "Productos"]
  },
];

export function getProjects(): Project[] {
  return projects;
}