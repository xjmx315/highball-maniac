//ItemHook.js

//item을 유저가 직접 검색하여 추가할 수 있는 인터페이스. 

import { useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    return {items, setItems};
};

export default useItems;