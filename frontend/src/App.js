import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Body from "./pages/body/Body";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/contacts/Contacts";
import { CSSTransition, Transition } from "react-transition-group";
import { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";

function App() {

    const [prop1, setProp1] = useState(false)
    const [prop2, setProp2] = useState(false)
    const [prop3, setProp3] = useState(false)

    const location = useLocation()
    useEffect(() => {
      location.pathname == '/' ? setProp1(true) : setProp1(false)
      location.pathname == '/projects' ? setProp2(true) : setProp2(false)
      location.pathname == '/contacts' ? setProp3(true) : setProp3(false)
    }, [location])



  return (
      <div className="App">
        <Modal />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <CSSTransition classNames="page" timeout={1000} unmountOnExit in={prop1}>
                <Body />
              </CSSTransition>
            }
          />

          <Route
            path="/projects"
            element={
              <CSSTransition classNames="page" timeout={1000} unmountOnExit in={prop2} >
                <Projects />
              </CSSTransition>
            }
          />
          <Route
            path="/contacts"
            element={
              <CSSTransition classNames="page" timeout={1000} unmountOnExit in={prop3} >
                <Contacts />
              </CSSTransition>
            }
          />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
