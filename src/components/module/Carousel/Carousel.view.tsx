import React from "react";
import { CarouselProps } from "./Carousel.props";
import { Container } from "./Carousel.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = (props: CarouselProps): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/400x600?sig=9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default React.memo(Carousel);
