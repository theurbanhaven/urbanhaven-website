"use client";

import BookFreeConsultation from "@/app/components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function CTASection() {
  const { openModal } = useModal();
  return (
    <section className="w-full bg-[#332959] py-16 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className=" md:text-[40px] text-white text-5xl font-bold font-['Poppins'] leading-[48px]">
        Ready to Transform Your Space?
      </h2>

      {/* Sub text */}
      <p className="text-white text-lg md:text-base font-normal font-['Poppins'] mt-4 leading-7">
        Let's create your dream home together. Book a free consultation with our
        design experts today.
      </p>

      {/* Button */}
      <button onClick={openModal}>
        <BookFreeConsultation className="mt-8" />
      </button>
    </section>
  );
}
