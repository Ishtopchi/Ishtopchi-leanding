import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, Users, TrendingUp, Target, Handshake, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const MarketingPage = () => {
  const { t, language } = useLanguage();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    {
      icon: <Users className="h-8 w-8" />,
      title: t('wideAudience'),
      description: t('wideAudienceDesc')
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('highConversion'),
      description: t('highConversionDesc')
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t('preciseTargeting'),
      description: t('preciseTargetingDesc')
    }
  ];

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical="https://ishtopchi.uz/marketing"
      />
      <Header />
      <div ref={ref} className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t('backToHome')}
              </Link>
            </motion.div>
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {t('marketingTitle')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {t('marketingDescription')}
              </motion.p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.08,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform-gpu"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-6"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Handshake className="h-16 w-16 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('startPartnership')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('partnershipDesc')}
            </p>
            <motion.button
              whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform-gpu"
              onClick={() => setIsContactDialogOpen(true)}
            >
              {t('contactUs')}
            </motion.button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('forEmployers')}
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {[t('freeJobPosting'), t('directChatWithCandidates'), t('flexibleFilters'), t('analyticsReports')].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1.6 + idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('premiumServices')}
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {[t('promoteListings'), t('customDesign'), t('extendedAnalytics'), t('personalSupport')].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 1.8 + idx * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="flex items-start"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Contact Dialog */}
        <AnimatePresence>
          {isContactDialogOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsContactDialogOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('contactUs')}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsContactDialogOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </motion.button>
                </div>

                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
                  >
                    <Phone className="h-8 w-8" />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Bizning mutaxassislarimiz bilan bog'laning
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      +998 77 055 01 25
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Ish kunlari: 9:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.open('tel:+998770550125', '_self');
                      setIsContactDialogOpen(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Qo'ng'roq qilish</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsContactDialogOpen(false)}
                    className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300"
                  >
                    Bekor qilish
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;