import React from "react";

const Project5 = ({ setProject5 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <div className="cross" onClick={() => setProject5(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
              <div className="topic">
                <span>Услуга: Автоматизация Аналитики и Отчетности</span>
                <h2>Project 5</h2>
              </div>
              <div>
                <img src="assets/images/metrica.png" alt="metrica" />
              </div>
              <div className="listed-paragraph">
                <div>
                  <span>Цель:</span>
                  <ul>
                    <li>
                      <span>Улучшение пользовательского опыта</span> за счет
                      устранения пропусков в данных
                    </li>
                  </ul>
                </div>
                <div className="mt-25">
                  <span>Результат:</span>
                  <ul>
                    <li>
                      <span>на 85%</span> снизили количество пропусков в данных
                    </li>
                    <li>
                      повысили общее удовлетворение пользователей{" "}
                      <span>с 3-х до 5-ти звезд</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-paragraph">
                <p>
                  Сервис metrica.guru агрегирует аналитические данные о сайтах.
                  Проблема компании заключалась в негативном влиянии пропусков
                  данных на пользовательский опыт.&nbsp;
                  <br />
                  Создали четыре веб-сервиса для прогнозирования недостающих
                  данных о трафике сайтов и эффективности рекламных кампаний.
                  Разработка включала использование нейронных сетей для анализа
                  и предсказания данных с точностью от 95%, а также интеграцию с
                  платформой metrica.guru.
                </p>
              </div>
            </div>
            <div className="btns">
              <a href className="btn-bdr">
                Вернуться на сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project5;
