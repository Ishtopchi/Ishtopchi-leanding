import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Star, Smartphone } from 'lucide-react';

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Smartphone className="h-16 w-16 text-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hoziroq yuklab oling
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            IshTopchi ilovasini yuklab olib, o'zingizga mos ishni toping
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onClick={() => window.open('https://play.google.com/store/apps/details?id=torex.top.ishtopchi', '_blank')}
              className="flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Download className="h-6 w-6" />
              <div className="text-left">
                <div className="text-sm">Yuklab oling</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={() => window.open('https://play.google.com/store/apps/details?id=torex.top.ishtopchi', '_blank')}
              className="flex items-center space-x-4 bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Star className="h-6 w-6" />
              <div className="text-left">
                <div className="text-sm">Yuklab oling</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;