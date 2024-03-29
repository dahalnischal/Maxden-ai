import React from "react";
import { ScrollParallax } from "react-just-parallax";

const NeedSection = () => {
  return (
    <section className="need">
      <div className="need-wraps">
        <ScrollParallax isAbsolutelyPositioned strength={-0.1} zIndex={-1}>
          <img
            src="assets/images/Ellipse1.png"
            alt="ball"
            className="ellipse1"
          />
        </ScrollParallax>
        <div className="need-flex-wraps">
          <div className="image-wraps">
            <img src="assets/images/bot1.png" alt="bot" className="bot-img" />
          </div>
          <div className="needs-content-wraps">
            <h2>Почему бизнес нуждается в ИИ и в нашей команде?</h2>
            <div className="grided-wraps">
              <div className="content">
                <p>
                  В современном мире, где конкуренция постоянно растет,
                  искусственный интеллект становится не просто преимуществом, а
                  необходимостью для любого бизнеса. ИИ позволяет
                  автоматизировать рутинные задачи, повышая эффективность и
                  снижая затраты. С помощью аналитики больших данных,
                  предсказательного моделирования и персонализированных решений,
                  ИИ способен улучшить взаимодействие с клиентами,
                  оптимизировать процессы и увеличить доходы компаний.
                </p>
              </div>
              <div className="content">
                <p>
                  Обращаясь в Maxden.Ai, вы получаете не только доступ к
                  передовым технологиям ИИ, но и к команде талантливых
                  специалистов, способных понять и реализовать вашу уникальную
                  бизнес-идею. Мы предлагаем индивидуальный подход, гибкость в
                  реализации проектов и постоянное стремление к инновациям. Наш
                  опыт и знания в области ИИ гарантируют, что ваш проект будет
                  выполнен на высочайшем уровне, с учетом всех современных
                  трендов и технологий.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedSection;
