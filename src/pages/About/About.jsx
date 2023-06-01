import "./About.module.css";
import Collapse from "../../components/Collapse/Collapse";
import datasAbout from "../../datas/aboutthat.json";

function About() {
  const myAbout = datasAbout[1];
  return (
    <div>
      <Collapse about={myAbout} />
    </div>
  );
}

export default About;
