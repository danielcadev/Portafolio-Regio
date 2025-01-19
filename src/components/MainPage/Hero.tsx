// components/MainPage/Hero.tsx
import { AutoScrollCarousel } from '@/components/ui/AutoScrollCarousel';
import LandingHero from '@/components/MainPage/LandingHero';
import { 
  FaReact, 
  FaWordpress 
} from "react-icons/fa";
import { 
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandPrisma,
  TbBrandTailwind,
  TbBrandVercel
} from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";

const carouselItems = [
  { 
    icon: <TbBrandNextjs className="text-2xl" />,
    text: "Next.js"
  },
  { 
    icon: <FaReact className="text-2xl" />,
    text: "React"
  },
  { 
    icon: <TbBrandTypescript className="text-2xl" />,
    text: "TypeScript"
  },
  { 
    icon: <TbBrandTailwind className="text-2xl" />,
    text: "Tailwind CSS"
  },
  { 
    icon: <FaWordpress className="text-2xl" />,
    text: "WordPress"
  },
  { 
    icon: <BiLogoReact className="text-2xl" />,
    text: "React Native"
  },
  { 
    icon: <TbBrandPrisma className="text-2xl" />,
    text: "Prisma"
  },
  { 
    icon: <TbBrandVercel className="text-2xl" />,
    text: "Vercel"
  }
];

export default function Hero() {
  return (
    <div className="flex flex-col bg-[#E5E5E5]">
      <div className="flex-1">
        <LandingHero />
      </div>
      
      <div className="w-full">
        <AutoScrollCarousel
          items={carouselItems}
          speed={80}
          className="py-2 md:py-8"
        />
      </div>
    </div>
  );
}