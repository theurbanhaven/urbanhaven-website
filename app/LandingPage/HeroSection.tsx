"use client";
import Image from "next/image";
import HomeImage from "@/public/LandingPageImage/Home.png";
import BookFreeConsultation from "../components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 pt-16">
      <div
        className="
     relative w-full 
     h-[65vw]      
     sm:h-[55vw] 
     md:h-[52vw]  
     lg:h-[650px] 
     overflow-hidden
  "
      >
        <Image
          src={HomeImage}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        className="
          flex flex-col justify-center 
          items-center text-center            
          md:items-start md:text-left          
          px-8 md:px-10 lg:px-14 py-8
        "
      >
        <h1 className="heading1">
          Luxury Interiors,
          <br />
          Thoughtfully Crafted
        </h1>

        <p
          className="
            text-black text-sm lg:text-[16px]
            font-normal font-['Poppins'] leading-6
            max-w-[320px] mt-6
          "
        >
          Timeless designs and perfect finishes that make your home truly yours.
        </p>

        <div className="flex w-full justify-center md:justify-start mt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <BookFreeConsultation onClick={openConsultModal} />
          </motion.div>
        </div>

        <div
          className="
            w-full grid grid-cols-1 sm:grid-cols-3 
            gap-4 mt-8 text-center md:text-left
          "
        >
          <div className="flex flex-col sm:border-l-[3px] border-[#f95b46] sm:pl-4">
            <span className="text-[#f95b46] font-semibold font-['Poppins'] text-[lg] sm:text-[lg] md:text-[lg] lg:text-[2xl]">
              10 Years
            </span>
            <span className="text-[#495057] text:sm sm:text-sm md:text-sm lg:text-[2xl] block font-normal font-['Poppins']">
              Flat warranty
            </span>
          </div>

          <div className="flex flex-col sm:border-l-[3px] border-[#f95b46] sm:pl-4">
            <span className="text-[#f95b46] font-semibold font-['Poppins'] text-[lg] sm:text-[lg] md:text-[lg] lg:text-[2xl]">
              45 Days
            </span>
            <span className="text-[#495057] text:sm sm:text-sm md:text-sm lg:text-[2xl] block font-normal font-['Poppins']">
              Move-in guarantee
            </span>
          </div>

          <div className="flex flex-col sm:border-l-[3px] border-[#f95b46] sm:pl-4">
            <span className="text-[#f95b46] font-semibold font-['Poppins'] text-[lg] sm:text-[lg] md:text-[lg] lg:text-[2xl]">
              In-house
            </span>
            <span className="text-[#495057] text:sm sm:text-sm md:text-sm lg:text-[2xl] block font-normal font-['Poppins']">
              Manufacturing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
