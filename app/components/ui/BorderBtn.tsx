"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const BorderBtn = ({ text }: { text: string }) => {
  return (
    <motion.button
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.1 }}
      style={{ willChange: "transform, opacity" }}
      variants={fadeUp}
      className="relative flex items-center justify-center gap-2 
        px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4.5 md:py-2 
        rounded-md bg-black/30 border border-white/10 
        text-xs  md:text-sm lg:text-base 
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
