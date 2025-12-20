"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import BookFreeConsultation from "../ui/Button";
import { useModal } from "@/app/context/Modalcontext";
import { motion } from "framer-motion";

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
            // { href: "/services", label: "Services" },
            { href: "/aboutus", label: "About Us" },
            { href: "/styles", label: "Styles" }
            // { href: "/portfolio", label: "Portfolio" },
            // { href: "/process", label: "Process" },
            // { href: "/blog", label: "Blog" }
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
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <BookFreeConsultation
              onClick={openConsultModal}
              className="flex-shrink-0"
            />
          </motion.div>
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
          <motion.span
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {isMenuOpen ? "✕" : "☰"}
          </motion.span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden"
        >
          {/* FULL-SCREEN MOBILE MENU */}
          <div
            className={`
    fixed top-[80px] right-0
    h-[calc(100vh-64px)] w-full
    bg-white
    z-40 
    transform transition-transform duration-300
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 h-[calc(100vh-64px)] w-full bg-white z-40"
            >
              {[
                { href: "/", label: "Home" },
                // { href: "/services", label: "Services" },
                { href: "/aboutus", label: "Aboutus" },
                { href: "/styles", label: "Styles" }
                // { href: "/portfolio", label: "Portfolio" },
                // { href: "/process", label: "Process" },
                // { href: "/blog", label: "Blog" }
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
          block py-3 text-[20px] rounded-md font-medium font-['Poppins'] text-center
          ${isActive(href) ? "text-[#f95b46]" : "text-gray-700"}
        `}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3 justify-center items-center">
                <button
                  className="
          w-[220px] h-10 border border-[#f95b46] px-4 py-2
          text-[#f95b46] rounded-md text-[16px] font-medium
          hover:bg-[#f95b46] hover:text-white transition-colors
        "
                >
                  Get Estimate
                </button>

                <BookFreeConsultation
                  onClick={() => {
                    openConsultModal();
                    setIsMenuOpen(false);
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
