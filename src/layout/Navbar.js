//Navbar.js

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../common/UserContext';

import './Navbar.css'

function Navbar() {
  const { isLoggedIn, logout } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <h1 id='logo' onClick={() => {navigate('/')}}>Highball Maniac</h1>
      <ul>
        <li><NavLink exact to="/discover" activeClassName="active">검색</NavLink></li>
        <li><NavLink to="/recipe" activeClassName="active">레시피</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
      </ul>
      <div class="nav-login">
        {isLoggedIn ? (
          <>
            <NavLink to="/user_info" className="login-btn">내 페이지</NavLink>
            <button onClick={() => {logout(); navigate('/login');}} className="login-btn">로그아웃</button>
          </>
        ) : (
          <>
          <NavLink to="/login" className="login-btn">로그인</NavLink>
          <NavLink to="/join" className="login-btn">회원가입</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;