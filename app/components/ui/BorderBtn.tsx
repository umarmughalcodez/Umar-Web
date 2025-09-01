"use client";
import React from "react";

const BorderBtn = ({ text }: { text: string }) => {
  return (
    <button
      className="relative flex items-center gap-2 px-4 py-2 rounded-lg 
        bg-black/30 border border-white/10 text-white text-sm
        shadow-md transition mb-12"
    >
      {/* Blue top highlight */}
      <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      {/* Bullet dot */}
      <span className="w-2 h-2 rounded-full bg-white"></span>
      {/* Text */}
      <span>{text}</span>
    </button>
  );
};

export default BorderBtn;
