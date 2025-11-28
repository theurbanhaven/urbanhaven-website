"use client";
import Image from "next/image";
import HomeImage from "@/public/LandingPageImage/Home.png";
import BookFreeConsultation from "../components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function HeroSection() {
  const { openModal } = useModal();

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
        className="flex flex-col justify-center px-6 md:px-10 lg:px-15 py-4"
        style={{ aspectRatio: "971 / 688" }}
      >
        <h1 className="heading1 text-left">
          Luxury Interiors,
          <br />
          Thoughtfully Crafted
        </h1>

        <p className="text-black text-[12px] lg:text-[16px] font-normal font-['Poppins'] leading-6 max-w-[379px] mt-4 text-left">
          Timeless designs and perfect finishes that make your home truly yours.
        </p>

        <div className="flex justify-start w-full mt-2 lg:mt-12">
          <button onClick={openModal}>
            <BookFreeConsultation />
          </button>
        </div>
      </div>
    </section>
  );
}
