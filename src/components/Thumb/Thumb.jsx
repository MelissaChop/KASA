import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Thumb.module.css";
import data from "../../datas/logement.json";

function Thumb(props) {
  const { id } = useParams();

  const logement = data.find((logement) => logement.id === id);
  console.log(id);
  return (
    <div className={style.blockCard}>
      <Link to={`/FicheLogement/${logement}`}>
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
