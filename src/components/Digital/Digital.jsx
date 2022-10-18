import React from "react";
import "./Digital.css";

import { Link } from "react-router-dom";

//icons
import Char from "../../icons/char.svg";
import Setting from "../../icons/settings.svg";
import Clients from "../../icons/clients.svg";
import Mail from "../../icons/mail.svg";
import Like from "../../icons/Like.svg";
import Finance from "../../icons/finance.svg";

const Digital = () => {
  return (
    <div className="digital">
      <div className="container">
        <h1 className="digital-title">
          <span className="digital-span">Антикризисные</span> DIGITAL-пакеты
        </h1>
        <div className="digital-infos">
          <ul className="digital-item-list">
            <li className="digital-items">
              <h4 className="digital-items-title">
                СТАБИЛЬНАЯ ЛИДОГЕНЕРАЦИЯ В КРИЗИС
              </h4>
            </li>
            <li className="digital-items">
              <hr className="digital-hr" />
              <p className="digital-items-text">
                SEO-продвижение + Контекстная реклама
              </p>
              <hr className="digital-hr-bottom" />
            </li>
            <li className="digital-items">
              <p className="digital-items-text digital-text">
                Ищете сплит каналов для стабильного лидгена? Нет ничего надежнее
                классики!
              </p>
            </li>
            <li className="digital-items">
              <p className="digital-items-text">
                Специальная скидка до 40% на каждую услугу в пакете
              </p>
            </li>
            <li className="digital-items">
              <Link to="/" className="digital-items_link">
                Приобрести пакет
              </Link>
            </li>
          </ul>
          <ul className="digital-item-list digital-items_list">
            <li className="digital-items">
              <h4 className="digital-items-title">
                УСИЛЕНИЕ ЛИДОГЕНЕРАЦИИ В КРИЗИС
              </h4>
            </li>
            <li className="digital-items">
              <hr className="digital-hr" />
              <p className="digital-items-text">
                SEO-продвижение + Управление репутацией
              </p>
              <hr className="digital-hr-bottom" />
            </li>
            <li className="digital-items">
              <p className="digital-items-text digital-text">
                Добавьте к классическому работу с профильными площадками и
                отзовиками.
              </p>
            </li>
            <li className="digital-items">
              <p className="digital-items-text">
                Специальная скидка до 40% на каждую услугу в пакете
              </p>
            </li>
            <li className="digital-items">
              <Link to="/" className="digital-items_link">
                Приобрести пакет
              </Link>
            </li>
          </ul>
          <ul className="digital-item-list digital_list-item">
            <li className="digital-items">
              <h4 className="digital-items-title">АНТИБЛОКИРОВКА В СОЦСЕТЯХ</h4>
            </li>
            <li className="digital-items">
              <hr className="digital-hr" />
              <p className="digital-items-text">
                SEO-продвижение + Таргет + Маркетплейсы
              </p>
              <hr className="digital-hr-bottom" />
            </li>
            <li className="digital-items">
              <p className="digital-items-text digital-text">
                Основные каналы лидгена попали под блокировку? У нас уже есть
                работающее решение.
              </p>
            </li>
            <li className="digital-items">
              <p className="digital-items-text">
                Специальная скидка до 20% на каждую услугу в пакете
              </p>
            </li>
            <li className="digital-items">
              <Link to="/" className="digital-items_link">
                Приобрести пакет
              </Link>
            </li>
          </ul>
        </div>
        <div className="digital-working">
          <h3 className="digital-working-title">Преимущества работы с нами</h3>
          <ul className="digital-working_list">
            <li className="digital-working_item">
              <img src={Char} alt="char" className="char" />
              <p className="digital-working_text">
                Увеличиваем продажи, звонки и заявки с Вашего сайта
              </p>
            </li>
            <li className="digital-working_item">
              <img src={Setting} alt="setting" className="setting" />
              <p className="digital-working_text">
              Используем современные технологии и  разработки
              </p>
            </li>
            <li className="digital-working_item">
              <img src={Clients} alt="clients" className="clients" />
              <p className="digital-working_text">
              Всегда оправдываем ожидания наших Клиентов
              </p>
            </li>
            <li className="digital-working_item">
              <img src={Mail} alt="mail" className="mail" />
              <p className="digital-working_text">
              Более 100 благодарственных писем от Клиентов
              </p>
            </li>
            <li className="digital-working_item">
              <img src={Like} alt="like" className="like" />
              <p className="digital-working_text">
              Безупречная репутация на digital-рынке
              </p>
            </li>
            <li className="digital-working_item">
              <img src={Finance} alt="finance" className="finance" />
              <p className="digital-working_text">
              Помогаем достигать имиджевых и финансовых целей              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Digital;
