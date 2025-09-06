"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Aurora from "@/components/Aurora";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();
  const words = [
    "Powerful",
    "Fast",
    "Reliable",
    "Secure",
    "SEO-Optimized",
    "Mobile-Friendly",
    "Optimized",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen text-white flex items-center px-5 sm:px-6 md:px-12 lg:px-24 pt-26 md:pt-32 pb-12"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#0840b9", "#2563EB", "#0840b9"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Content */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8 backdrop-blur-lg text-xs md:text-sm rounded-md border border-white/30 py-2 px-4 inline-flex items-center text-white/85"
            variants={fadeUp}
          >
            <span className="bg-blue-600 rounded-sm font-semibold px-2 py-1 mr-2">
              NEW
            </span>
            Trusted by businesses worldwide
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={fadeUp}
          >
            Smart, Modern, & <br />
            <FlipWords words={words} className="text-blue-500" /> <br />
            Websites to grow your business
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl"
            variants={fadeRight}
          >
            We specialize in developing custom websites and systems that reflect
            your brand’s identity and convert customers into sales.
          </motion.p>

          {/* Buttons */}
          {/* <div className="mt-8 flex flex-wrap gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-base md:text-md text-white border border-white/30 font-semibold md:px-6 md:py-3 px-4 py-2"
              onClick={() => router.push("/schedule-call")}
              effect={"shineHover"}
            >
              FREE Strategy Call
            </Button>
            <Button
              effect={"shineHover"}
              className="bg-black/50 hover:bg-black/60 text-md border border-white/30 font-semibold px-6 py-3"
              onClick={() => router.push("#strategy")}
            >
              Our Process
            </Button>
          </div> */}
          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={fadeRight}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base md:text-md text-white border border-white/30 font-semibold px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3"
              onClick={() => router.push("/schedule-call")}
              effect={"shineHover"}
            >
              FREE Strategy Call
            </Button>
            <Button
              effect={"shineHover"}
              className="bg-black/50 hover:bg-black/60 text-sm sm:text-base md:text-md border border-white/30 font-semibold px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3"
              onClick={() => router.push("/#strategy")}
            >
              Our Process
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-[90%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </>
  );
};

export default Hero;
