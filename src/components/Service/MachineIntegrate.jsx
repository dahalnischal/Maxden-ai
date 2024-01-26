import React from "react";

const MachineIntegrate = () => {
  return (
    <section className="m-integrate">
      <div className="dots">
        <img src="assets/images/Dot.svg" alt="dot" />
        <img src="assets/images/Dot.svg" alt="dot" />
      </div>
      <img src="assets/images/Ellipse1.png" alt="ball" className="ellipse1" />
      <div className="m-integrate-wraps">
        <div className="topicwraps">
          <div className="heading">
            <h2>Интеграция машинного обучения</h2>
            <a href="" title="Обсудить проект" className="btn-p">
              Обсудить проект
            </a>
          </div>
          <img src="assets/images/brain.png" alt="bot" className="brain-img" />
        </div>

        <div className="m-integrate-grid-wraps">
          <div className="m-integrate-grid">
            <div className="integrate-card">
              <div className="icon-wraps">
                <img
                  src="assets/images/Automation.png"
                  alt="Automation"
                  className="icon"
                />
              </div>
              <h4>Компьютерное зрение</h4>
              <p>
                Разработка алгоритмов для распознавания и анализа визуальной
                информации, на видео и изображениях, в режиме реального времени.
              </p>
            </div>
            <div className="integrate-card">
              <div className="icon-wraps">
                <img
                  src="assets/images/Personalized.png"
                  alt="Personalized"
                  className="icon"
                />
              </div>
              <h4>Машинное обучение на производстве</h4>
              <p>
                Разработка алгоритмов машинного обучения для предиктивного
                обслуживания оборудования, оптимизация производственных линий,
                управление качеством и автоматизация контроля процессов.
              </p>
            </div>
            <div className="integrate-card">
              <div className="icon-wraps">
                <img
                  src="assets/images/analytics.png"
                  alt="Analytics"
                  className="icon"
                />
              </div>
              <h4>Рекомендательные системы</h4>
              <p>
                Разработка систем, которые используют алгоритмы машинного
                обучения для анализа предпочтений и поведения пользователей,
                чтобы предлагать персонализированный контент, продукты или
                услуги.
              </p>
            </div>
            <div className="integrate-card">
              <div className="icon-wraps">
                <img
                  src="assets/images/Generating.png"
                  alt="Generating"
                  className="icon"
                />
              </div>
              <h4>Алгоритмы принятия решений</h4>
              <p>
                Разработка алгоритмов, которые помогают компаниям в принятии
                решений основываясь на данных пользователей.
                <br />
                <br />
                Применения включают финансовый анализ, маркетинг, бонусные
                системы, управление рисками, оптимизацию логистики и управление
                цепочками поставок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineIntegrate;
