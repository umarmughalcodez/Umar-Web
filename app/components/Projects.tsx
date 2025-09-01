"use client";
import React from "react";
import InfiniteCards from "./InfiniteCards";
import { LampContainer } from "./ui/lamp";

const Projects = () => {
  // Use root-relative paths (works with next/image)
  const images = [
    "/AI.png",
    "/Feebany Contels.png",
    "/Saas.png",
    "/Services Pricings.png",
    "/digital marketing.png",
  ];

  const texts = [
    "Nucleon AI",
    "Restaurant",
    "SaaS",
    "Plumbing",
    "Digital Marketing",
  ];

  const description = [
    "Drives enterprise sign-ups by demystifying complex AI tools",
    "Increased order volume with a simplified menu and loyalty program",

    "Streamlines user onboarding and drives subscription growth with a friction-free experience",
    "Secures emergency calls with a prominent, trust-building booking widget",
    "Converts web traffic into a consistent lead generation pipeline",
  ];

  return (
    <div className="mt-6 flex flex-col items-center justify-center w-full h-auto space-y-8 ">
      <div className="p-4 lg:p-12 grid place-items-center">
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
          <span>Launch Your Website</span>
        </button>

        <div className="text-4xl font-semibold text-gray-100 mt-3 text-center md:text-5xl">
          <p>Reliable Agency Partner</p>
          <p>For Startups & Growing Businesses</p>
          <p className="text-sm text-gray-400 font-normal mt-8">
            Launch your website quickly with expert setup and dedicated support.
          </p>
        </div>

        {/* Pass props correctly */}
      </div>
      <InfiniteCards images={images} texts={texts} descriptions={description} />
    </div>
  );
};

export default Projects;
