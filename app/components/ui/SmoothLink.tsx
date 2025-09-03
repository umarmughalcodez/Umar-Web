"use client";
import React from "react";

interface SmoothLinkProps {
  targetId: string;
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

const SmoothLink = ({
  targetId,
  children,
  offset = -80,
  className,
}: SmoothLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default SmoothLink;
