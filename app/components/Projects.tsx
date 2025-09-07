"use client";
import React from "react";
import InfiniteCards from "./InfiniteCards";
import BorderBtn from "./ui/BorderBtn";
import { motion } from "framer-motion";

const Projects = () => {
  const images = [
    "/AI.png",
    "/Feebany Contels.png",
    "/Saas.png",
    "/gym.png",
    "/Services Pricings.png",
    "/digital marketing.png",
  ];

  const texts = [
    "Nucleon AI",
    "Restaurant Website",
    "SaaS Platform",
    "GYM Website",
    "Plumbing Services",
    "Digital Marketing Services",
  ];

  const description = [
    "Drives enterprise sign-ups by demystifying complex AI tools",
    "Increased order volume with a simplified menu and loyalty program",
    "Streamlines user onboarding and drives subscription growth with a friction-free experience",
    "Drives gym sign-ups with online class booking and easy membership plans",
    "Secures emergency calls with a prominent, trust-building booking widget",
    "Converts web traffic into a consistent lead generation pipeline",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full h-auto space-y-8"
    >
      {/* Title Block */}
      <motion.div
        className="p-4 lg:p-12 grid place-items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div variants={fadeUp}>
          <BorderBtn text="Launch Your Website" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="text-4xl font-semibold text-gray-100 mt-3 text-center md:text-5xl mb-2"
        >
          <p>Reliable Agency Partner</p>
          <p>For Startups & Growing Businesses</p>
          <p className="text-sm text-gray-400 font-normal mt-8">
            Launch your website quickly with expert setup and dedicated support.
          </p>
        </motion.div>
      </motion.div>

      {/* Infinite Cards */}

      <InfiniteCards images={images} texts={texts} descriptions={description} />

      {/* Divider */}
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-16 mt-4" />
    </div>
  );
};

export default Projects;
