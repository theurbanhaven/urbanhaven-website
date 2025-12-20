"use client";
import Navbar from "@/app/components/layout/Navbar";
import CTASection from "@/app/components/Common/CTASection";
import Footer from "@/app/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen justify-center py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-white">
          <div className="flex justify-center bg-[#ffffff] px-4 py-6">
            <h1 className="font-['Poppins'] text-2xl sm:text-3xl md:text-5xl font-bold text-[#0f0f0f]">
              Privacy Policy
            </h1>
          </div>

          <div className="font-['Poppins'] space-y-6 text-[15px] leading-relaxed text-gray-800">
            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                1. Introduction
              </h2>
              <p className="font-['Poppins'] text-[#333333] font-normal">
                Welcome to Urbanhaven ("we", "us", "our"). We respect your
                privacy and are committed to protecting your personal data. This
                Privacy Policy describes the types of information we collect,
                how we use and share it, your rights, and how we keep your
                information secure when you use our website, mobile apps, and
                related services (collectively, the "Services"). By accessing or
                using our Services, you agree to the terms of this Privacy
                Policy and consent to the collection, use, and disclosure of
                your personal information as described herein.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                2. Who We Are
              </h2>
              <p className="font-['Poppins'] text-[#333333] font-normal">
                Urbanhaven is a full-service design & build interiors company
                serving Delhi NCR (including Delhi, Noida, Ghaziabad). Our
                registered office is at: [Cozen, B158, Sector 63, Noida, UP -
                201309]. <br />
                We provide interior design, build, project execution, and
                related services through our website and other channels.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                3. Scope and Application
              </h2>
              <p className="font-['Poppins'] text-[#333333] font-normal">
                This Policy applies to:
              </p>

              <ul className="ml-6 list-disc space-y-1">
                <li className="font-['Poppins'] text-[#333333] font-normal">
                  Individuals (users/clients) who visit our website, mobile apps
                  or otherwise use our Services;
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Prospective clients who submit enquiries, quotes or request
                  consultations;
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Contractors, vendors or other service providers engaged by
                  UrbanHaven in connection with its business;
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Data collected via our website, apps, offline forms, phone
                  calls, emails or other interactions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                4. Information We Collect
              </h2>
              <p className="mb-3 font-['Poppins'] text-[#333333]">
                We collect and process the following categories of information:
              </p>

              <div className="mb-3">
                <p className="font-semibold text-[#333333]">
                  4.1 Personal / Identity Data
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    Name, gender, date of birth (where provided)
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Contact details (email address, telephone number, postal
                    address)
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Government or business identifiers (e.g., PAN, GST-IN,
                    Aadhar, if required for verification)
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Project-related details: type of home (2 BHK/3
                    BHK/kitchen/full home), location, size, style preferences,
                    budget range, floor-plan details, photographs, videos.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-[#333333]">
                  4.2 Technical / Usage / Device Data
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    IP address, browser type and version, operating system,
                    device identifier, time zone, language preferences
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Website/app usage data: pages visited, clicks, scrolling
                    behaviour, session duration
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Cookies, web-beacons, pixel tags and similar tracking
                    technologies
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-[#333333]">
                  4.3 Transaction & Project Data
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    Details of services you have requested or purchased from us
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Payment or billing information (processed by trusted payment
                    gateways; we do not store full CVV data)
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Communications and correspondence (emails, chat logs, phone
                    call records) concerning your interaction with UrbanHaven
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-[#333333]">
                  4.4 Marketing & Communications Data
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    Preferences regarding communications from us
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Responses to surveys, promotions, feedback forms
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Social media handles (if provided)
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-[#333333]">
                  4.5 Aggregate / Anonymous Data
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    Information aggregated from the above categories into
                    statistical or trend data, which does not identify you
                    individually.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                5. How We Collect Information
              </h2>
              <p className="mb-2 font-['Poppins'] text-[#333333]">
                We collect your information in several ways, including:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li className="font-['Poppins'] text-[#333333]">
                  Direct interactions (you fill in forms, request a quote, talk
                  to us)
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Automated technologies and interactions (cookies, log files,
                  mobile app analytics)
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Third parties and publicly available sources (analytics
                  providers, social media platforms, credit reference agencies)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                6. Purposes for Which We Use Your Information
              </h2>
              <p className="mb-2 font-['Poppins'] text-[#333333]">
                We use your personal information for the following purposes
                (subject to lawful basis):
              </p>
              <ul className="ml-6 list-disc space-y-1 text-[#333333]">
                <li className="font-['Poppins'] text-[#333333]">
                  To provide and administer our Services (design, build,
                  installation)
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  To manage your project, including communication, scheduling,
                  hand-over and after-sales
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  To verify your identity, screen for fraud, ensure compliance
                  with legal obligations
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  To analyse and improve our Services, website and apps
                  (including analytics, research and development)
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  To send you marketing communications (with your consent where
                  required) and promotional offers relating to our services or
                  trusted third parties
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  To enforce our terms & conditions, defend our legal rights and
                  comply with law
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  To transfer or share data in a business-transition scenario
                  (merger, acquisition)
                </li>
              </ul>
            </section>
            <section className="space-y-6 text-[#333333]">
              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                  7. Disclosure & Sharing of Information
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  We may share your personal information with:
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    Internal third parties: companies within the UrbanHaven
                    group or divisions
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    External third parties: service providers, contractors,
                    analytics providers, payment processors, marketing agencies
                    and other vendors who assist us in providing the Services
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Regulatory or law-enforcement authorities where required by
                    law
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Parties in connection with a business transition (merger,
                    sale of assets)
                  </li>
                </ul>
                <p className="mt-2 font-['Poppins'] text-[#333333]">
                  We will not sell your personal data to third parties for their
                  own marketing use without your consent.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                  8. Cookies & Similar Technologies
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  We use cookies and similar tracking technologies to
                  personalise your experience, understand usage patterns,
                  remember your preferences and improve our Services. You can
                  manage or block cookies in your browser settings, but this may
                  affect your ability to access certain features of the site.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                  9. Storage, Transfers & International Processing
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  Your personal data may be stored and processed in India or in
                  jurisdictions where our service providers operate. By using
                  our Services, you consent to such transfers. We comply with
                  applicable data protection laws when transferring data abroad.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                  10. Data Retention
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  We retain your personal data for as long as needed to fulfil
                  the purposes outlined above, including to meet legal,
                  accounting or tax requirements. We will delete or anonymise
                  data when it is no longer needed.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                  11. Security
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  We implement appropriate administrative, technical and
                  physical safeguards to protect your personal data from
                  unauthorised access, use, disclosure or destruction. However,
                  no internet transmission is completely secure—we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                  12. Children’s Privacy
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  Our Services are not directed at children under 18 years. We
                  do not knowingly collect personal data from minors. If you
                  become aware that a child has provided us with personal data
                  without appropriate consent, please contact us and we will
                  take steps to delete it.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  13. Your Rights & Choices
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  Subject to applicable law, you may:
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li className="font-['Poppins'] text-[#333333]">
                    Access or request a copy of your personal data held by us
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Request correction of inaccurate or incomplete data
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Request deletion of your data (subject to retention
                    obligations)
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Opt-out of marketing communications
                  </li>
                  <li className="font-['Poppins'] text-[#333333]">
                    Withdraw consent previously given (note: if you withdraw
                    consent, some Services may no longer be available)
                  </li>
                </ul>
                <p className="mt-2 font-['Poppins'] text-[#333333]">
                  To exercise these rights, please contact us at:{" "}
                  privacy@urbanhaven.in
                </p>
              </div>
            </section>

            <section className="space-y-6 text-[#333333]">
              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  14. Opt-Out of Marketing
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  If you no longer wish to receive marketing communications from
                  us, you can contact us or click the “unsubscribe” link in any
                  email. We will process your request as soon as possible.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  15. Business Transitions
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  If UrbanHaven is involved in a mergers, acquisitions or
                  transfer of assets, your personal data may be among the assets
                  transferred. We will notify you if your data is subject to a
                  change in ownership.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  16. Links to Other Websites
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  Our website may contain links to third-party sites, plug-ins
                  or services not operated by us. We are not responsible for
                  their privacy practices. Please review the privacy policies of
                  those third parties separately.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  17. Changes to This Policy
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  We may update this Policy from time to time. We will post any
                  changes on our website and update the “Last updated” date. By
                  continuing to use our Services after changes, you agree to the
                  revised Policy.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  18. Governing Law & Jurisdiction
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  This Policy is governed by the laws of India. Any dispute
                  arising under this Policy will be subject to the exclusive
                  jurisdiction of the courts in Delhi.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['Poppins'] text-2xl font-semibold text-[#333333]">
                  19. Contact Us
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  If you have questions or wish to raise a concern about this
                  Policy, please contact:
                </p>
                <p className="mt-1 font-['Poppins'] text-[#333333]">
                  Urbanhaven Design Studio
                  <br />
                  Delhi NCR, India
                </p>

                <p className="mt-2 font-['Poppins'] text-[#333333]">
                  Grievance Officer:
                  <br />
                  Name: Vineet Kumar
                  <br />
                  Email:{" "}
                  <a href="mailto:vineet@theurbanhaven.in">
                    vineet@theurbanhaven.in
                  </a>
                  <br />
                  Tel: <a href="tel:+919211234572">+91-9211234572</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
}
