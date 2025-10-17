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
    <div className="w-full flex flex-col items-center text-black mt-4 xl:flex-row xl:items-start xl:space-x-6 mb-12">
      {/* LEFT COLUMN */}
      <div className="flex flex-col items-center text-black space-y-8 xl:w-1/2 w-full">
        {/* Stage 1 — Discover */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative group w-full rounded-3xl bg-white px-10 py-8 space-y-6 
          overflow-hidden shadow-xl border border-green-200"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-300 rounded-full blur-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 text-green-600 text-2xl border border-green-500 shadow-md p-1 shadow-green-500 rounded-lg">
              <PiLightbulb />
            </div>
            <span className="text-sm text-green-500 font-medium border border-green-500 shadow-md p-1 shadow-green-500 px-2 rounded-lg">
              Stage 1
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 relative z-10">
            Discover & Define
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed relative z-10">
            We start with understanding your grooming business — your story,
            target audience, and the “paw-sitive” vibe you want your website to
            show. Every brand has its own personality, and we make sure yours
            shines through.
          </p>

          <div className="flex flex-wrap gap-3 relative z-10 mt-4">
            <Button className="border border-green-400 text-green-600 bg-green-50 hover:bg-green-100">
              Brand Discovery
            </Button>
            <Button className="border border-green-400 text-green-600 bg-green-50 hover:bg-green-100">
              Visual Direction
            </Button>
          </div>
        </motion.div>

        {/* Stage 2 — Design & Develop */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative group w-full rounded-3xl bg-white px-10 py-8 space-y-6 
          overflow-hidden shadow-xl border border-green-200"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-300 rounded-full blur-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 text-green-600 text-2xl border border-green-500 shadow-md p-1 shadow-green-500 rounded-lg">
              <BsCodeSlash />
            </div>
            <span className="text-sm text-green-500 font-medium border border-green-500 shadow-md p-1 shadow-green-500 px-2 rounded-lg">
              Stage 2
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 relative z-10">
            Design & Develop
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed relative z-10">
            Once we know your vision, our designers and developers craft a
            responsive, modern site tailored to your grooming business. Each
            section is built to attract pet parents and keep tails wagging.
          </p>

          <div className="flex flex-wrap gap-3 relative z-10 mt-4">
            <Button className="border border-green-400 text-green-600 bg-green-50 hover:bg-green-100">
              Responsive Design
            </Button>
            <Button className="border border-green-400 text-green-600 bg-green-50 hover:bg-green-100">
              Live Previews
            </Button>
          </div>
        </motion.div>

        {/* Stage 3 — Launch & Celebrate */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative group w-full rounded-3xl bg-white px-10 py-8 space-y-6 
          overflow-hidden shadow-xl border border-green-200"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-300 rounded-full blur-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 text-green-600 text-2xl border border-green-500 shadow-md p-1 shadow-green-500 rounded-lg">
              <PiRocketLaunch />
            </div>
            <span className="text-sm text-green-500 font-medium border border-green-500 shadow-md p-1 shadow-green-500 px-2 rounded-lg">
              Stage 3
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 relative z-10">
            Launch & Celebrate
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed relative z-10">
            Once everything is paw-fect, we launch! You’ll receive all resources
            and guidance to manage your new site confidently — and watch your
            calendar fill with happy pet parents booking their next visit.
          </p>

          <div className="flex flex-wrap gap-3 relative z-10 mt-4">
            <Button className="border border-green-400 text-green-600 bg-green-50 hover:bg-green-100">
              SEO + Optimization
            </Button>
            <Button className="border border-green-400 text-green-600 bg-green-50 hover:bg-green-100">
              Smooth Launch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN (optional future use) */}
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
  text="We Groom Your Brand Online"
  revealText="Design → Shine → Grow 🐾"
/>

        </motion.div>
      </div>
    </div>
  );
};

export default WorkCards;
