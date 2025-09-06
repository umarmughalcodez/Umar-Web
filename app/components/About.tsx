"use client";
import React from "react";
import Image from "next/image";
import { PiSealCheck } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import ShinyButton from "./AnimatedBtn";
import BorderBtn from "./ui/BorderBtn";
import img from "@/public/image to use.jpeg";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div
        id="about"
        className="w-full h-auto flex flex-col items-center p-5 xl:py-14 xl:px-26 text-white lg:flex-row justify-center space-x-3 space-y-8 mb-4"
      >
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 w-[90%] mt-8"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <BorderBtn text="About Umar" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <div className="md:text-5xl text-4xl font-semibold mb-8">
              <p>Building Trustworthy Brands</p>
              <p>Delivering Results!</p>
            </div>
            <div className="text-gray-400">
              <p>Delivering high-quality designs with strategic impact.</p>
              <p> Elevate your digital presence in style.</p>
            </div>
          </motion.div>

          {/* Checkpoints */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-start min-h-[40px] "
          >
            <div className="w-[40%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex space-x-3 mt-2 mb-5">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Experienced Web Developer</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex space-x-3 mt-2 mb-12">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Proven Track Record of Driving Online Growth</span>
          </motion.div>

          {/* Buttons + Ratings + Experience */}
          <motion.div
            variants={fadeUp}
            className="my-6 flex flex-col sm:flex-row items-center sm:space-x-6 space-y-6 sm:space-y-0 text-white"
          >
            {/* Button */}
            <ShinyButton text="Book Consultation Call" path="/schedule-call" />

            {/* Divider */}
            <div className="hidden sm:block h-[40px] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent" />

            {/* Rating */}
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="flex space-x-1 text-lg">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="text-sm text-gray-300">5.0 Stars Rating</span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-[40px] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent" />

            {/* Experience */}
            <div className="flex flex-col items-center text-center">
              <span className="font-semibold">3+ Years</span>
              <span className="text-sm text-gray-300">Experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-[90%] lg:w-1/2 h-auto relative mb-12 flex items-center justify-center p-1 bg-[#2563EB] rounded-4xl border-2 border-[#2563Eb]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <Image
            src={img}
            alt="Umar's Image"
            className="object-contain rounded-4xl border-2 border-[#686868]"
          />
        </motion.div>
      </div>

      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-7" />
    </>
  );
};

export default About;
