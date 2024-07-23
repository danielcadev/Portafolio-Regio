"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/Sobre-Nosotros", label: "Sobre Nosotros" },
  { href: "/Proyectos", label: "Proyectos" },
  { href: "/Contacto", label: "Contactame", special: true }
];

interface NavbarLinksProps {
  onClick?: () => void;
}

export default function NavbarLinks({ onClick }: NavbarLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label, special }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={`
            text-lg font-medium transition-all duration-200
            ${special 
              ? "bg-white text-black px-4 py-2 rounded-full" 
              : pathname === href
                ? "bg-white text-black px-3 py-2 rounded-md"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            }
          `}
        >
          {label}
        </Link>
      ))}
    </>
  );
}