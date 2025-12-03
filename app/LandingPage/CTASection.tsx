"use client";

import BookFreeConsultation from "@/app/components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function CTASection() {
  const { openConsultModal } = useModal();
  return (
    <section className="w-full min-h-[300px] bg-[#332959] py-8 md:py-12 lg:py-16 px-10 md:px-11 lg:px-12 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-2xl lg:text-5xl text-white font-bold font-['Poppins'] leading-[48px]">
        Ready to Transform Your Space?
      </h2>

      {/* Sub text */}
      <p className="text-white text-lg md:text-base font-normal font-['Poppins'] mt-4 leading-7">
        Let's create your dream home together. Book a free consultation with our
        design experts today.
      </p>

      {/* Button */}
      <button onClick={openConsultModal}>
        <BookFreeConsultation className="mt-8" />
      </button>
    </section>
  );
}
