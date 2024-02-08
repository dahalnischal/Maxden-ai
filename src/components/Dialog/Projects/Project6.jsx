import React from "react";

const Project6 = ({ setProject6 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject6(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
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
                      <span> Повышение кликабельности и маржинальности</span>
                      объявлений для роста чистой прибыли
                    </li>
                  </ul>
                </div>
                <div className="mt-25">
                  <span>Результат: </span>
                  <ul>
                    <li>
                      <span>на 12% </span> увеличение чистой прибыли компании
                    </li>
                    <li>
                      в следствии интеграции машинного обучения в проект,
                      компания Gnezdo.ru стала резидентом
                      <span>
                        инновационного центра Сколково, повысив свой рейтинг и
                        получив бонусы от государственной поддержки
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-paragraph">
                <p>
                  Компании Gnezdo.ru, специализируется на интернет-рекламе.
                  Одной из базовых задач проекта оптимально подбирать рекламное
                  объявление, основываясь на вероятности клика пользователем и
                  маржинальности рекламы. 
                  <br />
                  <br />
                  Была разработана и интегрирована система которая использует
                  алгоритмы машинного обучения для анализа и выбора подходящей
                  рекламы на основе данных о пользователе и статистики. Система
                  обрабатывает более миллиона показов в день.
                </p>
              </div>
            </div>
            <div className="btns">
              <a href="" className="btn-bdr">
                Вернуться на сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project6;
