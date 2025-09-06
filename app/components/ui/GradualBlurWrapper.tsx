"use client";

import { useEffect, useState } from "react";
import GradualBlurMemo from "@/components/GradualBlur";

export default function GradualBlurWrapper() {
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Hide blur if footer is visible
        setShowBlur(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
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
