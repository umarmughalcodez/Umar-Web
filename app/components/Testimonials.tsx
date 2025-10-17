"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

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
    text: "I had zero technical knowledge, but they guided me at every step. My clients now call the site ‘so professional’ — great work!",
  },
  {
    name: "Tail & Shine",
    text: "Love the modern layout and how easy it is for customers to schedule appointments. Exactly what I needed for my grooming studio!",
  },
  {
    name: "The Pet Spot",
    text: "They didn’t just make a website — they built a real brand experience. Every section reflects our love for pets. Highly recommended.",
  },
  {
    name: "Pawsome Care 🐕",
    text: "Truly impressed by their patience and creativity. You can tell they actually care about your goals, not just the project.",
  },
];


export default function TestimonialsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const baseVelocity = -0.6; // auto scroll speed
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate testimonials for infinite effect
  const loopedTestimonials = [...testimonials, ...testimonials];

  // Auto scroll unless dragging
  useAnimationFrame((t, delta) => {
    if (!ref.current || isDragging) return;
    ref.current.scrollLeft += (delta / 16.7) * baseVelocity;
    if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
      ref.current.scrollLeft = 0;
    }
  });

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
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

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
    const walk = (x - startX) * 1.5;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-[#f6fff9] to-[#e7fbee] border-t border-green-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-green-700 mb-10">
          What Our Happy Clients Say 🐾
        </h2>

        <div
          ref={ref}
          className="flex gap-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {loopedTestimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white/80 backdrop-blur-lg border border-green-200 shadow-lg rounded-2xl p-6 flex flex-col justify-between"
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                “{item.text}”
              </p>
              <h4 className="text-green-700 font-semibold text-right">
                — {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Soft fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#f6fff9] to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#f6fff9] to-transparent"></div>
      </div>
    </section>
  );
}
