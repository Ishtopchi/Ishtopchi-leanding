import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating shapes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-500/5 dark:bg-green-400/10 rounded-full blur-sm"
      />
      
      {/* Additional animated elements */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/3 w-20 h-20 bg-yellow-500/10 dark:bg-yellow-400/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-pink-500/10 dark:bg-pink-400/20 rounded-full blur-sm"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-green-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-green-900/20" />
    </div>
  );
};

export default AnimatedBackground;