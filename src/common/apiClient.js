//apiClient.js

import { createPopup } from '../components/Popup';

const API_URL = "http://localhost:4000/api";


const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        createPopup('서버가 응답하지 않습니다. ');
    }
    return response.json();
};

const get = (path) => {
    return fetch(`${API_URL}${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(handleResponse);
};

const post = (path, data) => {
    return fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(handleResponse);
};

export default {
    get
};