import { useContext, useEffect, useState } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaRegistered } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import Context from "../../Context";
import axios from "axios";
import { url_logout } from "../../urls";
import { RiLogoutCircleFill } from "react-icons/ri";

const Header = () => {
  const active = ({ isActive }) =>
    isActive ? `${s.activeLink} ${s.link}` : `${s.link}`;

  const [menu, setMenu] = useState(false);

  const toggleBurger = () => {
    setMenu(!menu);
  };
  const { openModalRegister, openModalLogin } =
    useContext(Context);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  async function logout() {
    await axios
      .post(url_logout, null, config)
      .then((res) => console.log(res.status))
      .catch((err) => console.error(err));

      localStorage.removeItem('token')
      window.location.reload()
  }

  return (
    <div className={s.header}>
      <h2 className={s.logo}> &#127891; Freelancer portfolio</h2>
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
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navlink}`
              }
              to="/">
              Home
            </NavLink>
          </li>
          <li className={s.navbar_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navlink}`
              }
              to="/projects">
              Projects
            </NavLink>
          </li>
          <li className={s.navbar_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navlink}`
              }
              to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className={s.navbar_right}>
          <div className={s.navbar_right_links}>
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
          <div className={s.authorisations}>
            {token ? (
              <dir className={s.authorisations_loguot} onClick={() => logout()}>
                <RiLogoutCircleFill />
              </dir>
            ) : (
              <>
                <div
                  className={s.authorisations_register}
                  onClick={() => openModalRegister()}>
                  <FaRegistered />
                </div>
                <dir
                  className={s.authorisations_login}
                  onClick={() => openModalLogin()}>
                  <RiLoginCircleLine />
                </dir>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
