import React from "react";
import "./Bar.css";

class Bar extends React.Component {
  render() {
    return (
      <div className="bar-container">
        <div className="bar-lines">
          <hr />
          <hr />
        </div>
        <div className="bar-buttons">
          <button className="bar-buttons-selected" />
          <button />
        </div>
      </div>
    );
  }
}

export default Bar;
