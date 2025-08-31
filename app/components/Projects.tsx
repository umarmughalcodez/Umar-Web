"use client";
import React from "react";

const Projects = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center w-full h-[100vh] space-y-8 p-4 lg:p-12">
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
    </div>
  );
};

export default Projects;
