// components/Contact/ContactForm.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactForm() {
  const { form, isLoading, isSuccess, isError, onSubmit } = useContactForm();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-20 left-0 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-rose-100/40 to-orange-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-blue-100/40 to-green-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm text-[#181717]/60 tracking-wider uppercase px-4 py-2 border border-[#181717]/10 rounded-full bg-white/50 backdrop-blur-sm">
              Contacto
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-6xl md:text-7xl font-medium tracking-tight text-[#181717]">
              Hablemos de tu
              <span className="block mt-2 text-[#181717]/50">próximo proyecto</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-white/80 p-8 md:p-12 rounded-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#181717]/70 text-lg">Nombre</FormLabel>
                        <FormControl>
                          <motion.div 
                            whileHover={{ y: -2 }} 
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              placeholder="Tu nombre"
                              {...field}
                              className="h-14 text-lg bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-[#181717]/20 placeholder:text-[#181717]/30"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#181717]/70 text-lg">Email</FormLabel>
                        <FormControl>
                          <motion.div 
                            whileHover={{ y: -2 }} 
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              placeholder="tu@email.com"
                              {...field}
                              className="h-14 text-lg bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-[#181717]/20 placeholder:text-[#181717]/30"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#181717]/70 text-lg">Mensaje</FormLabel>
                      <FormControl>
                        <motion.div 
                          whileHover={{ y: -2 }} 
                          transition={{ duration: 0.2 }}
                        >
                          <Textarea
                            placeholder="Cuéntanos sobre tu proyecto..."
                            {...field}
                            className="min-h-[200px] text-lg bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-[#181717]/20 placeholder:text-[#181717]/30 resize-none"
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <Button
                    type="submit"
                    className="relative w-full bg-[#181717] hover:bg-[#181717]/90 text-white text-lg font-medium h-14 rounded-xl transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        Enviar mensaje
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    )}
                  </Button>
                </motion.div>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-100 rounded-xl"
                  >
                    <p className="text-green-600 text-lg text-center">
                      ¡Mensaje enviado con éxito! Te contactaremos pronto.
                    </p>
                  </motion.div>
                )}
                
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-100 rounded-xl"
                  >
                    <p className="text-red-500 text-lg text-center">
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </p>
                  </motion.div>
                )}
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}