"use client";
import TimelineDemo from "@/components/About-Us/TimelineDemo"; // Asegúrate de que la ruta al componente TimelineDemo sea correcta

export default function About() {
  return (
    <div className="relative w-full min-h-screen ">
      <div className="fixed top-0 left-0 w-full z-30"></div>
      <TimelineDemo />
    </div>
  );
}