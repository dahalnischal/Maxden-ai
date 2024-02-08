import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ContactDialog from "../Dialog/ContactDialog";
const ProjectSection = () => {
  const [visible, setVisible] = useState(false);
  const router = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 1000);
  }, [router]);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.section
        initial={{ translateX: "-100%", transition: { duration: 0.3 } }}
        exit={{ translateX: "0%", transition: { duration: 0.3 } }}
        animate={{ translateX: "0%", transition: { duration: 0.3 } }}
      >
        <section className="portfolio-main">
          <div className="main-wraps">
            <div className="heading">
              <h1>проекты</h1>
              <p>
                20+ успешных проектов в области чат-ботов и ИИ. Наши партнеры
                это различные компании от стартапов до корпоративных гигантов
              </p>
              <div
                className="btn-p"
                onClick={() => setVisible(true)}
                title="Обсудить проект"
              >
                Обсудить проект
              </div>
            </div>
          </div>
        </section>
        <section className="project-sec">
          {" "}
          <div className="project-whole-wraps">
            <div className="project-flex-wraps">
              <div className="project-grided">
                <div className="project-wraps">
                  <img
                    src="assets/images/left-curve-blue.png"
                    alt="curve"
                    className="curve"
                  />
                  <div className="topic">
                    <span>Услуга: Персонализированные чат боты</span>
                    <h2> Интеллектуальный Чат-бот для Маркетплейса Семян</h2>
                  </div>

                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>на 70% сократить затрачиваемое время</span> на
                          консультации
                        </li>
                        <li>
                          <span>на 60% уменьшить нагрузки</span>на персонал
                          отдела продаж
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>до внедрения чат-бота: </span>
                      <ul>
                        <li>
                          <span>7 сотрудников</span> на полной ставке
                        </li>
                        <li>
                          <span>2 минуты</span> - скорость ответа
                        </li>
                      </ul>
                    </div>

                    <div className="mt-25">
                      <span>после: </span>
                      <ul>
                        <li>
                          <span>2 сотрудника</span> (без ущерба для качества
                          обслуживания)
                        </li>
                        <li>
                          <span>15 секунд</span>- скорость ответа (на 87,5%
                          выше)
                        </li>
                        <li>
                          <span>20% снижение общих затрат </span>на персонал
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Для международного маркетплейса, специализирующегося на
                      продаже семян домашних растений, был создан продвинутый
                      чат-бот для автоматизации процесса консультаций,
                      уменьшения нагрузки на отдел продаж и обработки более 20
                      000 сообщений в день.
                      <br />
                      <br />
                      Был разработан чат-бот на базе GPT-4 и современных
                      инструментов работы с большими языковыми моделями (LLM)
                      обучен на данных о растениях и интегрирован с базой данных
                      товаров, что позволяет предоставлять точные и
                      персонализированные консультации. 
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-1.png"
                    alt=""
                    className="port-img"
                  />
                </div>
              </div>
              <div className="project-grided">
                <div className="project-wraps">
                  <img
                    src="assets/images/left-curve-blue.png"
                    alt="curve"
                    className="curve"
                  />
                  <div className="topic">
                    <span>Услуга: Генерация Контента Любого Типа</span>
                    <h2>
                      {" "}
                      Генерация Интерьера с Использованием Искусственного
                      Интеллекта
                    </h2>
                  </div>

                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>Удержание клиентов</span>за счет
                          привлекательности сайта компании
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>Результат: </span>
                      <ul>
                        <li>
                          <span>на 40% увеличение удержания</span> на сайте
                        </li>
                        <li>
                          <span>на 4% рост конверсии</span> посещений в продажи
                        </li>
                        <li>
                          <span>повышенный интерес</span>клиентов именно к
                          сгенерированным дизайнам в сравнении с классическими
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Для Мебельной Компании SLON был разработан генератор
                      дизайна интерьера на основе Искусственного Интеллекта
                      который учитывает комнату клиента а также желаемый стиль. 
                      <br />
                      <br />
                      Была разработана система на основе midjourney API, которая
                      генерирует варианты дизайна интерьера на основе
                      пользовательских предпочтений, таких как тип комнаты стиль
                      и другие параметры. Система была интегрирована на веб-сайт
                      и в телеграмм-бот компании. 
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-2.png"
                    alt=""
                    className="port-img"
                  />
                </div>
              </div>
              <div className="project-grided">
                <div className="project-wraps">
                  <img
                    src="assets/images/left-curve-blue.png"
                    alt="curve"
                    className="curve"
                  />
                  <div className="topic">
                    <span>Услуга: Машинное Обучение на Производстве</span>
                    <h2> Спектроанализ Битумных Рецептур</h2>
                  </div>
                  <div>
                    <img src="assets/images/raenpom.png" alt="raenpom" />
                  </div>
                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>в 2 раза</span> ускорение анализа свойств битума
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>Результат: </span>
                      <ul>
                        <li>
                          <span>в 7 раз</span> сократили время на получение
                          свойств битумов (с 7-ми дней до 1-го дня)
                        </li>
                        <li>
                          <span>свыше 85% - точность моделей,</span> что
                          удовлетворяет требованиям заказчика
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Лаборатория компании Газпром Битумные материалы занимается
                      подбором рецептур битума разных свойств для разных условий
                      использования. На анализ свойств одной рецептуры
                      лаборатория затрачивает 7 рабочих дней.
                      <br />
                      <br />
                      Было проведено исследование инфракрасной спектрометрии
                      битумов и разработано решение на основе машинного обучения
                      для прогнозирования характеристик битумов, таких как
                      хрупкость, эластичность, глубина проникновения иглы, на
                      основе инфракрасной спектрограммы.
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-3.png"
                    alt=""
                    className="port-img"
                  />
                </div>
              </div>
              <div className="project-grided">
                <div className="project-wraps">
                  <img
                    src="assets/images/left-curve-blue.png"
                    alt="curve"
                    className="curve"
                  />
                  <div className="topic">
                    <span>Услуга: Компьютерное зрение</span>
                    <h2>Детекция объектов на Заправках Лукойл</h2>
                  </div>
                  <div>
                    <img src="assets/images/Avito_logo2.png" alt="avito" />
                  </div>
                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>Автоматический сбор данных</span> о людях и авто
                          на заправках Лукойл
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>Результат: </span>
                      <ul>
                        <li>
                          <span>94% - средняя точность детекции,</span> что
                          удовлетворяет требованиям заказчика
                        </li>
                        <li>
                          данные, собранные системой, используются для
                          <span>анализа загруженности</span>
                          станций и <span>улучшения стратегий</span>работы
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Аналитический отдел компании Лукойл собирает данные о
                      своих заправках для повышения безопасности и улучшения
                      клиентского опыта. Для этого собираются в том числе и
                      видео данные с камер на заправках. 
                      <br />
                      <br />
                      Была разработана система автоматизированного мониторинга и
                      обнаружения объектов на основе самых современных
                      технологий ИИ в компьютерном зрении, а также система
                      эффективной передачи большого потока данных в базу.
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-4.png"
                    alt=""
                    className="port-img"
                  />
                </div>
              </div>
            </div>
            <div className="btn-wraps">
              <Link to="/portfolio-second" className="btn-bdr">
                Посмотреть ещё
                <img src="assets/images/play.svg" alt="" />
              </Link>
            </div>
          </div>
          <Dialog
            visible={visible}
            className="hide-sidebar-dialog contact-dialog-home"
            showHeader={false}
            position={windowSize[0] > 960 ? "top" : "bottom"}
            maskStyle={
              windowSize[0] > 960
                ? { alignItems: "center" }
                : { alignItems: "flex-end" }
            }
            blockScroll={true}
            dismissableMask={true}
            onHide={() => setVisible(false)}
          >
            <ContactDialog setVisible={setVisible} />
          </Dialog>
        </section>
      </motion.section>
    </AnimatePresence>
  );
};

export default ProjectSection;
