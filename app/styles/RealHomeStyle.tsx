import Image from "next/image";
import Modern3BHK from "@/public/Styles/Modern3BHKFlat.png";
import RusticVilla from "@/public/Styles/RusticVilla.png";
import PremiumModularKitchen from "@/public/Styles/PremiumModularKitchen.png";
import Minimalistic2BHK from "@/public/Styles/CompactMinimalistic.png";
import Eclectic from "@/public/Styles/EclecticSuite.png";
import Nordic from "@/public/Styles/NordicHomeSuite.png";

export default function RealHomeStyle() {
  const style = [
    { img: Modern3BHK },
    { img: RusticVilla },
    { img: PremiumModularKitchen },
    { img: Minimalistic2BHK },
    { img: Eclectic },
    { img: Nordic }
  ];

  return (
    <section className="w-full">
      <h2 className="heading2-style text-center mb-4">
        See These Styles in Real Homes
      </h2>

      <div className="text-center text-[#666666] text-base sm:text-lg font-normal font-['Poppins'] mb-8">
        Browse across real UrbanHaven homes brought to life in the styles above.
        From minimal-chic apartments to rustic villas, each project shows how
        the style translates to your space.
      </div>

      {/* MOBILE: horizontal scroll */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4 
          md:hidden
        "
      >
        {style.map((item, index) => (
          <div
            key={index}
            className="
              relative 
              min-w-[280px] max-w-[280px] flex-shrink-0 
              rounded-2xl overflow-hidden shadow-md
              aspect-[4/3]
            "
          >
            <Image
              src={item.img}
              alt="Interior style image"
              className="w-full h-full object-cover object-[20%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* TABLET + DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {style.map((item, index) => (
          <div
            key={index}
            className="
              relative rounded-2xl overflow-hidden shadow-md
              aspect-[4/3]
            "
          >
            <Image
              src={item.img}
              alt="Interior style image"
              className="w-full h-full object-cover object-[20%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
