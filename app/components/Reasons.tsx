"use client";
import React from "react";
import BorderBtn from "./ui/BorderBtn";
import { PiSealCheck } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeRight, fadeUp } from "@/lib/animations";

const Reasons = () => {
  const reasons = [
    "Fully Mobile-Friendly Website for All Devices",
    "Rank Higher on Google & Be Found Locally & Easily",
    "Affordable Packages Designed for Small Businesses",
    "Fast Loading, Zero Frustration",
    "Modern & Professional Designs That Build Trust",
    "Proven Results with 3+ Years of Experience",
    "Safe, Secure, and Always Reliable",
    "24/7 Ongoing Support & Guidance",
    "SEO, Marketing, and Growth Ready",
  ];

  return (
    <div className="pt-16 text-white flex flex-col items-center justify-center w-full px-6 md:px-12 lg:px-20">
      {/* Top button */}
      <BorderBtn text="Reasons" />

      {/* Heading */}
      <motion.div
        variants={fadeRight}
        whileInView={"visible"}
        initial="hidden"
        viewport={{ once: true, amount: 0.1 }}
        style={{ willChange: "transform, opacity" }}
        className="text-center grid place-items-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4 flex-col flex space-y-2">
          <span>Why You Should</span>
          <span className="text-white/70">Work With Us?</span>
        </h2>

        {/* Subheading */}
        <p className="text-md md:text-lg text-gray-400 text-center max-w-2xl mt-6">
          We combine design, technology, and strategy to deliver websites that
          don’t just look good — they actually help your business grow.
        </p>
      </motion.div>

      {/* List container */}
      <motion.div
        className="w-full max-w-2xl flex flex-col gap-5 text-left mt-12"
        variants={fadeUp}
        whileInView={"visible"}
        initial="hidden"
        viewport={{ once: true, amount: 0.1 }}
        style={{ willChange: "transform, opacity" }}
      >
        {reasons.map((r, i) => (
          <motion.div
            variants={fadeUp}
            whileInView={"visible"}
            initial="hidden"
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            key={i}
            className="flex items-start space-x-3 text-base md:text-md"
          >
            <PiSealCheck className="text-green-500 text-2xl shrink-0" />
            <span className="text-white/80">{r}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-12 text-white/10" />
    </div>
  );
};

export default Reasons;
