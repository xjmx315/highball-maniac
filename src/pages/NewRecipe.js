//NewRecipe.js

import React from "react";

const NewRecipe = () => {
    const recipe_placeholder = "당신의 레시피를 세상에 공개하세요!";

    return (
        <div>
            <h1>새로운 레시피</h1>
            <textarea placeholder={recipe_placeholder}></textarea>
            <button>등록</button>
        </div>
    );

};

export default NewRecipe;