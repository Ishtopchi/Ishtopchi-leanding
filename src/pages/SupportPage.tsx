import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const SupportPage = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const seoData = {
    uz: {
      title: "Yordam markazi - IshTopchi | 24/7 qo'llab-quvvatlash xizmati",
      description: "IshTopchi yordam markazi. 24/7 onlayn chat, elektron pochta va telefon orqali yordam. Ko'p beriladigan savollar va javoblar.",
      keywords: "yordam, qo'llab-quvvatlash, FAQ, chat, email, telefon, ishtopchi yordam"
    },
    en: {
      title: "Help Center - IshTopchi | 24/7 support service",
      description: "IshTopchi help center. 24/7 online chat, email and phone support. Frequently asked questions and answers.",
      keywords: "help, support, FAQ, chat, email, phone, ishtopchi support"
    },
    ru: {
      title: "Центр поддержки - IshTopchi | Служба поддержки 24/7",
      description: "Центр поддержки IshTopchi. Онлайн чат 24/7, поддержка по электронной почте и телефону. Часто задаваемые вопросы и ответы.",
      keywords: "помощь, поддержка, FAQ, чат, email, телефон, поддержка ishtopchi"
    }
  };

  const faqs = [
    {
      question: t('faq1Q'),
      answer: t('faq1A')
    },
    {
      question: t('faq2Q'),
      answer: t('faq2A')
    },
    {
      question: t('faq3Q'),
      answer: t('faq3A')
    },
    {
      question: t('faq4Q'),
      answer: t('faq4A')
    }
  ];

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical="https://ishtopchi.uz/support"
      />
      <Header />
      <div ref={ref} className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t('backToHome')}
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('supportTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {t('supportDescription')}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: MessageCircle, title: t('onlineChat'), desc: t('onlineChatDesc'), color: 'blue' },
              { icon: Mail, title: t('email'), desc: 'ishtopchi@gmail.com', color: 'green' },
              { icon: Phone, title: t('phoneSupport'), desc: '+998 77 055 01 25', color: 'purple' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400 rounded-2xl mb-4`}
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('faqTitle')}
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;