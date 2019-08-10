import React from "react";
import "./Left.css";

class Left extends React.Component {
  render() {
    return (
      <div className="left col-4">
        <div>
          <p className="slate">Hello, I'm Lorenzo</p>
          <p>Software Engineering</p>
          <p>Website Development</p>
          <p>Design</p>
        </div>
        <div>
          <p className="slate">Profiles</p>
          <p>LinkedIn</p>
          <p>GitHub</p>
        </div>
        <div>
          <p className="slate">Contact</p>
          <p>lorenzo.faivre@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Left;
