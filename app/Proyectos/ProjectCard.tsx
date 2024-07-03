"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { NextPage } from 'next';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Mi Tiquete",
    description: "Web hecha para dar servicio de turismo a cualquier parte del mundo.",
    imageUrl: "/IMG_Proyectos/MiTiquete.jpg",
    link: "/projects/mi-tiquete",
  },
  {
    title: "Conociendo Colombia",
    description: "Web de turismo enfocada en el público extranjero para conocer Colombia.",
    imageUrl: "/IMG_Proyectos/ConociendoColombia.jpg",
    link: "/projects/conociendo-colombia",
  },
  {
    title: "Multitienda Emprende",
    description: "Web creada para ofrecer productos de alta calidad.",
    imageUrl: "/IMG_Proyectos/MultitiendaEmprende.jpg",
    link: "/projects/multitienda-emprende",
  },
];

const ProjectCard: NextPage = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-20 relative bg-black">
      <div className="absolute inset-0" ref={mountRef} />
      <div className="container mx-auto z-10 relative">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-white">
          Proyectos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-container perspective">
              <Link href={project.link}>
                <div className="relative bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 hover:scale-105">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-md"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="text-right">
                      <span className="inline-block bg-[#3a4e7a] text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-opacity-80">
                        Ver Proyecto
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
