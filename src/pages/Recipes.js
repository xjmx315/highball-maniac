//Recipe.js

import React from "react";
import './Recipes.css';

function Recipes(){
    return (
        <div id="recipes">
            <h1>인기 레시피</h1>
            <p>Highball Maniac의 최고 인기 레시피를 만나보세요</p>
            
            <h1>새로운 레시피</h1>
            <p>가장 빠르게 새롭게 추가된 레시피를 만나보세요</p>

            <h1>랜덤 레시피</h1>
            <p>새로운 레시피를 발견하세요</p>
        </div>
    );
}

export default Recipes;