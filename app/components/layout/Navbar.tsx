"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import BookFreeConsultation from "../ui/Button";
import { useModal } from "@/app/context/Modalcontext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openConsultModal } = useModal();

  const isActive = (href: string) => pathname === href;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-20 py-4">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Urbanhaven Logo"
            className="h-[28px] w-auto min-h-[28px] min-w-[120px]"
          />
        </div>
        {/* NAV LINKS (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 nav-text">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/styles", label: "Styles" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/process", label: "Process" },
            { href: "/blog", label: "Blog" }
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition font-medium hover:text-[#f95b46] ${
                isActive(href) ? "text-[#f95b46]" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        {/* BUTTONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="h-[44px] w-[161px] px-[16px] py-[10px] rounded-md border border-[#f95b46] text-[#f95b46] text-[16px] font-['Poppins']">
            Get Estimate
          </button>
          <button onClick={openConsultModal}>
            <BookFreeConsultation />
          </button>
        </div>
        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl text-[#f95b46]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full px-6 pb-6 rounded-b-2xl shadow">
          <div className="flex flex-col gap-4 mt-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/styles", label: "Styles" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/process", label: "Process" },
              { href: "/blog", label: "Blog" }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-lg ${
                  isActive(href) ? "text-[#f95b46]" : "text-gray-700"
                }`}
              >
                {label}
              </Link>
            ))}
            <button className="w-full border border-[#f95b46] text-[#f95b46] h-11 rounded-md">
              Get Estimate
            </button>
            <button onClick={openConsultModal}>
              <BookFreeConsultation />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
