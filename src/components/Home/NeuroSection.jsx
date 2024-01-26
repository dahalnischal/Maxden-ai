import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
import Neuro1 from "../Dialog/Neuro/Neuro1";
import Neuro2 from "../Dialog/Neuro/Neuro2";
import Neuro3 from "../Dialog/Neuro/Neuro3";
import Neuro4 from "../Dialog/Neuro/Neuro4";
import {  ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const NeuroSection = () => {
  const [visible, setVisible] = useState(false);
  const [neuro1, setNeuro1] = useState(false);
  const [neuro2, setNeuro2] = useState(false);
  const [neuro3, setNeuro3] = useState(false);
  const [neuro4, setNeuro4] = useState(false);
  const ref = useRef();
  return (
    <section className="neuro-sec">
      <div className="neuro-wraps">
        <ScrollParallax
          isAbsolutelyPositioned={false}
          strength={-0.05}
          lerpEase={0.04}
        >
          <div className="whole-neuro-wraps">
            <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
              <div className="dots">
                <img src="assets/images/Dot.svg" alt="dot" />
                <img src="assets/images/Dot.svg" alt="dot" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
              <img
                src="assets/images/Ellipse1.png"
                alt="ball"
                className="ellipse1"
              />
            </ScrollParallax>
            <div className="pagination-wraps third">
              <div className="num">03</div>
              <div className="line" />
              <div className="num last">05</div>
            </div>
            <div className="neuro-feature-grid">
              <img
                src="assets/images/eye.png"
                alt="ai-eye"
                className="eye"
                ref={ref}
              />
              <div className="topic">
                <h2>Интеграция нейросотрудника</h2>
                <div className="btn-bdr" onClick={() => setVisible(true)}>
                  Обсудить проект
                </div>
              </div>
              <div className="features-grid">
                <div className="feature-grid-wrapper">
                  <div className="feature-card" onClick={() => setNeuro1(true)}>
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
                  <div className="feature-card" onClick={() => setNeuro3(true)}>
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
                  <div className="feature-card" onClick={() => setNeuro2(true)}>
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
                      поддержки, интеграция с Telegram, WhatsApp, веб,
                      мобильными приложениями
                    </p>
                  </div>
                  <div className="feature-card" onClick={() => setNeuro4(true)}>
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
        </ScrollParallax>
      </div>
      <Dialog
        visible={visible}
        className="hide-sidebar-dialog"
        showHeader={false}
        position={"top"}
      >
        <ContactDialog setVisible={setVisible} />
      </Dialog>

      <Dialog
        visible={neuro1}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Neuro1 setNeuro1={setNeuro1} />
      </Dialog>
      <Dialog
        visible={neuro2}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Neuro2 setNeuro2={setNeuro2} />
      </Dialog>
      <Dialog
        visible={neuro3}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Neuro3 setNeuro3={setNeuro3} />
      </Dialog>
      <Dialog
        visible={neuro4}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Neuro4 setNeuro4={setNeuro4} />
      </Dialog>
    </section>
  );
};

export default NeuroSection;
