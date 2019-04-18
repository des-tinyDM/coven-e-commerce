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
            <p>Classes</p>
            <p>Calendar</p>
            <p>Blog</p>
            <p>Join the Coven</p>
            <p>Sign In</p>
          </nav>
        </div>
        <div className="Header__Hero">
          <div className="Header__Hero--text">
            <h2>Welcome to The Coven</h2>
            <p>
              It's more than a shop. It's a movement. Join a workshop, explore
              new crafts, or shop our products. There's something here for
              everyone.
            </p>
            <button>Shop our quality products</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
