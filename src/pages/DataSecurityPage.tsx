import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, Shield, Lock, Server, Eye, HardDrive, AlertTriangle, CheckCircle, UserCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const DataSecurityPage = () => {
  const { t, language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const seoData = {
    uz: {
      title: "Ma'lumotlar xavfsizligi - IshTopchi | Eng yuqori darajadagi himoya",
      description: "IshTopchi ma'lumotlar xavfsizligi. AES-256 shifrlash, xavfsiz saqlash, kirish nazorati va muntazam tekshiruvlar haqida batafsil ma'lumot.",
      keywords: "ma'lumotlar xavfsizligi, shifrlash, AES-256, xavfsiz saqlash, kirish nazorati, ma'lumotlar himoyasi"
    },
    en: {
      title: "Data Security - IshTopchi | Highest level protection",
      description: "IshTopchi data security. Detailed information about AES-256 encryption, secure storage, access control and regular audits.",
      keywords: "data security, encryption, AES-256, secure storage, access control, data protection"
    },
    ru: {
      title: "Безопасность данных - IshTopchi | Защита высшего уровня",
      description: "Безопасность данных IshTopchi. Подробная информация о шифровании AES-256, безопасном хранении, контроле доступа и регулярных проверках.",
      keywords: "безопасность данных, шифрование, AES-256, безопасное хранение, контроль доступа, защита данных"
    }
  };

  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: t('encryption'),
      description: t('encryptionDesc'),
      color: 'blue'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: t('secureStorage'),
      description: t('secureStorageDesc'),
      color: 'green'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: t('accessControl'),
      description: t('accessControlDesc'),
      color: 'purple'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: t('regularAudits'),
      description: t('regularAuditsDesc'),
      color: 'indigo'
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: t('dataBackup'),
      description: t('dataBackupDesc'),
      color: 'teal'
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: t('incidentResponse'),
      description: t('incidentResponseDesc'),
      color: 'orange'
    }
  ];

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={`https://ishtopchi.uz/${currentLang}/data-security`}
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
                to={`/${currentLang}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t('backToHome')}
              </Link>
            </motion.div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-2xl"
              >
                <Shield className="h-10 w-10 text-white" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {t('dataSecurityTitle')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {t('dataSecurityDescription')}
              </motion.p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform-gpu"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 text-${feature.color}-600 dark:text-${feature.color}-400 rounded-2xl mb-6`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl mr-4"
                >
                  <CheckCircle className="h-6 w-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('complianceStandards')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('complianceDesc')}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  ISO 27001
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  GDPR
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  SOC 2 Type II
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 100 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mr-4"
                >
                  <UserCheck className="h-6 w-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('userRights')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('userRightsDesc')}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Ma'lumotlarni ko'rish huquqi
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Ma'lumotlarni o'zgartirish huquqi
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Ma'lumotlarni o'chirish huquqi
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-12 text-white text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('reportVulnerability')}
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Agar xavfsizlik zaifligini topsangiz, bizga xabar bering
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <p className="text-lg font-semibold mb-2">{t('contactSecurity')}</p>
              <p className="text-red-100">{t('securityEmail')}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataSecurityPage;