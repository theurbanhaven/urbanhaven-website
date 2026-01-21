import Image from "next/image";
import FullHome from "@/public/LandingPageImage/FullHome.png";
import ModularInterior from "@/public/LandingPageImage/ModularInterior.png";
import LuxuryInterior from "@/public/LandingPageImage/LuxuryInterior.png";
import Renovation from "@/public/LandingPageImage/Renovation.png";
export default function ServicesSection() {
  return (
    <section className="w-full bg-white ">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="heading2 text-center mb-2">
          One-stop shop for all things interiors{" "}
        </h2>
        <p className="text-center text-[#495057] mb-8 text-lg font-['Poppins'] font-normal">
          Be it end-to-end interiors, renovation or modular solutions, we have
          it all for your home. With in-
          <br />
          house manufacturing, we deliver quality from start to finish.
        </p>
      </div>

      <div
        className="
        flex overflow-x-auto space-x-4  
        md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-0 md:gap-4 md:overflow-x-visible
      "
      >
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={FullHome}
            alt="Modular Interiors"
            className="rounded w-full h-full object-cover"
          />
        </div>
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={ModularInterior}
            alt="Full Home Interiors"
            className="rounded w-full h-full object-cover"
          />
        </div>
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={LuxuryInterior}
            alt="Luxury Interiors"
            className="rounded w-full h-full object-cover"
          />
        </div>
        <div className="bg-white rounded-2xl text-center flex-shrink-0 w-72 md:w-auto flex flex-col items-center">
          <Image
            src={Renovation}
            alt="Renovations"
            className="rounded w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
