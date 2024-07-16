import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="flex bg-[#FF8039] items-center justify-between text-white rounded-md py-5 px-10">
      <div className="">
        <p className="mb-5"> Still have questions?</p>
        <p>
          Can &lsquo;t find the answer you&lsquo;re looking for? Please chat to
          our friendly team.
        </p>
      </div>
      <button className="flex items-center px-5 py-3 text-center text-black h-[3rem] bg-white rounded-3xl text-sm gap-2">

        {/*  max-md:w-[60vw] w-[50vw]  max-lg:text-[1rem] */}
        <span>Get in touch</span>
        <div className="w-[2rem] h-[2rem] relative">
          <Image
            src="/tel.svg"
            alt="add"
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
