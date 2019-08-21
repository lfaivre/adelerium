import React from "react";
import "../styles/DesignPortfolio.css";
import Design from "../components/Design";
import BackButton from "../components/BackButton";
import { designs } from "../data/designportfoliodata";

class DesignPortfolio extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };
  render() {
    return (
      <div className="designportfolio col-12 col-lg-6 animated fadeIn delay-0.75s">
        <div className="design-list">
          {designs.map(design => {
            return (
              <Design
                key={design.id}
                name={design.name}
                description={design.description}
                figma={design.figma}
              />
            );
          })}
        </div>
        <BackButton handleClick={this.handleClick} />
      </div>
    );
  }
}

export default DesignPortfolio;
