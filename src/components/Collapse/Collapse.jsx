import style from "./Collapse.module.css";
import flecheBas from "../../assets/Bas.png";
import React, { useState } from "react";

function Collapse(props) {
  const [aboutState, setAboutState] = useState(false);
  const toggleState = () => {
    setAboutState(!aboutState);
    console.log(aboutState);
  };

  return (
    <div className={style.Container}>
      <div className={style.Titre} onClick={toggleState}>
        <p>{props.collapseTitle}</p>
        <img src={flecheBas} alt="flecheBas" />
      </div>
      <div>{props.collapseContent}</div>
    </div>
  );
}

export default Collapse;
