import React from "react";
import Bar from "../components/Bar";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="bar">
          <Bar />
        </div>
        <div className="row">
          <Left />
          <Middle />
          <Right />
        </div>
      </div>
    );
  }
}

export default App;
