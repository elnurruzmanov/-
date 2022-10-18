import React from "react";
import "./Contact.css";

import Navbar from "../Navbar/Navbar";
import Navbars from "../Navbars/Navbars";

import Footer from "../Footer/Footer";

import contactVk from "../../icons/contactVk.svg"
import contactTelegram from "../../icons/contactTelegram.svg"

const Contact = () => {
  return (
    <div className="contact">
      <Navbars />
      <Navbar />
      <div className="container">
        <div className="contact-info">
          <h2 className="contact-title">Контакты</h2>
          <p className="contact-text">
            Обязательно приходите к нам на чашку ароматного кофе. Совместно
            обсудим ваш проект и предложим рекомендации!
          </p>
          <ul className="contact-list">
            <li className="contact-item">
              <h3 className="contact-item_title">Адрес</h3>
              <p className="contact_item-text">
                г. Тула, пр-т Ленина, д. 102б, оф. 301
              </p>
            </li>
            <li className="contact-item">
              <h3 className="contact-item_title">Свяжитесь с нами</h3>
              <p className="contact_item-text">
                +7 (4872) 44-04-79 tula@domsaitov.ru
              </p>
            </li>
            <li className="contact-item">
              <h3 className="contact-item_title">Режим работы</h3>
              <p className="contact_item-text">
                Пн. - Пт.: 10.00 - 18.00 Сб. - Вс.: выходной
              </p>
            </li>
            <li className="contact-item">
              <img src={contactVk} alt="contactVk" className="contact-vk" />
              <img src={contactTelegram} alt="contactTelegram" className="contact-telegram" />
            </li>
          </ul>
        </div>
        <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.2872875893413!2d30.379205115849725!3d59.99372966461559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469633bc77955555%3A0x1a97b5e76da9889d!2z0JPRgNCw0LbQtGHQvdGB0LrQuNC5INC_0YAt0YIuLCAxMTEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5NTI2NQ!5e0!3m2!1sru!2sby!4v1666004957606!5m2!1sru!2sby" width="100%" height="100%" className="iframe" ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
