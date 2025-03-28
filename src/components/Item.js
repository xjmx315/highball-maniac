//Item.js

import React from "react";
import './Item.css'

function Item({ imageUrl, description, _onClick }) {
    return (
      <div className="item-container" onClick={_onClick}>
        <img src={imageUrl} alt={description} className="item-image" />
        <p className="item-description">{description}</p>
      </div>
    );
  }

export default Item;