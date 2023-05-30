import imgK from "../assets/VectorK.png"
import img from "../assets/Vector.png"
import imgS from "../assets/VectorS.png"
import imgA from "../assets/VectorA.png"
import "../styles/Header.scss"
 
function Header() {
    return (
        <div className="barre">
            <div>
            <img src={imgK} alt="K" />
            <img src={img} alt="Maison" />
            <img src={imgS} alt="S" />
            <img src={imgA} alt="" />
            </div>
        <nav className="liens">
            <p className="accueil">Accueil</p>
            <p className="about">A propos</p>
    </nav>
</div>
    )
}

export default Header