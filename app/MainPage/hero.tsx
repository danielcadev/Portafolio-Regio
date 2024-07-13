"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".hero-container",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    gsap.to(".parallax-image", {
      y: -50,
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const socialLinks = [
    { href: "https://github.com/yourusername", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/yourusername/", icon: <FaLinkedin /> },
    { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video ref={videoRef} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="w-full h-full flex items-center justify-center p-4 sm:p-10 md:p-20 lg:p-24 overflow-hidden relative">
        <div className="hero-container flex flex-col justify-center items-center w-full p-4 sm:p-8 z-10 text-center lg:text-center">
          <div className="hero-text w-full space-y-4 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Hola, somos tres jóvenes</h1>
            <p className="text-sm sm:text-lg text-white">Nos apasiona crear experiencias web y aplicacionesfluidas y atractivas...</p>
            <div className="hero-icons flex justify-center space-x-2 sm:space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <div className="hero-buttons flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                Ver nuestros proyectos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
              >
                Leer más sobre nosotros
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
