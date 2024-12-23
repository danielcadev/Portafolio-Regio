import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { relativeBook } from "@/fonts";

export default function TimelineDemo() {
  const data = [
    {
      title: "Fundación de Regiossoft",
      content: (
        <div>
          <p
            className={`text-white text-xs md:text-sm font-normal mb-8 ${relativeBook.className}`}
          >
            En 2018, nace{" "}
            <strong className="text-white">Regiossoft</strong> con la misión de
            crear soluciones digitales innovadoras, especializándonos en el
            desarrollo de{" "}
            <strong className="text-white">páginas web</strong> a la medida de
            cada cliente.
          </p>
        </div>
      ),
    },
    {
      title: "Parte del Grupo Castrillón S.A.S.",
      content: (
        <div>
          <p
            className={`text-white text-xs md:text-sm font-normal mb-8 ${relativeBook.className}`}
          >
            <strong className="text-white">Regiossoft</strong> se enorgullece
            de formar parte del grupo empresarial{" "}
            <strong className="text-white">Castrillón S.A.S.</strong> desde
            2020, una alianza que fortalece nuestra capacidad para ofrecer
            soluciones digitales integrales y de vanguardia a nuestros
            clientes.
          </p>
          <Image
            src="/castrillon-logo.png"
            alt="Castrillón S.A.S."
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "2024 - Proyectos Destacados",
      content: (
        <div>
          <p
            className={`text-white text-xs md:text-sm font-normal mb-8 ${relativeBook.className}`}
          >
            Este año, en <strong className="text-white">Regiossoft</strong>,
            hemos desarrollado con éxito{" "}
            <strong className="text-white">plataformas web</strong> como Region
            Colombia y Mitiquete, dos proyectos que demuestran nuestro
            compromiso con la innovación y la satisfacción del cliente.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Region Colombia */}
            <a
              href="https://regioncolombia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/regioncolombia.png"
                alt="Region Colombia"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            {/* Mitiquete */}
            <a
              href="https://mitiquete.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/mitiquete.png"
                alt="Mitiquete"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            {/* Logo de Regiossoft */}
            <Image
              src="/regiossoft-logo.png"
              alt="Regiossoft"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* Espacio vacío para mantener la cuadrícula */}
            <div className="hidden md:block"></div>
          </div>
          <p
            className={`text-white text-xs md:text-sm font-normal mt-8 ${relativeBook.className}`}
          >
            Somos un equipo apasionado por la tecnología y comprometido con la
            excelencia. Nos enfocamos en brindar soluciones digitales
            innovadoras y personalizadas que impulsen el crecimiento de
            nuestros clientes.
          </p>
        </div>
      ),
    },
    {
      title: "Experiencia en Desarrollo Web y Móvil",
      content: (
        <div>
          <p
            className={`text-white text-xs md:text-sm font-normal mb-8 ${relativeBook.className}`}
          >
            Desde nuestros inicios, en{" "}
            <strong className="text-white">Regiossoft</strong> nos hemos
            especializado en el{" "}
            <strong className="text-white">
              desarrollo de páginas web y aplicaciones móviles
            </strong>
            , creando soluciones a la medida de las necesidades de cada
            cliente. Contamos con un equipo altamente calificado para
            desarrollar, mantener y actualizar proyectos web, adaptándonos a las
            últimas tendencias y tecnologías del mercado.
          </p>
          {/* Imagen relacionada con el desarrollo web y móvil */}
          <Image
            src="/web-and-mobile-development.png" // Reemplaza con una imagen adecuada que muestre desarrollo web y móvil
            alt="Desarrollo Web y Móvil"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
  ];

  return (
    <div className={`w-full ${relativeBook.className}`}>
      <Timeline data={data} />
    </div>
  );
}