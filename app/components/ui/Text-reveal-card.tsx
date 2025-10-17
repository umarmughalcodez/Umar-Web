"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setLocalWidth(rect.width);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMove = (clientX: number) => {
    if (cardRef.current && localWidth > 0) {
      const rect = cardRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const newWidth = Math.max(0, Math.min(100, (relativeX / localWidth) * 100));
      setWidthPercentage(newWidth);
    }
  };

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div className="flex flex-col items-center">
      <div
        ref={cardRef}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => {
          setIsMouseOver(false);
          setWidthPercentage(0);
        }}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={() => setIsMouseOver(true)}
        onTouchEnd={() => {
          setIsMouseOver(false);
          setWidthPercentage(0);
        }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        className={cn(
          "relative w-full rounded-3xl p-6 sm:p-8 overflow-hidden bg-gradient-to-br from-[#f6fff9] to-[#e7fbee] border border-green-300 shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.45)]",
          className
        )}
      >
        {/* Soft glow paw-shaped highlights */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#d1fadf] rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#bbf7d0] rounded-full blur-3xl opacity-70"></div>

        {children}

        <div className="h-32 sm:h-40 relative flex items-center justify-center overflow-hidden z-10">
          {/* Reveal Text */}
          <motion.div
            style={{ width: "100%" }}
            animate={{
              opacity: isMouseOver && widthPercentage > 0 ? 1 : 0,
              clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
            }}
            transition={{ duration: isMouseOver ? 0 : 0.4 }}
            className="absolute backdrop-blur-md z-20 flex items-center justify-center"
          >
            <p
              style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}
              className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] py-6 sm:py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-green-500 text-center w-full"
            >
              {revealText}
            </p>
          </motion.div>

          {/* Grooming wand (scanner) bar */}
          <motion.div
            animate={{
              left: `${widthPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: widthPercentage > 0 ? 1 : 0,
            }}
            transition={{ duration: isMouseOver ? 0 : 0.4 }}
            className="h-32 sm:h-40 w-[6px] sm:w-[8px] bg-gradient-to-b from-transparent via-green-400 to-transparent absolute z-50"
          ></motion.div>

          {/* Base text */}
          <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] w-full flex items-center justify-center">
            <p className="text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] py-6 sm:py-10 font-bold text-[#27af30] text-center w-full">
              {text}
            </p>
            <MemoizedStars />
          </div>
        </div>
      </div>

      {isMobile && (
        <p className="text-xs text-green-500 mt-2 text-center">
          Swipe to see the magic 🐾
        </p>
      )}
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={twMerge("text-green-800 text-lg mb-2 text-center font-semibold", className)}>
    {children}
  </h2>
);

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={twMerge("text-[#6b7280] text-center text-sm", className)}>
    {children}
  </p>
);

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(60)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `3px`,
            height: `3px`,
            backgroundColor: "#16A34A",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
