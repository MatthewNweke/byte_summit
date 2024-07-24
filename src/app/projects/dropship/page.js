import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-28 relative w-full">
      <div className="relative w-full min-h-[100vh]">
        <Image
          src="/dropship_img2.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="h-[100%]"
        />
      </div>

      <div className="px-10 mt-20 mb-10">
        <p className="text-[#3B4F9B] text-[1.2rem] my-5 font-semibold">
          About Dropship
        </p>
        <p>
          We transform ideas and concepts into fully functional products that
          are both aesthetically pleasing and functional, satisfying business
          requirementsWe transform ideas and concepts into fully functional
          products that are both aesthetically pleasing and functional,
          satisfying business requirementsWe transform ideas and concepts into
          fully functional products that are both aesthetically pleasing and
          functional, satisfying business requirements We transform ideas and
          concepts into fully functional products that are both aesthetically
          pleasing and functional, satisfying business requirementsWe transform
          ideas and concepts into fully functional products that are both
          aesthetically pleasing and functional, satisfying business
          requirementsWe transform ideas and concepts into fully functional
          products that are both aesthetically pleasing and functional,
          satisfying business requirements
        </p>
      </div>

      <div className="px-10">
        <p className="text-[#3B4F9B] text-[1.2rem] my-5 font-semibold">
          Our role
        </p>
        <p>
          We transform ideas and concepts into fully functional products that
          are both aesthetically pleasing and functional, satisfying business
          requirementsWe transform ideas and concepts into fully functional
          products that are both aesthetically pleasing and functional,
          satisfying business requirementsWe transform ideas and concepts into
          fully functional products that are both aesthetically pleasing and
          functional, satisfying business requirements We transform ideas and
          concepts into fully functional products that are both aesthetically
          pleasing and functional, satisfying business requirementsWe transform
          ideas and concepts into fully functional products that are both
          aesthetically pleasing and functional, satisfying business
          requirementsWe transform ideas and concepts into fully functional
          products that are both aesthetically pleasing and functional,
          satisfying business requirements
        </p>
      </div>

      <div className="flex justify-center gap-[10%] items-center mt-20">
        <div className="relative w-[30%] h-[50vh]">
          <Image
            src="/metrics_blue-img.svg"
            alt="metrics left Image"
            layout="fill"
            objectFit="contain"
            quality={100}
            className=""
          />
        </div>

        <div className="bg-[#ECEEF6] w-[30%] h-[50vh] rounded-lg">
          <div className="relative w-[100%] h-[100%] rounded-lg">
            <Image
              src="/metrics_right.svg"
              alt="metrics_right"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-[70%] mt-5 relative left-1/2 -translate-x-1/2 ">
        <p className="mb-5 text-[1.2rem] text-[#3B4F9B]">Metrics</p>
        <div className="flex gap-5 items-center text-[#3B4F9B]">
          <p>
            Work Duration:{" "}
            <span className="font-semibold text-[#3B4F9B]">12 Months</span>
          </p>
          <p>
            Number of Users:{" "}
            <span className="font-semibold text-[#3B4F9B]">100k</span>
          </p>
          <p>
            Income generated:{" "}
            <span className="font-semibold text-[#3B4F9B]">2M</span>
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <button className="px-5 py-3 h-[3rem] my-5 text-center font-semibold  rounded-3xl text-white bg-[#0032F0] text-sm cursor-pointer max-lg:text-[1rem]">
            Contact Us
          </button>
          <button className="px-5 py-3 h-[3rem] my-5 flex items-center gap-2 justify-between text-center font-semibold shadow-xl border-[1px] rounded-3xl bg-white text-[#0032F0] text-sm cursor-pointer max-lg:text-[1rem]">
          <span> View live site</span>
          <div className="relative w-[2rem] h-[2rem] ">
            <Image
              src="/play_btn.svg"
              alt="play_btn"
              layout="fill"
              objectFit="contain"
              quality={100}
              className=""
            />
          </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
