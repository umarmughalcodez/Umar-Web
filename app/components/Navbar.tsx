"use client";

import { useState, useEffect } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedButton from "./AnimatedBtn";
import { Button } from "./ui/button";
import img from "@/public/logo.png";

const Navbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === "down") {
      setIsVisible(false);
    } else if (scrollDirection === "up") {
      setIsVisible(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  const navItems = [
    { name: "Portfolio", href: "/#about" },
    { name: "Work", href: "/#strategy" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        py-5
        ${isScrolled ? "backdrop-blur-xl" : "backdrop-blur-md"}
        border-b border-white/10
      `}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="relative w-[130px] sm:w-[150px] md:w-[200px] h-[40px] sm:h-[50px] md:h-[60px]"
          onClick={() => router.push("/")}
        >
          <Image
            src={img}
            alt="Logo"
            fill
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Middle Links - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-5">
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => router.push(item.href)}
              variant="link"
              effect="hoverUnderline"
              className="p-1"
            >
              {item.name}
            </Button>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedButton text="Get In Touch" path="/contact" />
      </div>
    </nav>
  );
};

export default Navbar;
