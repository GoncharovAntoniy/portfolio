import React from "react";
import s from "./Skills.module.css";
import hardSkills from "../../Data/hardskills";
import softSkills from "../../Data/softSkills";
import HardSkills from "./hard/HardSkills";
import SoftSkills from "./soft/SoftSkills";

const Skills = () => {
  return (
    <div className={s.skills}>
      <h1 className={s.title}>Skills</h1>
      <h2>Hard Skills</h2>
      <div className={s.skills_item}>
        {hardSkills.map((item) => (
          <HardSkills skill={item} />
        ))}
      </div>

      <h2>Soft Skills</h2>
      <div className={s.skills_item}>
        {softSkills.map((item) => (
          <SoftSkills skill={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
