import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { AceternityDock } from '@/components/Layout/AceternityDock';
import { relativeBook } from '@/fonts';

export const metadata: Metadata = {
  // ... (Tu metadata, exactamente como en la respuesta anterior)
  metadataBase: new URL('https://www.regiossoft.com'),
  title: {
    default: 'RegioSsoft - Soluciones Tecnológicas Innovadoras',
    template: '%s | RegioSsoft',
  },
  description: '...',
  keywords: [
    'RegioSsoft',
    // ... más palabras clave
  ],
  // ... resto de tu metadata
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-relativeBook flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AceternityDock />
      </body>
    </html>
  );
}