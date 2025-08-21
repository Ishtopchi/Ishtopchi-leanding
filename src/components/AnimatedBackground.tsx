import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* New floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 300 - 150],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.3, 1.2, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-300/40 dark:to-purple-300/40 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Additional smaller particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`small-${i}`}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.05, 0.2, 0.05],
            scale: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 dark:from-pink-300/30 dark:to-yellow-300/30 rounded-full"
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
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-purple-500/15 dark:from-blue-400/25 dark:to-purple-400/25 rounded-full blur-md"
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
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/15 to-pink-500/15 dark:from-purple-400/25 dark:to-pink-400/25 rounded-full blur-md"
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
        className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-400/15 dark:to-teal-400/15 rounded-full blur-lg"
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
        className="absolute top-3/4 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 dark:from-yellow-400/25 dark:to-orange-400/25 rounded-full blur-md"
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
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/15 to-rose-500/15 dark:from-pink-400/25 dark:to-rose-400/25 rounded-full blur-md"
      />
      
      {/* Gradient overlay */}
      <motion.div 
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), rgba(34, 197, 94, 0.12))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(34, 197, 94, 0.08), rgba(59, 130, 246, 0.12))",
            "linear-gradient(225deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.12))",
            "linear-gradient(315deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), rgba(34, 197, 94, 0.12))"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

export default AnimatedBackground;