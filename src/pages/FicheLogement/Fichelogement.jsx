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

          <section>
            <Collapse
              key={index}
              collapseTitle={"Description"}
              collapseContent={logement.description}
            />
            <Collapse
              key={index}
              collapseTitle={"equipements"}
              collapseContent={logement.equipments}
            />
          </section>
        </div>
      ))}
    </div>
  );
}

export default FicheLogement;
