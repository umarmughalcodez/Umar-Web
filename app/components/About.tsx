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
} from "react-compare-slider";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col lg:flex-row items-center justify-center text-black py-16 px-6 md:px-12 xl:px-24 bg-white"
    >
      {/* Left Section */}
      <motion.div
        className="lg:w-1/2 w-full max-w-xl space-y-8"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div variants={fadeUp}>
          <BorderBtn text="Our Success" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Building <span className="text-green-500">Trustworthy</span>{" "}
            Websites, Turning <br />
            Visitors Into{" "}
            <span className="text-green-500">Loyal Pet Parents!</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We craft stunning, high-converting websites that reflect your
            grooming salon’s love, care, and comfort for pets — helping your
            business attract more furry clients and grow effortlessly.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div variants={fadeUp} className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Expert in Pet Grooming Website Design</span>
          </div>
          <div className="flex items-center space-x-3">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Proven Record of Boosting Online Growth</span>
          </div>
          <div className="flex items-center space-x-3">
            <PiSealCheck className="text-green-500 text-2xl" />
            <span>Increased Client Bookings for Grooming Businesses</span>
          </div>
        </motion.div>

        {/* CTA + Ratings + Experience */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-start sm:space-x-8 space-y-6 sm:space-y-0"
        >
          {/* CTA Button */}
          <ShinyButton text="Free Website Audit" path="/schedule-call" />

          {/* Divider */}
          <div className="hidden sm:block h-[60px] w-[1px] bg-gradient-to-b from-transparent via-green-500 to-transparent" />

          {/* Rating */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="flex space-x-1 text-green-500">
              {[...Array(5)].map((_, i) => (
                <IoStar key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-600">5.0 Stars Rating</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-[60px] w-[1px] bg-gradient-to-b from-transparent via-green-500 to-transparent" />

          {/* Experience */}
          <div className="flex flex-col items-center text-center">
            <span className="font-semibold text-lg text-green-500">
              Affordable Prices
            </span>
            <span className="text-sm text-gray-600">
              Different Plans Available
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Compare Section */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center space-y-3 justify-center mt-12 lg:mt-0 flex-col"
        initial="hidden"
        whileInView="visible"
        variants={fadeRight}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-xl bg-green-500 p-3 rounded-3xl">
          <ReactCompareSlider
            boundsPadding={0}
            itemOne={
              <ReactCompareSliderImage
                alt="Before Website Redesign"
                src="https://res.cloudinary.com/xcorpion/image/upload/v1761149001/oaichjraowackmoivy1o.png"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                alt="After Website Redesign"
                src="https://res.cloudinary.com/xcorpion/image/upload/v1761149001/xsdpyupskr3vooydulfi.png"
                // style={{
                //   filter:
                //     "saturate(1.25) contrast(1.1) drop-shadow(2px 4px 6px black)",
                // }}
              />
            }
            position={50}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
          />
        </div>
        <Button
          effect={"hoverUnderline"}
          variant={"link"}
          className="hover:text-green-500"
          onClick={() => router.push("/redesign")}
        >
          See Full Redesign &#8599;
        </Button>
      </motion.div>
    </section>
  );
};

export default About;
