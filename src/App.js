import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";
import Header from "./components/Header";
import ShopByCategory from "./components/ShopByCategory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ShopByCategory />
      </div>
    );
  }
}

export default App;
