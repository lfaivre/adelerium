import React from "react";
import Bar from "./Bar";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
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
