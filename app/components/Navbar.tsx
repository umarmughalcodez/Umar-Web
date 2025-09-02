"use client";

import { useState, useEffect } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Link from "next/link";
import AnimatedButton from "./AnimatedBtn";
import img from "@/public/logo_resized-removebg-preview.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    // Show/hide navbar based on scroll direction
    if (scrollDirection === "down") {
      setIsVisible(false);
    } else if (scrollDirection === "up") {
      setIsVisible(true);
    }

    // Add more intense background when scrolled down
    // But keep the same navbar height always
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  // Navbar items data
  const navItems = [
    { name: "Portfolio", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        /* ALWAYS full height with padding, never changes */
        py-5
        /* Background intensity changes based on scroll */
        ${isScrolled ? "backdrop-blur-xl" : "backdrop-blur-md"}
        border-b border-white/10
      `}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="relative w-[180px] h-[50px]"
          onClick={() => router.push("/")}
        >
          <Image
            src={img}
            alt="Logo"
            fill
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5">
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => router.push(item.href)}
              variant={"link"}
              effect={"hoverUnderline"}
              className="p-1"
            >
              {item.name}
            </Button>
            // <Link
            //   key={item.name}
            //   href={item.href}
            //   className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            // >
            //   {item.name}
            // </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
          Get In Touch
        </button> */}
        <AnimatedButton text="Get In Touch" />

        {/* Mobile Menu Button (Optional) */}
        {/* <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
