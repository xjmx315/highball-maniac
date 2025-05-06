//UserInfo.js
import { useState, useEffect } from "react";

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

const UserInfo = ({ userName }) => {
    const [userName, setUserName] = useState(userName);

    useEffect(() => {
        console.log('this is userinfo effect');

        if (checkToken()) {
            setUserName(userName);
        }
        else {
            navigator('/login');
        }
    }, [userName]);

    return (
        <div>
            <h1>{userName}</h1>
            <p>skskskssksk</p>
        </div>
    );
};

export default UserInfo;