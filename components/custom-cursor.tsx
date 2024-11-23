'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setVisible(true);
      });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    const handleElementHover = () => setHovered(true);
    const handleElementLeave = () => setHovered(false);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleElementHover);
        element.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  // Don't render anything until after client-side hydration
  if (!mounted || isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: clicked ? 0.8 : hovered ? 1.2 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        scale: { type: 'spring', damping: 20, stiffness: 300 },
        opacity: { duration: 0.2 },
      }}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      <div className="relative h-4 w-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-[2px]" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50" />
      </div>
    </motion.div>
  );
}