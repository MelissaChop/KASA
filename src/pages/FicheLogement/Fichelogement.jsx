import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import style from "./Fichelogement.module.css";
import { useParams } from "react-router-dom";

function FicheLogement() {
  const { id } = useParams();

  const logement = dataLogement.find((logement) => logement.id === id);

  return (
    <div>
      {logement && (
        <div key={logement.id}>
          <Carrousel logementPictures={logement.pictures} />

          <section className={style.infos}>
            <div className={style.information}>
              <h1 className={style.titre}>{logement.title}</h1>
              <h2 className={style.location}>{logement.location}</h2>
              <div>
                {logement.tags.map((tag, index) => (
                  <span key={index} className={style.tag}>
                    {tag}{" "}
                  </span>
                ))}
              </div>
            </div>
            <div className={style.divProprietaire}>
              <aside className={style.proprietaire}>
                <h2 className={style.noms}>{logement.host.name}</h2>
                <img
                  src={logement.host.picture}
                  alt={logement.host.name}
                  className={style.picture}
                />
              </aside>

              <aside>
                <Rating rating={logement.rating} className={style.rating} />
              </aside>
            </div>
          </section>

          <section className={style.collapse}>
            <Collapse
              key={`description`}
              collapseTitle={"Description"}
              collapseContent={logement.description}
            />
            <Collapse
              key={`equipments`}
              collapseTitle={"Équipements"}
              collapseContent={logement.equipments}
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default FicheLogement;
