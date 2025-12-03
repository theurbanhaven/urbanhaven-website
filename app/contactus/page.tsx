"use client";
import Navbar from "@/app/components/layout/Navbar";
import CTASection from "@/app/contactus/CTASection";
import ContactDetailsSection from "@/app/contactus/ContactDetailsSection";
import ProjectDetailsForm from "@/app/contactus/ProjectDetailsForm";

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
    </div>
  );
}
