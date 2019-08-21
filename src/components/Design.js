import React from "react";
import "../styles/Design.css";

const Design = props => {
  return (
    <div className="design">
      <p className="pink fs-m design-name">{props.name}</p>
      <p className="slate fs-s design-description">{props.description}</p>
      <a
        href={props.figma}
        target="_blank"
        rel="noopener noreferrer"
        className="slate"
      >
        View in Figma
      </a>
    </div>
  );
};

export default Design;
