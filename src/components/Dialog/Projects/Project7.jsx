import React from "react";

const Project7 = ({ setProject7 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject7(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
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
                      трансляции с 2-х дней на оборудование студии до 2-х часов
                      на установку и запуск ПО
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-paragraph">
                <p>
                  Компания Argus.ai занимается автоматизацией трансляций
                  киберспортивных соревнований, в том числе и дисциплиной CS:GO.
                  Традиционно для переключения камер между игроками в важные
                  моменты игры используются люди - обсерверы.
                  <br />
                  <br />
                  Была произведено исследование в области киберспорта, и в
                  частности CS:GO, для подбора оптимальных параметров
                  прогнозирования зрелищных событий во время матча. Была обучена
                  модель машинного обучения и разработана система на её основе,
                  которая анализирует игровую ситуацию, учитывая действия
                  игроков и возможные повороты событий, для определения
                  оптимального момента для смены камер.
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

export default Project7;
