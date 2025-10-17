"use client";

import React from "react";
import { motion } from "framer-motion";
import BorderBtn from "./BorderBtn";
import ShinyButton from "../AnimatedBtn";
import { fadeRight, fadeUp } from "@/lib/animations";

const AnimatedGradientCard = () => {
  return (
    <div
      id="JoinUs"
      className=" w-full mt-10 grid place-items-center p-4 lg:p-16 xl:p-26 pb-12"
    >
      <div className="relative overflow-hidden rounded-2xl bg-black/60 text-black border border-white/30">
        {/* --- Stronger, More Visible Moving Gradient Lines --- */}
        <motion.div
          className="absolute top-1/3 left-0 w-[80%] h-[80px] blur-[80px]"
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
          className="absolute top-2/3 left-0 w-[140%] h-[200px] blur-[80px]"
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
        <div className="relative z-10 p-10 flex flex-col items-center text-center space-y-6 mt-2">
          {/* Small Button */}
          <BorderBtn text="Join Us Now" />

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            variants={fadeUp}
          >
            <p>Each Project we Undertake</p>
            <span className="text-black/980">is a Unique Opportunity.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-black/70 mb-6"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
          >
            Need a site but not sure where to start or want us to audit your
            website? <br />
            Let&apos;s map it out together on a free strategy call.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            variants={fadeRight}
          >
            <ShinyButton text="Book FREE Strategy Call" path="/schedule-call" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGradientCard;
