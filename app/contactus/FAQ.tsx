"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Arrow from "@/public/ContactUs/Arrow.svg";

const faqData = [
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer a completely free estimate after understanding your project requirements."
  },
  {
    question: "Which areas do you service?",
    answer:
      "We currently provide services in Delhi, Noida, Greater Noida (NCR), and Ghaziabad."
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
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold text-center mb-10 font-['Poppins']">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "#ffffff" : "#ffffff",
                  boxShadow: isOpen
                    ? "8px 8px 24px rgba(0, 0, 0, 0.12)"
                    : "0px 0px 0px rgba(0,0,0,0)"
                }}
                whileHover={{
                  boxShadow: !isOpen
                    ? "4px 4px 16px rgba(0, 0, 0, 0.08)"
                    : "8px 8px 24px rgba(0, 0, 0, 0.12)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
                >
                  <span className="font-['Poppins'] text-sm sm:text-base lg:text-xl text-black">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Image src={Arrow} alt="arrow" className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 font-['Poppins'] text-sm sm:text-base lg:text-lg text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
