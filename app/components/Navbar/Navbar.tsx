"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 mt-4 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl">
          <div className="hidden md:flex items-center space-x-4 mx-auto">
            <NavbarLinks />
          </div>
          <button
            className="md:hidden text-white text-2xl"
            style={{ zIndex: 51 }} // Asegura que el botón de menú tenga un z-index alto
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Icono de menú (hamburguesa) */}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </nav>
  );
}
