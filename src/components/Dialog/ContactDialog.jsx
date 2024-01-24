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
            <h3>8 981 884-09-55</h3>
            <h4>maxden.ai@gmail.com</h4>
          </div>
          <div className="btns-wraps">
            <a href="" className="btn-bdr">
              <img src="assets/images/telegram.png" alt="telegram" />
              Написать в Телеграм
            </a>
            <a href="" className="btn-bdr">
              <img src="assets/images/whatsapp.png" alt="whatsapp" />
              Написать в Ватсап
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDialog;
