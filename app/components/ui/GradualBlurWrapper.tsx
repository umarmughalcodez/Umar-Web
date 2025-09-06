"use client";

import { useEffect, useState } from "react";
import GradualBlurMemo from "@/components/GradualBlur";

export default function GradualBlurWrapper() {
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const initObserver = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      // Disconnect existing observer if re-initializing
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          // Hide blur if footer is visible
          setShowBlur(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(footer);
    };

    // Delay initialization slightly to ensure layout is ready
    const timeout = setTimeout(initObserver, 100);

    // Listen for resize or orientation change to re-initialize
    const handleResize = () => {
      if (observer) observer.disconnect();
      initObserver();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  if (!showBlur) return null;

  return (
    <GradualBlurMemo
      target="page"
      position="bottom"
      height="7rem"
      strength={1}
      divCount={3}
      curve="bezier"
      exponential
      opacity={0.95}
      animated="scroll"
      zIndex={30}
    />
  );
}
