import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-8">
        <ContactForm />
      </div>
    </div>
  );
}