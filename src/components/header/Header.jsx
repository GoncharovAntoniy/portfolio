import { useState } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";



const Header = () => {

  const active = ({isActive}) => isActive ? `${s.activeLink} ${s.link}` : `${s.link}`

  const [menu, setMenu] = useState(false);

  const toggleBurger = () => {
    setMenu(!menu);
  };

  return (
    <div className={s.header}>
      <h2 className={s.logo}>	&#127891; Freelancer portfolio</h2>
      <div className={s.container}>
        <nav className={s.navbar}>
          <div className={s.burgerBtn} onClick={toggleBurger}>
            <span className={s.span} />
          </div>
        </nav>
        <ul
          className={
            menu ? `${s.navbar_menu} ${s.active}` : `${s.navbar_menu}`
          }>
          <li className={s.navbar_link}>
            <NavLink className={({isActive})=> isActive ? `${s.activeLink}` : `${s.navlink}`} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.navbar_link}>
            
            <NavLink className={({isActive})=> isActive ? `${s.activeLink}` : `${s.navlink}`} to="/projects">
              Projects
            </NavLink>
          </li>
          <li className={s.navbar_link}>
            <NavLink className={({isActive})=> isActive ? `${s.activeLink}` : `${s.navlink}`} to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/projects" className={active}>
          Projects
        </NavLink>
        <NavLink to="/contacts" className={active}>
          Contacts
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
