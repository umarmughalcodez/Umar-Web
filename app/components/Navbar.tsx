"use client";

import { useState, useEffect } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedButton from "./AnimatedBtn";
import { Button } from "./ui/button";
import img from "@/public/Updated.png";

const Navbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const navItems = [
    { name: "Home", href: "/#" },
    { name: "Free Demo", href: "/contact" },

    { name: "Schedule Free Call", href: "/schedule-call" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (scrollDirection === "down") setIsVisible(false);
    if (scrollDirection === "up") setIsVisible(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          py-5 ${isScrolled ? "backdrop-blur-xl" : "backdrop-blur-md"}
          border-b border-white/10
        `}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="relative w-[130px] sm:w-[150px] md:w-[200px] h-[40px] sm:h-[50px] md:h-[60px]"
            onClick={() => router.push("/")}
          >
            <Image src={img} alt="Logo" fill className="object-contain cursor-pointer" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 mx-5">
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

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <AnimatedButton text="Get In Touch" path="/contact" />
          </div>

          {/* Mobile Hamburger */}
          <button
  className="md:hidden relative w-9 h-9 flex flex-col justify-center items-center rounded-md border border-gray-300 transition-all duration-300"
  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
  aria-label="Toggle menu"
>
  <span
    className={`absolute block h-0.5 w-6 bg-green-500 transition-all duration-300 ease-in-out 
    ${isDrawerOpen ? "rotate-45" : "-translate-y-2"}`}
  ></span>
  <span
    className={`absolute block h-0.5 w-6 bg-green-500 transition-all duration-300 ease-in-out 
    ${isDrawerOpen ? "opacity-0" : "opacity-100"}`}
  ></span>
  <span
    className={`absolute block h-0.5 w-6 bg-green-500 transition-all duration-300 ease-in-out 
    ${isDrawerOpen ? "-rotate-45" : "translate-y-2"}`}
  ></span>
</button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
          ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col mt-26 space-y-3 px-6 justify-center items-center">
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => {
                router.push(item.href);
                setIsDrawerOpen(false);
              }}
              variant="link"
              className="text-left w-full"
            >
              {item.name}
            </Button>
          ))}
          <div
            onClick={() => setIsDrawerOpen(false)}
          
          >

          <AnimatedButton
            text="Get In Touch"
            path="/contact"
          />
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
