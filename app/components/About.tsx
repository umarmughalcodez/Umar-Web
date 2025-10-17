"use client";

import React from "react";
import { PiSealCheck } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import ShinyButton from "./AnimatedBtn";
import BorderBtn from "./ui/BorderBtn";
import { motion } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"; // ✅ Correct import

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
        className="w-full h-auto flex flex-col items-center p-5 xl:py-14 xl:px-26 text-black lg:flex-row justify-center space-x-3 space-y-8 mb-4"
      >
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 w-[90%] mt-8 px-10"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={fadeUp}>
            <BorderBtn text="About Umar" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <div className="md:text-5xl text-4xl font-semibold mb-8">
              <p>Building 
                <span className="text-green-500">

                {" "}Trustworthy {""}
                </span>
                 Websites, Turning</p>
              <p>Visitors Into <span className="text-green-500">

                {""}Loyal Pet Parents!{""}
                </span></p>
            </div>
            <div className="text-gray-800">
              <p>Crafting stunning websites that reflect your salon’s care, comfort, and love for pets.</p>
              <p> Helping pet grooming businesses shine online and attract more furry clients effortlessly.</p>
            </div>
          </motion.div>

          {/* Checkpoints */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-start min-h-[40px]"
          >
            <div className="w-[40%] h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mb-3 mt-3" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex space-x-3 mt-2 mb-5">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Expert in Pet Grooming Website Design</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex space-x-3 mt-2 mb-5">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Track Record of Driving Online Growth</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex space-x-3 mt-2 mb-12">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Proven Success in Boosting Bookings for Grooming Businesses</span>
          </motion.div>
          

          {/* Buttons + Ratings + Experience */}
          <motion.div
            variants={fadeUp}
            className="my-6 flex flex-col sm:flex-row items-center sm:space-x-6 space-y-6 sm:space-y-0 text-black"
          >
            <ShinyButton text="Get Free Demo" path="/schedule-call" />

            {/* Divider */}
            <div className="hidden sm:block h-[60px] w-[1px] bg-gradient-to-b from-transparent via-green-500 to-transparent" />

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
            <div className="hidden sm:block h-[60px] w-[1px] bg-gradient-to-b from-transparent via-green-500 to-transparent" />

            {/* Experience */}
            <div className="flex flex-col items-center text-center">
              <span className="font-semibold">3+ Years</span>
              <span className="text-sm text-gray-300">Experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Compare Image Section */}
        <motion.div
          className="w-[90%] lg:w-1/2 h-auto relative mb-12 flex items-center justify-center p-2 bg-green-500 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeRight}
          viewport={{ once: true, amount: 0.1 }}
          style={{ willChange: "transform, opacity" }}
        >
          <ReactCompareSlider
            boundsPadding={0}
            itemOne={
              <ReactCompareSliderImage
                alt="Before Website Redesign"
                src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/lady-1.png"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                alt="After Website Redesign"
                src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/lady-2.png"
                style={{
                  filter:
                    "saturate(1.25) contrast(1.1) drop-shadow(2px 4px 6px black)",
                }}
              />
            }
            keyboardIncrement="5%"
            position={50}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
          />
        </motion.div>
      </div>
      

      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-7" />
    </>
  );
};

export default About;
