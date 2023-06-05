import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import style from "./Fichelogement.module.css";
import { useParams } from "react-router-dom";

function FicheLogement() {
  const paramId = useParams();

  const logement = dataLogement.find((logement) => logement.id === paramId.id);

  const {
    pictures,
    id,
    title,
    location,
    host,
    equipments,
    description,
    rating,
  } = logement;

  return (
    <div>
      <div key={id}>
        <Carrousel logementPictures={pictures} />

        <section className={style.infos}>
          <div className={style.information}>
            <h1 className={style.titre}>{title}</h1>
            <h2 className={style.location}>{location}</h2>
            <p>{logement.tags}</p>
          </div>

          <aside className={style.proprietaire}>
            <h2 className={style.noms}>{host.name}</h2>
            <img src={host.picture} alt={host.name} className={style.picture} />
          </aside>

          <aside>
            <Rating rating={rating} />
          </aside>
        </section>

        <section className={style.collapse}>
          <Collapse
            key={`description_${id}`}
            collapseTitle={"Description"}
            collapseContent={description}
          />
          <Collapse
            key={`equipments_${id}`}
            collapseTitle={"Équipements"}
            collapseContent={equipments}
          />
        </section>
      </div>
    </div>
  );
}

export default FicheLogement;
