"use client"
import { ReactLenis, useLenis } from 'lenis/react'
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
  options?: {
    wrapper?: HTMLElement | Window;
    content?: HTMLElement;
    eventsTarget?: HTMLElement | Window;
    smoothWheel?: boolean;
    lerp?: number;
    duration?: number;
    // No pasamos `easing` directamente aquí
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    syncTouch?: boolean;
    syncTouchLerp?: number;
    touchInertiaMultiplier?: number;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    autoResize?: boolean;
    prevent?: boolean | ((node: Element) => boolean);
  }
}

function SmoothScroll({ children, options }: SmoothScrollProps) {
  const defaultOptions = {
    ...options,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Definimos `easing` dentro del componente
  };

  return (
    <ReactLenis root options={defaultOptions}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
