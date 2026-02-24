"use client";
import Image from "next/image";
import Pranay from "@/public/AboutUs/pranayphoto 1.svg";
import Manish from "@/public/AboutUs/Manish.svg";
import Karan from "@/public/AboutUs/Karan.svg";
import Vaibhav from "@/public/AboutUs/Vaibhav.svg";
import Kavita from "@/public/AboutUs/Kavita.svg";
import Ankitesh from "@/public/AboutUs/Ankitesh.svg";
import Sahil from "@/public/AboutUs/Sahil.svg";
import Sahil1 from "@/public/AboutUs/Sahil1.jpg";
import Vyomika from "@/public/AboutUs/Vyomika.svg";
import Kirti from "@/public/AboutUs/Kirti.svg";
import Vaishnavi from "@/public/AboutUs/Vaishnavi.svg";

export default function TeamSection() {
  const coFounders = [
    {
      name: "Manish Garg",
      cllg: "(IIT Dhanbad)",
      role: "Co-Founder, Head of Design + Tech",
      image: Manish
    },
    {
      name: "Karan Bhardwaj",
      role: "Co-Founder, Head of Sales + Marketing",
      image: Karan
    },
    {
      name: "Vaibhav Bansal",
      role: "Co-Founder, Head of Production + Operation",
      image: Vaibhav
    }
  ];

  const urbanHavenTeam = [
    { name: "Kavita Joshi", role: "Senior Interior Designer", image: Kavita },
    { name: "Kirti Pahuja", role: "Interior Designer + HR", image: Kirti },
    { name: "Sahil", role: "Production Design Manager", image: Sahil },
    { name: "Vyomika Saxena", role: "Interior Designer", image: Vyomika },
    { name: "Vaishnavi Verma", role: "Interior Designer", image: Vaishnavi },
    { name: "Vineet Kumar", role: "Interior Consultant", image: "" },
    { name: "Ankitesh Thakur", role: "Marketing Consultant", image: Ankitesh },
    { name: "Pranay Kumar", role: "Software Developer", image: Pranay },
    { name: "Sagnik Saha", role: "Graphic & UI/UX Designer", image: "" }
  ];

  return (
    <section className="w-full">
      <h2 className="text-center heading2">Meet Our Team</h2>

      <p className="text-center text-[#495057] text-base font-normal font-['Poppins'] mt-4">
        The passionate people behind Urbanhaven
      </p>

      <h3 className="text-center text-[32px] font-medium font-['Poppins'] mt-8">
        Co-Founders
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-full mx-auto text-center">
        {coFounders.map((founder, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-sm p-6"
          >
            <Image src={founder.image} alt="avatar" width={200} height={200} />
            <h4 className="mt-4 text-2xl font-semibold font-['Poppins']">
              {founder.name}
            </h4>
            <p className="text-base font-normal font-['Poppins'] text-[#f95b46] mt-1 text-center">
              {founder.cllg}
            </p>
            <p className="text-base font-normal font-['Poppins'] text-[#f95b46] mt-1 text-center">
              {founder.role}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-center text-[32px] font-medium font-['Poppins'] mt-8">
        Urbanhaven Team
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-full mx-auto text-center">
        {urbanHavenTeam.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-sm p-6"
          >
            <Image
              src={member.image}
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="mt-3 text-2xl font-semibold font-['Poppins']">
              {member.name}
            </h4>
            <p className="text-base font-normal font-['Poppins'] text-[#495057] mt-1 text-center">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
