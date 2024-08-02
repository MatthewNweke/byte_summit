// components/VerticalCarousel.js
import React, { useEffect, useRef, useState } from 'react';

const VerticalCarousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && !isAnimating) {
        const { scrollTop, scrollHeight, clientHeight } = carouselRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          carouselRef.current.scrollTop = 0;
        }
      }
    };

    const interval = setInterval(() => {
      setIsAnimating(true);
      carouselRef.current.scrollBy({ top: 1, behavior: 'smooth' });
      setIsAnimating(false);
    }, 30);

    carouselRef.current.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      carouselRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimating]);

  return (
    <div className="relative overflow-hidden h-64">
      <div
        ref={carouselRef}
        className="absolute top-0 left-0 w-full h-full overflow-auto flex flex-col"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-none h-64 flex items-center justify-center bg-gray-200 border-b border-gray-300"
          >
            {item}
          </div>
        ))}
        {/* Duplicate the items for the infinite effect */}
        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-none h-64 flex items-center justify-center bg-gray-200 border-b border-gray-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
