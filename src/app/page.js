"use client";
import {SwiperSlide } from "swiper/react";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/Styles.module.css"; // Import your CSS file with transitions
import SwiperCarousel from "./components/SwiperCarousel";
import VerticalSwiper from "./components/VerticalSwiper";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  const texts = ["Product", "Website", "Software", "Applications"];
  const images = ["/img_slide1.svg", "/img_slide2.svg", "/img_slide3.svg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setInTransition(true);
      setTimeout(() => {
        setTextIndex((prevIndex) =>
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        setImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setInTransition(false);
      }, 1000); // exit animation duration
    }, 3000); // interval between slides

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-48">
      <div className="flex justify-center max-lg:flex-wrap max-xl:px-5 max-xl:justify-around max-lg:justify-center max-lg:items-center max-lg:gap-20">
        <div className="flex flex-col w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%]">
          <div className="montserrat-bold text-[2.5rem] w-[70%] max-xl:w-auto max-lg:w-[100%]  max-2xl:text-[2rem] font-semibold">
            <span>Let&lsquo;s build your dream </span>
            <span
              key={textIndex}
              className={`text-[#FF8039] ${
                inTransition ? styles["slide-exit"] : styles["slide-enter"]
              }`}
            >
              {texts[textIndex]}
            </span>
            <span> together</span>
          </div>
          <div className="w-[65%] mt-10 text-[1.1rem] max-lg:w-[100%]">
            We transform ideas and concepts into fully functional products that
            are both aesthetically pleasing and functional, satisfying business
            requirements
          </div>

          <div className="w-[100%] flex  gap-7 items-center mt-10 max-lg:gap-3">
            <buton className="bg-[#0031EB] text-center cursor-pointer   font-semibold text-white shadow-xl rounded-3xl text-[1rem] px-5 py-3 w-[30%] max-2xl:w-auto ">
              Our Services
            </buton>
            <button className="bg-[#ffffff] flex max-lg:hidden items-center justify-center gap-2 border-1 text-[#1A2244] px-5 py-3 cursor-pointer text-center font-semibold shadow-xl rounded-3xl  text-[1rem] w-[50%] max-2xl:w-auto ">
              <span>Book a free Consultation</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/message.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
            <button className="bg-[#ffffff] hidden max-lg:flex items-center justify-center gap-2 border-1 text-[#1A2244] px-5 py-3 cursor-pointer text-center font-semibold shadow-xl rounded-3xl  text-[1rem] w-[50%] max-2xl:w-auto max-xl:px-2 max-xl:py-2">
              <span>Book now</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/message.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-[30%] h-[50vh] max-lg:w-[100%] ">
          <Image
            key={imageIndex}
            src={images[imageIndex]}
            alt="Image Slide"
            layout="fill"
            objectFit="contain"
            loading="lazy"
            className={
              inTransition ? styles["slide-exit"] : styles["slide-enter"]
            }
          />
        </div>

        {/* <VerticalSwiper>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </VerticalSwiper> */}
      </div>

      <div className="bg-[#0032F0] pt-10 pb-10 max-md:pb-0  flex flex-col md:flex-row items-center justify-end  gap-[20%] max-xl:gap-[10%] max-xl:justify-center max-xl:px-5 mt-20 min-h-[60vh]">
        <div className="text-white text-[1rem] w-[80%] md:w-[50%] lg:w-[30%] text-center md:text-left mb-10 md:mb-0">
          <p className="text-[2rem] mb-5 md:mb-10">At Bytesummit</p>
          <p>
            We believe in the power of innovation and design to drive business
            success. Our mission is to help you realize your vision by
            delivering products that combine elegance with functionality.
          </p>
        </div>
        <div className="relative w-[80%] lg:w-[50%] xl:w-[40%] h-[60vh] max-md:hidden inline">
          <Image
            src="Screen_displays.svg"
            alt="Screen"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="relative w-[100%] lg:w-[50%]  xl:w-[40%] h-[60vh] hidden max-md:inline">
          <Image
            src="apple_display.svg"
            alt="Screen"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-[80%] -translate-x-1/2 left-1/2 relative">
        <p className="text-[1.5rem] text-[#0024AA] ml-20  my-10 mt-20  font-semibold">
          Our Process
        </p>
      </div>
      <div className="mt-20 w-[80%] max-w-full mx-auto relative max-xl:w-[100%] max-xl:px-3">
        <div className="flex justify-center gap-[5%] items-center flex-wrap max-xl:">
          <div
            className="w-[25%]  max-lg:w-[45%] max-sm:w-[100%] py-5 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md bg-contain bg-left-bottom bg-no-repeat mb-10"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Innovative Solutions
              </p>
              <p>
                We stay at the forefront of design and technology to bring you
                the latest and most innovative solutions.
              </p>
            </div>

            <div className="w-[13rem] h-[13rem] absolute bottom-0 right-0">
              <Image
                src="idea.svg"
                alt="idea_img"
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className=""
              />
            </div>
          </div>
          <div
            className="w-[25%]  max-lg:w-[45%] max-sm:w-[100%] py-5 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md bg-contain bg-left-bottom bg-no-repeat mb-10"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Tailored Approach
              </p>
              <p>
                Every project is unique, and we tailor our approach to meet your
                specific requirements and goals.
              </p>
            </div>
            <div className="w-[13rem] h-[13rem] absolute bottom-0 right-0">
              <Image
                src="target.svg"
                alt="target_img"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className=""
              />
            </div>
          </div>
          <div
            className="w-[25%]  max-lg:w-[45%] max-sm:w-[100%] py-5 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md bg-contain bg-left-bottom bg-no-repeat mb-10"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Collaborative Process:
              </p>
              <p>
                We believe in a collaborative approach, working closely with you
                at every stage to ensure your vision is fully realized.
              </p>
            </div>
            <div className="w-[13rem] h-[13rem] absolute bottom-0 right-0">
              <Image
                src="handshake.svg"
                alt="handshake_img"
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[80%] -translate-x-1/2 left-1/2 relative">
          <p className="text-[1.5rem] text-[#0024AA] ml-20  my-10 font-semibold">
            What We Offer
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-[5%] mt-20 px-5">
        <div className="flex flex-col w-full md:w-[40%] gap-10">
          <div
            className="shadow-xl p-5 rounded-3xl bg-contain bg-right-top bg-no-repeat"
            style={{ backgroundImage: "url('/bg_software.svg')" }}
          >
            <div className="relative w-16 h-16 mb-5">
              <Image
                src="/software_icon.svg"
                alt="software"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <p className="text-[#3D52A1] text-[1.2rem] mb-5">
              Software Development
            </p>
            <p className="text-[#2B3A72] mb-8">
              Efficiency, scalability, and security are at the core of our
              software development process. Whether it’s a standalone
              application or an enterprise solution, we deliver robust software
              that empowers your business.
            </p>
            <p className="font-semibold text-[#2B3A72]">
              Custom software development Cloud-based solutions Integration
              services Quality assurance and testing
            </p>

            <button className="bg-[#ffffff] flex items-center justify-between gap-2 border-1 text-[#3D52A1] px-5 py-3 mt-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
              <span>Our Services</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/arrow-right.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>

          <div className="shadow-xl p-5 rounded-3xl bg-[#0032F0]  text-white">
            <div className="relative w-16 h-16 mb-5">
              <Image
                src="/webdev_icon.svg"
                alt="webdev"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <p className="text-[1.2rem] mb-5">Web Development</p>
            <p>
              From sleek corporate websites to dynamic e-commerce platforms, we
              build engaging online experiences that captivate your audience.
              Our web development services include: Custom website design
              Responsive layouts Content management systems (CMS) E-commerce
              solutions
            </p>
            <button className="bg-[#ffffff] flex items-center justify-between gap-2 border-1 text-[#3D52A1] px-5 py-3 mt-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
              <span>Our Services</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/arrow-right.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className="w-full md:w-[25%] bg-contain bg-right-top bg-no-repeat shadow-xl rounded-3xl text-[1rem] p-5"
          style={{ backgroundImage: "url('/bg_software.svg')" }}
        >
          <div className="relative w-16 h-16 text-[#2B3A72] mb-5">
            <Image
              src="/mobileapp_icon.svg"
              alt="mobileapp"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <p className="text-[#3D52A1] text-[1.2rem] mb-5">
            Mobile Applications
          </p>
          <p className="mb-5">
            Stay ahead in the mobile-first world with our cutting-edge app
            development services. We create intuitive, user-friendly apps for
            iOS and Android, ensuring seamless performance and delightful
            interactions.
          </p>
          <ul className="font-semibold list-disc pl-5 mb-5">
            <li>Native app development</li>
            <li>Cross-platform solutions</li>
            <li>User experience (UX) design</li>
            <li>App maintenance and updates</li>
          </ul>
          <button className="bg-[#ffffff] flex items-center justify-between gap-2 border-1 text-[#3D52A1] px-5 py-3 my-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
            <span>Our Services</span>
            <div className="relative w-7 h-7">
              <Image
                src="/arrow-right.svg"
                alt="message"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </button>

          <div className="relative w-full h-72 text-[#2B3A72] text-center">
            <Image
              src="/ridechain.svg"
              alt="ridechain"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SwiperCarousel />
      </div>
    </div>
  );
};

export default Home;
