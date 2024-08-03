"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [activeLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    // Retrieve the active links from localStorage
    const storedActiveLinks = JSON.parse(localStorage.getItem("activeLinks"));
    if (storedActiveLinks) {
      setActiveLinks(storedActiveLinks);
    } else {
      setActiveLinks(["Home"]); // Default to ["Home"] if no value is found in localStorage
    }

    const handleScroll = () => {
      const scrollThreshold = 50;
      setScrolled(window.scrollY > scrollThreshold);
    };

    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".menu") &&
        !event.target.closest(".hamburger-button")
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    let newActiveLinks = [link];
    if (link === "About") {
      newActiveLinks = ["About", "Contact"];
    }
    setActiveLinks(newActiveLinks);
    localStorage.setItem("activeLinks", JSON.stringify(newActiveLinks)); // Store the active links in localStorage
    setMenuOpen(false); 
  };

  return (
    <div className={`w-full sticky z-50 top-0 bg-white shadow-md transition-all duration-300 ${isScrolled ? "bg-opacity-90" : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[15vh] py-12 px-4 sm:px-6 lg:px-8 max-md:py-6">
        <Link href="/">
          <div className="relative h-[10rem] w-[10rem] max-lg:w-[8rem] max-lg:h-[8rem] cursor-pointer">
            <Image
              src="/logo.svg"
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
                    link.name === "About" ? "py-3 px-4" : "py-2 px-4"
                  } ${activeLinks.includes(link.name)
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
            className="hamburger-button w-7 h-7 relative text-[#1A2244] focus:outline-none p-2 transition-transform duration-300"
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
            { name: "FAQ", href: "/faq" }
          ].map((link) => (
            <Link href={link.href} key={link.name}>
              <p
                onClick={() => handleLinkClick(link.name)}
                className={`px-5 py-3 text-center font-semibold w-[60vw] rounded-3xl text-sm cursor-pointer ${
                  link.name === "About" ? "py-5 px-7" : "py-3 px-5"
                } ${activeLinks.includes(link.name)
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
