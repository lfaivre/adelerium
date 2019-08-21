import React from "react";
import "../styles/Contact.css";
import BackButton from "../components/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };
  render() {
    return (
      <div className="contact col-12 col-lg-6 animated fadeIn delay-0.75s">
        <div className="contact-links">
          <a
            href="https://github.com/lfaivre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="6x" />
          </a>
          <a
            href="https://www.linkedin.com/in/lorenzofaivre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="6x" />
          </a>
          <a
            href="mailto:lorenzofaivre@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="6x" />
          </a>
        </div>
        <BackButton handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Contact;
