// app/contact/page.tsx
import { Metadata } from "next";
import { ContactWrapper } from "@/components/Contact/ContactWrapper";

export const metadata: Metadata = {
  title: 'Contacto | Regiossoft',
  description: 'Contáctanos para discutir tu próximo proyecto. Estamos aquí para ayudarte a hacer realidad tus ideas.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#E5E5E5]">
      <ContactWrapper />
    </main>
  );
}