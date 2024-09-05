import React from 'react';
import SmoothScroll from '@/components/Layout/SmoothScroll';
import Hero from '@/components/MainPage/Hero';
import ProjectShowcase from '@/components/MainPage/ProjectShowcase';
import { getProjects } from '@/data/projects';


export default function MainPage() {
  const projects = getProjects()
  const titlePositions = [0, 220, 440];

  return (
    <SmoothScroll options={{
      smoothWheel: true,
      lerp: 0.1,
      orientation: 'vertical',
      duration: 1.2,
      infinite: false,
      autoResize: true,
    }}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section id="hero">
            <Hero />
          </section>

          <section id="projects" className="py-4">
            <ProjectShowcase titlePositions={titlePositions} projects={projects} />
          </section>
        </main>
      </div>
    </SmoothScroll>
  );
}