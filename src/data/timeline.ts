// data/timeline.ts
import { TimelineEntry } from '@/types/timeline';

export const timelineData: TimelineEntry[] = [
  {
    title: "Fundación de Regiossoft",
    content: {
      text: `En 2018, nace Regiossoft con la misión de crear soluciones digitales innovadoras, especializándonos en el desarrollo de páginas web a la medida de cada cliente.`,
      highlights: ["Regiossoft", "páginas web"]
    }
  },
  {
    title: "Parte del Grupo Castrillón S.A.S.",
    content: {
      text: `Regiossoft se enorgullece de formar parte del grupo empresarial Castrillón S.A.S. desde 2020, una alianza que fortalece nuestra capacidad para ofrecer soluciones digitales integrales y de vanguardia a nuestros clientes.`,
      highlights: ["Regiossoft", "Castrillón S.A.S."],
      image: {
        src: "/castrillon-logo.png",
        alt: "Castrillón S.A.S.",
        width: 500,
        height: 500
      }
    }
  },
  {
    title: "2024 - Proyectos Destacados",
    content: {
      text: `Este año, en Regiossoft, hemos desarrollado con éxito plataformas web como Region Colombia y Mitiquete, dos proyectos que demuestran nuestro compromiso con la innovación y la satisfacción del cliente.`,
      highlights: ["Regiossoft", "plataformas web"],
      images: [
        {
          src: "/regioncolombia.png",
          alt: "Region Colombia",
          width: 500,
          height: 500,
          url: "https://regioncolombia.com"
        },
        {
          src: "/mitiquete.png",
          alt: "Mitiquete",
          width: 500,
          height: 500,
          url: "https://mitiquete.net"
        },
        {
          src: "/regiossoft-logo.png",
          alt: "Regiossoft",
          width: 500,
          height: 500
        }
      ],
      additionalText: `Somos un equipo apasionado por la tecnología y comprometido con la excelencia. Nos enfocamos en brindar soluciones digitales innovadoras y personalizadas que impulsen el crecimiento de nuestros clientes.`
    }
  },
  {
    title: "Experiencia en Desarrollo Web y Móvil",
    content: {
      text: `Desde nuestros inicios, en Regiossoft nos hemos especializado en el desarrollo de páginas web y aplicaciones móviles, creando soluciones a la medida de las necesidades de cada cliente. Contamos con un equipo altamente calificado para desarrollar, mantener y actualizar proyectos web, adaptándonos a las últimas tendencias y tecnologías del mercado.`,
      highlights: ["Regiossoft", "desarrollo de páginas web y aplicaciones móviles"],
      image: {
        src: "/web-and-mobile-development.png",
        alt: "Desarrollo Web y Móvil",
        width: 500,
        height: 500
      }
    }
  }
];