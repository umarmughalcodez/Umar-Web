"use client";
import BorderBtn from "./ui/BorderBtn";
import { motion } from "framer-motion";
import WorkCards from "./WorkCards";
import { fadeRight, fadeUp } from "@/lib/animations";

export const Work = () => {
  return (
    <div
      id="strategy"
      className="w-full h-auto flex flex-col items-start justify-center mt-2 px-8 py-4 xl:p-26"
    >
      <BorderBtn text="How We Work?" />
      <motion.div
        className="text-4xl text-black md:text-5xl w-full space-y-8 mt-4"
        initial="hidden"
        whileInView={"visible"}
        variants={fadeRight}
      >
        <div className="font-semibold">
          <p>We Simplify Your Journey</p>
          <p>From Concept To Launch</p>
        </div>
        <p className="text-sm w-[70%] mb-8">
          We make it effortless to turn your vision into reality, guiding you
          every step of the way — from concept to a fully live website.
        </p>
      </motion.div>
      <motion.div variants={fadeUp}>
        <WorkCards />
      </motion.div>
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </div>
  );
};
