import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";

const NeuroSection = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="neuro-sec">
      <div className="neuro-wraps">
        <div className="whole-neuro-wraps">
          <div className="dots">
            <img src="assets/images/Dot.svg" alt="dot" />
            <img src="assets/images/Dot.svg" alt="dot" />
          </div>
          <img
            src="assets/images/Ellipse1.png"
            alt="ball"
            className="ellipse1"
          />
          <div className="pagination-wraps third">
            <div className="num">03</div>
            <div className="line" />
            <div className="num last">05</div>
          </div>
          <div className="neuro-feature-grid">
            <img src="assets/images/eye.png" alt="ai-eye" className="eye" />
            <div className="topic">
              <h2>Интеграция нейросотрудника</h2>
              <div className="btn-bdr" onClick={() => setVisible(true)}>
                Обсудить проект
              </div>
            </div>
            <div className="features-grid">
              <div className="feature-grid-wrapper">
                <div className="feature-card">
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Automation.png"
                      alt="Automation"
                      className="icon"
                    />
                  </div>
                  <h4>Автоматизация офисных задач</h4>
                  <p>
                    Автоматическая обработка заявок, управления
                    документооборотом, автоматизация действий в 1С, Битрикс24,
                    amoCRM, Microsoft Office, Google Docs
                  </p>
                </div>
                <div className="feature-card">
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Generating.png"
                      alt="Generating"
                      className="icon"
                    />
                  </div>
                  <h4>Генерация контента любого типа</h4>
                  <p>
                    Автоматическое создание текстов, изображений,
                    видеоматериалов
                  </p>
                </div>
              </div>
              <div className="feature-grid-wrapper">
                <div className="feature-card">
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Personalized.png"
                      alt="Personalized"
                      className="icon"
                    />
                  </div>
                  <h4>Персонализированные чат-боты</h4>
                  <p>
                    Обученные боты для обработки заказов и информационной
                    поддержки, интеграция с Telegram, WhatsApp, веб, мобильными
                    приложениями
                  </p>
                </div>
                <div className="feature-card">
                  <div className="icon-wraps">
                    <img
                      src="assets/images/analytics.png"
                      alt="analytics"
                      className="icon"
                    />
                  </div>
                  <h4>Автоматизация аналитики и отчетности</h4>
                  <p>
                    Нейросети для анализа данных и документов, генерации
                    отчетов, выявление тенденций, прогнозирование трендов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        visible={visible}
        className="hide-sidebar-dialog"
        showHeader={false}
        position={"top"}
      >
        <ContactDialog setVisible={setVisible} />
      </Dialog>
    </section>
  );
};

export default NeuroSection;
