//Discover.js

import React, { useState } from "react";
import Item from "../components/Item";
import './Discover.css';

function Discover(){
    const [items, setItems] = useState([]);

    const testItem = () => {
        return (
            <Item
                imageUrl="https://m.hellobaking.com/web/product/big/mamsbaking_1182.jpg"
                description="바카디 모히또"
            />
        );
    };

    const addItem = () => {
        setItems([...items, testItem()]);
    };

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
            {items}
            <Item 
                imageUrl="https://cdn-icons-png.flaticon.com/512/10233/10233645.png"
                description="추가"
                _onClick={addItem}
            />
        </div>
    );
}

export default Discover;