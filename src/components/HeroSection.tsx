import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          IshTopchi
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6"
        >
          Ish topishning eng oson yo'li
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          IshTopchi – sizga mos ishni topish va ish beruvchilar bilan to'g'ridan-to'g'ri 
          bog'lanish imkonini beruvchi mobil ilova.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://play.google.com/store/apps/details?id=torex.top.ishtopchi', '_blank')}
            className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            <Download className="h-5 w-5" />
            <div className="text-left">
              <div className="text-xs">Yuklab oling</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://play.google.com/store/apps/details?id=torex.top.ishtopchi', '_blank')}
            className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
          >
            <Star className="h-5 w-5" />
            <div className="text-left">
              <div className="text-xs">Yuklab oling</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;