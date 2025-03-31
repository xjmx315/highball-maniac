//Card.js

import React from "react";
import './Card.css'

function Card({ imageUrl, description, _onClick }) {
    return (
      <div className="card-container" onClick={_onClick}>
        <img src={imageUrl} alt={description} className="card-image" />
        <p className="card-description">{description}</p>
      </div>
    );
}

export default Card;