// components/Hero.tsx
import { FaCalendarCheck } from "react-icons/fa";
import { Button } from "./ui/button";
import MovingBackground from "./ui/MovingBackground";

const Hero = () => {
  return (
    <section className="relative h-[110vh] text-white flex items-center sm:p-3 md:p-12 lg:p-32 p-5 mt-8">
      <div className="lg:w-[65%] md:w-[80%] sm:w-[90%] w-[80%]">
        <div className="mb-6 backdrop-blur-lg text-sm rounded-md border border-gray-700 py-3 w-[300px] text-white/85 ">
          <span className="bg-blue-600 rounded-md font-semibold p-2 mx-2">
            NEW
          </span>
          Trusted by businesses worldwide
        </div>
        <p className="sm:text-5xl md:text-7xl font-semibold text-4xl">
          Smart, Modern, & Powerful websites to grow your business
        </p>
        <p className="mt-8 w-[85%] text-gray-400">
          We specialize in developing custom websites and systems that reflect
          your brands identity and convert customers into sales.
        </p>
        <div className="mt-8 space-x-5">
          <Button className="text-black bg-white  hover:text-black hover:bg-gray-200 hover:cursor-pointer text-md">
            FREE Strategy Call
          </Button>
          <Button className=" hover:cursor-pointer hover:bg-gray-800 bg-gray-800 text-md">
            Website Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
