// components/ui/MovingBackground.tsx
"use client";

import { useEffect, useRef, useCallback } from "react";

interface MovingBackgroundProps {
  blueColor?: string;
  gradientSize?: string;
  gradientBlur?: string;
  followSpeed?: number;
  className?: string; // allow passing custom classes
}

const MovingBackground = ({
  blueColor = "rgba(59, 130, 246, 0.5)",
  gradientSize = "90%",
  gradientBlur = "80px",
  followSpeed = 0.01,
  className = "",
}: MovingBackgroundProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  const targetX = useRef(50);
  const targetY = useRef(50);
  const currentX = useRef(50);
  const currentY = useRef(50);
  const rafId = useRef<number | null>(null);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = useCallback(() => {
    currentX.current = lerp(currentX.current, targetX.current, followSpeed);
    currentY.current = lerp(currentY.current, targetY.current, followSpeed);

    if (gradientRef.current) {
      gradientRef.current.style.left = `calc(${currentX.current}% - (${gradientSize} / 2))`;
      gradientRef.current.style.top = `calc(${currentY.current}% - (${gradientSize} / 2))`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, [followSpeed, gradientSize]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetX.current = (e.clientX / window.innerWidth) * 100;
      targetY.current = (e.clientY / window.innerHeight) * 100;
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-black -z-10 ${className}`}
    >
      <div
        ref={gradientRef}
        className="absolute opacity-50 rounded-full"
        style={{
          width: gradientSize,
          height: gradientSize,
          filter: `blur(${gradientBlur})`,
          left: `calc(50% - (${gradientSize} / 2))`,
          top: `calc(50% - (${gradientSize} / 2))`,
          backgroundColor: blueColor,
          backgroundImage: `radial-gradient(circle, ${blueColor} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default MovingBackground;
