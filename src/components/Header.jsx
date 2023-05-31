import logoHeader from "../assets/header_logo.png"
import { NavLink } from "react-router-dom";
import "../styles/Header.css"
 
function Header() {
    return (
        <nav className="barre">
            
            <img src={logoHeader} alt="logo" className="LogoHeader"/>
       
            <NavLink to="/" className="accueil">Accueil</NavLink>
            <NavLink to="/About" className="about">A propos</NavLink>

</nav>
    )
}

export default Header