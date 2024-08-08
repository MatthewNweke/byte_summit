"use client";

import { useState, useEffect } from 'react';

const VerticalTextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of text items for the carousel
  const texts = [
    "Products",
    "Websites",
    "Software",
    "Applications",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flex items-center space-x-4 text-4xl font-semibold max-2xl:text-3xl ">
      <div className="">
        <span className="">dream</span>
        
      </div>
      <div className="relative w-full inline-block h-[2em] overflow-hidden">
        <div
          className="absolute inset-0 flex flex-col"
          style={{ transform: `translateY(-${currentIndex * 100}%)`, transition: 'transform 0.3s ease-in-out' }}
        >
          {texts.map((text, index) => (
            <div key={index} className="flex-shrink-0 h-full text-[#FF8039] w-full flex items-center  text-center">
              <p className=" font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTextCarousel;
