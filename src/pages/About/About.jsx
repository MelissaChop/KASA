import React from "react";
import "./About.module.css";
import Collapse from "../../components/Collapse/Collapse";
import datasAbout from "../../datas/aboutthat.json";

function About() {
  return (
    <div>
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
