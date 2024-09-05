import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '../src/components/Layout/SmoothScroll';
import { Navbar } from '../src/components/Layout/Navbar';
import Footer from '../src/components/Layout/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import  { AceternityDock}  from '@/components/Layout/AceternityDock';
import { 
  relativeBold, 
  relativeBook, 
  relativeMedium, 
  relativeMono10 
} from '@/fonts';  // Ajusta la ruta según la ubicación de tu archivo fonts.ts

export const metadata: Metadata = {
  title: 'RegioSsoft - Soluciones Tecnológicas Innovadoras',
  description: 'RegioSsoft ofrece servicios de desarrollo de software de vanguardia y consultoría tecnológica. Explora nuestras soluciones innovadoras para empresas y negocios.',
  keywords: 'RegioSsoft, tecnología, desarrollo de software, consultoría IT, soluciones digitales, innovación',
  openGraph: {
    title: 'RegioSsoft - Soluciones Tecnológicas Innovadoras',
    description: 'Descubre soluciones de software y tecnología de vanguardia con RegioSsoft.',
    type: 'website',
    url: 'https://www.regiossoft.com', // Reemplaza con tu URL real
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`
      ${relativeBold.variable} 
      ${relativeBook.variable} 
      ${relativeMedium.variable} 
      ${relativeMono10.variable}
    `}>
      <body>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <SpeedInsights />
        <AceternityDock />
      </body>
    </html>
  );
}