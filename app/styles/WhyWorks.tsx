"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhyWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const benefits = [
    {
      title: "Your Dedicated Style Advisor",
      description: "+ 3D renders to visualize your space before we begin"
    },
    {
      title: "Transparent Quote",
      description: "Before you commit, know exactly what you're getting"
    },
    {
      title: "In-House Team Control",
      description: "Every stage managed by our expert craftspeople"
    },
    {
      title: "10-Year Warranty",
      description: "Quality workmanship backed by our commitment"
    },
    {
      title: "Curated Materials",
      description: "Suited to your budget and your style"
    },
    {
      title: "Expert Execution",
      description: "From concept to completion with precision"
    }
  ];

  return (
    <section className="w-full py-12 px-6 flex justify-center">
      <div className="max-w-[1100px] w-full text-center">
        <h2 className="heading2-style">Why Our Style Guidance Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                onTap={() => setActiveIndex(isActive ? null : index)}
                animate={{
                  y: isActive ? -6 : 0
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`
                  p-[26px]
                  rounded-xl
                  border
                  cursor-pointer
                  text-left
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[#FFF4F2] border-[#F95B46] shadow-lg"
                      : "bg-white border-gray-200 shadow-md"
                  }
                `}
              >
                <h3
                  className={`text-xl font-semibold font-['Poppins'] mb-2 transition-colors duration-300 ${
                    isActive ? "text-[#F95B46]" : "text-[#0f0f0f]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-base font-['Poppins'] transition-colors duration-300 ${
                    isActive ? "text-[#333333]" : "text-[#666666]"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
