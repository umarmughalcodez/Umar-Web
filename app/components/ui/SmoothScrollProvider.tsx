"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div className="overflow-hidden">{children}</div>;
};

export default SmoothScrollProvider;
