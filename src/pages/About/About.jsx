import React from "react";
import "./About.module.css";
import Collapse from "../../components/Collapse/Collapse";
import datasAbout from "../../datas/aboutthat.json";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/aboutBanner.png";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <Banner imgBanner={imgBanner} />
      {datasAbout.map((about, index) => {
        return (
          <Collapse
            key={index}
            collapseTitle={about.title}
            collapseContent={about.content}
          />
        );
      })}
    </div>
  );
}

export default About;
