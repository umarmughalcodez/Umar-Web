"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/Before After redesign.png";

const Redesign = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Image
        src={img}
        alt="Before After Redesign"
        className="w-full h-auto object-contain mt-36"
        priority
      />
    </div>
  );
};

export default Redesign;
