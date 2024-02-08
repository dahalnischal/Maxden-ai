import React from "react";

const ContactDialog = ({ setVisible }) => {
  return (
    <section className="popups">
      <div className="contact-popup">
        <div className="popup-wrap">
          <div className="cross" onClick={() => setVisible(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <h2>Свяжитесь с нами</h2>
          <div>
            <h3>8 999 226-81-48</h3>

            <a href="mailto:maxden.ai.com@gmail.com" target="_blank">
              <h4>maxden.ai.com@gmail.com</h4>
            </a>
          </div>
          <div className="btns-wraps">
            <a
              href="https://t.me/cucer_maxim"
              target="_blank"
              className="btn-bdr"
            >
              <img
                src="assets/images/telegram.png"
                className="brdr-btm-image"
                alt="telegram"
              />
              Написать в Телеграм
            </a>
            <a
              target="_blank"
              href="https://wa.me/79992268148"
              className="btn-bdr"
            >
              <img
                src="assets/images/whatsapp.png"
                className="brdr-btm-image"
                alt="whatsapp"
              />
              Написать в Ватсап
            </a>
          </div>
          <div className="mbl-close-button">
            <div className="btn-p" onClick={() => setVisible(false)}>
              <span>Вернуться на сайт</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDialog;
