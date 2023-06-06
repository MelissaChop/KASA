import React from "react";
import starCouleur from "../../assets/StartCouleur.png";
import starBlanc from "../../assets/StartBlanc.png";
import style from "./Rating.module.css";

function Rating({ rating }) {
  const fullStarCouleur = Array(5).fill(
    <img src={starCouleur} alt="starCouleur" />
  );
  const fullStarBlanc = Array(5).fill(<img src={starBlanc} alt="starBlanc" />);

  return (
    <div className={style.rating}>
      {fullStarCouleur.slice(0, rating).map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      {fullStarBlanc.slice(0, 5 - rating).map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;
