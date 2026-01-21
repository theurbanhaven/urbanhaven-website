"use client";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/styles/HeroSection";
import StyleCards from "@/app/styles/StyleCards";
import RealHomeStyle from "@/app/styles/RealHomeStyle";
import WhyWorks from "@/app/styles/WhyWorks";
import CTASection from "@/app/styles/CTASection";

export default function Styles() {
  return (
    <div className="flex flex-col">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full mt-19">
        <HeroSection />
      </section>
      <section className="w-full py-8 md: py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[140px]">
        <StyleCards />
      </section>
      <section className="w-full py-8 md: py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[140px]">
        <RealHomeStyle />
      </section>
      <section className="w-full py-8 md: py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[140px]">
        <WhyWorks />
      </section>
      <section className="w-full">
        <CTASection />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}
