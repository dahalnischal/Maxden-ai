import React from "react";

const NeuroIntegrate = () => {
  return (
    <section className="integrate">
      <div className="dots">
        <img src="assets/images/Dot.svg" alt="dot" />
        <img src="assets/images/Dot.svg" alt="dot" />
      </div>
      <div className="integrate-wraps">
        <div className="topicwraps">
          <div className="heading">
            <h2>Интеграция нейросотрудника</h2>
            <a href="" title="Обсудить проект" className="btn-p">
              Обсудить проект
            </a>
          </div>
          <img src="assets/images/bot.png" alt="bot" className="bot-img" />
        </div>

        <div className="integrate-grid-wraps">
          <img
            src="assets/images/Ellipse1.png"
            alt="ball"
            className="ellipse1"
          />
          <div className="integrate-grid">
            <div className="integrate-card">
              <div className="icon-wraps">
                <img
                  src="assets/images/Automation.png"
                  alt="Automation"
                  className="icon"
                />
              </div>
              <h4>Автоматизация офисных задач</h4>
              <p>
                Разработка индивидуальных решений для автоматизации рутинных
                офисных задач, таких как учет времени, анализ и управление
                документооборотом, работа с данными в таблицах и другие
                административные функции.
                <br />
                <br />
                Данные решения могут быть легко интегрированы с популярными
                бизнес-платформами, включая 1С, Битрикс24 и AmoCRM, Microsoft
                Office, Google Docs и другими.
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
              <h4>Персонализированные чат-боты</h4>
              <p>
                Разработка и обучения чат ботов для выполнения специфических
                задач, таких как обработка заказов, предоставление информации о
                продуктах и услугах, а также решение стандартных запросов
                клиентов.
                <br />
                <br />
                Эти чат-боты могут интегрироваться с различными платформами
                (telegram, whatsapp, веб, мобильные приложения) чтоб
                обеспечивать бесперебойную поддержку 24/7.
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
              <h4>Автоматизация аналитики и отчетности</h4>
              <p>
                Разработка и интеграция нейронных сетей, которые анализируют
                данные и документы компании и автоматически генерируют отчеты с
                заданной периодичностью.
                <br />
                <br />
                Наши системы могут анализировать большие объемы данных, выявлять
                скрытые тенденции, прогнозировать будущие тренды и предоставлять
                рекомендации по оптимизации бизнес-процессов.
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
              <h4>Генерация контента любого типа</h4>
              <p>
                Мы предлагаем услуги по автоматической генерации качественного
                контента, включая тексты, изображения и видеоматериалы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroIntegrate;
