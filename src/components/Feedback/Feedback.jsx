import React from 'react'
import "./Feedback.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import {Link} from "react-router-dom"

// import required modules
import { Pagination, Navigation } from "swiper";

import Rectangle from "../../images/rectangle.png"

const Feedback = () => {
  return (
    <div className='feedback'>
      <div className="container">
        <h2 className="feedback-title">Отзывы наших клиентов</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Rectangle} alt="" /></SwiperSlide>
      </Swiper>

      <Link to="/" className='feedback-link'>Смотреть все отзывы</Link>
      </div>
    </div>
  )
}

export default Feedback