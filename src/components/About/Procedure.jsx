import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
const Procedure = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="procedure">
      <div className="dots">
        <img src="assets/images/Dot.svg" alt="dot" />
        <img src="assets/images/Dot.svg" alt="dot" />
      </div>
      <img src="assets/images/Ellipse1.png" alt="ball" className="ellipse1" />
      <img src="assets/images/Dot.svg" alt="dot" className="dot" />
      <div className="procedure-wrap">
        <div className="topic">
          <h2>Порядок разработки систем ИИ</h2>
        </div>
        <div className="points-wrapper">
          <div className="points-wraps">
            <div className="num-wraps">
              <div className="num-circle">
                <div className="num">1</div>
              </div>
              <span>Шаг 1: Анализ задачи</span>
            </div>
            <div className="content">
              <p>
                Исследуем задачу, акцентируя внимание на потенциале
                искусственного интеллекта. Анализируем типы данных, их объем и
                сложность, а также специфические алгоритмы и методы машинного
                обучения, которые могут быть применены. Особое внимание уделяем
                вопросам обучения моделей ИИ, их верификации и валидации.
              </p>
            </div>
          </div>
          <div className="points-wraps">
            <div className="num-wraps">
              <div className="num-circle">
                <div className="num">2</div>
              </div>
              <span>Шаг 2: Разработка системы</span>
            </div>
            <div className="content">
              <p>
                Исследуем задачу, акцентируя внимание на потенциале
                искусственного интеллекта. Анализируем типы данных, их объем и
                сложность, а также специфические алгоритмы и методы машинного
                обучения, которые могут быть применены. Особое внимание уделяем
                вопросам обучения моделей ИИ, их верификации и валидации.
              </p>
            </div>
          </div>
          <div className="points-wraps">
            <div className="num-wraps">
              <div className="num-circle">
                <div className="num">3</div>
              </div>
              <span>Шаг 3: Внедрение и поддержка решения</span>
            </div>
            <div className="content">
              <p>
                Исследуем задачу, акцентируя внимание на потенциале
                искусственного интеллекта. Анализируем типы данных, их объем и
                сложность, а также специфические алгоритмы и методы машинного
                обучения, которые могут быть применены. Особое внимание уделяем
                вопросам обучения моделей ИИ, их верификации и валидации.
              </p>
            </div>
          </div>
        </div>
        <div className="btns-wraps">
          <div
            className="btn-p"
            onClick={() => setVisible(true)}
            title="Обсудить проект"
          >
            Обсудить проект
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
      </div>
    </section>
  );
};

export default Procedure;
