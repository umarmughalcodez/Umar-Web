"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { FaStar, FaClock, FaRedoAlt, FaHandshake } from "react-icons/fa";

interface CountUpProps {
  start?: number;
  target: number;
  duration?: number;
  decimals?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  target,
  duration = 2,
  decimals = 0,
}) => {
  const [count, setCount] = useState(start);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = start + (target - start) * progress;

      setCount(parseFloat(newValue.toFixed(decimals)));

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [start, target, duration, decimals]);

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
      start: 0,
      value: 17520,
      suffix: "+ Hours",
    },
    {
      icon: <FaStar className="text-green-600 text-3xl mb-2" />,
      label: "Rating",
      start: 4.5,
      value: 5,
      suffix: " / 5",
      decimals: 1,
    },
    {
      icon: <FaRedoAlt className="text-green-600 text-3xl mb-2" />,
      label: "Customer Retention",
      start: 0,
      value: 98.5,
      suffix: "%",
      decimals: 1,
    },
    {
      icon: <FaHandshake className="text-green-600 text-3xl mb-2" />,
      label: "Commitment to Every Project",
      start: 0,
      value: 100,
      suffix: "%",
    },
  ];

  return (
    <>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mt-6" />

      <section ref={ref} className="w-full bg-white py-4">
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
                {startCounting ? (
                  <CountUp
                    start={stat.start}
                    target={stat.value}
                    duration={2}
                    decimals={stat.decimals}
                  />
                ) : (
                  stat.start
                )}
                {stat.suffix}
              </h3>
              <p className="text-sm mt-1 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mb-7" />
    </>
  );
};

export default StatsSection;
