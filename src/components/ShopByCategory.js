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
        <div className="ShopByCat__CatContainer">
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--herbsandoils">
            <h3 className="CatLink">Herbs and Essential Oils</h3>
          </div>
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--candles">
            <h3 className="CatLink">Candles</h3>
          </div>
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--crystalsrunes">
            <h3 className="CatLink">Crystals and Runes</h3>
          </div>
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--tarot">
            <h3 className="CatLink">Tarot</h3>
          </div>
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--books">
            <h3 className="CatLink">Books</h3>
          </div>
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--altar">
            <h3 className="CatLink">Altars and Tools</h3>
          </div>
          <div className="ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--misc">
            <h3 className="CatLink">Miscellaneous</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopByCategory;
