import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

interface PageIntroProps {
  backTo: string;
  backLabel: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  align?: 'left' | 'center';
}

/** Shared masthead for the inner pages: back link + eyebrow + display title. */
const PageIntro: React.FC<PageIntroProps> = ({
  backTo,
  backLabel,
  eyebrow,
  title,
  description,
  icon,
  align = 'left',
}) => {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center' : ''}>
      <Reveal>
        <Link
          to={backTo}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-3 transition-colors duration-200 hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {backLabel}
        </Link>
      </Reveal>

      {icon && (
        <Reveal delay={0.05}>
          <motion.div
            whileHover={{ rotate: -6 }}
            className={`mt-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-contrast ${
              centered ? 'mx-auto' : ''
            }`}
          >
            {icon}
          </motion.div>
        </Reveal>
      )}

      <Reveal delay={0.08}>
        <div className="mt-6 flex items-center gap-3" style={centered ? { justifyContent: 'center' } : undefined}>
          <span className="h-px w-8 bg-accent" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <h1 className="display mt-5 text-4xl text-ink sm:text-6xl text-balance">{title}</h1>
      </Reveal>

      {description && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 text-lg leading-relaxed text-ink-2 text-pretty ${
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default PageIntro;
