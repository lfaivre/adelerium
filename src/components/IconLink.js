import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/IconLink.css";

const IconLink = props => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={props.icon} size="6x" className="contact-icon" />
    </a>
  );
};

export default IconLink;
