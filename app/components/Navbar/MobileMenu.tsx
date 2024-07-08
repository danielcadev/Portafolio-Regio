import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar la visibilidad del menú

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/Sobre-Nosotros", label: "Sobre Nosotros" },
    { href: "/Proyectos", label: "Proyectos" },
    { href: "/Contacto", label: "Contactame" },
  ];

  const handleClose = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en el botón de cerrar
  };

  if (!isOpen) return null; // No renderizar el menú si está cerrado

  return (
    <div className="md:hidden fixed inset-0 flex flex-col items-start space-y-4 px-6 py-4 bg-black bg-opacity-90 z-50">
      <button 
        onClick={handleClose}
        className="self-end text-white text-2xl font-bold mb-4"
        style={{ zIndex: 51, position: 'relative' }} // Asegura que el botón tenga un z-index mayor que el menú y esté posicionado correctamente
      >
      </button>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-lg font-medium transition-all duration-200 w-full ${
            pathname === link.href
              ? "bg-white text-black px-4 py-2 rounded-md"
              : "text-white hover:bg-gray-700 px-4 py-2 rounded-md"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}