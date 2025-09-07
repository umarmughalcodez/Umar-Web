"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.125,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Trigger resize + scroll recalculation on page load
    const recalc = () => {
      lenis.resize();
      lenis.scrollTo(window.scrollY, { immediate: true });
    };

    recalc(); // run once after mounting
    window.addEventListener("resize", recalc);
    window.addEventListener("orientationchange", recalc);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", recalc);
      window.removeEventListener("orientationchange", recalc);
    };
  }, []);

  return <div className="overflow-hidden">{children}</div>;
};

export default SmoothScrollProvider;
