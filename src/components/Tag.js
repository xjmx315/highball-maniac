//Tag.js

//하나의 Tag를 나타내는 컴포넌트 입니다. 
import "./Tag.css"

const Tag = ({tagId, tagName, _onClick}) => {
    const tagData = {
        tagId,
        tagName
    };

    return (
    <div className="tag" onClick={ () => {if (_onClick) _onClick(tagData)} }>
        {tagName}
    </div>
    );
};

export default Tag;