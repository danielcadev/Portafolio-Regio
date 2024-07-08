// NavbarLinks.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <>
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
      <Link
        href="/Contacto"
        className="bg-white text-black px-4 py-2 rounded-full text-lg font-medium"
      >
        Contactame
      </Link>
    </>
  );
}