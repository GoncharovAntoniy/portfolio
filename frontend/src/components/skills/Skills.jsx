import React from "react";
import s from "./Skills.module.css";
import hardSkills from "../../Data/hardskills";
import softSkills from "../../Data/softSkills";
import HardSkills from "./hard/HardSkills";
import SoftSkills from "./soft/SoftSkills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={s.skills}>
      <h1 className={s.title}>Skills</h1>
      <h2>Hard Skills</h2>
      <div  className={s.skills_item}>
        {hardSkills.map((item) => (<div 
        key={item.id} 
        data-aos='zoom-out' 
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <HardSkills skill={item.title} />
        </div>
        ))}
      </div>

      <h2>Soft Skills</h2>
      <div  className={s.skills_item}>
        {softSkills.map((item) => (<div data-aos='fade-up' data-aos-duration="2500" key={item.id}>
          <SoftSkills skill={item.title} />
        </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
