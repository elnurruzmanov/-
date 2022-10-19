import React from "react";
import "./Promotion.css";

import Register from "../../Form/Register";
import Footer from "../../Footer/Footer";

import SolutiosnSocial from "../../../images/solution-socials.png";
import solutionsVector from "../../../icons/solutions-vector.png";
import SolutiosnLikes from "../../../images/solutionLikes.png";
import SolutiosnSocials from "../../../images/solutions-social.png";

const Promotion = () => {
  return (
    <div className="rafce">
      <div className="container">
        <h2 className="promotion-title">
          Получите еще больше продаж, добавив к продвижнию сайта
        </h2>
        <ul className="promotion-list">
          <li className="promotion-item">
            <img
              src={SolutiosnSocial}
              alt="SolutiosnSocial"
              className="solutiosn-social"
            />
            <div className="promotion-padding">
              <p className="promotion-item-title">Контекстная реклама</p>
              <p className="promotion-item-text">
                {" "}
                <span className="promotion-items-span">от</span> 70 000 руб.{" "}
                <span className="promotons-item-span">81 360 руб.</span>{" "}
              </p>
              <a href="/" className="promotion-item-link">
                Подробнее <img src={solutionsVector} alt="solutionsVector" />
              </a>
            </div>
          </li>
          <li className="promotion-item">
            <img
              src={SolutiosnLikes}
              alt="SolutiosnSocial"
              className="solutiosn-social"
            />
            <div className="promotion-padding">
              <p className="promotion-item-title">Контекстная реклама</p>
              <p className="promotion-item-text">
                {" "}
                <span className="promotion-items-span">от</span> 70 000 руб.{" "}
                <span className="promotons-item-span">81 360 руб.</span>{" "}
              </p>
              <a href="/" className="promotion-item-link">
                Подробнее <img src={solutionsVector} alt="solutionsVector" />
              </a>
            </div>
          </li>
          <li className="promotion-item">
            <img
              src={SolutiosnSocials}
              alt="SolutiosnSocial"
              className="solutiosn-social"
            />
            <div className="promotion-padding">
              <p className="promotion-item-title">Контекстная реклама</p>
              <p className="promotion-item-text">
                {" "}
                <span className="promotion-items-span">от</span> 70 000 руб.{" "}
                <span className="promotons-item-span">81 360 руб.</span>{" "}
              </p>
              <a href="/" className="promotion-item-link">
                Подробнее <img src={solutionsVector} alt="solutionsVector" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Register />
      <Footer />
    </div>
  );
};

export default Promotion;
