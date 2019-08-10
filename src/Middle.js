import React from "react";
import "./Middle.css";

class Middle extends React.Component {
  render() {
    return (
      <div className="middle col-4">
        <p>Projects</p>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.seekpng.com/png/detail/79-798744_groundhog-clipart-kawaii-pusheen-the-cat-2018-wall.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Kevala Design</h5>
            <p className="card-text">Website built for freelance business.</p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.seekpng.com/png/detail/79-798744_groundhog-clipart-kawaii-pusheen-the-cat-2018-wall.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Funny for a Girl</h5>
            <p className="card-text">Website built for a comedy show.</p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.seekpng.com/png/detail/79-798744_groundhog-clipart-kawaii-pusheen-the-cat-2018-wall.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Figma Projects</h5>
            <p className="card-text">Website prototypes.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Middle;
