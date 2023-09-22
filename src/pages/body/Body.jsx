import React, { useEffect } from "react";
import MyName from "../../components/bodyInfo/MyName";
import Skills from "../../components/skills/Skills";
import Reviews from "../../components/reviews/Reviews";
import Aos from "aos";
import "aos/dist/aos.css";

const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <MyName />
      <Skills />
      <div data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
        <Reviews />
      </div>
    </>
  );
};

export default Body;
