//Item.js

import React from "react";
import Card from './Card';
import './Item.css'

function Item({ itemid }) {
  const getDatabyId = (itemid) => {
    console.log(`[Item] draw with id ${itemid}`);
    if (itemid === 1){
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

  const {imageUrl, description, _onClick} = getDatabyId(itemid);
  return (
    <Card imageUrl={ imageUrl } description={ description } _onClick={ _onClick } />
  );
}

export default Item;