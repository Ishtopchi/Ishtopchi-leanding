import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AccentUnderlineProps {
  className?: string;
  delay?: number;
}

/**
 * A hand-struck accent stroke that draws itself once in view — the signature
 * mark under a hero/section keyword. Not a flat rule: it has a slight rise.
 */
const AccentUnderline: React.FC<AccentUnderlineProps> = ({ className = '', delay = 0.4 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <svg
      ref={ref}
      className={`pointer-events-none absolute left-0 right-0 -bottom-2 w-full ${className}`}
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 8C58 3 120 3 160 6C200 9 260 7 298 4"
        stroke="rgb(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
};

export default AccentUnderline;
