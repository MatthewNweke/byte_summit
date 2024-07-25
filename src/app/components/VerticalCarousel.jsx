import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../css/Styles.module.css"

const VerticalCarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);
  const images = ["/img_slide1.svg", "/img_slide2.svg", "/img_slide3.svg"];
  useEffect(() => {
    const interval = setInterval(() => {
      setInTransition(true);
      setTimeout(() => {
        setImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setInTransition(false);
      }, 1000); // transition duration
    }, 3000); // interval between slides

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles["carousel-container"]}>
      <div
        className={styles["carousel-wrapper"]}
        style={{ transform: `translateY(-${imageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles["carousel-slide"]} ${
              inTransition ? styles["slide-exit"] : styles["slide-enter"]
            }`}
          >
            <Image
              src={image}
              alt={`Image Slide ${index}`}
              layout="fill"
              objectFit="contain"
              loading="lazy"
              className={
                inTransition ? styles["slide-exit"] : styles["slide-enter"]
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
