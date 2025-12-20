"use client";

import Image from "next/image";
import StarIcon from "@/public/LandingPageImage/Star.svg";
import "swiper/css";
import { motion, Variants, easeOut } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: `"I got my house renovated from UrbanHaven, and the process was seemless.They understood my requirement very well, and their final designs exceeded my expectations. Highly recommended."`,
      name: "Amit Singhal",
      location: "Noida"
    },
    {
      text: `"From concept to finish, the quality amazed us. Best decision ever for our home renovation!"`,
      name: "Anjali Verma",
      location: "Noida"
    },
    {
      text: `"Professional team, transparent pricing, and stunning results. Highly recommend UrbanHaven!"`,
      name: "Vikram Singh",
      location: "Gurgaon"
    },
    {
      text: `"From the first meeting to the final handover, everything was organized. The designs were trendy and the materials used feel premium."`,
      name: "Sandhya",
      location: "Ghaziabad"
    },
    {
      text: `"UrbanHaven made our kitchen come alive, on time and on budget. The attention to detail was incredible!"`,
      name: "Aman Singh",
      location: "Gurgaon"
    }
  ];

  const stats = [
    { number: "10 Years", label: "Flat warranty" },
    { number: "45 Days", label: "Move-in guarantee" },
    { number: "146", label: "Quality checks" },
    { number: "In-house", label: "Manufacturing" }
  ];

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };
  return (
    <section className="w-full min-h-[380px]">
      <h2 className="heading2 text-center mb-6 md:mb-6 lg:mb-8">
        Why choose us
      </h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[316px] md:w-[316px] lg:w-[426px] testimonial-card border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex-shrink-0"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={StarIcon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              <p className="text-[#666666] text-base font-normal font-['Poppins'] leading-6 mb-4">
                {item.text}
              </p>
              <p className="text-[#0f0f0f] text-base font-semibold font-['Poppins'] leading-6">
                {item.name}
              </p>
              <p className="text-[#666666] font-normal font-['Poppins'] leading-5 text-sm">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-10 mt-6 md:mt-6 lg:mt-8 justify-items-center text-center mx-auto w-full max-w-[1100px]"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-xl lg:text-[32px] font-bold text-[#F95B46]">
              {stat.number}
            </h3>
            <p className="text-sm text-[#666666]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
