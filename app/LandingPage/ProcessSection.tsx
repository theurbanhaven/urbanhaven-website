"use client";

import Image from "next/image";
import Inquiry from "@/public/LandingPageImage/Inquiry.svg";
import Consultation from "@/public/LandingPageImage/Consultation.svg";
import Design from "@/public/LandingPageImage/Design.svg";
import Execution from "@/public/LandingPageImage/Execution.svg";
import FinalTouch from "@/public/LandingPageImage/FinalTouch.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Inquiry,
      title: "Quick & Easy Inquiry",
      desc: "Tell us about your space in 60 \nseconds."
    },
    {
      icon: Consultation,
      title: "Personalized Consultation",
      desc: "We call you, understand your \nneeds, style, and budget."
    },
    {
      icon: Design,
      title: "Design & Planning",
      desc: "3D renders, layout & material \nselection, timeline, quote."
    },
    {
      icon: Execution,
      title: "Execution",
      desc: "In-house team brings it to life  \nwith regular updates."
    },
    {
      icon: FinalTouch,
      title: "Final Touch & Handover",
      desc: "Quality checks.Walk-through, punch list, move \nin."
    }
  ];

  return (
    <section className="w-full bg-white">
      <h2 className="heading2 text-center">How it works</h2>

      <div className="w-full flex justify-center">
        <div className="relative max-w-[1440px]">
          <div className="hidden lg:flex absolute top-[72px] left-[10%] right-[10%] justify-between">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-[2px] bg-[#F95B46] flex-1 mx-4"
                animate={{
                  scaleX: activeStep > i ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            ))}
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-start pt-10 gap-10 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full lg:w-1/5"
              >
                <motion.div
                  className="w-[64px] h-[64px] bg-[#F95B46] rounded-full flex justify-center items-center shadow-md relative z-10"
                  animate={{
                    scale: activeStep === index ? 1.15 : 1,
                    boxShadow:
                      activeStep === index
                        ? "0px 10px 25px rgba(249,91,70,0.4)"
                        : "0px 4px 10px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={36}
                    height={36}
                  />
                </motion.div>

                <h3 className="mt-4 text-[16px] font-semibold text-black font-['Poppins'] leading-6 heading3">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs md:text-base text-[#666666] font-normal font-['Poppins'] leading-5 px-2 whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
