//Items.js

//item을 유저가 직접 검색하여 추가할 수 있는 인터페이스. 
//selectItems에 {itemId, imageUrl, description} 객체 배열이 저장됩니다

import Item from "./Item";
import SearchModal from "./SearchModal";
import useModal from "./useModal";
import { createPopup } from "./Popup";
import Card from "./Card";

const Items = ({selectedItems, setSelectedItems}) => {
    const {isModalOpen, openModal, closeModal} = useModal();

    const addItem = (itemData) => {
        console.log('items additem: ',itemData);
        setSelectedItems((prevItems) => {
            //중복 검사
            //console.log("items: ", prevItems);
            for (let i = 0; i < prevItems.length; i++){
                if (itemData.itemId === prevItems[i].itemId){
                    createPopup('이미 추가된 항목입니다');
                    return prevItems;
                }
            }
            return [...prevItems, itemData];
        });
    };

    const removeItem = (itemData) => {
        setSelectedItems((prevItems) => {
            return prevItems.filter((value) => {
                if (value.itemId === itemData.itemId){
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
                    selectedItems.map(
                        item => (<Item key={item.itemId} itemId={item.itemId} imageUrl={item.imageUrl} description={item.description} _onClick={removeItem}/>))
                }
                <Card 
                    imageUrl="https://cdn-icons-png.flaticon.com/512/10233/10233645.png"
                    description="추가"
                    _onClick={openModal}
                />
            </div>
            <SearchModal isOpen={isModalOpen} onClose={closeModal} withItem={addItem}/>
        </div>
    );
};

export default Items;