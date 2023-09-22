import s from "./Portfolio.module.css";
import { dataPortfolio } from "../../Data/dataPortfolio";
import { Link } from "react-router-dom";
import gitRepo from '../../image/gitReposvg.svg'

const Projects = () => {
  return (
    <main className={s.container}>
      {dataPortfolio.map((item) => (
        <div className={s.portfolio_link}>
          
          <Link target="_blank" to={item.link} className={s.link}>
            <img className={s.image} src={item.image} alt="image" />
          </Link>
          <Link to={item.git} target="_blank" className={s.gihub}><img src={gitRepo} alt="icon" /> GitHub repo</Link>
        </div>
      ))}
    </main>
  );
};

export default Projects;
