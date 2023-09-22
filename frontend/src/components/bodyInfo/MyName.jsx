import s from "./MyName.module.css";
import img from "../../image/Abstract.png";
import { Transition } from "react-transition-group";
import { useState } from "react";
const MyName = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div className={s.info}>
      <Transition in={loader}>
        {(state) => (
          <img src={img} alt="img" className={`${s.image} ${state}`} />
        )}
      </Transition>
      <div className={s.infoTitle}>
      <p className={s.title}>Привет, меня зовут Антоний </p>
       
        <button className={s.button_animate} onClick={() => setLoader(!loader)}>
          {loader ? "Останови анимацию" : "Запусти анимацию"}
        </button>
        <p className={s.subtitle}>Я frontend developer</p>
      </div>
    </div>
  );
};

export default MyName;
