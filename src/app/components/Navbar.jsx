"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

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

  return (
    <div
      className={`w-full flex shadow-md fixed z-50 top-0 bg-[white] left-0 justify-around max-lg:block transition-all duration-300 ${
        isScrolled ? "bg-[transparent] bg-opacity-90" : "bg-[white]"
      }`}
    >
      <div className="flex justify-between items-center h-[15vh]  px-5 ">
        <Link href="/">
          <div className="relative h-[10rem] w-[10rem]">
            <Image
              src="/logo.svg"
              className="cursor-pointer"
              loading="lazy"
              alt="Logo"
              layout="fill"
            />
          </div>
        </Link>

        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-button w-7 h-7 relative text-[#1A2244] focus:outline-none  p-2 transition-transform duration-300 ${
              isMenuOpen ? "" : ""
            }`}
          >
            <Image
              src="/menu-bar.svg"
              className="cursor-pointer"
              loading="lazy"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`menu lg:hidden fixed top-0 bottom-0 right-0 w-full md:w-[60%] bg-white z-50 transform transition-transform duration-300 ${
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
          <Link href="/">
            <p className="px-5 py-3 text-center font-semibold max-md:w-[60vw] w-[50vw] rounded-3xl text-white bg-[#0032F0] text-sm cursor-pointer max-lg:text-[1rem]">
              Home
            </p>
          </Link>
          <Link href="#">
            <p className="px-5 py-3 text-center text-[#1A2244] max-md:w-[60vw] w-[50vw] rounded-3xl text-sm max-lg:text-[1rem] font-semibold">
              Projects
            </p>
          </Link>
          <Link href="#">
            <p className="px-5 py-3 text-center text-[#1A2244] max-md:w-[60vw] w-[50vw] rounded-3xl text-sm max-lg:text-[1rem] font-semibold">
              Contact
            </p>
          </Link>
          <Link href="#">
            <p className="px-5 py-3 text-center text-[#1A2244] max-md:w-[60vw] w-[50vw] rounded-3xl text-sm max-lg:text-[1rem] font-semibold">
              About
            </p>
          </Link>
          <Link href="#">
            <p className="px-5 py-3 text-center text-[#1A2244] max-md:w-[60vw] w-[50vw] rounded-3xl text-sm max-lg:text-[1rem] font-semibold">
              FAQ
            </p>
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex items-center gap-10 hidden`}>
        <div>
          <Link href="/">
            <p className="font-semibold py-[0.4rem] px-5 rounded-3xl text-white bg-[#0032F0] cursor-pointer">
              Home
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5">
              Projects
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5">
              Contact
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5">
              About
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5">
              FAQ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
