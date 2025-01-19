"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/Sobre-Nosotros", label: "Sobre Nosotros" },
  { href: "/Servicios", label: "Servicios" },
  { href: "/Contacto", label: "Contactame" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const headerHeight = useTransform(scrollY, [0, 100], ["6rem", "4.5rem"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(229, 229, 229, 0)", "rgba(229, 229, 229, 0.98)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 10px 30px -10px rgba(0, 0, 0, 0.05)"]
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        boxShadow,
        height: headerHeight,
      }}
    >
      <nav className="max-w-[1120px] mx-auto h-full px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="text-2xl font-medium text-[#181717] hover:opacity-80 transition-all duration-300"
          >
            RegioSoft.
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-12"
        >
          {links.map(({ href, label }) => (
            <div key={href} className="relative px-6 py-3">
              {pathname === href ? (
                <span className="text-base text-[#181717] cursor-default relative">
                  {label}
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#181717]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                </span>
              ) : (
                <Link
                  href={href}
                  className="relative group block"
                >
                  <span className="relative z-10 text-base text-[#181717]/70 group-hover:text-[#181717] transition-colors duration-200">
                    {label}
                  </span>
                  <span className="absolute inset-0 -inset-x-6 rounded-full bg-[#181717]/5 opacity-0 transform scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                </Link>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#181717] p-2 focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[#E5E5E5]/98 backdrop-blur-lg"
      >
        <div className="px-4 py-2">
          {links.map(({ href, label }) => (
            <motion.div
              key={href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-base ${
                  pathname === href
                    ? "text-[#181717] font-medium"
                    : "text-[#181717]/70 hover:text-[#181717]"
                } transition-colors duration-200`}
              >
                {label}
              </Link>
              {pathname === href && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="h-[2px] bg-[#181717] mx-4"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}