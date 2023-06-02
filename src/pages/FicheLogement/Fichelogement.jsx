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
          <div>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <p>{logement.tags}</p>
          </div>

          <aside>
            <h2>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </aside>

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
