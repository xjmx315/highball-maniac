//UserInfo.js
import { useState, useEffect } from "react";
import apiClient from "../common/apiClient";

const checkToken = async () => {
    const token = localStorage.getItem('token');
    
    const res = await fetch('http://localhost:4000/api/user/TokenCheck', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    });

    if (res.ok) {
        return await res.json();
    }
    else {
        return false;
    }
}

const getUserInfo = async (userName) => {
    console.log("get userinfo with:", userName);
    const res = await apiClient.get(`/user?name=${userName}`);
    if (!res) {
        return undefined
    }
    console.log(res);
    return res;
}

const UserInfo = ({ userName }) => {
    console.log("make user info with:", userName);
    const [userNameState, setUserName] = useState("Loding");
    const [userCreatedAt, setUserCreatedAt] = useState("");

    useEffect(() => {
        console.log('this is userinfo effect');

        const userData = getUserInfo(userName);
        userData.then((res) => {
            console.log("userData Get:", res);
            if (res){
                setUserName(res.userName);
                setUserCreatedAt(res.created_at);
            }
            else {
                setUserName("User not found");
                setUserCreatedAt("");
            }
        });
    }, [userNameState, userCreatedAt]);

    return (
        <div>
            <h1>{userNameState}</h1>
            <p>{userCreatedAt}</p>
        </div>
    );
};

export default UserInfo;