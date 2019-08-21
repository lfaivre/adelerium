import React from "react";
import "../styles/Contact.css";
import IconLink from "../components/IconLink";
import BackButton from "../components/BackButton";
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
          <IconLink link={"https://github.com/lfaivre"} icon={faGithub} />
          <IconLink
            link={"https://www.linkedin.com/in/lorenzofaivre/"}
            icon={faLinkedin}
          />
          <IconLink
            link={"mailto:lorenzofaivre@gmail.com"}
            icon={faPaperPlane}
          />
        </div>
        <BackButton handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Contact;
