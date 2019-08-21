import React from "react";
import "../styles/BackButton.css";

class BackButton extends React.Component {
  handleClick = e => {
    this.props.handleClick(e);
  };

  render() {
    return (
      <div className="backbutton">
        <button
          onClick={() => this.handleClick("landing")}
          className="animated pulse"
        />
      </div>
    );
  }
}

export default BackButton;
