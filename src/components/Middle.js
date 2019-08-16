import React from "react";
import Project from "../components/Project";
import "../styles/Middle.css";

class Middle extends React.Component {
  render() {
    return (
      <div className="middle col-lg-12 col-xl-4">
        <Project
          image={"kevaladesign.png"}
          title={"Kevala Design"}
          description={"Website built for freelance business."}
        />
        <Project
          image={"funnyforagirl.png"}
          title={"Funny For a Girl"}
          description={"Website built for senior thesis."}
        />
        <Project
          image={"funnyforagirl.png"}
          title={"Portfolio Website"}
          description={"This website."}
        />
      </div>
    );
  }
}

export default Middle;
