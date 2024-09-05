//src\data\projects.ts
import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: "SafePal",
    description: "Making your crypto experience safe and fun.",
    mainImage: "/images/safepal-main.png",
    tags: ["Brand", "Web", "Illustration"]
  },
  {
    id: '2',
    title: "Solana",
    description: "Blockchain of command and more.",
    mainImage: "/images/safepal-main.png",
    tags: ["Blockchain", "Web3", "Technology"]
  },
  {
    id: '3',
    title: "Lamar",
    description: "You've seen us from your minivan.",
    mainImage: "/images/safepal-main.png",
    tags: ["Advertising", "Outdoor", "Marketing"]
  }
];

export function getProjects(): Project[] {
  return projects;
}