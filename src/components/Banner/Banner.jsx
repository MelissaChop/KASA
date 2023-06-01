import "./Banner.module.css";

function Banner(props) {
  return (
    <div className="homePage">
      <img src={props.imgBanner} alt={props.alt} className="imgBanner" />
      <p className="texteBanner">{props.texteBanner}</p>
    </div>
  );
}

export default Banner;
//Chez vous, partout et ailleurs
