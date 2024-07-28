'use client';

import Image from 'next/image';
import { useRef, useEffect, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface InfoBoxProps {
  children: ReactNode;
  bgColor: string;
  shadowColor: string;
  image?: string;
  video?: React.RefObject<HTMLVideoElement>;
  className?: string;
}

function InfoBox({ children, bgColor, shadowColor, image, video, className = '' }: InfoBoxProps) {
  return (
    <motion.div 
      className={`info-box text-white p-8 ${bgColor} bg-opacity-60 rounded-xl ${shadowColor} relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {image && <Image src={image} layout="fill" objectFit="cover" alt="Background" className="opacity-20" />}
      {video && (
        <video 
          ref={video} 
          src="/Grid/coding.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
          autoPlay 
          muted 
          loop 
          playsInline 
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Grid() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4;
    }
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('daniel.ca.pe207@gmail.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      <main className="w-full min-h-full flex items-center justify-center p-8 lg:p-16 overflow-hidden relative">
        <motion.div 
          className="hero-container grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InfoBox bgColor="bg-indigo-700" shadowColor="shadow-[0_0_20px_25px_rgba(79,70,229,0.2)]" className="col-span-full">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Innovación en Acción</h1>
            <p className="text-xl">Transformando ideas en soluciones tecnológicas de vanguardia.</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-blue-700" shadowColor="shadow-[0_0_20px_5px_rgba(37,99,235,0.2)]" image="/Grid/laptop.png">
            <h2 className="text-2xl font-bold mb-4">Nuestro Enfoque</h2>
            <p className="text-lg">Combinamos creatividad y experiencia técnica para desarrollar soluciones innovadoras que impulsan el éxito de nuestros clientes.</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-purple-700" shadowColor="shadow-[0_0_20px_5px_rgba(147,51,234,0.2)]" image="/Grid/clock.png">
            <h2 className="text-2xl font-bold mb-4">Tecnologías Clave</h2>
            <p className="text-lg">Utilizamos las últimas tecnologías en desarrollo web, móvil y automatización para crear productos robustos y escalables.</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-blue-700" shadowColor="shadow-[0_0_20px_5px_rgba(37,99,235,0.2)]" video={videoRef}>
            <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-lg">Un grupo diverso de expertos apasionados por la tecnología, el diseño y la innovación, trabajando juntos para superar desafíos.</p>
          </InfoBox>
          
          <InfoBox bgColor="bg-purple-700" shadowColor="shadow-[0_0_20px_5px_rgba(147,51,234,0.2)]">
            <h2 className="text-2xl font-bold mb-4">Visión de Futuro</h2>
            <p className="text-lg">Estamos comprometidos con el aprendizaje continuo y la adopción de nuevas tecnologías para mantenernos a la vanguardia de la industria.</p>
          </InfoBox>
          
          <motion.div 
            className="contact-box col-span-full text-white p-8 bg-indigo-700 bg-opacity-80 rounded-xl shadow-[0_0_20px_5px_rgba(79,70,229,0.2)]"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl lg:text-3xl mb-6">¿Listo para innovar con nosotros?</p>
            <button 
              onClick={copyEmail}
              className="px-8 py-4 text-xl lg:text-2xl font-bold bg-white text-indigo-700 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              {copySuccess ? 'Correo copiado!' : 'Contacta con nuestro equipo'}
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}