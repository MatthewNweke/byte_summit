"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/Styles.module.css"; // Import your CSS file with transitions
import SwiperCarousel from "./components/SwiperCarousel";

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
      <div className="flex justify-center">
        <div className="flex flex-col w-[40%]">
          <div className="montserrat-bold text-[2.5rem] w-[60%] font-semibold">
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
          <div className="w-[65%] mt-10 text-[1.1rem]">
            We transform ideas and concepts into fully functional products that
            are both aesthetically pleasing and functional, satisfying business
            requirements
          </div>

          <div className="w-[100%] flex  gap-7 items-center mt-10">
            <buton className="bg-[#0031EB] text-center cursor-pointer   font-semibold text-white shadow-xl rounded-3xl text-[1rem] px-5 py-3 w-[30%]">
              Our Services
            </buton>
            <button className="bg-[#ffffff] flex items-center justify-center gap-2 border-1 text-[#1A2244] px-5 py-3 cursor-pointer text-center font-semibold shadow-xl rounded-3xl  text-[1rem] w-[50%]">
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
          </div>
        </div>
        <div className="relative w-[30%] h-[50vh] bg-cover bg-center">
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
      </div>

      <div className="bg-[#0032F0] flex items-center justify-end gap-[10%] mt-20 h-[60vh]">
        <div className="text-white text-[1rem] w-[30%]">
          <p className="text-[2rem] mb-10">At Bytesummit</p>
          <p>
            We believe in the power of innovation and design to drive business
            success. Our mission is to help you realize your vision by
            delivering products that combine elegance with functionality.
          </p>
        </div>

        <div className="relative w-[35%] h-[60vh]">
          <Image
            src="Screen_displays.svg"
            alt="Screen"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-20 w-[80%] left-1/2 relative -translate-x-1/2">
        <p className="text-[1.5rem] text-[#0024AA] ml-20  mb-10 font-semibold">
          Our Process
        </p>
        <div className="flex justify-center gap-[5%] items-center">
          <div
            className="w-[25%] py-3 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md  bg-contain bg-left-bottom bg-no-repeat"
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

            <div className=" w-[13rem] h-[13rem] absolute bottom-0 right-0">
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
            className="w-[25%] py-3 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md  bg-contain bg-left-bottom bg-no-repeat"
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
            <div className=" w-[13rem] h-[13rem] absolute bottom-0 right-0">
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
            className="w-[25%] py-3 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md  bg-contain bg-left-bottom bg-no-repeat"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Collaborative Process:
              </p>
              <p>
                We believe in a collaborative approach, working closely with you
                at every stage to ensure your vision is fully realized
              </p>
            </div>
            <div className=" w-[13rem] h-[13rem] absolute bottom-0 right-0">
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
          <p className="text-[1.5rem] text-[#0024AA] ml-20  my-10 mt-20 font-semibold">
            What We Offer
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[5%] ">
        <div className="flex flex-col w-[40%] ">
          <div
            className="shadow-xl p-5 rounded-3xl bg-contain bg-right-top bg-no-repeat"
            style={{ backgroundImage: "url('/bg_software.svg')" }}
          >
            <div className="relative w-16 h-16">
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
          </div>

          <div className="shadow-xl p-5 rounded-3xl bg-[#0032F0] mt-10 text-white">
            <div className="relative w-16 h-16">
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
          </div>
        </div>
        <div
          className="w-[25%] bg-contain bg-right-top bg-no-repeat shadow-xl rounded-3xl text-[1rem] p-5"
          style={{ backgroundImage: "url('/bg_software.svg')" }}
        >
          <div className="relative w-16 h-16 text-[#2B3A72]">
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
          <p>
            Stay ahead in the mobile-first world with our cutting-edge app
            development services. We create intuitive, user-friendly apps for
            iOS and Android, ensuring seamless performance and delightful
            interactions.
          </p>
          <ul className="font-semibold list-disc py-5 px-10">
            <li>Native app development</li>
            <li> Cross-platform solutions</li>
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

          <div className="relative w-[100%] h-[40%] text-[#2B3A72] text-center">
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
