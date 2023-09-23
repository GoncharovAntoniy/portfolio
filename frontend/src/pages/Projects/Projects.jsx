import s from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import gitRepo from "../../image/gitReposvg.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState();

  async function get_project() {
    await axios
      .get("http://127.0.0.1:8000/api/v1/portfolio/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    get_project();
  }, []);

  const layout = projects ? projects.filter((item) => item.cat == 1) : [];
  const frontend = projects ? projects.filter((item) => item.cat == 2) : [];
  const backend = projects ? projects.filter((item) => item.cat == 3) : [];
  const fullstack = projects ? projects.filter((item) => item.cat == 4) : [];
  
  return (
    <div className={s.projects}>
      
      {layout.length !== 0 && <h3 className={s.title}>Верстка</h3>}
      <main className={s.container}>
        {layout &&
          layout.map((item) => (
            <div className={s.portfolio_link}>
              <p className={s.title}>{item.title}</p>
              <Link target="_blank" to={item.link} className={s.link}>
                <img className={s.image} src={item.image} alt="image" />
              </Link>
              <Link to={item.code} target="_blank" className={s.gihub}>
                <img src={gitRepo} alt="icon" /> GitHub repo
              </Link>
            </div>
          ))}
      </main>

     {frontend.length !== 0 && <h3 className={s.title}>Frontend</h3>}

      <main className={s.container}>
        {frontend &&
          frontend.map((item) => (
            <div className={s.portfolio_link}>
              <p className={s.title}>{item.title}</p>
              <Link target="_blank" to={item.link} className={s.link}>
                <img className={s.image} src={item.image} alt="image" />
              </Link>
              <Link to={item.code} target="_blank" className={s.gihub}>
                <img src={gitRepo} alt="icon" /> GitHub repo
              </Link>
            </div>
          ))}
      </main>
      {fullstack.length !== 0 && <h3 className={s.title}>Fullstack</h3> }

      <main className={s.container}>
        {fullstack &&
          fullstack.map((item) => (
            <div className={s.portfolio_link}>
              <p className={s.title}>{item.title}</p>
              <Link target="_blank" to={item.link} className={s.link}>
                <img className={s.image} src={item.image} alt="image" />
              </Link>
              <Link to={item.code} target="_blank" className={s.gihub}>
                <img src={gitRepo} alt="icon" /> GitHub repo
              </Link>
            </div>
          ))}
      </main>
      {backend.length !== 0 && <h3 className={s.title}>Backend</h3>}

      <main className={s.container}>
        {backend &&
          backend.map((item) => (
            <div className={s.portfolio_link}>
              <p className={s.title}>{item.title}</p>
              <Link target="_blank" to={item.link} className={s.link}>
                <img className={s.image} src={item.image} alt="image" />
              </Link>
              <Link to={item.code} target="_blank" className={s.gihub}>
                <img src={gitRepo} alt="icon" /> GitHub repo
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
};

export default Projects;
