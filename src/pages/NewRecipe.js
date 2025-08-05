//NewRecipe.js

import { useRef } from "react";
import useItems from "../components/useItems";
import Items from "../components/Items";
import apiClient from "../common/apiClient";
import { createPopup } from "../components/Popup";

import './NewRecipe.css';

const NewRecipe = () => {
    //Items
    const {items, setItems} = useItems();

    //data input
    const name_placeholder = "칵테일 이름을 입력하세요 ex) 모히또";
    const description_placeholder = "칵테일에 대한 간단한 설명입니다"+
                                "\nex) 라임을 곁들인 달달하고 상큼한 칵테일입니다. ";
    const recipe_placeholder = "당신의 레시피를 세상에 공개하세요!"+
                                "\nex)"+
                                "\n1. 하이볼 글라스에 민트 몇 가지와 설탕 2티스푼을 넣는다. "+
                                "\n2. 라임 주스 20ml를 넣고 민트잎을 섞는다. "+
                                "\n3. 잔에 으깬 얼음을 채운다. "+
                                "\n4. 화이트 럼 45ml를 붓고 소다수를 붓는다. "+
                                "\n5. 민트 잎과 라임 조각으로 장식한다.";
    const alcohol_placeholder = "칵테일의 도수를 알려주세요 ex) 19";

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const recipeRef = useRef(null);
    const alcoholRef = useRef(null);

    //post recipe
    const getRecipeData = () => {
        //데이터 검사
        if (!nameRef.current.value) {
            createPopup('이름이 비어있습니다');
            return false;
        }
        if (!descriptionRef.current.value) {
            createPopup('설명란이 비어있습니다');
            return false;
        }
        if (!recipeRef.current.value) {
            createPopup('레시피가 비어있습니다');
            return false;
        }
        if (!alcoholRef.current.value) {
            createPopup('도수가 비어있습니다');
            return false;
        }
        if (items.length === 0) {
            createPopup('하이볼에 들어가는 적절한 재료를 추가해주세요!');
            return false;
        }

        //ingredients, items 구하기
        const ingredientData = [];
        const itemData = [];

        items.forEach((value) => {
            if (value.itemId > 100) {
                ingredientData.push({...value, id: value.itemId-100});
            }
            else {
                itemData.push({...value, id: value.itemId});
            }
        });

        //데이터 추가
        return {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            recipe: recipeRef.current.value,
            alcohol: alcoholRef.current.value,
            ingredients: ingredientData,
            items: itemData
        }
    };

    const postRecipe = () => {
        //작성된 정보 가져오기
        const recipeData = getRecipeData();
        if (!recipeData) {
            return;
        }
        //console.log(recipeData);
        //주의: ingredient에 id에 접근해야 -100 된 id 있음
        
        //로그인 정보 가져오기
    };

    return (
        <div>
            <h1>새로운 레시피</h1>
            <Items selectedItems={items} setSelectedItems={setItems}/>
            <div>
                <textarea id="name-textarea" ref={nameRef} placeholder={name_placeholder}/>
                <textarea id="description-textarea" ref={descriptionRef} placeholder={description_placeholder}/>
                <textarea id="recipe-textarea" ref={recipeRef} placeholder={recipe_placeholder}/>
                <textarea id="alcohol-textarea" ref={alcoholRef} placeholder={alcohol_placeholder}/>
            </div>
            <button className="enter-button" onClick={postRecipe}>등록</button>
        </div>
    );
};

export default NewRecipe;