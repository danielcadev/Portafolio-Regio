// app/servicios/page.tsx
"use client";

import HeroServicios from "@/components/Servicios/HeroServicios";
import PricingSection from "@/components/Servicios/PricingSection";

export default function Servicios() {
  return (
    <main className="bg-[#E5E5E5] min-h-screen">
      <HeroServicios />
      <PricingSection />
    </main>
  );
}