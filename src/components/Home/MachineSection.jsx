import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
const MachineSection = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="machine">
      <div className="machine-wraps">
        <div className="dots">
          <img src="assets/images/Dot.svg" alt="dot" />
          <img src="assets/images/Dot.svg" alt="dot" />
        </div>
        <img src="assets/images/Ellipse1.png" alt="ball" className="ellipse1" />
        <div className="machine-grid-wraps">
          <div className="pagination-wraps fourth">
            <div className="num">04</div>
            <div className="line"></div>
            <div className="num last">05</div>
          </div>
          <img src="assets/images/brain.png" alt="brain" className="brain" />
          <div className="m-feature-grid">
            <div className="wrappers-feature">
              <div className="feature-card">
                <div className="icon-wraps">
                  <img
                    src="assets/images/sight.png"
                    alt="sight"
                    className="icon"
                  />
                </div>
                <h4>Компьютерное зрение</h4>
                <p>
                  Алгоритмы для распознавания и анализа изображений и видео в
                  реальном времени
                </p>
              </div>

              <div className="feature-card">
                <div className="icon-wraps">
                  <img
                    src="assets/images/Recommender.png"
                    alt="Automation"
                    className="icon"
                  />
                </div>
                <h4>Рекомендательные системы</h4>
                <p>
                  Системы для предложения товаров на основе анализа поведения
                  пользователей
                </p>
              </div>
            </div>
            <div className="wrappers-feature">
              <div className="feature-card">
                <div className="icon-wraps">
                  <img
                    src="assets/images/Machine.png"
                    alt="Machine"
                    className="icon"
                  />
                </div>
                <h4>Машинное обучение на производстве</h4>
                <p>
                  Алгоритмы для предиктивного обслуживания, оптимизации линий и
                  контроля качества
                </p>
              </div>
              <div className="feature-card">
                <div className="icon-wraps">
                  <img
                    src="assets/images/Decision.png"
                    alt="Automation"
                    className="icon"
                  />
                </div>
                <h4>Алгоритмы принятия решений</h4>
                <p>
                  Решения для финансового анализа, маркетинга, бонусных систем,
                  управления рисками, оптимизации логистики
                </p>
              </div>
            </div>
          </div>
          <div className="topic">
            <h2>Интеграция машинного обучения</h2>
            <div className="btn-bdr" onClick={() => setVisible(true)}>
              Обсудить проект
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

export default MachineSection;
