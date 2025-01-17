"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/Sobre-Nosotros", label: "Sobre Nosotros" },
  { href: "/Servicios", label: "Servicios" },
  { href: "/Contacto", label: "Contactame" }
];

export default function Navbar() {
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

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-12"
        >
          {links.map(({ href, label }) => (
            <div key={href} className="relative px-6 py-3"> {/* Aumentado el padding */}
              {pathname === href ? (
                // Página activa
                <span className="text-base text-[#181717] cursor-default relative">
                  {label}
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#181717]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                </span>
              ) : (
                // Links no activos con hover grande
                <Link
                  href={href}
                  className="relative group block"
                >
                  <span className="relative z-10 text-base text-[#181717]/70 group-hover:text-[#181717] transition-colors duration-200">
                    {label}
                  </span>
                  
                  {/* Hover effect más grande */}
                  <span className="absolute inset-0 -inset-x-6 rounded-full bg-[#181717]/5 opacity-0 transform scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                </Link>
              )}
            </div>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
}