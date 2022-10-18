import React from "react";
import "./Sales.css";

import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div className="sales">
      <div className="container">
        <h1 className="sales-title">Хотите увеличить продажи?</h1>
        <p className="sales-text">
          Мы точно знаем, как привести на Ваш сайт клиентов! Оставьте заявку и
          получите индивидуальное предложение с привлекательной ценой.
        </p>
        <Link to="/" className="sales-link">Получить коммерческое предложение</Link>
      </div>
    </div>
  );
};

export default Sales;
