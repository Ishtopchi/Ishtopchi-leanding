import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useLanguage } from '../../contexts/LanguageContext';

const APP_STORE_URL = 'https://apps.apple.com/uz/app/ishtopchi/id6751149012';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=torex.top.ishtopchi';

const AppleIcon = () => (
  <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

interface StoreButtonsProps {
  /** onPaper = default page; onInk = placed on a dark/ink band */
  tone?: 'onPaper' | 'onInk';
  className?: string;
}

/**
 * The App Store + Google Play pair. Single source of truth (used in the hero and
 * the download band). App Store is the solid primary, Play the hairline secondary.
 */
const StoreButtons: React.FC<StoreButtonsProps> = ({ tone = 'onPaper', className = '' }) => {
  const { t } = useLanguage();

  // onInk uses fixed colors because it always sits on the permanently-dark CTA
  // panel, independent of the page's light/dark theme.
  const primary =
    tone === 'onInk'
      ? 'bg-[#ECEAE1] text-[#0B1220] hover:bg-white'
      : 'bg-ink text-paper hover:bg-accent hover:text-accent-contrast';
  const secondary =
    tone === 'onInk'
      ? 'border-white/25 text-[#ECEAE1] hover:border-white/60'
      : 'border-line/20 text-ink hover:border-accent hover:text-accent';

  const store = (
    href: string,
    label: string,
    caption: string,
    name: string,
    Icon: React.FC,
    variant: 'primary' | 'secondary',
  ) => (
    <MagneticButton
      onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
      whileTap={{ scale: 0.97 }}
      aria-label={label}
      className={`group relative flex items-center gap-3.5 rounded-full px-6 py-3.5 transition-colors duration-500 ease-signal ${
        variant === 'primary' ? primary : `border ${secondary}`
      }`}
    >
      <Icon />
      <span className="text-left leading-tight">
        <span className="block font-mono text-[0.62rem] uppercase tracking-[0.18em] opacity-70">
          {caption}
        </span>
        <span className="block font-display text-base font-semibold">{name}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </MagneticButton>
  );

  return (
    <div className={`flex flex-col gap-3.5 sm:flex-row ${className}`}>
      {store(APP_STORE_URL, `${t('downloadFrom')} App Store`, t('downloadFrom'), t('appStore'), AppleIcon, 'primary')}
      {store(PLAY_STORE_URL, `${t('downloadFrom')} Google Play`, t('downloadFrom'), t('googlePlay'), PlayIcon, 'secondary')}
    </div>
  );
};

export default StoreButtons;
