import React from "react";
import Image from "next/image";

const Dropship = ({ description, img, reverse }) => {
  return (
    <div className="my-10">
      <div className={`flex justify-end gap-[5%] mt-20 ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="p-5 w-[40%]">
          <div className="flex items-center justify-between gap-5 mb-5">
            <p className="text-[#3B4F9B] text-[1.5rem] font-semibold">Dropship</p>
            <button className="bg-[#ffffff] flex items-center justify-between border-1 text-[#3D52A1] px-5 py-3 my-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
              <span>View Project</span>
              <div className="relative w-7 h-7">
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
          <p className="text-[#2B3A72] mb-8">{description}</p>
        </div>

        <div className="relative w-[50%] h-[50vh]">
          <Image
            src={img}
            alt="project image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Dropship;
