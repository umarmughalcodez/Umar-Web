"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";
import { Button } from "./ui/button";
import { PiLightbulb, PiRocketLaunch } from "react-icons/pi";
import { BsCodeSlash } from "react-icons/bs";
import { TextRevealCard } from "./ui/Text-reveal-card";

// Reusable animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const WorkCards = () => {
  return (
    <div className="w-full flex flex-col items-center text-white mt-4 xl:flex-row xl:items-start xl:space-x-6 mb-12">
      {/* Left column with animated stage cards */}
      <div className="flex flex-col items-center text-white space-y-8 xl:w-1/2 w-full">
        {/* Stage 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // animate once when 20% visible
          style={{ willChange: "transform, opacity" }}
          className="relative group w-full rounded-3xl bg-black px-10 py-8 space-y-6 
          overflow-hidden shadow-xl border border-gray-800"
        >
          {/* Shine effect overlay */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out h-full" />

          {/* Blue blurred waves */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/50 rounded-full blur-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <button className="relative flex items-center px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white text-sm shadow-md transition mb-8 shadow-blue-950">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span className="text-2xl font-extralight">
                <PiLightbulb />
              </span>
            </button>
            <button className="relative flex items-center px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white text-sm shadow-md transition mb-8 shadow-blue-950">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span>Stage 1</span>
            </button>
          </div>

          <span className="text-2xl font-semibold mb-6 relative z-10">
            Vision
          </span>
          <p className="text-gray-300 text-sm relative z-10 mt-2">
            We start by diving deep into your brand — your story, goals, and
            style. Together, we craft a rock-solid plan that sets the stage for
            a website built to convert and impress.
          </p>

          <div className="space-x-4 relative z-10 space-y-3">
            <Button className="border border-gray-700 bg-white/5 backdrop-blur-xl hover:bg-white/5">
              Brand Deep-Dive
            </Button>
            <Button className="border border-gray-700 bg-white/5 backdrop-blur-xl hover:bg-white/5">
              Clear Strategy
            </Button>
          </div>
        </motion.div>

        {/* Stage 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ willChange: "transform, opacity" }}
          className="relative group w-full rounded-3xl bg-black px-10 py-8 space-y-6 
          overflow-hidden shadow-xl border border-gray-800"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out h-full" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/50 rounded-full blur-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <button className="relative flex items-center px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white text-sm shadow-md transition mb-8 shadow-blue-950">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span className="text-2xl font-extralight">
                <BsCodeSlash />
              </span>
            </button>
            <button className="relative flex items-center px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white text-sm shadow-md transition mb-8 shadow-blue-950">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span>Stage 2</span>
            </button>
          </div>

          <span className="text-2xl font-semibold mb-6 relative z-10">
            Build
          </span>
          <p className="text-gray-300 text-sm relative z-10 mt-2">
            Once the plan is ready, we transform your vision into a stunning,
            functional website. You will see progress in real-time, share
            feedback easily, and stay fully in the loop as your site takes
            shape.
          </p>

          <div className="space-x-4 relative z-10 space-y-3">
            <Button className="border border-gray-700 bg-white/5 backdrop-blur-xl hover:bg-white/5">
              Live Progress Updates
            </Button>
            <Button className="border border-gray-700 bg-white/5 backdrop-blur-xl hover:bg-white/5">
              Real-Time Feedback
            </Button>
          </div>
        </motion.div>

        {/* Stage 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ willChange: "transform, opacity" }}
          className="relative group w-full rounded-3xl bg-black px-10 py-8 space-y-6 
          overflow-hidden shadow-xl border border-gray-800"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out h-full" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/50 rounded-full blur-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <button className="relative flex items-center px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white text-sm shadow-md transition mb-8 shadow-blue-950">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span className="text-2xl font-extralight">
                <PiRocketLaunch />
              </span>
            </button>
            <button className="relative flex items-center px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white text-sm shadow-md transition mb-8 shadow-blue-950">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span>Stage 3</span>
            </button>
          </div>

          <span className="text-2xl font-semibold mb-6 relative z-10">
            Launch
          </span>
          <p className="text-gray-300 text-sm relative z-10 mt-2">
            After every detail is fine-tuned, we prep everything for a smooth,
            stress-free launch. You will walk away with all the tools, training,
            and support to keep your site thriving.
          </p>

          <div className="space-x-4 relative z-10 space-y-3">
            <Button className="border border-gray-700 bg-white/5 backdrop-blur-xl hover:bg-white/5">
              Handover Resources
            </Button>
            <Button className="border border-gray-700 bg-white/5 backdrop-blur-xl hover:bg-white/5">
              Easy Launch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right column with sticky card */}
      <div className="xl:w-1/2 w-full mt-8 xl:mt-0">
        <motion.div
          className="xl:sticky xl:top-24 w-full px-0 xl:px-6"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ willChange: "transform, opacity" }}
        >
          <TextRevealCard
            text="Your Vision, Our Code"
            revealText="Design → Launch → Sell"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WorkCards;
