import React, { Component } from "react";
import Header from "../components/Header";
import ShopByCategory from "../components/ShopByCategory";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Page Page__Landing">
        <ShopByCategory />
      </div>
    );
  }
}

export default LandingPage;
