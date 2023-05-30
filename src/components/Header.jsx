import imgK from "../assets/VectorK.png"
import img from "../assets/Vector.png"
import imgS from "../assets/VectorS.png"
import imgA from "../assets/VectorA.png"
import "../styles/Header.scss"
 
function Header() {
    return (
        <div className="barre">
            <div className="LogoKasa">
            <img src={imgK} alt="K" className="K"/>
            <img src={img} alt="Maison" className="autreLettre"/>
            <img src={imgS} alt="S" className="autreLettre"/>
            <img src={imgA} alt="A" className="autreLettre"/>
            </div>
        <nav className="liens">
            <a href="#" className="accueil">Accueil</a>
            <a href="#" className="about">A propos</a>
    </nav>
</div>
    )
}

export default Header