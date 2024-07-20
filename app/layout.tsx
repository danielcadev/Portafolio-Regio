import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RegioSsoft - Soluciones Tecnológicas Innovadoras",
  description: "RegioSsoft ofrece servicios de desarrollo de software de vanguardia y consultoría tecnológica. Explora nuestras soluciones innovadoras para empresas y negocios.",
  keywords: "RegioSsoft, tecnología, desarrollo de software, consultoría IT, soluciones digitales, innovación",
  openGraph: {
    title: "RegioSsoft - Soluciones Tecnológicas Innovadoras",
    description: "Descubre soluciones de software y tecnología de vanguardia con RegioSsoft.",
    type: "website",
    url: "https://www.regiossoft.com", // Reemplaza con tu URL real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
