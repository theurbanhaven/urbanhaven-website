"use client";
import Image from "next/image";
import UrbanhavenLogo from "@/public/Logo.svg";
import Phone from "@/public/LandingPageImage/phone.png";
import Mail from "@/public/LandingPageImage/Mail.png";
import Location from "@/public/LandingPageImage/Location.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-[1280px] mx-auto p-12 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-0">
        <div className="space-y-4">
          <Image src={UrbanhavenLogo} alt="Urbanhaven Logo" className="w-44" />
          <p className="text-sm text-[#666666] leading-5">
            Turning houses into homes
          </p>
        </div>

        <div>
          <h4 className="font-normal font-['Poppins'] text-[#0f0f0f] text-base mb-4">
            Services
          </h4>
          <ul className="space-y-4 text-sm font-normal font-['Poppins'] text-[#666666] ">
            <li>Full Home Interiors</li>
            <li>Modular Kitchens</li>
            <li>Bedrooms & Living</li>
            <li>Home Offices</li>
          </ul>
        </div>

        <div>
          <h4 className="font-normal font-['Poppins'] text-[#0f0f0f] text-base mb-4">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm font-normal font-['Poppins'] text-[#666666]">
            <li>Portfolio</li>
            <li>Blog</li>
            <li>
              <Link href="/aboutus" className="hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-normal font-['Poppins'] text-[#0f0f0f] text-base mb-4">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm font-normal font-['Poppins'] text-[#666666]">
            <li className="flex gap-2">
              <Image src={Phone} alt="phone" className="w-4 h-4 mt-1" />
              <a
                href="tel:+919211324572"
                className="underline hover:text-black"
              >
                +91-9211324572
              </a>
            </li>

            <li className="flex gap-2">
              <Image src={Mail} alt="mail" className="w-4 h-4 mt-1" />
              <a
                href="mailto:tech@theurbanhaven.in"
                className="underline hover:text-black"
              >
                tech@theurbanhaven.in
              </a>
            </li>

            <li className="flex gap-2 leading-5">
              <Image src={Location} alt="location" className="w-4 h-4 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cozen,+B158,+Sector+63,+Noida,+UP+-+201309"
                target="_blank"
                className="underline hover:text-black"
              >
                Cozen, B158, Sector 63, Noida, UP - 201309
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e6e6e6]">
        <div className="max-w-[1280px] mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/p/Urban-Haven-61579852742786/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-2xl bg-white transition-all duration-300 hover:scale-110 active:scale-110 focus-visible:scale-110"
            >
              <Image
                src="https://assets-v2.scaler.com/assets/scaler/svg/footer-facebook-logo-1f6a9a1dfe1c0a07ac4aebc36dd622469615763c39b0af223b296365dd6959b4.svg"
                alt="Facebook-Icon"
                width={28}
                height={28}
              />
            </a>

            <a
              href="https://www.instagram.com/urbanhaven_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-2xl bg-white transition-all duration-300 active:scale-110 focus-visible:scale-110"
            >
              <Image
                src="https://assets-v2.scaler.com/assets/scaler/svg/footer-instagram-logo-2bedbafdc3c2430059f45d372526c5fa13ba08c54ac068a7a74d3b6f3637d778.svg"
                alt="Instagram-Icon"
                width={28}
                height={28}
              />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-normal font-['Poppins'] mt-3 md:mt-0">
            <Link
              href="/privacypolicy"
              className="text-[#666666] hover:text-black"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termscondition"
              className="text-[#666666] hover:text-black"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-sm text-[#666666] text-center font-normal font-['Poppins'] mt-3 md:mt-0">
            © 2025 UrbanHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
