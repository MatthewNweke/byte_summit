import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FF8039]  md:items-center justify-between text-white rounded-md py-5 px-6 lg:px-10">
      <div className="text-left mb-4 md:mb-0 flex-1 m">
        <p className="mb-3 lg:mb-5 text-lg lg:text-xl font-semibold">Still have questions?</p>
        <p className="text-sm lg:text-base">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
      </div>
      <button className="flex items-center justify-center px-5 py-3 bg-white text-black rounded-3xl text-sm lg:text-base gap-2 shadow-md hover:bg-gray-100 transition duration-300 max-w-xs  sm:max-w-sm md:max-w-md lg:max-w-lg">
        <span>Get in touch</span>
        <div className="w-8 h-8 relative">
          <Image
            src="/tel.svg"
            alt="Phone icon"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </button>
    </div>
  );
};

export default GetInTouch;
