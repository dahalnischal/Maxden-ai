import { Dialog } from "primereact/dialog";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ContactDialog from "../Dialog/ContactDialog";
const SecondProjectSection = () => {
  const [visible, setVisible] = useState(false);
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
  return (
    <AnimatePresence>
      <motion.section
        initial={{ translateX: "100%", transition: { duration: 0.3 } }}
        exit={{ translateX: "100%", transition: { duration: 0.3 } }}
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
                    <span>Услуга: Автоматизация Аналитики и Отчетности</span>
                    <h2> Агрегация и Оптимизация Информации на Metrica.guru</h2>
                  </div>
                  <div>
                    <img src="assets/images/metrica.png" alt="metrica" />
                  </div>
                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>Улучшение пользовательского опыта</span>за счет
                          устранения пропусков в данных
                        </li>
                      </ul>
                    </div>

                    <div className="mt-25">
                      <span>Результат: </span>
                      <ul>
                        <li>
                          <span>на 85%</span> снизили количество пропусков в
                          данных
                        </li>

                        <li>
                          повысили общее удовлетворение пользователей
                          <span>с 3-х до 5-ти звезд </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Сервис metrica.guru агрегирует аналитические данные о
                      сайтах. Проблема компании заключалась в негативном влиянии
                      пропусков данных на пользовательский опыт. 
                      <br />
                      <br />
                      Создали четыре веб-сервиса для прогнозирования недостающих
                      данных о трафике сайтов и эффективности рекламных
                      кампаний. Разработка включала использование нейронных
                      сетей для анализа и предсказания данных с точностью от
                      95%, а также интеграцию с платформой metrica.guru.
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-5.png"
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
                    <span>Услуга: Алгоритмы Принятия Решений</span>
                    <h2>Оптимизация Рекламы с Искусственным Интеллектом</h2>
                  </div>
                  <div>
                    <img src="assets/images/gnezdo.png" alt="gnezdo" />
                  </div>
                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>
                             Повышение кликабельности и маржинальности
                          </span>
                          объявлений для роста чистой прибыли
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>Результат: </span>
                      <ul>
                        <li>
                          <span>на 12% </span> увеличение чистой прибыли
                          компании
                        </li>
                        <li>
                          в следствии интеграции машинного обучения в проект,
                          компания Gnezdo.ru стала резидентом
                          <span>
                            инновационного центра Сколково, повысив свой рейтинг
                            и получив бонусы от государственной поддержки
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Компании Gnezdo.ru, специализируется на интернет-рекламе.
                      Одной из базовых задач проекта оптимально подбирать
                      рекламное объявление, основываясь на вероятности клика
                      пользователем и маржинальности рекламы. 
                      <br />
                      <br />
                      Была разработана и интегрирована система которая
                      использует алгоритмы машинного обучения для анализа и
                      выбора подходящей рекламы на основе данных о пользователе
                      и статистики. Система обрабатывает более миллиона показов
                      в день.
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-6.png"
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
                    <span>Услуга: Рекомендательные системы</span>
                    <h2>Автоматическое освещение киберспортивных матчей</h2>
                  </div>

                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          <span>Замена функций обсерверов</span> на AI-систему
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>Результат: </span>
                      <ul>
                        <li>
                          <span>Полная замена обсервера</span> на искусственный
                          интеллект
                        </li>
                        <li>
                          <span>$15 000</span> - средняя экономия за недельный
                          турнир (не теряя в качестве трансляции)
                        </li>
                        <li>
                          <span>в 24 раза</span>снизилось время на подготовку к
                          трансляции с 2-х дней на оборудование студии до 2-х
                          часов на установку и запуск ПО
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Компания Argus.ai занимается автоматизацией трансляций
                      киберспортивных соревнований, в том числе и дисциплиной
                      CS:GO. Традиционно для переключения камер между игроками в
                      важные моменты игры используются люди - обсерверы.
                      <br />
                      <br />
                      Была произведено исследование в области киберспорта, и в
                      частности CS:GO, для подбора оптимальных параметров
                      прогнозирования зрелищных событий во время матча. Была
                      обучена модель машинного обучения и разработана система на
                      её основе, которая анализирует игровую ситуацию, учитывая
                      действия игроков и возможные повороты событий, для
                      определения оптимального момента для смены камер.
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-7.png"
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
                    <span>Услуга: Автоматизация Офисных Задач</span>
                    <h2>Искусственный Интеллект в Логистике</h2>
                  </div>

                  <div className="listed-paragraph">
                    <div>
                      <span>Цель:</span>
                      <ul>
                        <li>
                          Повышение скорости подбора маршрутов
                          <span>на 80%.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>до внедрения алгоритма: </span>
                      <ul>
                        <li>
                          <span>4 часа</span>- ручной подбор оптимальных
                          маршрутов
                        </li>
                      </ul>
                    </div>
                    <div className="mt-25">
                      <span>после: </span>
                      <ul>
                        <li>
                          <span>2 минуты</span> - автоматический подбор
                          маршрутов (улучшение на 99%)
                        </li>
                        <li>
                          <span>на 20%</span>оптимизированы затраты в связи с
                          сокращением персонала
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-paragraph">
                    <p>
                      Для логистической компании разработали инновационную
                      систему для быстрого подбора лучших маршрутов в области
                      морской, железнодорожной и автомобильной доставки. 
                      <br />
                      <br />
                      Был разработан алгоритм на основе Искусственного
                      Интеллекта а также веб-интерфейс учитывая ключевые
                      параметры доставки.
                    </p>
                  </div>
                </div>
                <div className="images">
                  <img
                    src="assets/images/port-8.png"
                    alt=""
                    className="port-img"
                  />
                </div>
              </div>
            </div>
            <div className="btn-wraps">
              <Link to="/portfolio" className="btn-bdr">
                <img src="assets/images/play-left.svg" alt="" />
                Увидеть предыдущие
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

export default SecondProjectSection;
