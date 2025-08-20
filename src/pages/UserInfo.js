//UserInfo.js
import { useState, useEffect } from "react";
import apiClient from "../common/apiClient";
import { createPopup } from "../components/Popup";
import { useParams, useNavigate } from "react-router-dom";
import {useUser} from "../common/UserContext";

const getUserInfo = async (userName) => {
    console.log("get userinfo with:", userName);
    const res = await apiClient.get(`/user?name=${userName}`);
    if (res.ok) {
        return res.data;
    }
    console.log(res);
    return false;
};

const UserInfo = ({isSelfPage}) => {
    const {userName} = useParams();
    const [userNameState, setUserName] = useState("Loding...");
    const [userCreatedAt, setUserCreatedAt] = useState("");

    const navigate = useNavigate();
    const {isLoggedIn, user, checkToken} = useUser();
    checkToken();

    useEffect(() => {
        console.log('this is userinfo effect', isSelfPage, isLoggedIn, user);
        if (isSelfPage) {
            if (isLoggedIn){
                navigate(`/user_info/${user}`);
            }
            else{
                createPopup('로그인 후 이용해 주세요.');
                navigate('/login');
            }
        }

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
    }, [userNameState, userCreatedAt, isSelfPage]);

    return (
        <div>
            <h1>{userNameState}</h1>
            <p>{userCreatedAt}</p>
        </div>
    );
};

export default UserInfo;