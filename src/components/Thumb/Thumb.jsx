//import style from "./Thumb.module.css"
import React from "react";
import { Link } from "react-router-dom";

function Thumb(props) {
  return (
    <Link to={`/FicheLogement/id`}>
      <img src={props.cardImg} alt={props.cardTitre} />
      <h1>{props.cardTitre}</h1>
    </Link>
  );
}
export default Thumb;
