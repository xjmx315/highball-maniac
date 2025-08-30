//TagSearch.js

import apiClient from "../common/apiClient";
import { createPopup } from "../components/Popup";
import Tag from "../components/Tag";
import "./TagSearch.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TagSearch () {
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const apiResult = apiClient.get('/tag/all');
        apiResult.then((res) => {
            if (!res.ok) {
                createPopup("태그 목록을 가져올 수 없습니다. ");
                console.log(res);
                return ;
            }
            setTags(res.data);
            return ;
        });
    }, []);

    return (
        <div>
            <h1>태그를 클릭해서 레시피를 확인하세요</h1>
            <div className="tag-container">
                {
                    tags.map(item => <Tag key={item.id} tagName={item.name} tagId={item.id} _onClick={() => {navigate(`/tag/${item.id}`)}}/>)
                }
            </div>
        </div>
    );
};

export default TagSearch;