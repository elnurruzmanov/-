import React from "react";
import "./Stages.css"

import Collapsible from 'react-collapsible';



const Stages = () => {
  return (
    <div className="stages">
      <div className="container">
        <h3 className="stages-title">7 этапов успешного создания сайта</h3>
        <div className="stages-texts-info">
          <p className="stages-texts">
            Сайт для компании — это долгосрочная инвестиция, которая способна
            ежедневно приносить дивиденды в виде новых клиентов и увеличения
            лояльности постоянных. Создание интернет-сайтов, работающих на
            бизнес и приносящих прибыль, — задача для профессионалов.
          </p>
          <p className="stages-texts">
            В Demis Group процесс разработки сайта складывается из 7 этапов, на
            каждом из которых задействованы специалисты разного профиля.
            Проделать такой объем работы фрилансеру просто не под силу:
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Stages;
