import React from "react";
import { Link } from "react-router-dom";
import style from "./Thumb.module.css";

function Thumb(props) {
  return (
    <div className={style.blockCard}>
      <Link to={`/FicheLogement/${props.cardId}`}>
        <img
          src={props.cardImg}
          alt={props.cardTitre}
          className={style.imgCard}
        />
        <h1 className={style.titreCard}>{props.cardTitre}</h1>
      </Link>
    </div>
  );
}

export default Thumb;
