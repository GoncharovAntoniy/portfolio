import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import datareviews from "../../Data/reviews";
import Review from "./review/Review";
import s from "./Reviews.module.css";
 

const Reviews = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      // scrollbar={{ draggable: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)} className={s.swiper}>
      <div className={s.reviews}>
        {datareviews.map((item) => (
          <SwiperSlide className={s.swiperSlide}>
            <Review {...item} key={item.id} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  ); 
};

export default Reviews;
