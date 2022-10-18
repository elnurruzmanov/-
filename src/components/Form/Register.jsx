import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <h2 className="register-info">Найдем клиентов в Интернете для Вас</h2>
        <p className="register-text">
          Для заказа стратегии продвижения в Москве или другом городе просто
          заполни заявку или закажи обратный звонок. Менеджер по работе с
          клиентами выйдет на связь и подготовит персональное коммерческое
          предложение, составленное с учетом желаемых целей и возможностей.
        </p>
        <div className="form-info">
          <form className="form">
            <input type="text" placeholder="Имя" className="input" required />
            <input
              type="email"
              placeholder="E-mail"
              className="input"
              required
            />
            <label className="checkbox-info">
              <input type="checkbox" className="input-checkbox" required />
              <p className="checkbox-text">
                Я даю свое согласие на обработку персональных данных
              </p>
            </label>
            <Link to={"/"} className="register-link" >Отправить заявку</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
