'use client'

import React, { useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface CarouselItem {
  text: string;
}

interface AutoScrollCarouselProps {
  items: CarouselItem[];
  className?: string;
  speed?: number; // Velocidad en píxeles por segundo
}

export const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({ 
  items, 
  className,
  speed = 50 // Valor predeterminado más alto para un movimiento más rápido
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const translateX = (progress * speed / 1000) % (scrollElement.scrollWidth / 2);
      
      scrollElement.style.transform = `translateX(-${translateX}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, items]);

  return (
    <div className={twMerge('overflow-hidden whitespace-nowrap', className)}>
      <div 
        ref={scrollRef} 
        className="inline-block"
        style={{ willChange: 'transform' }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="inline-block px-4">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};