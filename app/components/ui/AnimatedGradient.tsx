"use client";

import React from "react";
import { motion } from "framer-motion";
import BorderBtn from "./BorderBtn";
import ShinyButton from "../AnimatedBtn";
import { fadeRight, fadeUp } from "@/lib/animations";

const AnimatedGradientCard = () => {
  return (
    <div
      id="JoinUs"
      className="w-full mt-10 grid place-items-center p-4 lg:p-16 xl:p-26 pb-12"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white text-black border border-green-200 shadow-2xl">
        {/* --- Soft Green Moving Glow --- */}
        <motion.div
          className="absolute top-1/3 left-0 w-[80%] h-[80px] blur-[90px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,185,129,0) 0%, rgba(16,185,129,0.8) 50%, rgba(16,185,129,0) 100%)",
          }}
          animate={{
            x: ["-40%", "40%", "-40%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-2/3 left-0 w-[140%] h-[200px] blur-[100px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,197,94,0) 0%, rgba(34,197,94,0.9) 50%, rgba(34,197,94,0) 100%)",
          }}
          animate={{
            x: ["40%", "-40%", "40%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* --- Foreground Content --- */}
        <div className="relative z-10 p-10 flex flex-col items-center text-center space-y-6 mt-2">
          {/* Small Button */}
          <BorderBtn text="Let’s Create Your Pet Brand" />

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            <p>Each Project we Undertake</p>
            <span className="text-green-600">is a Unique Opportunity</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-gray-600 mb-6 text-sm md:text-base max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            Not sure where to start? Or maybe your website feels a little “ruff”? <br />
            Let’s design something that makes tails wag — book your free strategy call today.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeRight}
          >
            <ShinyButton text="Book FREE Strategy Call" path="/schedule-call" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGradientCard;
