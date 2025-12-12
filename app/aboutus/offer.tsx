"use client";

import Image from "next/image";
import Tick from "@/public/AboutUs/Tick.svg";

export default function WhatWeOffer() {
  const rows = [
    {
      left: "Turnkey interiors for 2 BHK, 3 BHK, 4 BHK & villas",
      right: "Custom furniture, built-in storage"
    },
    {
      left: "Modular kitchens & dining solutions",
      right: "End-to-end execution"
    },
    {
      left: "Living rooms, bedrooms, home-offices & study zones",
      right: "Seamless, singular team, one point of contact"
    }
  ];

  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center heading2">What We Offer</h2>
        <p className="text-center text-lg text-[#616161] mt-2 font-['Poppins']">
          Full-service interior solutions across every home and budget
        </p>

        {/* Aligned rows */}
        <div className="mt-14 flex flex-col gap-8">
          {rows.map((row, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT ITEM */}
              <div className="flex items-start gap-3">
                <Image src={Tick} width={20} height={20} alt="tick" />
                <p className="text-[#0f0f0f] text-[16px] font-normal font-['Poppins']">
                  {row.left}
                </p>
              </div>

              {/* RIGHT ITEM */}
              <div className="flex items-start gap-3">
                <Image src={Tick} width={20} height={20} alt="tick" />
                <p className="text-[#0f0f0f] text-[16px] font-normal font-['Poppins']">
                  {row.right}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
