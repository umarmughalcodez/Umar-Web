"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

const testimonials = [
  {
    name: "Luna's Pet Spa 🐾",
    text: "Working with them was such a relief. They understood exactly what I wanted — and the site looks so elegant yet playful!",
  },
  {
    name: "Happy Paws Groomers",
    text: "After the redesign, our online bookings literally doubled. The process was super smooth and communication was clear throughout.",
  },
  {
    name: "Whisker Wonders",
    text: "I had zero technical knowledge, but they guided me at every step. My clients now call the site 'so professional' — great work!",
  },
  {
    name: "Tail & Shine",
    text: "Love the modern layout and how easy it is for customers to schedule appointments. Exactly what I needed for my grooming studio!",
  },
  {
    name: "The Pet Spot",
    text: "They didn't just make a website — they built a real brand experience. Every section reflects our love for pets. Highly recommended.",
  },
  {
    name: "Pawsome Care 🐕",
    text: "Truly impressed by their patience and creativity. You can tell they actually care about your goals, not just the project.",
  },
];

export default function TestimonialsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index based on scroll position
  const updateCurrentIndex = () => {
    if (!ref.current) return;

    const scrollPos = ref.current.scrollLeft;
    const cardWidth = ref.current.offsetWidth;
    const newIndex = Math.round(scrollPos / cardWidth);

    setCurrentIndex(newIndex);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    updateCurrentIndex();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    updateCurrentIndex();
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !ref.current) return;
    const x = e.touches[0].pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    updateCurrentIndex();
  };

  // Update index on scroll
  useEffect(() => {
    const scrollContainer = ref.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      updateCurrentIndex();
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-green-600 mb-12 flex items-center justify-center">
          What Our Happy Clients Say &nbsp;
          <FaPaw />
        </h2>

        <div
          ref={ref}
          className="flex gap-8 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0 w-full max-w-4xl mx-auto bg-gradient-to-bl from-green-100 via-white to-green-100 backdrop-blur-lg border border-green-200 shadow-xl rounded-3xl p-8 flex flex-col justify-between snap-center"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;{item.text}&quot;
              </p>
              <h4 className="text-green-500 font-semibold text-right text-xl">
                — {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator with active state */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-green-600 scale-125"
                  : "bg-green-300 hover:bg-green-400"
              }`}
              onClick={() => {
                if (ref.current) {
                  const newScrollPos = idx * ref.current.offsetWidth;
                  ref.current.scrollTo({
                    left: newScrollPos,
                    behavior: "smooth",
                  });
                  setCurrentIndex(idx);
                }
              }}
            />
          ))}
        </div>

        {/* Soft fade edges - only show when scrollable */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}
