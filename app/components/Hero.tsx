"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import LightRays from "@/components/LightRays";
import Aurora from "./ui/Aurora";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <section
        id="home"
        className="relative h-[100vh] text-white flex items-center sm:p-3 md:p-12 lg:py-10 lg:px-26 p-5"
      >
        {/* Background (behind everything) */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#0840b9", "#2563EB", "#0840b9"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
            // className="custom-rays w-full  h-full"
          />
        </div>

        {/* Content (on top) */}
        <div className="lg:w-[65%] md:w-[80%] sm:w-[90%] w-[80%] mt-6">
          <div className="mb-12 backdrop-blur-lg text-sm rounded-md border border-white/30 py-3 w-[300px] text-white/85">
            <span className="bg-blue-600  rounded-sm font-semibold p-2 mx-2">
              NEW
            </span>
            Trusted by businesses worldwide
          </div>

          <p className="sm:text-5xl md:text-7xl font-semibold text-4xl mt-4">
            Smart, Modern, & Powerful websites to grow your business
          </p>

          <p className="mt-8 w-[85%] text-gray-400">
            We specialize in developing custom websites and systems that reflect
            your brands identity and convert customers into sales.
          </p>

          <div className="mt-8 space-x-5">
            <Button
              className=" bg-blue-600 hover:bg-blue-600 hover:cursor-pointer text-md text-white border border-white/30 font-semibold"
              onClick={() => router.push("/schedule-call")}
              effect={"shineHover"}
            >
              FREE Strategy Call
            </Button>
            <Button
              effect={"shineHover"}
              className="hover:cursor-pointer  bg-black/50 text-md border border-white/30 hover:bg-black/50 font-semibold"
              onClick={() => router.push("#strategy")}
            >
              Our Process
            </Button>
          </div>
        </div>
      </section>
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </>
  );
};

export default Hero;
