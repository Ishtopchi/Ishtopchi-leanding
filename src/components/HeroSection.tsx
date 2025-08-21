import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Star, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Asosiy bo'lim">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.6 }
              }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-8 shadow-2xl"
            >
              <Smartphone className="h-12 w-12 text-white" aria-hidden="true" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.0, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('appName')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.0, delay: 0.5 }}
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.0, delay: 0.7 }}
            >
              {t('heroDescription')}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.0, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                y: -8, 
                rotateX: 15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://apps.apple.com/app/ishtopchi/id1234567890', '_blank')}
              className="flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-500 shadow-xl transform-gpu"
              aria-label="App Store'dan yuklab olish"
              rel="noopener noreferrer"
              role="button"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm opacity-90">{t('downloadFrom')}</div>
                <div className="text-lg font-semibold">{t('appStore')}</div>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                y: -8, 
                rotateX: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://play.google.com/store/apps/details?id=torex.top.ishtopchi', '_blank')}
              className="flex items-center space-x-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-500 shadow-xl transform-gpu"
              aria-label="Google Play'dan yuklab olish"
              rel="noopener noreferrer"
              role="button"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm opacity-90">{t('downloadFrom')}</div>
                <div className="text-lg font-semibold">{t('googlePlay')}</div>
              </div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center space-x-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
              role="group"
              aria-label="Foydalanuvchilar statistikasi"
            >
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Foydalanuvchilar</div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center space-x-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
              role="group"
              aria-label="Vakansiyalar statistikasi"
            >
              <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" aria-hidden="true" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Vakansiyalar</div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center space-x-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
              role="group"
              aria-label="Reyting statistikasi"
            >
              <Star className="h-8 w-8 text-yellow-500 dark:text-yellow-400" aria-hidden="true" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Reyting</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;