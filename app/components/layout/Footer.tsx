"use client";
import Image from "next/image";
import UrbanhavenLogo from "@/public/Logo.svg";
import FacebookLogo from "@/public/LandingPageImage/facebook.png";
import Phone from "@/public/LandingPageImage/phone.png";
import Mail from "@/public/LandingPageImage/Mail.png";
import Location from "@/public/LandingPageImage/Location.png";
import InstagramLogo from "@/public/LandingPageImage/Instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Text */}
        <div className="space-y-4">
          <Image src={UrbanhavenLogo} alt="Urbanhaven Logo" className="w-44" />
          <p className="text-sm text-[#666666] leading-5">
            Turning houses into homes
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-[#0f0f0f] text-base mb-4">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-[#666666]">
            <li>Full Home Interiors</li>
            <li>Modular Kitchens</li>
            <li>Bedrooms & Living</li>
            <li>Home Offices</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#0f0f0f] text-base mb-4">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm text-[#666666]">
            <li>Portfolio</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-[#0f0f0f] text-base mb-4">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-[#666666]">
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

      {/* Bottom Section */}
      <div className="border-t border-[#e6e6e6]">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/p/Urban-Haven-61579852742786/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={FacebookLogo}
                className="w-5 h-5 cursor-pointer hover:opacity-70"
                alt="facebook"
              />
            </a>

            <a
              href="https://www.instagram.com/urbanhaven_01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={InstagramLogo}
                className="w-5 h-5 cursor-pointer hover:opacity-70"
                alt="instagram"
              />
            </a>
          </div>

          {/* Policies */}
          <div className="flex items-center gap-6 text-sm text-[#666666] font-normal font-['Poppins'] mt-3 md:mt-0">
            <Link href="/privacypolicy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/termscondition" className="hover:text-black">
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#666666] font-normal font-['Poppins'] mt-3 md:mt-0">
            © 2025 UrbanHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
