"use client";
import Navbar from "@/app/components/layout/Navbar";
import CTASection from "@/app/contactus/CTASection";
import ContactDetailsSection from "@/app/contactus/ContactDetailsSection";
import ProjectDetailsForm from "@/app/contactus/ProjectDetailsForm";
import VisitUs from "@/app/contactus/Visit";
import FAQSection from "@/app/contactus/FAQ";
import CTASections from "@/app/components/Common/CTASection";
import Footer from "@/app/components/layout/Footer";

export default function ContactUs() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-8">
        <Navbar />
      </section>
      <section className="w-full">
        <CTASection />
      </section>
      <section className="w-full">
        <ContactDetailsSection />
      </section>
      <section className="w-full">
        <ProjectDetailsForm />
      </section>
      <section className="w-full">
        <VisitUs />
      </section>
      <section className="w-full">
        <FAQSection />
      </section>
      <section className="w-full">
        <CTASections />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}
