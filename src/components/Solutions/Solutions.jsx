import React from "react";
import "./Solutions.css";

import { Link } from "react-router-dom";

//images
import SolutionsSocial from "../../images/solutions-social.png";
import SolutionSocials from "../../images/solution-socials.png";
import Socials from "../../images/socials.png";
import SolutionLikes from "../../images/solutionLikes.png";
import Magnits from "../../images/Magnits.png";
import SolutionSettings from "../../images/solution-settings.png";
import SolutionsPrice from "../../icons/price.svg";
import SolutionsPercent from "../../icons/solutions-percent.svg";
import SolutionsVector from "../../icons/solutions-vector.png";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="container">
        <h3 className="solutions-title">
          Лучшие решения для увеличения продаж
        </h3>
        <ul className="solutions_product-list">
          <li className="solutions_product-item">
            <img
              src={SolutionsSocial}
              alt="SolutionsSocial"
              className="solutions-social"
            />
            <div className="info-solutions">
              <div className="solutions-infos">
                <h4 className="solutions-product_title">
                  Продвижение в Яндекс и Google (SEO)
                </h4>
                <p className="solutions-product_text">
                  Увеличим Ваши продажи, количество звонков и заявок за счет
                  оптимизации сайта. Поднимем в ТОП и увеличим трафик.
                </p>
              </div>
              <hr className="solutions-hr" />
              <div className="solutions-price">
                <img
                  src={SolutionsPrice}
                  alt="SolutionsPrice"
                  className="solutions-price"
                />
                <p className="solutions-price-text">
                  от <span className="solutions-span"> 23 360 руб.</span>
                </p>
              </div>
              <div className="solutions-percent">
                <img
                  src={SolutionsPercent}
                  alt="SolutionsPercent"
                  className="solutions-percents"
                />
                <div className="solutions-percent-infos">
                  <p className="solutions-percent-text_number">58 750 руб.</p>
                  <p className="solutions-percent-text">
                    Суперцена только в мае!
                  </p>
                </div>
              </div>
              <Link to="/" className="solutions_link">
                <p className="solutions-link-text">Подробнее</p>
                <img
                  src={SolutionsVector}
                  alt="SolutionsVector"
                  className="solutions-vector"
                />
              </Link>
            </div>
          </li>
          <li className="solutions_product-item">
            <img
              src={SolutionSocials}
              alt="SolutionsSocial"
              className="solutions-social"
            />
            <div className="info-solutions">
              <div className="solutions-infos">
                <h4 className="solutions-product_title">
                  ПРОДВИЖЕНИЕ В ЯНДЕКС И GOOGLE (SEO)
                </h4>
                <p className="solutions-product_text">
                  Увеличим Ваши продажи, количество звонков и заявок за счет
                  оптимизации сайта. Поднимем в ТОП и увеличим трафик.
                </p>
              </div>
              <hr className="solutions-hr" />
              <div className="solutions-price">
                <img
                  src={SolutionsPrice}
                  alt="SolutionsPrice"
                  className="solutions-price"
                />
                <p className="solutions-price-text">
                  от <span className="solutions-span">23 360 руб.</span>
                </p>
              </div>
              <div className="solutions-percent">
                <img
                  src={SolutionsPercent}
                  alt="SolutionsPercent"
                  className="solutions-percents"
                />
                <div className="solutions-percent-infos">
                  <p className="solutions-percent-text_number">58 750 руб.</p>
                  <p className="solutions-percent-text">
                    Суперцена только в мае!
                  </p>
                </div>
              </div>
              <Link to="/" className="solutions_link links_solutions ">
                <p className="solutions-link-text  ">Подробнее</p>
                <img
                  src={SolutionsVector}
                  alt="SolutionsVector"
                  className="solutions-vector"
                />
              </Link>
            </div>
          </li>
          <li className="solutions_product-item">
            <img
              src={Socials}
              alt="SolutionsSocial"
              className="solutions-social"
            />
            <div className="info-solutions">
              <div className="solutions-infos">
                <h4 className="solutions-product_title">
                  Продвижение в социальных сетях
                </h4>
                <p className="solutions-product_text">
                  Увеличим Ваши продажи, количество звонков и заявок за счет
                  оптимизации сайта. Поднимем в ТОП и увеличим трафик.
                </p>
              </div>
              <hr className="solutions-hr" />
              <div className="solutions-price">
                <img
                  src={SolutionsPrice}
                  alt="SolutionsPrice"
                  className="solutions-price"
                />
                <p className="solutions-price-text">
                  от <span className="solutions-span"> 23 360 руб.</span>
                </p>
              </div>
              <div className="solutions-percent">
                <img
                  src={SolutionsPercent}
                  alt="SolutionsPercent"
                  className="solutions-percents"
                />
                <div className="solutions-percent-infos">
                  <p className="solutions-percent-text_number">168 000 руб.</p>
                  <p className="solutions-percent-text">
                    Суперцена только в мае!
                  </p>
                </div>
              </div>
              <Link to="/" className="solutions_link">
                <p className="solutions-link-text">Подробнее</p>
                <img
                  src={SolutionsVector}
                  alt="SolutionsVector"
                  className="solutions-vector"
                />
              </Link>
            </div>
          </li>
          <li className="solutions_product-item">
            <img
              src={SolutionLikes}
              alt="SolutionsSocial"
              className="solutions-social"
            />
            <div className="info-solutions">
              <div className="solutions-infos">
                <h4 className="solutions-product_title">
                  SERM — управление репутацией в интернете
                </h4>
                <p className="solutions-product_text">
                  Удалим негатив, разместим положительные отзывы, увеличим
                  продажи и повысим доверие клиентов.
                </p>
              </div>
              <hr className="solutions-hr" />
              <div className="solutions-price">
                <img
                  src={SolutionsPrice}
                  alt="SolutionsPrice"
                  className="solutions-price"
                />
                <p className="solutions-price-text">
                  от <span className="solutions-span"> 34 900 руб.</span>
                </p>
              </div>
              <div className="solutions-percent">
                <img
                  src={SolutionsPercent}
                  alt="SolutionsPercent"
                  className="solutions-percents"
                />
                <div className="solutions-percent-infos">
                  <p className="solutions-percent-text_number">58 750 руб.</p>
                  <p className="solutions-percent-text">
                    Суперцена только в мае!
                  </p>
                </div>
              </div>
              <Link to="/" className="solutions_link">
                <p className="solutions-link-text">Подробнее</p>
                <img
                  src={SolutionsVector}
                  alt="SolutionsVector"
                  className="solutions-vector"
                />
              </Link>
            </div>
          </li>
          <li className="solutions_product-item">
            <img
              src={Magnits}
              alt="SolutionsSocial"
              className="solutions-social"
            />
            <div className="info-solutions">
              <div className="solutions-infos">
                <h4 className="solutions-product_title">
                  улучшение продающих качеств сайта
                </h4>
                <p className="solutions-product_text">
                  Сделаем Ваш сайт удобным для пользования. Увеличим продажи,
                  количество заявок и звонков.
                </p>
              </div>
              <hr className="solutions-hr" />
              <div className="solutions-price">
                <img
                  src={SolutionsPrice}
                  alt="SolutionsPrice"
                  className="solutions-price"
                />
                <p className="solutions-price-text">
                  от <span className="solutions-span"> 315 000 руб.</span>
                </p>
              </div>
              <div className="solutions-percent">
                <img
                  src={SolutionsPercent}
                  alt="SolutionsPercent"
                  className="solutions-percents"
                />
                <div className="solutions-percent-infos">
                  <p className="solutions-percent-text_number">224 000 руб.</p>
                  <p className="solutions-percent-text">
                    Суперцена только в мае!
                  </p>
                </div>
              </div>
              <Link to="/" className="solutions_link">
                <p className="solutions-link-text">Подробнее</p>
                <img
                  src={SolutionsVector}
                  alt="SolutionsVector"
                  className="solutions-vector"
                />
              </Link>
            </div>
          </li>
          <li className="solutions_product-item">
            <img
              src={SolutionSettings}
              alt="SolutionsSocial"
              className="solutions-social"
            />
            <div className="info-solutions">
              <div className="solutions-infos">
                <h4 className="solutions-product_title">
                  УЛУЧШЕНИЕ ПРОДАЮЩИХ КАЧЕСТВ САЙТА
                </h4>
                <p className="solutions-product_text">
                  Современный привлекательный сайт способствует выводу сайта в
                  ТОП и росту продаж.
                </p>
              </div>
              <hr className="solutions-hr" />
              <div className="solutions-price">
                <img
                  src={SolutionsPrice}
                  alt="SolutionsPrice"
                  className="solutions-price"
                />
                <p className="solutions-price-text">
                  от <span className="solutions-span"> 23 360 руб.</span>
                </p>
              </div>
              <div className="solutions-percent">
                <img
                  src={SolutionsPercent}
                  alt="SolutionsPercent"
                  className="solutions-percents"
                />
                <div className="solutions-percent-infos">
                  <p className="solutions-percent-text_number">409 500 руб.</p>
                  <p className="solutions-percent-text">
                    Суперцена только в мае!
                  </p>
                </div>
              </div>
              <Link to="/" className="solutions_link">
                <p className="solutions-link-text">Подробнее</p>
                <img
                  src={SolutionsVector}
                  alt="SolutionsVector"
                  className="solutions-vector"
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Solutions;
