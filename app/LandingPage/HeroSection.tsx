"use client";
import Image from "next/image";
import HomeImage from "@/public/LandingPageImage/Home.png";
import BookFreeConsultation from "../components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function HeroSection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 pt-16">
      {/* LEFT SIDE IMAGE WITH PERFECT ASPECT RATIO */}
      <div className="relative w-full" style={{ aspectRatio: "971 / 688" }}>
        <Image
          src={HomeImage}
          alt="Hero"
          fill
          priority
          className="object-contain object-left-top"
        />
      </div>

      {/* RIGHT SIDE CONTENT – SAME HEIGHT AS LEFT */}
      <div
        className="
    flex flex-col justify-center 
    items-center text-center            
    md:items-start md:text-left          
    px-6 md:px-10 lg:px-15 py-4
  "
        style={{ aspectRatio: "999 / 688" }}
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
    max-w-[300px] mt-4 sm:leading-[16px]
  "
        >
          Timeless designs and perfect finishes that make your home truly yours.
        </p>

        <div className="flex w-full justify-center md:justify-start mt-[24px] lg:mt-[48px]">
          <button onClick={openConsultModal}>
            <BookFreeConsultation />
          </button>
        </div>
      </div>
    </section>
  );
}
