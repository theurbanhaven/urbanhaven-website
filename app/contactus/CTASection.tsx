import BookFreeConsultation from "@/app/components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";
import { motion } from "framer-motion";

export default function CTASection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full bg-[#332959] py-8 sm:py-8 md:py-12 lg:py-16 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-6xl text-white font-bold font-['Poppins'] leading-[28px] sm:leading-[28px] md:leading-[28px] lg:leading-[28px]">
        Let's Create Your Ideal Home Together
      </h2>
      {/* Sub text */}
      <p className="text-white text-xs sm:text-xs md:text-sm lg:text-xl font-normal font-['Poppins'] mt-4">
        Reach out to UrbanHaven's design team—based in Delhi NCR—for a free
        consultation and quote.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <BookFreeConsultation onClick={openConsultModal} className="mt-8" />
      </motion.div>
      .
    </section>
  );
}
