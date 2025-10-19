"use client";

import Image from "next/image";
import { FaPaw, FaCheckCircle } from "react-icons/fa";

export default function PetGroomingFrustrations() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center text-3xl md:text-4xl font-bold text-green-500 mb-10">
        Pet Groomers’{" "}
        <span className="text-gray-800">&nbsp;Frustrations Into&nbsp;</span>
        <span className="text-green-500 inline-flex items-center justify-center">
          PAW-FECT Solutions
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* LEFT SIDE - FRUSTRATIONS */}
        <div className="border-2 border-green-500 rounded-2xl shadow-md p-6 bg-gray-50 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <Image
              src="https://em-content.zobj.net/source/microsoft-teams/337/thinking-face_1f914.png"
              alt="Thinking Emoji"
              className="mr-2"
              width={8}
              height={8}
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Does this sound familiar?
            </h3>
          </div>

          <div className="space-y-4 text-gray-700">
            {[
              "You want a decent website but you don't know who you can trust..?",
              "You're tired of your website not bringing in any results at all...?",
              "You’ve tried posting on Instagram but the bookings just won’t grow?",
              "You tried DIY builders, but the site doesn’t look professional or book appointments.",
              "Pet owners visit your site but rarely book — it’s not CONVERTING?",
              "You want a website that actually grows your business, not just “looks okay.”",
            ].map((text, index) => (
              <p key={index} className="flex items-start">
                <FaPaw className="text-green-500 mr-2 mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - SOLUTIONS */}
        <div className="border-2 border-green-500 rounded-2xl shadow-md p-6  bg-green-100 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">👑</span>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Good news — your solution is here!
            </h3>
          </div>

          <div className="space-y-4 text-gray-700">
            {[
              "I don’t make fake promises — I make your website fetch real bookings.",
              "With 2+ years of real experience in web design & SEO, I know what pet owners love to see.",
              "I design emotionally engaging sites that build trust and bring back returning clients.",
              "My prices are transparent and affordable — no hidden costs, no surprises.",
              "I add smart reminders that keep your clients returning — helping you keep your schedule full.",
              "I deliver fast — your site can go live in just 2–3 weeks, fully optimized for search and speed.",
              "I can manage your website monthly — so you can focus on pets, not pixels.",
            ].map((text, index) => (
              <p key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
