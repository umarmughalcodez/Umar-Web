"use client";
import React from "react";
import verify from "@/public/verify.png";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { HiBadgeCheck } from "react-icons/hi";
import { FaCircleCheck } from "react-icons/fa6";
import { BsCheck2Circle, BsPatchCheck } from "react-icons/bs";
import { PiSealCheck, PiSealCheckBold, PiSealCheckFill } from "react-icons/pi";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import img from "@/public/image to use.jpeg";
import ShinyButton from "./AnimatedBtn";
import { IoStar } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full h-auto flex flex-col items-center p-5 xl:py-14 xl:px-26 text-white lg:flex-row justify-center space-x-3 space-y-8 mb-4"
      >
        <div className="lg:w-1/2 w-[90%]">
          <button
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg 
      bg-black/30 border border-white/10 text-white text-sm
      shadow-md transition"
          >
            {/* Blue top highlight */}
            <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            {/* Bullet dot */}
            <span className="w-2 h-2 rounded-full bg-white"></span>

            {/* Text */}
            <span>About Umar</span>
          </button>
          <div className="mt-12">
            <div className="md:text-5xl text-4xl font-semibold mb-8">
              <p>Building Trustworthy Brands</p>
              <p>Delivering Results!</p>
            </div>
            <div className="text-gray-400">
              <p>Delivering high-quality designs with strategic impact.</p>
              <p className=""> Elevate your digital presence in style.</p>
            </div>
            <div className="flex items-center justify-start min-h-[40px] ">
              <div className="w-[40%] h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3" />
            </div>
            <div className="flex space-x-3 mt-2 mb-5">
              <PiSealCheck className="text-green-500 text-2xl" />
              <span>Experienced Web Developer</span>
            </div>
            <div className="flex space-x-3 mt-2 mb-12">
              <PiSealCheck className="text-green-500 text-2xl" />
              <span>Proven Track Record of Driving Online Growth</span>
            </div>
          </div>
          <div className="my-4 flex space-x-6 ">
            <ShinyButton text="Book Consultation Call" path="/schedule-call" />

            <div className="h-[40px] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            <div className="flex-col text-white space-y-2 text-center ">
              <span className="flex space-x-1 text-white text-lg">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="text-sm ">56+ Reviews</span>
            </div>
            <div className="h-[40px] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            <div className="text-center  flex-col flex">
              <span className="font-semibold">3+ Years</span>
              <span className="text-sm">Experience</span>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-1/2 h-auto relative mb-12 flex items-center justify-center p-3 bg-white/20 rounded-4xl border-2 border-[#686868]">
          <Image
            src={img}
            alt="Umar's Image"
            className="object-contain rounded-4xl border-2 border-[#686868]"
          />
        </div>
      </div>
      <div className="w-[90%] h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-7" />
    </>
  );
};

export default About;
