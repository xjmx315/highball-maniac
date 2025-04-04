//Discover.js

/*
    아이탬에 id만 주고, 아이탬에서 id를 api에 호출해서 그림을 그리는 방식이라면
    아이탬을 그릴 때마다 불필요한 api 호출이 발생하지는 않을까?
*/

import React, { use, useState } from "react";
import Item from "../components/Item";
import Card from "../components/Card";
import Modal from "../components/Modal";

import './Discover.css';

function Discover(){
    //Item
    const [items, setItems] = useState([]);

    const addItem = (itemId) => {
        setItems([...items, <Item itemid={itemId} />]);
    };

    //Modal
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    //search
    const [searchString, setSearchString] = useState('');
    const [searchItems, setSearchItems] = useState([]);

    const searchItem = async () => {
        try{
            const response = await fetch(`http://localhost:4000/api/item/search?name=${searchString}`);
            const searchResult = await response.json();
            //console.log('searchResult: ', searchResult);
            const items = searchResult.map((item) => {
                return <Card imageUrl={item.image} description={item.name} />;
            });
            //console.log(items);
            setSearchItems(items);
        }
        catch(err){
            console.error("검색 실패: ", err);
        }
        
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
                    _onClick={openModal}
                />
            </div>
            <button id="discoverButton">발견!</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div id="search">
                    <input 
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        placeholder="술의 이름으로 검색하세요"
                        id="search-input"
                    />
                    <button id="search-button" onClick={searchItem}>검색</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>{searchItems}</div>
            </Modal>
        </div>
    );
}

export default Discover;