"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const page = () => {
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
    <div className="mt-48">
      <div className="flex justify-center gap-[10%] ">
        <div className="w-[40%] text-[1.1rem]">
          <div className="mb-5">
            <p className="text-[#0032F0] text-[2rem] font-semibold mb-5">
              Contact our team
            </p>
            <p className="w-[50%] ">
              Let&lsquo;s Connect and Build Something Amazing Together
            </p>
          </div>
          <p className="w-[60%]">
            At Bytesummit, we&lsquo;re excited to hear from you! Whether you
            have a question, need a consultation, or are ready to start your
            next big project, our team is here to help.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-[60%] mt-5 py-4 bg-white  rounded-lg"
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
                placeholder="email"
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
                placeholder="message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#0032F0] text-white font-semibold shadow-md  rounded-3xl focus:outline-none focus:ring-2 "
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="relative w-[30%] h-[50vh] ">
          <Image
            src="/img_slide1.svg"
            alt="Image Slide"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-[#FF8039] text-white py-10 text-sm mt-10">
        <div className="w-[55%] font-semibold relative -translate-x-1/2 left-1/2 ">
          {" "}
          <p className="mb-5 text-[1.5rem]">
            Bytesummit-Your Partner in Digital Innovation
          </p>
          <p>
            Ready to start your journey with Bytesummit? Reach out today and
            let's create something extraordinary together!
          </p>
        </div>
      </div>

      <div className="w-[50%] mt-10 relative -translate-x-1/2 left-1/2">
        <p className="mb-3 text-[#292D32] font-semibold">Stay Connected</p>
        <p className="mb-3">
          Follow us on social media to keep up with the latest news, updates,
          and industry insights from Bytesummit.
        </p>

        <li className="gap-3 items-center hidden max-md:flex ml-5 mb-8">
          <div className="relative h-6 w-6">
            <Image
              src="/twitter.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </div>
          <div className="relative h-6 w-6">
            <Image
              src="/telegram.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </div>
          <div className="relative h-6 w-6">
            <Image
              src="/instagram.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </div>
          <div className="relative h-6 w-6">
            <Image
              src="/facebook.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
              loading="lazy"
            />
          </div>
          <div className="relative h-6 w-6">
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
        <p className="font-semibold text-sm text-[#292D32]">@OfficialBytesummit.</p>
      </div>
    </div>
  );
};

export default page;
