"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FaStar, FaClock, FaRedoAlt, FaHandshake } from "react-icons/fa";

// ✅ Add prop types for CountUp
interface CountUpProps {
  target: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration * 60); // ~60fps
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.round(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
};

const StatsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setStartCounting(true);
    }
  }, [inView, controls]);

  const stats = [
    {
      icon: <FaClock className="text-green-600 text-3xl mb-2" />,
      label: "Experience",
      value: 17520, // 2 years ≈ 17,520 hours
      suffix: "+ Hours",
    },
    {
      icon: <FaStar className="text-green-600 text-3xl mb-2" />,
      label: "Rating",
      value: 5,
      suffix: " / 5",
    },
    {
      icon: <FaRedoAlt className="text-green-600 text-3xl mb-2" />,
      label: "Customer Retention",
      value: 98.5,
      suffix: "%",
    },
    {
      icon: <FaHandshake className="text-green-600 text-3xl mb-2" />,
      label: "Commitment to Every Project",
      value: 100,
      suffix: "%",
    },
  ];

  return (
    <>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mt-6" />
    
    <section
      ref={ref}
      className="w-full bg-white py-4"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.1 },
              },
            }}
          >
            {stat.icon}
            <h3 className="text-2xl font-bold text-gray-900">
              {startCounting ? <CountUp target={stat.value} /> : 0}
              {stat.suffix}
            </h3>
            <p className="text-sm mt-1 text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mb-7" />

</>
  );
};

export default StatsSection;
