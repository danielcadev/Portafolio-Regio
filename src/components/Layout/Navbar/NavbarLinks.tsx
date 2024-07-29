"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/Sobre-Nosotros", label: "Sobre Nosotros" },
  { href: "/Proyectos", label: "Proyectos" },
  { href: "/Contacto", label: "Contactame", special: true }
];

interface NavbarLinksProps {
  onClick?: () => void;
  mobile?: boolean;
}

export default function NavbarLinks({ onClick, mobile = false }: NavbarLinksProps) {
  const pathname = usePathname();

  return (
    <div className={`flex ${mobile ? 'flex-col' : 'flex-row'} items-center space-x-4`}>
      {links.map(({ href, label, special }) => (
        <motion.div
          key={href}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={mobile ? 'w-full' : ''}
        >
          <Link
            href={href}
            onClick={onClick}
            className={`
              text-lg font-medium transition-all duration-200
              ${special 
                ? "bg-white text-black px-4 py-2 rounded-full hover:bg-opacity-90" 
                : pathname === href
                  ? "bg-white text-black px-3 py-2 rounded-md"
                  : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
              }
              ${mobile ? "block w-full text-center my-2" : "inline-block"}
            `}
          >
            {label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}