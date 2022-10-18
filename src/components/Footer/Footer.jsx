import React from "react";
import "./Footer.css";

import logoFooter from "../../images/logoFooter.png";
import Vk from "../../images/vk.svg";
import Telegram from "../../images/telegram.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <img src={logoFooter} alt="" className="logo-footer-img" />
          <div className="footer-region">
            <p className="footer-region-text">Ваш регион:</p>
            <Link to={"/"} className="footer-region-link">
              Тула
            </Link>
          </div>
          <div className="footer-number-info">
            <p className="footer-number">+7 (495) 223-66-59</p>
            <p className="footer-address"> г. Тула, ул. Пушкинская, 27</p>
          </div>
          <div className="footer-post">
            <p className="footer-post-office">ИНН 123456789</p>
            <p className="post-office">ОГРН 123456789010</p>
          </div>
          <div className="footer-social">
            <Link to={"/"}>
              <img src={Vk} className="vk" alt="ck" />
              <img src={Telegram} alt="Telegram" className="telegram" />
            </Link>
          </div>
        </div>
        <div className="footer-links">
          <ul className="footer-list">
            <li className="footer-item">
              <h4 className="footer-item_title">
                УВЕЛИЧЕНИЕ ПРОДАЖ ДЛЯ ВАШЕГО БИЗНЕСА
              </h4>
            </li>
            <li className="footer-item footer-items">
              <Link to={"/"} className="footer-item_link">
                SEO
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Тариф «Трафик»
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Тариф «Объем работ»
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Тариф «Лиды / CPA»
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Тариф «SEO + Контекст»
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Комплексное SEO
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Для интернет-магазина
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Продвижение в Яндекс
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Продвижение в Google
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Разовые работы
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                SEO-аудит сайтов
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Вывод из-под санкций
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul className="footer-list">
            <li className="footer-item">
              <h4 className="footer-item_title">
                РАЗРАБОТКА И ПОДДЕРЖКА САЙТОВ
              </h4>
            </li>
            <li className="footer-item footer-items">
              <Link to={"/"} className="footer-item_link">
                Разработка
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                На 1С-Битрикс
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                На WordPress
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                На Tilda
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Сайт-визитка
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Интернет-магазин
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Проектирование
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Поддержка сайтов
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Внесение дорабток
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul className="footer-list">
            <li className="footer-item">
              <h4 className="footer-item_title">КОМПАНИЯ «ДОМ САЙТОВ»</h4>
            </li>
            <li className="footer-item footer-items">
              <Link to={"/"} className="footer-item_link">
                Клиенты и отзывы
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Контакты
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Работа в Demis Group
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Личный кабинет
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Статьи{" "}
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Публичная оферта
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Партнерская программа
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Гарантии
              </Link>
            </li>
            <li className="footer-item">
              <Link to={"/"} className="footer-item_link">
                Внесение дорабток
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-hr-info">
        <p className="footer-hr-text">© 2008-2022 Компания «ДОМ САЙТОВ»</p>
        <p className="footer-hr-text">
          Карта сайта | Политика конфиденциальности
        </p>
      </div>
    </footer>
  );
};

export default Footer;
