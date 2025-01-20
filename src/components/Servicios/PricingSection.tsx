// components/PricingSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import Link from 'next/link';
import { useRef } from "react";

export default function PricingSection() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      className="min-h-screen w-full bg-[#E5E5E5] relative overflow-hidden pt-32"
    >
      {/* Grid animado */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full grid grid-cols-[repeat(auto-fit,minmax(25px,1fr))] grid-rows-[repeat(auto-fit,minmax(25px,1fr))]"
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black/5" />
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 py-32 relative z-10"
        style={{ y }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm text-black/60 tracking-wider uppercase px-6 py-2 border border-black/10 rounded-full bg-white/10 backdrop-blur-sm mb-8"
          >
            Planes & Precios
          </motion.span>

          <h2 className="text-[clamp(4rem,20vw,12rem)] font-bold leading-none tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Precios
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              Flexibles
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-black/60 max-w-2xl mx-auto"
          >
            Soluciones digitales que se adaptan a tus necesidades
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`
                relative p-8 rounded-2xl backdrop-blur-sm
                ${plan.highlight ? 'bg-black text-white' : 'bg-white/80 text-black'}
              `}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className={`${plan.highlight ? 'text-white/70' : 'text-black/70'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="text-4xl font-bold">
                  {plan.price.prefix}{plan.price.amount}
                  <span className={`text-lg ml-2 ${plan.highlight ? 'text-white/70' : 'text-black/70'}`}>
                    {plan.price.currency}
                  </span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center text-sm ${
                        plan.highlight ? 'text-white/70' : 'text-black/70'
                      }`}
                    >
                      <span className="mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-4 rounded-xl text-base font-medium
                    ${plan.highlight 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                    }
                  `}
                >
                  Seleccionar Plan →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      {/* CTA Final */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mt-32"
>
  <p className="text-black/60 text-xl mb-6">
    ¿Buscas una solución personalizada?
  </p>
  <Link href="/Contacto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-12 py-6 bg-black text-white rounded-full text-xl font-medium"
    >
      Contactar →
    </motion.button>
  </Link>
</motion.div>
        </motion.div>
    </motion.section>
  );
}