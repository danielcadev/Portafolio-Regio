// data/pricing.ts
export const pricingPlans = [
    {
      name: "WordPress Premium",
      tagline: "Perfecto para pequeños negocios",
      description: "Sitio web profesional y optimizado con WordPress",
      price: {
        amount: "199",
        currency: "USD",
        prefix: "$"
      },
      features: [
        "Diseño personalizado",
        "Optimización SEO básica",
        "Responsive design",
        "Formularios de contacto",
        "Integración con redes sociales",
      ],
      highlight: false,
    },
    {
      name: "Next.js Empresarial",
      tagline: "La solución más elegida",
      description: "Desarrollo web avanzado con nuestro CMS personalizado",
      price: {
        amount: "999",
        currency: "USD",
        prefix: "$"
      },
      features: [
        "Desarrollo personalizado en Next.js",
        "CMS a medida",
        "Alto rendimiento garantizado",
        "SEO avanzado",
        "Panel de administración",
      ],
      highlight: true,
    },
    {
      name: "Soluciones Avanzadas",
      tagline: "Para proyectos especializados",
      description: "Servicios especializados y desarrollo a medida",
      price: {
        amount: "Personalizado",
        currency: "",
        prefix: ""
      },
      features: [
        "Desarrollo de apps móviles",
        "Migración de sistemas",
        "Automatización IoT",
        "Soluciones mecatrónicas",
        "Sistemas de control",
      ],
      highlight: false,
    }
  ];