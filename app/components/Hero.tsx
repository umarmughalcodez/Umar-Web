"use client";
import { FaCalendarCheck, FaPhone } from "react-icons/fa";
import { Button } from "./ui/button";
import MovingBackground from "./ui/MovingBackground";
import { BsFillPhoneLandscapeFill } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <section
        id="home"
        className="relative h-[110vh] text-white flex items-center sm:p-3 md:p-12 lg:py-10 lg:px-26 p-5 mt-8"
      >
        <div className="lg:w-[65%] md:w-[80%] sm:w-[90%] w-[80%]">
          <div className="mb-12 backdrop-blur-lg text-sm rounded-md border border-gray-700 py-3 w-[300px] text-white/85">
            <span className="bg-blue-600 rounded-sm font-semibold p-2 mx-2">
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
              className="text-black bg-white  hover:text-black hover:bg-gray-200 hover:cursor-pointer text-md font-semibold"
              onClick={() => router.push("/schedule-call")}
            >
              FREE Strategy Call
            </Button>
            <Button
              className=" hover:cursor-pointer hover:bg-gray-800 bg-black/50 text-md border border-white/30 font-semibold"
              onClick={() => router.push("#strategy")}
            >
              Our Process
            </Button>
          </div>
        </div>
      </section>
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-7" />
    </>
  );
};

export default Hero;
