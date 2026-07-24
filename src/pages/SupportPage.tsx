import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, Plus } from 'lucide-react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/ui/Reveal';
import PageIntro from '../components/ui/PageIntro';
import { useLanguage } from '../contexts/LanguageContext';

const SupportPage = () => {
  const { t, language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';
  const [open, setOpen] = useState<number | null>(0);

  const seoData = {
    uz: {
      title: "Yordam markazi - IshTopchi | 24/7 qo'llab-quvvatlash xizmati | FAQ va onlayn chat",
      description: "🆘 IshTopchi yordam markazi - 24/7 qo'llab-quvvatlash! Onlayn chat, elektron pochta va telefon orqali yordam. Ko'p beriladigan savollar va javoblar. Tezkor yordam olish uchun bizga murojaat qiling!",
      keywords: "yordam, qo'llab-quvvatlash, FAQ, chat, email, telefon, ishtopchi yordam, onlayn yordam, texnik yordam, foydalanuvchi qo'llanmasi, maslahat, muammo yechish, savol javob, 24/7 yordam, tezkor yordam, mijozlar xizmati, qo'ng'iroq markazi, elektron pochta yordam, chat yordam, yordam markazi, qo'llab-quvvatlash xizmati"
    },
    en: {
      title: "Help Center - IshTopchi | 24/7 support service | FAQ and online chat",
      description: "🆘 IshTopchi help center - 24/7 support! Online chat, email and phone support. Frequently asked questions and answers. Contact us for quick help!",
      keywords: "help, support, FAQ, chat, email, phone, ishtopchi support, online help, technical support, user guide, advice, problem solving, question answer, 24/7 help, quick help, customer service, call center, email support, chat support, help center, support service"
    },
    ru: {
      title: "Центр поддержки - IshTopchi | Служба поддержки 24/7 | FAQ и онлайн чат",
      description: "🆘 Центр поддержки IshTopchi - поддержка 24/7! Онлайн чат, поддержка по электронной почте и телефону. Часто задаваемые вопросы и ответы. Обращайтесь к нам за быстрой помощью!",
      keywords: "помощь, поддержка, FAQ, чат, email, телефон, поддержка ishtopchi, онлайн помощь, техническая поддержка, руководство пользователя, совет, решение проблем, вопрос ответ, помощь 24/7, быстрая помощь, служба клиентов, колл-центр, поддержка по email, поддержка в чате, центр помощи, служба поддержки"
    }
  };

  const alternateLanguages = {
    'uz': `https://ishtopchi.uz/uz/support`,
    'en': `https://ishtopchi.uz/en/support`,
    'ru': `https://ishtopchi.uz/ru/support`,
    'x-default': `https://ishtopchi.uz/uz/support`
  };

  const faqs = [
    { question: t('faq1Q'), answer: t('faq1A') },
    { question: t('faq2Q'), answer: t('faq2A') },
    { question: t('faq3Q'), answer: t('faq3A') },
    { question: t('faq4Q'), answer: t('faq4A') },
  ];

  const channels = [
    { icon: MessageCircle, title: t('onlineChat'), desc: t('onlineChatDesc'), href: undefined as string | undefined },
    { icon: Mail, title: t('email'), desc: 'ishtopchi@gmail.com', href: 'mailto:ishtopchi@gmail.com' },
    { icon: Phone, title: t('phoneSupport'), desc: '+998 77 055 01 25', href: 'tel:+998770550125' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData[language].title,
    "description": seoData[language].description,
    "url": `https://ishtopchi.uz/${currentLang}/support`,
    "inLanguage": language,
    "isPartOf": { "@type": "WebSite", "name": "IshTopchi", "url": "https://ishtopchi.uz" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": `https://ishtopchi.uz/${currentLang}` },
        { "@type": "ListItem", "position": 2, "name": "Yordam", "item": `https://ishtopchi.uz/${currentLang}/support` }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  };

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={`https://ishtopchi.uz/${currentLang}/support`}
        structuredData={structuredData}
        alternateLanguages={alternateLanguages}
      />
      <Header />
      <main className="min-h-screen pt-32">
        <div className="edge pb-24">
          <PageIntro
            backTo={`/${currentLang}`}
            backLabel={t('backToHome')}
            eyebrow={t('support')}
            title={t('supportTitle')}
            description={t('supportDescription')}
          />

          {/* Channels */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {channels.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line/12 bg-surface-2 text-ink transition-all duration-500 ease-signal group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="display mt-6 text-lg text-ink">{c.title}</h2>
                  <p className="mt-2 text-ink-2">{c.desc}</p>
                </>
              );
              return (
                <Reveal key={i} delay={i * 0.08}>
                  {c.href ? (
                    <a href={c.href} className="card-line group block h-full p-7 hover:-translate-y-1 hover:border-accent/50">
                      {inner}
                    </a>
                  ) : (
                    <div className="card-line group h-full p-7 transition-transform duration-500 hover:-translate-y-1 hover:border-accent/50">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* FAQ accordion */}
          <div className="mt-16">
            <Reveal>
              <h2 className="eyebrow">{t('faqTitle')}</h2>
            </Reveal>
            <div className="mt-6 divide-y divide-line/10 border-y border-line/10">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 0.05}>
                    <div>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="display text-lg text-ink sm:text-xl">{faq.question}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isOpen ? 'border-accent bg-accent text-accent-contrast' : 'border-line/15 text-ink-2'
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-6 leading-relaxed text-ink-2 text-pretty">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
