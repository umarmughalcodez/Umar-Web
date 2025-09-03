"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

const ScheduleCallPage = () => {
  const router = useRouter();
  return (
    <div className="w-full pt-44 flex items-center justify-center flex-col px-6 md:px-12 lg:px-16 text-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4 text-center"
      >
        Schedule Your Free Consultation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-center max-w-xl mb-8"
      >
        Pick a time that works for you. Once you book, the slot will be reserved
        and you’ll get a confirmation email with all the details.
      </motion.p>

      {/* Calendly Embed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full max-w-3xl bg-white/10 rounded-2xl shadow-lg p-4"
      >
        <iframe
          src="https://calendly.com/umar-umarweb/30min" // ⬅️ REPLACE with your Calendly link
          width="100%"
          height="700"
          style={{ border: "none", borderRadius: "20px" }}
          title="Schedule Call"
        />
      </motion.div>

      {/* Extra Tip */}
      <p className="text-gray-300 text-md mt-6">
        Can’t find a suitable time?{" "}
        <Button
          variant={"link"}
          effect={"hoverUnderline"}
          onClick={() => router.push("mailto:umar@umarweb.com")}
          className="text-blue-400 p-1 hover:underline"
        >
          Email me
        </Button>{" "}
        and we’ll work something out.
      </p>
    </div>
  );
};

export default ScheduleCallPage;
