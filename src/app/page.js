"use client";

import Image from "next/image";
import VerticalCarousel from "./components/VerticalCarousel";
import VerticalTextCarousel from "./components/VerticalTextCarousel";

const Home = () => {
  return (
    <div className="mt-16 max-md:mt-10">
      <div className="flex justify-center items-center max-lg:flex-wrap max-xl:px-5 max-xl:justify-around max-lg:justify-center max-lg:items-center max-lg:gap-20 max-sm:gap-0">
        <div className="flex flex-col h-[60vh] w-[40%] max-md:justify-between justify-between max-sm:h-[50vh]  max-lg:h-[60vh] max-2xl:w-[50%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%]">
          <div className="montserrat-bold text-4xl max-sm:max-w-[100%] max-w-[60%]  max-2xl:relative max-2xl:left-1/2 max-2xl:-translate-x-1/2  max-xl:max-w-[65%] max-lg:max-w-[100%]  max-3xl:text-2xl  font-semibold max-lg:translate-x-0 max-lg:left-0">
            <span className="text-4xl font-semibold max-2xl:text-3xl">
              Let&rsquo;s build your  <span><VerticalTextCarousel/></span> together
            </span>
            
              {/* <VerticalTextCarousel /> */}
              
            
          </div>
          <div className="max-w-[60%] text-lg max-2xl:relative max-2xl:left-1/2 max-2xl:-translate-x-1/2 max-sm:max-w-[100%] max-xl:max-w-[65%] max-lg:max-w-[100%] max-xl:w-auto max-lg:w-[100%] max-lg:translate-x-0 max-lg:left-0">
            We transform ideas and concepts into fully functional products that
            are both aesthetically pleasing and functional, satisfying business
            requirements
          </div>
          <div className="w-[100%] flex  gap-7 items-center max-lg:gap-3 max-2xl:justify-center max-lg:justify-start">
            <buton className="bg-[#0031EB] border-[4px] border-white text-center cursor-pointer   font-semibold text-white shadow-xl rounded-3xl text-[1rem] px-5 py-3 w-[30%] max-2xl:w-auto max-2xl:text-sm">
              Our Services
            </buton>
            <button className="bg-[#ffffff] flex max-lg:hidden items-center justify-center gap-2 border-1 text-[#1A2244] px-5 py-3 cursor-pointer text-center font-semibold shadow-xl rounded-3xl  text-[1rem] w-[50%] max-2xl:w-auto max-2xl:text-sm">
              <span>Book a free Consultation</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/message.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
            <button className="bg-[#ffffff] hidden max-lg:flex items-center justify-center gap-2 border-1 text-[#1A2244] px-10 py-3 cursor-pointer text-center font-semibold shadow-xl rounded-3xl  text-[1rem] w-[50%] max-2xl:w-auto max-xl:px-5 max-xl:py-2 max-2xl:text-sm">
              <span>Book now</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/message.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
        </div>

        {/* This section is for a vertical carousel images;different images will be displayed but in a vertical direction*/}
        <div className="p-4 overflow-hidden max-md:p-0">
          <div className="flex gap-5 justify-center relative top-10  max-sm:h-[3em]">
            <div className="shadow-2xl h-32 w-32 sm:h-40 sm:w-40 relative max-sm:hidden">
              <div className="absolute w-6 h-6 sm:w-8 sm:h-8 right-0">
                <Image
                  src="/rect_blue.svg"
                  alt="rect_blue"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="shadow-2xl h-32 w-32 sm:h-40 sm:w-40 relative max-sm:shadow-none ">
              <div className="absolute w-6 h-6 sm:w-8 sm:h-8 top-2 right-2 max-sm:hidden">
                <Image
                  src="/rect_orange.svg"
                  alt="rect_orange"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="shadow-2xl h-32 w-32 sm:h-40 sm:w-40 relative max-sm:shadow-none"></div>
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 left-1/5 bottom-0 max-sm:top-[4rem] max-sm:left-[1.2rem]">
              <Image
                src="/circle_blue.svg"
                alt="circle_blue"
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
          </div>

          <VerticalCarousel />

          <div className="flex flex-wrap justify-between relative bottom-10">
            <div className="shadow-2xl h-32 w-32 sm:h-40 sm:w-40 relative max-sm:shadow-none"></div>
            <div className="flex -z-10 max-sm:hidden">
              <div className="shadow-2xl h-32 w-32 sm:h-40 sm:w-40 bg-white z-10 relative"></div>
              <div className="shadow-2xl h-32 w-32 sm:h-40 sm:w-40 bg-white relative top-10 right-10 -z-10"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between relative bottom-12 lg:bottom-16">
            <div>
              <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                <Image
                  src="/star_orange.svg"
                  alt="star"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 lg:left-24 lg:top-12 left-12 top-8">
                <Image
                  src="/star_blue.svg"
                  alt="star"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 bottom-16 lg:bottom-24 right-12 lg:right-24">
              <Image
                src="/star_blue.svg"
                alt="star"
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0032F0] pt-10 pb-10 max-md:pb-0  flex flex-col md:flex-row items-center justify-end  gap-[20%] max-xl:gap-[10%]  max-xl:px-5  min-h-[60vh]">
        <div className="text-white text-[1rem] w-[100%] md:w-[50%] lg:w-[30%]  mb-10 md:mb-0">
          <p className="text-[2rem] mb-5 md:mb-10 max-sm:text-[1.5rem]">At Bytesummit</p>
          <p>
            We believe in the power of innovation and design to drive business
            success. Our mission is to help you realize your vision by
            delivering products that combine elegance with functionality.
          </p>
        </div>
        <div className="relative w-[80%] lg:w-[50%] xl:w-[40%] h-[60vh] max-md:hidden inline">
          <div className="absolute w-[1.5rem] h-[1.5rem] right-28 top-6 max-2xl:right-14 max-2xl:top-10  max-lg:right-8 max-lg:top-5">
            <Image
              src="circle.svg"
              alt="circle"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="absolute w-[1.5rem] h-[1.5rem] right-28 bottom-6 max-2xl:right-14 max-2xl:bottom-10 max-lg:right-8 max-lg:bottom-5">
            <Image
              src="star.svg"
              alt="star"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <Image
            src="Screen_displays.svg"
            alt="Screen"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="relative w-[100%] lg:w-[50%]  xl:w-[40%] h-[60vh] hidden max-md:inline">
          <Image
            src="apple_display.svg"
            alt="Screen"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-[80%] -translate-x-1/2 left-1/2 relative max-lg:w-[90%]">
        <p className="text-[1.5rem] text-[#0024AA] ml-20 mt-10 font-semibold max-lg:ml-0">
          Our Process
        </p>
      </div>
      <div className="mt-10 w-[80%] max-w-full mx-auto relative max-xl:w-[100%] max-xl:px-3">
        <div className="flex justify-center gap-[5%] items-center flex-wrap max-xl:">
          <div
            className="w-[25%]  max-lg:w-[45%] max-sm:w-[100%] py-5 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md bg-contain bg-left-bottom bg-no-repeat mb-10"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Innovative Solutions
              </p>
              <p>
                We stay at the forefront of design and technology to bring you
                the latest and most innovative solutions.
              </p>
            </div>

            <div className="w-[13rem] h-[13rem] absolute bottom-0 right-0">
              <Image
                src="idea.svg"
                alt="idea_img"
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className=""
              />
            </div>
          </div>
          <div
            className="w-[25%]  max-lg:w-[45%] max-sm:w-[100%] py-5 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md bg-contain bg-left-bottom bg-no-repeat mb-10"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Tailored Approach
              </p>
              <p>
                Every project is unique, and we tailor our approach to meet your
                specific requirements and goals.
              </p>
            </div>
            <div className="w-[13rem] h-[13rem] absolute bottom-0 right-0">
              <Image
                src="target.svg"
                alt="target_img"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className=""
              />
            </div>
          </div>
          <div
            className="w-[25%]  max-lg:w-[45%] max-sm:w-[100%] py-5 border-[#B0BFFA] relative border-[1px] min-h-[50vh] rounded-md bg-contain bg-left-bottom bg-no-repeat mb-10"
            style={{ backgroundImage: "url('/bg_process.svg')" }}
          >
            <div className="inline-block w-[80%] left-1/2 absolute -translate-x-1/2">
              <p className="text-[#3D52A1] font-semibold text-[1.2rem] mb-5">
                Collaborative Process:
              </p>
              <p>
                We believe in a collaborative approach, working closely with you
                at every stage to ensure your vision is fully realized.
              </p>
            </div>
            <div className="w-[13rem] h-[13rem] absolute bottom-0 right-0">
              <Image
                src="handshake.svg"
                alt="handshake_img"
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[80%] -translate-x-1/2 left-1/2 relative max-lg:w-[90%]">
          <p className="text-[1.5rem] text-[#0024AA] ml-20  mt-10 font-semibold max-lg:ml-0">
            What We Offer
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-[5%] mt-10 px-5">
        <div className="flex flex-col w-full md:w-[40%] gap-10">
          <div
            className="shadow-xl p-5 rounded-3xl bg-contain bg-right-top bg-no-repeat"
            style={{ backgroundImage: "url('/bg_software.svg')" }}
          >
            <div className="relative w-16 h-16 mb-5">
              <Image
                src="/software_icon.svg"
                alt="software"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <p className="text-[#3D52A1] text-[1.2rem] mb-5">
              Software Development
            </p>
            <p className="text-[#2B3A72] mb-8">
              Efficiency, scalability, and security are at the core of our
              software development process. Whether it’s a standalone
              application or an enterprise solution, we deliver robust software
              that empowers your business.
            </p>
            <p className="font-semibold text-[#2B3A72]">
              Custom software development Cloud-based solutions Integration
              services Quality assurance and testing
            </p>

            <button className="bg-[#ffffff] flex items-center justify-between gap-2 border-1 text-[#3D52A1] px-5 py-3 mt-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
              <span>Our Services</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/arrow-right.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>

          <div className="shadow-xl p-5 rounded-3xl bg-[#0032F0]  text-white">
            <div className="relative w-16 h-16 mb-5">
              <Image
                src="/webdev_icon.svg"
                alt="webdev"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <p className="text-[1.2rem] mb-5">Web Development</p>
            <p>
              From sleek corporate websites to dynamic e-commerce platforms, we
              build engaging online experiences that captivate your audience.
              Our web development services include: Custom website design
              Responsive layouts Content management systems (CMS) E-commerce
              solutions
            </p>
            <button className="bg-[#ffffff] flex items-center justify-between gap-2 border-1 text-[#3D52A1] px-5 py-3 mt-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
              <span>Our Services</span>
              <div className="relative w-7 h-7">
                <Image
                  src="/arrow-right.svg"
                  alt="message"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className="w-[25%] max-md:w-full  max-lg:w-[40%] bg-contain bg-right-top bg-no-repeat shadow-xl rounded-3xl text-[1rem] p-5"
          style={{ backgroundImage: "url('/bg_software.svg')" }}
        >
          <div className="relative w-16 h-16 text-[#2B3A72] mb-5">
            <Image
              src="/mobileapp_icon.svg"
              alt="mobileapp"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <p className="text-[#3D52A1] text-[1.2rem] mb-5">
            Mobile Applications
          </p>
          <p className="mb-5">
            Stay ahead in the mobile-first world with our cutting-edge app
            development services. We create intuitive, user-friendly apps for
            iOS and Android, ensuring seamless performance and delightful
            interactions.
          </p>
          <ul className="font-semibold list-disc pl-5 mb-5">
            <li>Native app development</li>
            <li>Cross-platform solutions</li>
            <li>User experience (UX) design</li>
            <li>App maintenance and updates</li>
          </ul>
          <button className="bg-[#ffffff] flex items-center justify-between gap-2 border-1 text-[#3D52A1] px-5 py-3 my-5 cursor-pointer text-center shadow-xl rounded-3xl text-[1rem] min-w-[35%]">
            <span>Our Services</span>
            <div className="relative w-7 h-7">
              <Image
                src="/arrow-right.svg"
                alt="message"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </button>

          <div className="relative w-full h-72 text-[#2B3A72] text-center">
            <Image
              src="/ridechain.svg"
              alt="ridechain"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
