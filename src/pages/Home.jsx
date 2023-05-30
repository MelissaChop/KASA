import Banner from "../assets/banner.png"
import "../styles/Home.scss"

function Home(){
return <div className="homePage">
    <img src={Banner} alt="Rochets" className="imgR"/>
    <p className="texteInImage">Chez vous, partout et ailleurs</p>
    
</div>
}

export default Home