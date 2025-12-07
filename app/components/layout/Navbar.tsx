"use client";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div
        className="
        w-full
        mx-auto 
        px-3 sm:px-4 
        md:px-6 
        lg:px-6
        flex 
        items-center 
        justify-between 
        h-19 
        min-h-[64px]
        max-h-[72px] 
        gap-2 sm:gap-3 
      "
      >
        {/* LOGO - Proper sizing */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src={Logo}
            alt="Urbanhaven Logo"
            className="
              h-9 /* 36px height */
              w-auto 
              min-w-[110px] /* Minimum width */
              max-w-[150px] /* Maximum width */
              object-contain
            "
            priority
            width={150}
            height={36}
          />
        </div>

        {/* NAV LINKS (Desktop) - Compact but spaced */}
        <div
          className="
          hidden 
          lg:flex 
          items-center 
          gap-2 xl:gap-3 /* Reduced gap */
          mx-2 lg:mx-4 
          flex-shrink-0 /* Takes available space */
          justify-center
          min-w-0
          font-normal
          font-['Poppins']
        "
        >
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
              className={`
                whitespace-nowrap 
                px-2 xl:px-3 
                py-1 
                transition                
                text-[14px] xl:text-[16px] /* Slightly smaller text */
                hover:text-[#f95b46]
                font-normal 
                font-['Poppins']
                ${
                  isActive(href)
                    ? "text-[#f95b46] font-semibold"
                    : "text-gray-700"
                }
              `}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* BUTTONS (Desktop) - Better button sizing */}
        <div
          className="
          hidden 
          lg:flex 
          items-center 
          gap-3 /* Reduced gap */
          ml-2
        "
        >
          {/* GET ESTIMATE BUTTON - Compact */}
          <button
            className="
              whitespace-nowrap 
              h-11
              px-4 
              py-[10px]
              rounded-md 
              border 
              border-[#f95b46] 
              text-[#f95b46] 
              text-[14px] 
              font-medium
              font-['Poppins']
              hover:bg-[#f95b46] 
              hover:text-white 
              transition-colors
              duration-200
              min-w-[120px] 
              max-w-[140px] 
              flex items-center justify-center
            "
          >
            Get Estimate
          </button>

          {/* BOOK FREE CONSULTATION BUTTON */}
          <button
            onClick={openConsultModal}
            className="flex-shrink-0" /* Match height */
          >
            <BookFreeConsultation />
          </button>
        </div>

        {/* MOBILE MENU BUTTON - Centered properly */}
        <button
          className="
            lg:hidden 
            text-2xl 
            text-[#f95b46] 
            flex items-center justify-end
            w-10 h-10 /* Square button */
          "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="
          lg:hidden 
          bg-white 
          w-full 
          px-4 
          py-4 
          shadow-lg
          border-t border-gray-100
        "
        >
          {/* FULL-SCREEN MOBILE MENU */}
          <div
            className={`
    fixed top-[64px] right-0
    h-[calc(100vh-64px)] w-full
    bg-white 
    z-40 
    transform transition-transform duration-300
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
          >
            <div className="flex flex-col p-6 gap-4">
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
                  className={`
          block py-3  text-[20px] rounded-md font-medium font-['Poppins']
          ${isActive(href) ? "text-[#f95b46]" : "text-gray-700"}
        `}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <button
                  className="
          w-[220px] h-10 border border-[#f95b46] px-4 py-2
          text-[#f95b46] rounded-md text-[16px] font-medium
          hover:bg-[#f95b46] hover:text-white transition-colors
        "
                >
                  Get Estimate
                </button>

                <button
                  onClick={() => {
                    openConsultModal();
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  <BookFreeConsultation />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
