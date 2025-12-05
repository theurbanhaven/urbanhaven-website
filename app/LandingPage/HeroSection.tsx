"use client";
import Image from "next/image";
import HomeImage from "@/public/LandingPageImage/Home.png";
import BookFreeConsultation from "../components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function HeroSection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 pt-16">
      {/* IMAGE SECTION */}
      <div
        className="relative w-full 
        h-[300px] 
        sm:h-[400px] 
        md:h-[500px] 
        lg:h-[650px] 
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

      {/* CONTENT SECTION */}
      <div
        className="
          flex flex-col justify-center 
          items-center text-center            
          md:items-start md:text-left          
          px-6 md:px-10 lg:px-14 py-8
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
            font-normal leading-6
            max-w-[320px] mt-6
          "
        >
          Timeless designs and perfect finishes that make your home truly yours.
        </p>

        <div className="flex w-full justify-center md:justify-start mt-6">
          <button onClick={openConsultModal}>
            <BookFreeConsultation />
          </button>
        </div>

        {/* ICON ROW */}
        <div
          className="
            w-full grid grid-cols-1 sm:grid-cols-3 
            gap-4 mt-8 text-center md:text-left
          "
        >
          <div>
            <span className="text-[#FF6A5A] font-semibold text-base">
              10 Years
            </span>
            <span className="text-[#666] text-sm block">Flat warranty</span>
          </div>

          <div>
            <span className="text-[#FF6A5A] font-semibold text-base">
              45 Days
            </span>
            <span className="text-[#666] text-sm block">Move-in guarantee</span>
          </div>

          <div>
            <span className="text-[#FF6A5A] font-semibold text-base">
              In-house
            </span>
            <span className="text-[#666] text-sm block">Manufacturing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
