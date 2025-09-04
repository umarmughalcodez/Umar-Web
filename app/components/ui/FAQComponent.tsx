"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeRight } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Why should I get a website for my business?",
      answer:
        "A website is essential for any business to enhance credibility, reach a wider audience, and drive growth. Also by streamlining operations by automating tasks and backend systems makes it a valuable long-term asset. Even for businesses that don't rely on online sales, a website ensures potential customers can easily find information and contact you, ultimately contributing to sustained business success.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Typically, we deliver complete websites within 2-5 weeks depending on complexity. We follow an efficient process that includes planning, design, development, and testing phases to ensure quality while meeting deadlines.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes, we offer comprehensive maintenance packages that include regular updates, security monitoring, backups, and technical support. This ensures your website remains secure and performs optimally long after launch.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All our websites are built with a mobile-first approach and are fully responsive. They adapt seamlessly to all screen sizes, ensuring an optimal experience for visitors on smartphones, tablets, and desktops.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Yes, we provide you with a user-friendly content management system (CMS) that allows you to easily update text, images, and other content without any technical knowledge. We also offer training sessions.",
    },
    {
      question:
        "Nobody visits our current site — what’s the point of upgrading?",
      answer: `That’s exactly the problem we solve.
We don’t just build pretty websites — we also offer SEO to help you show up on Google, attract the right visitors, and turn them into paying customers.`,
    },
    {
      question:
        "Our website is old, but it still works — why spend money on a new one?",
      answer: `Because first impressions matter.
An outdated or slow website silently turns customers away — even if you never hear about it. A fresh, modern, and mobile-friendly design builds trust, keeps visitors engaged, and makes you look like the professional business you are.`,
    },
    {
      question: "What makes you different to other web design agencies?",
      answer:
        "We deliver exceptional websites at affordable prices without compromising quality. Your custom website launches quickly with a personalized design that perfectly reflects your brand and goals—no long waits or generic templates. And unlike other agencies, we provide long term support for your website to ensure it performs well every time.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden border border-white"
            variants={fadeRight}
            animate={{
              backgroundColor:
                activeIndex === index
                  ? "rgba(17, 24, 39, 0.8)"
                  : "rgba(31, 41, 55, 0.4)",
              borderColor: activeIndex === index ? "#4B5563" : "#374151",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left text-white cursor-pointer font-semibold"
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.span>
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="overflow-hidden bg-black/10"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3 mx-auto"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-white/80 px-4 pb-4"
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
