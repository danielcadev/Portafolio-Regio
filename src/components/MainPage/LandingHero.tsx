"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LandingHero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    return (
        <div className="relative h-full overflow-hidden">
            {/* Efectos de fondo */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(circle at 50% 50%, 
                        rgba(255,255,255,0.4) 0%, 
                        transparent 70%)
                    `,
                    filter: 'blur(60px)',
                }}
            />

            <motion.div
                className="absolute w-[1000px] h-[1000px] rounded-full pointer-events-none z-10"
                animate={{
                    x: mousePosition.x - 500,
                    y: mousePosition.y - 500,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 25,
                    mass: 0.5,
                }}
                style={{
                    background: `
                        radial-gradient(circle at center, 
                        rgba(255,255,255,0.5) 0%, 
                        rgba(255,255,255,0.3) 20%,
                        rgba(255,255,255,0.2) 40%,
                        transparent 80%)
                    `,
                    filter: 'blur(40px)',
                    mixBlendMode: 'soft-light',
                }}
            />

            {/* Contenido principal */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center pt-32 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-[1120px]"
                >
                    <Badge 
                        variant="outline" 
                        className="px-6 py-2 text-base bg-white/50 backdrop-blur-sm mb-16"
                    >
                        Descubre RegioSoft →
                    </Badge>

                    <h1 className="text-[120px] leading-none font-medium mb-8"> {/* Título más grande */}
                        <span className="text-[#181717]">Innovación</span>
                        <br />
                        <span className="text-[#181717]">Digital</span>
                        <br />
                        <span className="text-[#181717]/40">para el Futuro</span>
                    </h1>

                    <p className="text-2xl text-[#181717]/60 max-w-2xl mx-auto mb-16">
                        Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento empresarial
                    </p>

                    <div className="flex gap-6 justify-center">
                        <Button
                            size="lg"
                            className="px-8 py-6 bg-[#181717] text-white text-lg hover:bg-[#181717]/90"
                        >
                            Iniciar Proyecto →
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 border-[#181717]/10 text-lg text-[#181717] hover:bg-[#181717]/5"
                        >
                            Explorar Más
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-8 left-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#181717]/10" />
                <span className="text-sm text-[#181717]/60">Est. 2018</span>
            </div>

            <div className="absolute top-8 right-8 flex items-center gap-2">
                <span className="text-sm text-[#181717]/60">Bogota, Colombia</span>
                <div className="w-8 h-[2px] bg-[#181717]/10" />
            </div>
        </div>
    );
}
