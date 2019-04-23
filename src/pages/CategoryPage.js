import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let pageTitle;
    if (this.props.location.pathname) {
      let str = this.props.location.pathname.slice(1);

      pageTitle = str;
    } else {
      pageTitle = "Unknown";
    }
    console.log(this.props);
    return (
      <div className="CategoryPage">
        <h2 className="CategoryPage__title Title">{pageTitle}</h2>
      </div>
    );
  }
}

export default withRouter(CategoryPage);
