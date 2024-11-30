import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../utils/hooks/useIntersectionObserver';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionTransition({ children, className = '', delay = 0 }: SectionTransitionProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transform: isVisible ? 'none' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}