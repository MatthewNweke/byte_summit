
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="relative h-[70vh] mx-auto max-md:h-[60vh] max-sm:h-[50vh]">
        <div className="bg-[#E6EBFE] w-full absolute h-[60%]">
          <div className="h-[50%] mx-auto flex max-w-3xl flex-col justify-end py-5 px-3 max-sm:h-[60%]">
            <p className="text-[#0032F0] text-xl font-semibold md:text-2xl xl:text-3xl mb-1">
              About Us
            </p>
            <p className="md:text-lg text-md">
              Let&apos;s Connect and Build Something Amazing Together
            </p>
          </div>
        </div>
        <div className="absolute max-sm:w-[95%] w-full h-[70%] max-sm:h-[60%] max-w-3xl bottom-0 mx-auto left-1/2 -translate-x-1/2">
          <Image
            src="/about_bg.svg"
            alt="team"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="relative text-lg w-[90%] sm:w-[70%] left-1/2 transform -translate-x-1/2 text-justify  py-10 max-md:py-3">
        At Pixel Perfect, we&apos;re passionate about creating impactful and
        engaging experiences that are accessible to everyone. We&apos;re a team
        of skilled software engineers, designers, and project managers
        specializing in the entire cycle ranging from ideation to development
        and management of software products, website design and development, and
        logo design. We believe a successful product starts with inclusivity.
        That&apos;s why we build products that are not only functional, visually
        stunning, and user-friendly but also adhere to accessibility best
        practices, ensuring that everyone, including people with disabilities,
        can navigate and interact with your software products and websites
        seamlessly.
      </div>

      {/* Approach and Team Section */}
      <div className="flex items-center max-md:flex-col justify-between mt-20 relative w-[70%] max-lg:w-[100%] left-1/2 transform -translate-x-1/2 gap-10 sm:gap-0 max-md:mt-10">
        <div
          className={`w-full lg:w-[45%] min-h-[80vh] shadow-xl rounded-md p-8 ${
            isMediumScreen ? "bg-no-repeat bg-right-bottom" : "bg-none"
          }`}
          style={
            isMediumScreen
              ? { backgroundImage: "url('/approach_img-big.png')" }
              : {}
          }
        >
          <p className="text-[#1A2244] font-semibold  mb-5 max-md:mb-3">
            Our Approach
          </p>
          <p className="text-justify text-lg">
            Through a collaborative approach, we get to know your brand, target
            audience, and vision. We then translate that knowledge into:
            Beautiful and User-Friendly Web Design: We design websites that are
            visually appealing, easy to navigate, and optimized for all devices,
            while prioritizing accessibility standards like clear hierarchy,
            proper color contrast, and keyboard navigation. Intuitive UI/UX
            Design: We create user interfaces that are intuitive, user-friendly,
            and guide users seamlessly through your website, considering diverse
            needs and abilities. Memorable Logo Design: We design logos that are
            unique, memorable, and accurately represent your brand identity.
          </p>
        </div>
        <div
          className="w-full lg:w-[45%] relative shadow-xl min-h-[80vh] rounded-md p-8 bg-[#FF8039] text-white bg-no-repeat bg-right-bottom"
          style={{
            backgroundImage: "url('/team.svg')",
          }}
        >
          <p className="text-[1.2rem] font-semibold mb-5 max-md:mb-3">
            Our Team
          </p>
          <p className="text-justify text-lg">
            We are dedicated to exceeding your expectations. We are passionate
            about what we do, and we take pride in building long-term
            relationships with our clients.
          </p>
          <div className="absolute w-[90%] h-[20rem] bottom-0 flex">
            <Image
              src="/team_img.svg"
              alt="team"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-10 relative w-[90%] sm:w-[70%] left-1/2 text-justify transform -translate-x-1/2 text-lg">
        <p className="text-[#5E5E5E] font-semibold mb-5">
          Here&apos;s what sets us apart:
        </p>
        <p>
          We are passionate, experienced, and inclusive. Our team of highly
          skilled software engineers and designers, prioritizing accessibility
          in every project. We take a collaborative approach. We work closely
          with you to understand your needs and vision, ensuring your website
          caters to everyone. We are results-oriented. We create entire
          experiences that are not only beautiful and accessible but also
          functional and align with your business goals. Ready to bring your
          inclusive digital vision to life? Let&apos;s chat! We offer a free
          consultation to discuss your project and see how we can help you
          create a website that&apos;s impactful for everyone.
        </p>

        <Link href="/contact">
          <button className="px-5 py-3 my-5 font-semibold rounded-3xl text-white bg-[#0032F0] text-sm cursor-pointer hover:bg-[#0020b3] max-lg:text-[1rem]">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
