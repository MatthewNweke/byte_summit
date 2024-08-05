import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-24 min-h-[60vh] text-white bg-[#0032F0]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 max-md:py-6">
        <div className="flex justify-between max-md:flex-col">
          {/* Company Column */}
          <div className="flex flex-col justify-start min-h-[15rem] max-md:min-h-[5rem] max-w-[33%] max-md:max-w-[100%]">
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
            <ul>
              <li className="mb-8 max-w-[100%] text-[#ECECEC] text-[0.9rem]">
                We transform ideas and concepts into fully functional products
                that are both aesthetically pleasing and functional, satisfying
                business requirements
              </li>
              <li className="mb-2 flex gap-3 items-center max-md:hidden">
                <div className="relative h-6 w-6">
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-6 w-6">
                  <Image
                    src="/telegram.png"
                    alt="Telegram"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-6 w-6">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-6 w-6">
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-6 w-6">
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
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
              <Link href="/faq">
                <li className="mb-2 text-[0.9rem]">
                  <span>FAQ&apos;s</span>
                </li>
              </Link>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start min-h-[15rem] max-w-[33%] max-md:hidden">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <Link href="/terms">
                <li className="mb-2 text-[0.9rem]">
                  <span>Terms of Service</span>
                </li>
              </Link>

              <Link href="/privacy-policy">
                <li className="mb-2 text-[0.9rem]">
                  <span>Privacy Policy</span>
                </li>
              </Link>

              <li className="mb-2 text-[0.9rem] cursor-pointer">
                <span>Cookies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-md:flex hidden justify-between min-h-[10rem]">
          <div className="flex flex-col justify-start">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem] cursor-pointer">
                <span>End User License Agreement</span>
              </li>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem] cursor-pointer">
                <span>Trademark & Copyright</span>
              </li>

              {/* <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>FAQ&apos;s</span>
              </li> */}

              <Link href="/faq">
                <li className="mb-2 text-[0.9rem]">
                <span>FAQ&apos;s</span>
                </li>
              </Link>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <Link href="/terms">
                <li className="mb-2 text-[0.9rem]">
                  <span>Terms of service</span>
                </li>
              </Link>
              <Link href="/privacy-policy">
                <li className="mb-2 text-[0.9rem]">
                  <span>Privacy Policy</span>
                </li>
              </Link>
              <li className="mb-2 text-[0.9rem] max-sm:text-[0.8rem]">
                <span>Cookies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="gap-3 items-center hidden max-md:flex ml-5 mb-8">
        <li className="relative h-6 w-6">
          <Image
            src="/twitter.png"
            alt="Twitter"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </li>
        <li className="relative h-6 w-6">
          <Image
            src="/telegram.png"
            alt="Telegram"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </li>
        <li className="relative h-6 w-6">
          <Image
            src="/instagram.png"
            alt="Instagram"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </li>
        <li className="relative h-6 w-6">
          <Image
            src="/facebook.png"
            alt="Facebook"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </li>
        <li className="relative h-6 w-6">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
            loading="lazy"
          />
        </li>
      </ul>

      <div className="border-t-[1px] border-t-[#ffffff] py-4 relative left-1/2 -translate-x-1/2 w-[70%] max-2xl:w-[85%] max-md:w-[90%] max-sm:w-[95%]">
        <div className="max-w-7xl mx-auto text-[0.8rem]">
          <p className="max-md:w-[70%] max-md:leading-7">
            Copyright &copy; 2024 Easypay. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
