import style from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={style.homePage}>
      <img src={props.imgBanner} alt={props.alt} className={style.imgBanner} />
      <p className={style.texteBanner}>{props.texteBanner}</p>
    </div>
  );
}

export default Banner;
