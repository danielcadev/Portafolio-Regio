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
      <div className=" overflow-hidden"> {/* Ajusta la altura según necesites */}
        <Spline
          scene="https://prod.spline.design/OPORljqQ7K8Yhi0p/scene.splinecode"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        {/* Aquí puedes añadir texto o elementos superpuestos si lo deseas */}
        <h1 className="text-4xl font-bold text-white mb-4">Tu Mensaje Principal</h1>
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