"use client";

import Image from "next/image";
import Tick from "@/public/AboutUs/Tick.svg";

export default function WhatWeOffer() {
  const leftItems = [
    "Turnkey interiors for 2 BHK, 3 BHK, 4 BHK & villas",
    "Modular kitchens & dining solutions",
    "Living rooms, bedrooms, home-offices & study zones",
  ];

  const rightItems = [
    "Custom furniture, built-in storage",
    "End-to-end execution",
    "Seamless, singular team, one point of contact",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold font-['Poppins'] text-[#0f0f0f]">
          What We Offer
        </h2>

        <p className="text-center text-lg text-[#616161] mt-2 font-['Poppins']">
          Full-service interior solutions across every home and budget
        </p>

        {/* Two lists with reduced gap */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT LIST */}
          <div className="flex flex-col gap-6">
            {leftItems.map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image src={Tick} alt="bullet" width={20} height={20} />
                <p className="text-[#0f0f0f] text-lg font-['Poppins'] leading-6">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT LIST */}
          <div className="flex flex-col gap-6">
            {rightItems.map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image src={Tick} alt="bullet" width={20} height={20} />
                <p className="text-[#0f0f0f] text-lg font-['Poppins'] leading-6">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
