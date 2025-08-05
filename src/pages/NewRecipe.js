//NewRecipe.js

import useItems from "../components/useItems";
import Items from "../components/Items";

const NewRecipe = () => {
    //Items
    const {items, setItems} = useItems();
    
    const recipe_placeholder = "당신의 레시피를 세상에 공개하세요!";

    return (
        <div>
            <h1>새로운 레시피</h1>
            <Items selectedItems={items} setSelectedItems={setItems}/>
            <textarea placeholder={recipe_placeholder}></textarea>
            <button>등록</button>
        </div>
    );
};

export default NewRecipe;