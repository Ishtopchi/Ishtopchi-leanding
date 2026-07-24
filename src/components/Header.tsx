import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActivePath = (path: string) => {
    if (path === `/${currentLang}`) {
      return location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`;
    }
    return location.pathname === path;
  };

  const navItems = [
    { to: `/${currentLang}`, label: t('home') },
    { to: `/${currentLang}/support`, label: t('support') },
    { to: `/${currentLang}/marketing`, label: t('partnership') },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ease-signal ${
          scrolled ? 'border-b border-line/10 bg-paper/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="edge flex h-16 items-center justify-between">
          {/* Wordmark */}
          <Link to={`/${currentLang}`} aria-label="IshTopchi — bosh sahifa" className="group flex items-center gap-2.5">
            <motion.img
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              src="/logo.svg"
              alt=""
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-xl font-bold lowercase tracking-tight text-ink">
              ishtopchi
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Asosiy navigatsiya">
            {navItems.map((item) => {
              const active = isActivePath(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? 'text-ink' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06] ring-1 ring-line/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="hidden items-center gap-2.5 md:flex">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line/15 bg-surface text-ink transition-colors hover:border-accent/50 hover:text-accent"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menyuni ochish/yopish"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line/10 bg-paper/95 backdrop-blur-xl md:hidden"
            role="navigation"
            aria-label="Mobil navigatsiya"
          >
            <div className="edge flex flex-col gap-1 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActivePath(item.to) ? 'page' : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActivePath(item.to)
                        ? 'bg-ink/[0.06] text-ink'
                        : 'text-ink-2 hover:bg-ink/5 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-line/10 px-4 pt-4">
                <span className="text-sm font-medium text-ink-2">{t('theme') || 'Theme'}</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
