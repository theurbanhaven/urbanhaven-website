import Navbar from "@/app/components/layout/Navbar";
import CTASection from "@/app/components/Common/CTASection";
import Footer from "@/app/components/layout/Footer";

export default function termscondition() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen justify-center py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-white">
          <div className="flex justify-center bg-[#ffffff] px-2 sm:px-4 py-6">
            <h1 className="font-['Poppins'] text-2xl sm:text-3xl md:text-5xl font-bold text-[#0f0f0f]">
              Terms & Conditions
            </h1>
          </div>

          <div className="font-['Poppins'] space-y-6 text-[15px] leading-relaxed text-gray-800">
            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                1. Introduction
              </h2>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                1.1 These Terms & Conditions (“T&Cs”) govern your access to and
                use of the website, mobile apps and services provided by
                UrbanHaven (collectively the “Services”).
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                1.2 By requesting a quote, engaging our services, or accessing
                the website/mobile app, you (“Client”, “you”, “your”) agree to
                be bound by these T&Cs.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                1.3 UrbanHaven reserves the right to amend these T&Cs at any
                time. Any modification will be published on our site with an
                updated “Last updated” date; your continued use constitutes
                acceptance.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-['Poppins'] text-2xl font-bold text-[#333333]">
                2. Definitions
              </h2>
              <ul className="ml-6 list-disc space-y-1">
                <li className="font-['Poppins'] text-[#333333] font-normal">
                  Services: All design, build, installation, project management,
                  after-sales services provided by UrbanHaven.
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Quotation / Quote: A document issued by UrbanHaven outlining
                  scope, cost, timeline and payment milestones.
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Works Contract: The agreement executed by Client and
                  UrbanHaven referencing the Quote and these T&Cs.
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Site: The location / home / unit where the Services are to be
                  performed.
                </li>
                <li className="font-['Poppins'] text-[#333333]">
                  Project: The end-to-end scope defined in the Quote (design →
                  supply → build → hand-over).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                3. Eligibilty & Access
              </h2>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                3.1 You confirm that you are at least 18 years of age and
                legally capable of entering into contracts.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                3.2 The Services are directed primarily to residential clients
                in India (specifically the Delhi-NCR region). Access from
                outside India may require applicable local adjustments.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                3.3 You agree to maintain confidentiality of any account
                credentials and immediately inform us of any unauthorised use.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                4. Quotation, Scope & Acceptance
              </h2>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                4.1 Quotations provided by UrbanHaven are valid for the period
                specified therein (commonly 30 days) unless otherwise stated.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                4.2 The quote is an invitation to treat; it becomes binding only
                when UrbanHaven issues written acceptance and you execute the
                Works Contract.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                4.3 The Quote shall specify: (a) scope of work; (b)
                materials/finishes; (c) payment schedule; (d) timeline; (e)
                exclusions and assumptions.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                4.4 Any revisions to scope (variations) must be documented in a
                variation order, may incur additional cost and revised timeline.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                5. Payment Terms
              </h2>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                5.1 Unless specified otherwise, the payment shall follow
                milestones outlined in the Quote (e.g., design fee, material
                procurement, installation, final hand-over).
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                5.2 Payments must be in Indian Rupees (INR). Applicable taxes
                (GST) to be borne by the Client.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                5.3 Delay in payment may delay project execution; UrbanHaven may
                levy interest or storage charges as specified.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                5.4 Quotations may be subject to adjustment if there are
                substantial cost changes (material, labour, regulation) between
                quote issuance and order acceptance.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                6. Delivery Schedule & Site Readiness
              </h2>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                6.1 Work commencement is contingent upon: (a) acceptance of
                Quote; (b) receipt of required first payment; (c) site being
                handed over in a condition ready for work per UrbanHaven’s Site
                Readiness Guidelines.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                6.2 If the site is not ready, or delays are caused by the Client
                (access, permissions, decision delays), UrbanHaven may extend
                the timeline and charge for additional costs/storage.
              </p>
              <p className="font-medium font-['Poppins'] text-[#333333]">
                6.3 UrbanHaven shall make reasonable efforts to meet the
                schedule but time is not “of the essence” unless explicitly
                stated. No liability arises from delays beyond what is provided.
              </p>
            </section>
            <section className="space-y-6 text-[#333333]">
              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  7. Warranty & After-Sales Service
                </h2>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  7.1 UrbanHaven shall provide a workmanship warranty for
                  Projects as specified in the Quote (e.g., full-home projects
                  may carry a 10-year warranty).
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  7.2 The warranty covers defects in workmanship or materials
                  supplied & installed by UrbanHaven, under normal domestic use.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  7.3 Exclusions: natural wear & tear; misuse/abuse; alterations
                  by Client or third-party; damages due to external causes
                  (force majeure, structural issues outside our scope).
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  7.4 To claim warranty, Client must provide written notice
                  within the time-period specified in the Quote and cooperate
                  with inspection.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  7.5 Post-warranty or excluded work may still be supported by
                  UrbanHaven at cost, but will not extend original warranty.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  8. Materials, Sub-Contractors & Third Parties
                </h2>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  8.1 UrbanHaven may engage trusted subcontractors or
                  third-party vendors for portions of the Services; UrbanHaven
                  remains responsible for overall delivery.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  8.2 Materials provided from OEMs or third parties may carry
                  separate manufacturer’s warranties; UrbanHaven’s warranty
                  applies primarily to works performed by us.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  8.3 If structural works, civil finishes, plumbing, or
                  electrical installations fall outside our supply chain,
                  warranty or liability for those may be limited.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  9. Intellectual Property
                </h2>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  9.1 All designs, drawings, renders, photographs remain the
                  intellectual property of UrbanHaven unless explicitly
                  transferred in writing.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  9.2 Client shall not reproduce, publish or distribute any part
                  of UrbanHaven’s design documentation or branding without our
                  written consent.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  9.3 After full payment and hand-over, the Client is granted
                  license to use the installed design in their home, but
                  underlying IP rights remain with UrbanHaven.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  10. Liability & Indemnity
                </h2>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  10.1 UrbanHaven’s total liability (contract/tort/other) shall
                  be limited to the total contract value paid by the Client,
                  except for liability arising out of gross negligence or
                  willful misconduct.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  10.2 Under no circumstances shall UrbanHaven be liable for
                  indirect, incidental, special or consequential losses (lost
                  profit, business interruption, etc.).
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  10.3 The Client shall indemnify UrbanHaven for any
                  claims/losses arising from Client’s misuse of service, breach
                  of these T&Cs, or non-compliance with local law.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  11. Force Majeure
                </h2>
                <p className="font-['Poppins'] text-[#333333]">
                  UrbanHaven shall not be liable for any delay or failure in
                  performance caused by events beyond its reasonable control
                  (e.g., pandemic, fire, strike, government act, supply-chain
                  disruption). The time for performance shall be extended
                  accordingly.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  12. Governing Law & Dispute Resolution
                </h2>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  12.1 These T&Cs and the Works Contract are governed by the
                  laws of India.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  12.2 Any dispute shall be subject to the exclusive
                  jurisdiction of the courts of [City / State, e.g., Delhi].
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  12.3 Parties may mutually agree to mediation or alternate
                  dispute resolution before litigation.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-['poppins'] text-2xl font-bold text-[#333333]">
                  13. Miscellaneous
                </h2>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.1 Entire Agreement: These T&Cs, the Quote and the Works
                  Contract (and any referenced schedules) constitute the entire
                  agreement between you and UrbanHaven, superseding all prior
                  communications.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.2 Severability: If any provision is found invalid or
                  unenforceable, the remaining provisions continue in full
                  force.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.3 Assignment: UrbanHaven may assign or novate its
                  rights/obligations under these T&Cs in case of sale, merger or
                  restructuring.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.3 Assignment: UrbanHaven may assign or novate its
                  rights/obligations under these T&Cs in case of sale, merger or
                  restructuring.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.4 Notice: Any notices under these T&Cs must be in writing
                  and sent to the addresses specified in the Works Contract or
                  via registered email.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.5 Website Terms: Use of the UrbanHaven website/mobile app
                  may also be subject to additional Terms of Use.
                </p>
                <p className="font-medium font-['Poppins'] text-[#333333]">
                  13.6 Changes: UrbanHaven may update these T&Cs from time to
                  time; updated terms will be published on our website.
                </p>
                <p className="font-['Poppins'] text-[#333333]">
                  If you like, I can also draft a detailed Works Contract
                  template (with fields for scope, payment schedule, site
                  readiness, variation orders, snag list, etc.) ready for use by
                  UrbanHaven with its clients. Would you like me to prepare
                  that?
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
