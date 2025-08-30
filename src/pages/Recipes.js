//Recipe.js

import React from "react";
import './Recipes.css';
import RecipeContainer from "../components/RecipeContainer";

function Recipes(){

    return (
        <div id="recipes">
            <RecipeContainer headLine={'인기 레시피'} dis={'Highball Maniac의 최고 인기 레시피를 만나보세요'}/>
            <RecipeContainer headLine={'새로운 레시피'} dis={'가장 빠르게 새롭게 추가된 레시피를 만나보세요'}/>
            <RecipeContainer headLine={'랜덤 레시피'} dis={'새로운 레시피를 발견하세요'}/>
        </div>
    );
}

export default Recipes;