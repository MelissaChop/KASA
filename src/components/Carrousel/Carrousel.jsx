import React, { useState } from "react";
import style from "./Carrousel.module.css";
import Droite from "../../assets/next.png";
import Gauche from "../../assets/prev.png";

function Carrousel({ logementPictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === logementPictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevImg = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? logementPictures.length - 1 : currentIndex - 1
    );
  };

  return (
    <section
      className={style.section}
      style={{ backgroundImage: `url(${logementPictures[currentIndex]})` }}>
      {logementPictures.length > 1 ? (
        <>
          <div className={style.carrousel}>
            <div className={style.fleche}>
              <img
                className={style.precedenteGauche}
                src={Gauche}
                alt="Précédente"
                onClick={prevImg}
              />
              <img
                className={style.suivanteDroite}
                src={Droite}
                alt="Suivante"
                onClick={nextImg}
              />
            </div>
            <p className={style.number}>
              {currentIndex + 1} / {logementPictures.length}
            </p>
          </div>
        </>
      ) : (
        <img
          className={style.singleImage}
          src={logementPictures[0]}
          alt="Logement"
        />
      )}
    </section>
  );
}

export default Carrousel;
