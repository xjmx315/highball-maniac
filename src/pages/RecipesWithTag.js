//RecipesWithTag.js

import RecipeContainer from "../components/RecipeContainer";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../common/apiClient";
import { useEffect, useState } from "react";
import './RecipesWithTag.css';

const RecipesWithTag = () => {
    const {tagId} = useParams();
    const [tagName, setTagName] = useState('Loding...');
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get(`/tag/id/${tagId}`).then(
            (data) => {
                if (!data.ok) {
                    navigate(-1);
                    return undefined;
                }
                setTagName(data.data.name);
            }
        );
    }, []);

    return (
        <div className="tag-page">
            <h1>{tagName}</h1>
            <RecipeContainer headLine={tagName} dis={'레시피를 클릭하여 확인하세요'} apiURL={`/tag/recipe/${tagId}`}/>
        </div>
    );
};

export default RecipesWithTag;