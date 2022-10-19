import React from "react";
import "./Ready.css";

import { Link } from "@mui/material";


import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ReadyCard from "../../../images/ready-card.png";

import Feedback from "../../Feedback/Feedback";
import Clients from "../../Clients/Clients";

const Ready = () => {
  return (
    <div className="ready">
      <div className="container">
        <h2 className="ready-title">Готовые сайты</h2>
        <p className="ready-text">
          Уже хотите начать получать новых клиентов из Интернета? Мы рекомендуем
          купить готовый сайт, который возможно запустить уже за 3-5 рабочих дня
          и сразу перейти к рекламе. Все сайты наполняются вашими материалами,
          картинками, будут иметь вашу структуру навигации.
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
         
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReadyCard} alt="ReadyCard" />
          </SwiperSlide>
        </Swiper>
        <ul className="ready-list">
          <li className="ready-item">
            <p className="ready-item-text">Название товара 1</p>
            <p className="ready-item-texts">Стоимость: <span className="ready-span">12900руб.</span> </p>
            <ul className="readies-list">
              <li className="readies-item">
                <a href="/" className="readies-link">Заказать</a>
                <a href="/" className="readies-link readies-links">Демо</a>
              </li>
            </ul>
          </li>
          <li className="ready-item">
            <p className="ready-item-text">Название товара 1</p>
            <p className="ready-item-texts">Стоимость: <span className="ready-span">12900руб.</span> </p>
            <ul className="readies-list">
              <li className="readies-item">
                <a href="/" className="readies-link">Заказать</a>
                <a href="/" className="readies-link readies-links">Демо</a>
              </li>
            </ul>
          </li>
            <li className="ready-item">
              <p className="ready-item-text">Название товара 1</p>
              <p className="ready-item-texts">Стоимость: <span className="ready-span">12900руб.</span> </p>
              <ul className="readies-list">
                <li className="readies-item">
                  <a href="/" className="readies-link">Заказать</a>
                  <a href="/" className="readies-link readies-links">Демо</a>
                </li>
              </ul>
            </li>
        </ul>
      </div>
      <Feedback />
      <Clients />
    </div>
  );
};

export default Ready;
