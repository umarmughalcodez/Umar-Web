// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

interface FormProps {
  f_name: string;
  l_name?: string;
  email: string;
  phone: string;
  business_name?: string;
  industry?: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormProps>({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    business_name: "",
    industry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Form Submitted Successfully!");
        setForm({
          f_name: "",
          l_name: "",
          email: "",
          phone: "",
          business_name: "",
          industry: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to submit form");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-44 flex items-center justify-center flex-col px-6 md:px-12 lg:px-16">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <div className="backdrop-blur-xl text-sm rounded-md border border-white/30 py-3 w-auto px-3 text-white/85 mb-16">
        <span className="bg-blue-600 rounded-md font-semibold px-2 py-2 mr-3">
          24/7
        </span>
        Let's Work Together
      </div>

      <div className="text-5xl md:text-6xl text-white font-semibold space-y-3 text-center">
        <p>Any Questions?</p>
        <p className="text-white/70">Feel Free to Ask</p>
        <p className="mt-6 text-sm text-white/60 font-normal text-center mb-16">
          Whether you have a question, need assistance, <br />
          or want to start a new project, our team is here to help.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-black/65 border border-white/20 rounded-2xl p-6 sm:p-10 shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-1">
                First name *
              </label>
              <input
                required
                type="text"
                name="f_name"
                placeholder="Jane"
                className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.f_name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="l_name"
                placeholder="Smith"
                className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.l_name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+012-345-6789"
                className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="business_name"
                placeholder="FastLane Productions"
                className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.business_name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-1">
                Industry
              </label>
              <input
                name="industry"
                type="text"
                placeholder="Film Production"
                className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.industry}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Message *
            </label>
            <textarea
              placeholder="Type your message..."
              rows={5}
              className="w-full bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.message}
              onChange={handleChange}
              name="message"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold 
            shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:shadow-[0_0_30px_rgba(59,130,246,1)] 
            transition-all duration-300 cursor-pointer ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
