'use client';

import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/yourusername/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://twitter.com/yourusername', icon: <FaTwitter />, label: 'Twitter' },
];

const services = [
  {
    title: 'Desarrollo Web y Móvil',
    description: 'Creamos aplicaciones web y móviles utilizando las últimas tecnologías.',
    icon: '💻',
  },
  {
    title: 'Automatización Inteligente',
    description: 'Implementamos soluciones IoT y optimizamos procesos con ingeniería mecatrónica.',
    icon: '🤖',
  },
  {
    title: 'Diseño y Marketing',
    description: 'Ofrecemos servicios de diseño gráfico y estrategias de marketing digital.',
    icon: '🎨',
  },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const playVideo = () => {
        videoElement.play().catch(error => {
          console.error('Video autoplay failed:', error);
          // Implementa una lógica alternativa aquí si es necesario
        });
      };

      if (isVideoLoaded) {
        playVideo();
      } else {
        videoElement.addEventListener('loadeddata', playVideo);
      }

      return () => {
        videoElement.removeEventListener('loadeddata', playVideo);
      };
    }
  }, [isVideoLoaded]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/video-poster.jpg"
          layout="fill"
          objectFit="cover"
          alt="Video poster"
          priority
        />
        <motion.video 
          ref={videoRef} 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ opacity }}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/video2.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </motion.video>
      </div>
      
      {!isVideoLoaded && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
          Cargando video...
        </div>
      )}
      
      <main className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
            Regiossoft
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Somos cuatro jóvenes apasionados por crear soluciones digitales innovadoras y atractivas.
          </p>
          
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl sm:text-4xl text-white hover:text-indigo-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/proyectos" passHref>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full transition-all duration-300 ease-in-out shadow-lg"
              >
                Explorar Proyectos
              </motion.button>
            </Link>
            <Link href="/sobre-nosotros" passHref>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 ease-in-out shadow-lg"
              >
                Conoce al Equipo
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}