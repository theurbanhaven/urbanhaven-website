import Image from "next/image";
import Modern from "@/public/LandingPageImage/BackgroundModern.png";
import Rustic from "@/public//LandingPageImage/BackgroundRustic.png";
import Minimalistic from "@/public/LandingPageImage/BackgroundMinimalistic.png";
import Modern2 from "@/public/LandingPageImage/BackgroundModern2.png";
import Eclectic from "@/public/LandingPageImage/BackgroundEclectic.png";
import Nordic from "@/public/LandingPageImage/BackgroundNordic.png";

const featured = [
  { src: Modern, label: "Modern" },
  { src: Rustic, label: "Rustic" },
  { src: Minimalistic, label: "Minimalistic" },
  { src: Modern2, label: "Modern2" },
  { src: Eclectic, label: "Eclectic" },
  { src: Nordic, label: "Nordic" }
];

export default function FeaturedProjectSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-4 xl:px-45">
        <h2 className="heading2 text-center">Featured Projects</h2>
        <p className="text-[#666666] text-base font-normal font-['Poppins'] text-center mt-4">
          Spaces transformed with our expertise and craftsmanship
        </p>
        <div className="flex gap-2 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-6 md:overflow-x-visible mt-8">
          {featured.map(({ src, label }) => (
            <div
              key={label}
              className="relative flex-shrink-0 w-[464px] md:w-full overflow-hidden rounded-[17px] shadow-md"
              style={{ height: 392 }}
            >
              <Image
                src={src}
                alt={label}
                className="height-full"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
