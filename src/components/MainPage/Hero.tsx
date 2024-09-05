import Spline from '@splinetool/react-spline/next';
import { AutoScrollCarousel } from '@/components/ui/AutoScrollCarousel';
import { relativeMono10 } from '@/fonts';

const carouselItems = [
  { text: "💡" },
  { text: 'Innovación Digital' },
  { text: "🚀" },
  { text: 'Desarrollo Web Avanzado' },
  { text: "📱" },
  { text: 'Apps Móviles' },
  { text: "🤖" },
  { text: 'Automatización IoT' },
  { text: "🔧" },
  { text: 'Ingeniería Mecatrónica' },
  { text: "🎨" },
  { text: 'Diseño Gráfico' },
  { text: "📊" },
  { text: 'Marketing Digital' },
  { text: "🌐" },
  { text: 'Soluciones Tecnológicas' },
  { text: "🔒" },
  { text: 'Seguridad Informática' },
  { text: "⚡" },
  { text: 'Optimización de Procesos' },
  { text: "🌟" },
  { text: 'UX Excepcional' },
  { text: "🛠️" },
  { text: 'Desarrollo Ágil' }
];

export default function Hero() {
  return (
    <main className="relative">
      <div className="w-full h-screen">
        <Spline
          scene="https://prod.spline.design/OPORljqQ7K8Yhi0p/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="absolute left-0 right-0 bottom-10"> {/* Ajusta 'bottom-1/4' según necesites */}
        <div className={`w-full ${relativeMono10.className}`}>
          <AutoScrollCarousel
            items={carouselItems}
            speed={100}
            className="text-sm py-3 bg-black bg-opacity-50 text-white"
          />
        </div>
      </div>
    </main>
  );
}