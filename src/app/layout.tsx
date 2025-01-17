// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { dmSans } from '@/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className={`${dmSans.className} flex flex-col min-h-screen bg-[#F3F3F3]`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}