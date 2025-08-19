//useTags.js

//tag을 유저가 직접 검색하여 추가할 수 있는 인터페이스. 

import { useState } from "react";

const useTags = () => {
    const [tags, setTags] = useState([]);

    return {tags, setTags};
};

export default useTags;