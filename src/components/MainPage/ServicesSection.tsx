// components/CMSShowcase/CMSShowcase.tsx
'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CMSShowcase() {
  return (
    <section className="min-h-screen bg-[#E5E5E5] py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header con estilo minimalista */}
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="px-4 py-2 mb-8 text-base bg-white/50 backdrop-blur-sm"
          >
            Sistema de Gestión de Contenidos
          </Badge>
          <h2 className="text-[120px] leading-none font-medium text-[#181717] mb-8">
            Sistema CMS
            <br />
            <span className="text-[#181717]/40">que evoluciona</span>
          </h2>
          <p className="text-2xl text-[#181717]/60 max-w-2xl mx-auto">
            Gestiona tu contenido con total libertad y control
          </p>
        </motion.div>

        {/* Grid Principal */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Columna Izquierda */}
          <div className="col-span-8 space-y-8">
            <motion.div
              className="relative h-[400px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/IMG_Proyectos/4blog-1024x479.png"
                alt="CMS Dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-12 left-12">
                  <Badge className="mb-4 bg-white/20 text-white">Dashboard</Badge>
                  <h3 className="text-5xl font-medium text-white">
                    Panel de Control
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[300px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/IMG_Proyectos/blog2-1024x479.png"
                alt="Editor Visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-12 left-12">
                  <Badge className="mb-4 bg-white/20 text-white">Editor</Badge>
                  <h3 className="text-4xl font-medium text-white">
                    Editor Visual
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Stack */}
          <div className="col-span-4 space-y-6">
            {[
              {
                title: "Diseño Visual",
                description: "Editor intuitivo que te permite crear sin límites",
                badge: "Editor",
                gradient: "from-blue-500/10 to-purple-500/10"
              },
              {
                title: "Velocidad",
                description: "Optimizado para un rendimiento excepcional",
                badge: "Performance",
                gradient: "from-orange-500/10 to-pink-500/10"
              },
              {
                title: "Flexible",
                description: "Adaptado a las necesidades de tu negocio",
                badge: "Personalización",
                gradient: "from-green-500/10 to-teal-500/10"
              }
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className={`relative group p-8 bg-gradient-to-br ${feature.gradient} 
                  border-white/10 hover:border-white/20 transition-all duration-500`}
              >
                <Badge variant="outline" className="mb-6">
                  {feature.badge}
                </Badge>
                <h4 className="text-4xl font-medium text-[#181717] mb-4">
                  {feature.title}
                </h4>
                <p className="text-xl text-[#181717]/60">
                  {feature.description}
                </p>
              </Card>
            ))}

            <Button
              size="lg"
              className="w-full py-8 text-xl bg-[#181717] hover:bg-[#181717]/90"
            >
              Explorar Funciones →
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="relative h-[400px] rounded-3xl overflow-hidden bg-[#181717]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Badge
                variant="outline"
                className="mb-6 text-white/70"
              >
                Comienza Ahora
              </Badge>
              <h3 className="text-7xl font-medium text-white mb-8">
                El futuro de la web
              </h3>
              <Button
                size="lg"
                className="bg-white text-[#181717] hover:bg-white/90 px-8 py-2 rounded-full
          transition-all duration-300 text-base font-medium"
              >
                Solicitar Demo →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}