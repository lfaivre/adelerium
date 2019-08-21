import React from "react";
import "../styles/DesignPortfolio.css";

class DesignPortfolio extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };
  render() {
    return (
      <div className="designportfolio col-12 col-lg-6">
        <h1>Design Portfolio</h1>
        <h1>This is the page for the design portfolio.</h1>
        <button onClick={() => this.handleClick("landing")}>back</button>
      </div>
    );
  }
}

export default DesignPortfolio;
