import logoFooter from "../assets/footer_logo.png"
import "../styles/Footer.css"

function Footer() {
  return <div className="footer">
    <img src={logoFooter} alt="Logo Kasa" className="logoFooter" />
    <p className="textFooter">© 2020 Kasa. All rights reserved</p>;
    </div>
}

export default Footer;
