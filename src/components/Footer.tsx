import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Send, Instagram, Linkedin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';

  return (
    <footer className="bg-gray-900 text-white py-16" role="contentinfo" aria-label="Sayt footer ma'lumotlari">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <span className="text-2xl font-bold">{t('appName')}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://t.me/ishtopchi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram kanalimizga obuna bo'ling"
                title="Telegram"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Send className="h-5 w-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ishtopchi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sahifamizni kuzatib boring"
                title="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5 text-pink-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/ishtopchi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn sahifamizni kuzatib boring"
                title="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" id="pages-heading">{t('pages')}</h3>
            <div className="space-y-2">
              <Link
                to={`/${currentLang}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                to={`/${currentLang}/support`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('support')}
              </Link>
              <Link
                to={`/${currentLang}/marketing`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('partnership')}
              </Link>
              <Link
                to={`/${currentLang}/privacy`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('privacyTitle')}
              </Link>
              <Link
                to={`/${currentLang}/privacy`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('privacyTitle')}
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" id="contact-heading">{t('contact')}</h3>
            <div className="space-y-2 text-gray-400">
              <p>ishtopchi@gmail.com</p>
              <p>+998 77 055 01 25</p>
              <p>Toshkent, O'zbekiston</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 {t('appName')}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;