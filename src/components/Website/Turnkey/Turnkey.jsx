import React from "react";
import "./Turnkey.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import TurnkeyImg from "../../../images/TurnKey.png";

const Turnkey = () => {
  return (
    <div className="turnkey">
      <div className="container">
        <h2 className="turnkey-title">Сделаем все работы под ключ</h2>
        <div className="turnkey-texts">
          <p className="turnkey-text">
            Комплексный подход Demis Group к повышению конверсии Вашего сайта
            позволит эффективно решать поставленные перед бизнесом задачи.
            Современный привлекательный дизайн веб- ресурса положительно влияет
            на поведенческие факторы, способствует росту позиций сайта в
            поисковых системах и увеличению продаж.
          </p>
          <p className="turnkey-text">
            Мы возьмем на себя все работы по редизайну: от прорисовки
            дизайн-макетов страниц до полного внесения всех изменений на сайт,
            тестирования результатов и последующей поддержки.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={TurnkeyImg} alt="TurnkeyImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={TurnkeyImg} alt="TurnkeyImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={TurnkeyImg} alt="TurnkeyImg" />
          </SwiperSlide>
        </Swiper>
        <div className="turnkey-infos">
          <p className="turnkey-image-text">1. Делаем сайты удобнее</p>
          <p className="turnkeys-image-text">
            Модернизируем сайт компании с учетом современных трендов
            проектирования интерфейсов и usability и увеличиваем Ваши продажи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Turnkey;
