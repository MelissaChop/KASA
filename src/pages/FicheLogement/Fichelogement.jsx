import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";

function FicheLogement() {
  return (
    <div>
      {dataLogement.map((logement) => (
        <div key={logement.id}>
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
              key={`description_${logement.id}`}
              collapseTitle={"Description"}
              collapseContent={logement.description}
            />
            <Collapse
              key={`equipments_${logement.id}`}
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
