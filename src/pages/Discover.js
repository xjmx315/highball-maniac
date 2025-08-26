//Discover.js

import Items from "../components/Items";
import useItems from "../components/useItems";
import { createPopup } from "../components/Popup";
import RecipeContainer from "../components/RecipeContainer";
import { useState } from "react";

import './Discover.css';

function Discover(){
    const {items, setItems} = useItems();
    const [searchUrl, setSearchUrl] = useState('');

    const getItemData = () => {
        return items.map(value => value.itemId).join(',');
    };

    const searchRecipes = async () => {
        const searchString = getItemData();
        console.log(searchString);
        setSearchUrl(`/recipe/including/?items=${searchString}`);
    };
    
    return (
        <div>
            <Items selectedItems={items} setSelectedItems={setItems}/>
            <button className="enter-button" id="discoverButton" onClick={searchRecipes}>발견!</button>
            <RecipeContainer headLine={"검색 결과"} dis={""} apiURL={searchUrl}/>
        </div>
    );
}

export default Discover;