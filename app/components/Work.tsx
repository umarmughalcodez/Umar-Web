"use client";
import BorderBtn from "./ui/BorderBtn";
import { motion } from "framer-motion";
import WorkCards from "./WorkCards";
import { fadeRight, fadeUp } from "@/lib/animations";
import { FaPaw } from "react-icons/fa";

export const Work = () => {
  return (
    <div
      id="strategy"
      className="w-full h-auto flex flex-col items-start justify-center mt-2 px-8 py-4 xl:p-26 bg-gradient-to-b from-white to-green-50"
    >
      <BorderBtn text="How We Work?" />

      {/* HEADER SECTION */}
      <motion.div
        className="text-4xl text-black md:text-5xl w-full space-y-8 mt-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeRight}
      >
        <div className="font-semibold">
          <p className="text-gray-800 flex items-center gap-2">
            We Groom Your Online Presence{" "}
            <FaPaw className="text-green-600 w-6 h-6" />
          </p>
          <p className="text-green-600">Step by Step — Paw by Paw</p>
        </div>
        <p className="text-sm md:text-base text-gray-700 w-[90%] md:w-[70%] mb-8 leading-relaxed">
          Every pet deserves love, and every grooming business deserves a
          website that reflects it. We make the process effortless — from your
          first idea to your fully launched site, we take care of every step so
          you can focus on wagging tails and happy clients.
        </p>
      </motion.div>

      {/* WORK CARDS */}
      <motion.div variants={fadeUp}>
        <WorkCards />
      </motion.div>

      {/* DIVIDER LINE */}
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mt-10" />
    </div>
  );
};
