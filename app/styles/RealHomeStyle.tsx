import Image from "next/image";
import Modern3BHK from "@/public/Styles/Modern3BHKFlat.png";
import RusticVilla from "@/public/Styles/RusticVilla.png";
import PremiumModularKitchen from "@/public/Styles/PremiumModularKitchen.png";
import Minimalistic2BHK from "@/public/Styles/CompactMinimalistic.png";
import Eclectic from "@/public/Styles/EclecticSuite.png";
import Nordic from "@/public/Styles/NordicHomeSuite.png";

export default function RealHomeStyle() {
  const style = [
    {
      img: Modern3BHK
    },
    {
      img: RusticVilla
    },
    {
      img: PremiumModularKitchen
    },
    {
      img: Minimalistic2BHK
    },
    {
      img: Eclectic
    },
    {
      img: Nordic
    }
  ];

  return (
    <section className="w-full py-16 px-60">
      <h2 className="heading2-style text-center mb-4">
        See These Styles in Real Homes
      </h2>
      <div className="self-stretch text-center justify-center text-[#666666] text-lg text-base font-normal font-['Poppins'] mb-8">
        Browse across real UrbanHaven homes brought to life in the styles above.
        From minimal-chic <br /> apartments to rustic villas, each project shows
        how the style translates to your space.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {style.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            <Image
              src={item.img}
              alt="Interior style image"
              className="w-[465px] h-[328px] object-cover transition-all duration-500"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>

            {/* text content */}
          </div>
        ))}
      </div>
    </section>
  );
}
