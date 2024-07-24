import React from "react";
import Dropship from "../components/Dropship";

const page = () => {
  return (
    <div className="mt-48 text-[#0024AA]">
      <div className="w-[55%] relative left-1/2 top-0 px-5 -translate-x-1/2 max-lg:w-[70%] max-md:w-[100%]">
        <p className="text-[2rem] mb-5 max-lg:text-[1.8rem]">
          Transforming Ideas into Digital Masterpieces
        </p>
        <p>
          At Bytesummit, we offer a comprehensive suite of services designed to
          meet your unique digital needs. From creating stunning websites to
          developing robust mobile applications and custom software solutions,
          we are your trusted partner in the digital world.
        </p>
      </div>

      <div className="bg-[#FF8039] text-white py-10 text-sm mt-10 px-5">
        <div className="w-[55%] font-semibold relative -translate-x-1/2 left-1/2 max-lg:w-[70%] max-md:w-[100%]">
          {" "}
          <p className="mb-5 text-[1.5rem]">Recent Projects</p>
          <p className="mb-3">Showcasing Our Expertise</p>
          <p>
            We pride ourselves on delivering high-quality projects that drive
            success. Here are a few examples of our recent work:
          </p>
        </div>
      </div>

      <Dropship
        img="/dropship_img1.svg"
        description="We transform ideas and concepts into fully functional products that
        are both aesthetically pleasing and functional, satisfying business
        requirementsWe transform ideas and concepts into fully functional
        products that are both aesthetically pleasing and functional,
        satisfying business requirementsWe transform ideas and concepts into
        fully functional products that are both aesthetically pleasing and
        functional, satisfying business requirements"
      />
      <Dropship
      reverse={true}
        img="/dropship_img2.svg"
        description="We transform ideas and concepts into fully functional products that
        are both aesthetically pleasing and functional, satisfying business
        requirementsWe transform ideas and concepts into fully functional
        products that are both aesthetically pleasing and functional,
        satisfying business requirementsWe transform ideas and concepts into
        fully functional products that are both aesthetically pleasing and
        functional, satisfying business requirements"
      />
      <Dropship
      
        img="/dropship_img1.svg"
        description="We transform ideas and concepts into fully functional products that
        are both aesthetically pleasing and functional, satisfying business
        requirementsWe transform ideas and concepts into fully functional
        products that are both aesthetically pleasing and functional,
        satisfying business requirementsWe transform ideas and concepts into
        fully functional products that are both aesthetically pleasing and
        functional, satisfying business requirements"
      />
    </div>
  );
};

export default page;
