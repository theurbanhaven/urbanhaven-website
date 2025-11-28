import Image from "next/image";
import Minimalist from "@/public/LandingPageImage/Minimalistic.png";
import Eclectic from "@/public/LandingPageImage/Eclectic.png";
import Modern from "@/public/LandingPageImage/Modern.png";
import Rustic from "@/public/LandingPageImage/Rustic.png";
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
        <h2 className="heading2 text-center">
          Inspiration for home interior designs
        </h2>
        <p className="text-[#495057] text-base font-normal font-['Poppins'] text-center mt-4">
          Give your home a new look with these interior design ideas curated for
          you
        </p>
        <div className="flex gap-2 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-6 md:overflow-x-visible scroll-smooth mt-8">
          {inspirations.map(({ src, label }) => (
            <div
              key={label}
              className="relative flex-shrink-0 w-[448px] md:w-full overflow-hidden rounded-[17px] shadow-md"
              style={{ height: 328 }}
            >
              <Image
                src={src}
                alt={label}
                className="height-full"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              <span className="heading-3 absolute left-5 bottom-5 text-white z-10">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
