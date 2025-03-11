"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import "./style.css";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="intro"
      className="min-h-screen pt-20 mx-auto max-w-container px-banner-padding "
    >
      <div className="mx-auto max-w-container">
        <div className="intro-section relative">
          <Image
            src='/assets/ai.jpg'
            alt="intro-bg"
            fill
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/85 z-0"></div>

          <div className="relative z-10 md:px-8 px-4 max-w-4xl mx-auto flex flex-col justify-center items-start h-full text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-white">
              <span className="text-primary font-[900]">ADVIX Solutions </span>
              <span className="block md:inline text-white mt-2 md:mt-0 md:ml-2">
                for Smarter Business Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl">
              We provide AI-driven automation, data analytics, and intelligent
              solutions to enhance business efficiency and customer engagement.
            </p>
            <Link href="#our-services">
              <button className="bg-primary text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
        {isVisible && (
        <div className="mx-auto max-w-container animate-bounce text-center mt-12 border-black border-solid border rounded-2xl px-1 py-2 w-fit absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Link href="#about-us">
            <FaArrowDownLong color="black" />
          </Link>
        </div>
      )}
      </div>
    </section>
  );
}
