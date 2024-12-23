import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-slate-300 py-16 md:py-20 mt-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12 space-y-12 xl:space-y-0">
          <div className="space-y-6">
            <Card className="border-slate-800 bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  Regiossoft
                </CardTitle>
                <CardDescription className="text-slate-300 text-base md:text-lg">
                  Creamos soluciones digitales a tu medida.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-base md:text-lg">
                <p>
                  <a
                    href="mailto:info@regiossoft.com"
                    className="hover:text-white transition-colors"
                  >
                    info@regiossoft.com
                  </a>
                </p>
                <p className="mt-2">+57 320 123 4567</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-800 bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  Enlaces
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      className="hover:underline hover:text-white transition-colors text-base md:text-lg"
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:underline hover:text-white transition-colors text-base md:text-lg"
                    >
                      Sobre Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:underline hover:text-white transition-colors text-base md:text-lg"
                    >
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:underline hover:text-white transition-colors text-base md:text-lg"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-800 bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  Síguenos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/regiossoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Facebook className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/regiossoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Instagram className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/regiossoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Linkedin className="h-8 w-8" />
                  </a>
                </div>
              </CardContent>
              <CardFooter>
                <Badge
                  variant="outline"
                  className="text-slate-300 px-4 py-3 text-base md:text-lg border-slate-700"
                >
                  © {new Date().getFullYear()} Regiossoft
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-center text-sm md:text-base text-slate-400">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}