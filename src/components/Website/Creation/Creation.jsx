import React from "react";
import "./Creation.css";

import CreationImg from "../../../images/creation.png";
import Score from "../../../images/score.png";
import Adapt from "../../../images/adapt.png";
import Char from "../../../images/Char.png";
import Wrote from "../../../images/Wrote.png";
import SocialsSocial from "../../../images/SocialsSocial.png";
import SocialSetting from "../../../images/SocialSetting.png";
import Bitrix from "../../../images/Bitrix.png";


const Creation = () => {
  return (
    <div className="creation">
      <div className="container">
        <h2 className="creation-title">Создание веб сайтов. Почему мы?</h2>
        <p className="creation-text">
          В рамках создания сайта вы также получаете:
        </p>
        <ul className="creation-list">
          <li className="creation-item">
            <img src={CreationImg} alt="CreationImg" className="creation-img" />
            <p className="creation-texts">
              Разработка структуры сайта с учетом SEO
            </p>
            <p className="creations-text">
              На старте заложим основы SEO-продвижения. Учтем запросы и
              семантическое ядро
            </p>
          </li>
          <li className="creation-item">
            <img src={Score} alt="Score" className="creation-img" />
            <p className="creation-texts">Делаем быстро</p>
            <p className="creations-text">
              Разработка сайтов в Санкт-Петербурге и по России. Лендинг - от 5
              дней, сайт компании – от 10 дней, интернет-магазин – от 20 дней
            </p>
          </li>
          <li className="creation-item">
            <img src={Adapt} alt="Adapt" className="creation-img" />
            <p className="creation-texts">Адаптируем под все устройства</p>
            <p className="creations-text">
              Ваш сайт будет отлично выглядеть во всех браузерах, на любом
              телефоне, планшете, ноутбуке и даже телевизоре
            </p>
          </li>
          <li className="creation-item">
            <img src={Char} alt="Char" className="creation-img" />
            <p className="creation-texts">
              Настроим веб-аналитику сайта бесплатно
            </p>
            <p className="creations-text">
              Подключим Яндекс.Метрику, Google.Analytics для сбора данных о
              посетителях сайта
            </p>
          </li>
          <li className="creation-item">
            <img src={Wrote} alt="Wrote" className="creation-img" />
            <p className="creation-texts">
              Не ограничиваем количество правок дизайна
            </p>
            <p className="creations-text">
              Сайт - лицо вашей компании. Будем шлифовать и доделывать до идеала
            </p>
          </li>
          <li className="creation-item">
            <img src={SocialsSocial} alt="SocialsSocial" className="creation-img" />
            <p className="creation-texts">Подготовим продающий контент</p>
            <p className="creations-text">
              Создадим картинки и напишем тексты, которые увеличат продажи сайта
            </p>
          </li>
          <li className="creation-item">
            <img src={SocialSetting} alt="SocialSetting" className="creation-img" />
            <p className="creation-texts">Две недели бесплатной поддержки</p>
            <p className="creations-text">
              За это время исправим возникшие технические ошибки и поправим
              дизайн
            </p>
          </li>
          <li className="creation-item">
            <img src={Bitrix} alt="Bitrix" className="creation-img" />
            <p className="creation-texts">1С-Битрикс</p>
            <p className="creations-text">
              Являемся «Золотыми партнёрами» компании 1С-Битрикс и предлагаем
              только лучшие решения по разработке и запуску сайта на 1С-Битрикс.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Creation;
