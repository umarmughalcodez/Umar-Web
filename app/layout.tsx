import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CursorFollower from "./components/ui/CursorFollower";
import SmoothScrollProvider from "./components/ui/SmoothScrollProvider";
import Script from "next/script";
import GradualBlurWrapper from "./components/ui/GradualBlurWrapper";

const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UmarWeb – Professional Web Development Services",
  description:
    "We create SEO-optimized, mobile-friendly websites for businesses worldwide. Book a free strategy call today and grow your online presence.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "web development",
    "web design",
    "affordable websites",
    "business websites",
    "SEO friendly websites",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  authors: [{ name: "UmarWeb", url: "https://umarweb.com" }],
  openGraph: {
    title: "UmarWeb – Professional Web Development Services",
    description:
      "Affordable and professional website design for businesses worldwide. Mobile-friendly, SEO-ready, and fast.",

    url: "https://umarweb.com",
    siteName: "UmarWeb",
    images: [
      {
        url: "https://umarweb.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "UmarWeb - Built To Sell.",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://umarweb.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "UmarWeb - Built To Sell",
    description: "Professional Websites For Growing Local Businesses",
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
      <body className={`${dm_sans.variable} antialiased bg-black`}>
        <CursorFollower />
        <Navbar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        {/* {children} */}
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
                "We provide SEO-optimized websites for businesses worldwide. Affordable, fast, and mobile-friendly.",
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
