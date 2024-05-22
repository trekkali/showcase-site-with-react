import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/monbar/13785-254542762.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-8 bg-black bg-opacity-50">
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-dancing mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our view, our things
          </motion.h2>
          <motion.div
            className="flex items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center">
              <span className="text-7xl font-bold">Mybeat</span>
              <span className="text-purple-500 text-7xl font-bold mr-2">.</span>
            </div>
          </motion.div>
          <motion.div
            className="my-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-2xl md:text-3xl font-oswald">Feel the beat of the night</p>
            <svg className="w-16 h-16 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12m0 0l3-3m-3 3l-3-3m6 6v3m-6-3v3m0 0h12m0 0H3"></path>
            </svg>
          </motion.div>
          <motion.button
            className="mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-oswald rounded"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Découvrir
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
