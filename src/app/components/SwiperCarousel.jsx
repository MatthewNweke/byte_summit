// components/SwiperCarousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperCard from "./SwiperCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;
