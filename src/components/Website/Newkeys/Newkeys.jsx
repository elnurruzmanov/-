import React from 'react';
import "./Newkeys.css"

import PortfoliosImg from "../../../images/portfoliosImg.png";

import { Link } from 'react-router-dom';

const Newkeys = () => {
  return (
    <div className='newkeys'>
      <div className="container">
      <h3 className="portfolio-title">Наши кейсы и портфолио</h3>
        <div className="portfolio-info">
          <div className="portfolio-infos">
            <div className="portfolio-infos-title">
              <h4 className="portfolio-info-title">
                Результаты продвижения «Оценочной компании №1»
              </h4>
              <p className="portfolio-info-text">
                «Оценочная компания №1» – это оценочная компания, в спектр
                предоставляемых услуг которой входит полный набор услуг по
                оценке движимого и недвижимого имущества.
              </p>
            </div>
            <img
              src={PortfoliosImg}
              alt="PortfoliosImg"
              className="portfolios-img"
            />
          </div>
          <div className="portfolio-purposes">
            <div className="portfolio-purpose">
              <p className="portfolio-purpose-text">Цели:</p>
              <div className="portfolio-purpose-texts">
                Увеличение количества обращений с помощью комплексных решений
                интернет-маркетинга. Для выполнения поставленных задач была
                выбрана стратегия продвижения сайта по позициям.
                <ul className="portfolio-list">
                  <li className="portfolio-item">
                  <span className="portfolio-item-span"></span>  Увеличение количества визитов из поисковых систем
                  </li>
                  <li className="portfolio-item">
                  <span className="portfolio-item-span"></span>  Улучшение видимости ресурса поисковыми системами
                  </li>
                  <li className="portfolio-item">
                  <span className="portfolio-item-span"></span> Увеличение количества обращений через сайт
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-borders"></div>
            <div className="portfolio-results">
              <div className="portfolio-results-percent">
                <h1 className="portfolio-percent-title">85%</h1>
                <p className="portfolio-percent-text">
                  запросов обширного семантического ядра выведено в ТОП-10
                  поисковой системы Яндекс
                </p>
              </div>
              <div className="portfolio-traffic">
                <p className="traffic-text">
                  в<h1 className="portfolio-traffic-span"> 12</h1>раз{" "}
                </p>
                <p className="portfolio-traffic-text">
                  увеличился трафик на сайт
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="portfolio-footer" />
        <div className="newkeys-links">
          <Link to={"/"} className="newkeys-link">Хочу такие результаты</Link>
          <Link to={"/"} className="newkeys-link newkey-links">Cмотреть все кейсы</Link>
        </div>
      </div>
    </div>
  )
}

export default Newkeys