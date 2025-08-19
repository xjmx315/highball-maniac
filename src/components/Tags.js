//Tags.js

//Tag를 유저가 검색하여 추가/삭제할 수 있는 인터페이스. 
//selectItems에 {tagId, name} 객체 배열이 저장됩니다

import SearchModalTag from "./SearchModalTag";
import Tag from "./Tag";
import useModal from "./useModal";
import { createPopup } from "./Popup";

const Tags = ({selectedTags, setSelectedTags}) => {
    const {isModalOpen, openModal, closeModal} = useModal();

    const addTag = (tagData) => {
        setSelectedTags((prevItems) => {
            //중복 검사
            for (let i = 0; i < prevItems.length; i++){
                if (tagData.tagId === prevItems[i].tagId){
                    createPopup('이미 추가된 항목입니다');
                    return prevItems;
                }
            }
            return [...prevItems, tagData];
        });
    };

    const removeTag = (tagData) => {
        setSelectedTags((prevItems) => {
            return prevItems.filter((value) => {
                if (value.tagId === tagData.tagId){
                    return false;
                }
                return true;
            });
        });
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                {
                    selectedTags.map(
                        item => (<Tag key={item.tagId} tagId={item.tagId} tagName={item.tagName} _onClick={removeTag}/>))
                }
                <Tag tagId={0} tagName={'+태그 추가'} _onClick={openModal} />
            </div>
            <SearchModalTag isOpen={isModalOpen} onClose={closeModal} withTag={addTag}/>
        </div>
    );
};

export default Tags;