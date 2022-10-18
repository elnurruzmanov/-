import React from "react";
import "./Cost.css";

import { Link } from "react-router-dom";

const Cost = () => {
  return (
    <div className="cost">
      <div className="container">
        <h2 className="cost-title">Стоимость создания сайта</h2>
        <p className="cost-text">
          Ориентировочная стоимость указана из расчёта разработки сайта на
          основе готового решения на 1С-Битрикс. При создание сайта по
          индивидуальным пожеланиям, своему техническому заданию отправьте
          заявку нашему менеджеру, и мы рассчитаем итоговую стоимость работ.
        </p>
        <ul className="cost-list">
          <li className="cost-items">
            <h4 className="cost-item-title">«Сайт-визитка»</h4>
            <hr className="cost-hr" />
            <p className="cost-item-text">
              Подходит всем. Классическое полноценное продвижение сайта в
              Яндексе и Google
            </p>
            <p className="cost-texts">На основе готового решения:</p>
            <div className="cost-items-links">
              <Link to={"/"} className="cost-item-link">
                <span className="cost-ot">от</span> от 95 171 руб.
                <span className="cost-item-span">58 750 руб.</span>
              </Link>
              <p className="cost-texts">На основе готового решения:</p>
              <p className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.
              </p>
            </div>
            <Link to={"/"} className="cost-links-items">
              Заказать
            </Link>
          </li>
          <li className="cost-items">
            <h4 className="cost-item-title">«корпоративный сайт»</h4>
            <hr className="cost-hr" />
            <p className="cost-item-text">
              Выбор бизнеса, которому нужны стабильные продажи с Яндекса и
              Google в кратчайшие сроки
            </p>
            <p className="cost-texts">На основе готового решения:</p>
            <div className="cost-items-links">
              <Link to={"/"} className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.{" "}
                <span className="cost-item-span">58 750 руб.</span>
              </Link>
              <p className="cost-texts">На основе готового решения:</p>
              <p className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.
              </p>
            </div>
            <Link to={"/"} className="cost-links-items">
              Заказать
            </Link>
          </li>
          <li className="cost-items">
            <h4 className="cost-item-title">«Интернет-магазин»</h4>
            <hr className="cost-hr" />
            <p className="cost-item-text">
              Для тех, кто хочет получить максимум от SEO быстрее других.
              Команда лучших специалистов будет в постоянном режиме увеличивать
              Ваши продажи
            </p>
            <p className="cost-texts">На основе готового решения:</p>
            <div className="cost-items-links">
              <Link to={"/"} className="cost-item-link">
                <span className="cost-ot">от</span> 125 171 руб.{" "}
                <span className="cost-item-span">58 750 руб.</span>
              </Link>
              <p className="cost-texts">На основе готового решения:</p>
              <p className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.
              </p>
            </div>
            <Link to={"/"} className="cost-links-items">
              Заказать
            </Link>
          </li>
          <li className="cost-items">
            <h4 className="cost-item-title">«Одностраничный сайт»</h4>
            <hr className="cost-hr" />
            <p className="cost-item-text">
              Подходит всем. Классическое полноценное продвижение сайта в
              Яндексе и Google
            </p>
            <p className="cost-texts">На основе готового решения:</p>
            <div className="cost-items-links">
              <Link to={"/"} className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.{" "}
                <span className="cost-item-span">58 750 руб.</span>
              </Link>
              <p className="cost-texts">На основе готового решения:</p>
              <p className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.
              </p>
            </div>
            <Link to={"/"} className="cost-links-items">
              Заказать
            </Link>
          </li>
          <li className="cost-items">
            <h4 className="cost-item-title">«Сайт каталог»</h4>
            <hr className="cost-hr" />
            <p className="cost-item-text">
              Подходит всем. Классическое полноценное продвижение сайта в
              Яндексе и Google
            </p>
            <p className="cost-texts">На основе готового решения:</p>
            <div className="cost-items-links">
              <Link to={"/"} className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.{" "}
                <span className="cost-item-span">58 750 руб.</span>
              </Link>
              <p className="cost-texts">На основе готового решения:</p>
              <p className="cost-item-link">
                <span className="cost-ot">от</span> 45 171 руб.
              </p>
            </div>
            <Link to={"/"} className="cost-links-items">
              Заказать
            </Link>
          </li>
          <li className="cost-items new-cost-items">
            <h4 className="costs-titles">Не нашли нужного типа сайта?</h4>
            <p className="cost-item-text">
              Подходит всем. Классическое полноценное продвижение сайта в
              Яндексе и Google
            </p>

            <Link to={"/"} className="cost-links-items">
              Заказать
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cost;
