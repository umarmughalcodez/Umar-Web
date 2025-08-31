"use client";

import { useEffect, useRef, useCallback } from "react";

// Define the component's props for customization
interface MovingBackgroundProps {
  blueColor?: string; // e.g., "rgba(59, 130, 246, 0.5)"
  gradientSize?: string; // e.g., "80%"
  gradientBlur?: string; // e.g., "80px"
  followSpeed?: number; // Speed factor (e.g., 0.08). LOWER = SLOWER/SMOOTHER
}

const MovingBackground = ({
  blueColor = "rgba(59, 130, 246, 0.5)",
  gradientSize = "80%",
  gradientBlur = "80px",
  followSpeed = 0.006, // This controls the smoothness. 0.1 is smooth, 0.03 is very slow.
}: MovingBackgroundProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  // Use useRef to store values that we need to update on every frame
  // without causing re-renders.
  const targetX = useRef(50); // Target position (where the mouse is)
  const targetY = useRef(50);
  const currentX = useRef(50); // Current position (where the gradient is)
  const currentY = useRef(50);
  const rafId = useRef<number | null>(null); // To store our animation frame ID

  // This function smoothly interpolates between the current position and the target
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // The animation loop that runs every frame
  const animate = useCallback(() => {
    // Calculate the new current position by lerping towards the target
    currentX.current = lerp(currentX.current, targetX.current, followSpeed);
    currentY.current = lerp(currentY.current, targetY.current, followSpeed);

    // Update the gradient's position in the DOM
    if (gradientRef.current) {
      gradientRef.current.style.left = `calc(${currentX.current}% - (${gradientSize} / 2))`;
      gradientRef.current.style.top = `calc(${currentY.current}% - (${gradientSize} / 2))`;
    }

    // Keep the animation loop running
    rafId.current = requestAnimationFrame(animate);
  }, [followSpeed, gradientSize]); // Dependencies for useCallback

  // Set up the mouse listener and animation loop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update the target position on mouse move
      targetX.current = (e.clientX / window.innerWidth) * 100;
      targetY.current = (e.clientY / window.innerHeight) * 100;
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Start the animation loop
    rafId.current = requestAnimationFrame(animate);

    // Cleanup: remove listener and stop the animation loop
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [animate]); // animate is now a dependency

  return (
    <div className="fixed inset-0 overflow-hidden bg-black -z-10">
      {/* The moving gradient element */}
      <div
        ref={gradientRef}
        className="absolute opacity-50 rounded-full" // Using rounded-full for a softer circle
        style={{
          width: gradientSize,
          height: gradientSize,
          filter: `blur(${gradientBlur})`,
          left: `calc(50% - (${gradientSize} / 2))`, // Start in the center
          top: `calc(50% - (${gradientSize} / 2))`,
          backgroundColor: blueColor,
          backgroundImage: `radial-gradient(circle, ${blueColor} 0%, transparent 70%)`,
          // Transition is removed as the animation is now handled by JS
        }}
      />
    </div>
  );
};

export default MovingBackground;
