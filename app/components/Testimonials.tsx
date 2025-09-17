"use client";
import React from "react";
import BorderBtn from "./ui/BorderBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeRight, fadeUp } from "@/lib/animations";

interface TestProps {
  image: string[];
  name: string[];
  businessType: string[];
  review: string[];
}

const Testimonials = () => {
  const testimonials: TestProps = {
    image: [
      "/entrepreneur.jpg",
      "/businessman.jpg",
      "/man.jpg",
      "/man-img.jpg",
      "/2.png",
      "/girl.jpg",
      "/1.png",
      "/woman2.jpg",
    ],
    name: [
      "Erick Martinez",
      "Michael Johnson",
      "David Chen",
      "James Anderson",
      "Lisa Thompson",
      "Sophia Brown",
      "Daniel Lee",
      "Olivia Davis",
    ],
    businessType: [
      "Fitness Studio Owner",
      "Restaurant Owner",
      "Travel Agency Director",
      "Consulting Firm Partner",
      "Boutique Shop Owner",
      "Cafe Owner",
      "Marketing Consultant",
      "Salon Owner",
    ],
    review: [
      "I never realized how much a professional website could change things. In 2025, having an online presence isn’t optional — it’s essential. This platform finally puts us where our clients can find us.",
      "For my fitness studio, the site made booking classes a breeze for clients. Honestly, seeing people sign up online without me calling them feels incredible.",
      "2025 is incomplete without a proper online presence. It’s where people look first. This website not only looks professional but makes our brand memorable.",

      "Our website helped travelers discover our packages more easily. A few even mentioned they found us on Google — that visibility alone is worth it.",
      "I never thought having a website could make my boutique feel so alive online. Customers explore collections before stepping in, which makes them more curious to visit.",
      "For my cafe, having an online platform that shares the menu and story keeps customers informed. People genuinely appreciate it when they check online before coming.",
      "In consulting, trust matters. The site communicates professionalism and credibility instantly. Clients know we’re serious, even before a first call.",
      "I used to rely on social media only, but having this website changed everything. Anyone searching our services in 2025 sees us first and gets all the info at a glance.",
    ],
  };

  return (
    <div
      className="flex items-center justify-center flex-col p-6 lg:py-8 lg:px-16 xl:px-26 xl:py-10"
      id="testimonials"
    >
      <BorderBtn text="Testimonials" />
      <motion.div
        className="font-semibold text-center w-full max-w-3xl"
        variants={fadeRight}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.1 }}
        style={{ willChange: "transform, opacity" }}
      >
        <p className="text-4xl text-white md:text-5xl">What Our Clients Say,</p>
        <p className="text-4xl text-white/90 mt-2 md:text-5xl">
          Real Results, Real Growth
        </p>
        <div className="text-sm text-white/70 mt-4 font-normal max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mt-4">
            These testimonials reflect common experiences and benefits that our
            clients have observed after creating a professional website with us.
            Results may vary depending on the type of business and online
            efforts. All feedback is shared honestly to help you understand the
            value of having a strong online presence.
          </p>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-7xl">
        {testimonials.name.map((name, index) => (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            key={index}
            className="relative group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 
             border border-white/10 hover:border-blue-500/30 
              overflow-hidden"
          >
            {/* Shine effect overlay */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-transparent via-white/20 to-transparent 
    group-hover:translate-x-full transition-transform duration-400 ease-in-out"
            />

            <div className="flex items-center ">
              {/* Image container with blue faded effect */}
              <div className="relative mr-4">
                <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full transform scale-110"></div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/90">
                  <Image
                    src={testimonials.image[index]}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="text-sm text-blue-400">
                  {testimonials.businessType[index]}
                </p>
              </div>
            </div>
            <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-2 mt-4" />

            <div className="flex mb-3 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              &quot;{testimonials.review[index]}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
