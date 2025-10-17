"use client";

import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import img from "@/public/businessman.jpg"
import signature from "@/public/signature.png"

export default function OurCommitment() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">YOUR&nbsp;PASSION,</span>{" "}
            <span className="text-green-600 inline-flex items-center">
              OUR&nbsp;PURPOSE <FaPaw className="ml-1 text-green-600 w-6 h-6" />
            </span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Hey there, I’m <span className="font-semibold text-gray-900">Umar</span> — not just another regular web designer, but
            someone who’s spent years understanding what truly makes pet
            groomers stand out online. I’m the proud founder of{" "}
            <span className="text-green-600 font-semibold">
              Umar Web Design Agency
            </span>, and my mission is simple: "To turn your love for pets into a
            website that actually brings in bookings"
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            I’ve worked with passionate groomers who care deeply about every
            paw, every purr, and every wag. But most of them struggled with one
            thing — <span className="text-green-500">getting noticed online.</span> That’s where I come in. From
            strategy to launch, I help pet groomers create online experiences
            that &nbsp;
            <span className="text-green-500">


            attract trust, bookings, and loyal clients.
            </span>
            
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            My promise? I don’t just build websites;  &nbsp;
            <span className="text-green-500">
            
            I build Results! 
            </span> &nbsp;
            Every site
            I design is crafted to convert curious pet owners into happy,
            <span className="text=green-500">


            returning clients
            </span>
             — because your grooming business deserves to shine
            as bright as your passion for pets.
          </p>

          <div className="flex items-center mt-8">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="italic text-gray-800 text-lg">
                “Let’s bring your pet grooming brand to life — one paw at a
                time.”
              </p>
              <p className="mt-2 text-sm font-medium text-green-600">
                — Umar Mughal, Founder of Umar Web Design Agency
              </p>
            </div>
          </div>
     <div className="inline-block mt-4">
  <Image
    src={signature}
    alt="Signature"
    width={80}   // adjust these numbers until it feels right
    height={40}
    className="object-contain"
    priority
  />
</div>


        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={img} // replace with actual image path
              alt="Dean White - Pawfect Web Design Agency"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
              100% Pet-Friendly Designs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
