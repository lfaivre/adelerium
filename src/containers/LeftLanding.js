import React from "react";
import "../styles/LeftLanding.css";

class LeftLanding extends React.Component {
  render() {
    return (
      <div className="leftlanding col-12 col-lg-6">
        <div className="introduction">
          <p className="white fs-m">Hello, I'm Lorenzo</p>
          <p className="pink fs-m">
            Website Developer, Software Engineer, Designer, Co-Founder
          </p>
        </div>
      </div>
    );
  }
}

export default LeftLanding;
