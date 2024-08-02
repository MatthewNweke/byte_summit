import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-around p-3  max-sm:justify-start ">
        <h2 className="text-[#3B4F9B] text-xl md:text-2xl my-3 md:my-5 font-semibold">
          Dropship
        </h2>
        <div className="flex gap-5 items-center justify-center max-sm:hidden">
          <button className="px-4 py-2 md:px-5 md:py-3 h-auto border text-center font-semibold rounded-lg text-[#0032F0] text-xs md:text-sm">
            Mobile
          </button>
          <button className="px-4 py-2 md:px-5 md:py-3 h-auto border text-center font-semibold rounded-lg text-[#0032F0] text-xs md:text-sm">
           Website
          </button>
          <button className="px-4 py-2 md:px-5 md:py-3 h-auto border text-center font-semibold rounded-lg  text-[#0032F0] text-xs md:text-sm">
            Branding
          </button>
        </div>
      </div>
      <div className="relative w-full min-h-[50vh] md:min-h-[100vh]">
        <Image
          src="/dropship_img2.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
          priority
        />
      </div>

      <div className="px-4 md:px-10 mt-10 md:mt-20 mb-6 md:mb-10">
        <h2 className="text-[#3B4F9B] text-xl md:text-2xl my-3 md:my-5 font-semibold">
          About Dropship
        </h2>
        <p className="text-sm md:text-base">
          We transform ideas and concepts into fully functional products that
          are both aesthetically pleasing and functional, satisfying business
          requirements. We transform ideas and concepts into fully functional
          products that are both aesthetically pleasing and functional,
          satisfying business requirements.
        </p>
      </div>

      <div className="px-4 md:px-10 mb-6 md:mb-10">
        <h2 className="text-[#3B4F9B] text-xl md:text-2xl my-3 md:my-5 font-semibold">
          Our Role
        </h2>
        <p className="text-sm md:text-base">
          We transform ideas and concepts into fully functional products that
          are both aesthetically pleasing and functional, satisfying business
          requirements. We transform ideas and concepts into fully functional
          products that are both aesthetically pleasing and functional,
          satisfying business requirements.
        </p>
      </div>

      <div className="flex flex-col w-[90%] md:w-[70%] mx-auto md:flex-row justify-between gap-6 md:gap-10 items-center mt-10 md:mt-20 p-6 md:p-10 rounded-xl">
        <div className="relative w-full md:w-[40%] rounded-xl h-[30vh] md:h-[50vh]">
          <Image
            src="/metrics_blue-img.svg"
            alt="metrics left Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-2xl"
            priority
          />
        </div>

        <div className="bg-[#ECEEF6] w-full md:w-[40%] h-[30vh] md:h-[50vh] rounded-2xl relative">
          <Image
            src="/metrics_right.svg"
            alt="metrics_right"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="rounded-2xl"
            priority
          />
        </div>
      </div>

      <div className="w-[90%] md:w-[70%] mx-auto mt-5 p-6 rounded-xl">
        <h3 className="mb-5 text-[1.3rem] text-[#3B4F9B] font-semibold">
          Metrics
        </h3>
        <div className="flex text-sm flex-col md:flex-row gap-5 md:items-center text-[#3B4F9B]">
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
        <div className="flex  gap-4 md:gap-6 mt-5">
          <button className="px-4 py-2 md:px-5 md:py-3 h-auto text-center font-semibold rounded-3xl text-white bg-[#0032F0] text-xs md:text-sm">
            Contact Us
          </button>
          <button className="px-4 py-2 md:px-5 md:py-3 h-auto flex items-center gap-2 justify-center text-center font-semibold shadow-xl border rounded-3xl bg-white text-[#0032F0] text-xs md:text-sm">
            <span>View live site</span>
            <div className="w-5 h-5 md:w-6 md:h-6 relative">
              <Image
                src="/play_btn.svg"
                alt="play_btn"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
