"use client";
import Image from "next/image";
import Modern from "@/public/LandingPageImage/BackgroundModern.png";
import Rustic from "@/public/LandingPageImage/BackgroundRustic.png";
import Minimalistic from "@/public/LandingPageImage/BackgroundMinimalistic.png";
import Eclectic from "@/public/LandingPageImage/BackgroundEclectic.png";
import Nordic from "@/public/LandingPageImage/BackgroundNordic.png";
import Modern2 from "@/public/LandingPageImage/BackgroundModular.png";

const featured = [
  { src: Modern, label: "Modern" },
  { src: Rustic, label: "Rustic" },
  { src: Minimalistic, label: "Minimalistic" },
  { src: Eclectic, label: "Eclectic" },
  { src: Nordic, label: "Nordic" },
  { src: Modern2, label: "Modern2" }
];

export default function FeaturedProjectSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-full ">
        <h2 className="heading2 text-center">
          Homes We’ve Transformed - A Showcase of Our Work
        </h2>
        <p className="text-[#666666] text-base font-normal font-['Poppins'] text-center mt-4">
        Spaces reimagined through thoughtful design and skilled craftsmanship
        </p>
        <div
          className="flex gap-4 overflow-x-auto md:overflow-visible pb-4 
          md:grid md:grid-cols-2 lg:grid-cols-3 
          md:gap-6 scroll-smooth mt-8"
        >
          {" "}
          {featured.map(({ src, label }) => (
            <div
              key={label}
              className="
              relative flex-shrink-0 
              w-full min-w-[280px]
              md:min-w-0
              rounded-2xl overflow-clip shadow-md 
              aspect-[487/417]
            "
            >
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
