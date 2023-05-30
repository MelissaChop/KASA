import logoFooter from "../assets/footer_logo.png"
import "../styles/Footer.scss"

function Footer() {
  return <div className="footer">
    <img src={logoFooter} alt="Logo Kasa" className="logo" />
    <p className="textFooter">© 2020 Kasa. All rights reserved</p>;
    </div>
}

export default Footer;
