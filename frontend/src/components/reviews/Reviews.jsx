import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import datareviews from "../../Data/reviews";
import Review from "./review/Review";
import s from "./Reviews.module.css";

const Reviews = () => {
  const swiper = useSwiper();
  console.log(swiper);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => swiper}
        className={s.swiper}>
        <div className={s.reviews}>
          {datareviews.map((item) => (
            <SwiperSlide className={s.swiperSlide}>
              <Review {...item} key={item.id} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => swiper}
        className={s.swiper_BP}>
        <div className={s.reviews}>
          {datareviews.map((item) => (
            <SwiperSlide className={s.swiperSlide}>
              <Review {...item} key={item.id} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Reviews;
