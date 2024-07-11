import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-24 min-h-[60vh] text-white bg-[#0032F0]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 max-md:py-6">
        <div className="flex  justify-around max-md:flex-col   ">
          {/* Company Column */}
          <div className=" flex flex-col justify-start min-h-[15rem] max-md:min-h-[5rem] max-w-[33%] max-md:max-w-[100%]">
            <div className="relative h-[2rem] w-40 mb-4">
              <Image
                src="/footer_logo.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                className="cursor-pointer"
                loading="lazy"
              />
            </div>
            <ul className="">
              <li className="mb-8 max-w-[100%] text-[#ECECEC] text-[0.9rem] ">
                We transform ideas and concepts into fully functional products
                that are both aesthetically pleasing and functional, satisfying
                business requirements
              </li>
              <li className="mb-2 flex gap-3 items-center max-md:hidden">
                <div className="relative h-7 w-7">
                  <Image
                    src="/twitter.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-7 w-7">
                  <Image
                    src="/telegram.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-7 w-7">
                  <Image
                    src="/instagram.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-7 w-7">
                  <Image
                    src="/facebook.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-7 w-7">
                  <Image
                    src="/linkedin.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col justify-start min-h-[15rem] max-w-[33%] max-md:hidden">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2 text-[0.9rem]">
                <span>End User License Agreement</span>
              </li>
              <li className="mb-2 text-[0.9rem]">
                <span>Trademark & Copyright</span>
              </li>
              <li className="mb-2 text-[0.9rem]">
                <span>FAQ’s</span>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start min-h-[15rem] max-w-[33%] max-md:hidden">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2 text-[0.9rem]">
                <span>Terms of Service</span>
              </li>
              <li className="mb-2 text-[0.9rem]">
                <span>Privacy Policy</span>
              </li>
              <li className="mb-2 text-[0.9rem]">
                <span>Cookies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-md:flex hidden justify-between min-h-[10rem] ">
          <div className="flex flex-col justify-start   ">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>End User License Agreement</span>
              </li>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>Trademark & Copyright</span>
              </li>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>FAQ’s</span>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start   ">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>Terms of Service</span>
              </li>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>Privacy Policy</span>
              </li>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>Cookies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <li className="gap-3 items-center hidden max-md:flex ml-5 mb-8">
        <div className="relative h-7 w-7">
          <Image
            src="/twitter.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="relative h-7 w-7">
          <Image
            src="/telegram.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="relative h-7 w-7">
          <Image
            src="/instagram.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="relative h-7 w-7">
          <Image
            src="/facebook.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="relative h-7 w-7">
          <Image
            src="/linkedin.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </div>
      </li>

      <div className="border-t-[1px] border-t-[#ffffff] py-4 relative left-1/2 -translate-x-1/2 w-[70%] max-2xl:w-[85%] max-md:w-[90%] max-sm:w-[95%]">
        <div className="max-w-7xl mx-auto  text-sm">
          <p className=" max-md:w-[70%] max-md:leading-7">Copyright &copy; 2024 Easypay. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
