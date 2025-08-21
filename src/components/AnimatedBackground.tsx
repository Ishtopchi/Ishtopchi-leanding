import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* New floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Floating shapes */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -150, 50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, -200, 100, 0],
          y: [0, 150, -75, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.6, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.5, 0.7, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/5 to-teal-500/5 dark:from-green-400/10 dark:to-teal-400/10 rounded-full blur-sm"
      />
      
      {/* Additional animated elements */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 120, -60, 0],
          rotate: [0, 270, 540],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-3/4 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, 160, -80, 0],
          y: [0, -120, 60, 0],
          scale: [1, 1.8, 0.6, 1],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-rose-500/10 dark:from-pink-400/20 dark:to-rose-400/20 rounded-full blur-sm"
      />
      
      {/* Gradient overlay */}
      <motion.div 
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05), rgba(34, 197, 94, 0.1))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.1))",
            "linear-gradient(225deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))",
            "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05), rgba(34, 197, 94, 0.1))"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

export default AnimatedBackground;