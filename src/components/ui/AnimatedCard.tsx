import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  glareEffect?: boolean;
  hoverScale?: boolean;
}

const AnimatedCard = ({
  className,
  children,
  glareEffect = true,
  hoverScale = true,
}: AnimatedCardProps) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Calculate the position of the mouse relative to the card
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate the rotation based on the mouse position
    // Keep rotation subtle for a premium feel
    const rotateY = ((x / width) - 0.5) * 5; // Max 5 degrees
    const rotateX = ((y / height) - 0.5) * -5; // Max 5 degrees
    
    // Update the card's transform
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    });
    
    // Update the glare effect if enabled
    if (glareEffect) {
      // Calculate glare position based on mouse position
      const percentX = (x / width) * 100;
      const percentY = (y / height) * 100;
      
      setGlareStyle({
        background: `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    // Reset card transform and glare on mouse leave
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
    });
    setGlareStyle({});
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden',
        hoverScale && 'transition-transform duration-300 hover:scale-[1.02]',
        className
      )}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      {glareEffect && isHovering && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={glareStyle}
        />
      )}
    </div>
  );
};

export default AnimatedCard;
