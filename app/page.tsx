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
      <section className="w-full py-16">
        <ServicesSection />
      </section>
      <section className="w-full py-10">
        <InspirationSection />
      </section>
      <section className="w-full py-10">
        <FeaturedProjectSection />
      </section>
      <section className="w-full py-15">
        <ProcessSection />
      </section>
      <section className="w-full py-10">
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
