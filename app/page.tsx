import Button from "@/app/components/ui/Button";
import Navbar from "@/app/components/layout/Navbar";
import { HeroSection } from "./LandingPage";
import { ServicesSection } from "./LandingPage";
import { InspirationSection } from "./LandingPage";
import { FeaturedProjectSection } from "./LandingPage";
import { ProcessSection } from "./LandingPage";
import { CTASection } from "./LandingPage";
import { TestimonialSection } from "./LandingPage";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full">
        <HeroSection />
      </section>
      <section className="w-full p-8 md:p-12 lg:p-16">
        <ServicesSection />
      </section>
      <section className="w-full p-8 md:p-12 lg:p-16">
        <InspirationSection />
      </section>
      <section className="w-full p-8 md:p-12 lg:p-16">
        <FeaturedProjectSection />
      </section>
      <section className="w-full p-8 md:p-12 lg:p-16">
        <ProcessSection />
      </section>
      <section className="w-full py-8 md:py-12 lg:py-16">
        <TestimonialSection />
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
