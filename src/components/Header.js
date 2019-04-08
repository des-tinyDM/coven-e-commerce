import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <div className="Header__Bar">
          <h1 className="Header__Logo">COVEN</h1>
          <nav className="Header__Navigation">
            <p>About</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Join the Coven</p>
            <p>Sign In</p>
          </nav>
        </div>
        <div className="Header__Hero" />
      </div>
    );
  }
}

export default Header;
