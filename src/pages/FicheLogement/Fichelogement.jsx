import Carrousel from "../../components/Carrousel/Carrousel";
import imgAppart from "../../datas/logement.json";

function FicheLogement() {
  return (
    <div>
      {imgAppart.map((logement, index) => {
        return <Carrousel key={index} logementPictures={logement.pictures} />;
      })}
    </div>
  );
}
export default FicheLogement;
