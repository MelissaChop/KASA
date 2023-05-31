import "../styles/Banner.css"
import imgBanner from "../assets/banner.png"


function Banner (){
    return( <div className="homePage">
    <img src={imgBanner} alt="Rochets" className="imgR" />
    <p className="texteInImage">Chez vous, partout et ailleurs</p>
    </div>
    )
}

export default Banner