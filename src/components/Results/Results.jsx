import React from "react";
import { Link } from "react-router-dom";
import "./Results.css";

const Results = () => {
  return (
    <div className="result">
      <div className="container">
        <h3 className="result-title">
          Мы всегда достигаем обещанного результата
        </h3>
        <p className="result-text">И вот почему:</p>
        <div className="result-list">
          <Link to="/" className="result-link">
            Высокая эффективность работы
          </Link>

          <Link to="/" className="result-link">
            Надежность
          </Link>

          <Link to="/" className="result-link">
            Опыт и репутация
          </Link>

          <Link to="/" className="result-link">
            Комплексный подход
          </Link>

          <Link to="/" className="result-link">
            100% контроль
          </Link>

          <Link to="/" className="result-link">
            Выгода
          </Link>
        </div>
        <div className="result-text-infos">
          <p className="result-texts">
            Даём юридические финансовые гарантии выполнения своих обязательств.
            Более 60 высококвалифицированных специалистов в штате - мы обладаем
            ресурсами и технологиями для решения любой задачи точно в срок.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
