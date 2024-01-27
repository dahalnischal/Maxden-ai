import React from "react";

const QuestionDialog = ({ setQuestion }) => {
  return (
    <section className="popups">
      <div className="contact-popup">
        <div className="popup-wrap">
          <div className="cross" onClick={() => setQuestion(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <h2>Свяжитесь с нами</h2>
          <div>
            <h3>8 981 884-09-55</h3>
            <h4>maxden.ai@gmail.com</h4>
          </div>
          <div className="text-area-wraps">
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="Сообщение"
            ></textarea>
            <button className="btn-p" type="submit">
              Отправить вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionDialog;
