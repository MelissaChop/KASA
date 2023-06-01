//import style from "./Thumb.module.css"
import React from "react";

function Thumb(props) {
  return (
    <div>
      <img src={props.cardImg} alt={props.cardTitre} />
      <h1>{props.cardTitre}</h1>
    </div>
  );
}
export default Thumb;
