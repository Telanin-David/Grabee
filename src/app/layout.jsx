"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "./navigation/header";
import Footer from "./navigation/footer";
import React, { useState, useEffect } from "react";

// Correct font import
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // or use an array
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", // or use an array
});


export default function RootLayout({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title> Grabee</title>
        <meta name="description" content="grabee " />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="h-[200vh]">
          <div
            className={`fixed top-12 left-1/2 transform -translate-x-1/2 ${
              scrollPosition > 100 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } bg-purple-500 h-24 w-24 transition-opacity duration-500 ease-in-out`}
          >
            Scroll Animation
          </div>

          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
