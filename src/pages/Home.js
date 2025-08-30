//Home.js

import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home () {
    const navigate = useNavigate();

    return (
        <div id="home">
            <h1>Highball Maniac의 주요 기능</h1>
            <div className="round-box">
                <h1 className="clickable" onClick={() => {navigate('/discover')}}>포함된 재료로 칵테일 레시피 찾기</h1>
                <p>내가 가진 재료로 만들 수 있는 레시피를 검색해보세요. </p>
                <p>재료를 추가하고 검색을 누르면 해당 재료로 만들 수 있는 레시피 목록이 검색됩니다. </p>
            </div>
            <div className="round-box">
                <h1 className="clickable">태그로 검색하는 칵테일 레시피</h1>
                <p>다양한 기준으로 분류된 칵테일들을 취향에 맞게 찾아보세요. </p>
                <p>레시피의 태그를 클릭해도 해당 태그를 가진 레시피를 확인할 수 있습니다. </p>
            </div>
            <div className="round-box">
                <h1 className="clickable">사용자로 검색하는 칵테일 레시피</h1>
                <p>유명 유튜버, 바텐더의 레시피를 한눈에 확인하세요. </p>
                <p>해당 유저의 프로필에 접속해서 확인할 수 있습니다. </p>
            </div>
            <h1>로그인해서 아래 기능을 이용해보세요</h1>
            <div className="round-box">
                <h1 className="clickable" onClick={() => {navigate('/new_recipe')}}>칵테일 레시피 업로드</h1>
                <p>나만의 레시피를 업로드하여 공개하세요. </p>
                <p>업로드된 레시피는 누구나 검색할 수 있습니다. </p>
            </div>
            <div className="round-box">
                <h1>내가 가진 재료 보관</h1>
                <p>로그인하면 내가 가진 재료가 보관됩니다! </p>
                <p>다음 로그인시 재료를 다시 추가하지 않아도 됩니다. </p>
            </div>
        </div>
    );
};

export default Home;