import "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/banner.png";
import Thumb from "../../components/Thumb/Thumb";
import Card from "../../datas/logement";

function Home() {
  return (
    <div>
      <Banner
        imgBanner={imgBanner}
        alt="Foret"
        texteBanner={"Chez vous, partout et ailleurs"}
      />
      {Card.map((logement, index) => {
        return (
          <Thumb
            key={index}
            cardTitre={logement.title}
            cardImg={logement.cover}
          />
        );
      })}
    </div>
  );
}

export default Home;
