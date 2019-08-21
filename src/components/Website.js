import React from "react";
import "../styles/Website.css";

const Website = props => {
  return (
    <div className="website">
      <p className="pink fs-m website-name">{props.name}</p>
      <p className="slate fs-s website-description">{props.description}</p>
      <a
        href={props.hosted}
        target="_blank"
        rel="noopener noreferrer"
        className="slate"
      >
        Hosted
      </a>
      <span> | </span>
      <a
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
        className="slate"
      >
        GitHub
      </a>
    </div>
  );
};

export default Website;
