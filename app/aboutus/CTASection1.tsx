"use client";

import Consultation from "@/app/components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";
import { motion } from "framer-motion";

export default function CTASection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full bg-[#332959] py-8 sm:py-8 md:py-12 lg:py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-white font-bold font-['Poppins'] leading-[28px] sm:leading-[28px] md:leading-[28px] lg:leading-[48px]">
        Ready to start your home's transformation?
      </h2>

      <p className="text-white text-xs sm:text-xs md:text-sm lg:text-xl font-normal font-['Poppins'] mt-4">
        Book your free design consultation today and let us tailor your space
        with style, craftsmanship and clarity.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Consultation onClick={openConsultModal} className="mt-8" />
      </motion.div>
    </section>
  );
}
