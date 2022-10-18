import React from "react";
import "./Keys.css";

//images
import keysImg from "../../../images/keysImg.png";
import keysLove from "../../../images/keysLove.png";
import keysChart from "../../../images/keysChart.png";
import keysChild from "../../../images/keysChild.png";
import keysClient from "../../../images/keysClient.png";
import keysDollar from "../../../images/keysDollar.png";
import keysAuditory from "../../../images/keysAuditory.png";

const Keys = () => {
  return (
    <div className="keys">
      <div className="container">
        <h1 className="keys-title">
          Ключевые решаемые задачи создания нового сайта
        </h1>
        <ul className="keys-list">
          <li className="keys-item">
            <img src={keysImg} alt="keysImg" className="keysImg" />
            <p className="keys-text">Рост конверсии сайта</p>
          </li>
          <li className="keys-item">
            <img src={keysLove} alt="keysLove" className="keysImg" />
            <p className="keys-text">Повышение лояльности посетителей</p>
          </li>
          <li className="keys-item">
            <img src={keysChart} alt="keysChart" className="keysImg" />
            <p className="keys-text">Рост продаж с сайта</p>
          </li>
          <li className="keys-item">
            <img src={keysChild} alt="keysChild" className="keysImg" />
            <p className="keys-text">
              Положительное влияние на имидж Вашего бренда
            </p>
          </li>
          <li className="keys-item">
            <img src={keysClient} alt="keysClient" className="keysImg" />
            <p className="keys-text">Легкое взаимодействие с клиентами</p>
          </li>
          <li className="keys-item">
            <img src={keysDollar} alt="keysDollar" className="keysImg" />
            <p className="keys-text">Увеличение продаж компании</p>
          </li>
          <li className="keys-item">
            <img src={keysAuditory} alt="keysAuditory" className="keysImg" />
            <p className="keys-text">Увеличение охвата целевой аудитории</p>
          </li>
          <li className="keys-item">
            <img src={keysImg} alt="keysImg" className="keysImg" />
            <p className="keys-text">Повышение посещаемости сайта</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Keys;
