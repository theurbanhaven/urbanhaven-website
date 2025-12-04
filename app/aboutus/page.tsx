import CTASection from "@/app/aboutus/CTASection";
import Navbar from "@/app/components/layout/Navbar";
import OurStory from "@/app/aboutus/OurStory";
import MissionVisionValues from "@/app/aboutus/mission-vision-values";
import WhatWeOffer from "@/app/aboutus/offer";

export default function Aboutus() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-8">
        <Navbar />
      </section>
      <section className="w-full">
        <CTASection />
      </section>
      <section>
        <OurStory />
      </section>
      <section>
        <MissionVisionValues />
      </section>
      <section>
        <WhatWeOffer />
      </section>
    </div>
  );
}
