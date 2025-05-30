//apiClient.js

/*
api 호출 담당. 
실패하면 팝업을 띄우고 undifine을 리턴한다. 
*/

import { createPopup } from '../components/Popup';

const API_URL = "http://localhost:4000/api";

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.log(error);
        createPopup('서버 에러가 발생했습니다. ');
    }
    return response.json();
};

const handleError = (error) => {
    console.error(error);
    createPopup('서버가 응답하지 않습니다.');
};

const get = async (path) => {
    return fetch(`${API_URL}${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(handleResponse)
    .catch(handleError);
};

const post = async (path, data) => {
    return fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(handleResponse)
    .catch(handleError);
};

export default {
    get,
    post,
};