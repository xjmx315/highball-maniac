//Discover.js

import React, { use, useState } from "react";
import Item from "../components/Item";
import Card from "../components/Card";
import Modal from "../components/Modal";
import {createPopup} from "../components/Popup";

import './Discover.css';

function Discover(){
    //Item
    const [items, setItems] = useState([]);

    const removeItem = (itemData) => {
        setItems((prevItems) => {
            return prevItems.filter((value) => {
                if (value.props.itemId === itemData.itemId){
                    return false;
                }
                return true;
            });
        });
    };

    const addItem = (itemData) => {
        console.log("addItem with:", itemData);
        setItems((prevItems) => {
            //중복 검사
            //console.log("items: ", prevItems);
            for (let i = 0; i < prevItems.length; i++){
                if (itemData.itemId === prevItems[i].props.itemId){
                    createPopup('이미 추가된 항목입니다');
                    return prevItems;
                }
            }
            return [...prevItems, <Item itemId={itemData.itemId} imageUrl={itemData.imageUrl} description={itemData.description} _onClick={removeItem}/>];
        });
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
            const searchedItems = searchResult.map((item) => {
                return <Item itemId={item.id} imageUrl={item.image} description={item.name} _onClick={addItem}/>;
            });
            //console.log(searchedItems);
            setSearchItems(searchedItems);
        }
        catch(err){
            console.error("검색 실패: ", err);
            createPopup('검색할 수 없습니다. 검색 서버가 응답하지 않습니다. ')
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
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