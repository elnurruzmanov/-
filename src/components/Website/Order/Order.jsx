import React from "react";
import "./Order.css";

import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="order">
      <div className="container">
        <div className="order-info">
          <p className="order-texts">
            Комплексные решение для увеличения эффективности маркетинга и роста
            продаж!
          </p>
          <h1 className="order-title">Создание сайтов</h1>
          <p className="order-text">
            Увеличим Ваши продажи, количество звонков и заявок с сайта за счет
            привлечения только целевого трафика. Ежедневно мы ведем рекламные
            кампании для 257 клиентов в 80 отраслях. Работаем с Яндекс.Директом
            и со всеми системами таргетированной, медийной, нативной и
            programmatic-рекламы.
          </p>
          <div className="order-link">
            <Link to="/" className="order-links">
            Получить коммерческое предложение
            </Link>
            <Link to="/" className="order-links order-link2">
              Заказать экспертный аудит
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
