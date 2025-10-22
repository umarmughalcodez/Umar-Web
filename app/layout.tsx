import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CursorFollower from "./components/ui/CursorFollower";
import Script from "next/script";
import GradualBlurWrapper from "./components/ui/GradualBlurWrapper";
// import ChatWidget from "@/components/ChatWidget";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Best Pet Grooming Web Design Agency in America | Umar Web Agency",
  description:
    "We build high-converting, beautiful websites made exclusively for pet groomers across the U.S. — boosting bookings, trust, and brand love.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Pet Grooming Web Design Agency",

    "Best Pet Grooming Website Designer",

    "Pet Grooming Website Design USA",

    "Dog Grooming Website Design Agency",

    "Web Design for Pet Groomers in America",

    "Pet Groomer Website Development Company",

    "Professional Pet Grooming Web Designer",

    "Pet Grooming Business Website Design",

    "Custom Pet Grooming Website Design",

    "Pet Salon Website Design Agency USA",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  authors: [{ name: "UmarWeb", url: "https://umarweb.com" }],
  openGraph: {
    title: "Best Pet Grooming Web Design Agency in America | Umar Web Agency",
    description:
      "Custom websites built for U.S. pet groomers — designed to attract, convert, and grow your grooming business online.",

    url: "https://umarweb.com",
    siteName: "UmarWeb",
    images: [
      {
        url: "https://umarweb.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "UmarWeb - Best Pet Grooming Web Design Agency America",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://umarweb.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "UmarWeb - Pet grooming Web Design Agency USA",
    description:
      "America’s #1 Pet Grooming Web Design Agency — Tail-wagging websites built to grow your pet business.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="" dir="ltr">
      <body className={`${montserrat.variable} antialiased bg-white`}>
        <CursorFollower />
        <Navbar />
        {children}
        {/* <ChatWidget /> */}
        <GradualBlurWrapper />

        <Footer />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "UmarWeb",
              url: "https://umarweb.com",
              image: "https://umarweb.com/logo.png",
              description:
                "America’s #1 Pet Grooming Web Design Agency — specializing in beautiful, high-performing websites for pet grooming businesses.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Remote",
                addressCountry: "Worldwide",
              },
              sameAs: ["https://www.instagram.com/umarwebofficial/"],
            }),
          }}
        />
      </body>
    </html>
  );
}
