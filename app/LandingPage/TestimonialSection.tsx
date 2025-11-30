"use client";

import Image from "next/image";
import StarIcon from "@/public/LandingPageImage/Star.svg";
import "swiper/css";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: `"UrbanHaven made our kitchen come alive, on time and on budget. The attention to detail was incredible!"`,
      name: "Priya & Rahul Sharma",
      location: "Delhi"
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
      text: `"UrbanHaven made our kitchen come alive, on time and on budget. The attention to detail was incredible!"`,
      name: "Priya & Rahul Sharma",
      location: "Delhi"
    },
    {
      text: `"Professional team, transparent pricing, and stunning results. Highly recommend UrbanHaven!"`,
      name: "Karan Singh",
      location: "Delhi NCR"
    },
    {
      text: `"UrbanHaven made our kitchen come alive, on time and on budget. The attention to detail was incredible!"`,
      name: "Pankaj Mathur",
      location: "Gurgaon"
    },
    {
      text: `"UrbanHaven made our kitchen come alive, on time and on budget. The attention to detail was incredible!"`,
      name: "Raman Tiwary",
      location: "Delhi"
    },
    {
      text: `"Professional team, transparent pricing, and stunning results. Highly recommend UrbanHaven!"`,
      name: "Brandon King",
      location: "Delhi NCR"
    },
    {
      text: `"UrbanHaven made our kitchen come alive, on time and on budget. The attention to detail was incredible!"`,
      name: "Even Lewis",
      location: "Gurgaon"
    }
  ];

  const stats = [
    { number: "10 Years", label: "Flat warranty" },
    { number: "45 Days", label: "Move-in guarantee" },
    { number: "146", label: "Quality checks" },
    { number: "In-house", label: "Manufacturing" }
  ];

  return (
    <section className="w-full py-10 ">
      {/* Heading */}
      <h2 className="heading2 text-center mb-8">Why choose us</h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[426px] testimonial-card border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex-shrink-0"
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

      {/* Statistics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 mt-12 justify-items-center text-center mx-auto w-full max-w-[1100px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-[20px] lg:text-3xl font-bold text-[#F95B46]">
              {stat.number}
            </h3>
            <p className="text-sm text-[#666666]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
