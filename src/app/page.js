"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/Styles.module.css"; // Import your CSS file with transitions

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
    <div className="mt-52">
      <div className="flex justify-center">
        <div className="flex flex-col w-[40%]">
          <div className="montserrat-bold text-[2.5rem] w-[60%] font-semibold">
            <span>Let's build your dream </span>
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
            <buton className="bg-[#ffffff] flex items-center justify-center gap-2 border-1 text-[#1A2244] px-5 py-3 cursor-pointer text-center font-semibold shadow-xl rounded-3xl  text-[1rem] w-[50%]">
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
            </buton>
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

      <div className="bg-[#0032F0] flex items-center justify-end gap-[10%] mt-10 h-[50vh]">
        <div className="text-white text-[1rem] w-[30%] ">
          <p className="text-[2rem] mb-10">At Bytesummit</p>
          <p>
            We believe in the power of innovation and design to drive business
            success. Our mission is to help you realize your vision by
            delivering products that combine elegance with functionality.
          </p>
        </div>

        <div className="relative w-[35%] h-[50vh]">
          <Image
            src="Screen_displays.svg"
            alt="Screen"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
