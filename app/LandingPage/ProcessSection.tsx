import Image from "next/image";
import Inquiry from "@/public/LandingPageImage/Inquiry.svg";
import Consultation from "@/public/LandingPageImage/Consultation.svg";
import Design from "@/public/LandingPageImage/Design.svg";
import Execution from "@/public/LandingPageImage/Execution.svg";
import FinalTouch from "@/public/LandingPageImage/FinalTouch.svg";

export default function ProcessSection() {
  const steps = [
    {
      icon: Inquiry,
      title: "Quick & Easy Inquiry",
      desc: "Tell us about your space in 60 \nseconds."
    },
    {
      icon: Consultation,
      title: "Personalized Consultation",
      desc: "We call you, understand your \nneeds, style, and budget."
    },
    {
      icon: Design,
      title: "Design & Planning",
      desc: "3D renders, layout & material \nselection, timeline, quote."
    },
    {
      icon: Execution,
      title: "Execution",
      desc: "In-house team brings it to life  \nwith regular updates and \n quality checks."
    },
    {
      icon: FinalTouch,
      title: "Final Touch & Handover",
      desc: "Walk-through, punch list, move \nin."
    }
  ];

  return (
    <section className="w-full bg-white">
      {/* Heading */}
      <h2 className="heading2 text-center">How it works</h2>
      {/* Pink Strip + Line */}
      <div className="w-full flex justify-center overflow-x-auto">
        <div className="relative w-[90%] max-w-[1440px] min-w-max">
          {/* Horizontal line */}

          {/* Steps */}
          <div className="relative flex flex-col md:flex-col lg:flex-row justify-between items-start pt-10 gap-10 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full lg:w-1/5"
              >
                {/* Circle Icon */}
                <div className="w-[64px] h-[64px] bg-[#F95B46] rounded-full flex justify-center items-center shadow-md">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={75}
                    height={75}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[16px] font-semibold text-black font-['Poppins'] leading-6 heading3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#666666] font-normal font-['Poppins'] leading-5 px-2 whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
