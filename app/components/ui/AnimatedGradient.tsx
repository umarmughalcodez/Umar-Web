"use client";

import React from "react";
import { motion } from "framer-motion";
import BorderBtn from "./BorderBtn";
import ShinyButton from "../AnimatedBtn";

const AnimatedGradientCard = () => {
  return (
    <div
      id="JoinUs"
      className=" w-full mt-10 grid place-items-center p-4 lg:p-16 xl:p-26"
    >
      <div className="relative overflow-hidden rounded-2xl bg-black text-white border border-white/50">
        {/* --- Stronger, More Visible Moving Gradient Lines --- */}
        <motion.div
          className="absolute top-1/3 left-0 w-[140%] h-[180px] blur-[180px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(30,64,175,0) 0%, rgba(30,64,175,1) 50%, rgba(30,64,175,0) 100%)",
          }}
          animate={{
            x: ["-40%", "40%", "-40%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-2/3 left-0 w-[140%] h-[200px] blur-[200px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,1) 50%, rgba(59,130,246,0) 100%)",
          }}
          animate={{
            x: ["40%", "-40%", "40%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* --- Foreground Content --- */}
        <div className="relative z-10 p-10 flex flex-col items-center text-center space-y-6">
          {/* Small Button */}
          <BorderBtn text="Join Us Now" />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            <p>Each Project we Undertake</p>
            <span className="text-white/980">is a Unique Opportunity.</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/70 mb-6">
            Need a site but not sure where to start or want us to audit your
            website? <br />
            Let's map it out together on a free strategy call.
          </p>

          {/* Call to Action Button */}
          <ShinyButton text="Book FREE Strategy Call" path="/schedule-call" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedGradientCard;
