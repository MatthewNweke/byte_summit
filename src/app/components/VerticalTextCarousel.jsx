import { useState, useEffect } from "react";

const VerticalTextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of items for the carousel
  const items = ["Products", "Websites", "Software", "Applications"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change items every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative h-[2em]  flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 flex flex-col text-[#FF8039]"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full w-full flex items-center  text-3xl font-semibold"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
};

export default VerticalTextCarousel;
