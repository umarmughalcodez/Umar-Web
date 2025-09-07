"use client";
import React from "react";
import BorderBtn from "./ui/BorderBtn";
import FAQ from "./ui/FAQComponent";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const FAQSection = () => {
  return (
    <>
      <div
        id="FAQ"
        className="flex flex-col items-center justify-center p-8 lg:p-16 xl:p-26 w-full mt-8 mb-6"
      >
        <div className="w-[95%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-16" />
        <BorderBtn text="FAQ" />
        <motion.div
          className="text-4xl md:text-5xl mt-3 text-white font-semibold space-y-3 text-center"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          variants={fadeUp}
        >
          <p>Frequently</p>
          <p className="text-white/70">Asked Questions</p>
          <span className="text-white/70 text-sm mb-6 mt-4 max-w-xs font-normal ">
            Have inquiries? Our FAQ section has you covered with quick answers
            to the most common questions.
          </span>
        </motion.div>
        <FAQ />
      </div>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent  text-white/10" />
    </>
  );
};

export default FAQSection;
