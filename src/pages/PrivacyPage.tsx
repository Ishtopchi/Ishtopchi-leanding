import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/ui/Reveal';
import PageIntro from '../components/ui/PageIntro';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPage = () => {
  const { t, language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';

  const seoData = {
    uz: {
      title: "Maxfiylik siyosati - IshTopchi | Ma'lumotlar himoyasi va xavfsizlik",
      description: "IshTopchi maxfiylik siyosati. Shaxsiy ma'lumotlar himoyasi, ma'lumotlar xavfsizligi va foydalanuvchi huquqlari haqida batafsil ma'lumot.",
      keywords: "maxfiylik siyosati, ma'lumotlar himoyasi, xavfsizlik, shaxsiy ma'lumotlar, GDPR, foydalanuvchi huquqlari"
    },
    en: {
      title: "Privacy Policy - IshTopchi | Data protection and security",
      description: "IshTopchi privacy policy. Detailed information about personal data protection, data security and user rights.",
      keywords: "privacy policy, data protection, security, personal data, GDPR, user rights"
    },
    ru: {
      title: "Политика конфиденциальности - IshTopchi | Защита данных и безопасность",
      description: "Политика конфиденциальности IshTopchi. Подробная информация о защите персональных данных, безопасности данных и правах пользователей.",
      keywords: "политика конфиденциальности, защита данных, безопасность, персональные данные, GDPR, права пользователей"
    }
  };

  const sections = [
    { icon: Shield, title: t('dataProtection'), content: t('dataProtectionDesc') },
    { icon: Eye, title: t('dataUsage'), content: t('dataUsageDesc') },
    { icon: Lock, title: t('security'), content: t('securityDesc') },
    { icon: Users, title: t('thirdParties'), content: t('thirdPartiesDesc') },
  ];

  const purposes = [t('purpose1'), t('purpose2'), t('purpose3'), t('purpose4')];

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={`https://ishtopchi.uz/${currentLang}/privacy`}
      />
      <Header />
      <main className="min-h-screen pt-32">
        <div className="edge pb-24">
          <PageIntro
            backTo={`/${currentLang}`}
            backLabel={t('backToHome')}
            eyebrow={t('privacy')}
            title={t('privacyTitle')}
            description={t('privacyDescription')}
          />

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <article className="card-line group h-full p-8 hover:-translate-y-1 hover:border-accent/50">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line/12 bg-surface-2 text-ink transition-all duration-500 ease-signal group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="display mt-6 text-xl text-ink">{section.title}</h2>
                    <p className="mt-3 leading-relaxed text-ink-2 text-pretty">{section.content}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-4" delay={0.1}>
            <div className="card-line p-8 sm:p-10">
              <h2 className="display text-2xl text-ink">{t('generalInfo')}</h2>
              <p className="mt-5 leading-relaxed text-ink-2 text-pretty">{t('privacyContent1')}</p>
              <p className="mt-4 leading-relaxed text-ink-2 text-pretty">{t('privacyContent2')}</p>
              <ul className="mt-6 space-y-3">
                {purposes.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-ink-2 text-pretty">{t('moreDetails')}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 font-mono text-xs tracking-wide text-ink-3">{t('lastUpdated')}</p>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
