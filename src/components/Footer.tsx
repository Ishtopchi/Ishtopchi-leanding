import { motion } from 'framer-motion';
import { Send, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';

  const socials = [
    { href: 'https://t.me/ishtopchi', label: 'Telegram', Icon: Send },
    { href: 'https://www.instagram.com/ishtopchi/', label: 'Instagram', Icon: Instagram },
    { href: 'https://www.linkedin.com/company/ishtopchi', label: 'LinkedIn', Icon: Linkedin },
  ];

  const pageLinks = [
    { to: `/${currentLang}`, label: t('home') },
    { to: `/${currentLang}/support`, label: t('support') },
    { to: `/${currentLang}/marketing`, label: t('partnership') },
    { to: `/${currentLang}/privacy`, label: t('privacyTitle') },
    { to: `/${currentLang}/data-security`, label: t('dataSecurityTitle') },
  ];

  const contacts = [
    { Icon: Mail, value: 'ishtopchi@gmail.com', href: 'mailto:ishtopchi@gmail.com' },
    { Icon: Phone, value: '+998 77 055 01 25', href: 'tel:+998770550125' },
    { Icon: MapPin, value: "Toshkent, O'zbekiston", href: undefined },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line/10 bg-surface" role="contentinfo">
      <div className="edge py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to={`/${currentLang}`} className="flex items-center gap-2.5" aria-label="IshTopchi">
              <img src="/logo.svg" alt="" className="h-10 w-10 object-contain" />
              <span className="font-display text-2xl font-bold lowercase tracking-tight text-ink">
                ishtopchi
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-2 text-pretty">
              {t('footerDescription')}
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ y: -3 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line/12 bg-surface-2 text-ink-2 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <nav className="md:col-span-3" aria-label={t('pages')}>
            <h3 className="eyebrow" id="pages-heading">{t('pages')}</h3>
            <ul className="mt-5 space-y-3">
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-ink-2 transition-colors duration-200 hover:text-ink"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow" id="contact-heading">{t('contact')}</h3>
            <ul className="mt-5 space-y-3">
              {contacts.map(({ Icon, value, href }) => (
                <li key={value}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-3 text-ink-2 transition-colors duration-200 hover:text-ink"
                    >
                      <Icon className="h-4 w-4 text-ink-3" />
                      {value}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-ink-2">
                      <Icon className="h-4 w-4 text-ink-3" />
                      {value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/10 pt-8 sm:flex-row">
          <p className="font-mono text-xs tracking-wide text-ink-3">
            © 2025 {t('appName')}. {t('allRightsReserved')}
          </p>
          <p className="font-mono text-xs tracking-wide text-ink-3">Toshkent · O'zbekiston</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
