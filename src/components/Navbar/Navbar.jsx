import React from "react";
import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";

import Search from "../../icons/search.png";

import navbarVector from "../../icons/navbarVector.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <hr className="hr1" />
      <div className="container">
        <NavLink className="nav-links navbar-links-dropdown">
          УВЕЛИЧЕНИЕ ПРОДАЖ
          <img
            src={navbarVector}
            alt="navbarVector"
            className="navbar-vector"
          />
          <div className="navbar-dropdown">
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to={"/"} className="dropdown-link">
                  Пункт 1
                </Link>
              </li>
              <hr className="dropdown-hr" />
              <li className="dropdown-item">
                <Link to={"/"} className="dropdown-link">
                  SEO продвижение сайтов в Яндекс
                </Link>
              </li>
              <hr className="dropdown-hr" />
              <li className="dropdown-item">
                <Link to={"/"} className="dropdown-link">
                  Проведение бизнеса в социальных сетях
                </Link>
              </li>
              <hr className="dropdown-hr" />
              <li className="dropdown-item">
                <Link to={"/"} className="dropdown-link">
                  Пункт 4
                </Link>
              </li>
            </ul>
          </div>
        </NavLink>
        <NavLink to={"/websites"} className="nav-links">Создание сайтов</NavLink>
        <NavLink className="nav-links">Поддержка</NavLink>
        <NavLink className="nav-links">Битрикс 24</NavLink>
        <NavLink to={"/abouts"} className="nav-links">
          О компании{" "}
        </NavLink>
        <NavLink className="nav-links">Отзывы</NavLink>
        <NavLink to={"/portfolios"} className="nav-links">
          кейсы{" "}
        </NavLink>
        <NavLink to={"/contact"} className="nav-links">
          контакты
        </NavLink>
        <NavLink className="nav-links">
          <img src={Search} alt="search" />
        </NavLink>
      </div>
      <div className="hr2"></div>
    </div>
  );
};

export default Navbar;
