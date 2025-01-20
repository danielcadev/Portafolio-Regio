"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function LandingHero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    
    // Parallax y efectos de scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Variantes para animaciones
    const titleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Efectos de fondo mejorados */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-[1000px] h-[1000px]"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        y,
                        opacity
                    }}
                />
                <motion.div
                    className="hidden md:block absolute w-[1200px] h-[1200px] rounded-full"
                    animate={{
                        x: mousePosition.x - 600,
                        y: mousePosition.y - 600,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 25,
                        mass: 0.5,
                    }}
                    style={{
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        mixBlendMode: 'soft-light',
                    }}
                />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full max-w-[1120px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* Badge con animación */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Badge 
                            variant="outline" 
                            className="px-6 py-2 text-base bg-white/50 backdrop-blur-sm mb-16
                                     hover:bg-white/70 transition-all duration-300"
                        >
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-block"
                            >
                                Descubre RegioSoft →
                            </motion.span>
                        </Badge>
                    </motion.div>

                    {/* Título con animación por letra */}
                    <div className="mb-8">
                        <motion.h1 
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl md:text-[120px] leading-none font-medium"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="block text-[#181717]"
                            >
                                Innovación
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="block text-[#181717]"
                            >
                                Digital
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="block text-[#181717]/40"
                            >
                                para el Futuro
                            </motion.span>
                        </motion.h1>
                    </div>

                    {/* Descripción con fade in */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-lg md:text-2xl text-[#181717]/60 max-w-2xl mx-auto mb-16"
                    >
                        Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento empresarial
                    </motion.p>

                    {/* Botones con hover effect mejorado */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/Servicios">
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto md:px-8 md:py-6 bg-[#181717] text-white md:text-lg
                                             hover:bg-[#181717]/90 transition-all duration-300 shadow-lg
                                             hover:shadow-xl hover:shadow-black/20"
                                >
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        Iniciar Proyecto →
                                    </motion.span>
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/Sobre-Nosotros">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full md:w-auto md:px-8 md:py-6 border-[#181717]/10 md:text-lg
                                             text-[#181717] hover:bg-[#181717]/5 transition-all duration-300"
                                >
                                    Explorar Más
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Elementos decorativos con fade in */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="hidden md:flex absolute top-8 left-8 items-center gap-2"
                >
                    <div className="w-2 h-2 rounded-full bg-[#181717]/10" />
                    <span className="text-sm text-[#181717]/60">Est. 2018</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="hidden md:flex absolute top-8 right-8 items-center gap-2"
                >
                    <span className="text-sm text-[#181717]/60">Bogota, Colombia</span>
                    <div className="w-8 h-[2px] bg-[#181717]/10" />
                </motion.div>
            </div>
        </div>
    );
}