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
  question: "Why do I need a website for my pet grooming business when I already use Instagram?",
  answer:
    "While social media helps with visibility, a website builds trust, drives repeat bookings, and turns visitors into loyal clients. We design emotionally engaging, pet-owner–focused websites that reflect your brand and experience. Plus, we integrate smart features like appointment reminders and recurring visit notifications — helping you retain customers and keep your grooming schedule full every-time.",
},

  {
    question: "How long will it take to get my pet grooming website ready?",
    answer:
      "We deliver fully functional, beautiful websites within just 2–3 weeks. Our streamlined process ensures fast turnaround without compromising quality — so your business can start welcoming new clients as soon as possible.",
  },
  {
    question: "Do you provide website maintenance or updates after launch?",
    answer:
      "Yes, we offer affordable monthly subscription plans for every budget. These plans include regular content updates, performance checks, and SEO optimization to keep your website running smoothly and ranking higher on Google.",
  },
  {
  question: "What is the cost of a website you design?",
  answer:
    "We keep it simple and budget-friendly for pet grooming businesses. You can choose our affordable monthly subscription that includes regular updates, ongoing SEO optimization, and 24/7 support — perfect for keeping your website fresh and growing. Or, if you prefer a one-time purchase, we’ll build and launch your site without monthly payments, so you fully own it from day one.",
},

  {
    question: "Will my website be optimized for SEO?",
    answer:
      "Definitely. Every website we build is optimized for search engines from day one — including meta tags, fast loading speed, and mobile responsiveness. Plus, we continue to refine your SEO each month so your business stays visible and competitive online.",
  },
  {
    question: "What if I want to add something new to my site later?",
    answer:
      "Of course! Simply contact us with the details of what you’d like to add — whether it’s a new service, a photo gallery, or a special offer — and we’ll update your site within 24 hours. Quick, professional, and hassle-free.",
  },
  {
    question: "Will my website look great on all devices?",
    answer:
      "Yes. All our websites are fully responsive and designed to look perfect on smartphones, tablets, and desktops — ensuring a smooth experience for your clients wherever they visit from.",
  },
  {
    question: "Can I update my services, photos, or pricing myself?",
    answer:
      "Absolutely. We provide a user-friendly content management system (CMS) so you can easily update your content anytime. We also offer quick training and support if you ever need help managing your site.",
  },
  {
    question: "What if no one is visiting my current website?",
    answer:
      "That’s exactly what we fix. Along with stunning design, we apply SEO strategies and conversion-focused layouts to help your website attract the right visitors — and turn them into real, paying clients.",
  },
  {
    question: "My old website still works — why invest in a new one?",
    answer:
      "Because your website is often your first impression. An outdated or slow site can make clients lose trust instantly. A modern, fast, and well-optimized website communicates professionalism, builds trust, and increases bookings.",
  },
  {
    question: "What makes your agency different from others?",
    answer:
      "We specialize in pet industry websites, understand your business needs, and deliver high-performing, visually stunning sites in just 2–3 weeks. You’ll enjoy flexible options — from one-time builds to affordable monthly plans with continuous support, updates, and SEO improvements. No generic templates, no hidden fees — just results that help your grooming business shine.",
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
                  ? "rgba(34, 197, 94, 1)"
                  : "rgba(255, 255, 255)",
              borderColor: activeIndex === index ? "#22C55E" : "#16A34A",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full p-5 text-left cursor-pointer font-semibold transition-colors duration-300 ${
  activeIndex === index ? "text-white" : "text-black"
}`}

            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4"
              >
                <svg
  className="w-5 h-5 text-green-600"
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
                  className="overflow-hidden bg-green/10"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-3 mx-auto"
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
