import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-28">
      <div className="max-h-[90vh]">
        <div className="bg-[#E6EBFE] px-20 py-10 h-[50vh]">
          <p className="text-[#0032F0] text-[1.5rem] mb-3 relative w-[70%] left-1/2 -translate-x-1/2">About Us</p>
          <p className="text-[1.1rem]">
            Let's Connect and Build Something Amazing Together
          </p>
        </div>
        <div
          className="relative bottom-[30vh]  h-[70vh] w-[70%] left-1/2 -translate-x-1/2 bg-contain  bg-no-repeat"
          style={{ backgroundImage: "url('/about_bg.svg')" }}
        ></div>
      </div>
      <div className="relative w-[70%] left-1/2 -translate-x-1/2 text-[1.1rem]">
        At Pixel Perfect, we're passionate about creating impactful and engaging
        experiences that are accessible to everyone. We're a team of skilled
        Software engineers, designers and project managers specializing in the
        entire cycle ranging from ideation to development and management of
        software products, website design and development and logo design. We
        believe a successful product starts with inclusivity. That's why we
        build products that are not only functional, visually stunning and
        user-friendly, but also adhere to accessibility best practices, ensuring
        that everyone, including people with disabilities, can navigate and
        interact with your software products and websites seamlessly.
      </div>

      <div className="flex justify-between  mt-20 relative w-[70%] left-1/2 -translate-x-1/2">
        <div
          className="w-[35%] min-h-[80vh] shadow-xl  rounded-md p-8  bg-[20%] bg-no-repeat"
          style={{
            backgroundImage: "url('/approach_img-big.svg')",
            backgroundPosition: "right bottom",
          }}
        >
          <p className="text-[#1A2244] font-semibold text-[1.2rem] mb-5">
            Our Approach
          </p>
          <p>
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

          {/* /approach_img-big.svg */}
        </div>
        <div
          className="w-[35%] shadow-xl min-h-[80vh] rounded-md p-8 bg-[#FF8039] text-white bg-no-repeat"
          style={{
            backgroundImage: "url('/team_img-small.svg')",
            backgroundPosition: "right bottom",
          }}
        >
          <p className="text-[1.2rem] font-semibold mb-5">Our Team</p>
          <p>
            We are dedicated to exceeding your expectations. We are passionate
            about what we do, and we take pride in building long-term
            relationships with our clients.
          </p>
          <div className="relative w-[100%] h-[80%] text-[#2B3A72] text-center">
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

      <div className="mt-10 relative w-[70%] left-1/2 -translate-x-1/2 text-[1.1rem]">
        <p className="text-[#5E5E5E] font-semibold mb-5">Here's what sets us apart:</p>
        <p>
          {" "}
          We are passionate, experienced, and inclusive. Our team of highly
          skilled software engineers and designers, prioritizing accessibility
          in every project. We take a collaborative approach. We work closely
          with you to understand your needs and vision, ensuring your website
          caters to everyone. We are results-oriented. We create entire
          experiences that arenot only beautiful and accessible but also
          functional and align with your business goals. Ready to bring your
          inclusive digital vision to life? Let's chat! We offer a free
          consultation to discuss your project and see how we can help you
          create a website that's impactful for everyone.

          
        </p>
        <button className="px-5 py-3 my-5 text-center font-semibold  rounded-3xl text-white bg-[#0032F0] text-sm cursor-pointer max-lg:text-[1rem]">Contact Us</button>
      </div>
    </div>
  );
};

export default page;
