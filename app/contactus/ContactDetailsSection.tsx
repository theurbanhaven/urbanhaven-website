"use client";

import Image from "next/image";
import Contact from "@/public/ContactUs/Contact.svg";
import Location from "@/public/ContactUs/Location.svg";
import Email from "@/public/ContactUs/Email.svg";
import Service from "@/public/ContactUs/Service.svg";

export default function ContactInfoSection() {
  const data = [
    {
      icon: Contact,
      title: "Phone",
      line1: "+91-92113 24572",
      line2: "Tue-Sun (9 am-6 pm)"
    },
    {
      icon: Email,
      title: "Email",
      line1: "vinit@urbanhaven.in",
      line2: "24-hour response time"
    },
    {
      icon: Location,
      title: "Office Address",
      line1: "UrbanHaven",
      line2: "Cozen, B158, Sector 63, Noida, UP – 201309"
    },
    {
      icon: Service,
      title: "Service Areas",
      line1: "Delhi, Noida, Ghaziabad",
      line2: "& Greater Noida (NCR)"
    }
  ];

  return (
    <section className="w-full py-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">
        <h2
          className="text-[#0f0f0f] text-center font-bold font-['Poppins']
        text-5xl leading-[48px] mb-[48px]"
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="
                 rounded-xl shadow-md border border-gray-200 
                flex flex-col items-center text-center 
                p-6 hover:scale-105 transition-all bg-white
              "
            >
              <div className="mb-4">
                <Image src={item.icon} alt={item.title} className="w-14 h-14" />
              </div>

              <h3 className="text-[#0f0f0f] text-lg font-semibold font-['Poppins'] leading-7 mb-2">
                {item.title}
              </h3>

              <p className="text-[#666666] text-base font-normal font-['Poppins'] leading-6">
                {item.line1} <br /> {item.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
