import React from "react";
import { useState } from "react";
import { useRef } from "react";

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);

  const form = useRef();

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
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(
        (result) => {
          setOk(true);
          setMessage("");
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
    <>
      <section className="contactus">
        <div className="contact-wraps">
          <div className="flex-wraps">
            <div className="pagination-wraps fifth">
              <div className="num">05</div>
              <div className="line"></div>
              <div className="num last">05</div>
            </div>
            <div className="contacts-grids">
              <div className="contacts">
                <h2>8 999 226-81-48</h2>
                <h2>maxden.ai.com@gmail.com</h2>
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
              </div>
              <div className="contcts-form-wraps">
                <img
                  src="assets/images/Blue-rectangle.png"
                  alt="Blue-rectangle"
                  className="blue-bg"
                />
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-wrapped">
                    <div className="input-wraps relative">
                      <input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        placeholder="Напишите ваш номер..."
                      />
                      <button
                        className="btn-p "
                        type="submit"
                        disabled={message === "" ? true : false}
                      >
                        Отправить запрос
                      </button>
                      {ok && (
                        <div className="success-div">
                          <p>Ваш запрос отправлен!</p>
                          <img src="/assets/images/tick-success.png" alt="" />
                        </div>
                      )}
                    </div>

                    <div className="check-box-wraps">
                      <input
                        type="checkbox"
                        name="contactcheck"
                        id="contactcheck"
                        className="checkbox"
                      />
                      <label htmlFor="contactcheck">
                        Согласен на обработку персональных данных
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contactus mobile">
        <div className="contact-wraps">
          <div className="flex-wraps">
            <div className="pagination-wraps fifth">
              <div className="num">05</div>
              <div className="line"></div>
              <div className="num last">05</div>
            </div>
            <div className="contacts-grids">
              <div className="contacts">
                <h2>8 999 226-81-48</h2>
                <h2>maxden.ai.com@gmail.com</h2>
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
              </div>
              <div className="contcts-form-wraps">
                <img
                  src="assets/images/Blue-rectangle.png"
                  alt="Blue-rectangle"
                  className="blue-bg"
                />
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-wrapped">
                    <div className="input-wraps relative">
                      <input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        placeholder="Напишите ваш номер..."
                      />
                      <button
                        className="btn-p "
                        type="submit"
                        disabled={message === "" ? true : false}
                      >
                        Отправить запрос
                      </button>
                      {ok && (
                        <div className="success-div">
                          <p>Ваш запрос отправлен!</p>
                          <img src="/assets/images/tick-success.png" alt="" />
                        </div>
                      )}
                    </div>

                    <div className="check-box-wraps">
                      <input
                        type="checkbox"
                        name="contactcheck"
                        id="contactcheck"
                        className="checkbox"
                      />
                      <label htmlFor="contactcheck">
                        Согласен на обработку персональных данных
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
