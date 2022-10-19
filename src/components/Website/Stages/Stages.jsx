import * as React from "react";
import "./Stages.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

        <div className="react-accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">01 </span>{" "}
                Исследование и анализ
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">02 </span>{" "}
                Составление ТЗ
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">03 </span>{" "}
                Проектирование и прототипирование
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">04 </span>
                Разработка, дизайн и верстка
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">05 </span>
                Программирование и интеграция
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">06 </span>
                Финальное тестирование и запуск
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-typography">
                <span className="accordion-typography-span">07 </span>
                Техническая поддержка и развитие{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Создание сайта начинается с комплексного анализа Вашего бизнеса.
                Выявляем ожидания целевой аудитории, конкурентные преимущества,
                возможности внедрения новых инструментов. Уже на первом этапе
                точно определим, как вывести эффективность сайта на новый
                уровень и увеличить количество заказов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </div>
      </div>
    </div>
  );
};
// const data = [
//   {
//     question: "How quickly can I register?",
//     answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
//   },
//   {
//     question: "Why can not I give my orders at affordable prices?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
//   {
//     question: "How can I cancel my order?",
//     answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
//   },
//   {
//     question: "Who can give a complete and qualitative answer to my questions?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
//   {
//     question: "How can I see all my orders?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
// ]

export default Stages;
