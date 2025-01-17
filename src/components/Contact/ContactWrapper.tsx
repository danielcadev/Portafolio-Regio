// components/Contact/ContactWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ContactForm } from "./ContactForm";

export function ContactWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        language="es"
      >
        <ContactForm />
      </GoogleReCaptchaProvider>
    </motion.div>
  );
}