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
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Schedule  Free Call", href: "/schedule-call" },
    { name: "Contact", href: "/contact" },
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

        {/* CTA Button */}
        <AnimatedButton text="Get In Touch" path="/contact" />
      </div>
    </nav>
//     <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm">
//   <div className="navbar-start max-md:w-1/4">
//     <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">
//       FlyonUI
//     </a>
//   </div>
//   <div className="navbar-center max-md:hidden">
//     <ul className="menu menu-horizontal p-0 font-medium">
//       <li><a href="#">Link 1</a></li>
//       <li><a href="#">Link 2</a></li>
//       <li><a href="#">Link 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end items-center gap-4">
//     <div className="dropdown relative inline-flex md:hidden">
//       <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
//         <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
//         <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
//       </button>
//       <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
//         <li><a className="dropdown-item" href="#">Link 1</a></li>
//         <li><a className="dropdown-item" href="#">Link 2</a></li>
//         <li><a className="dropdown-item" href="#">Link 3</a></li>
//       </ul>
//     </div>
//     <a className="btn max-md:btn-square btn-primary" href="#">
//       <span className="max-md:hidden">Get started</span>
//       <span className="icon-[tabler--arrow-right] rtl:rotate-180"></span>
//     </a>
//   </div>
// </nav>
  );
};

export default Navbar;
