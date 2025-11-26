import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

const Hero = () => {
  const headline = "IEEE Computer Society";
  const tagline = "Karunya Institute of Technology and Sciences";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 uppercase"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {headline.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <p className="text-md sm:text-lg md:text-2xl mb-8">
          <Typewriter text={tagline} delay={100} />
        </p>
      </div>
    </div>
  );
};

export default Hero;