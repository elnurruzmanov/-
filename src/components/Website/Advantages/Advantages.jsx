import React from "react";
import "./Advantages.css";

import { Link } from "react-router-dom";

import AdvantagesAwards from "../../../images/AdvantagesAwards.png";
import advantagesGoogle from "../../../images/advantagesGoogle.png";
import advantagesSeo from "../../../images/advantagesSeo.png";
import advantagesTop from "../../../images/advantagesTop.png";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="advantages_title">В чем наши преимущества</h2>
        <div className="advantages-infos">
          <p className="advantages-texts">
            ВКонтекстная реклама Яндекс Директ и Google Ads – самый емкий и
            поэтому важный сегмент performance-маркетинга. Однако из-за огромной
            конкуренции рекламодателей – сильно перегретый по ставкам.
          </p>
          <p className="advantages-texts">
            Необходимо работать лучше конкурентов, чтобы продвижение приносило
            прибыль, и заказать контекстную рекламу у надежных подрядчиков,
            любящих и умеющих делать её эффективно.
          </p>
        </div>
        <ul className="advantages-list">
          <li className="advantages-item">
            <img
              src={AdvantagesAwards}
              alt="AdvantagesAwards"
              className="advantages-img"
            />
            <p className="advantages-item-text">AllSEO и Runet Awards</p>
            <Link to={"/"} className="advantages-link">
              Лучшее SEO-агентство, 2021
            </Link>
          </li>
          <li className="advantages-item">
            <img
              src={advantagesGoogle}
              alt="advantagesGoogle"
              className="advantages-img"
            />
            <p className="advantages-item-text">AllSEO и Runet Awards</p>
            <Link to={"/"} className="advantages-link">
              Лучшее SEO-агентство, 2021
            </Link>
          </li>
          <li className="advantages-item">
            <img
              src={advantagesSeo}
              alt="advantagesSeo"
              className="advantages-img"
            />
            <p className="advantages-item-text">AllSEO и Runet Awards</p>
            <Link to={"/"} className="advantages-link">
              Лучшее SEO-агентство, 2021
            </Link>
          </li>
          <li className="advantages-item">
            <img
              src={advantagesTop}
              alt="advantagesTop"
              className="advantages-img"
            />
            <p className="advantages-item-text">AllSEO и Runet Awards</p>
            <Link to={"/"} className="advantages-link">
              Лучшее SEO-агентство, 2021
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
