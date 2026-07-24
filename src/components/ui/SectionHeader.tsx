import React from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  /** Genuine position in the page narrative, e.g. "01" */
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Shared section masthead: a mono index + eyebrow (the section's real place in
 * the page sequence) above a tight display title. Keeps every section on the
 * same typographic grid.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">{index}</span>
          <span className="h-px w-8 bg-line/25" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-5 text-4xl text-ink sm:text-5xl md:text-[3.25rem]">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-lg leading-relaxed text-ink-2 text-pretty ${
              centered ? 'mx-auto max-w-xl' : 'max-w-xl'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeader;
