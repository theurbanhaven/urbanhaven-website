"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useModal } from "@/app/context/Modalcontext";
import ModernBedroom from "@/public/LandingPageImage/Modern-Bedroom.png";
import CloseIcon from "@/public/LandingPageImage/CloseIcon.png";

export default function ConsultationModal() {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Panel */}
      <div className="relative bg-white rounded-xl shadow-xl w-[432px] max-h-[95vh] overflow-y-auto z-10">
        {/* Top section */}
        <div className="flex w-full sticky top-0">
          <div className="w-1/2 h-[180px]">
            <Image
              src={ModernBedroom}
              alt="Modern Bedroom"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 bg-[#31224B] p-5 relative flex items-center justify-center text-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 bg-white rounded-md p-1 cursor-pointer hover:opacity-80"
            >
              <Image src={CloseIcon} alt="close" height={28} width={28} />
            </button>

            <h2 className="text-white text-xl font-semibold leading-snug">
              Lets design your <br /> Dream home
            </h2>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form Submitted");
            closeModal();
          }}
          className="px-10 py-6 space-y-4"
        >
          <input
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />
          <input
            placeholder="Email ID"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />
          <input
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />
          <input
            placeholder="Pincode"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />

          <button
            type="submit"
            className="max-w-[227px] p-3 mx-auto h-[48px] bg-[#F95B46] text-white text-lg font-medium rounded-md flex justify-center items-center"
          >
            Book Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
}
