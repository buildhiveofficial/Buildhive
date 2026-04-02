import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.2,
      staggerChildren: 0.08,
    },
  },
};

const sinWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, classname = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full font-bold  text-3xl sm:text-5xl md:text-6xl lg:text-7xl ${classname}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.map((part, index) => (
          <motion.span
            key={index}
            className={`inline-block ${part.className || ''}`}
            variants={sinWord}
          >
            {part.word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
