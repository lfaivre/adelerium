import React from "react";
import Bar from "../components/Bar";
import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding";
import Websites from "./Websites";
import DesignPortfolio from "./DesignPortfolio";
import Contact from "./Contact";
import "animate.css";
import "../styles/App.css";

class App extends React.Component {
  state = { right: "landing", initial: true };

  changeView = e => {
    if (this.state.initial === false) {
      this.setState({ right: e });
    } else {
      this.setState({ initial: false }, () => {
        this.setState({ right: e });
      });
    }
  };

  render() {
    let right;

    if (this.state.right === "landing") {
      right = (
        <RightLanding
          changeView={this.changeView}
          initial={this.state.initial}
        />
      );
    } else if (this.state.right === "websites") {
      right = <Websites changeView={this.changeView} />;
    } else if (this.state.right === "designportfolio") {
      right = <DesignPortfolio changeView={this.changeView} />;
    } else if (this.state.right === "contact") {
      right = <Contact changeView={this.changeView} />;
    }

    return (
      <div className="row">
        <Bar />
        <LeftLanding />
        {right}
      </div>
    );
  }
}

export default App;
