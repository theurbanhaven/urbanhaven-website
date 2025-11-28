import Image from "next/image";
import Minimal from "@/public/Styles/Minimalistic.png";
import Eclectic from "@/public/Styles/Eclectic.png";
import Modern from "@/public/Styles/Modern.png";
import Rustic from "@/public/Styles/Rustic.png";
import Traditional from "@/public/Styles/Traditional.png";
import Nordic from "@/public/Styles/Nordic.png";
export default function StyleCards() {
  const styles = [
    {
      title: "Minimalistic",
      img: Minimal
    },
    {
      title: "Eclectic",
      img: Eclectic
    },
    {
      title: "Modern",
      img: Modern
    },
    {
      title: "Rustic",
      img: Rustic
    },
    {
      title: "Traditional",
      img: Traditional
    },
    {
      title: "Nordic",
      img: Nordic
    }
  ];

  return (
    <section className="w-full px-[240px]">
      <h2 className="heading2-style text-center mb-12">
        Explore Our Curated Styles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {styles.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-[460px] h-[328px] object-cover transition-all duration-500"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0"></div>

            {/* text content */}
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="heading3">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
