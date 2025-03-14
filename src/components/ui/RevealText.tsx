
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'right' | 'left' | 'down';
  once?: boolean;
}

const RevealText = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay before triggering the animation
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once]);

  // Define the initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'right':
        return 'translateX(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'down':
        return 'translateY(-30px)';
      default:
        return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
        transition: `opacity 0.8s ease-out, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealText;
