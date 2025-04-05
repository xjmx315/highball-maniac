//Card.js

import React from "react";
import './Card.css'

function Card({ imageUrl, description, _onClick }) {
  const cardData = {
    imageUrl: imageUrl,
    description: description
  }

  if (!_onClick){
    _onClick = (dummy) => {};
  }

  return (
    <div className="card-container" onClick={() => _onClick(cardData)}>
      <img src={imageUrl} alt={description} className="card-image" />
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;