'use client'

import { useRef, useEffect, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CarouselItem {
  icon: ReactNode;
  text: string;
}

interface AutoScrollCarouselProps {
  items: CarouselItem[];
  className?: string;
  speed?: number;
}

export function AutoScrollCarousel({ 
  items, 
  className,
  speed = 50
}: AutoScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const containerElement = containerRef.current;
    if (!scrollElement || !containerElement) return;

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position += speed * 0.015;
      scrollElement.style.transform = `translateX(-${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    containerElement.addEventListener('mouseenter', handleMouseEnter);
    containerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      containerElement.removeEventListener('mouseenter', handleMouseEnter);
      containerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed, items]);

  return (
    <div 
      ref={containerRef}
      className={twMerge(
        'overflow-hidden ', // Quitamos el padding de aquí
        className // Ahora el className pasado tendrá prioridad
      )}
    >
      <div 
        ref={scrollRef} 
        className="inline-flex items-center gap-20 transition-transform"
        style={{ willChange: 'transform' }}
      >
        {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 md:gap-4 opacity-60 hover:opacity-100 transition-all duration-500"
          >
            <div className="text-2xl md:text-4xl text-[#181717]">{item.icon}</div>
            <span className="text-[#181717] text-base md:text-lg font-medium whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}