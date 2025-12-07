"use client";

import Image from "next/image";

import Craftmanship from "@/public/AboutUs/Craftmanship.svg";
import Mission from "@/public/AboutUs/Mission.svg";
import Personalisation from "@/public/AboutUs/Personalisation.svg";
import Reliabilty from "@/public/AboutUs/Reliabilty.svg";
import Transparency from "@/public/AboutUs/Transparency.svg";
import Vision from "@/public/AboutUs/Vision.svg";

export default function MissionVisionValues() {
  const firstRow = [
    {
      icon: Mission,
      title: "Mission",
      text: "To transform homes into personal havens where your taste,your space and your budget align."
    },
    {
      icon: Vision,
      title: "Vision",
      text: "To be Delhi NCR’s most trusted interior-design partner—where style meets transparency and build meets reliability."
    }
  ];

  const secondRow = [
    {
      icon: Transparency,
      title: "Transparency",
      text: "Clear scope, fair pricing, no surprises."
    },
    {
      icon: Craftmanship,
      title: "Craftsmanship",
      text: "In-house design + build team; quality in every detail."
    },
    {
      icon: Personalisation,
      title: "Personalisation",
      text: "Designs that reflect you, not just trends."
    },
    {
      icon: Reliabilty,
      title: "Reliability",
      text: "On-time delivery, built to last; backed by our 10-year workmanship warranty."
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center heading2">
          Mission • Vision • Core Values
        </h2>

        <p className="text-center text-[#495057] text-lg mt-2 font-['Poppins']">
          Our guiding principles that shape everything we do
        </p>

        {/* FIRST ROW → Mission + Vision */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="
                bg-white 
                border border-[#e9e9e9] 
                rounded-2xl 
                p-8 
                shadow-sm 
                hover:shadow-md 
                hover:scale-105
                transition-all
              "
            >
              <div className="w-16 h-16 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="text-left text-xl font-semibold text-[#0f0f0f] font-['Poppins']">
                {item.title}
              </h3>

              <p className="text-left text-[#555] text-base leading-6 mt-3 font-['Poppins']">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* SECOND ROW → Remaining 4 Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {secondRow.map((item, index) => (
            <div
              key={index}
              className="
                bg-white 
                border border-[#e9e9e9] 
                rounded-2xl 
                p-8 
                shadow-sm 
                hover:shadow-md 
                hover:scale-105
                transition-all
              "
            >
              <div className="w-16 h-16 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-4 mx-auto">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="text-center text-xl font-semibold text-[#0f0f0f] font-['Poppins']">
                {item.title}
              </h3>

              <p className="text-center text-[#555] text-base leading-6 mt-3 font-['Poppins']">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
