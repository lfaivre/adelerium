import React from "react";
import "../styles/RightLanding.css";
const RESUMELINK =
  "https://drive.google.com/file/d/1jxgsBxnaDxW-MswrFDNiAVERGi9dHxXD/view?usp=sharing";

class RightLanding extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };

  render() {
    let delay;
    if (this.props.initial && window.innerWidth > 960) {
      delay = "rightlanding col-12 col-lg-6 animated fadeInUp delay-1s";
    } else {
      delay = "rightlanding col-12 col-lg-6 animated fadeIn delay-0.75s";
    }
    return (
      <div className={delay}>
        <div className="pages fs-m">
          <button onClick={() => this.handleClick("websites")}>Websites</button>
          <button onClick={() => this.handleClick("designportfolio")}>
            Design Portfolio
          </button>
          <button onClick={() => this.handleClick("contact")}>Contact</button>
          <a href={RESUMELINK} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    );
  }
}

export default RightLanding;
