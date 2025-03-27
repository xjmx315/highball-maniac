//Discover.js

import React from "react";
import Item from "../components/Item";
import './Discover.css';

function Discover(){
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Item
                imageUrl="https://m.hellobaking.com/web/product/big/mamsbaking_1182.jpg"
                description="바카디 모히또"
            />
            <Item
                imageUrl="https://spng.pngfind.com/pngs/s/623-6233285_bacardi-oakheart-spiced-rum-1-litre-png-download.png"
                description="바카디 럼"
            />
        </div>
    );
}

export default Discover;