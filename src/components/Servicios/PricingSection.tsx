"use client";

import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricing"; // Importamos los datos

export default function PricingSection() {
    return (
        <div className="w-full bg-[#E5E5E5] relative overflow-hidden py-32">
            {/* Gradient Backgrounds */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white to-transparent opacity-60 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-white to-transparent opacity-60 blur-3xl" />
            </div>

            <div className="max-w-[1120px] mx-auto px-4 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-[#181717]/60 text-sm tracking-wider uppercase px-4 py-2 border border-[#181717]/10 rounded-full mb-8"
                    >
                        Planes Flexibles
                    </motion.span>
                    <h2 className="text-[64px] text-[#181717] font-medium mb-8 leading-[1.1] tracking-tight">
                        Soluciones que se adaptan
                        <br />
                        <span className="text-[#181717]/50">a tu visión</span>
                    </h2>
                    <p className="text-[28px] text-[#181717]/70 max-w-3xl mx-auto leading-relaxed">
                        Selecciona el plan que mejor se ajuste a tu proyecto.
                        Todos incluyen consultoría personalizada.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className={`
                relative rounded-3xl p-8
                ${plan.highlight
                                    ? 'bg-[#181717] text-white shadow-xl'
                                    : 'bg-white text-[#181717] shadow-lg'
                                }
              `}
                        >
                            {plan.highlight && (
                                <motion.span
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2
                           bg-[#181717] text-white text-sm rounded-full border border-white/20"
                                >
                                    {plan.tagline}
                                </motion.span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-3xl font-medium mb-4">{plan.name}</h3>
                                <p className={`text-xl ${plan.highlight ? 'text-white/70' : 'text-[#181717]/70'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="text-4xl font-medium tracking-tight flex items-baseline">
                                    {plan.price.prefix && (
                                        <span className="text-3xl mr-1">{plan.price.prefix}</span>
                                    )}
                                    <span>{plan.price.amount}</span>
                                    {plan.price.currency && (
                                        <span className={`text-xl ml-2 ${plan.highlight ? 'text-white/70' : 'text-[#181717]/70'
                                            }`}>
                                            {plan.price.currency}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <motion.li
                                        key={feature}
                                        className="flex items-center text-lg"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg
                                            className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-[#181717]'
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className={plan.highlight ? 'text-white/70' : 'text-[#181717]/70'}>
                                            {feature}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                  w-full py-4 rounded-xl text-lg font-medium
                  ${plan.highlight
                                        ? 'bg-white text-[#181717] hover:bg-white/90'
                                        : 'bg-[#181717] text-white hover:bg-[#181717]/90'
                                    }
                  transition-colors duration-200
                `}
                            >
                                Contactar →
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <p className="text-[#181717]/60 text-2xl mb-8">
                        ¿Necesitas una solución específica?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-[#181717] text-white rounded-full text-xl font-medium"
                    >
                        Contacta con nosotros →
                    </motion.button>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute left-0 top-1/3 w-24 h-24 bg-gradient-to-r from-white to-transparent opacity-40 blur-2xl rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute right-0 bottom-1/3 w-32 h-32 bg-gradient-to-l from-white to-transparent opacity-40 blur-2xl rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
}