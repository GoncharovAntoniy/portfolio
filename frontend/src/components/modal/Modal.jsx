import React, { useContext, useEffect, useState } from "react";
import s from "./Modal.module.css";
import Context from "../../Context";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { url_login, url_register } from "../../urls";
import { Transition } from "react-transition-group";

const Modal = () => {
  // Переменные из контекста для модалки
  const {
    modalRegister,
    modalLogin,
    openModal,
    closeModal,
    setModalRegister,
    setModalLogin,
  } = useContext(Context);

  //   Переменные с заголовками для едементов модалки
  let title = "";
  let submit_btn = "";

  if (modalLogin) {
    title = "Вход";
    submit_btn = "Войти";
  }
  if (modalRegister) {
    title = "Регистрация";
    submit_btn = "Зарегестрироваться";
  }

  //   стейты для инпутов
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repasswordValue, setRepasswordValue] = useState("");

  //   переменные с данными для отправки формы
  const data_register = {
    username: nameValue,
    email: emailValue,
    password: passwordValue,
    repassword: repasswordValue,
  };

  const data_login = {
    username: nameValue,
    password: passwordValue,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //   функция отправки
  async function authorisation_form(event) {
    event.preventDefault();
    if (modalRegister) {
      await axios
        .post(url_register, data_register, config)
        .then((response) => {
          console.log("Успешная регистрация: ", response.data);
        })
        .catch((err) => console.error("Ошибка регистрации: ", err));
      setModalRegister(false);
      setModalLogin(true);
    } else {
      await axios
        .post(url_login, data_login)
        .then((response) => {
          const token = response.data.auth_token;
          localStorage.setItem("token", token);
        })
        .catch((err) => console.error("Ошибка авторизации: ", err));
      closeModal();
    }
  }

  return (
    <Transition in={openModal} timeout={0}>
      {(state) => (
        <div
        className={s.modal}
          {...(state === "exited" && { className: `${s.modal} ${s.exiting}` })}
          
          {...(state === "entered" && {
            className: `${s.modal} ${s.active_modal} ${s.entered}`,
          })}
          >
          <form
            onSubmit={(event) => authorisation_form(event)}
            className={openModal ? `${s.form_authorisation}` : `${s.form_authorisation} ${s.animation_class}`}>
            <AiFillCloseCircle className={s.close_btn} onClick={closeModal} />
            <p className={s.title_form}>{title}</p>

            <label className={s.label_input}>
              Полное имя
              <input
                value={nameValue}
                onChange={(event) => setNameValue(event.target.value)}
                className={`${s.input_name} ${s.input_authorisation}`}
                type="text"
                placeholder="Введите имя и фамилию"
              />
            </label>

            <label className={s.label_input}>
              Email
              <input
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
                className={`${s.input_email} ${s.input_authorisation}`}
                type="email"
                placeholder="Введите email"
              />
            </label>
            <label className={s.label_input}>
              Пароль
              <input
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
                className={`${s.input_password} ${s.input_authorisation}`}
                type="password"
                placeholder="Введите пароль"
              />
            </label>
            {modalRegister && (
              <label className={s.label_input}>
                Повторите пароль
                <input
                  value={repasswordValue}
                  onChange={(event) => setRepasswordValue(event.target.value)}
                  className={`${s.input_repassword} ${s.input_authorisation}`}
                  type="password"
                  placeholder="Повторите пароль"
                />
              </label>
            )}

            <button type="submit" className={s.form_authorisation_submit}>
              {submit_btn}
            </button>
          </form>
        </div>
      )}
    </Transition>
  );
};

export default Modal;
