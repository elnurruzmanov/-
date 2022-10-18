import React from "react";
import "./Abouts.css";

import Navbar from "../Navbar/Navbar";
import Navbars from "../Navbars/Navbars";

import Footer from "../Footer/Footer";

import AboutsImg from "../../images/abouts.png";

const Abouts = () => {
  return (
    <div className="abouts">
      <Navbars />
      <Navbar />
      <div className="container abouts-container">
        <h3 className="abouts-title">
          C «Дом сайтов» Вашей задачей займутся компетентные, грамотные
          специалисты в области создания и продвижения сайтов.
        </h3>
        <img src={AboutsImg} alt="AboutsImg" className="abouts-image" />
        <h3 className="abouts-bottom-title">О компании</h3>
        <ul className="abouts-list">
          <li className="abouts-item">
            <p className="abouts-item-text">
              «Дом сайтов» — это компания, которая занимается созданием сайтов и
              продвижением с 2008 года.
            </p>
          </li>
          <li className="abouts-item">
            <p className="abouts-item-text">
              Наша команда - более 55 высоко-квалифицированных сотрудников,
              среди которых - веб-дизайнеры, программисты, HTML верстальщики,
              веб-мастера, копирайтеры, SEO оптимизаторы, интернет-маркетологи.
              Мы готовы взяться за решение любых задач!
            </p>
          </li>
          <li className="abouts-item">
            <p className="abouts-item-text">
              Заказать создание сайта в «Дом сайтов» может стать гораздо более
              простым, практичным и выгодным решением, чем все попытки сделать
              сайт бесплатно.
            </p>
          </li>
          <li className="abouts-item">
            <p className="abouts-item-text">
              Наши клиенты – это крупные государственные компании и предприятия,
              компании малого, среднего бизнеса и физические лица, которым
              интересна их позиция на рынке и положение среди конкурентов.
            </p>
          </li>
          <li className="abouts-item">
            <p className="abouts-item-text">
              Наши кадры – это грамотные профессионалы, которые имеют большой
              опыт работы с разными видами заказов.
            </p>
          </li>
          <li className="abouts-item">
            <p className="abouts-item-text">
            Наша работа – это сочетание творческих процессов с пониманием основной структуры работы компании.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Abouts;
