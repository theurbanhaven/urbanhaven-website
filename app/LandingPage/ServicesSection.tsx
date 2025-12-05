import Image from "next/image";
import ModularInterior from "@/public/LandingPageImage/ModularInterior1.png";
import FullHomeInterior from "@/public/LandingPageImage/FullHomeInteriors.png";
import LuxuryInterior from "@/public/LandingPageImage/Luxury.png";
import RenovationInterior from "@/public/LandingPageImage/Renovation.png";

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      {/* Heading */}
      <div className="mb-4 px-6">
        <h2 className="heading2 text-center mb-4">
          Everything Your Home Needs, All Under One Roof
        </h2>
        <p className="text-center text-[#495057] mb-8 text-sm md:text-base font-['Poppins'] font-normal">
          From full-home interiors to renovations and modular setups, we cover
          every need. With our in- <br />
          house manufacturing, excellence is built into every step.
        </p>
      </div>

      {/* Services Cards - Horizontal scroll on mobile */}
      <div
        className="
        flex overflow-x-auto space-x-4 px-6 lg:px-45
        md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-0 md:gap-4 md:overflow-x-visible
      "
      >
        {/* Card 1 */}
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={ModularInterior}
            alt="Modular Interiors"
            className="rounded w-full h-full object-cover"
          />
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={FullHomeInterior}
            alt="Full Home Interiors"
            className="rounded w-full h-full object-cover"
          />
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={LuxuryInterior}
            alt="Luxury Interiors"
            className="rounded w-full h-full object-cover"
          />
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={RenovationInterior}
            alt="Renovations"
            className="rounded w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
