"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

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
      className={`w-full flex shadow-md fixed z-40 top-0 left-0 justify-around max-lg:block transition-all duration-300 ${
        isScrolled ? "bg-[transparent] bg-opacity-90" : "bg-[white]"
      }`}
    >
      <div className="flex justify-between items-center h-[15vh]  px-5 ">
        <Link href="/">
          <div className="relative  h-[10rem] w-[10rem]">
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
            className={`hamburger-button w-[2rem] h-[2rem] relative text-[#1A2244] focus:outline-none  p-2 transition-transform duration-300 ${
              isMenuOpen ? "" : ""
            }`}
          >
            <Image
              src="/menu-bar.svg"
              className="cursor-pointer "
              loading="lazy"
              alt="Logo"
              layout="fill"
            />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`menu lg:hidden w-[100%] relative  transition-all duration-300 overflow-hidden max-md:w-[60%] max-sm:w-[70%] ${
          isMenuOpen ? "max-h-[60vh] py-10 " : "max-h-0"
        } ${isScrolled ? "bg-[#ffcc29] bg-opacity-60" : ""}`}
      >
        <div className="flex flex-col px-3 gap-4 ">
          <Link href="/">
            <p className="p-3 animate__animated animate__lightSpeedInLeft font-semibold rounded-2xl text-white bg-[#0032F0] text-sm cursor-pointer max-lg:text-[1rem]">
              Home
            </p>
          </Link>
          <div className="cursor-pointer">
            <Link href="#">
              <p className="p-3 rounded-lg text-[#1A2244] text-sm max-lg:text-[1rem] font-semibold">
                Projects
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="#">
              <p className="p-3  rounded-lg text-[#1A2244] text-sm max-lg:text-[1rem] font-semibold">
                Contact
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="#">
              <p className="p-3 rounded-lg text-[#1A2244] text-sm max-lg:text-[1rem] font-semibold">
                About
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="#">
              <p className="p-3 rounded-lg text-[#1A2244] text-sm max-lg:text-[1rem] font-semibold">
                FAQ
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex items-center  gap-10 hidden`}>
        <div>
          <Link href="/">
            <p className="font-semibold py-[0.4rem] px-5 rounded-3xl text-white bg-[#0032F0]   cursor-pointer">
              Home
            </p>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5  ">
              Projects
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5 ">
              Contact
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5 ">
              About
            </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="#">
            <p className="font-semibold text-[#1A2244] py-[0.4rem] px-5 ">
              FAQ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
