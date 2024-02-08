import React, { useRef, useState } from "react";

const QuestionDialog = ({ setQuestion }) => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    var data = {
      service_id: "service_q2hbldr",
      template_id: "template_k5nej1f",
      user_id: "FXm_a6p5WDKDDnxeI",
      template_params: {
        message: message,
      },
    };
    try {
      setOk(false);
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(
        (result) => {
          setOk(true);
        },
        (error) => {
          setOk(false);
        }
      );
      setTimeout(() => {
        setOk(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="popups">
      <div className="contact-popup">
        <div className="popup-wrap">
          <div className="cross" onClick={() => setQuestion(false)}>
            <img src="assets/images/Burger.png" alt="cross" />
          </div>
          <h2>Свяжитесь с нами</h2>
          <div>
            <h3>8 999 226-81-48</h3>
            <a href="mailto:maxden.ai.com@gmail.com" target="_blank">
              <h4>maxden.ai.com@gmail.com</h4>
            </a>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-area-wraps">
              <textarea
                name=""
                id=""
                cols="1"
                rows="1"
                placeholder="Сообщение"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <button className="btn-p relative" type="submit">
                Отправить вопрос
                {ok && (
                  <div className="success-div">
                    <p>Ваш запрос отправлен!</p>
                    <img src="/assets/images/tick-success.png" alt="" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuestionDialog;
