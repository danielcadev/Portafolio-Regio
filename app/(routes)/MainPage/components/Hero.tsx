"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/yourusername", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/yourusername/", icon: <FaLinkedin /> },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Video autoplay failed:", error));
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video2.mp4" type="video/mp4" />
      </video>
      
      <main className="relative z-10 flex items-center justify-center w-full h-full p-4 sm:p-10">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Hola, somos tres jóvenes
          </h1>
          <p className="text-sm sm:text-lg text-white max-w-2xl mx-auto">
            Nos apasiona crear experiencias web y aplicaciones fluidas y atractivas...
          </p>
          
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white"
                whileHover={{ scale: 1.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="/proyectos" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Ver nuestros proyectos
              </motion.button>
            </Link>
            <Link href="/sobre-nosotros" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 text-lg font-bold text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Leer más sobre nosotros
              </motion.button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}