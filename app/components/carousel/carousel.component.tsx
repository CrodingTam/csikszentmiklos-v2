"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SlideItem } from "@/app/models/slide-item.model";
import Item from "./item/item.component";
import StyledWrapper from "./carousel.style";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  slides: SlideItem[];
};

const Carousel: FC<Props> = ({ slides }) => {
  return (
    <StyledWrapper>
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Item slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledWrapper>
  );
};

export default Carousel;
