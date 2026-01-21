"use client";

import Image from "next/image";
import Comment from "@/public/AboutUs/Comment.svg";
import { motion } from "framer-motion";

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
    <section className="w-full bg-white">
      <div className="max-w-full">
        <h2 className="text-center heading2">Client Stories</h2>

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, backgroundColor: "#ffffff" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -3,
                backgroundColor: "#f2f2f2",
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.12)"
              }}
              whileTap={{
                scale: 0.97,
                backgroundColor: "#f2f2f2"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
                delay: index * 0.35
              }}
              className="border border-[#e9e9e9] rounded-2xl p-8 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-16 h-16 flex items-center justify-center mb-4"
              >
                <Image
                  src={Comment}
                  alt="quote"
                  width={30}
                  height={30}
                  className="mb-4"
                />
              </motion.div>

              <p className="text-sm leading-relaxed text-black font-normal font-['Poppins'] flex-grow">
                {story.text}
              </p>

              <div className="mt-auto pt-6">
                <p className="text-sm font-normal font-['Poppins'] text-black">
                  {story.name}
                </p>
                <p className="text-xs text-[#495057] font-normal font-['Poppins']">
                  {story.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
