import React from "react";
import "../styles/Bar.css";

class Bar extends React.Component {
  render() {
    return (
      <div className="bar-container fixed-top">
        <div className="bar-lines">
          <hr />
          <hr />
        </div>
      </div>
    );
  }
}

export default Bar;
