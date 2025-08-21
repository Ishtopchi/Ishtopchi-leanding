import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage = () => {
  const faqs = [
    {
      question: "IshTopchi ilovasini qanday ishlataman?",
      answer: "Ilovani yuklab oling, ro'yxatdan o'ting va kerakli ishni qidiring. Filtrlar yordamida qidiruvni aniqlashtiring."
    },
    {
      question: "Ishga murojaat qilish bepulmi?",
      answer: "Ha, IshTopchi ilovasida ishga murojaat qilish mutlaqo bepul."
    },
    {
      question: "Ish beruvchilar bilan qanday bog'lanaman?",
      answer: "Ilova ichidagi chat funksiyasi orqali ish beruvchilar bilan to'g'ridan-to'g'ri muloqot qilishingiz mumkin."
    },
    {
      question: "Parolimni unutdim, nima qilishim kerak?",
      answer: "Kirish sahifasida 'Parolni unutdingizmi?' tugmasini bosing va ko'rsatmalarga amal qiling."
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
              Bosh sahifaga qaytish
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Yordam markazi
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              IshTopchi ilova haqida savollaringiz bormi? Biz yordam beramiz!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <MessageCircle className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Onlayn chat
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                24/7 onlayn yordam xizmati
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <Mail className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Elektron pochta
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ishtopchi@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <Phone className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Telefon orqali yordam
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +998 99 534 03 13
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ko'p beriladigan savollar
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0"
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