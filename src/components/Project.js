import React from "react";
import "../styles/Project.css";

class Project extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Project;
