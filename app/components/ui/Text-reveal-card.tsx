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

  // Update dimensions on mount and resize
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
      const newWidth = Math.max(
        0,
        Math.min(100, (relativeX / localWidth) * 100)
      );
      setWidthPercentage(newWidth);
    }
  };

  const mouseMoveHandler = (event: React.MouseEvent) => {
    handleMove(event.clientX);
  };

  const touchMoveHandler = (event: React.TouchEvent<HTMLDivElement>) => {
    handleMove(event.touches[0].clientX);
  };

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      onMouseMove={mouseMoveHandler}
      onTouchStart={() => setIsMouseOver(true)}
      onTouchEnd={() => {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      onTouchMove={touchMoveHandler}
      className={cn(
        "relative w-full rounded-3xl p-6 sm:p-8 overflow-hidden bg-black border border-white/15 shadow-xl text-center",
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-600/50 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 sm:w-48 sm:h-48 bg-blue-600/50 rounded-full blur-3xl"></div>

      {children}

      <div className="h-32 sm:h-40 relative flex items-center overflow-hidden z-10 text-center">
        {/* Reveal Text */}
        <motion.div
          style={{ width: "100%" }}
          animate={{
            opacity: isMouseOver && widthPercentage > 0 ? 1 : 0,
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="absolute backdrop-blur-md z-20"
        >
          <p
            style={{ textShadow: "4px 4px 15px rgba(0,0,0,0.5)" }}
            className="text-lg sm:text-[2.5rem] md:text-[3rem] py-6 sm:py-10 font-bold text-white bg-clip-text bg-gradient-to-b from-white to-neutral-100"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Vertical "scanner" bar */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="h-32 sm:h-40 w-[6px] sm:w-[8px] bg-gradient-to-b from-transparent via-blue-500 to-transparent absolute z-50"
        ></motion.div>

        {/* Base text */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-lg sm:text-[2.5rem] md:text-[3rem] py-6 sm:py-10 font-bold bg-clip-text text-transparent bg-[#969696]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
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
  <h2 className={twMerge("text-white text-lg mb-2", className)}>{children}</h2>
);

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={twMerge("text-[#a9a9a9] text-center text-sm", className)}>
    {children}
  </p>
);

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
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
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
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
