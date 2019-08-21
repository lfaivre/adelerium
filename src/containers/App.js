import React from "react";
import Bar from "../components/Bar";
import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <LeftLanding />
        <RightLanding />
      </div>
    );
  }
}

export default App;
