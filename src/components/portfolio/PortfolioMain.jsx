import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
// import ContactDialog from "../Dialog/ContactDialog";
import ContactDialog from "../Dialog/ContactDialog";
const PortfolioMain = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="portfolio-main">
      <div className="main-wraps">
        <div className="heading">
          <h1>проекты</h1>
          <p>
            20+ успешных проектов в области чат-ботов и ИИ. Наши партнеры это
            различные компании от стартапов до корпоративных гигантов
          </p>
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
          position={"center"}
        >
          <ContactDialog setVisible={setVisible} />
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioMain;
