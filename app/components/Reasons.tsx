"use client";
import React from "react";
import BorderBtn from "./ui/BorderBtn";
import { PiSealCheck } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeRight, fadeUp } from "@/lib/animations";
import { FaPaw } from "react-icons/fa";

const Reasons = () => {
  const reasons = [
    "No More 'Ruff' Websites — Get a Paw-fect Design Clients Love",
    "Fully Mobile-Friendly — Looks Great on Every Screen, Big or Small",
    "Show Up on Google When Pet Parents Search Nearby",
    "Affordable Packages (Monthly & One-time) Made for Small Grooming Businesses",
    "Fast, Smooth & No More 'Slow as a Snail' Sites",
    "Modern, Trust-Building Designs That Make Pet Owners Book Instantly",
    "Over 2 Years of Proven Experience in Grooming Web Design",
    "Safe, Secure & Stress-Free — You Focus on Pets, We Handle Tech",
    "24/7 Support — Because Pet Pros Deserve Peace of Mind",
    "SEO + Marketing Ready — Built to Grow Your Grooming Brand",
  ];

  return (
    <div className="pt-16 text-black flex flex-col items-center justify-center w-full px-6 md:px-12 lg:px-20">
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
          <span className="text-green-600">Work With Us?</span>
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
            <FaPaw className="text-green-500 text-2xl shrink-0" />
            <span className="text-black/80">{r}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mt-12 text-black/10" />
    </div>
  );
};

export default Reasons;
