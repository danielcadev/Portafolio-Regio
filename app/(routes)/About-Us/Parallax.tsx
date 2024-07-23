import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallax = parallaxRef.current;
    const sky = skyRef.current;
    const earth = earthRef.current;

    if (parallax && sky && earth) {
      gsap.to(sky, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: parallax,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      
      gsap.to(earth, {
        yPercent: 15, // Cambiado a un valor positivo para mover hacia abajo
        ease: "none",
        scrollTrigger: {
          trigger: parallax,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={parallaxRef} className="relative min-h-screen overflow-hidden">
      <div ref={skyRef} className="absolute inset-0 z-0 h-full w-full">
        <Image src="/Parallax/skyup.png" alt="Sky background" layout="fill" objectFit="cover" priority />
      </div>
      <div ref={earthRef} className="absolute top-0 w-full h-1/2 z-20"> {/* Cambiado de bottom-0 a top-0 */}
        <Image src="/Parallax/earth2.png" alt="Earth background" layout="fill" objectFit="cover" priority />
      </div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default Parallax;