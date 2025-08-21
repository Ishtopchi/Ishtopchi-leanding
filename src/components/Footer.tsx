import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Send, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">IshTopchi</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Ish topishning eng oson yo'li. Sizga mos ishni toping va 
              ish beruvchilar bilan to'g'ridan-to'g'ri bog'laning.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://t.me/torex_dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Send className="h-5 w-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/torex.dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5 text-pink-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dilshodjon-haydarov-6715a6246/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sahifalar</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Bosh sahifa
              </Link>
              <Link
                to="/support"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Yordam
              </Link>
              <Link
                to="/marketing"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Hamkorlik
              </Link>
              <Link
                to="/privacy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Maxfiylik siyosati
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <div className="space-y-2 text-gray-400">
              <p>ishtopchi@gmail.com</p>
              <p>+998 99 534 03 13</p>
              <p>Toshkent, O'zbekiston</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 IshTopchi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;