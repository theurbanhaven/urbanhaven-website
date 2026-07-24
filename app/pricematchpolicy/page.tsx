"use client";

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const STEPS = [
  {
    title: "Get any quotation",
    copy: "Already have a quote from another studio for the same material and finish? The quote is valid for a price match only if it's from a private company that has its own experience center — keep it handy, that's all we need to start.",
    accent: "#2B2A3D",
  },
  {
    title: "Share it with us",
    copy: "Send it over on a call, on WhatsApp, or in person. We'll check it line by line against material, finish, and scope.",
    accent: "#FF6E52",
  },
  {
    title: "We match, then beat it",
    copy: "We match the price exactly — and add an extra 5% off, so choosing Urbanhaven is always the better decision.",
    accent: "#8D7FC7",
  },
];

const WHY = [
  {
    icon: "◆",
    title: "Superior quality",
    copy: "The same premium materials and craftsmanship you'd get at our full quoted price — never a downgraded version.",
    bg: "rgba(255,110,82,0.12)",
    color: "#FF6E52",
  },
  {
    icon: "✦",
    title: "Elegant design",
    copy: "Full access to our design team and finish library, whatever price point you land on.",
    bg: "rgba(141,127,199,0.12)",
    color: "#8D7FC7",
  },
  {
    icon: "●",
    title: "Fair pricing",
    copy: "One promise, applied consistently — not a limited-time gimmick or a bait-and-switch offer.",
    bg: "rgba(242,183,5,0.15)",
    color: "#B5860A",
  },
];

const FAQS = [
  {
    q: "What quotations qualify for a price match?",
    a: "Any written quotation from a comparable interior design studio, for the same material, finish, and scope of work. The quotation is valid for a price match only if it's from a private company that has its own experience center — we compare it line by line to keep the match accurate and fair to both sides.",
  },
  {
    q: "Does the competing company need to have an experience center?",
    a: "Yes. We only price-match quotations from private companies that operate their own experience center. This helps us verify the quality, material, and finish being quoted so the comparison stays fair and accurate.",
  },
  {
    q: "How long does the price match take?",
    a: "Most quotes are reviewed and matched within 24–48 hours of you sharing the competing quotation with our team.",
  },
  {
    q: "Is the extra 5% off applied automatically?",
    a: "Yes. Once we've matched the quotation, the additional 5% is applied to your final invoice — no separate coupon or request needed.",
  },
  {
    q: "Does this apply to every room and material?",
    a: "Yes — the Best Price Promise applies across our full catalogue, from modular interiors to individual furniture pieces and finishes.",
  },
  {
    q: "Is there a request window or deadline?",
    a: "Yes — price match requests must be submitted within 7 days of your original quotation with Urbanhaven, along with verifiable proof of the competing price.",
  },
];

