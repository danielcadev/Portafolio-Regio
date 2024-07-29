// hooks/useModel3DResponsive.ts
import { useState, useEffect } from 'react';

export function useModel3DResponsive() {
  const [isCompactView, setIsCompactView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsCompactView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isCompactView;
}