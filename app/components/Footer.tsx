import React from "react";
import { Button } from "./ui/button";
import { LucideBell } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-10 sm:px-20 py-10 border-t-2 border-t-white/40 text-white bg-black/70 mt-12">
      {/* Main Layout - stacks on mobile, row on large screens */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">
        {/* Left Section (Logo + Email Subscription) */}
        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 space-y-6">
          {/* Logo */}
          <div>
            <p className="text-4xl sm:text-5xl font-bold">Logo</p>
            <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-3" />
          </div>

          {/* Email Subscription */}
          <div className="flex items-center bg-black/40 rounded-xl overflow-hidden border border-white/30 px-1 py-1 pl-3 justify-center max-w-lg">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none 
              text-sm sm:text-base md:text-lg"
            />
            <Button
              variant="default"
              effect="expandIcon"
              className="text-white cursor-pointer bg-blue-700 hover:bg-blue-600 
              shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:shadow-[0_0_30px_rgba(59,130,246,1)] 
              transition-all duration-300 font-semibold
              text-sm sm:text-base md:text-lg px-4 md:px-6 py-2 md:py-3"
              iconPlacement="right"
              icon={LucideBell}
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Middle Section (Navigation Links) */}
        <div className="flex gap-10 lg:gap-16">
          <div className="flex flex-col space-y-1 text-white/60 ">
            <p className="font-semibold text-white mb-2">Navigations</p>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#strategy">Strategy</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#FAQ">FAQ's</Link>
            <Link href="/schedule-call" className="text-blue-500">
              Schedule Free Call
            </Link>
          </div>

          <div className="flex flex-col space-y-1 text-white/60 ">
            <p className="font-semibold text-white mb-2">Socials</p>
            <Link href="/instagram">Instagram</Link>
            <Link href="/facebook">Facebook</Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />

      {/* Bottom Section (Copyright) */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} UmarWeb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
