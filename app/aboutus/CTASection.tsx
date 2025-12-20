"use client";

import Portfolio from "@/app/components/ui/PortfolioButton";
import { useModal } from "@/app/context/Modalcontext";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full bg-[#332959] py-8 sm:py-8 md:py-12 lg:py-16 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-white font-bold font-['Poppins'] leading-[28px] sm:leading-[28px] md:leading-[28px] lg:leading-[48px]">
        Your Home. Our Craft. The UrbanHaven Promise.
      </h2>

      {/* Sub text */}
      <p className="text-white text-xs sm:text-xs md:text-sm lg:text-xl font-normal font-['Poppins'] mt-4">
        From Delhi to Noida to Ghaziabad - we design and build interiors you'll
        love returning to.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Portfolio className="mt-8" />
      </motion.div>
    </section>
  );
}
