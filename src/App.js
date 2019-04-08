import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