export default function PriceMatchPolicy() {
  const [quote, setQuote] = useState<string>("");
  const [result, setResult] = useState<{ matched: number; discount: number; final: number } | null>(null);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [inputError, setInputError] = useState(false);

  const handleCalculate = () => {
    const val = parseFloat(quote);
    if (!val || val <= 0) {
      setInputError(true);
      setResult(null);
      return;
    }
    setInputError(false);
    const discount = val * 0.05;
    setResult({ matched: val, discount, final: val - discount });
  };

  const formatINR = (n: number) =>
    "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <div className="flex flex-col font-['Poppins'] bg-[#FFF8F3] text-[#2B2A3D] overflow-x-hidden">
      <section className="w-full py-4 sm:py-6 md:py-8">
        <Navbar />
      </section>

      {/* HERO */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[195px] py-8 sm:py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#FF6E52] bg-[#FF6E52]/10 px-3 sm:px-3.5 py-1.5 rounded-full mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6E52] inline-block" />
              Official Announcement
            </span>
            <h1 className="text-[28px] leading-[1.1] sm:text-4xl sm:leading-[1.08] md:text-5xl md:leading-[1.05] font-bold mb-4 sm:mb-5">
              Great design,{" "}
              <span className="bg-gradient-to-r from-[#FF6E52] to-[#F2B705] bg-clip-text text-transparent">
                fairly priced.
              </span>{" "}
              No second thoughts.
            </h1>
            <p className="text-sm sm:text-base text-[#55536B] max-w-md mb-6 sm:mb-8">
              At Urban Haven Interiors, we believe great design should never
              come with second thoughts. Found a better quotation elsewhere?
              We'll match it — material for material, finish for finish — and
              take an extra 5% off on top.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-3.5">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm text-white bg-[#FF6E52] shadow-[0_12px_30px_-10px_rgba(255,110,82,0.55)] hover:-translate-y-0.5 transition-transform w-full xs:w-auto sm:w-auto"
              >
                See how much you save
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm border-2 border-[#2B2A3D] hover:bg-[#2B2A3D] hover:text-white transition-colors w-full xs:w-auto sm:w-auto"
              >
                Talk to us
              </a>
            </div>

            <div className="flex gap-6 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-[#2B2A3D]/10 flex-wrap">
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl">100%</span>
                <span className="text-xs text-[#55536B]">Price matched</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl">+5%</span>
                <span className="text-xs text-[#55536B]">Extra off, always</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl">0</span>
                <span className="text-xs text-[#55536B]">Compromises on quality</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 rounded-2xl sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(43,42,61,0.25)]">
            <img
              src="/pricematch.jpeg"
              alt="Urbanhaven Official Announcement: Best Price Promise poster with living room furniture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[195px] py-10 sm:py-14 md:py-20">
        <div className="max-w-xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8D7FC7] mb-3 block">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Three steps to a fairer price
          </h2>
          <p className="text-sm sm:text-base text-[#55536B]">
            The Best Price Promise runs alongside every quote we give — no
            separate forms, no waiting in line.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="bg-white border border-[#2B2A3D]/10 rounded-2xl sm:rounded-[20px] p-6 sm:p-7 md:p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(43,42,61,0.25)] transition-all"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm mb-5 sm:mb-6"
                style={{ backgroundColor: step.accent }}
              >
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[#55536B]">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section
        id="calculator"
        className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[195px] py-10 sm:py-14 md:py-20"
      >
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-[#2B2A3D] to-[#3d3b57] p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center text-white">
          <div
            className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full -top-24 -right-20 sm:-top-40 sm:-right-36 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,110,82,0.35), transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FFAE86] mb-3 block">
              See it for yourself
            </span>
            <h2 className="text-2xl sm:text-[28px] md:text-[34px] font-bold mb-3.5">
              What would your 5% look like?
            </h2>
            <p className="text-white/70 text-sm max-w-sm">
              Enter the quotation you've received elsewhere and see what your
              final Urbanhaven price would be — matched and reduced,
              instantly.
            </p>
          </div>

          <div className="relative z-10 bg-white text-[#2B2A3D] rounded-2xl sm:rounded-[20px] p-6 sm:p-7 md:p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]">
            <label
              htmlFor="quoteInput"
              className="text-xs font-semibold text-[#55536B] mb-2 block"
            >
              Their quotation amount
            </label>
            <div
              className={`flex items-center border-2 rounded-2xl pl-4 pr-1 mb-5 transition-colors ${
                inputError ? "border-[#FF6E52]" : "border-[#2B2A3D]/10"
              } focus-within:border-[#FF6E52]`}
            >
              <span className="font-bold text-[#55536B] mr-1.5">₹</span>
              <input
                id="quoteInput"
                type="number"
                min={0}
                inputMode="numeric"
                placeholder="e.g. 250000"
                value={quote}
                onChange={(e) => {
                  setQuote(e.target.value);
                  setInputError(false);
                }}
                className="border-none outline-none text-lg sm:text-xl font-bold w-full py-3 bg-transparent min-w-0"
              />
            </div>
            <button
              onClick={handleCalculate}
              className="w-full bg-[#FF6E52] text-white rounded-2xl py-3.5 sm:py-4 font-bold text-sm hover:bg-[#e85c40] hover:-translate-y-0.5 transition-all"
            >
              Calculate my price
            </button>
            <p className="text-[11px] sm:text-xs text-[#55536B] mt-3 leading-relaxed">
              *Valid only for quotations from a private company that has its
              own experience center.
            </p>

            {result && (
              <div className="mt-6 pt-5 border-t border-dashed border-[#2B2A3D]/15 animate-[fadeUp_.4s_ease]">
                <div className="flex justify-between text-sm text-[#55536B] mb-2 gap-2">
                  <span>Matched price</span>
                  <strong className="text-[#2B2A3D] text-right">{formatINR(result.matched)}</strong>
                </div>
                <div className="flex justify-between text-sm text-[#55536B] mb-2 gap-2">
                  <span>Additional 5% off</span>
                  <strong className="text-[#2B2A3D] text-right">−{formatINR(result.discount)}</strong>
                </div>
                <div className="flex justify-between items-baseline mt-3.5 pt-3.5 border-t border-[#2B2A3D]/10 gap-2">
                  <span className="text-sm font-semibold text-[#55536B]">
                    Your Urbanhaven price
                  </span>
                  <span className="font-bold text-2xl sm:text-3xl text-[#FF6E52] text-right">
                    {formatINR(result.final)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY GRID */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[195px] py-10 sm:py-14 md:py-20">
        <div className="max-w-xl mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6E52] mb-3 block">
            Why it's worth it
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            No compromises, either way
          </h2>
          <p className="text-sm sm:text-base text-[#55536B]">
            Matching a price doesn't mean matching corners cut. Here's what
            stays constant.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2B2A3D]/10 rounded-2xl sm:rounded-[20px] overflow-hidden">
          {WHY.map((item) => (
            <div key={item.title} className="bg-[#FFF8F3] p-7 sm:p-8 md:p-9">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#55536B]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[195px] py-10 sm:py-14 md:py-20">
        <div className="max-w-xl mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8D7FC7] mb-3 block">
            Good to know
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Frequently asked questions
          </h2>
        </div>
        <div>
          {FAQS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className="border-b border-[#2B2A3D]/10 py-5 sm:py-6">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="w-full flex justify-between items-center gap-4 sm:gap-5 text-left font-semibold text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  <span
                    className={`relative flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[1.5px] border-[#2B2A3D] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "bg-[#2B2A3D] rotate-180" : ""
                    }`}
                  >
                    <span
                      className={`absolute w-[11px] h-[1.5px] ${
                        isOpen ? "bg-white" : "bg-[#2B2A3D]"
                      }`}
                    />
                    <span
                      className={`absolute w-[1.5px] h-[11px] transition-opacity ${
                        isOpen ? "opacity-0" : "bg-[#2B2A3D]"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pt-3.5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-[#55536B] pr-6 sm:pr-14">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] 2xl:px-[195px] py-10 sm:py-14 md:py-20">
        <div
          id="contact"
          className="rounded-2xl sm:rounded-[28px] bg-[#2B2A3D] px-6 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 sm:gap-8 text-white text-center sm:text-left"
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Bring us your best quote.
            </h2>
            <p className="text-white/65 text-sm">
              We'll take it from there — beautifully, and fairly.
            </p>
          </div>
          <a
            href="tel:+91-9319608686"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm text-white bg-[#FF6E52] shadow-[0_12px_30px_-10px_rgba(255,110,82,0.55)] hover:-translate-y-0.5 transition-transform whitespace-nowrap w-full sm:w-auto"
          >
            📞 Contact us today
          </a>
        </div>
        <p className="text-center text-sm text-[#55536B] mt-6 sm:mt-8">
          Urban Haven Interiors – Great Design. Fairly Priced.
        </p>
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}