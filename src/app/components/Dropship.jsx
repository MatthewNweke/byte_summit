import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Dropship = ({ description, img, reverse }) => {
  return (
    <div className="my-10">
      <div
        className={`flex flex-col lg:flex-row justify-center max-lg:items-center  gap-10 mt-20 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="p-5 w-full lg:w-2/5 lg:p-16">
          <div className="flex items-center justify-between gap-5 mb-5">
            <p className="text-[#3B4F9B] text-xl font-semibold">Dropship</p>
            <button className="bg-white flex items-center justify-center border border-gray-300 text-[#3D52A1] px-5 py-2 cursor-pointer shadow-md rounded-full text-base hover:bg-gray-100 transition">
              <Link href="/projects/dropship">
               View Project
              </Link>
              <div className="relative w-7 h-7 ml-2">
                <Image
                  src="/view_project.svg"
                  alt="view project"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
          <p className="text-[#2B3A72] mb-8 ">{description}</p>
        </div>

        <div className="relative w-full lg:w-3/5 h-60 lg:h-96">
          <Image
            src={img}
            alt="project image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Dropship;
