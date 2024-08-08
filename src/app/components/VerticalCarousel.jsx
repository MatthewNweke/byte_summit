"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources for the carousel
  const images = [
    "/img_slide1.svg",
    "/img_slide2.svg", // Add more image sources here
    "/img_slide3.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[50vh] overflow-hidden">
      <div
        className="absolute inset-0 flex flex-col "
        style={{ transform: `translateY(-${currentIndex * 100}%)`, transition: 'transform 0.3s ease-in-out' }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 h-full w-full relative">
            <Image
              src={src}
              alt={`slide-${index}`}
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
       
    </div>
  );
};

export default VerticalCarousel;