// app/page.tsx
import React from 'react';
import Hero from '@/components/MainPage/Hero';
import ProjectShowcase from '@/components/MainPage/ProjectShowcase';
import ServicesSection from '@/components/MainPage/ServicesSection';


export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#E5E5E5]">
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="projects">
          <ProjectShowcase />
        </section>

        <section>
         <ServicesSection />
        </section>
      </main>
    </div>
  );
}