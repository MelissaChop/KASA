import style from "./Tags.module.css";
import Tags from "../../datas/logement.json";

function TagsComponent() {
  return (
    <div className={style.tagContainer}>
      {Tags.map((tags, index) => (
        <span key={index} className={style.tag}>
          {tags}
        </span>
      ))}
    </div>
  );
}

export default TagsComponent;
