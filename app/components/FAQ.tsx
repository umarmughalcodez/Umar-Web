import React from "react";
import BorderBtn from "./ui/BorderBtn";
import FAQ from "./ui/FAQComponent";

const FAQSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 lg:p-16 xl:p-26 w-full mt-10 mb-10">
        <div className="w-[95%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-16 mt-4" />
        <BorderBtn text="FAQ" />
        <div className="text-4xl md:text-5xl mt-3 text-white font-semibold space-y-3 text-center">
          <p>Frequently</p>
          <p className="text-white/70">Asked Questions</p>
          <span className="text-white/50 text-sm mb-6 mt-4 max-w-xs font-normal ">
            Have inquiries? Our FAQ section has you covered with quick answers
            to the most common questions.
          </span>
        </div>
        <FAQ />
      </div>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3 text-white/10" />
    </>
  );
};

export default FAQSection;
