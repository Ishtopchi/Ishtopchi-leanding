import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t, language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';

  const seoData = {
    uz: {
      title: "IshTopchi - Ish topishning eng oson yo'li | O'zbekistondagi #1 ish qidiruv ilovasi | 50,000+ foydalanuvchi",
      description: "⭐ IshTopchi - O'zbekistonda ish topishning eng oson yo'li! 🚀 50,000+ foydalanuvchi, 10,000+ vakansiya. Ish beruvchilar bilan to'g'ridan-to'g'ri chat. Bepul yuklab oling! Toshkent, Samarqand, Buxoro va boshqa shaharlarda ish toping.",
      keywords: "ish topish, vakansiya, o'zbekiston, ish qidirish, ish beruvchi, resume, cv, ishga joylashish, mobil ilova, toshkent, samarqand, buxoro, andijon, farg'ona, namangan, qarshi, nukus, urganch, guliston, jizzax, navoiy, termiz, ish qidiruv ilovasi, ishga joylashish, karera, mutaxassis, ishchi, xodim, kompaniya, startap, freelance, part time, full time, maosh, oylik, ish o'rni, vakansiya e'lonlari, hr, kadrlar, ishga qabul, suhbat, rezyume, portfolio, malaka, tajriba, bilim, ko'nikma, karyera rivojlanishi, professional, biznes, savdo, marketing, IT, dasturlash, dizayn, muhandislik, moliya, buxgalteriya, yuridik, tibbiyot, ta'lim, qurilish, transport, logistika, turizm, restoran, xizmat ko'rsatish"
    },
    en: {
      title: "IshTopchi - The easiest way to find a job | #1 job search app in Uzbekistan | 50,000+ users",
      description: "⭐ IshTopchi - The easiest way to find a job in Uzbekistan! 🚀 50,000+ users, 10,000+ vacancies. Direct chat with employers. Download for free! Find jobs in Tashkent, Samarkand, Bukhara and other cities.",
      keywords: "job search, vacancy, uzbekistan, employment, employer, resume, cv, career, mobile app, tashkent, samarkand, bukhara, andijan, fergana, namangan, karshi, nukus, urgench, gulistan, jizzax, navoi, termez, job search app, employment, career, specialist, worker, employee, company, startup, freelance, part time, full time, salary, wage, job position, job listings, hr, human resources, recruitment, interview, resume, portfolio, qualification, experience, knowledge, skills, career development, professional, business, sales, marketing, IT, programming, design, engineering, finance, accounting, legal, medical, education, construction, transport, logistics, tourism, restaurant, service"
    },
    ru: {
      title: "IshTopchi - Самый простой способ найти работу | #1 приложение для поиска работы в Узбекистане | 50,000+ пользователей",
      description: "⭐ IshTopchi - Самый простой способ найти работу в Узбекистане! 🚀 50,000+ пользователей, 10,000+ вакансий. Прямой чат с работодателями. Скачайте бесплатно! Найдите работу в Ташкенте, Самарканде, Бухаре и других городах.",
      keywords: "поиск работы, вакансия, узбекистан, трудоустройство, работодатель, резюме, карьера, мобильное приложение, ташкент, самарканд, бухара, андижан, фергана, наманган, карши, нукус, ургенч, гулистан, джизак, навои, термез, приложение для поиска работы, трудоустройство, карьера, специалист, работник, сотрудник, компания, стартап, фриланс, частичная занятость, полная занятость, зарплата, оклад, рабочее место, объявления о работе, hr, кадры, рекрутинг, собеседование, резюме, портфолио, квалификация, опыт, знания, навыки, развитие карьеры, профессиональный, бизнес, продажи, маркетинг, IT, программирование, дизайн, инженерия, финансы, бухгалтерия, юридический, медицина, образование, строительство, транспорт, логистика, туризм, ресторан, сервис"
    }
  };

  const alternateLanguages = {
    'uz': `https://ishtopchi.uz/uz`,
    'en': `https://ishtopchi.uz/en`,
    'ru': `https://ishtopchi.uz/ru`,
    'x-default': `https://ishtopchi.uz/uz`
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData[language].title,
    "description": seoData[language].description,
    "url": `https://ishtopchi.uz/${currentLang}`,
    "inLanguage": language,
    "isPartOf": {
      "@type": "WebSite",
      "name": "IshTopchi",
      "url": "https://ishtopchi.uz"
    },
    "about": {
      "@type": "MobileApplication",
      "name": "IshTopchi",
      "applicationCategory": "BusinessApplication"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "IshTopchi",
      "url": "https://ishtopchi.uz"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bosh sahifa",
          "item": `https://ishtopchi.uz/${currentLang}`
        }
      ]
    }
  };

  return (
    <div id="main-content">
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={`https://ishtopchi.uz/${currentLang}`}
        structuredData={structuredData}
        alternateLanguages={alternateLanguages}
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default HomePage;