import React, { useState } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  function openModalRegister() {
    setOpenModal(true);
    setModalRegister(true);
  }

  function openModalLogin() {
    setOpenModal(true);
    setModalLogin(true);
  }
  function closeModal() {
    setOpenModal(false);
    setModalRegister(false);
    setModalLogin(false);
  }

  return (
    <Context.Provider
      value={{
        modalRegister,
        openModalRegister,
        modalLogin,
        openModalLogin,
        openModal,
        setOpenModal,
        closeModal,
        setModalRegister,
        setModalLogin,
        
      }}>
      <div>{children}</div>
    </Context.Provider>
  );
};

export default Provider;
