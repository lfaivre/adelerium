import React from "react";
import "../styles/RightLanding.css";

class RightLanding extends React.Component {
  render() {
    return (
      <div className="rightlanding col-12 col-lg-6">
        <div className="pages fs-m">
          <button>Websites</button>
          <button>Design Portfolio</button>
          <button>Contact</button>
          <button>Resume</button>
        </div>
      </div>
    );
  }
}

export default RightLanding;
