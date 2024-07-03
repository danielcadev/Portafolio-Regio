"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setIsScrolled(isScrolled);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-200 mt-4 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          className={`text-lg font-medium transition-all duration-200 ${
            pathname === "/"
              ? "bg-white text-black px-3 py-2 rounded-md"
              : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
          }`}
        >
          ABOUT US
        </button>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className={`text-lg font-medium transition-all duration-200 ${
              pathname === "/contact"
                ? "bg-white text-black px-3 py-2 rounded-md"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/Sobre-Nosotros"
            className={`text-lg font-medium transition-all duration-200 ${
              pathname === "/our-work"
                ? "bg-white text-black px-3 py-2 rounded-md"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            }`}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/Proyectos"
            className={`text-lg font-medium transition-all duration-200 ${
              pathname === "/achievements"
                ? "bg-white text-black px-3 py-2 rounded-md"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            }`}
          >
            Proyectos
          </Link>
         
          <Link href="/Contacto" className="bg-white text-black px-4 py-2 rounded-full text-lg font-medium">
            Contactame
          </Link>
        </div>
      </div>
    </nav>
  );
}