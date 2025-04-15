//Popup.js

/*
2025-04-10

---요약:
popupProvider로 팝업을 그려줍니다. 
팝업이 필요하면 createPopup으로 팝업을 만듭니다. 
2초 뒤에 팝업은 자동으로 사라집니다. 

---생명주기:
createPopup으로 popups를 수정하게 됩니다. 
수정과 동시에 popupUpdate 이벤트가 발생하여 popupState 상태가 popups로 업데이트 됩니다. 
이후 popup이 랜더링 됩니다. 2초 후 id를 기반으로 삭제 함수가 호출됩니다. 
삭제 함수에서는 popups에서 팝업을 삭제하고 다시 이벤트를 발생시켜 popups와 popupState를 동기화 합니다. 

---사용법:
App.js와 같은 최상위 컴포넌트에 popupProvider를 넣으세요. 
팝업을 띄우고자 하는 컴포넌트에서 createPopup을 이용해서 팝업을 만드세요. 
popupUpdate 이벤트를 통해 popupProvider가 업데이트 됩니다. 
*/

import React, {useEffect, useState} from 'react';

import './Popup.css';

//전역 팝업 데이터
const popups = [];

//팝업 관리 함수
const createPopup = (message) => {
    const id = Date.now();
    popups.push({id, message});
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('popupUpdate'));
    }
};

const removePopup = (id) => {
    const index = popups.findIndex((popup) => popup.id === id);
    if (index !== -1){
        popups.splice(index, 1);
        window.dispatchEvent(new Event('popupUpdate'));
    }
};

//팝업 인스턴스
const Popup = ({ message, id }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            removePopup(id);
        }, 2000);
        
        return () => { clearTimeout(timer) };
    }, [id]);

    return (
        <div className='popup'>
            {message}
        </div>
    );
};

//팝업 제공자
const PopupProvider = () => {
    const [popupState, setPopupState] = useState([...popups]);
    
    useEffect(() => {
        const updatePopupState = () => {
            setPopupState([...popups]);
        };
        window.addEventListener('popupUpdate', updatePopupState);
        return () => {
            window.removeEventListener('popupUpdate', updatePopupState);
        };
    }, []);

    return (
        <>
            {popupState.map((popup) => (
                <Popup
                    key={popup.id}
                    id={popup.id}
                    message={popup.message}
                />
            ))}
        </>
    );
};

export {createPopup ,PopupProvider};