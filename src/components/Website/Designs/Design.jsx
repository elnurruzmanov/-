import React from "react";
import "./Design.css";

import { Link } from "react-router-dom";

const Design = () => {
  return (
    <div className="design">
      <div className="container">
        <h1 className="design-title">
          Получите бесплатно до 5 вариантов дизайна нового сайта на основе
          готового решения на 1С-Битрикс!
        </h1>
        <Link to={"/"} className="design-link">Хочу посмотреть варианты</Link>
      </div>
    </div>
  );
};

export default Design;
