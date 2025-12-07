"use client";

import Image from "next/image";
import Comment from "@/public/AboutUs/Comment.svg";

export default function ClientStoriesSection() {
  const stories = [
    {
      text: "I got my house renovated from UrbanHaven, and the process was seemless.They understood my requirement very well, and their final designs exceeded my expectations. Highly recommended.",
      name: "Amit Singhal",
      location: "Noida"
    },
    {
      text: "From the first meeting to the final handover, everything was organized. The designs were trendy and the materials used feel premium.",
      name: "Sandhya",
      location: "Ghaziabad"
    },
    {
      text: "Extremely satisfied - the team at UrbanHaven at once understood how and what I wanted, and delivered exactly that. I wouldn't hesitate to recommend UrbanHaven to anybody.",
      name: "Divya Sharma",
      location: " Greater Noida (NCR)"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center heading2">Client Stories</h2>

        {/* Stories */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-3 
            gap-8 
            mt-12
          "
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-8
                border
                border-gray-200
                flex
                flex-col
                hover:scale-105
              "
            >
              {/* Quote Icon */}
              <Image
                src={Comment}
                alt="quote"
                width={30}
                height={30}
                className="mb-4"
              />

              {/* Story Text */}
              <p className="text-sm leading-relaxed text-black font-normal font-['Poppins'] flex-grow">
                {story.text}
              </p>

              {/* User Info */}
              <div className="mt-auto pt-6">
                <p className="text-sm font-normal font-['Poppins'] text-black">
                  {story.name}
                </p>
                <p className="text-xs text-[#495057] font-normal font-['Poppins']">
                  {story.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
