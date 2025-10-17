"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    // Detect if the device has a fine pointer (mouse/trackpad)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMouseDevice(true);
    }
  }, []);

  useEffect(() => {
    if (!isMouseDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      dotX.current += (mouseX.current - dotX.current) * 0.25;
      dotY.current += (mouseY.current - dotY.current) * 0.25;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX.current}px, ${dotY.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMouseDevice]);

  if (!isMouseDevice) return null; // Don’t render on touch devices

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full bg-green-500 z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
