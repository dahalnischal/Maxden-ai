import React from "react";

const Project4 = ({ setProject4 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject4(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
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
                      <span>Автоматический сбор данных</span> о людях и авто на
                      заправках Лукойл
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
                  Аналитический отдел компании Лукойл собирает данные о своих
                  заправках для повышения безопасности и улучшения клиентского
                  опыта. Для этого собираются в том числе и видео данные с камер
                  на заправках. 
                  <br />
                  <br />
                  Была разработана система автоматизированного мониторинга и
                  обнаружения объектов на основе самых современных технологий ИИ
                  в компьютерном зрении, а также система эффективной передачи
                  большого потока данных в базу.
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

export default Project4;
