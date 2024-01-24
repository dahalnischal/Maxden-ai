import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="main">
      <img src="assets/images/hand.png" alt="hand" className="hand" />
      <div className="main-wraps">
        <a href="#sec-3" className="down-arrow">
          <img src="assets/images/down-arrow.svg" alt="arrow" />
        </a>
        <img src="assets/images/ball 1.png" alt="ball" className="ball1" />
        <img src="assets/images/ball 2.png" alt="ball" className="ball2" />
        <img src="assets/images/ball 3.png" alt="ball" className="ball3" />
        <img src="assets/images/ball 4.png" alt="ball" className="ball4" />
        <div className="main-topic">
          <span>замени офисного работника на</span>
          <h1>искусственный интеллект</h1>
        </div>
        <div className="main-content-wraps">
          <div className="pagination-wraps">
            <div className="num">01</div>
            <div className="line" />
            <div className="num last">05</div>
          </div>
          <div className="main-content">
            <p>
              Разработаем систему с искусственным интеллектом индивидуально для
              вашего бизнеса. Автоматизируем процессы, увеличим продажи, повысим
              эффективность.
            </p>
            <div className="btn-p" onClick={() => setVisible(true)}>
              <span>Обсудить проект</span>
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
      </div>
    </section>
  );
};

export default HeroSection;
