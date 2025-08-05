//SearchModal.js

//재료를 검색할 수 있는 modal 입니다
//ingredient와 item 모두를 검색합니다
//id 중복을 방지하기 위해 ingredient는 id+100을 하여 저장됩니다
//검색된 요소를 클릭했을 때 처리할 함수를 설정할 수 있습니다
//withItem에 {itemId, imageUrl, description} 이 전달됩니다

import Modal from "./Modal";
import { useState } from "react";
import Item from "./Item";
import apiClient from "../common/apiClient";
import { createPopup } from "./Popup";

const SearchModal = ({ isOpen, onClose, withItem }) => {
    //search
    const [searchString, setSearchString] = useState('');

    //searchItem: {id, name, description}
    const [searchItems, setSearchItems] = useState([]);

    const searchItem = async () => {
        //item과 ingredient를 검색해서 SearchItems에 넣습니다. 
        try{
            let searchResult = await apiClient.get(`/item/search?name=${searchString}`);
            if (!searchResult.ok){
                createPopup(`검색 실패: ${searchResult.message}`);
                return;
            }
            const items = searchResult.data;

            searchResult = await apiClient.get(`/ingredient/search?name=${searchString}`);
            if (!searchResult.ok){
                createPopup(`검색 실패: ${searchResult.message}`);
                return;
            }
            const ingredients = searchResult.data;
            ingredients.forEach(item => {
                item.id += 100;
            });

            const searchedItems = items.concat(ingredients);

            setSearchItems(searchedItems);
        }
        catch(err){
            console.error("검색 실패: ", err);
            createPopup('알 수 없는 에러가 발생했습니다. ')
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div id="search">
                <input 
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    placeholder="술의 이름으로 검색하세요"
                    id="search-input"
                />
                <button id="search-button" onClick={searchItem}>검색</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                {searchItems.map(
                    item => (<Item key={item.id} itemId={item.id} imageUrl={item.image} description={item.name} _onClick={withItem}/>)
                )}
            </div>
        </Modal>
    );
};

export default SearchModal;