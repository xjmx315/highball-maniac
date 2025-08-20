//Recipe.js

import { useEffect, useState } from "react";
import apiClient from "../common/apiClient";
import { useParams, useNavigate } from "react-router-dom";
import Tag from "../components/Tag";

const Recipe = () => {
    const {recipeId} = useParams();

    const navigate = useNavigate();
    const [recipeData, setRecipeData] = useState({});
    const defaultImage = "https://wimg.heraldcorp.com/content/default/2015/03/12/20150312001242_0.jpg";

    useEffect(() => {
        apiClient.get(`/recipe/${recipeId}`).then((data) => {
            if (!data.ok) {
                navigate(-1);
                console.log(data);
                return undefined;
            }
            setRecipeData(data.data);
        });
    }, []);

    const gotoTag = ({tagId}) => {
        navigate(`/tag/${tagId}`);
    };

    if (Object.keys(recipeData).length === 0) { 
        return (
            <h1>Load feild</h1>
        );
    };
    console.log(recipeData);

    return (
        <div className="recipe-full-page">
            <div className="recipe-head-container">
                <img className="recipe-image" src={recipeData.image || defaultImage}/>
                <div className="recipe-name-discription-container">
                    <h1 className="recipe-name">{recipeData.name}</h1>
                    <p className="recipe-alcohol">{`${recipeData.alcohol_percentage}% ALC`}</p>
                    <p className="recipe-discription">{recipeData.description}</p>
                </div>
            </div>
            <p className="recipe-content">{recipeData.recipe}</p>
            <div className="recipe-tags">
                {
                    recipeData.tags.map(
                        item => (<Tag key={item.id} tagId={item.id} tagName={item.name} _onClick={gotoTag}/>))
                }
            </div>
        </div>
    );
};

export default Recipe;