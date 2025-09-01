"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface InfiniteCardsProps {
  images: string[];
  texts: string[];
  descriptions: string[];
  duration?: number;
}

export default function InfiniteCards({
  images,
  texts,
  duration = 100,
  descriptions,
}: InfiniteCardsProps) {
  const combinedData = images.map((img, i) => ({
    image: img,
    text: texts[i] || "",
    description: descriptions[i] || "",
  }));

  const scrollingData = [...combinedData, ...combinedData];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Left smooth fade with blur */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10">
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent backdrop-blur-md"
          style={{
            mask: "linear-gradient(to right, black 0%, transparent 100%)",
            WebkitMask: "linear-gradient(to right, black 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Right smooth fade with blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10">
        <div
          className="absolute inset-0 bg-gradient-to-l from-gray-950/95 via-gray-950/60 to-transparent backdrop-blur-md"
          style={{
            mask: "linear-gradient(to left, black 0%, transparent 100%)",
            WebkitMask: "linear-gradient(to left, black 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Scrolling container */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ width: "max-content" }}
      >
        {scrollingData.map((item, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-[28rem] h-[34rem] overflow-hidden rounded-2xl shadow-lg border-8 border-gray-900"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.text}
              fill
              className="object-cover"
            />

            {/* Bottom blurred border */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-md" />

            {/* Content Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-black/90 backdrop-blur-sm p-5 text-gray-100 rounded-2xl">
              <p className="text-xl font-semibold mb-2">{item.text}</p>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3" />

              <span className="text-gray-300 space-y-2">
                <p>{item.description}</p>
                <Button
                  // disabled
                  className="border border-gray-600 mt-1 text-gray-200"
                >
                  New Addition
                </Button>
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
