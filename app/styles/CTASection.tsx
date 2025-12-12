import BookFreeConsultation from "@/app/components/ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function CTASection() {
  const { openConsultModal } = useModal();

  return (
    <section className="w-full bg-[#332959] py-8 sm:py-8 md:py-12 lg:py-16 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-white font-bold font-['Poppins'] leading-[48px]">
        Ready to Choose a Style?
      </h2>

      {/* Sub text */}
      <p className="text-white text-xs sm:text-xs md:text-sm lg:text-xl font-normal font-['Poppins'] mt-4">
        Book a free consultation and let us tailor your space in the style that{" "}
        <br />
        reflects your home and you.
      </p>

      <BookFreeConsultation onClick={openConsultModal} className="mt-8" />
    </section>
  );
}
