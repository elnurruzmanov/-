import React from "react";
import "./Home.css"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-info">
        <h1 className="home-title">Комплексный интернет-маркетинг</h1>
        <p className="home-text">
          Мы помогаем бизнесу находить клиентов быстрее, интегрируя
          маркетинговые, обучающие и технологические продукты
        </p>
        <div className="home-link">
          <Link to="/" className="home-links">Заказать увеличение продаж</Link>
          <Link to="/" className="home-links home-link2">Заказать экспертный аудит</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
