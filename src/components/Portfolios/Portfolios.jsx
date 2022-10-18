import React from "react";
import "./Portfolios.css";

import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import Navbars from "../Navbars/Navbars";

//images
import portfoliosEver from "../../images/portfoliosEver.png";
import portfoliosProfil from "../../images/portfoliosProfil.png";
import portfoliosKrov from "../../images/portfoliosKrov.png";
import portfoliosFinal from "../../images/portfoliosFinal.png";

import { Link } from "react-router-dom";

const Portfolios = () => {
  return (
    <div className="portfolios">
      <Navbars />
      <Navbar />
      <div className="container portfolios-container">
        <h2 className="portfolios-title">Портфолио</h2>
        <ul className="portfolios-list">
          <li className="portfolios-item">
            <img
              src={portfoliosEver}
              alt="portfoliosEver"
              className="portfolios-ever"
            />
            <p className="portfolios-text">
              Производство и строительство домов
            </p>
            <Link to={"/"} className="portfolios-link">
              Корпоративные сайты
            </Link>
          </li>
          <li className="portfolios-item">
            <img
              src={portfoliosProfil}
              alt="portfoliosEver"
              className="portfolios-ever"
            />
            <p className="portfolios-text">
              Производство и установка заграждений
            </p>
            <Link to={"/"} className="portfolios-link">
              Сайт с каталогом товаров
            </Link>
          </li>
          <li className="portfolios-item">
            <img
              src={portfoliosKrov}
              alt="portfoliosEver"
              className="portfolios-ever"
            />
            <p className="portfolios-text">
            Промышленный альпинизм
            </p>
            <Link to={"/"} className="portfolios-link">
            Корпоративные сайты
            </Link>
          </li>
          <li className="portfolios-item">
            <img
              src={portfoliosFinal}
              alt="portfoliosEver"
              className="portfolios-ever"
            />
            <p className="portfolios-text">
            Интернет-магазин для хобби
            </p>
            <Link to={"/"} className="portfolios-link">
            
Интернет-магазины
            </Link>
          </li>
          <li className="portfolios-item">
            <img
              src={portfoliosEver}
              alt="portfoliosEver"
              className="portfolios-ever"
            />
            <p className="portfolios-text">
              Производство и строительство домов
            </p>
            <Link to={"/"} className="portfolios-link">
              Корпоративные сайты
            </Link>
          </li>
          <li className="portfolios-item">
            <img
              src={portfoliosKrov}
              alt="portfoliosEver"
              className="portfolios-ever"
            />
            <p className="portfolios-text">
              Производство и строительство домов
            </p>
            <Link to={"/"} className="portfolios-link">
              Корпоративные сайты
            </Link>
          </li>
        </ul>
        <Link to={"/"} className="portfolios_link">Смотреть еще</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolios;
