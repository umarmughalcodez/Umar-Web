"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { fadeRight, fadeUp } from "@/lib/animations";
import { LucideMail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
    } catch {
      toast.error("Network Error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-34 flex items-center justify-center flex-col px-6 md:px-12 lg:px-16 relative bg-white text-gray-900">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#16A34A",
            color: "#fff",
          },
        }}
      />

      {/* Header Tag */}
      <motion.div
        className="text-sm rounded-md border border-green-200 py-2 px-3 bg-green-50 text-green-700 mb-16 font-semibold"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <span className="bg-green-600 rounded-md text-white font-semibold px-2 py-1 mr-2">
          24/7
        </span>
        Let&apos;s Work Together
      </motion.div>

      {/* Title */}
      <motion.div
        className="text-5xl md:text-6xl text-gray-900 font-bold space-y-3 text-center"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <p>Any Questions?</p>
        <p className="text-green-600">Feel Free to Ask</p>
        <p className="mt-6 text-base text-gray-600 font-normal text-center mb-16">
          Whether you want a{" "}
          <span className="font-bold text-green-500">
            FREE Website Audit, FREE Demo Site,
          </span>
          <br />
          or want to start a new project — our team is here to help.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        className="w-full max-w-4xl mx-auto bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-10 shadow-lg"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeRight}
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                First name *
              </label>
              <input
                required
                type="text"
                name="f_name"
                placeholder="Jane"
                className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.f_name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="l_name"
                placeholder="Smith"
                className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.l_name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+012-345-6789"
                className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              <label className="block text-sm text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="business_name"
                placeholder="Happy Tails Studio"
                className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.business_name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Industry
              </label>
              <input
                name="industry"
                type="text"
                placeholder="Pet Grooming"
                className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.industry}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              placeholder="Tell us how we can help your grooming business shine!"
              rows={5}
              className="w-full bg-white border border-green-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={form.message}
              onChange={handleChange}
              name="message"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Submit Button */}
          <Button
            effect={"shineHover"}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </Button>
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="w-full max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-xl p-6 mb-10 text-center mt-10"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        id="contact"
      >
        <p className="text-2xl font-semibold text-gray-900 my-3">
          Let&apos;s Connect Together
        </p>
        <p className="text-gray-700 text-md md:text-xl flex items-center justify-center gap-2 font-semibold">
          <LucideMail className="text-green-600" size={22} />
          Email:{" "}
          <Button
            onClick={() => router.push("mailto:info@umarweb.com")}
            variant="link"
            effect="hoverUnderline"
            className="text-green-700 p-0 text-md md:text-xl hover:text-green-800 font-normal"
          >
            info@umarweb.com
          </Button>
        </p>

        <p className="text-gray-700 mt-2 text-md md:text-xl flex items-center justify-center gap-2 font-semibold">
          <Phone className="text-green-600" size={22} />
          Phone:{" "}
          <Button
            onClick={() => router.push("tel:+923364190319")}
            variant="link"
            effect="hoverUnderline"
            className="text-green-700 p-0 text-md md:text-xl hover:text-green-800 font-normal"
          >
            (92) 336 4190319
          </Button>
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
