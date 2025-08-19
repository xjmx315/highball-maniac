//RecipeContainer.js

import React, {useEffect, useState} from 'react';
import apiClient from '../common/apiClient';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import './RecipeContainer.css';

const makeCard = (recipeData, navigate) => {
    //필수 항목 검사
    const { name, image, id } = recipeData;
    if (!name || !image || !id) {
        return (<h1>ERR!</h1>);
    }

    const redirectFun = () => {
        navigate(`/recipe/?name=${name}`);
    }

    return (
        <Card imageUrl={image} description={name} _onClick={redirectFun}/>
    );
};

const RecipeContainer = ({ headLine, dis, apiURL }) => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!apiURL) {
            return undefined;
        }
        const data = apiClient.get(apiURL);
        data.then((res) => {
            if (!res.ok) {
                console.log('recipeContainer API 호출 실패:', res.message);
            }
            else {
                setRecipes(res.data.recipes.map((value) => {
                    makeCard(value, navigate);
                }));
            }
        });
    }, [recipes]);

    return (
        <div className="recipe-container">
            <h1>{headLine}</h1>
            <p>{dis}</p>
            <div className="recipe-card-container">
                {recipes}
            </div>
        </div>
    );
}

export default RecipeContainer;