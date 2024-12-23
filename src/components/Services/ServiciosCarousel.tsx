"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BadgeCheck, Code, Smartphone } from "lucide-react";
import { relativeBold, relativeMedium, relativeBook } from "@/fonts";
import Autoplay from "embla-carousel-autoplay";

interface ServiciosCarouselProps {
  // Puedes definir props si lo necesitas, por ejemplo, una lista de servicios
}

const ServiciosCarousel: React.FC<ServiciosCarouselProps> = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    if (carouselApi) {
      setCurrentService(carouselApi.selectedScrollSnap());
      carouselApi.on("select", () => {
        setCurrentService(carouselApi.selectedScrollSnap());
      });
    }
  }, [carouselApi]);

  const services = [
    {
      title: "Desarrollo de Aplicaciones Móviles",
      icon: <Smartphone className="inline-block mr-2 text-blue-400" size={30} />,
      description:
        "Creación de aplicaciones móviles nativas e híbridas para iOS y Android.",
      details: [
        "Diseño de UI/UX",
        "Desarrollo nativo (Swift, Kotlin)",
        "Desarrollo híbrido (React Native, Flutter)",
        "Integración con APIs",
        "Pruebas y QA",
      ],
    },
    {
      title: "Desarrollo Web",
      icon: <Code className="inline-block mr-2 text-blue-400" size={30} />,
      description:
        "Desarrollo de sitios web modernos, responsivos y de alto rendimiento.",
      details: [
        "Desarrollo Frontend (React, Next.js, Vue.js)",
        "Desarrollo Backend (Node.js, Python, Java)",
        "Bases de datos (SQL, NoSQL)",
        "Despliegue en la nube (AWS, Google Cloud, Azure)",
        "SEO y optimización de rendimiento",
      ],
    },
    {
      title: "Consultoría Tecnológica",
      icon: <BadgeCheck className="inline-block mr-2 text-blue-400" size={30} />,
      description:
        "Asesoramiento en la toma de decisiones sobre tecnología y arquitectura de software.",
      details: [
        "Análisis de requerimientos",
        "Diseño de arquitectura de software",
        "Selección de tecnologías",
        "Evaluación de código y seguridad",
        "Estrategias de transformación digital",
      ],
    },
  ];

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="w-full max-w-6xl">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true, align: "center" }}
          className="w-full"
          setApi={setCarouselApi}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="basis-full">
                <motion.div
                  className="p-6 md:p-10 rounded-lg bg-black border border-slate-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="mr-3">{service.icon}</span>
                    <h3
                      className={`text-xl md:text-2xl font-bold text-white ${relativeBold.className}`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={`text-neutral-300 mb-6 ${relativeBook.className}`}
                  >
                    {service.description}
                  </p>
                  <ul
                    className={`list-disc list-inside space-y-2 ${relativeBook.className}`}
                  >
                    {service.details.map((detail) => (
                      <li key={detail} className="text-neutral-400">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Flechas de navegación personalizadas */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-8 z-10">
            <CarouselPrevious className="bg-black text-white hover:bg-blue-500 w-10 h-10" />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-8 z-10">
            <CarouselNext className="bg-black text-white hover:bg-blue-500 w-10 h-10" />
          </div>
        </Carousel>

        {/* Indicador de servicio actual */}
        <div className="flex justify-center mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentService ? "bg-blue-500" : "bg-neutral-500"
              }`}
              onClick={() => {
                if (carouselApi) {
                  carouselApi.scrollTo(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiciosCarousel;
