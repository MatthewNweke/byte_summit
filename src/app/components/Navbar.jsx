"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollThreshold = 50;
    setScrolled(window.scrollY > scrollThreshold);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".menu") &&
      !event.target.closest(".hamburger-button")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div
      className={`w-full h-[15vh] flex items-center shadow-md fixed z-50 top-0 bg-[white] left-0 justify-between px-5 transition-all duration-300 ${
        isScrolled ? "bg-[transparent] bg-opacity-90" : "bg-[white]"
      }`}
    >
      <Link href="/">
        <div className="relative h-[10rem] w-[10rem] max-lg:w-[8rem] max-lg:h-[8rem]">
          <Image
            src="/logo.svg"
            className="cursor-pointer"
            loading="lazy"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10 max-lg:gap-5">
        {[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
          { name: "About", href: "/about" },
          { name: "FAQ", href: "/faq" }
        ].map((link) => (
          <div className="cursor-pointer" key={link.name}>
            <Link href={link.href}>
              <p
                onClick={() => handleLinkClick(link.name)}
                className={`font-semibold py-2 px-4 rounded-3xl transition-colors duration-200 ${
                  activeLink === link.name
                    ? "text-white bg-[#0032F0]"
                    : "text-[#1A2244] hover:bg-gray-200"
                }`}
              >
                {link.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* Responsive Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`hamburger-button w-7 h-7 relative text-[#1A2244] focus:outline-none p-2 transition-transform duration-300`}
        >
          <Image
            src="/menu-bar.svg"
            className="cursor-pointer"
            loading="lazy"
            alt="Menu"
            layout="fill"
            objectFit="contain"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`menu md:hidden fixed top-0 bottom-0 right-0 w-full md:w-[60%] bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-9 right-5">
          <button
            onClick={handleCloseMenu}
            className="text-gray-600 relative w-7 h-7 hover:text-gray-800 focus:outline-none"
          >
            <Image
              src="/close-circle.svg"
              className="cursor-pointer"
              loading="lazy"
              alt="Close"
              layout="fill"
              objectFit="contain"
            />
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 pt-28">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
            { name: "About", href: "/about" },
            { name: "FAQ", href: "/faqs/faq" }
          ].map((link) => (
            <Link href={link.href} key={link.name}>
              <p
                onClick={() => handleLinkClick(link.name)}
                className={`px-5 py-3 text-center font-semibold w-[60vw] rounded-3xl text-sm cursor-pointer ${
                  activeLink === link.name
                    ? "text-white bg-[#0032F0]"
                    : "text-[#1A2244] hover:bg-gray-200"
                }`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
