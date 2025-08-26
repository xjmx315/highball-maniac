//RecipeContainer.js

import React, {useEffect, useState} from 'react';
import apiClient from '../common/apiClient';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import './RecipeContainer.css';

const makeCard = (recipeData, navigate) => {
    const defaultImage = "https://wimg.heraldcorp.com/content/default/2015/03/12/20150312001242_0.jpg";
    //필수 항목 검사
    console.log(recipeData);
    const { name, image, id } = recipeData;
    if (!name || !id) {
        return (<h1>ERR!</h1>);
    }

    const redirectFun = () => {
        navigate(`/recipe/${id}`);
    }

    return (
        <Card imageUrl={image || defaultImage} description={name} _onClick={redirectFun}/>
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
                setRecipes(res.data.map(value => makeCard(value, navigate)));
            }
        });
    }, [apiURL, navigate]);

    return (
        <div className="recipe-container">
            <div className="recipe-content">
                <h1>{headLine}</h1>
                <p>{dis}</p>
            </div>
            <div className="recipe-content">
                {recipes}
            </div>
        </div>
    );
}

export default RecipeContainer;