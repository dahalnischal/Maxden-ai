import React from "react";

const ProjectDialog = ({ setProject3 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject3(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
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
                      <span>в 7 раз</span> сократили время на получение свойств
                      битумов (с 7-ми дней до 1-го дня)
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
                  использования. На анализ свойств одной рецептуры лаборатория
                  затрачивает 7 рабочих дней.
                  <br />
                  <br />
                  Было проведено исследование инфракрасной спектрометрии битумов
                  и разработано решение на основе машинного обучения для
                  прогнозирования характеристик битумов, таких как хрупкость,
                  эластичность, глубина проникновения иглы, на основе
                  инфракрасной спектрограммы.
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

export default ProjectDialog;
