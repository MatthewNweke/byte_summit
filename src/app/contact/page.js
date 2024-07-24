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
    <div className="mt-48 px-4 md:px-0">
      <div className="flex flex-col justify-center gap-[10%] md:flex-row">
        <div className="lg:w-[40%] md:w-[80%] sm:w-[100%] text-[1.1rem]">
          <div className="mb-5">
            <p className="text-[#0032F0] text-[2rem] font-semibold mb-5">
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#0032F0] text-white font-semibold shadow-md rounded-3xl focus:outline-none focus:ring-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="relative h-auto md:w-1/3 hidden lg:block">
          <Image
            src="/img_slide1.svg"
            alt="Image Slide"
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
            let's create something extraordinary together!
          </p>
        </div>
      </div>

      <div className="w-full md:w-[50%] mt-10 mx-auto md:text-left">
        <p className="mb-3 text-[#292D32] font-semibold">Stay Connected</p>
        <p className="mb-3">
          Follow us on social media to keep up with the latest news, updates,
          and industry insights from Bytesummit.
        </p>

        <ul className="flex justify-center md:justify-start gap-3 items-center mb-8">
          <li className="relative h-6 w-6">
            <Image
              src="/twitter.png"
              alt="Twitter Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/telegram.png"
              alt="Telegram Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/instagram.png"
              alt="Instagram Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/facebook.png"
              alt="Facebook Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
          <li className="relative h-6 w-6">
            <Image
              src="/linkedin.png"
              alt="LinkedIn Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </li>
        </ul>
        <p className="font-semibold text-sm text-[#292D32]">@OfficialBytesummit.</p>
      </div>
    </div>
  );
};

export default Page;
