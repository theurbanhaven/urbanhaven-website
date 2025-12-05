import Image from "next/image";
import Minimalist from "@/public/LandingPageImage/Minimalistic.png";
import Eclectic from "@/public/LandingPageImage/Eclectic.png";
import Modern from "@/public/LandingPageImage/Modern.svg";
import Rustic from "@/public/LandingPageImage/Rustic.svg";
import Traditional from "@/public/LandingPageImage/Traditional.png";
import Nordic from "@/public/LandingPageImage/Nordic.png";

const inspirations = [
  { src: Minimalist, label: "Minimalist" },
  { src: Eclectic, label: "Eclectic" },
  { src: Modern, label: "Modern" },
  { src: Rustic, label: "Rustic" },
  { src: Traditional, label: "Traditional" },
  { src: Nordic, label: "Nordic" }
];

export default function InspirationSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-4 xl:px-45">
        {/* Heading */}
        <h2 className="heading2 text-center">
          Inspiration that helps you design the perfect home
        </h2>
        <p className="text-[#495057] text-base font-normal font-['Poppins'] text-center mt-4">
          Discover curated interior ideas to elevate your living space
        </p>

        {/* Cards Container */}
        <div
          className="
          flex gap-4 overflow-x-auto md:overflow-visible pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 scroll-smooth mt-8"
        >
          {inspirations.map(({ src, label }) => (
            <div
              key={label}
              className="
           relative flex-shrink-0 
           w-[448px] md:w-full 
           rounded-2xl overflow-clip shadow-md 
           aspect-[4/3]
         "
            >
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover" // NO CROP — FULL IMAGE VISIBLE
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Label */}
              <span className="absolute left-5 bottom-5 text-white font-semibold text-xl">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
