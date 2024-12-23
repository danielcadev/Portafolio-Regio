"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
  } from "react-google-recaptcha-v3";
import { relativeBook, relativeBold } from "@/fonts"; // Importa las fuentes que vas a usar

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }).max(50),
  email: z.string().email({ message: "Introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  honeypot: z.string().optional(),
});

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    if (!executeRecaptcha) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    const token = await executeRecaptcha("submit");
    if (!token) {
      console.error("No se pudo obtener el token de reCAPTCHA");
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, token }),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`bg-black min-h-screen flex items-center justify-center text-white p-4 md:p-8 ${relativeBook.className}`}>
      <div className="max-w-2xl w-full">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-white ${relativeBold.className}`}>Contáctanos</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 md:p-10 rounded-xl shadow-2xl bg-neutral-900 border border-neutral-800">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300">Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} className="bg-neutral-800 text-white border-neutral-700 focus:border-blue-500 focus:ring-blue-500 placeholder-neutral-500" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" {...field} className="bg-neutral-800 text-white border-neutral-700 focus:border-blue-500 focus:ring-blue-500 placeholder-neutral-500" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300">Mensaje</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escribe tu mensaje aquí..." {...field} className="bg-neutral-800 text-white border-neutral-700 focus:border-blue-500 focus:ring-blue-500 resize-none placeholder-neutral-500" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            {/* Campo honeypot */}
            <input type="hidden" style={{ display: "none" }} {...form.register("honeypot")} />
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </Button>

            {isSuccess && (
              <p className="text-green-400 mt-4 text-center">Mensaje enviado con éxito!</p>
            )}
            {isError && (
              <p className="text-red-500 mt-4 text-center">
                Error al enviar el mensaje. Inténtalo de nuevo más tarde.
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}

function Contact() {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        language="es"
      >
        <ContactForm />
      </GoogleReCaptchaProvider>
    );
  }
  
  export default Contact;