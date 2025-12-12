import CTASection from "@/app/aboutus/CTASection";
import Navbar from "@/app/components/layout/Navbar";
import OurStory from "@/app/aboutus/OurStory";
import MissionVisionValues from "@/app/aboutus/mission-vision-values";
import WhatWeOffer from "@/app/aboutus/offer";
import ReachImpact from "@/app/aboutus/Reach-Impact";
import UrbanhavenTeam from "@/app/aboutus/UrbanhavenTeam";
import QualityWarrantySection from "@/app/aboutus/QualityWarrantySection";
import ClientStories from "@/app/aboutus/ClientStories";
import CTASection1 from "@/app/aboutus/CTASection1";
import Footer from "../components/layout/Footer";

export default function Aboutus() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-8">
        <Navbar />
      </section>
      <section className="w-full">
        <CTASection />
      </section>
      <section className="w-full">
        <OurStory />
      </section>
      <section className="w-full">
        <MissionVisionValues />
      </section>
      <section className="w-full">
        <WhatWeOffer />
      </section>
      <section className="w-full">
        <ReachImpact />
      </section>
      <section className="w-full">
        <UrbanhavenTeam />
      </section>
      <section className="w-full">
        <QualityWarrantySection />
      </section>
      <section className="w-full">
        <ClientStories />
      </section>
      <section className="w-full">
        <CTASection1 />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}
