"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../css/Styles.module.css";
// Import CSS module for styles

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-x-0 border-t-0 border-[1px]">
      <div className="flex items-center justify-between py-5  ">
        <span>How do I price Bytesummit plans</span>
        <button
          className={`relative w-[2rem] h-[2rem] ${styles.addButton} ${
            isOpen ? styles.rotate : ""
          }`}
          onClick={toggleDropdown}
        >
          <Image
            src="/add.svg"
            alt="add"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </button>
      </div>

      <div className={`${styles.dropdown} ${isOpen ? styles.show : ""}`}>
        <p className="py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nulla
          adipisci consequuntur quae. Quos voluptatem, reprehenderit voluptates
          accusantium similique minus?
        </p>
      </div>
    </div>
  );
};

export default Questions;
