import React from "react";
import "../styles/Websites.css";
import Website from "../components/Website";
import BackButton from "../components/BackButton";
import { websites } from "../data/websitedata";

class Websites extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };
  render() {
    return (
      <div className="websites col-12 col-lg-6 animated fadeIn delay-0.75s">
        <div className="website-list">
          {websites.map(website => {
            return (
              <Website
                key={website.id}
                name={website.name}
                description={website.description}
                hosted={website.hosted}
                github={website.github}
              />
            );
          })}
        </div>
        <BackButton handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Websites;
