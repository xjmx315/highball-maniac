//SearchUser.js

import apiClient from "../common/apiClient";
import { createPopup } from "../components/Popup";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchUser () {
    const [searchString, setSearchString] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const placeholder = "검색하고 싶은 유저의 이름을 입력하세요. "

    const search = async () => {
        const result = await apiClient.get(`/user/search/${searchString}`);
        if (!result.ok) {
            createPopup("유저 검색에 실패했습니다. ");
            console.log(result);
            return ;
        }
        setUsers(result.data);
    };

    return (
        <div>
            <div id="search">
                <input 
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    placeholder={placeholder}
                    id="search-input"
                />
                <button id="search-button" onClick={search}>검색</button>
            </div>
            <div id="users-container">
                {users.map(item => <h3 className="clickable" onClick={() => {navigate(`/user_info/${item.name}`)}} >{item.name}</h3>)}
            </div>
        </div>
    );
};

export default SearchUser;