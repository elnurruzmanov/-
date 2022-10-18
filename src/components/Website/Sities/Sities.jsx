import React from "react";
import "./Sities.css";

import Step from "../../../images/Step.svg"

const Sities = () => {
  return (
    <div className="sities">
      <div className="container">
        <h3 className="sities-title">
          Заказать создание сайта в{" "}
          <span className="sities-span"> «Дом сайтов» </span>- это
          просто!
        </h3>
        <img src={Step} alt="Step" className="step" />
      </div>
    </div>
  );
};

export default Sities;
