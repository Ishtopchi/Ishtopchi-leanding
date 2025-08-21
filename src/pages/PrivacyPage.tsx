import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPage = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('dataProtection'),
      content: t('dataProtectionDesc')
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: t('dataUsage'),
      content: t('dataUsageDesc')
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: t('security'),
      content: t('securityDesc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('thirdParties'),
      content: t('thirdPartiesDesc')
    }
  ];

  return (
    <div>
      <Header />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('backToHome')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('privacyTitle')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('privacyDescription')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-6">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('generalInfo')}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('privacyContent1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('privacyContent2')}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>{t('purpose1')}</li>
                <li>{t('purpose2')}</li>
                <li>{t('purpose3')}</li>
                <li>{t('purpose4')}</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                {t('moreDetails')}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-500 dark:text-gray-400">
              {t('lastUpdated')}
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
