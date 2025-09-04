"use client";
import React from "react";
import { motion } from "framer-motion";

const BorderBtn = ({ text }: { text: string }) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center gap-2 
        px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4.5 md:py-2 
        rounded-md bg-black/30 border border-white/10 
        text-xs sm:text-sm md:text-base lg:text-md 
        text-white shadow-md transition mb-8 sm:mb-10 md:mb-12"
    >
      {/* Blue top highlight */}
      <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Bullet dot */}
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>

      {/* Text */}
      <span>{text}</span>
    </motion.button>
  );
};

export default BorderBtn;
