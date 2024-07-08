// pages/AboutUs.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

const AboutMain = dynamic(() => import('./AboutMain'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const AboutUs: React.FC = () => {
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainTitleRef.current && subTitleRef.current && descriptionRef.current && linksRef.current) {
      gsap.fromTo([mainTitleRef.current, subTitleRef.current, descriptionRef.current],
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(linksRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden flex flex-col items-center justify-center px-4">
      <div className="text-center z-20 max-w-3xl mt-16 md:mt-0">
        <h1 ref={mainTitleRef} className="text-4xl md:text-6xl font-bold mb-2">Sobre Nosotros</h1>
        <div ref={subTitleRef} className="text-xl md:text-2xl text-gray-300 mb-8">Innovación y Tecnología Unidas</div>
        <p ref={descriptionRef} className="text-base md:text-lg text-gray-200 mb-8">
          Somos un equipo dinámico de jóvenes profesionales apasionados por la tecnología. Combinamos experiencia en desarrollo web, aplicaciones móviles y automatización de hogares inteligentes para ofrecer soluciones tecnológicas integrales y de vanguardia.
        </p>
      </div>

      <div ref={linksRef} className="w-full max-w-5xl z-20 mb-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg mb-12">
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Nuestra Misión</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Visión</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Logros</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Proceso de Trabajo</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Clientes Satisfechos</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-sm text-gray-200">
          {[
            {
              title: "Desarrollo Web y Móvil",
              items: ["HTML, CSS, JavaScript", "React, Next.js, Vue.js", "iOS y Android nativo", "Flutter y React Native"]
            },
            {
              title: "Automatización Inteligente",
              items: ["Integración con Alexa", "Sistemas de control domótico", "IoT y dispositivos conectados", "Optimización energética"]
            },
            {
              title: "Innovación Constante",
              items: ["Investigación de nuevas tecnologías", "Soluciones personalizadas", "Mejora continua de procesos", "Enfoque en experiencia del usuario"]
            }
          ].map((section, index) => (
            <div key={index} className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <AboutMain />
    </div>
  );
};

export default AboutUs;
