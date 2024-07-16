import React from "react";
import Image from "next/image";
import GetInTouch from "@/app/components/GetInTouch";
import Questions from "@/app/components/Questions";

const page = () => {
  return (
    <div className="mt-28">
      <div className="">
        <div className="bg-[#E6EBFE] px-20 py-10 h-[50vh]">
          <p className="text-[#0032F0] text-[1.5rem] relative mb-3 w-[70%] left-1/2 -translate-x-1/2">
            Frequently asked questions
          </p>
          <p className="text-[1.1rem]">
            Let's Connect and Build Something Amazing Together
          </p>
        </div>
        <div className="relative bottom-[30vh] p-5 rounded-md shadow-xl bg-white w-[70%] left-1/2 -translate-x-1/2">
          <p className="border-b-[1px] py-5 text-[#121212] font-semibold">
            What is Bytesummit
          </p>
          <p className="py-5">
            We transform ideas and concepts into fully functional products that
            are both aesthetically pleasing and functional, satisfying business
            requirements
          </p>
          
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          <Questions/>
          
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default page;
