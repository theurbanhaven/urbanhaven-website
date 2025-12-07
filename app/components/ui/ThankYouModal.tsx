"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useModal } from "@/app/context/Modalcontext";

import ModernBedroom from "@/public/LandingPageImage/Modern-Bedroom.png";
import CloseIcon from "@/public/LandingPageImage/CloseIcon.png";

export default function ThankYouModal() {
  const { modalType, closeModal } = useModal();

  const isOpen = modalType === "THANKYOU";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto px-2">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-xl shadow-xl w-[432px] max-h-[95vh] overflow-y-auto z-10">
        {/* Top Image Section */}
        <div className="relative w-full h-[250px]">
          <Image
            src={ModernBedroom}
            alt="Modern Bedroom"
            className="w-full h-full object-cover rounded-t-xl"
          />

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 bg-white rounded-md p-1 cursor-pointer hover:opacity-80 shadow-md"
          >
            <Image src={CloseIcon} alt="close" height={28} width={28} />
          </button>
        </div>

        {/* Content Section */}
        <div className="py-8 px-2 text-center">
          <p className="text-[#000000] text-xl font-bold font-['Poppins']">
            Thank You for Reaching Out.
          </p>

          <p className="text-black text-md font-normal font-['Poppins'] mt-3 leading-[18px]">
            We’ve received your details and our design experts will get in touch
            with you shortly.
          </p>

          <p className="text-black text-md font-normal font-['Poppins']  mt-6 leading-[18px]">
            At Urbanhaven, we believe every space deserves a touch of elegance —
            and we can’t wait to craft yours.
          </p>

          <p className="text-black/60 mt-4 text-lg font-normal font-['Poppins']">
            Meanwhile, Take a Look at Our Work
          </p>

          {/* Button */}
          <button
            onClick={() => {
              // 👉 You can redirect to projects page
              window.location.href = "/styles";
            }}
            className="mt-5 w-[260px] h-[48px] bg-[#F95B46] cursor-pointer text-white rounded-md text-lg font-medium mx-auto"
          >
            See Our Recent Styles
          </button>
        </div>
      </div>
    </div>
  );
}
