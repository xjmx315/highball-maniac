//Discover.js

/*
    아이탬에 id만 주고, 아이탬에서 id를 api에 호출해서 그림을 그리는 방식이라면
    아이탬을 그릴 때마다 불필요한 api 호출이 발생하지는 않을까?
*/

import React, { useState } from "react";
import Item from "../components/Item";
import Card from "../components/Card";
import './Discover.css';

function Discover(){
    const [items, setItems] = useState([]);

    const testItem = () => {
        return (
            <Item
                itemid="1"
            />
        );
    };

    const addItem = () => {
        setItems([...items, <Item itemid={1} />]);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <Card
                    imageUrl="https://m.hellobaking.com/web/product/big/mamsbaking_1182.jpg"
                    description="바카디 모히또"
                />
                <Card
                    imageUrl="https://spng.pngfind.com/pngs/s/623-6233285_bacardi-oakheart-spiced-rum-1-litre-png-download.png"
                    description="바카디 럼"
                />
                {items}
                <Card 
                    imageUrl="https://cdn-icons-png.flaticon.com/512/10233/10233645.png"
                    description="추가"
                    _onClick={addItem}
                />
            </div>
            <button id="discoverButton">발견!</button>
        </div>
    );
}

export default Discover;