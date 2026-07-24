import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Target, Handshake, Phone, X, Check } from 'lucide-react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/ui/Reveal';
import PageIntro from '../components/ui/PageIntro';
import MagneticButton from '../components/ui/MagneticButton';
import { useLanguage } from '../contexts/LanguageContext';

const MarketingPage = () => {
  const { t, language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const seoData = {
    uz: {
      title: "Biznes hamkorligi - IshTopchi | Kompaniyangiz uchun eng yaxshi mutaxassislar",
      description: "IshTopchi bilan hamkorlik qiling. Minglab faol foydalanuvchilar, yuqori konversiya, aniq maqsadlash. Kompaniyangiz uchun eng yaxshi talantlarni toping.",
      keywords: "biznes hamkorligi, ish beruvchilar, vakansiya joylash, HR, kadrlash, kompaniya, mutaxassis topish"
    },
    en: {
      title: "Business Partnership - IshTopchi | Find the best specialists for your company",
      description: "Partner with IshTopchi. Thousands of active users, high conversion, precise targeting. Find the best talents for your company.",
      keywords: "business partnership, employers, job posting, HR, recruitment, company, specialist search"
    },
    ru: {
      title: "Бизнес-партнерство - IshTopchi | Найдите лучших специалистов для вашей компании",
      description: "Сотрудничайте с IshTopchi. Тысячи активных пользователей, высокая конверсия, точное таргетирование. Найдите лучшие таланты для своей компании.",
      keywords: "бизнес-партнерство, работодатели, размещение вакансий, HR, рекрутинг, компания, поиск специалистов"
    }
  };

  const benefits = [
    { icon: Users, title: t('wideAudience'), description: t('wideAudienceDesc') },
    { icon: TrendingUp, title: t('highConversion'), description: t('highConversionDesc') },
    { icon: Target, title: t('preciseTargeting'), description: t('preciseTargetingDesc') },
  ];

  const employerList = [t('freeJobPosting'), t('directChatWithCandidates'), t('flexibleFilters'), t('analyticsReports')];
  const premiumList = [t('promoteListings'), t('customDesign'), t('extendedAnalytics'), t('personalSupport')];

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={`https://ishtopchi.uz/${currentLang}/marketing`}
      />
      <Header />
      <main className="min-h-screen pt-32">
        <div className="edge pb-24">
          <PageIntro
            backTo={`/${currentLang}`}
            backLabel={t('backToHome')}
            eyebrow={t('partnership')}
            title={t('marketingTitle')}
            description={t('marketingDescription')}
            align="center"
          />

          {/* Benefits */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <article className="card-line group h-full p-8 hover:-translate-y-1.5 hover:border-accent/50">
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line/12 bg-surface-2 text-ink transition-all duration-500 ease-signal group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast group-hover:-rotate-6">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-xs text-ink-3">{`0${i + 1}`}</span>
                    </div>
                    <h2 className="display mt-7 text-xl text-ink">{b.title}</h2>
                    <p className="mt-3 leading-relaxed text-ink-2 text-pretty">{b.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Partnership CTA */}
          <Reveal className="mt-4">
            <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0B1220] px-6 py-16 text-center sm:px-16">
              <div className="dark pointer-events-none absolute inset-0" aria-hidden="true">
                <div
                  className="absolute inset-0 bg-grid opacity-60"
                  style={{
                    maskImage: 'radial-gradient(90% 90% at 50% 0%, #000, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(90% 90% at 50% 0%, #000, transparent 70%)',
                  }}
                />
                <div className="absolute -top-16 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-[#6C7CFF]/25 blur-[120px] animate-aurora" />
              </div>
              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ECEAE1] text-[#0B1220]">
                  <Handshake className="h-7 w-7" />
                </span>
                <h2 className="display mt-8 text-3xl text-[#ECEAE1] sm:text-5xl text-balance">{t('startPartnership')}</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#ECEAE1]/70 text-pretty">{t('partnershipDesc')}</p>
                <MagneticButton
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsContactDialogOpen(true)}
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#ECEAE1] px-8 py-3.5 font-display font-semibold text-[#0B1220] transition-colors duration-300 hover:bg-white"
                >
                  {t('contactUs')}
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          {/* Two lists */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {[
              { title: t('forEmployers'), items: employerList },
              { title: t('premiumServices'), items: premiumList },
            ].map((col, ci) => (
              <Reveal key={ci} delay={ci * 0.1}>
                <div>
                  <h3 className="display text-2xl text-ink">{col.title}</h3>
                  <ul className="mt-6 divide-y divide-line/10 border-y border-line/10">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="group flex items-center gap-4 py-4 transition-transform duration-400 hover:translate-x-1">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line/12 text-ink-3 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-ink-2 group-hover:text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Contact dialog */}
      <AnimatePresence>
        {isContactDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-md"
            onClick={() => setIsContactDialogOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="w-full max-w-md rounded-[24px] border border-line/12 bg-surface-2 p-8 shadow-2xl shadow-ink/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <h3 className="display text-2xl text-ink">{t('contactUs')}</h3>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsContactDialogOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line/12 text-ink-2 transition-colors hover:border-accent hover:text-accent"
                  aria-label="Yopish"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="mt-8 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-contrast">
                  <Phone className="h-6 w-6" />
                </span>
                <p className="mt-5 text-ink-2">Bizning mutaxassislarimiz bilan bog'laning</p>
                <div className="mt-5 rounded-2xl border border-line/10 bg-surface p-5">
                  <div className="display text-2xl text-ink">+998 77 055 01 25</div>
                  <div className="mt-1 font-mono text-xs tracking-wide text-ink-3">Ish kunlari: 9:00 - 18:00</div>
                </div>
              </div>

              <div className="mt-7 flex gap-3">
                <MagneticButton
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    window.open('tel:+998770550125', '_self');
                    setIsContactDialogOpen(false);
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-display font-semibold text-paper transition-colors duration-300 hover:bg-accent hover:text-accent-contrast"
                >
                  <Phone className="h-4 w-4" />
                  <span>Qo'ng'roq qilish</span>
                </MagneticButton>
                <button
                  onClick={() => setIsContactDialogOpen(false)}
                  className="flex-1 rounded-full border border-line/15 px-5 py-3 font-display font-semibold text-ink-2 transition-colors duration-300 hover:border-line/30 hover:text-ink"
                >
                  Bekor qilish
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketingPage;
