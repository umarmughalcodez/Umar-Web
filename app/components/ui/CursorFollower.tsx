"use client";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      // Smoothly move towards the cursor (lerp effect)
      dotX.current += (mouseX.current - dotX.current) * 0.05;
      dotY.current += (mouseY.current - dotY.current) * 0.05;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX.current}px, ${dotY.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full bg-white z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
