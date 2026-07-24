import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Travel distance on the y axis (px) */
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'span' | 'section';
  once?: boolean;
}

/**
 * Unified scroll-reveal: a quiet fade + rise + micro-blur, on the signal easing.
 * Replaces the scattered spring/scale reveals so the whole site breathes as one.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 18,
  className = '',
  as = 'div',
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y, filter: 'blur(6px)' }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
