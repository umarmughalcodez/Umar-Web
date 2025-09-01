"use client";
import React from "react";
import InfiniteCards from "./InfiniteCards";
import { LampContainer } from "./ui/lamp";
import BorderBtn from "./ui/BorderBtn";

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
    <div className=" flex flex-col items-center justify-center w-full h-auto space-y-8 ">
      <div className="p-4 lg:p-12 grid place-items-center">
        <BorderBtn text="Launch Your Website" />

        <div className="text-4xl font-semibold text-gray-100 mt-3 text-center md:text-5xl mb-2">
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
