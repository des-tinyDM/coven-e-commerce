import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoryList } from "../ducks/itemsReducer";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let str = this.props.location.pathname.slice(1);

    this.props.getCategoryList(str);
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

const mapStateToProps = state => {
  return {
    categoryList: state.itemsReducer.catList
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCategoryList }
  )(CategoryPage)
);
