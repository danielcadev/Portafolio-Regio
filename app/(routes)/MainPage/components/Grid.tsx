"use client";
import Image from 'next/image';
import React, { useRef, useEffect, ReactNode } from 'react';

interface InfoBoxProps {
  children: ReactNode;
  bgColor: string;
  shadowColor: string;
  image?: string;
  video?: React.RefObject<HTMLVideoElement>;
}

const InfoBox: React.FC<InfoBoxProps> = ({ children, bgColor, shadowColor, image, video }) => (
  <div className={`info-box text-white p-4 ${bgColor} bg-opacity-10 rounded-lg ${shadowColor} relative overflow-hidden`}>
    {image && <Image src={image} layout="fill" objectFit="cover" alt="Background" className="opacity-50" />}
    {video && (
      <video 
        ref={video} 
        src="/Grid/coding.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
        autoPlay 
        muted 
        loop 
        playsInline 
      />
    )}
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Grid(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4;
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-dark">
      <main className="w-full min-h-full flex items-center justify-center p-4 sm:p-8 lg:p-24 overflow-hidden relative">
        <div className="hero-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 w-full p-4 sm:p-8 z-10">
          <InfoBox bgColor="bg-indigo-900" shadowColor="shadow-[0_0_10px_5px_rgba(75,0,130,0.3)]">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Descubre más sobre nosotros</h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-4">Desarrollador apasionado por la tecnología y la innovación.</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-blue-900" shadowColor="shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]" image="/Grid/laptop.png">
            <p className="text-sm sm:text-lg font-semibold">Priorizo la colaboración con el cliente, fomentando una comunicación abierta</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-purple-900" shadowColor="shadow-[0_0_10px_5px_rgba(128,0,128,0.3)]" image="/Grid/clock.png">
            <p className="text-sm sm:text-lg">Soy muy flexible con las comunicaciones en diferentes zonas horarias</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-blue-900" shadowColor="shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]" video={videoRef}>
            <p className="text-sm sm:text-lg">Actualmente construyendo una librería de animación JS</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-purple-900" shadowColor="shadow-[0_0_10px_5px_rgba(128,0,128,0.3)]">
            <p className="text-sm sm:text-lg">Mi stack tecnológico: NextJS, NodeJS, ReactJS, Express, VueJS, NuxtJS, TypeScript, GraphQL</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-blue-900" shadowColor="shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]">
            <p className="text-sm sm:text-lg">Entusiasta de la tecnología con pasión por el desarrollo.</p>
          </InfoBox>
          
          <div className="contact-box col-span-1 sm:col-span-2 lg:col-span-4 row-span-1 text-white p-4 bg-indigo-800 bg-opacity-10 rounded-lg shadow-[0_0_8px_5px_rgba(75,0,130,0.3)]">
            <p className="text-sm sm:text-lg">¿Quieres iniciar un proyecto juntos?</p>
            <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold bg-white text-indigo-700 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]">
              Copiar mi dirección de correo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}