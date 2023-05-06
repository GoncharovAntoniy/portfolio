import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
