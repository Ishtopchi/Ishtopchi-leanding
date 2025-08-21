import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, Target, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MarketingPage = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Keng auditoriya",
      description: "Minglab faol foydalanuvchilar orasida o'z kompaniyangizni targ'ib qiling"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Yuqori konversiya",
      description: "Maqsadli auditoriya va yuqori sifatli kandidatlar"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Aniq maqsadlash",
      description: "Kerakli malaka va tajribaga ega mutaxassislarni toping"
    }
  ];

  return (
    <div>
      <Header />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Bosh sahifaga qaytish
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Biznes hamkorligi
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                IshTopchi bilan hamkorlik qiling va o'z kompaniyangiz uchun 
                eng yaxshi mutaxassislarni toping
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-6">
                  {benefit.icon}
                </div>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
          >
            <Handshake className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hamkorlik boshlaylik!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              O'z kompaniyangiz uchun eng yaxshi talantlarni topishga tayyor misiz?
              Biz bilan bog'laning va hamkorlikni boshlaylik.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              onClick={() => window.open('mailto:ishtopchi@gmail.com', '_blank')}
            >
              Aloqa qurish
            </motion.button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ish beruvchilar uchun
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bepul vakansiya e'lon qilish imkoniyati</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Kandidatlar bilan to'g'ridan-to'g'ri chat</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Moslashuvchan filtrlar va qidiruv</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Analitika va hisobotlar</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Premium xizmatlar
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>E'lonlarni yuqoriga chiqarish</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Maxsus dizayn va brendlash</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Kengaytirilgan analitika</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>24/7 shaxsiy yordam</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;