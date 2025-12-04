"use client";
import { useState } from "react";
import Arrow from "@/public/ContactUs/Arrow.svg";
import Image from "next/image";

const faqData = [
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer a completely free estimate after understanding your project requirements."
  },
  {
    question: "Which areas do you service?",
    answer:
      "We currently provide services in Delhi, Noida, Greater Noida(NCR), and Ghaziabad."
  },
  {
    question: "What's the typical start-to-finish timeline?",
    answer:
      "Our standard project timeline is 45 days, depending on the scope and customization."
  },
  {
    question: "Is there a minimum budget to work with you?",
    answer:
      "Yes, we generally work on projects that meet a minimum budget threshold, ensuring we can deliver high-quality materials, workmanship, and a smooth execution experience."
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We provide up to 10 years of warranty, covering workmanship and selected materials for long-term peace of mind."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-white py-8 sm:py-8 md:py-8 lg:py-16">
      <div className="max-w-3xl w-full mx-auto px-4">
        {/* Heading */}
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-semibold font-['Poppins'] text-center mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-normal font-['Poppins'] text:xs sm:text-xs md:text-sm lg:text-xl text-black">
                  {faq.question}
                </span>
                <Image
                  src={Arrow}
                  alt="arrow"
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 font-normal font-['Poppins'] text:xs sm:text-xs md:text-sm lg:text-lg text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
