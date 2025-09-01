"use client";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Button } from "./ui/button";
import { PiLightbulb, PiRocketLaunch } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { TextRevealCard } from "./ui/Text-reveal-card";

const WorkCards = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center text-white mt-4 xl:flex-row xl:space-x-4 mb-20">
        <div className="flex flex-col items-center text-white space-y-8 xl:w-1/2 w-full">
          <div
            className="relative w-full rounded-3xl 
        bg-black px-10 py-8 space-y-6 overflow-hidden shadow-xl border border-gray-800"
          >
            {/* Blue blurred waves (background effects) */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/50 rounded-full blur-3xl"></div>

            <div className="flex items-center justify-between relative z-10">
              <button
                className="relative flex items-center px-4 py-2 rounded-lg 
            bg-black/30 border border-white/10 text-white text-sm
            shadow-md transition mb-8 shadow-blue-950"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <span className="text-2xl font-extralight">
                  <PiLightbulb />
                </span>
              </button>
              <button
                className="relative flex items-center px-4 py-2 rounded-lg 
            bg-black/30 border border-white/10 text-white text-sm
            shadow-md transition mb-8 shadow-blue-950"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <span className="">Stage 1</span>
              </button>
            </div>

            <span className="text-lg font-semibold mb-4 relative z-10">
              Vision
            </span>
            <p className="text-gray-300 text-sm relative z-10">
              We start by diving deep into your brand — your story, goals, and
              style. Together, we craft a rock-solid plan that sets the stage
              for a website built to convert and impress.
            </p>

            <div className="space-x-4 relative z-10">
              <Button
                className="border border-gray-700 bg-white/5 backdrop-blur-xl 
  hover:bg-white/5"
              >
                Brand Deep-Dive
              </Button>

              <Button
                className="border border-gray-700 bg-white/5 backdrop-blur-xl 
  hover:bg-white/5"
              >
                Clear Strategy
              </Button>
            </div>
          </div>
          <div
            className="relative w-full rounded-3xl 
        bg-black px-10 py-8 space-y-6 overflow-hidden shadow-xl border border-gray-800"
          >
            {/* Blue blurred waves (background effects) */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/50 rounded-full blur-3xl"></div>

            <div className="flex items-center justify-between relative z-10">
              <button
                className="relative flex items-center px-4 py-2 rounded-lg 
            bg-black/30 border border-white/10 text-white text-sm
            shadow-md transition mb-8 shadow-blue-950"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <span className="text-2xl font-extralight">
                  <BsCodeSlash />
                </span>
              </button>
              <button
                className="relative flex items-center px-4 py-2 rounded-lg 
            bg-black/30 border border-white/10 text-white text-sm
            shadow-md transition mb-8 shadow-blue-950"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <span className="">Stage 2</span>
              </button>
            </div>

            <span className="text-lg font-semibold mb-4 relative z-10">
              Build
            </span>
            <p className="text-gray-300 text-sm relative z-10">
              Once the plan is ready, we transform your vision into a stunning,
              functional website. You’ll see progress in real-time, share
              feedback easily, and stay fully in the loop as your site takes
              shape.
            </p>

            <div className="space-x-4 relative z-10">
              <Button
                className="border border-gray-700 bg-white/5 backdrop-blur-xl 
  hover:bg-white/5"
              >
                Live Progress Updates
              </Button>
              <Button
                className="border border-gray-700 bg-white/5 backdrop-blur-xl 
  hover:bg-white/5"
              >
                Real-Time Feedback
              </Button>
            </div>
          </div>
          <div
            className="relative w-full rounded-3xl 
        bg-black px-10 py-8 space-y-6 overflow-hidden shadow-xl border border-gray-800"
          >
            {/* Blue blurred waves (background effects) */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/50 rounded-full blur-3xl"></div>

            <div className="flex items-center justify-between relative z-10">
              <button
                className="relative flex items-center px-4 py-2 rounded-lg 
            bg-black/30 border border-white/10 text-white text-sm
            shadow-md transition mb-8 shadow-blue-950"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <span className="text-2xl font-extralight">
                  <PiRocketLaunch />
                </span>
              </button>
              <button
                className="relative flex items-center px-4 py-2 rounded-lg 
            bg-black/30 border border-white/10 text-white text-sm
            shadow-md transition mb-8 shadow-blue-950"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <span className="">Stage 3</span>
              </button>
            </div>

            <span className="text-lg font-semibold mb-4 relative z-10">
              Launch
            </span>
            <p className="text-gray-300 text-sm relative z-10">
              After every detail is fine-tuned, we prep everything for a smooth,
              stress-free launch. You’ll walk away with all the tools, training,
              and support to keep your site thriving.
            </p>

            <div className="space-x-4 relative z-10">
              <Button
                className="border border-gray-700 bg-white/5 backdrop-blur-xl 
  hover:bg-white/5"
              >
                Handover Resources
              </Button>
              <Button
                className="border border-gray-700 bg-white/5 backdrop-blur-xl 
  hover:bg-white/5"
              >
                Easy Launch
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 w-full flex items-center justify-center mt-8 xl:mt-0">
          <div className="w-full px-2 py-2  bg-white/8 border-white/15 border rounded-4xl mb-6">
            <TextRevealCard
              text="Your Vision, Our Code"
              revealText="Design → Launch → Sell"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-8 " />
    </>
  );
};

export default WorkCards;
