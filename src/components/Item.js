//Item.js

import React from "react";
import './Item.css'

function Item({ imageUrl, description }) {
    return (
      <div className="item-container">
        <img src={imageUrl} alt={description} className="item-image" />
        <p className="item-description">{description}</p>
      </div>
    );
  }

export default Item;