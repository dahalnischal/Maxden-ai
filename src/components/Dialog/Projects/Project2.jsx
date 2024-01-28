import React from "react";

const Project2 = ({ setProject2 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject2(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
              <div className="topic">
                <span>Услуга: Генерация Контента Любого Типа</span>
                <h2>
                  {" "}
                  Генерация Интерьера с Использованием Искусственного Интеллекта
                </h2>
              </div>

              <div className="listed-paragraph">
                <div>
                  <span>Цель:</span>
                  <ul>
                    <li>
                      <span>Удержание клиентов</span>за счет привлекательности
                      сайта компании
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
                  Для Мебельной Компании SLON был разработан генератор дизайна
                  интерьера на основе Искусственного Интеллекта который
                  учитывает комнату клиента а также желаемый стиль. 
                  <br />
                  <br />
                  Была разработана система на основе midjourney API, которая
                  генерирует варианты дизайна интерьера на основе
                  пользовательских предпочтений, таких как тип комнаты стиль и
                  другие параметры. Система была интегрирована на веб-сайт и в
                  телеграмм-бот компании. 
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

export default Project2;
