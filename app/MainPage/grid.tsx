"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4;
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark">
      <main className="w-full h-full flex items-center justify-center p-10 lg:p-24 overflow-hidden relative">
        <div className="hero-container grid grid-cols-4 grid-rows-4 gap-4 w-full p-8 z-10">
          <div className="hero-text col-span-2 row-span-2 space-y-8 bg-indigo-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(75,0,130,0.3)] p-4">
            <h1 className="text-5xl font-extrabold text-white">Descubre más sobre nosotros</h1>
            <p className="text-lg text-gray-300">Desarrollador apasionado por la tecnología y la innovación.</p>
          </div>
          <div className="info-box col-span-2 row-span-2 text-white p-4 bg-blue-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,255,0.3)] relative overflow-hidden">
            <Image src="/Grid/laptop.png" layout="fill" objectFit="cover" alt="Laptop" className="opacity-50" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <p className="text-lg font-semibold">Priorizo la colaboración con el cliente, fomentando una comunicación abierta</p>
            </div>
          </div>
          <div className="info-box col-span-1 row-span-2 text-white p-4 bg-purple-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(128,0,128,0.3)] relative overflow-hidden">
            <Image src="/clock.png" layout="fill" objectFit="cover" alt="Clock" className="opacity-50" />
            <p className="relative z-10">Soy muy flexible con las comunicaciones en diferentes zonas horarias</p>
          </div>
          {/* Video div movido a la derecha */}
          <div className="info-box col-span-1 row-span-2 text-white p-4 bg-blue-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,255,0.3)] relative overflow-hidden">
            <video 
              ref={videoRef} 
              src="/Grid/coding.mp4" 
              className="absolute inset-0 w-full h-full object-cover opacity-50" 
              autoPlay 
              muted 
              loop 
              playsInline 
            />
            <p className="relative z-10">Actualmente construyendo una librería de animación JS</p>
          </div>
          {/* Contenedor movido a la izquierda */}
          <div className="info-box col-span-2 row-span-1 text-white p-4 bg-purple-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(128,0,128,0.3)] relative overflow-hidden">
            <p className="relative z-10">Mi stack tecnológico: NextJS, NodeJS, ReactJS, Express, VueJS, NuxtJS, TypeScript, GraphQL</p>
          </div>
          <div className="info-box col-span-2 row-span-1 text-white p-4 bg-blue-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]">
            <p>Entusiasta de la tecnología con pasión por el desarrollo.</p>
          </div>
          <div className="contact-box col-span-4 row-span-1 text-white p-4 bg-indigo-800 bg-opacity-10 rounded-lg shadow-[0_0_8px_5px_rgba(75,0,130,0.3)]">
            <p>¿Quieres iniciar un proyecto juntos?</p>
            <button className="mt-4 px-6 py-3 text-lg font-bold bg-white text-indigo-700 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]">
              Copiar mi dirección de correo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}