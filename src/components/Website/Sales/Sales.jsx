import React from "react";
import "./Sales.css"

import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div className="sales">
      <div className="container">
        <h2 className="sales-title">Хотите увеличить продажи?</h2>
        <p className="sales-text">
          Мы точно знаем, как благодаря созданию нового современного сайта,
          можно повысить конверсию Вашего сайта! Оставьте заявку и получите
          индивидуальное предложение с привлекательной ценой.
        </p>
        <Link to={"/"} className="sales-link">Получить коммерческое предложение</Link>
      </div>
    </div>
  );
};

export default Sales;
