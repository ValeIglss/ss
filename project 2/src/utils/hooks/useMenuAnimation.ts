import { useState, useEffect } from 'react';

export function useMenuAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [shouldRender]);

  const startAnimation = () => {
    setShouldRender(true);
  };

  const endAnimation = () => {
    setShouldRender(false);
  };

  return {
    isAnimating,
    shouldRender,
    startAnimation,
    endAnimation
  };
}