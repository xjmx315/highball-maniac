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
        createPopup(error.message);
        return undefined;
    }
    return response.json();
};

const handleError = (error) => {
    console.error(error);
    createPopup('서버가 응답하지 않습니다.');
    return undefined;
};

const get = async (path, ...options) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    options.forEach((option) => {
        if (option === "Authorization") {
            headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        }
    })

    return fetch(`${API_URL}${path}`, {
        method: 'GET',
        headers
    }).then(handleResponse)
    .catch(handleError);
};

const post = async (path, body) => {
    return fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body
    }).then(handleResponse)
    .catch(handleError);
};

export default {
    get,
    post,
};