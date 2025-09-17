"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LucideBell } from "lucide-react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeRight } from "@/lib/animations";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex =
      /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

    if (!email) {
      toast.error("Email is required", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "12px 16px",
          borderRadius: "8px",
        },
        iconTheme: { primary: "#ef4444", secondary: "#1a1a1a" },
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email ID", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "12px 16px",
          borderRadius: "8px",
        },
        iconTheme: { primary: "#ef4444", secondary: "#1a1a1a" },
      });
      setEmail("");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby11X5LI7VTNXjZEE9Ce-R0vPywM4GQ67sx3DIkJ7oXOyXILeCRw-bXFiFIN6Ve7xoV/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify({ email }),
        }
      );

      toast.success("Subscribed successfully!", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "12px 16px",
          borderRadius: "8px",
        },
        iconTheme: { primary: "#22c55e", secondary: "#1a1a1a" },
      });
      setEmail("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Error subscribing. Please try again later.");
      }
    }
  };

  return (
    <footer className="w-full px-12 xl:px-30 lg:px-26 py-10 border-t-2 border-t-white/40 text-white bg-black/10 mt-12">
      <Toaster />
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 space-y-6">
          {/* Logo */}
          <div>
            <div className="relative w-[180px] md:w-[200px] h-[40px] md:h-[50px]">
              <Image
                src={logo}
                alt="Umar Web Logo"
                className="object-cover cursor-pointer"
                fill
                onClick={() => router.push("/#home")}
              />
            </div>
            <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-6" />
          </div>

          {/* Email Subscription */}
          <div className="font-semibold text-2xl mt-6">
            Be the First to Know
          </div>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ willChange: "transform, opacity" }}
            variants={fadeRight}
            transition={{ duration: 0.5 }}
            className="flex items-center bg-black/40 rounded-xl overflow-hidden border border-white/30 px-1 py-1 pl-3 pr-1 justify-center max-w-md"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Enter Your Email..."
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none 
              text-xs sm:text-sm md:text-sm"
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
              text-xs sm:text-sm md:text-base px-2 md:px-3 py-0"
              iconPlacement="right"
              icon={LucideBell}
            >
              Subscribe
            </Button>
          </motion.form>
          <div className="flex items-center">
            Or Feel Free to{" "}
            <Button
              onClick={() => router.push("mailto:umar@umarweb.com")}
              variant={"link"}
              effect={"hoverUnderline"}
              className="text-blue-500 hover:text-blue-400 hover:cursor-pointer p-0 mx-2 text-base"
            >
              Email Us &#8599;
            </Button>
          </div>
        </div>

        {/* Middle Section (Navigation Links) */}
        <motion.div
          className="flex gap-16 lg:gap-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ willChange: "transform, opacity" }}
          variants={fadeRight}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col space-y-1 text-white/75 items-start justify-center">
            <p className="font-semibold text-white mb-2">Navigations</p>
            <Button
              variant="link"
              effect="hoverUnderline"
              onClick={() => router.push("/#about")}
              className="p-0"
            >
              About
            </Button>
            <Button
              variant="link"
              effect="hoverUnderline"
              onClick={() => router.push("/#projects")}
              className="p-0"
            >
              Projects
            </Button>
            <Button
              variant="link"
              className="p-0"
              effect="hoverUnderline"
              onClick={() => router.push("/#strategy")}
            >
              Strategy
            </Button>
            <Button
              variant="link"
              className="p-0"
              effect="hoverUnderline"
              onClick={() => router.push("/#testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="link"
              effect="hoverUnderline"
              onClick={() => router.push("/#FAQ")}
              className="p-0"
            >
              FAQ&apos;s
            </Button>
            <Button
              onClick={() => router.push("/schedule-call")}
              variant="link"
              effect="hoverUnderline"
              className="text-blue-500 p-0 hover:text-blue-400"
            >
              Schedule Free Call &#8599;
            </Button>
          </div>

          <motion.div
            className="flex flex-col text-white/75 items-start "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            variants={fadeRight}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-white mb-2">Socials</p>
            <Button
              className="p-0"
              variant="link"
              effect="hoverUnderline"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/umarwebofficial/",
                  "_blank"
                )
              }
            >
              Instagram
            </Button>
          </motion.div>
        </motion.div>
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
