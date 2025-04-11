//Item.js

import React from "react";
import Card from './Card';
import './Item.css'

function Item({ itemId, imageUrl, description, _onClick }) {
  const ItemData = {
    itemId: itemId,
    imageUrl: imageUrl,
    description: description,
  }

  const getDatabyId = (itemId) => {
    console.log(`[Item] draw with id ${itemId}`);
    if (itemId === 1){
      return {
        imageUrl: "https://spng.pngfind.com/pngs/s/623-6233285_bacardi-oakheart-spiced-rum-1-litre-png-download.png",
        description: "바카디 럼"
      };
    }
    return {
      imageUrl: "https://m.hellobaking.com/web/product/big/mamsbaking_1182.jpg",
      description: "바카디 모히또"
    };
  }

  if (!ItemData.imageUrl){
    const {imageUrl, description} = getDatabyId(ItemData.itemId);
    ItemData.imageUrl = imageUrl;
    ItemData.description = description;
  }

  return (
    <div className="item" onClick={ () => {if (_onClick) _onClick(ItemData)} }>
      <Card imageUrl={ ItemData.imageUrl } description={ ItemData.description } />
    </div>
  );
}

export default Item;