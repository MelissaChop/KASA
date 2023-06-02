import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating"; // Ajout de l'importation du composant Rating

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

          <aside>
            <Rating rating={logement.rating} />
          </aside>

          <section>
            <Collapse
              key={index}
              collapseTitle={"Description"}
              collapseContent={logement.description}
            />
            <Collapse
              key={index}
              collapseTitle={"Équipements"}
              collapseContent={logement.equipments}
            />
          </section>
        </div>
      ))}
    </div>
  );
}

export default FicheLogement;
