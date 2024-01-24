import React from "react";

const ContactSection = () => {
  return (
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
              <h2>8 981 884-09-55</h2>
              <h2>maxden.ai@gmail.com</h2>
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
            <div className="contcts-form-wraps">
              <img
                src="assets/images/Blue-rectangle.png"
                alt="Blue-rectangle"
                className="blue-bg"
              />
              <form
                action="
                        "
              >
                <div className="form-wrapped">
                  <div className="input-wraps">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Напишите ваш номер..."
                    />
                    <button className="btn-p">Отправить запрос</button>
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
  );
};

export default ContactSection;
