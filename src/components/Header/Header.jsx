import logoHeader from "../../assets/header_logo.png";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={style.barre}>
      <img src={logoHeader} alt="logo" className={style.LogoHeader} />

      <NavLink
        to="/"
        className={`${style.accueil} ${
          activeLink === "accueil" ? style.active : ""
        }`}
        onClick={() => handleLinkClick("accueil")}>
        Accueil
      </NavLink>
      <NavLink
        to="/About"
        className={`${style.about} ${
          activeLink === "about" ? style.active : ""
        }`}
        onClick={() => handleLinkClick("about")}>
        A propos
      </NavLink>
    </nav>
  );
}

export default Header;
