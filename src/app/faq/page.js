import React from "react";
import Image from "next/image";
import GetInTouch from "@/app/components/GetInTouch";
import Questions from "@/app/components/Questions";

const page = () => {
  return (
    <div className="max-sm:bg-[#ECEEF6]">
      
      <div className="bg-[#E6EBFE] h-[40vh]">
          <div className="bg-[#E6EBFE] max-md:mt-0 w-[70%] left-1/2 -translate-x-1/2 max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%]  relative max-2xl:top-[15%]  pt-5 px-3 max-sm:px-5 max-sm:pb-5">
            <p className="text-[#0032F0]  text-xl font-semibold md:text-2xl xl:text-3xl ">
             Frequently Asked Questions
            </p>
            
          </div>
        </div>
        <div className="relative bottom-[20vh] p-5 rounded-md shadow-xl bg-white w-[70%] left-1/2 max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%] -translate-x-1/2 max-md:bottom-[15vh]">
          <p className="border-b-[1px] py-5 text-[#121212] font-semibold">
            What is Bytesummit
          </p>
          <p className="py-5">
            We transform ideas and concepts into fully functional products that
            are both aesthetically pleasing and functional, satisfying business
            requirements
          </p>

          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />

          <GetInTouch />
        </div>
      </div>
    
  );
};

export default page;
