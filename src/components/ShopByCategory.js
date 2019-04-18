import React, { Component } from "react";

class ShopByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ShopByCat__Container">
        <h2 className="ShopByCat__Headline">Shop by Category</h2>
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--herbsandoils" />
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--candles" />
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--crystalsrunes" />
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--tarot" />
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--books" />
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--altar" />
        <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--misc" />
      </div>
    );
  }
}

export default ShopByCategory;
