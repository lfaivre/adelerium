import React from "react";
import Bar from "../components/Bar";
import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding";
import Websites from "./Websites";
import DesignPortfolio from "./DesignPortfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import "../styles/App.css";

class App extends React.Component {
  state = { right: "landing" };

  changeView = e => {
    this.setState({ right: e }, () => {
      console.log(this.state.right);
    });
  };

  render() {
    let right;

    if (this.state.right === "landing") {
      right = <RightLanding changeView={this.changeView} />;
    } else if (this.state.right === "websites") {
      right = <Websites changeView={this.changeView} />;
    } else if (this.state.right === "designportfolio") {
      right = <DesignPortfolio changeView={this.changeView} />;
    } else if (this.state.right === "contact") {
      right = <Contact changeView={this.changeView} />;
    } else if (this.state.right === "resume") {
      right = <Resume changeView={this.changeView} />;
    }

    return (
      <div className="row">
        <LeftLanding />
        {right}
      </div>
    );
  }
}

export default App;
