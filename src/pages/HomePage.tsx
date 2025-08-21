import React from 'react';
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

  const seoData = {
    uz: {
      title: "IshTopchi - Ish topishning eng oson yo'li | O'zbekistondagi #1 ish qidiruv ilovasi",
      description: "IshTopchi - O'zbekistonda ish topishning eng oson yo'li. 50,000+ foydalanuvchi, 10,000+ vakansiya. Ish beruvchilar bilan to'g'ridan-to'g'ri chat. Bepul yuklab oling!",
      keywords: "ish topish, vakansiya, o'zbekiston, ish qidirish, ish beruvchi, resume, cv, ishga joylashish, mobil ilova, toshkent, samarqand"
    },
    en: {
      title: "IshTopchi - The easiest way to find a job | #1 job search app in Uzbekistan",
      description: "IshTopchi - The easiest way to find a job in Uzbekistan. 50,000+ users, 10,000+ vacancies. Direct chat with employers. Download for free!",
      keywords: "job search, vacancy, uzbekistan, employment, employer, resume, cv, career, mobile app, tashkent, samarkand"
    },
    ru: {
      title: "IshTopchi - Самый простой способ найти работу | #1 приложение для поиска работы в Узбекистане",
      description: "IshTopchi - Самый простой способ найти работу в Узбекистане. 50,000+ пользователей, 10,000+ вакансий. Прямой чат с работодателями. Скачайте бесплатно!",
      keywords: "поиск работы, вакансия, узбекистан, трудоустройство, работодатель, резюме, карьера, мобильное приложение, ташкент, самарканд"
    }
  };
  return (
    <div id="main-content">
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical="https://ishtopchi.uz/"
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