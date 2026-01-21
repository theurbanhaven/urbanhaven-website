import Image from "next/image";
import Minimal from "@/public/Styles/Minimalistic.png";
import Eclectic from "@/public/Styles/Eclectic.png";
import Modern from "@/public/Styles/Modern.png";
import Rustic from "@/public/Styles/Rustic.png";
import Traditional from "@/public/Styles/Traditional.png";
import Nordic from "@/public/Styles/Nordic.png";

export default function StyleCards() {
  const styles = [
    { title: "Minimalistic", img: Minimal },
    { title: "Eclectic", img: Eclectic },
    { title: "Modern", img: Modern },
    { title: "Rustic", img: Rustic },
    { title: "Traditional", img: Traditional },
    { title: "Nordic", img: Nordic }
  ];

  return (
    <section className="w-full ">
      <h2 className="heading2-style text-center mb-6 lg:mb-12">
        Explore Our Curated Styles
      </h2>

      {/* MOBILE: horizontal scroll */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4 
          md:hidden
        "
      >
        {styles.map((item, index) => (
          <div
            key={index}
            className="
        relative                        
        min-w-[280px] max-w-[280px]
        flex-shrink-0 rounded-2xl 
        overflow-hidden shadow-md
        aspect-[4/3]
      "
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="heading3">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* TABLET + DESKTOP: GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {styles.map((item, index) => (
          <div
            key={index}
            className="
              relative rounded-2xl overflow-hidden shadow-md
              aspect-[4/3]
            "
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="heading3">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
