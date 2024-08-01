"use client";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <div className="mt-16 px-4 md:px-0 max-md:mt-10">
      <div className="flex flex-col justify-end  gap-[20%] md:flex-row max-lg:justify-center">
        <div
          className="max-sm:w-[100%] max-md:w-[80%] max-md:mx-auto max-lg:w-[60%] max-xl:w-[35%] w-[30%] text-[1.1rem]"
        >
          <div className="mb-5">
            <p className="text-[#0032F0] text-xl font-semibold md:text-2xl xl:text-3xl mb-5">
              Contact our team
            </p>
            <p className="md:w-[70%]">
              Let&lsquo;s Connect and Build Something Amazing Together
            </p>
          </div>
          <p className="md:w-[100%]">
            At Bytesummit, we&lsquo;re excited to hear from you! Whether you
            have a question, need a consultation, or are ready to start your
            next big project, our team is here to help.
          </p>

          <form
            onSubmit={handleSubmit}
            className="md:w-[100%] mt-5 py-4 bg-white rounded-lg"
          >
            <div className="mb-4">
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3  bg-[#F8F8F8] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 bg-[#F8F8F8] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 bg-[#F8F8F8] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder="Phone number"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 bg-[#F8F8F8] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#0032F0] text-sm text-white font-semibold shadow-md rounded-3xl"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="relative max-h-[70vh] w-1/3 hidden lg:block max-xl:max-h-[90vh]">
          <Image
            src="/contact_img.svg"
            alt="contact"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-[#FF8039] text-white py-10 text-sm mt-10 px-5">
        <div className=" w-[55%] max-lg:w-[70%] max-md:w-[100%] font-semibold mx-auto  md:text-left">
          <p className="mb-5 text-[1.5rem] max-md:text-[1.2rem] leading-7">
            Bytesummit-Your Partner in Digital Innovation
          </p>
          <p>
            Ready to start your journey with Bytesummit? Reach out today and
            let&apos;s create something extraordinary together!
          </p>
        </div>
      </div>

      <div className="w-full md:w-[50%] mt-10 mx-auto md:text-left">
        <p className="mb-3 text-[#292D32] font-semibold">Stay Connected</p>
        <p className="mb-3">
          Follow us on social media to keep up with the latest news, updates,
          and industry insights from Bytesummit.
        </p>

        <ul className="flex  md:justify-start gap-3 items-center mb-8">
          <li className="relative h-6 w-6">
            <Image
              src="/twitter_blue.svg"
              alt="Twitter Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/telegram_blue.svg"
              alt="Telegram Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/instagram_blue.svg"
              alt="Instagram Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/facebook_blue.svg"
              alt="Facebook Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/linkedin_blue.svg"
              alt="LinkedIn Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
        </ul>
        <p className=" text-sm text-[#292D32]">
          @OfficialBytesummit.
        </p>
      </div>
    </div>
  );
};

export default Page;
