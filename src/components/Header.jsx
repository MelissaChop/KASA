import logoHeader from "../assets/header_logo.png"

import "../styles/Header.scss"
 
function Header() {
    return (
        <div className="barre">
            
            <img src={logoHeader} alt="logo" className="logo"/>
       
        
        <nav className="liens">
            <a href="#" className="accueil">Accueil</a>
            <a href="#" className="about">A propos</a>
    </nav>
</div>
    )
}

export default Header