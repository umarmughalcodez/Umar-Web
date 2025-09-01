"use client";
import React from "react";
import BorderBtn from "./ui/BorderBtn";
import Image from "next/image";

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
      "/girl.jpg",
      "/man.jpg",
      "/man-img.jpg",
      "/woman.jpg",
    ],
    name: [
      "Erick Martinez",
      "Michael Johnson",
      "Emma Williams",
      "David Chen",
      "James Anderson",
      "Lisa Thompson",
    ],
    businessType: [
      "Fitness Studio Owner",
      "Restaurant Owner",
      "Travel Agency Director",
      "Local Bakery Owner",
      "Consulting Firm Partner",
      "Boutique Shop Owner",
    ],
    review: [
      "Since launching our new website, our membership sign-ups have increased by 4x! The design perfectly captures our brand essence, and the booking system has streamlined our operations completely.",
      "Our online orders have tripled in just 3 months! The website not only looks incredible but functions flawlessly on mobile. Best investment we've made for our business growth.",
      "Our website has become our #1 sales channel, generating 5x more leads than before. The SEO optimization alone was worth the investment. Highly recommended for any local business!",
      "Sales are up 300% since our website launched! The e-commerce integration made it so easy for customers to order online. This was a game-changer for our small business.",
      "The professional website has elevated our brand perception tremendously. We're closing 4x more clients now, and the ROI was evident within the first month. Exceptional service!",
      "Our online sales have increased by 350%! The website design perfectly showcases our products, and the user experience keeps customers coming back. Worth every penny!",
    ],
  };

  return (
    <div className="flex items-center justify-center flex-col mt-6 p-6 lg:p-16 xl:p-26">
      <BorderBtn text="Testimonials" />
      <div className="font-semibold text-center w-full max-w-3xl">
        <p className="text-4xl text-white md:text-5xl">What Our Clients Say,</p>
        <p className="text-4xl text-white/90 mt-2 md:text-5xl">
          Real Results, Real Growth
        </p>
        <p className="text-sm text-white/70 mt-4 font-normal max-w-2xl mx-auto">
          Hear from local businesses that have transformed their online presence
          and skyrocketed their sales with our website services.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-7xl">
        {testimonials.name.map((name, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-4">
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

            <div className="flex mb-3">
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
              "{testimonials.review[index]}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
