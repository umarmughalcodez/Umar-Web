"use client";

import Image from "next/image";
import img from "@/public/hero.jpg"; // your hero image
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16 bg-white mt-16"
    >
      {/* LEFT TEXT SECTION */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div
          className="mb-6 text-xs md:text-sm rounded-md bg-white/50 backdrop-blur-sm py-1 px-3 inline-flex items-center text-black border border-gray-200"
          variants={fadeUp}
        >
          <span className="bg-green-600 rounded-sm font-semibold px-2 py-1 mr-2 text-white">
            NEW
          </span>
          Trusted by businesses worldwide
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
          variants={fadeUp}
        >
          AMERICA&apos;S <span className="text-green-600">BEST</span> WEB DESIGN
          AGENCY <br /> FOR <span className="text-green-600">PET GROOMERS</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg text-gray-700 max-w-md"
          variants={fadeRight}
        >
          We specialize in developing custom websites and systems that reflect
          your brand’s identity and convert customers into loyal clients.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          variants={fadeRight}
        >
          <Button
            className="bg-green-600 hover:bg-green-700 text-sm md:text-md text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow"
            onClick={() => router.push("/schedule-call")}
          >
            FREE Strategy Call
          </Button>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-sm md:text-md text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow"
            onClick={() => router.push("/#strategy")}
          >
            Request Demo Site
          </Button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-[300px] sm:h-[400px] md:h-[500px]">
          <Image
            src={img}
            alt="Pet Grooming Hero"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
