import React from "react";
//import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/logement.json";
//import Error404 from "../Error404/Error404";
import Collapse from "../../components/Collapse/Collapse";

function FicheLogement() {
  return (
    <div>
      {dataLogement.map((logement, index) => (
        <div key={index}>
          <Carrousel logementPictures={logement.pictures} />
          <Collapse
            key={index}
            collapseTitle={"Description"}
            collapseContent={logement.description}
          />
        </div>
      ))}
    </div>
  );
}

export default FicheLogement;
