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
        px-4 sm:px-6
        md:px-8
        lg:px-[60px]
        xl:px-[80px]
        2xl:px-[200px]
        py-[18px]
        flex 
        items-center 
        justify-between 
        h-[79px]
        min-h-[72px]
        max-h-[80px]       
      "
      >
        {/* LOGO - Left Side */}
        <div className="flex items-center justify-start flex-shrink-0">
          <Image
            src={Logo}
            alt="Urbanhaven Logo"
            className="
              h-8
              w-auto
              min-w-[100px]
              max-w-[160px]
              object-contain
               h-[37px]"
            priority
            width={130}
            height={32}
          />
        </div>

        <div
          className="
          hidden 
          lg:flex 
          items-center 
          ml-auto gap-4"
        >
          <div className="flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/aboutus", label: "About Us" },
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
                  px-1 xl:px-2
                  py-2 
                  transition                
                  text-[12px] 
                  lg:text-[13px] 
                  xl:text-[14px]
                  2xl:text-[15px]
                  hover:text-[#f95b46]
                  text-base
                  font-medium 
                  font-['Poppins']
                  ${
                    isActive(href)
                      ? "text-[#f95b46] font-semibold"
                      : "text-[#212121]"
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Buttons on Right Side - More compact */}

          <button
            className="
              ml-auto
              whitespace-nowrap 
              h-[43px]
              px-2 xl:px-4
              py-2
              rounded-md 
              border 
              border-[#f95b46] 
              text-[#f95b46] 
              text-lg
              font-medium
              font-['Poppins']
              hover:bg-[#f95b46] 
              hover:text-white 
              transition-colors
              duration-200
              min-w-[90px] 
              lg:min-w-[100px]
              xl:min-w-[110px]
              2xl:min-w-[148px]
              flex items-center justify-center
              flex-shrink-0
            "
          >
            Get Estimate
          </button>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <BookFreeConsultation
              onClick={openConsultModal}
              className="
                px-2 xl:px-4
                py-2
                text-lg             
                min-w-[130px]
                lg:min-w-[140px]
                xl:min-w-[150px]
                2xl:min-w-[241px]
                h-[43px]
                flex-shrink-0
               
              "
            />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="
            lg:hidden 
            text-2xl 
            text-[#f95b46] 
            flex items-center justify-end
            w-10 h-10
            flex-shrink-0
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden"
        >
          <div
            className={`
              fixed top-[80px] left-0
              h-[calc(100vh-80px)] w-full
              bg-white
              z-40 
              overflow-y-auto
            `}
          >
            <div className="flex flex-col p-6 space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/aboutus", label: "About Us" },
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
                    block py-4 text-[18px] font-medium font-['Poppins'] 
                    border-b border-gray-100
                    ${isActive(href) ? "text-[#f95b46]" : "text-gray-700"}
                  `}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <button
                  className="
                    w-full h-12 border border-[#f95b46] px-4 py-3
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
                  className="h-12 text-[16px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
