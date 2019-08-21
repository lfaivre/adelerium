import React from "react";
import "../styles/Websites.css";

class Websites extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };
  render() {
    return (
      <div className="websites col-12 col-lg-6">
        <h1>Websites</h1>
        <h1>This is the page for the websites.</h1>
        <button onClick={() => this.handleClick("landing")}>back</button>
      </div>
    );
  }
}

export default Websites;
