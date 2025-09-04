"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LucideBell } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo_resized-removebg-preview.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex =
      /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby11X5LI7VTNXjZEE9Ce-R0vPywM4GQ67sx3DIkJ7oXOyXILeCRw-bXFiFIN6Ve7xoV/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({ email }),
        }
      );

      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      toast.error("Error subscribing. Please try again later.");
    }
  };

  return (
    <footer className="w-full px-16 xl:px-30 lg:px-26 py-10 border-t-2 border-t-white/40 text-white bg-black/10 mt-12">
      <Toaster />
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">
        {/* Left Section (Logo + Email Subscription) */}
        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 space-y-6">
          {/* Logo */}
          <div>
            <div className="relative w-[180px] md:w-[200px] h-[40px] md:h-[50px]">
              <Image
                src={logo}
                alt="Umar Web Logo"
                className="object-cover cursor-pointer"
                fill
                onClick={() => router.push("#home")}
              />
            </div>

            <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-3" />
          </div>

          {/* Email Subscription */}
          <form
            className="flex items-center bg-black/40 rounded-xl overflow-hidden border border-white/30 px-1 py-1 pl-3 justify-center max-w-sm"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Enter Your Email..."
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none 
              text-sm sm:text-base md:text-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              variant="default"
              effect="expandIcon"
              className="text-white cursor-pointer bg-blue-700 hover:bg-blue-600 
              shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:shadow-[0_0_30px_rgba(59,130,246,1)] 
              transition-all duration-300 font-semibold
              text-sm sm:text-base md:text-md px-2 md:px-3 py-0"
              iconPlacement="right"
              icon={LucideBell}
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Middle Section (Navigation Links) */}
        <div className="flex gap-20 lg:gap-30">
          <div className="flex flex-col space-y-1 text-white/75 items-start justify-center">
            <p className="font-semibold text-white mb-2">Navigations</p>

            {/* Internal Smooth Scroll Buttons */}
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("/#about")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              About
            </Button>
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("/#projects")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              Projects
            </Button>
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("/#strategy")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              Strategy
            </Button>
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("/#testimonials")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              Testimonials
            </Button>
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("/#FAQ")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              FAQ's
            </Button>

            {/* External/Next.js Navigation */}
            <Button
              onClick={() => router.push("/schedule-call")}
              variant={"link"}
              effect={"hoverUnderline"}
              className="text-left text-blue-500 hover:text-blue-400 transition p-0 m-0"
            >
              Schedule Free Call
            </Button>
          </div>

          <div className="flex flex-col space-y-2 text-white/75">
            <p className="font-semibold text-white mb-2">Socials</p>
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("#FAQ")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              Instagram
            </Button>
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("/#FAQ")}
              className="text-left text-white/75 hover:text-white transition p-0 m-0"
            >
              Facebook
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} UmarWeb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
