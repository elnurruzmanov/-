import React from "react";
import "./Departments.css";

import { Link } from "react-router-dom";

import DepartmentImg from "../../images/department-book.png";

const Departments = () => {
  return (
    <div className="department">
      <div className="container">
        <div className="department-image">
          <img
            src={DepartmentImg}
            alt="DepartmentImg"
            className="department-image"
          />
        </div>
        <div className="department-info">
          <h2 className="department-info_title">Вооружение отделов продаж</h2>
          <div className="department-infos">
            <div className="department-infos-text">
              <p className="info_texts">
                99 работающих инструментов, которые помогут увеличить продажи
                вашей компании. Четкие этапы, прозрачная навигация позволяют
                полностью удерживать ситуацию в своих руках.
              </p>
            </div>
            <div className="department-infos-order">
              <p className="infos_order">
                Если Вы закажете и оплатите продвижение своего сайта, то
                получите в подарок книгу с персональным АВТОГРАФОМ!
              </p>
              <Link to="/" className="infos_link">Хочу получить подарок</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
