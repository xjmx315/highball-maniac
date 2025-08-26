//Discover.js

import Items from "../components/Items";
import useItems from "../components/useItems";
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
        if (searchString) {
            setSearchUrl(`/recipe/including/?items=${searchString}`);
        }
        else {
            setSearchUrl('');
        }
    };
    
    return (
        <div>
            <Items selectedItems={items} setSelectedItems={setItems}/>
            <button className="enter-button" id="discoverButton" onClick={searchRecipes}>발견!</button>
            {searchUrl && <RecipeContainer headLine={"검색 결과"} dis={""} apiURL={searchUrl}/>}
        </div>
    );
}

export default Discover;