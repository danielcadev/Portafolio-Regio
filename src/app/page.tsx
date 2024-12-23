import React from 'react';
import Hero from '@/components/MainPage/Hero';
import ProjectShowcase from '@/components/MainPage/ProjectShowcase';
import { getProjects } from '@/data/projects';
import HeroHighlightDemo  from '@/components/MainPage/TitleHighlight';

export default function MainPage() {
  const projects = getProjects()
  const titlePositions = [0, 220, 440];

  return (

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section id="hero">
            <Hero />
          </section>

          <section id="projects" className="py-4">
            <ProjectShowcase titlePositions={titlePositions} projects={projects} />
            <HeroHighlightDemo />
          </section>
        </main>
      </div>

  );
}