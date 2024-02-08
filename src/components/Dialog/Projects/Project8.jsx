import React from "react";

const Project8 = ({ setProject8 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject8(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
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
                      <span>4 часа</span>- ручной подбор оптимальных маршрутов
                    </li>
                  </ul>
                </div>
                <div className="mt-25">
                  <span>после: </span>
                  <ul>
                    <li>
                      <span>2 минуты</span> - автоматический подбор маршрутов
                      (улучшение на 99%)
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
                  Для логистической компании разработали инновационную систему
                  для быстрого подбора лучших маршрутов в области морской,
                  железнодорожной и автомобильной доставки. 
                  <br />
                  <br />
                  Был разработан алгоритм на основе Искусственного Интеллекта а
                  также веб-интерфейс учитывая ключевые параметры доставки.
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

export default Project8;
