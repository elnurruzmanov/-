import * as React from "react";
import "./Work.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//images
import Screen from "../../../images/Screen.png";
import WorksTwo from "../../../images/WorksTwo.png"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="work">
      <div className="container">
        <h1 className="work-title">Как начать с нами работать</h1>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="work-list"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Заявка" {...a11yProps(0)} />
              <Tab label="Коммерческое предложение" {...a11yProps(1)} />
              <Tab label="Начало работ" {...a11yProps(2)} />
              <Tab label="Контроль качества" {...a11yProps(3)} />
              <Tab label="Гарантированный результат" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="work-panel_info">
              <div className="work-panel-texts">
                <p className="work-panel-text">
                  Если Вы точно знаете, какие услуги необходимы для Вашего
                  бизнеса, то:{" "}
                </p>
                <ul className="work-list">
                  {" "}
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Заполните форму заявки
                      на Коммерческое предложение - это займёт менее минуты;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы подберём для Вас
                      выгодное предложение и обсудим детали реализации;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Либо просто позвоните
                      нашему специалисту: +7 (4872) 79-29-10
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы предлогаем
                      комплекстный подход и разрабатываем уникальные стратегии
                      для
                     
                        достижения целей Вашего бизнеса;
                     
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Используем все
                      интструменты digital-маркетинга для того, что добиться
                      максимальных результатов;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Предложим только
                      результативные каналы продвижения Вашего бизнеса.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="work-panel_image"></div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="work-offer_info">
              <div className="work-panel-texts">
                <p className="work-panel-text">
                  Если Вы точно знаете, какие услуги необходимы для Вашего
                  бизнеса, то:{" "}
                </p>
                <ul className="work-list">
                  {" "}
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Заполните форму заявки
                      на Коммерческое предложение - это займёт менее минуты;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы подберём для Вас
                      выгодное предложение и обсудим детали реализации;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Либо просто позвоните
                      нашему специалисту: +7 (4872) 79-29-10
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы предлогаем
                      комплекстный подход и разрабатываем уникальные стратегии
                      для
                     
                        достижения целей Вашего бизнеса;
                     
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Используем все
                      интструменты digital-маркетинга для того, что добиться
                      максимальных результатов;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Предложим только
                      результативные каналы продвижения Вашего бизнеса.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="work-panel_image">
                {/* <img src={WorksTwo} alt="WorksTwo" /> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className="work-start_info">
              <div className="work-panel-texts">
                <p className="work-panel-text">
                  Если Вы точно знаете, какие услуги необходимы для Вашего
                  бизнеса, то:{" "}
                </p>
                <ul className="work-list">
                  {" "}
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Заполните форму заявки
                      на Коммерческое предложение - это займёт менее минуты;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы подберём для Вас
                      выгодное предложение и обсудим детали реализации;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Либо просто позвоните
                      нашему специалисту: +7 (4872) 79-29-10
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы предлогаем
                      комплекстный подход и разрабатываем уникальные стратегии
                      для
                     
                        достижения целей Вашего бизнеса;
                     
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Используем все
                      интструменты digital-маркетинга для того, что добиться
                      максимальных результатов;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Предложим только
                      результативные каналы продвижения Вашего бизнеса.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="work-panel_image">
                {/* <img src={WorksTwo} alt="WorksTwo" /> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <div className="work-control_info">
              <div className="work-panel-texts">
                <p className="work-panel-text">
                  Если Вы точно знаете, какие услуги необходимы для Вашего
                  бизнеса, то:{" "}
                </p>
                <ul className="work-list">
                  {" "}
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Заполните форму заявки
                      на Коммерческое предложение - это займёт менее минуты;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы подберём для Вас
                      выгодное предложение и обсудим детали реализации;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Либо просто позвоните
                      нашему специалисту: +7 (4872) 79-29-10
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы предлогаем
                      комплекстный подход и разрабатываем уникальные стратегии
                      для
                     
                        достижения целей Вашего бизнеса;
                     
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Используем все
                      интструменты digital-маркетинга для того, что добиться
                      максимальных результатов;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Предложим только
                      результативные каналы продвижения Вашего бизнеса.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="work-panel_image">
                {/* <img src={WorksTwo} alt="WorksTwo" /> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
          <div className="work-result_info">
              <div className="work-panel-texts">
                <p className="work-panel-text">
                  Если Вы точно знаете, какие услуги необходимы для Вашего
                  бизнеса, то:{" "}
                </p>
                <ul className="work-list">
                  {" "}
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Заполните форму заявки
                      на Коммерческое предложение - это займёт менее минуты;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы подберём для Вас
                      выгодное предложение и обсудим детали реализации;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Либо просто позвоните
                      нашему специалисту: +7 (4872) 79-29-10
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Мы предлогаем
                      комплекстный подход и разрабатываем уникальные стратегии
                      для
                     
                        достижения целей Вашего бизнеса;
                     
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Используем все
                      интструменты digital-маркетинга для того, что добиться
                      максимальных результатов;
                    </p>
                  </li>
                  <li className="work-item">
                    <p className="work-panel-text">
                      <span className="work-span"></span> Предложим только
                      результативные каналы продвижения Вашего бизнеса.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="work-panel_image">
                {/* <img src={WorksTwo} alt="WorksTwo" /> */}
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

// const Work = (props) => {
//   return (
//     <div className="work">
//       <div className="container">

//       </div>
//     </div>
//   );
// };

// export default Work;

{
  /* <div>
          <div className="works-list">
            <NavLink className="works-link" to="/">
              Заявка
            </NavLink>

            <NavLink className="works-link" to="/offer">
              Коммерческое предложение
            </NavLink>

            <NavLink className="works-link" to="/dashboard">
              Начало работ
            </NavLink>

            <NavLink className="works-link" to="/dashboard">
              Контроль качества
            </NavLink>

            <NavLink className="works-link" to="/dashboard">
              Гарантированный результат
            </NavLink>
            <Outlet />
          </div>

          <Routes>
            <Route path="/" element={<Homes />} exact>
              <Route path="/offer" element={<Offer />} exact></Route>
            </Route>
              
          </Routes>
        </div> */
}
