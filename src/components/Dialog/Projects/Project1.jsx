import React from "react";

const Project1 = ({ setProject1 }) => {
  return (
    <section className="project-pop">
      <div className="project-popup">
        <div className="project-pop-wraps">
          <img
            src="assets/images/left-curve-blue.png"
            alt="curve"
            className="curve"
          />
          <div className="cross" onClick={() => setProject1(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <div className="scroll-wraps">
            <div className="project-content-wraps">
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
                      <span>на 60% уменьшить нагрузки</span>на персонал отдела
                      продаж
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
                      <span>15 секунд</span>- скорость ответа (на 87,5% выше)
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
                  чат-бот для автоматизации процесса консультаций, уменьшения
                  нагрузки на отдел продаж и обработки более 20 000 сообщений в
                  день.
                  <br />
                  <br />
                  Был разработан чат-бот на базе GPT-4 и современных
                  инструментов работы с большими языковыми моделями (LLM) обучен
                  на данных о растениях и интегрирован с базой данных товаров,
                  что позволяет предоставлять точные и персонализированные
                  консультации. 
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

export default Project1;
