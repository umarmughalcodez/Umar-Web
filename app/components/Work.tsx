"use client";
import BorderBtn from "./ui/BorderBtn";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import WorkCards from "./WorkCards";

export const Work = () => {
  return (
    <div
      id="strategy"
      className="w-full h-auto flex flex-col items-start justify-center mt-2 p-8 xl:p-26"
    >
      <BorderBtn text="How We Work?" />
      <div className="text-4xl text-white md:text-5xl w-full space-y-8 mt-4">
        <div className="font-semibold">
          <p>We Simplify Your Journey</p>
          <p>From Concept To Launch</p>
        </div>
        <p className="text-sm w-[70%] mb-8">
          We make it effortless to turn your vision into reality, guiding you
          every step of the way — from concept to a fully live website.
        </p>
      </div>
      <WorkCards />
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </div>
  );
};
