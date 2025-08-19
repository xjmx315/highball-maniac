//SearchModalTag.js

//tag를 검색할 수 있는 modal 입니다
//검색된 요소를 클릭했을 때 처리할 함수를 설정할 수 있습니다
//withTag에 {itemId, imageUrl, description} 이 전달됩니다

import Modal from "./Modal";
import { useState } from "react";
import Tag from "./Tag";
import apiClient from "../common/apiClient";
import { createPopup } from "./Popup";

const SearchModalTag = ({ isOpen, onClose, withTag }) => {
    //search
    const [searchString, setSearchString] = useState('');

    //searchItem: {id, name}
    const [searchTags, setSearchTags] = useState([]);

    const searchTag = async () => {
        //Tag를를 검색해서 SearchItems에 넣습니다. 
        try{
            let searchResult = await apiClient.get(`/tag?name=${searchString}`);
            if (!searchResult.ok){
                createPopup(`검색 실패: ${searchResult.message}`);
                return;
            }
            const tags = searchResult.data;

            setSearchTags(tags);
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
                    placeholder="이름으로 태그를 검색하세요"
                    id="search-input"
                />
                <button id="search-button" onClick={searchTag}>검색</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                {searchTags.map(
                    item => (<Tag key={item.id} tagId={item.id} tagName={item.name} _onClick={withTag}/>)
                )}
            </div>
        </Modal>
    );
};

export default SearchModalTag;