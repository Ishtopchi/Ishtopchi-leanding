import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Smartphone className="h-8 w-8 text-blue-600" />
            </motion.div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('appName')}
            </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.1, y: -2 }}>
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                {t('home')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -2 }}>
              <Link
                to="/support"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                {t('support')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -2 }}>
              <Link
                to="/marketing"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                {t('partnership')}
              </Link>
            </motion.div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            <Link
              to="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              to="/support"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('support')}
            </Link>
            <Link
              to="/marketing"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('partnership')}
            </Link>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.div whileHover={{ scale: 1.1, y: -2 }}>
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              {t('home')}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -2 }}>
            <Link
              to="/support"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              {t('support')}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -2 }}>
            <Link
              to="/marketing"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              {t('partnership')}
            </Link>
          </motion.div>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;