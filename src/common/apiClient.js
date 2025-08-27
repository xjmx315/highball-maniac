//apiClient.js

/*
api 호출 담당. 
응답 예시:
{
  "ok" : false, 
  "code" : 401, 
  "message" : "아이디 또는 비밀번호가 올바르지 않습니다. ",
  "data" : {}
}

fetch 실패시:
{
  "ok" : false, 
  "code" : 0, 
  "message" : "서버가 응답하지 않거나 알 수 없는 에러가 발생했습니다. ",
  "data" : {}
}
*/

//const API_URL = "http://localhost:4000/api";
const API_URL = "https://highballmaniac.onrender.com/api";

const handleResponse = async (response) => {
    console.log(`receve: ${response}`);
    return response.json();
};

const handleError = (error) => {
    console.error(error);
    return {
        "ok" : false, 
        "code" : 0, 
        "message" : "서버가 응답하지 않거나 알 수 없는 에러가 발생했습니다. ",
        "data" : {}
    };
};

const get = async (path, ...options) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    options.forEach((option) => {
        if (option === "Authorization") {
            headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        }
    });

    return fetch(`${API_URL}${path}`, {
        method: 'GET',
        headers
    }).then(handleResponse)
    .catch(handleError);
};

const post = async (path, body, ...options) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    options.forEach((option) => {
        if (option === "Authorization") {
            headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        }
    });

    return fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers,
        body
    }).then(handleResponse)
    .catch(handleError);
};

export default {
    get,
    post
};