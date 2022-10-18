import React from "react";
import "./Navbars.css";

import { Link } from "react-router-dom";

//icons
import Logo from "../../icons/logo.png";
import Phone from "../../icons/phone.png";

const Navbars = () => {
  return (
    <div className="navbars">
      <div className="container">
        <div className="home-navbars-title">
          <img src={Logo} alt="logo" className="logo" />
          <div className="homes-navbar-title">
            <h2 className="home-navbars-titles">ДОМ САЙТОВ </h2>
            <Link to={"/"} className="home-navbars-text">УВЕЛИЧЕНИЕ ПРОДАЖ </Link>
          </div>
        </div>
        <p className="navbars-text">Увеличиваем продажи в Вашем бизнесе!</p>
        <div className="navbars-contact">
          <p className="navbars-contact-number">+7 (4872) 79-29-10</p>
          <Link to="/" className="navbars-link">
            <img src={Phone} alt="phone" className="phone" />
            <p className="navbars-phone-text">Заказать звонок</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
