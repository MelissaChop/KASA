import logoHeader from "../assets/header_logo.png"
import { Link } from "react-router-dom";
import "../styles/Header.css"
 
function Header() {
    return (
        <div className="barre">
            
            <img src={logoHeader} alt="logo" className="LogoHeader"/>
       
            <Link to="/" className="accueil">Accueil</Link>
            <Link to="/About" className="about">A propos</Link>

</div>
    )
}

export default Header