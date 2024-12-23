import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Smartphone, ScrollText } from "lucide-react";
import { relativeBold, relativeMedium, relativeBook } from "@/fonts";
import { motion } from "framer-motion";

const ExperienciaAcordeon = () => {
  const itemVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Accordion type="single" collapsible className="mt-12 md:mt-16 w-full">
      <AccordionItem value="item-1" className="mb-4">
        <AccordionTrigger
          className={`text-white hover:text-blue-500 ${relativeBold.className} p-5 rounded-t-lg bg-black border border-slate-800`}
        >
          <Smartphone className="inline-block mr-3" size={24} />
          <span className="text-xl">Experiencia en Desarrollo Móvil</span>
        </AccordionTrigger>
        <AccordionContent
          className={`text-neutral-300 bg-black border border-slate-800 border-t-0 p-5 text-base ${relativeBook.className}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className="list-disc list-inside space-y-3">
              <li>
                Más de 5 años de experiencia en el desarrollo de aplicaciones
                móviles.
              </li>
              <li>Experto en React Native, Flutter y desarrollo nativo.</li>
              <li>Publicación de apps en App Store y Google Play.</li>
              <li>
                Conocimiento profundo de las guidelines de diseño de iOS y
                Android.
              </li>
              <li>
                Experiencia en integración con APIs RESTful y GraphQL.
              </li>
            </ul>
          </motion.div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="mb-4">
        <AccordionTrigger
          className={`text-white hover:text-blue-500 ${relativeBold.className} p-5 bg-black border border-slate-800`}
        >
          <Code className="inline-block mr-3" size={24} />
          <span className="text-xl">Experiencia en Desarrollo Web</span>
        </AccordionTrigger>
        <AccordionContent
          className={`text-neutral-300 bg-black border border-slate-800 border-t-0 p-5 text-base ${relativeBook.className}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className="list-disc list-inside space-y-3">
              <li>
                Dominio de tecnologías frontend como React, Next.js y Vue.js.
              </li>
              <li>
                Experiencia en construcción de APIs con Node.js, Python
                (Django/Flask) y Java (Spring Boot).
              </li>
              <li>
                Manejo de bases de datos SQL (PostgreSQL, MySQL) y NoSQL
                (MongoDB).
              </li>
              <li>
                Experiencia en despliegue en plataformas cloud como AWS, Google
                Cloud y Azure.
              </li>
              <li>
                Conocimientos sólidos de SEO, accesibilidad y optimización de
                rendimiento web.
              </li>
            </ul>
          </motion.div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className={`text-white hover:text-blue-500 ${relativeBold.className} p-5 bg-black border border-slate-800 rounded-b-lg`}
        >
          <ScrollText className="inline-block mr-3" size={24} />
          <span className="text-xl">Habilidades Destacadas</span>
        </AccordionTrigger>
        <AccordionContent
          className={`text-neutral-300 bg-black border border-slate-800 border-t-0 p-5 text-base ${relativeBook.className}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4
                  className={`font-semibold text-white ${relativeMedium.className}`}
                >
                  Lenguajes:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                </ul>
              </div>
              <div>
                <h4
                  className={`font-semibold text-white ${relativeMedium.className}`}
                >
                  Herramientas:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExperienciaAcordeon;