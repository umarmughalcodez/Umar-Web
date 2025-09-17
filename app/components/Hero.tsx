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
    "SEO-Ready",
    "Mobile-First",
    "Scalable",
    "Responsive",
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
        className="relative min-h-screen text-white flex items-center px-6 sm:px-7 md:px-12 lg:px-24 pt-26 md:pt-32 pb-12"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#0840b9", "#2563EB", "#0840b9"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </div>

        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div
            className="mb-8 backdrop-blur-lg text-xs md:text-sm rounded-md border border-white/30 py-1 pr-2 pl-2 inline-flex items-center text-white/85"
            variants={fadeUp}
          >
            <span className="bg-blue-600 rounded-sm font-semibold px-2 py-2 mr-2">
              NEW
            </span>
            Trusted by businesses worldwide
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
            variants={fadeUp}
          >
            Smart, Modern, & <br />
            <FlipWords words={words} className="text-blue-500" /> <br />
            Websites to grow your business
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-base sm:text-md md:text-lg text-gray-300 max-w-xl"
            variants={fadeRight}
          >
            We specialize in developing custom websites and systems that reflect
            your brand’s identity and convert customers into sales.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={fadeRight}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-sm  md:text-md text-white border border-white/30 font-semibold px-3 py-2 md:px-4 md:py-2"
              onClick={() => router.push("/schedule-call")}
              effect={"shineHover"}
            >
              FREE Strategy Call
            </Button>
            <Button
              effect={"shineHover"}
              className="bg-black/50 hover:bg-black/60 text-sm md:text-md border border-white/30 font-semibold px-3 py-2 md:px-4 md:py-2"
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
