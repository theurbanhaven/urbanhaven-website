"use client";

import Portfolio from "@/app/components/ui/PortfolioButton";
import { useModal } from "@/app/context/Modalcontext";

export default function CTASection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full bg-[#332959] py-8 sm:py-8 md:py-12 lg:py-16 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-[64px] text-white font-bold font-['Poppins'] leading-[64px] tracking-tight">
        Your Home. Our Craft. <br />
        The UrbanHaven Promise.
      </h2>

      {/* Sub text */}
      <p className="text-white text-center justify-center text-xs sm:text-xs md:text-sm lg:text-lg font-normal font-['Poppins'] leading-6 mt-4">
        From Delhi to Noida to Ghaziabad - we design and build interiors you'll
        love returning to.
      </p>

      {/* Button */}
      <button>
        <Portfolio className="mt-8" />
      </button>
    </section>
  );
}
