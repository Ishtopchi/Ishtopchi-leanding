import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages = [
  { code: 'uz' as Language, name: "O'zbek", short: 'UZ' },
  { code: 'en' as Language, name: 'English', short: 'EN' },
  { code: 'ru' as Language, name: 'Русский', short: 'RU' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setIsOpen(false);
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2}/, '') || '';
    navigate(`/${newLang}${pathWithoutLang}`);
  };

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative" ref={wrapRef}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-line/15 bg-surface px-3.5 py-2 font-mono text-xs font-medium tracking-[0.12em] text-ink transition-colors duration-300 hover:border-accent/50 hover:text-accent"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Tilni tanlash"
        title="Tilni tanlash"
      >
        <span>{current?.short}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[168px] overflow-hidden rounded-2xl border border-line/12 bg-surface-2 p-1.5 shadow-2xl shadow-ink/10"
            role="listbox"
            aria-label="Tillar ro'yxati"
            id="language-menu"
          >
            {languages.map((l) => {
              const active = language === l.code;
              return (
                <li key={l.code} role="option" aria-selected={active}>
                  <button
                    onClick={() => handleLanguageChange(l.code)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 ${
                      active
                        ? 'bg-accent/10 text-accent'
                        : 'text-ink-2 hover:bg-ink/5 hover:text-ink'
                    }`}
                  >
                    <span className="text-sm font-medium" lang={l.code}>
                      {l.name}
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] opacity-60">
                      {l.short}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
