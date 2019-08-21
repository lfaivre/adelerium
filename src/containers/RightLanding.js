import React from "react";
import "../styles/RightLanding.css";

class RightLanding extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };

  render() {
    return (
      <div className="rightlanding col-12 col-lg-6">
        <div className="pages fs-m">
          <button onClick={() => this.handleClick("websites")}>Websites</button>
          <button onClick={() => this.handleClick("designportfolio")}>
            Design Portfolio
          </button>
          <button onClick={() => this.handleClick("contact")}>Contact</button>
          <a
            href="https://drive.google.com/open?id=1JCtGwoZ23SlnotcTwyJvNuEViggbXbUf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
}

export default RightLanding;
