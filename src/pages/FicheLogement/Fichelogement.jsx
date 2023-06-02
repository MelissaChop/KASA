import React from "react";
//import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/logement.json";
//import Error404 from "../Error404/Error404";

function FicheLogement() {
  return (
    <div>
      {dataLogement.map((logement, index) => (
        <Carrousel key={index} logementPictures={logement.pictures} />
      ))}
    </div>
  );
}

export default FicheLogement;
