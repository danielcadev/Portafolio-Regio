// app/components/Navbar.tsx
"use client"

import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-0 items-center flex ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <NavbarLinks />
          </div>
          <button
            className="md:hidden text-white text-2xl left-0 top-0 absolute p-6  "
            onClick={toggleMobileMenu}
            aria-label="Abrir menú móvil"
          >
            ☰
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </nav>
  );
}