import React from 'react'
import "./About.css";

import AboutImage from "../../images/aboutImage.png"

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="about-info">
          <h2 className='about-title'>О компании</h2>
          <p className="about-text">Наша веб-студия создаёт сайты с высокой конверсией, которые легко вывести в ТОП поисковых систем. Наша команда полностью ведем Ваш проект от и до, а также помогаем сотрудникам на стороне клиента. Вы можете обратиться в веб-студию Дом сайтов для запуска своего онлайн бизнеса в Интернете. Если у вас уже есть сайт — мы его оптимизируем, превратим в полноценный и эффективный инструмент бизнеса.</p>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="aboutImage" className="about-image" />
        </div>
      </div>
    </div>
  )
}

export default About