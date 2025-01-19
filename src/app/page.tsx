// app/page.tsx
import React from 'react';
import Hero from '@/components/MainPage/Hero';
import ProjectShowcase from '@/components/MainPage/ProjectShowcase';
import CMSShowcase from '@/components/MainPage/CMSShowcase'; // Actualizada la ruta de importación

export default function MainPage() {
  return (
    <div className="relative min-h-screen bg-[#E5E5E5] overflow-hidden">
      {/* Gradiente de fondo global */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E5E5E5] to-transparent" />
      </div>

      <main className="relative">
        {/* Hero Section */}
        <section 
          id="hero" 
          className="relative z-10"
        >
          <Hero />
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className="relative z-20"
        >
          <ProjectShowcase />
        </section>

        {/* CMS Section */}
        <section 
          id="cms" 
          className="relative z-30"
        >
          <CMSShowcase />
        </section>
      </main>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#E5E5E5] to-transparent z-50" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#E5E5E5] to-transparent z-50" />
      </div>
    </div>
  );
}