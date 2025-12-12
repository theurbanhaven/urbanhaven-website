"use client";

import Image from "next/image";
import Tick from "@/public/AboutUs/Tick.svg";
import Quality from "@/public/AboutUs/Quality.svg";
import Warranty from "@/public/AboutUs/Mission.svg";

export default function QualityWarrantySection() {
  const items = [
    {
      icon: Tick,
      title: "Responsible Sourcing",
      desc: "We source materials responsibly and monitor build quality at every step."
    },
    {
      icon: Quality,
      title: "Rigorous Quality Checks",
      desc: "We maintain rigorous quality-checks in every installation."
    },
    {
      icon: Warranty,
      title: "10-Year Warranty",
      desc: "We back our work with a 10-year workmanship warranty."
    }
  ];

  return (
    <section className="w-full py-8 sm:py-8 md:py-8 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center heading2">
          Quality, Responsibility & Warranty
        </h2>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 
            md:grid-cols-3 
            gap-8 
            mt-12 
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-2xl 
                shadow-md 
                p-8 
                flex 
                flex-col 
                items-center 
                text-center
                border 
                border-gray-200
                hover:scale-105
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#f2f2f2]  flex items-center justify-center mb-4 ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-normal text-black font-['Poppins']">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#495057] mt-2 leading-relaxed font-normal font-['Poppins']">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
